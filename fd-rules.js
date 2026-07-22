// ── FD Event Planning Rules ───────────────────────────────────────────────────
// Single source of truth for all deadline calculations across all modules.
// All dates calculated from EVENT_DATE defined in each module.
// Usage: window.FD_RULES.weeksBefore(w) returns a date string.

window.FD_RULES = (function() {

  function getEventDate() {
    // Each module defines EVENT_DATE; fall back to FD7 default
    if (typeof EVENT_DATE !== 'undefined') return EVENT_DATE;
    return new Date('2026-08-15');
  }

  function weeksBefore(w) {
    var d = new Date(getEventDate().getTime() - w * 7 * 24 * 60 * 60 * 1000);
    return d.toISOString().slice(0, 10);
  }

  function weeksAfter(w) {
    var d = new Date(getEventDate().getTime() + w * 7 * 24 * 60 * 60 * 1000);
    return d.toISOString().slice(0, 10);
  }

  function monthsBefore(m) {
    var d = new Date(getEventDate());
    d.setMonth(d.getMonth() - m);
    return d.toISOString().slice(0, 10);
  }

  // ── Standard deadline rules ───────────────────────────────────────────────
  var DEADLINES = {

    // Venue & commercial
    venue_contract:           { label: 'Field hire / venue contract signed',     due: function(){ return monthsBefore(12); }, note: '1 year out' },
    licence:                  { label: 'Event licence applied for',               due: function(){ return monthsBefore(6);  }, note: '6 months out' },
    insurance:                { label: 'Insurance in place',                      due: function(){ return monthsBefore(6);  }, note: '6 months out' },

    // DJs & Artists
    headline_acts_booked:     { label: 'Headline acts booked & confirmed',        due: function(){ return monthsBefore(12); }, note: '12 months out (min 6)' },
    all_acts_confirmed:       { label: 'All acts confirmed',                      due: function(){ return monthsBefore(6);  }, note: '6 months out' },
    riders_received:          { label: 'Riders received from all artists',        due: function(){ return weeksBefore(8);   }, note: '8 weeks out' },
    set_times_confirmed:      { label: 'Set times confirmed to all artists',      due: function(){ return weeksBefore(4);   }, note: '4 weeks out' },
    accreditation_sent:       { label: 'Accreditation packs sent',                due: function(){ return weeksBefore(4);   }, note: '4 weeks out' },
    guest_lists_received:     { label: 'Guest lists received from all artists',   due: function(){ return weeksBefore(2);   }, note: '2 weeks out' },
    artist_day_of_email:      { label: 'On-the-day email sent to all artists',    due: function(){ return weeksBefore(1);   }, note: '1 week out' },

    // Suppliers — general
    supplier_quotes:          { label: 'All supplier quotes received',            due: function(){ return weeksAfter(2);    }, note: 'Post-event within 2 weeks' },
    supplier_contracts:       { label: 'Key supplier contracts signed',           due: function(){ return monthsBefore(6);  }, note: '6 months out' },
    supplier_compliance:      { label: 'Compliance docs received from suppliers', due: function(){ return weeksBefore(6);   }, note: '6 weeks out' },
    supplier_final_confirm:   { label: 'Final confirmation to all suppliers',     due: function(){ return weeksBefore(2);   }, note: '2 weeks out' },
    supplier_rebook:          { label: 'Re-book key suppliers for next year',     due: function(){ return weeksAfter(2);    }, note: 'Post-event within 2 weeks' },

    // Stage, sound & power
    stage_contract:           { label: 'Stage & PA contract signed',              due: function(){ return monthsBefore(6);  }, note: '6 months out' },
    stage_final_confirm:      { label: 'Stage setup arrival time confirmed',      due: function(){ return weeksBefore(2);   }, note: '2 weeks out' },

    // Security
    security_contract:        { label: 'Security contract signed',                due: function(){ return monthsBefore(6);  }, note: '6 months out' },
    security_headcount:       { label: 'Security headcount confirmed',            due: function(){ return weeksBefore(8);   }, note: '8 weeks out — based on ticket sales' },
    security_brief:           { label: 'Security brief sent',                     due: function(){ return weeksBefore(4);   }, note: '4 weeks out' },
    security_final:           { label: 'Final security numbers confirmed',        due: function(){ return weeksBefore(2);   }, note: '2 weeks out' },

    // Entertainers
    entertainers_booked:      { label: 'Entertainers booked & confirmed',         due: function(){ return monthsBefore(6);  }, note: '6 months out' },
    entertainers_brief:       { label: 'Entertainer briefs sent',                 due: function(){ return weeksBefore(4);   }, note: '4 weeks out' },
    entertainers_final:       { label: 'Final entertainer confirmation',          due: function(){ return weeksBefore(2);   }, note: '2 weeks out' },

    // Visuals
    visuals_booked:           { label: 'Photographer/videographer booked',        due: function(){ return monthsBefore(6);  }, note: '6 months out' },
    visuals_brief:            { label: 'Shot list / brief agreed',                due: function(){ return weeksBefore(4);   }, note: '4 weeks out' },
    visuals_final:            { label: 'Arrival time & access confirmed',         due: function(){ return weeksBefore(2);   }, note: '2 weeks out' },
    visuals_raw_files:        { label: 'Raw files delivered',                     due: function(){ return weeksAfter(1);    }, note: 'Post-event 1 week' },
    visuals_edited_files:     { label: 'Edited files delivered',                  due: function(){ return weeksAfter(4);    }, note: 'Post-event 4 weeks' },

    // Design & Print
    design_brief_sent:        { label: 'Design brief sent to designer',           due: function(){ return weeksBefore(12);  }, note: '12 weeks out' },
    sponsor_logo_confirmed:   { label: 'Sponsor logo requirements confirmed',     due: function(){ return weeksBefore(10);  }, note: '10 weeks out — blocker for final artwork' },
    design_approved:          { label: 'Design approved',                         due: function(){ return weeksBefore(10);  }, note: '10 weeks out' },
    final_artwork_approved:   { label: 'Final artwork approved (inc sponsor)',    due: function(){ return weeksBefore(9);   }, note: '9 weeks out' },
    print_order_placed:       { label: 'Print order placed',                      due: function(){ return weeksBefore(8);   }, note: '8 weeks out' },
    print_delivery:           { label: 'Print delivery',                          due: function(){ return weeksBefore(4);   }, note: '4 weeks out' },

    // Staff
    staff_numbers_confirmed:  { label: 'Staff numbers confirmed',                 due: function(){ return weeksBefore(8);   }, note: '8 weeks out' },
    staff_briefing_packs:     { label: 'Staff briefing packs sent',               due: function(){ return weeksBefore(4);   }, note: '4 weeks out' },
    staff_final_confirmed:    { label: 'All staff confirmed & briefed',           due: function(){ return weeksBefore(1);   }, note: '1 week out' },

    // Structures & infrastructure
    structures_contract:      { label: 'Tent / structure contracts signed',       due: function(){ return monthsBefore(6);  }, note: '6 months out' },
    structures_confirm:       { label: 'Structures final confirmation',           due: function(){ return weeksBefore(4);   }, note: '4 weeks out' },

    // Bar & drinks
    bar_contract:             { label: 'Bar structure contract signed',           due: function(){ return monthsBefore(6);  }, note: '6 months out' },
    drinks_order:             { label: 'Drinks order placed',                     due: function(){ return weeksBefore(2);   }, note: '2 weeks out' },

    // Toilets & fencing
    toilets_booked:           { label: 'Toilet units booked',                    due: function(){ return monthsBefore(6);  }, note: '6 months out' },
    toilets_count_confirmed:  { label: 'Toilet count confirmed vs ticket sales', due: function(){ return weeksBefore(8);   }, note: '8 weeks out' },
    fencing_booked:           { label: 'Fencing & barriers booked',              due: function(){ return monthsBefore(6);  }, note: '6 months out' },

    // Food traders
    traders_confirmed:        { label: 'All food traders confirmed',              due: function(){ return weeksBefore(8);   }, note: '8 weeks out' },
    traders_info_packs:       { label: 'Info packs sent to food traders',         due: function(){ return weeksBefore(6);   }, note: '6 weeks out' },
    traders_compliance:       { label: 'Compliance docs received from traders',   due: function(){ return weeksBefore(6);   }, note: '6 weeks out' },

    // Furniture & decor
    furniture_confirmed:      { label: 'Furniture order confirmed',               due: function(){ return weeksBefore(6);   }, note: '6 weeks out' },
    decor_confirmed:          { label: 'Flowers & decor confirmed',               due: function(){ return weeksBefore(6);   }, note: '6 weeks out' },

    // On the day
    delivery_plan:            { label: 'Supplier delivery plan complete',         due: function(){ return weeksBefore(2);   }, note: '2 weeks out' },
    on_day_schedule:          { label: 'On-the-day schedule complete',            due: function(){ return weeksBefore(2);   }, note: '2 weeks out' },
    final_headcounts:         { label: 'Final headcounts to all suppliers',       due: function(){ return weeksBefore(2);   }, note: '2 weeks out' },
    deliveries_scheduled:     { label: 'All deliveries scheduled',                due: function(){ return weeksBefore(1);   }, note: '1 week out' },
    scanning_tested:          { label: 'Scanning devices tested',                 due: function(){ return weeksBefore(1);   }, note: '1 week out' },

    // Marketing
    marketing_campaign:       { label: 'Marketing campaign launched',             due: function(){ return weeksBefore(12);  }, note: '12 weeks out' },
    social_content_planned:   { label: 'Social media content planned',            due: function(){ return weeksBefore(8);   }, note: '8 weeks out' },
  };

  // ── Category due date mapping (for kanban/to-do auto-date) ───────────────
  var CATEGORY_RULES = {
    'Commercial & Legal':     function(){ return monthsBefore(6);  },
    'DJ, Stage & Dancefloor': function(){ return monthsBefore(6);  },
    'Artist Liaison':         function(){ return weeksBefore(4);   },
    'Stage, Sound & Power':   function(){ return monthsBefore(6);  },
    'Structures & Infrastructure': function(){ return monthsBefore(6); },
    'Structures & Tents':     function(){ return monthsBefore(6);  },
    'Toilets':                function(){ return weeksBefore(8);   },
    'Fencing & Barriers':     function(){ return weeksBefore(8);   },
    'Fencing':                function(){ return weeksBefore(8);   },
    'Bar':                    function(){ return weeksBefore(8);   },
    'Bars':                   function(){ return weeksBefore(8);   },
    'Design & Print':         function(){ return weeksBefore(8);   },
    'Furniture':              function(){ return weeksBefore(6);   },
    'Lighting & Signs':       function(){ return monthsBefore(6);  },
    'Lighting':               function(){ return monthsBefore(6);  },
    'Security':               function(){ return monthsBefore(6);  },
    'Food Traders':           function(){ return weeksBefore(8);   },
    'Food':                   function(){ return weeksBefore(8);   },
    'Entertainment':          function(){ return monthsBefore(6);  },
    'Staffing':               function(){ return weeksBefore(4);   },
    'Marketing':              function(){ return weeksBefore(8);   },
    'Entrance & Ticketing':   function(){ return weeksBefore(6);   },
    'Entrance':               function(){ return weeksBefore(6);   },
    'Decor & Flowers':        function(){ return weeksBefore(6);   },
    'Decor':                  function(){ return weeksBefore(6);   },
    'Logistics':              function(){ return weeksBefore(4);   },
    'On The Day':             function(){ return weeksBefore(1);   },
    'Wellness':               function(){ return monthsBefore(6);  },
  };

  return {
    weeksBefore:    weeksBefore,
    weeksAfter:     weeksAfter,
    monthsBefore:   monthsBefore,
    DEADLINES:      DEADLINES,
    CATEGORY_RULES: CATEGORY_RULES,
    dueDateForCategory: function(cat) {
      var fn = CATEGORY_RULES[cat];
      return fn ? fn() : null;
    },
    isOverdue: function(dateStr) {
      if (!dateStr) return false;
      return new Date(dateStr) < new Date();
    },
    daysUntil: function(dateStr) {
      if (!dateStr) return null;
      return Math.round((new Date(dateStr) - new Date()) / (1000 * 60 * 60 * 24));
    },
    statusLabel: function(dateStr) {
      if (!dateStr) return null;
      var days = this.daysUntil(dateStr);
      if (days < 0)  return { label: Math.abs(days) + 'd overdue', color: '#dc2626', bg: '#fee2e2' };
      if (days === 0) return { label: 'Due today', color: '#d97706', bg: '#fef3c7' };
      if (days <= 7)  return { label: 'Due in ' + days + 'd', color: '#d97706', bg: '#fef3c7' };
      if (days <= 14) return { label: 'Due in ' + days + 'd', color: '#854d0e', bg: '#fef9c3' };
      return { label: 'Due ' + dateStr, color: '#64748b', bg: '#f1f5f9' };
    }
  };
})();
