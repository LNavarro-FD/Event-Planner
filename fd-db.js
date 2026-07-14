/**
 * FD Firestore REST wrapper v1.0.0
 * No CDN, no SDK — uses Firestore REST API via fetch()
 * Works on all browsers including iOS Safari
 */
(function() {
  var PROJECT = 'event-planner-7944d';
  var API = 'https://firestore.googleapis.com/v1/projects/' + PROJECT + '/databases/(default)/documents';

  // Convert JS value to Firestore field format
  function toFS(val) {
    if (val === null || val === undefined) return {nullValue: null};
    if (typeof val === 'boolean') return {booleanValue: val};
    if (typeof val === 'number') return Number.isInteger(val) ? {integerValue: ''+val} : {doubleValue: val};
    if (typeof val === 'string') return {stringValue: val};
    if (Array.isArray(val)) return {arrayValue: {values: val.map(toFS)}};
    if (typeof val === 'object') {
      var f = {};
      Object.keys(val).forEach(function(k){f[k]=toFS(val[k]);});
      return {mapValue: {fields: f}};
    }
    return {stringValue: ''+val};
  }

  // Convert Firestore field format to JS value
  function fromFS(v) {
    if (!v) return null;
    if ('nullValue'     in v) return null;
    if ('booleanValue'  in v) return v.booleanValue;
    if ('integerValue'  in v) return parseInt(v.integerValue, 10);
    if ('doubleValue'   in v) return v.doubleValue;
    if ('stringValue'   in v) return v.stringValue;
    if ('timestampValue'in v) return v.timestampValue;
    if ('arrayValue'    in v) return (v.arrayValue.values||[]).map(fromFS);
    if ('mapValue'      in v) {
      var o={};
      Object.keys(v.mapValue.fields||{}).forEach(function(k){o[k]=fromFS(v.mapValue.fields[k]);});
      return o;
    }
    return null;
  }

  function parseDoc(resp) {
    if (!resp || !resp.fields) return null;
    var o={};
    Object.keys(resp.fields).forEach(function(k){o[k]=fromFS(resp.fields[k]);});
    return o;
  }

  window.FD = {
    // Read one document
    get: function(col, doc) {
      return fetch(API+'/'+col+'/'+doc)
        .then(function(r){return r.ok?r.json():null;})
        .then(parseDoc)
        .catch(function(e){console.warn('[FD] get failed',col,doc,e);return null;});
    },

    // Write (upsert) one document
    set: function(col, doc, data) {
      var fields={};
      Object.keys(data).forEach(function(k){fields[k]=toFS(data[k]);});
      return fetch(API+'/'+col+'/'+doc+'?updateMask.fieldPaths='+Object.keys(data).join('&updateMask.fieldPaths='), {
        method: 'PATCH',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({fields:fields})
      }).catch(function(e){console.warn('[FD] set failed',col,doc,e);});
    },

    // Read all documents in a collection
    getAll: function(col) {
      return fetch(API+'/'+col)
        .then(function(r){return r.ok?r.json():{};})
        .then(function(resp){
          var result={};
          (resp.documents||[]).forEach(function(d){
            result[d.name.split('/').pop()]=parseDoc(d);
          });
          return result;
        })
        .catch(function(e){console.warn('[FD] getAll failed',col,e);return {};});
    },
  };

  console.log('[FD DB] v1.0.0 ready');
})();
