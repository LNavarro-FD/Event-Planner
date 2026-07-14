/**
 * FD Event Planner — Shared Configuration v2.0.0
 * ================================================
 * Single source of truth for all modules.
 * NO hardcoded values anywhere else.
 * Load after fd-firebase.js: <script src="config.js"></script>
 *
 * CHANGELOG
 * 2.0.0 — Full supplier data, event dates, build week config,
 *          budget categories, Firestore collection map
 * 1.0.0 — Initial version
 */

window.FD_CONFIG = {

  version: '2.0.0',

  // ── Firestore collection / document paths ─────────────────────────────────
  db: {
    todos:      { collection: 'todos',     fd7: 'fd7_todo_2026' },
    kanban:     { collection: 'jobs',      fd7: 'fd7_kanban' },
    buildWeek:  { collection: 'buildweek', fd7: 'fd7_2026' },
    venues:     { collection: 'venues' },
    equipment:  { collection: 'equipment', library: 'library' },
    financials: { collection: 'financials' },
    suppliers:  { collection: 'suppliers' },
    staff:      { collection: 'staff' },
    seed:       { collection: 'seed' },
  },

  // ── Events ────────────────────────────────────────────────────────────────
  events: {
    fd7: {
      id:            'fd7',
      name:          'FD Festival 7',
      shortName:     'FD7',
      year:          2026,
      eventDate:     new Date('2026-08-15'),
      eventDateStr:  '2026-08-15',
      displayDate:   'Saturday 15 August 2026',
      eventTimes:    '12pm – 10pm',
      setupDate:     '2026-08-14',
      setupDisplay:  'Friday 14 August 2026',
      venue:         'Ashfields Carriage & Polo Club',
      address:       'Green Street, Great Canfield, Dunmow, Essex',
      postcode:      'CM6 1JU',
      buildWeek: {
        setupDaysBeforeEvent: 6,   // Mon–Fri before Sat event = 6 days back to Mon
        derigDaysAfterEvent:  2,   // Sun + Mon after
      },
      capacityTiers: [1500, 2000, 2500],
    },
    hrr: {
      id:          'hrr',
      name:        'Funky Dory at Henley Royal Regatta',
      shortName:   'HRR',
      year:        2026,
      eventDate:   new Date('2026-07-04'),
      displayDate: 'Saturday 4 July 2026',
      venue:       'Phyllis Court Club',
      address:     'Marlow Road, Henley-on-Thames, Oxfordshire',
      postcode:    'RG9 2HT',
    },
    shindig: {
      id:          'shindig',
      name:        'FD Shindig',
      shortName:   'FD Shindig',
      year:        2026,
      eventDate:   new Date('2026-08-15'),
      displayDate: '15 August 2026',
      venue:       'TBC',
    },
  },

  // ── Team ──────────────────────────────────────────────────────────────────
  team: {
    LN:  { name: 'Louise Navarro',   role: 'Event Manager',    phone: '07832 153489', colour: '#1d4ed8' },
    RC:  { name: 'Rosie Coxshaw',    role: 'Event Director',   phone: '07775 875522', colour: '#7c3aed' },
    RH:  { name: 'Ronnie Herel',     role: 'Artist Liaison',   phone: '07775 875522', colour: '#7c3aed' },
    RAY: { name: 'Ray',              role: 'Logistics',        phone: '',             colour: '#0f766e' },
    SW:  { name: 'Steve West',       role: 'Bar Manager',      phone: '',             colour: '#15803d' },
    PL:  { name: 'Paul Lachman',     role: 'Back Bar Manager', phone: '',             colour: '#0f766e' },
    KARL:{ name: 'Karl',             role: 'Pitch Marking',    phone: '',             colour: '#92400e' },
  },

  // ── Suppliers ─────────────────────────────────────────────────────────────
  suppliers: {

    panacheAudio: {
      id:       'panacheAudio',
      name:     'Panache Audio Systems',
      contact:  'Dave Ong',
      phone:    '01634 720700',
      email:    'sales@panacheaudio.co.uk',
      website:  'www.panacheaudio.co.uk',
      address:  'A5 Spectrum Business Centre, Medway City Estate, Rochester, Kent, ME2 4NP',
      vatNo:    '702959622',
      what:     'Stage, PA, sound, lighting, generator',
      events:   ['fd7'],
      colour:   '#15803d',
      quotes: [{
        ref: 'QU-0763', date: '2026-02-05', expiry: '2026-03-07',
        totalIncVat: 6720.00, totalExVat: 5600.00,
        terms: 'Payment on invoice after event',
        items: [
          { desc: 'HIM20KVA3PH Generator set 2', qty: 1, unit: 300.00 },
          { desc: 'All cabling, cable trap and distribution', qty: 1, unit: 200.00 },
          { desc: 'Delivery transport generator and power products', qty: 1, unit: 200.00 },
          { desc: 'Stage 86, 8m x 6m Mobile Stage System', qty: 1, unit: 1650.00 },
          { desc: 'Out rig system for banners', qty: 2, unit: 100.00 },
          { desc: 'Delivery transport stage, lighting and sound', qty: 1, unit: 250.00 },
          { desc: 'Stage lighting system for 8x6 stage inc smoke machine', qty: 1, unit: 300.00 },
          { desc: 'KV2 double outdoor sound system + control, monitors, mics, gazebo', qty: 1, unit: 1400.00 },
          { desc: 'Technician crew for set up and operation', qty: 3, unit: 250.00 },
          { desc: 'Sound Engineer / Project Manager', qty: 1, unit: 350.00 },
        ]
      }],
    },

    liveWire: {
      id:       'liveWire',
      name:     'Live Wire Event Solutions Ltd',
      phone:    '',
      email:    '',
      address:  '3 Mead Court, Thorpe Way, Banbury, OX16 4RZ',
      what:     'Full PA, staging, crew, transport',
      events:   ['hrr'],
      colour:   '#0369a1',
      quotes: [{
        ref: '4148', date: '2026-06-30', totalIncVat: 4675.20, totalExVat: 3896.00,
      }],
    },

    whitesSound: {
      id:       'whitesSound',
      name:     "White's Sound And Lighting",
      phone:    '01375 351122',
      email:    'info@whitesoundandlighting.org.uk',
      website:  'www.whitesoundandlighting.org.uk',
      address:  'Unit 1A The White House, Well Lane, High Road North Stifford, Grays, RM165UE',
      what:     'DJ equipment hire',
      events:   ['fd7'],
      colour:   '#0369a1',
      quotes: [{
        ref: '1191', date: '2026-01-20', totalIncVat: 1198.08, totalExVat: 998.40,
        terms: 'Payment on invoice after event',
      }],
    },

    kacySounds: {
      id:       'kacySounds',
      name:     'Kacy Sounds & Lighting',
      what:     'Stage DJ set-up',
      events:   ['fd7', 'shindig'],
      colour:   '#15803d',
      notes:    'Quote approved by Ronnie. Check monitor spec with Dave Ong (Panache).',
    },

    stageAce: {
      id:       'stageAce',
      name:     'StageACE Mobile Stage Hire',
      phone:    '01634 720700',
      website:  'www.stageace.co.uk',
      what:     'Mobile stage hire',
      colour:   '#374151',
      specs: {
        stage8x6: { width: 8, depth: 6, roofHeight: [4.7, 4.95], stageHeight: [0.99, 1.24], totalWidth: 10, trailerDepth: 7.17 },
        banners: {
          frontFascia: { w: 8.0, h: 0.92 },
          backScreen:  { w: 7.8, h: 2.6  },
          sidePanel:   { w: 1.6, h: 3.2  },
        }
      }
    },

    luxuryToilet: {
      id:       'luxuryToilet',
      name:     'Luxury Toilet Hire UK Ltd',
      contact:  'Sharon',
      phone:    '01371 873003',
      yardPhone:'01371 871871',
      what:     'Luxury toilet trailers',
      events:   ['fd7', 'shindig'],
      colour:   '#be185d',
      units: {
        windsor3plus1:  { name: 'Windsor 3+1',  w: 6.71, d: 2.32, unitCostExVat: 725.00,  capacity: 300 },
        balmoral2plus1: { name: 'Balmoral 2+1', w: 5.50, d: 2.30, unitCostExVat: 625.00,  capacity: 200 },
        disabled:       { name: 'Disabled unit',w: 3.50, d: 2.30, unitCostExVat: 150.00,  capacity: 100 },
      },
      tiers: {
        1500: { units: [{ type: 'windsor3plus1', qty: 5 }], totalExVat: 3625.00 },
        2000: { units: [{ type: 'windsor3plus1', qty: 6 }, { type: 'balmoral2plus1', qty: 1 }], totalExVat: 4975.00 },
        2500: { units: [{ type: 'windsor3plus1', qty: 8 }], totalExVat: 5800.00 },
      },
    },

    localToiletHire: {
      id:       'localToiletHire',
      name:     'Local Toilet Hire Ltd',
      contact:  'James Parkin',
      role:     'Event and Construction Hire Co-Ordinator',
      phone:    '0800 907 0086',
      email:    'James@localtoilethire.co.uk',
      website:  'www.localtoilethire.co.uk',
      what:     'Heras fencing, crowd barriers',
      colour:   '#374151',
      specs: {
        crowdBarrier: { w: 2.3, h: 1.0 },
        herasPanel:   { w: 3.5, h: 2.0 },
      },
      bookingRequirements: [
        'Full invoice name and address',
        'Full delivery address',
        'Site contact name and number',
        'Your contact number',
        'Any time restrictions',
        'Access issues (large vehicle)',
        'Hard standing area for delivery and collection',
      ],
      notes: 'Payment required to confirm booking. Must be stacked and banded as delivered on collection.',
      historicQuote: { year: 2022, desc: '34 crowd barriers', total: 180.00, incVat: false },
    },

    dunmow: {
      id:       'dunmow',
      name:     'Dunmow Group',
      phone:    '01245 466646',
      what:     'Skip hire, RoRo containers',
      colour:   '#374151',
      account:  'Funky Dory Love Limited',
      delivery: 'Polo House, CM6 1JU',
      lastBooking: { jobNo: '887986', date: '2026-08-15', product: '40yd RoRo', wasteType: 'Mixed Construction' },
      notes:    'Collections can occur 1-2 days after requested date.',
    },

    furniHire: {
      id:       'furniHire',
      name:     'FurniHire',
      contact:  'John Moore',
      phone:    '01455 634125',
      email:    'info@furnihire.co.uk',
      website:  'furnihire.co.uk',
      address:  '5 Teal Business Park, Dodwells Rd, Hinckley, Leicestershire, LE10 3BZ',
      what:     'Tables, chairs, benches',
      colour:   '#d97706',
      quotes: [{
        items: [
          { desc: 'Trestle table 6ft (6+2.3ft)', qty: 70,  totalExVat: 276.50 },
          { desc: 'Rustic bench 6ft',             qty: 100, totalExVat: 550.00 },
          { desc: 'Wood folding chair',            qty: 150, totalExVat: 337.50 },
          { desc: 'Picnic bench',                  qty: 8,   totalExVat: 160.00 },
        ]
      }],
      notes: 'Load on pallets.',
    },

    rdl: {
      id:       'rdl',
      name:     'Roadway Distribution Ltd',
      fullName: 'Roadway Distribution Ltd incorporating Load Logistics Ltd',
      address:  'Northfield Road, Rotherham, S65 3SH',
      phone:    '01709 719796',
      email:    'transport@rdl.delivery',
      colour:   '#0891b2',
      contacts: { Sean: '07845 999247', Jordan: '07901 720844', Kerry: '07769 032942' },
      what:     'Transport & furniture delivery',
    },

    marvellousGlow: {
      id:       'marvellousGlow',
      name:     'Marvellous Glow',
      contact:  'Paul',
      email:    'paul@marvellousglow.com',
      what:     'Lighting, powered signs',
      colour:   '#d97706',
      notes:    'Remember credit from previous event.',
    },

    underTheCanvas: {
      id:       'underTheCanvas',
      name:     'Under The Canvas',
      contact:  'Ben',
      phone:    '07711 072 438',
      email:    'ben@underthecanvas.co.uk',
      what:     'Stretch tents',
      colour:   '#0891b2',
    },

    tipis4Hire: {
      id:       'tipis4Hire',
      name:     'Tipis 4 Hire',
      what:     'VIP and sponsor tipis',
      colour:   '#0891b2',
      notes:    'Budget: £1,400 inc VAT for matting & fairy lights.',
    },

    houseGroup: {
      id:       'houseGroup',
      name:     'House Group',
      contact:  'Andy Coleman',
      email:    'andy@house-group.uk',
      what:     'Bar structure, draft beers, fridge trucks',
      colour:   '#0369a1',
      notes:    'Still not been able to get hold of Andy.',
    },

    wirelessTerminal: {
      id:       'wirelessTerminal',
      name:     'Wireless Terminal Solutions',
      contact:  'Matt Griffiths',
      what:     'Tills, POS & card machines',
      colour:   '#0369a1',
      notes:    'Get on Tuesday of setup week to configure bar prices.',
    },

    swifty: {
      id:       'swifty',
      name:     'Swifty Security',
      what:     'Security',
      colour:   '#dc2626',
      notes:    'Quote pending. Budget: £3,940 inc VAT.',
    },

    fleurDeLys: {
      id:       'fleurDeLys',
      name:     'Fleur De Lys',
      contact:  'Louise Stirland',
      what:     'Flowers and floral decoration',
      colour:   '#be185d',
      notes:    'Email sent to request quote.',
    },

    beEntertained: {
      id:       'beEntertained',
      name:     'Be Entertained',
      contact:  'Holly McDougall',
      email:    'holly@beentertained.co.uk',
      what:     'Dancers and entertainment',
      colour:   '#d97706',
    },

    telehandler: {
      id:       'telehandler',
      name:     'Chris (neighbour of Ashfields)',
      contact:  'Chris',
      phone:    'TBC',
      what:     'Telehandler for offloading furniture',
      colour:   '#374151',
      notes:    'Provisionally book when numbers known.',
    },
  },

  // ── Budget categories ─────────────────────────────────────────────────────
  budgetCategories: [
    'DJs / Artists',
    'Stage, Sound & Production',
    'Power & Generator',
    'Structures & Infrastructure',
    'Toilets',
    'Fencing & Barriers',
    'Bar & Beverages',
    'Furniture',
    'Lighting & Signage',
    'Security',
    'Food Traders',
    'Entertainment',
    'Staffing',
    'Transport & Logistics',
    'Design & Print',
    'Marketing',
    'Venue & Insurance',
    'Other',
  ],

  // ── Lifecycle stages ──────────────────────────────────────────────────────
  lifecycleStages: [
    { id: 'design',   label: 'Design / Plan',    colour: '#7c3aed', description: 'Identify need, spec out, decide what is required' },
    { id: 'purchase', label: 'Purchase / Book',   colour: '#0369a1', description: 'Get quotes, confirm supplier, place order or booking' },
    { id: 'build',    label: 'Print / Build',     colour: '#0f766e', description: 'Produce, print, build or action the item' },
    { id: 'done',     label: 'Done',              colour: '#15803d', description: 'Complete' },
  ],

  // ── Quote summary associations ────────────────────────────────────────────
  quoteAssociations: [
    { match: 'heras',            supplierKey: 'localToiletHire' },
    { match: 'crowd barrier',    supplierKey: 'localToiletHire' },
    { match: 'stage',            supplierKey: 'panacheAudio'    },
    { match: 'stretch tent',     supplierKey: 'underTheCanvas'  },
    { match: 'tipi',             supplierKey: 'tipis4Hire'      },
    { match: 'windsor|balmoral', supplierKey: 'luxuryToilet'    },
    { match: 'skip|roro',        supplierKey: 'dunmow'          },
    { match: 'trestle|bench|folding chair|picnic', supplierKey: 'furniHire' },
    { match: 'generator',        supplierKey: 'panacheAudio'    },
  ],

  // ── Helpers ───────────────────────────────────────────────────────────────
  getSupplier: function(key) {
    return this.suppliers[key] || null;
  },

  getSupplierDisplay: function(key) {
    var s = this.suppliers[key];
    if (!s) return 'TBC';
    var str = s.name;
    if (s.contact) str += ' — ' + s.contact;
    if (s.phone)   str += ' (' + s.phone + ')';
    return str;
  },

  getEvent: function(id) {
    return this.events[id] || null;
  },

  buildWeekDays: function(eventId) {
    var ev = this.events[eventId];
    if (!ev) return [];
    var eventDate = new Date(ev.eventDate);
    var setupDays = ev.buildWeek ? ev.buildWeek.setupDaysBeforeEvent : 6;
    var derigDays = ev.buildWeek ? ev.buildWeek.derigDaysAfterEvent  : 2;
    var DAY  = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var MON  = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var days = [];
    var start = new Date(eventDate);
    start.setDate(start.getDate() - setupDays);
    while (start.getDay() !== 1) start.setDate(start.getDate() - 1);
    var d = new Date(start);
    while (d < eventDate) {
      days.push({ label: DAY[d.getDay()] + ' ' + d.getDate() + ' ' + MON[d.getMonth()], type: 'setup', date: new Date(d) });
      d.setDate(d.getDate() + 1);
    }
    days.push({ label: DAY[eventDate.getDay()] + ' ' + eventDate.getDate() + ' ' + MON[eventDate.getMonth()] + ' ★', type: 'event', date: new Date(eventDate) });
    var derig = new Date(eventDate);
    for (var i = 1; i <= derigDays; i++) {
      derig.setDate(derig.getDate() + 1);
      days.push({ label: DAY[derig.getDay()] + ' ' + derig.getDate() + ' ' + MON[derig.getMonth()], type: 'takedown', date: new Date(derig) });
    }
    return days;
  },

};

console.log('[FD Config] v' + window.FD_CONFIG.version + ' loaded — ' + Object.keys(window.FD_CONFIG.suppliers).length + ' suppliers, ' + Object.keys(window.FD_CONFIG.events).length + ' events');
