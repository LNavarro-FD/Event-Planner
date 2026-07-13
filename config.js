/**
 * FD Event Planner — Shared Configuration
 * =========================================
 * VERSION: 1.0.0
 * Single source of truth for all modules.
 * Import in any module: <script src="config.js"></script>
 * then access window.FD_CONFIG
 *
 * NO HARDCODED VALUES in any other file.
 * Update supplier/event details here only.
 */

window.FD_CONFIG = {

  // ── Version manifest ──────────────────────────────────────────────────────
  versions: {
    config:         '1.0.0',
    hub:            '1.0.0',
    eventPlanner:   '3.0.0',
    todo:           '2.0.0',
    kanban:         '2.0.0',
    taskTracker:    '1.0.0',
  },

  // ── Firebase ──────────────────────────────────────────────────────────────
  firebase: {
    apiKey:            'AIzaSyCt-MVurfEOcvj_4Q9ndD6dqJrf8hfm4x8',
    authDomain:        'event-planner-7944d.firebaseapp.com',
    projectId:         'event-planner-7944d',
    storageBucket:     'event-planner-7944d.firebasestorage.app',
    messagingSenderId: '455768566205',
    appId:             '1:455768566205:web:c5274d85158e6b2bf8cad4',
  },

  // ── Firestore collection / document paths ─────────────────────────────────
  firestore: {
    venues:       'venues',       // event planner layouts
    equipment:    'equipment',    // equipment library doc: 'library'
    jobs:         'jobs',         // kanban: 'fd7_kanban', task tracker: 'fd7_2026'
    todos:        'todos',        // todo list: 'fd7_todo_2026'
    financials:   'financials',   // financial tracker (TBD)
    suppliers:    'suppliers',    // supplier database (TBD)
    staff:        'staff',        // staff database (TBD)
  },

  // ── Events ────────────────────────────────────────────────────────────────
  events: {
    fd7: {
      name:        'FD Festival 7',
      shortName:   'FD7',
      date:        '2026-08-15',
      dateDisplay: 'Saturday 15 August 2026',
      setupDate:   '2026-08-14',
      setupDisplay:'Friday 14 August 2026',
      times:       '12pm – 10pm',
      venue:       'Ashfields Carriage & Polo Club',
      address:     'Green Street, Great Canfield, Dunmow, Essex',
      postcode:    'CM6 1JU',
      satnav:      'CM6 1JU',
      capacityTiers: [1500, 2000, 2500],
    },
    hrr: {
      name:        'Funky Dory at Henley Royal Regatta',
      shortName:   'HRR',
      date:        '2026-07-02',  // Thu start
      dateDisplay: 'Thu 2 – Sat 4 July 2026',
      venue:       'Phyllis Court Club',
      address:     'Marlow Road, Henley-on-Thames, Oxfordshire',
      postcode:    'RG9 2HT',
    },
    shindig: {
      name:        'FD Shindig',
      shortName:   'FD Shindig',
      date:        '2026-08-15',
      dateDisplay: '15 August 2026',
      venue:       'TBC',
    },
  },

  // ── Team ──────────────────────────────────────────────────────────────────
  team: {
    LN: { name: 'Louise Navarro',  role: 'Event Manager',   phone: '07832 153489' },
    RC: { name: 'Rosie Coxshaw',   role: 'Event Director',  phone: '07775 875522' },
    RH: { name: 'Ronnie Herel',    role: 'Artist Liaison',  phone: '07775 875522' },
    RAY:{ name: 'Ray Johnson',     role: 'Logistics',       phone: '' },
    SW: { name: 'Steve West',      role: 'Bar Manager',     phone: '' },
    PL: { name: 'Paul Lachman',    role: 'Back Bar Manager',phone: '' },
  },

  // ── Suppliers ─────────────────────────────────────────────────────────────
  suppliers: {

    panacheAudio: {
      name:     'Panache Audio Systems',
      contact:  'Dave Ong',
      phone:    '01634 720700',
      email:    'sales@panacheaudio.co.uk',
      website:  'www.panacheaudio.co.uk',
      address:  'A5 Spectrum Business Centre, Medway City Estate, Rochester, Kent, ME2 4NP',
      vatNo:    '702959622',
      what:     'Stage, PA, sound, lighting, generator — FD7',
      quote:    'QU-0763',
      quoteAmt: 6720.00,
      quoteInc: true,  // inc VAT
      terms:    'Payment on invoice after event',
      notes:    'Stage 86 8×6m, KV2 PA, 20KVA generator, lighting+smoke, 3x technicians. Setup Fri 14 Aug.',
    },

    liveWire: {
      name:     'Live Wire Event Solutions Ltd',
      contact:  '',
      phone:    '',
      email:    'karen@livewireproductions.com',
      website:  'www.livewireproductions.co.uk',
      address:  '3 Mead Court, Thorpe Way, Banbury, OX16 4RZ',
      what:     'Full PA, staging, crew, transport — HRR',
      quote:    '4148',
      quoteAmt: 4675.20,
      quoteInc: true,
      notes:    'D&B PA for 750, Litedeck stage 5.48×2.43m, sound engineer 4 days, crew 2 days, LWB van.',
    },

    whitesSound: {
      name:     "White's Sound And Lighting",
      contact:  '',
      phone:    '01375 351122',
      email:    'info@whitesoundandlighting.org.uk',
      website:  'www.whitesoundandlighting.org.uk',
      address:  'Unit 1A The White House, Well Lane, High Road North Stifford, Grays, RM165UE',
      what:     'DJ equipment hire — FD7 (Ronnie Herel booking)',
      quote:    '1191',
      quoteAmt: 1198.08,
      quoteInc: true,
      terms:    'Payment on invoice after event',
      notes:    '6x CDJ3000, 2x DJM900NXS2, technician, LWB van. Delivery & collection 15/08/26.',
    },

    kacySounds: {
      name:     'Kacy Sounds & Lighting',
      contact:  '',
      phone:    '',
      email:    '',
      website:  '',
      what:     'Stage DJ set-up — FD7 & FD Shindig',
      notes:    'Quote approved by Ronnie. Check monitor spec with Dave Ong (Panache).',
    },

    stageAce: {
      name:     'StageACE Mobile Stage Hire',
      contact:  '',
      phone:    '01634 720700',
      email:    '',
      website:  'www.stageace.co.uk',
      what:     'Mobile stage hire',
      notes:    '8×6m Stage 86. Roof height 4700–4950mm. Stage height 990–1240mm adjustable.',
    },

    luxuryToilet: {
      name:     'Luxury Toilet Hire UK Ltd',
      contact:  'Sharon',
      phone:    '01371 873003',
      yardPhone:'01371 871871',
      email:    '',
      website:  '',
      what:     'Luxury toilet trailers',
      pricing: {
        windsor3plus1: { unitCost: 725.00, capacity: 300, vatExcl: true },
        balmoral2plus1:{ unitCost: 625.00, capacity: 200, vatExcl: true },
        disabled:      { unitCost: 150.00, capacity: 100, vatExcl: true },
      },
      tiers: {
        1500: { units: [{ type: 'windsor3plus1', qty: 5 }], totalExVat: 3625.00 },
        2000: { units: [{ type: 'windsor3plus1', qty: 6 }, { type: 'balmoral2plus1', qty: 1 }], totalExVat: 4975.00 },
        2500: { units: [{ type: 'windsor3plus1', qty: 8 }], totalExVat: 5800.00 },
      },
      notes: '4× 3+1 booked for FD Shindig 15 Aug.',
    },

    localToiletHire: {
      name:     'Local Toilet Hire Ltd',
      contact:  'James Parkin',
      role:     'Event and Construction Hire Co-Ordinator',
      phone:    '0800 907 0086',
      email:    'James@localtoilethire.co.uk',
      website:  'www.localtoilethire.co.uk',
      what:     'Heras fencing, crowd barriers',
      notes:    'All quotes valid 30 days. Fencing must be stacked & banded as delivered. Booking requires: invoice name/address, delivery address, site contact, phone, time restrictions, access issues, hard standing confirmation. Payment required to confirm booking.',
      barriers: { width: 2.3, height: 1.0, unit: 'm' },
      herasPanel:{ width: 3.5, height: 2.0, unit: 'm' },
      historicQuote: '34 crowd barriers £180+VAT inc delivery/collection (Aug 2022)',
    },

    dunmow: {
      name:     'Dunmow Group',
      phone:    '01245 466646',
      email:    '',
      website:  '',
      account:  'Funky Dory Love Limited',
      delivery: 'Polo House, CM6 1JU',
      what:     'Skip hire, RoRo containers',
      notes:    'Collections can occur 1-2 days after requested date. Last booking: Job 887986, 40yd RoRo, 15/08/2025.',
    },

    furniHire: {
      name:     'FurniHire',
      contact:  'John Moore',
      phone:    '01455 634125',
      email:    'info@furnihire.co.uk',
      website:  'furnihire.co.uk',
      address:  '5 Teal Business Park, Dodwells Rd, Hinckley, Leicestershire, LE10 3BZ',
      established: 1994,
      what:     'Tables, chairs, benches, picnic benches',
      pricing: {
        trestleTable6ft:   { qty: 70,  totalExVat: 276.50 },
        rusticBench6ft:    { qty: 100, totalExVat: 550.00 },
        woodFoldingChair:  { qty: 150, totalExVat: 337.50 },
        picnicBench:       { qty: 8,   totalExVat: 160.00 },
      },
      notes: 'Load on pallets. Spoke to John — will email rough numbers to go into booking system.',
    },

    rdl: {
      name:     'Roadway Distribution Ltd',
      fullName: 'Roadway Distribution Ltd incorporating Load Logistics Ltd',
      address:  'Northfield Road, Rotherham, S65 3SH',
      phone:    '01709 719796',
      email:    'transport@rdl.delivery',
      contacts: {
        Sean:   '07845 999247',
        Jordan: '07901 720844',
        Kerry:  '07769 032942',
      },
      what:     'Transport & furniture delivery',
      notes:    'Provisional book when numbers known.',
    },

    marvellousGlow: {
      name:     'Marvellous Glow',
      contact:  'Paul',
      email:    'paul@marvellousglow.com',
      phone:    '',
      what:     'Lighting, powered signs, dancefloor',
      notes:    'Remember credit from previous event. Quote requested for FD7.',
    },

    underTheCanvas: {
      name:     'Under The Canvas',
      contact:  'Ben',
      phone:    '07711 072 438',
      email:    'ben@underthecanvas.co.uk',
      what:     'Stretch tents',
      notes:    'Spoke to Ben — quote coming for main bar tent and wellness tent.',
    },

    tipis4Hire: {
      name:     'Tipis 4 Hire',
      contact:  '',
      phone:    '',
      email:    '',
      what:     'VIP and sponsor tipis',
      notes:    'Need to contact re availability and quote.',
    },

    houseGroup: {
      name:     'House Group',
      contact:  'Andy Coleman',
      phone:    '',
      email:    'andy@house-group.uk',
      what:     'Bar structure, draft beers, fridge trucks',
      notes:    'Still not been able to get hold of Andy. Quote needed for 1,500/2,000/2,500 guests.',
    },

    wirelessTerminal: {
      name:     'Wireless Terminal Solutions',
      contact:  'Matt Griffiths',
      phone:    '',
      email:    '',
      what:     'Tills, POS & card machines',
      notes:    'Get on Tuesday of setup week to configure bar prices. 1-week rental.',
    },

    swifty: {
      name:     'Swifty',
      contact:  '',
      phone:    '',
      email:    '',
      what:     'Security',
      notes:    'Quote pending. Budget: £3,940 inc VAT.',
    },

    fleurDeLys: {
      name:     'Fleur De Lys',
      contact:  'Louise Stirland',
      phone:    '',
      email:    '',
      what:     'Flowers and floral decoration',
      notes:    'Email sent to request quote.',
    },

    beEntertained: {
      name:     'Be Entertained',
      contact:  'Holly McDougall',
      phone:    '',
      email:    'holly@beentertained.co.uk',
      what:     'Dancers and entertainment',
      notes:    'Get quote same as 2025.',
    },

    telehandler: {
      name:     'Chris (neighbour of Ashfields)',
      contact:  'Chris',
      phone:    'TBC',
      email:    '',
      what:     'Telehandler for offloading furniture',
      notes:    'Provisionally book when numbers known. Not a forklift — confirm can handle furniture pallets.',
    },
  },

  // ── Budget categories (for financial tracker) ─────────────────────────────
  budgetCategories: [
    'DJs / Artists',
    'Venue, Activities & Production',
    'Bar & Beverages',
    'Sales & Marketing',
    'Staffing',
    'Other',
  ],

  // ── Quote summary associated items ────────────────────────────────────────
  // Used by event planner Quote Summary feature
  // Keyed by regex pattern matching canvas item names
  quoteAssociations: [
    {
      match: 'heras',
      supplierKey: 'localToiletHire',
      upsells: [
        { item: 'Heras feet & clips', note: 'Check if included in hire price — often extra' },
        { item: 'Heras panel covers / branding', note: 'Budget: £432 inc VAT' },
        { item: 'Heras delivery & collection', note: 'Budget: £780 inc VAT. Must be stacked & banded as delivered.' },
        { item: 'Scaffold fixings', note: 'If attaching to stage or structure' },
        { item: 'Booking info required', note: 'Invoice name/address, delivery address, site contact, time restrictions, access issues, hard standing.' },
      ],
    },
    {
      match: 'crowd barrier',
      supplierKey: 'localToiletHire',
      upsells: [
        { item: 'Crowd barrier feet / ballast', note: 'Check with James — manual offload only' },
        { item: 'Steward for barrier line', note: 'Purple Guide recommendation' },
      ],
    },
    {
      match: 'stage',
      supplierKey: 'panacheAudio',
      upsells: [
        { item: 'Stage sound / PA system', note: 'FD7: Panache Audio QU-0763 £6,720 inc VAT' },
        { item: 'Stage lighting rig', note: 'Panache Audio — included in QU-0763' },
        { item: 'DJ set-up', note: 'Kacy Sounds & Lighting — quote approved by Ronnie' },
        { item: 'Generator', note: 'Panache QU-0763: HIM20KVA3PH £300+VAT. Fuel after event at pump prices.' },
        { item: 'Stage banners', note: 'Front fascia 8×0.92m, back screen 7.8×2.6m, side panels 1.6×3.2m' },
      ],
    },
    {
      match: 'stretch tent',
      supplierKey: 'underTheCanvas',
      upsells: [
        { item: 'Groundsheet / flooring matting', note: 'Check with Ben' },
        { item: 'Lighting inside tent', note: 'Marvellous Glow — Paul. Remember credit.' },
        { item: 'Side walls', note: 'Capacity changes with sides down' },
      ],
    },
    {
      match: 'tipi',
      supplierKey: 'tipis4Hire',
      upsells: [
        { item: 'Tipi matting & fairy lights', note: 'Budget: £1,400 inc VAT' },
        { item: 'Bar setup in tipi', note: 'House Group — Andy Coleman' },
        { item: 'Furniture for tipi', note: 'FurniHire — John Moore' },
        { item: 'Lighting', note: 'Marvellous Glow — Paul' },
      ],
    },
    {
      match: 'windsor|balmoral|disabled toilet',
      supplierKey: 'luxuryToilet',
      upsells: [
        { item: 'Toilet consumables pack', note: 'Confirm with Sharon if included or extra' },
        { item: 'Toilet attendants (2 per shift)', note: 'Also keep stage area clear of litter' },
        { item: 'Power cable run', note: '13/16amp required for 3+1 unit' },
        { item: 'Heras screen in front', note: 'Decide if needed and location' },
        { item: 'Lighting', note: 'Marvellous Glow — Paul' },
      ],
    },
    {
      match: 'skip|roro',
      supplierKey: 'dunmow',
      upsells: [
        { item: 'Extra bins for site', note: 'Budget: £294 inc VAT' },
        { item: 'Waste collection schedule', note: 'Coordinate with cleaning staff' },
        { item: 'RoRo delivery/collection slots', note: 'Collections 1-2 days after requested date' },
        { item: 'Telehandler for offloading', note: 'Chris next door to Ashfields (TBC)' },
        { item: 'Sean Bramwell RDL — transport', note: 'Provisional book when numbers known' },
      ],
    },
    {
      match: 'trestle|rustic bench|folding chair|picnic bench',
      supplierKey: 'furniHire',
      upsells: [
        { item: 'Furniture delivery — RDL', note: 'Sean: 07845 999247. Budget: £1,020 inc VAT.' },
        { item: 'Telehandler for offloading', note: 'Chris next door to Ashfields (TBC)' },
      ],
    },
    {
      match: 'generator',
      supplierKey: 'panacheAudio',
      upsells: [
        { item: 'Site power design / cable plan', note: 'Coordinate with stage, bar, lighting, toilets' },
        { item: 'Distro boards & cable runs', note: 'Include in power plan' },
      ],
    },
  ],
};

// ── Helper: get supplier display string ───────────────────────────────────────
window.FD_CONFIG.getSupplierDisplay = function(key) {
  const s = this.suppliers[key];
  if (!s) return 'TBC';
  let str = s.name;
  if (s.contact) str += ` — ${s.contact}`;
  if (s.phone) str += ` (${s.phone})`;
  return str;
};

// ── Helper: get event by short name ──────────────────────────────────────────
window.FD_CONFIG.getEvent = function(shortName) {
  return Object.values(this.events).find(e => e.shortName === shortName) || null;
};

console.log(`[FD Config] Loaded v${window.FD_CONFIG.versions.config} — ${Object.keys(window.FD_CONFIG.suppliers).length} suppliers, ${Object.keys(window.FD_CONFIG.events).length} events`);
