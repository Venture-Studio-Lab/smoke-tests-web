window.CONCEPTS={
"sign-shop":{
  root:"R1",
  label:"Sign Shop Quote Builder",
  audience:"Independent 1–5 person sign shops",
  headline:"Quote the sign, not the spreadsheet.",
  subheadline:"Save your shop's material, labor, machine and install rules once, then build consistent custom sign quotes without a full MIS or ERP.",
  bullets:[
    "Area, quantity-break and custom-item pricing from your own rates",
    "See internal margin before the customer sees price",
    "Generate a branded quote from reusable shop rules"
  ],
  whyTitle:"Why this isn't just QuickBooks or a spreadsheet",
  whyText:"QuickBooks can format an estimate and a spreadsheet can do the math. This concept is only worth paying for if sign-specific pricing rules make quoting materially faster and harder to misprice.",
  boundary:"No inventory barcodes, production Gantt, proofing suite, accounting replacement or franchise workflow.",
  plans:[
    {id:"monthly",name:"Solo monthly",price:"$29/month",detail:"Quote-focused workflow for one shop"},
    {id:"annual",name:"Solo annual",price:"$249/year",detail:"One shop · cancel before renewal"}
  ],
  rolePrompt:"Which best describes your shop?",
  roles:["1-person sign shop","2–5 person sign shop","Estimator / salesperson at a small sign shop","Other"],
  tools:["Spreadsheet + email","QuickBooks estimates","EstiMate / SignTracker / shopVOX","Paper / calculator","Nothing consistent","Other"]
},
"window-cleaning":{
  root:"R1",
  label:"Window Cleaning Instant Quote",
  audience:"Residential window-cleaning owner-operators and small teams",
  headline:"Let the customer qualify the job before you spend time quoting it.",
  subheadline:"Share a simple quote link on your site or socials. Customers enter the job details, see a configured ballpark, and send you a qualified request using your pricing rules.",
  bullets:[
    "Your own pane, story, access, minimum and add-on rules",
    "The customer does routine quote intake 24/7",
    "Receive the request with their inputs and the resulting price range"
  ],
  whyTitle:"Why this isn't just a spreadsheet",
  whyText:"A spreadsheet can calculate a price after you enter the job. This concept only earns its fee if it removes you from routine quote intake and reduces wasted calls, back-and-forth or site visits.",
  boundary:"No scheduling, dispatch, payments, CRM, route optimization or AI photo estimating in the first product.",
  plans:[
    {id:"monthly",name:"Solo monthly",price:"$19/month",detail:"Hosted self-quote link + pricing rules"},
    {id:"annual",name:"Solo annual",price:"$149/year",detail:"Hosted self-quote link + pricing rules"}
  ],
  rolePrompt:"Which best describes your business?",
  roles:["Solo window cleaner","2–5 person window-cleaning company","Estimator / salesperson","Other"],
  tools:["Phone/text and manual quote","Google Maps / Zillow / customer photos","Spreadsheet","Jobber / Zenbooker","QuoteIQ / ResponsiBid","Nothing consistent","Other"]
},
"routine-player":{
  root:"R3",
  label:"Routine Player",
  audience:"People who already know the routine but lose time while executing it",
  headline:"Your calendar says when. Press Play to know what to do now.",
  subheadline:"Build an ordered routine once. Start it, follow one timed step at a time, and let the remaining sequence shift when real life runs long.",
  bullets:[
    "Per-step timer with complete, skip, pause and add-time controls",
    "Remaining routine timing updates as you go",
    "Use the same player for morning, night, gym, leaving-home or work-start routines"
  ],
  whyTitle:"Why this isn't just Google Calendar",
  whyText:"A calendar can remind you that a routine starts. It doesn't run the sequence with you. This concept is only worth paying for if step-by-step execution removes enough decision and time friction to matter.",
  boundary:"Not a calendar, habit-streak tracker, cleaning scheduler, coaching program or medical/ADHD treatment.",
  freeTierNote:"Free version: up to 2 routines. Paid access unlocks unlimited routines.",
  plans:[
    {id:"annual",name:"Pro annual",price:"$24.99/year",detail:"Unlimited routines"},
    {id:"lifetime",name:"Lifetime",price:"$39.99 one-time",detail:"Unlimited routines"}
  ],
  rolePrompt:"Which best describes you today?",
  roles:["I already use timed routines","I use a calendar/checklist but lose track during execution","I use a routine/planner app","I want structured step-by-step routines but don't use an app yet","Other"],
  tools:["Google Calendar / reminders","Notes / checklist","Interval timer","Routinery / RoutineFlow","Structured / Tiimo / another planner","Nothing consistent","Other"]
},
"screen-printing":{
  root:"R1",
  label:"Screen Printing Margin + Quote",
  audience:"1–5 person screen-printing and custom-apparel shops",
  headline:"Keep the pricing logic. Lose the copy-paste.",
  subheadline:"Save your shop's pricing rules, see margin on every job, and turn the result into a customer-ready quote without production-management software.",
  bullets:[
    "Garment cost, colors, locations, setup, labor and quantity breaks in one flow",
    "Margin guardrails before the price goes out",
    "Reusable shop rules plus a branded customer quote"
  ],
  whyTitle:"Why this isn't just a pricing spreadsheet",
  whyText:"A spreadsheet can calculate price and free calculators exist. This concept only earns its fee if keeping shop rules, margin checks and the customer quote in one repeatable flow saves enough work to matter.",
  boundary:"No supplier catalog sync, inventory, production scheduling, artwork approvals, ecommerce or shop ERP in the first product.",
  plans:[
    {id:"monthly",name:"Solo monthly",price:"$15/month",detail:"Pricing rules + margin + customer quotes"},
    {id:"lifetime",name:"Solo lifetime",price:"$89 one-time",detail:"Pricing rules + margin + customer quotes"}
  ],
  rolePrompt:"Which best describes your shop?",
  roles:["1-person print shop","2–5 person print shop","Estimator / salesperson at a small print shop","Other"],
  tools:["Google Sheets / Excel pricing matrix","QuickBooks / Wave + spreadsheet","Printavo / YoPrint / InkSoft / DecoNetwork","Paid pricing spreadsheet / calculator","Paper / calculator","Nothing consistent","Other"]
}
};
