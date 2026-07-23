export const initialProfile = {
  name:       "Rahul Sharma",
  title:      "Certified Electrician & Solar Installation Technician",
  location:   "Jaipur, Rajasthan",
  email:      "rahul.sharma.tech@gmail.com",
  phone:      "+91 98765 43210",
  summary:    "Motivated technician with 2+ years of hands-on experience in residential electrical wiring, circuit debugging, and rooftop solar panel installation. Seeking hyper-local employment in Jaipur region MSMEs.",
  skills:     ["Electrical Wiring", "Solar Inverter Maintenance", "Circuit Debugging", "Safety Compliance", "Customer Relations"],
  experience: [
    {
      role:    "Junior Electrical Technician",
      company: "Sunrise Energy Services, Jaipur",
      period:  "2023 - Present",
      details: [
        "Installed over 45+ rooftop solar inverter systems across residential projects.",
        "Diagnosed circuit fault codes and ensured safety standard adherence."
      ]
    }
  ],
  education:  "ITI Diploma in Electrical Trade (Government ITI College, Jaipur - 2023)",
  city:       "Jaipur",
  sector:     "Electrical"
};

export const sampleProfiles = {
  electrician: {
    name:       "Rahul Sharma",
    title:      "Certified Electrician & Solar Installation Technician",
    location:   "Jaipur, Rajasthan",
    email:      "rahul.sharma.tech@gmail.com",
    phone:      "+91 98765 43210",
    summary:    "Motivated technician with 2+ years of hands-on experience in residential electrical wiring, circuit debugging, and rooftop solar panel installation. Seeking hyper-local employment in Jaipur region MSMEs.",
    skills:     ["Electrical Wiring", "Solar Inverter Maintenance", "Circuit Debugging", "Safety Compliance", "Customer Relations"],
    experience: [
      {
        role:    "Junior Electrical Technician",
        company: "Sunrise Energy Services, Jaipur",
        period:  "2023 - Present",
        details: [
          "Installed over 45+ rooftop solar inverter systems across residential projects.",
          "Diagnosed circuit fault codes and ensured safety standard adherence."
        ]
      }
    ],
    education: "ITI Diploma in Electrical Trade (Government ITI College - 2023)",
    city:      "Jaipur",
    sector:    "Electrical"
  },
  retail: {
    name:       "Priya Nair",
    title:      "Retail Operations & Vernacular Customer Executive",
    location:   "Coimbatore, Tamil Nadu",
    email:      "priya.nair.retail@gmail.com",
    phone:      "+91 97654 32109",
    summary:    "Enthusiastic customer support and store inventory assistant fluent in Tamil and English. Experienced in barcode scanning, cashiering, and local retail operations.",
    skills:     ["Inventory Management", "Point of Sale (POS)", "Customer Service", "Stock Auditing", "Vernacular Communication"],
    experience: [
      {
        role:    "Store Assistant",
        company: "Kovai SuperMart, Coimbatore",
        period:  "2023 - 2024",
        details: [
          "Managed daily stock entry and inventory auditing for 500+ SKUs.",
          "Handled billing cashiering with 100% accuracy during peak festive seasons."
        ]
      }
    ],
    education: "Higher Secondary Certificate (HSC) — Government Girls School, Coimbatore",
    city:      "Coimbatore",
    sector:    "Retail"
  },
  logistic: {
    name:       "Amit Kumar Verma",
    title:      "Warehouse Logistics & Fleet Coordinator",
    location:   "Lucknow, Uttar Pradesh",
    email:      "amit.verma.logistics@gmail.com",
    phone:      "+91 96543 21098",
    summary:    "Organized warehouse coordinator skilled in dispatch tracking, package sorting, and team coordination. Strong familiarity with local transport routes in UP region.",
    skills:     ["Dispatch Management", "Warehouse Operations", "Barcode Tracking", "Route Optimization", "Team Coordination"],
    experience: [
      {
        role:    "Logistics Assistant",
        company: "Awadh Logistics & Cargo Hub, Lucknow",
        period:  "2022 - 2024",
        details: [
          "Coordinated daily dispatch of 200+ local delivery packages.",
          "Maintained digital logs of inward and outward consignment trucks."
        ]
      }
    ],
    education: "Diploma in Mechanical Trade (Govt Polytechnic, Lucknow)",
    city:      "Lucknow",
    sector:    "Logistics"
  }
};

export const jobsData = [
  { id: 1, title: "Solar Inverter Installation Technician",     company: "Rajasthan Green Power MSME",       city: "Jaipur",      sector: "Electrical", salary: "₹18,000 – ₹24,000 / mo", match: 96, color: "#10b981", skillsRequired: ["Electrical Wiring", "Solar Inverter Maintenance", "Safety Compliance"] },
  { id: 2, title: "Industrial Wiring Maintenance Supervisor",   company: "Jaipur Industrial Electricals Ltd.", city: "Jaipur",    sector: "Electrical", salary: "₹22,000 – ₹28,000 / mo", match: 92, color: "#10b981", skillsRequired: ["Circuit Debugging", "Electrical Wiring"] },
  { id: 3, title: "Retail Store & Inventory Supervisor",        company: "Coimbatore Retail Outlets",         city: "Coimbatore", sector: "Retail",     salary: "₹16,000 – ₹20,000 / mo", match: 95, color: "#10b981", skillsRequired: ["Inventory Management", "Point of Sale (POS)", "Customer Service"] },
  { id: 4, title: "Regional Distribution Hub Coordinator",      company: "Express Cargo & Logistics Lucknow", city: "Lucknow",    sector: "Logistics",  salary: "₹19,000 – ₹25,000 / mo", match: 94, color: "#10b981", skillsRequired: ["Dispatch Management", "Warehouse Operations", "Route Optimization"] },
  { id: 5, title: "Solar Maintenance Field Agent",              company: "SunWatts Microgrid Solutions",       city: "Jaipur",    sector: "Electrical", salary: "₹17,500 – ₹22,000 / mo", match: 89, color: "#6366f1", skillsRequired: ["Solar Inverter Maintenance", "Customer Relations"] },
  { id: 6, title: "Store Inventory Executive",                  company: "Awadh SuperMarket Chain",            city: "Lucknow",   sector: "Retail",     salary: "₹15,500 – ₹19,000 / mo", match: 91, color: "#10b981", skillsRequired: ["Inventory Management", "Billing Cashiering"] }
];

export const tradeCatalog = {
  electrical: {
    title:   "Electrical & Solar Installation Technician",
    sector:  "Electrical",
    skills:  ["Electrical Wiring", "Solar Inverter Maintenance", "Circuit Debugging", "Safety Compliance", "Customer Relations"],
    courses: [
      { week: 1, title: "Advanced Solar Inverter Fault Diagnostics", desc: "Micro-grid electrical safety, error codes, and battery maintenance.", status: "completed" },
      { week: 2, title: "Customer Communication & Safety Standards", desc: "Client interaction in Hindi/English and rooftop safety guidelines.", status: "in-progress" },
      { week: 3, title: "Industrial MSME Wiring & Circuit Auditing", desc: "High-voltage industrial panel diagnostics and fault isolation.", status: "locked" }
    ]
  },
  retail: {
    title:   "Retail Operations & Store Executive",
    sector:  "Retail",
    skills:  ["Inventory Management", "Point of Sale (POS)", "Customer Service", "Stock Auditing", "Billing Cashiering"],
    courses: [
      { week: 1, title: "Digital POS Systems & Automated Inventory", desc: "Hands-on with modern retail software, barcode scanners, and stock ledgers.", status: "completed" },
      { week: 2, title: "Customer Experience & Conflict Resolution", desc: "Practical communication skills for retail stores and customer handling.", status: "in-progress" },
      { week: 3, title: "Festive Season Peak Cashiering & Billing", desc: "Speed billing techniques and zero-error till closing.", status: "locked" }
    ]
  },
  logistics: {
    title:   "Warehouse Logistics & Dispatch Coordinator",
    sector:  "Logistics",
    skills:  ["Dispatch Management", "Warehouse Operations", "Barcode Tracking", "Route Optimization", "Inventory Ledger"],
    courses: [
      { week: 1, title: "Smart Logistics & RFID Dispatch Tracking", desc: "Understanding digital consignment tracking and RFID management.", status: "completed" },
      { week: 2, title: "Fleet Route Optimization & Safety Standards", desc: "Optimizing regional transport routes to cut fuel costs and save time.", status: "in-progress" },
      { week: 3, title: "Warehouse Inventory Auditing & ERP Tools", desc: "Stock counting, damaged goods logging, and ERP entry.", status: "locked" }
    ]
  },
  general: {
    title:   "Vocational Operations Specialist",
    sector:  "Operations",
    skills:  ["Technical Documentation", "Process Coordination", "Quality Control", "Communication", "Problem Solving"],
    courses: [
      { week: 1, title: "Professional Workplace Fundamentals", desc: "Communication, safety, and coordination for MSME workplaces.", status: "completed" },
      { week: 2, title: "Digital Literacy & Office Tools", desc: "Master basic spreadsheets, email etiquette, and reporting tools.", status: "in-progress" }
    ]
  }
};
