// ============================================================
//  Tất cả nội dung của portfolio nằm ở file này.
//  Nguồn: Portfolio brief đã được Như xác nhận (10/2026).
// ============================================================

const PROFILE = {
  name: "Nhu Vuong",
  location: "Ho Chi Minh City, Vietnam",
  email: "nhu.vuong68@gmail.com",
  github: "https://github.com/nhuvuong68",
  linkedin: "https://www.linkedin.com/in/nhuvuong68/",
  cv: "assets/cv/Nhu_Vuong_CV.pdf",
  avatar: "images/ava.jpg",

  eyebrow: "Product Portfolio",
  headline: "Building products around real user problems.",
  title: "Product Owner · Customer discovery · CRM, field-service & shopfloor products",
  intro:
    "Product Owner who starts in the field. I built a CRM and field-service product from scratch, and now own requirements for a shopfloor product rolled out to 20 plants. I care about solving the right business problem — and proving it with data.",

  story: [
    "I started on the business side — planning production with suppliers at Decathlon, then analysing sales and operations data at Huu Toan Group.",
    "At Huu Toan I got the chance to build a product from nothing: HES, a CRM and field-service system for our Sales, Customer Service and technicians. I went into the field with them, decided what to ship first and what could wait, and watched renewal rate climb from 63% to 81%.",
    "HES made me want to understand the technical side more deeply and work at a bigger scale. So I joined FPT Software to learn how a well-run software product team operates — Agile delivery, engineering standards, release management, and a global rollout of a shopfloor product to 20 manufacturing plants.",
    "Today I bring both: the business instinct to find the right problem, and the discipline of running a software product team. I want to keep doing that inside a product company, owning a product and its users for the long run.",
  ],

  stages: [
    { title: "Business side", text: "Decathlon · Huu Toan Group" },
    { title: "Built HES from scratch", text: "Product Owner, Huu Toan Group" },
    { title: "Software product team", text: "FPT Software" },
  ],

  framework: [
    { n: "01", title: "Understand", text: "Who is the user, and what problem do they have?", proof: "Sales vs. management needs in HES CRM" },
    { n: "02", title: "Discover", text: "Observe the real workflow, interview users.", proof: "Ride-alongs with technicians; 3 plant visits" },
    { n: "03", title: "Prioritize", text: "Value, user impact, effort, risk.", proof: "Online-first launch, 2 months earlier" },
    { n: "04", title: "Define", text: "Backlog, user stories, acceptance criteria.", proof: "Backlog for a 20-person Agile squad" },
    { n: "05", title: "Deliver", text: "Engineering, UAT, release, training.", proof: "Pilot → releases → full offline mode" },
    { n: "06", title: "Measure", text: "Adoption, efficiency, customer outcome.", proof: "Renewal rate 63% → 81%" },
  ],

  ai: {
    text: "I led research and standardisation of an AI framework for my team, and use AI daily as a working tool.",
    tools: ["ChatGPT", "Claude"],
    uses: ["Research synthesis", "Requirements drafting", "Delivery documentation"],
  },

  dna: [
    { title: "Business curiosity", text: "I ask why before defining what." },
    { title: "User empathy", text: "I've worked directly with operational users, including field technicians." },
    { title: "Analytical thinking", text: "A BI and data background means decisions start from evidence." },
    { title: "Delivery experience", text: "Requirements, vendors, Agile, UAT and rollout — as both BA and PM." },
    { title: "International collaboration", text: "Experience with distributed teams across Europe, India and APAC." },
    { title: "Enterprise complexity", text: "CRM, data, field service and global manufacturing environments." },
  ],

  closing: ["From solving business problems", "to building products people rely on."],
};

// ------------------------------------------------------------
//  CASE STUDIES — mỗi case là 1 trang: project.html?id=<id>
//  Block: text, quote, flow, columns, cards, table, metrics,
//         phones, admin, image, embed
// ------------------------------------------------------------
const CASES = [
  {
    id: "field-service",
    number: "01",
    flagship: true,
    title: "HES Mobile: bringing field service to the technician",
    summary: "Technicians worked at customer sites, but the workflow was built for the office. I went into the field, shipped online-first, and used a pilot to learn what offline really needed.",
    tags: ["Field service", "Mobile", "Dynamics 365", "Power Platform"],
    meta: [
      { k: "My role", v: "Product Owner (cum Data-IT Team Leader)" },
      { k: "Users", v: "Field technicians, with Sales & Customer Service" },
      { k: "Product", v: "HES Mobile, part of HES (Dynamics 365 + Power Platform)" },
      { k: "Context", v: "Huu Toan Group · built 100% from scratch" },
    ],
    blocks: [
      {
        type: "text",
        kicker: "Problem",
        heading: "Technicians worked at customer sites — but the workflow was built for the office.",
      },
      {
        type: "beforeafter",
        before: {
          label: "Before",
          steps: ["Receive job", "Travel to customer", "Repair", "Write on paper", "Back to office", "Office re-enters data"],
          pain: [3, 4, 5],
        },
        after: {
          label: "With HES Mobile",
          steps: ["Open job with equipment history", "Check parts before leaving", "Repair: pick lists, take photos", "Customer signs on screen", "Signed report goes to customer & CS"],
        },
        legend: "Steps where information was delayed or typed twice",
      },
      {
        type: "table",
        kicker: "Discovery",
        heading: "I rode along with technicians. What I saw → what we built",
        intro: "I observed how they worked at customer sites and interviewed them about their needs and pain points.",
        headers: ["What I saw in the field", "What we built"],
        rows: [
          ["Gloves on, oily hands — hard to type much", "Pick from lists, take photos, sign on screen"],
          ["Arrived without maintenance history, model or replaced parts — had to call the office", "Equipment & customer history right on the job ticket"],
          ["Notes on paper, re-typed back at the office", "Complete the ticket + customer signature in the app, sent straight to CS"],
          ["Found missing parts only on site — second visit needed", "Check stock / order parts before leaving"],
          ["Customers didn't know when the technician would arrive and kept calling CS", "Status notifications to the customer"],
        ],
      },
      {
        type: "cards",
        kicker: "Decision",
        heading: "Online first, offline later",
        items: [
          { title: "The tension", text: "Technicians wanted offline. Building it first would delay go-live by 2 months." },
          { title: "The call", text: "Go live online for Sales & CS; pilot HES Mobile with technicians in strong-coverage areas." },
          { title: "Why", text: "Sales & CS start 2+ months earlier, and the pilot brings real feedback early." },
        ],
      },
      {
        type: "table",
        heading: "What the pilot taught us — shipped in later releases",
        headers: ["Pilot feedback", "Shipped"],
        rows: [
          ["Customer signature box didn't fit the job", "Redesigned the signature box"],
          ["Uploading photos on site meant waiting", "Photos saved offline, auto-sync when back online"],
          ["Customers needed the signed report to confirm", "Export the report as PDF and send it via Zalo"],
        ],
        after: "Then the full offline mode — built on much clearer requirements.",
      },
      {
        type: "phones",
        kicker: "Flow",
        heading: "The technician's job, step by step",
        note: "Illustrative wireframe, recreated for this portfolio. Not production UI. All data is fictional.",
        screens: [
          { title: "My jobs", btn: "Open job", items: [{ label: "Job #0001 · Customer A", value: "Repair · 09:00", tag: "new" }, { label: "Job #0002 · Customer B", value: "Maintenance · 11:30" }], why: "Start from the job ticket." },
          { title: "Equipment", btn: "Start repair", items: [{ label: "Unit", value: "#0001 · Model X" }, { label: "Last service", value: "Service #12" }, { label: "Parts replaced", value: "Part A, Part B" }], why: "History on site — no call to the office." },
          { title: "Repair", btn: "Next", items: [{ label: "Issue", value: "Select ▾" }, { label: "Photo 1", value: "Waiting to sync", tag: "offline" }, { label: "Photo 2", value: "Waiting to sync", tag: "offline" }], why: "Lists & photos, gloves on. Syncs later." },
          { title: "Sign-off", btn: "Confirm", items: [{ box: "Customer signs here" }], why: "No paper to re-type at the office." },
          { title: "Report", btn: "Share via Zalo", items: [{ label: "Service report", value: "Report_0001.pdf" }, { label: "Sent to CS", value: "✓" }], why: "Customer gets the signed report." },
        ],
      },
      {
        type: "metrics",
        kicker: "Outcome",
        heading: "HES programme results",
        items: [
          { value: "63% → 81%", label: "renewal rate (+18 pts)" },
          { value: "+22%", label: "field-service capacity" },
          { value: "−33%", label: "response time" },
        ],
        note: "Programme-level results for HES.",
      },
      {
        type: "quote",
        kicker: "What I learned",
        text: "Shipping online-first was a bet that real usage would teach us more than two more months of building. The pilot told us exactly what offline needed to do.",
      },
    ],
  },
  {
    id: "crm",
    number: "02",
    title: "HES CRM: one customer record across Sales, CS and field service",
    summary: "Built from scratch for 100 users. The key call: stop making one form serve two masters — capture customer data in stages.",
    tags: ["CRM", "Dynamics 365", "Power Apps"],
    meta: [
      { k: "My role", v: "Product Owner" },
      { k: "Users", v: "Sales, CS, technicians, management (100 users)" },
      { k: "Platform", v: "Dynamics 365, Power Platform" },
      { k: "Context", v: "Huu Toan Group · built from scratch, with an external vendor" },
    ],
    blocks: [
      {
        type: "text",
        kicker: "Problem",
        heading: "Sales, Customer Service and field service each held part of the customer — in different places.",
      },
      {
        type: "hub",
        heading: "One customer record, six modules",
        sources: [
          { title: "Sales", text: "B2B sales: leads, opportunities, quotations" },
          { title: "Customer Service", text: "Service cases to resolution" },
          { title: "Field service", text: "Technician jobs — see Case 01" },
        ],
        core: { title: "One customer record", items: ["Customer information", "Devices", "Warranty"] },
      },
      {
        type: "cards",
        kicker: "Decision",
        heading: "Two users, one form",
        items: [
          { title: "The tension", text: "Sales wanted to log a first meeting fast. Management wanted as much detail as possible." },
          { title: "The call", text: "Staged data capture: basics first (name, phone, initial need); deeper questions at later contacts. Built as custom staged forms in Power Apps." },
          { title: "Result", text: "Sales logged more consistently, and customer profiles became richer and deeper." },
        ],
      },
      { type: "image", heading: "Solution architecture", image: "images/port4_crm_architecture.png" },
      {
        type: "flow",
        heading: "My part, end to end",
        steps: ["Field discovery", "Backlog & prioritisation", "Requirements & user stories", "Vendor coordination & delivery", "UAT", "Training & adoption", "Iterate from feedback"],
      },
      {
        type: "metrics",
        heading: "Scale",
        items: [
          { value: "100", label: "users" },
          { value: "3", label: "user groups: Sales, CS, technicians" },
          { value: "0 → 1", label: "built from scratch" },
        ],
        note: "Programme outcomes: see Case 01.",
      },
    ],
  },
  {
    id: "shopfloor",
    number: "03",
    title: "Shopfloor management: one product, 20 plants",
    summary: "Requirements and backlog for a shopfloor product rolled out globally. Two calls: turn plant requests into shared settings, and pause features to harden the product.",
    tags: ["Shopfloor", "Real-time machine data", "Global rollout", "Agile"],
    meta: [
      { k: "My role", v: "Project Manager — Acting as Product Owner: requirement engineering & backlog for a 20-person Agile squad" },
      { k: "Context", v: "A global industrial manufacturer · shopfloor management & real-time machine data" },
      { k: "Scale", v: "Rollout to 20 plants across Europe and Asia · extended team ~50" },
      { k: "Tech", v: "Angular, Java, APIs, microservices, cloud" },
    ],
    blocks: [
      {
        type: "plants",
        count: 20,
        visited: [0, 7, 13],
        core: "One product",
        coreSub: "20 plants",
        legend: ["Plant in the global rollout", "Visited on site (3)"],
        text: "20 plants across Europe and Asia, one shared product — and plant requests to weigh against the global standard.",
        note: "Illustrative diagram. Plant positions are not geographic.",
      },
      {
        type: "metrics",
        items: [
          { value: "20", label: "people in the Agile squad" },
          { value: "~50", label: "extended team" },
          { value: "2025", label: "SCM Best Project" },
        ],
      },
      {
        type: "text",
        kicker: "Discovery",
        heading: "On site at 3 plants, I observed and interviewed operators and team leaders.",
        body: "What goes wrong during operations, and what is hard to use in the product being rolled out.",
      },
      {
        type: "flow",
        kicker: "Decision A",
        heading: "Is this plant request global or local?",
        steps: ["Plant request", "Purpose & pain point", "Do other plants need it?", "Aligned with corporate standard?", "Local setting or standard feature"],
      },
      {
        type: "admin",
        heading: "Example: one KPI setting, two kinds of plant",
        text: "A make-to-order plant didn't steer by Delivery Reliability like the make-to-stock plants. It wanted to track Extra Freight — the cost of rush shipping caused by late production. We made the steering KPI an option in Admin, so both kinds of plant use the same product.",
        setting: "Steering KPI",
        options: [
          { plant: "Make-to-stock plant", kpi: "Delivery Reliability", value: "00.0%" },
          { plant: "Make-to-order plant", kpi: "Extra Freight", value: "€ 0,000" },
        ],
        note: "Illustrative wireframe. Not production UI. All data is fictional.",
      },
      { type: "quote", text: "A plant-specific request is often a global need nobody has named yet." },
      {
        type: "cards",
        kicker: "Decision B",
        heading: "Pause new features to harden the product",
        items: [
          { title: "The risk", text: "New features, maintenance and new plant rollouts all ran at once. Technical debt was building up — a risk to users and to the rollout." },
          { title: "The case", text: "I quantified current app performance, effort, cost and benefit of upgrading Angular and Java and improving database and app performance — and made the case to the client's project manager. Approved." },
          { title: "The trade-off", text: "The next plant rollout moved by 2 weeks. I re-ordered the backlog around it." },
          { title: "Result", text: "A faster, more stable app, ready for the next plants — and more positive feedback from users." },
        ],
      },
    ],
  },
  {
    id: "data-products",
    number: "04",
    title: "Power BI decision products",
    summary: "Dashboards built as products around the recurring decisions of 6 departments — used in 80% of company-wide recurring meetings.",
    tags: ["Data product", "Power BI", "Power Query"],
    meta: [
      { k: "My role", v: "Product Owner — and hands-on builder" },
      { k: "Users", v: "60 users across 6 departments" },
      { k: "Platform", v: "Power BI, SharePoint" },
      { k: "Context", v: "Huu Toan Group" },
    ],
    blocks: [
      {
        type: "metrics",
        items: [
          { value: "11", label: "dashboards" },
          { value: "60", label: "users" },
          { value: "6", label: "departments" },
          { value: "80%", label: "of recurring company meetings" },
        ],
      },
      { type: "flow", kicker: "Approach", heading: "From raw data to a decision", steps: ["Raw data", "Data model", "Business logic", "Dashboard", "Decision"] },
      {
        type: "image",
        heading: "Sales pipeline: what moved in the last two weeks?",
        text: "For the sales team's bi-weekly meeting: new leads, stage movement, deals won and lost, deals with no movement.",
        image: "images/port2_biweekly.png",
        note: "Built with sample data.",
      },
      { type: "embed", heading: "Try it: Sales Pipeline", src: "https://app.powerbi.com/view?r=eyJrIjoiNTY4YzhmMjEtOTMxOS00YmNjLWEzNzAtMmVmZGEyOTA3MmYwIiwidCI6ImRiMDVhMDA0LWQ5MWMtNDhkNS1hZjAyLTc5MDQwN2I1ZGZlMiIsImMiOjEwfQ%3D%3D", note: "Built with sample data." },
      {
        type: "image",
        heading: "Weekly sales performance",
        text: "Progress against target, growth vs. last year, and a B2B deep dive.",
        image: "images/port1_b2b_overview.png",
        note: "Built with sample data.",
      },
      { type: "embed", heading: "Try it: Sales Performance", src: "https://app.powerbi.com/view?r=eyJrIjoiNDNjYWU5MGEtOTQ4Ny00YTU3LTljZWUtYWEyYmZkNjRmYzQ0IiwidCI6ImRiMDVhMDA0LWQ5MWMtNDhkNS1hZjAyLTc5MDQwN2I1ZGZlMiIsImMiOjEwfQ%3D%3D", note: "Built with sample data." },
      {
        type: "metrics",
        kicker: "Earlier, as Business Analyst",
        items: [
          { value: "12,000 → 3,000", label: "product codes consolidated" },
          { value: "−5%", label: "sales cycle" },
          { value: "+30%", label: "new-product sales" },
        ],
      },
    ],
  },
];

const OTHER_WORK = [
  { title: "TMDb Movies Analysis", text: "Exploratory data analysis in Python (pandas).", href: "https://github.com/nhuvuong68/EDA_TMDb_movie_data" },
];
