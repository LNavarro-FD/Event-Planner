/**
 * FD Event Planner — Shared Firebase Module
 * ==========================================
 * VERSION: 2.0.0
 * Single Firebase initialisation used by all modules.
 * Loaded via <script src="fd-firebase.js"></script> before any module script.
 * Exposes: window.FD_DB (Firestore instance)
 */

(function() {
  // Prevent double-initialisation if loaded in multiple iframes
  if (window.FD_DB) return;

  var FB_CONFIG = {
    apiKey:            'AIzaSyCt-MVurfEOcvj_4Q9ndD6dqJrf8hfm4x8',
    authDomain:        'event-planner-7944d.firebaseapp.com',
    projectId:         'event-planner-7944d',
    storageBucket:     'event-planner-7944d.firebasestorage.app',
    messagingSenderId: '455768566205',
    appId:             '1:455768566205:web:c5274d85158e6b2bf8cad4'
  };

  try {
    firebase.initializeApp(FB_CONFIG);
  } catch(e) {
    // Already initialised — get existing app
    firebase.app();
  }

  window.FD_DB = firebase.firestore();

  // ── Firestore helpers ────────────────────────────────────────────────────────

  /**
   * Read a document. Returns data object or null.
   * Usage: FD.get('todos', 'fd7_2026').then(data => ...)
   */
  window.FD = window.FD || {};

  window.FD.get = function(collection, doc) {
    return window.FD_DB.collection(collection).doc(doc).get()
      .then(function(snap) { return snap.exists ? snap.data() : null; })
      .catch(function(e) { console.warn('[FD] get failed:', collection, doc, e); return null; });
  };

  window.FD.set = function(collection, doc, data) {
    return window.FD_DB.collection(collection).doc(doc).set(data)
      .catch(function(e) { console.warn('[FD] set failed:', collection, doc, e); });
  };

  window.FD.update = function(collection, doc, data) {
    return window.FD_DB.collection(collection).doc(doc).update(data)
      .catch(function(e) { console.warn('[FD] update failed:', collection, doc, e); });
  };

  window.FD.getAll = function(collection) {
    return window.FD_DB.collection(collection).get()
      .then(function(snap) {
        var result = {};
        snap.forEach(function(d) { result[d.id] = d.data(); });
        return result;
      })
      .catch(function(e) { console.warn('[FD] getAll failed:', collection, e); return {}; });
  };

  /**
   * Seed a document only if it doesn't exist yet.
   * Usage: FD.seed('todos', 'fd7_2026', defaultData)
   */
  window.FD.seed = function(collection, doc, defaultData) {
    return window.FD_DB.collection(collection).doc(doc).get()
      .then(function(snap) {
        if (!snap.exists) {
          console.log('[FD] Seeding:', collection, doc);
          return window.FD_DB.collection(collection).doc(doc).set(defaultData);
        }
      })
      .catch(function(e) { console.warn('[FD] seed failed:', collection, doc, e); });
  };

  console.log('[FD Firebase] Initialised v2.0.0 — project: event-planner-7944d');
})();
