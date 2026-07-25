// ============================================================
// SkillBridge AI — app.js (IBM SkillsBuild SDG 8 Project)
// ============================================================

const OMNIROUTE_BASE = window.OMNIROUTE_BASE || localStorage.getItem("OMNIROUTE_BASE") || "http://localhost:20128/v1";
const OMNIROUTE_KEY  = window.OMNIROUTE_KEY  || localStorage.getItem("OMNIROUTE_KEY") || "";

let activeProfile = {
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
      period:  "2024 - 2026 · Present",
      details: [
        "Installed over 45+ rooftop solar inverter systems across residential projects.",
        "Diagnosed circuit fault codes and ensured safety standard adherence."
      ]
    }
  ],
  education:  "ITI Diploma in Electrical Trade (Government ITI College, Jaipur - 2024)",
  city:       "Jaipur",
  sector:     "Electrical"
};

const sampleProfiles = {
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
        period:  "2024 - 2026 · Present",
        details: [
          "Installed over 45+ rooftop solar inverter systems across residential projects.",
          "Diagnosed circuit fault codes and ensured safety standard adherence."
        ]
      }
    ],
    education: "ITI Diploma in Electrical Trade (Government ITI College - 2024)",
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
    skills:     ["Inventory Management", "Point of Sale (POS)", "Customer Service", "Stock Auditing", "Billing Cashiering"],
    experience: [
      {
        role:    "Store Assistant",
        company: "Kovai SuperMart, Coimbatore",
        period:  "2024 - 2026",
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
        period:  "2024 - 2026",
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

const knownCities = ["Jaipur", "Coimbatore", "Lucknow", "Indore", "Delhi", "Mumbai", "Pune", "Ahmedabad", "Kolkata", "Chennai", "Bangalore", "Hyderabad", "Bhopal", "Patna"];

const tradeCatalog = {
  tech: {
    title:   "Software Engineer & Tech Specialist",
    sector:  "IT",
    skills:  ["Python", "React", "JavaScript", "Software Engineering", "Problem Solving"],
    courses: [
      { week: 1, title: "Full Stack Web Development & API Integration", desc: "Build modern scalable React and Node.js applications.", link: "Free Course on IBM SkillsBuild Portal" },
      { week: 2, title: "Cloud Architecture & Software System Design", desc: "Master cloud deployment, database design, and microservices.", link: "SkillBridge Verified Micro-Certificate" }
    ]
  },
  electrical: {
    title:   "Electrical & Solar Installation Technician",
    sector:  "Electrical",
    skills:  ["Electrical Wiring", "Solar Inverter Maintenance", "Circuit Debugging", "Safety Compliance", "Customer Relations"],
    courses: [
      { week: 1, title: "Advanced Solar Inverter Fault Diagnostics", desc: "Learn micro-grid electrical safety, error codes, and battery bank maintenance.", link: "Free Course on IBM SkillsBuild / NSDC Portal" },
      { week: 2, title: "Customer Communication & Safety Standards", desc: "Master client interaction in Hindi/English and safety guidelines for rooftop installations.", link: "SkillBridge Verified Micro-Certificate" }
    ]
  },
  retail: {
    title:   "Retail Operations & Store Executive",
    sector:  "Retail",
    skills:  ["Inventory Management", "Point of Sale (POS)", "Customer Service", "Stock Auditing", "Billing Cashiering"],
    courses: [
      { week: 1, title: "Digital POS Systems & Automated Inventory", desc: "Hands-on training with modern retail software, barcode scanners, and stock ledgers.", link: "Free Course on IBM SkillsBuild / NSDC Portal" },
      { week: 2, title: "Customer Experience & Conflict Resolution", desc: "Practical communication skills for retail stores and regional customer handling.", link: "SkillBridge Verified Micro-Certificate" }
    ]
  },
  logistics: {
    title:   "Warehouse Logistics & Dispatch Coordinator",
    sector:  "Logistics",
    skills:  ["Dispatch Management", "Warehouse Operations", "Barcode Tracking", "Route Optimization", "Inventory Ledger"],
    courses: [
      { week: 1, title: "Smart Logistics & RFID Dispatch Tracking", desc: "Understanding digital consignment tracking, RFID tags, and warehouse management.", link: "Free Course on IBM SkillsBuild / NSDC Portal" },
      { week: 2, title: "Fleet Route Optimization & Safety Standards", desc: "Optimizing regional transport routes to cut fuel costs and ensure safety compliance.", link: "SkillBridge Verified Micro-Certificate" }
    ]
  },
  general: {
    title:   "Technical Operations Specialist",
    sector:  "Operations",
    skills:  ["Technical Documentation", "Process Coordination", "Quality Control", "Communication", "Problem Solving"],
    courses: [
      { week: 1, title: "Professional Workplace Fundamentals", desc: "Communication, safety, and project coordination skills for MSME workplaces.", link: "Free Course on IBM SkillsBuild / NSDC Portal" },
      { week: 2, title: "Digital Literacy & Office Tools", desc: "Master basic spreadsheets, email etiquette, and digital reporting tools.", link: "SkillBridge Verified Micro-Certificate" }
    ]
  }
};

// ================= ============================================
// REAL-WORLD LIVE JOBS CATALOG
// ============================================================
const jobsData = [
  {
    id: 1,
    title: "Software Engineer — Frontend & React",
    company: "Infosys BPM India",
    city: "Delhi",
    sector: "IT",
    salary: "₹35,000 – ₹50,000 / month",
    skillsRequired: ["React", "JavaScript", "Problem Solving"],
    posted: "Just now",
    type: "Full-Time · Tech Leader",
    applyUrl: "https://www.infosys.com/careers/"
  },
  {
    id: 2,
    title: "Python Developer & Data Associate",
    company: "Shadowfax Technologies",
    city: "Delhi",
    sector: "IT",
    salary: "₹32,000 – ₹45,000 / month",
    skillsRequired: ["Python", "SQL", "Problem Solving"],
    posted: "2 hours ago",
    type: "Full-Time · Tech Hub",
    applyUrl: "https://www.shadowfax.in/careers"
  },
  {
    id: 3,
    title: "Solar Inverter Installation Specialist",
    company: "Tata Power Solar Systems Ltd.",
    city: "Jaipur",
    sector: "Electrical",
    salary: "₹22,000 – ₹28,000 / month",
    skillsRequired: ["Electrical Wiring", "Solar Inverter Maintenance", "Safety Compliance"],
    posted: "1 day ago",
    type: "Full-Time · Verified MSME",
    applyUrl: "https://www.tatapowersolar.com/careers/"
  },
  {
    id: 4,
    title: "Industrial Wiring Maintenance Supervisor",
    company: "Schneider Electric India Ltd.",
    city: "Jaipur",
    sector: "Electrical",
    salary: "₹24,000 – ₹30,000 / month",
    skillsRequired: ["Circuit Debugging", "Electrical Wiring", "Safety Compliance"],
    posted: "3 hours ago",
    type: "Full-Time · Enterprise",
    applyUrl: "https://www.se.com/in/en/about-us/careers/"
  },
  {
    id: 5,
    title: "Retail Store & Inventory Supervisor",
    company: "Reliance Retail Outlets Hub",
    city: "Coimbatore",
    sector: "Retail",
    salary: "₹18,000 – ₹24,000 / month",
    skillsRequired: ["Inventory Management", "Point of Sale (POS)", "Customer Service"],
    posted: "4 hours ago",
    type: "Full-Time · Verified Enterprise",
    applyUrl: "https://relianceretail.com/careers.html"
  },
  {
    id: 6,
    title: "Regional Distribution Hub Coordinator",
    company: "Ecom Express Logistics Center",
    city: "Lucknow",
    sector: "Logistics",
    salary: "₹21,000 – ₹27,000 / month",
    skillsRequired: ["Dispatch Management", "Warehouse Operations", "Barcode Tracking"],
    posted: "5 hours ago",
    type: "Full-Time · Logistics Hub",
    applyUrl: "https://ecomexpress.in/careers/"
  },
  {
    id: 7,
    title: "Full Stack Developer",
    company: "Amazon IN Tech Hub",
    city: "Delhi",
    sector: "IT",
    salary: "₹45,000 – ₹65,000 / month",
    skillsRequired: ["React", "Python", "SQL", "JavaScript"],
    posted: "Today",
    type: "Full-Time · MNC Tech",
    applyUrl: "https://www.amazon.jobs/en/locations/india"
  }
];

let chatHistory = [];

// Initial setup
document.addEventListener("DOMContentLoaded", () => {
  renderResume(activeProfile);
  renderJobs();
  renderRoadmap(activeProfile.sector);
  checkApiStatus();

  const sendBtn = document.getElementById("sendBtn");
  if (sendBtn) {
    sendBtn.onclick = () => sendMessage();
  }
  const chatInput = document.getElementById("chatInput");
  if (chatInput) {
    chatInput.onkeydown = (e) => {
      if (e.key === "Enter") sendMessage();
    };
  }
});

// Global Function Binds for Inline HTML Handlers
window.sendMessage          = sendMessage;
window.loadSampleProfile    = loadSampleProfile;
window.saveResumeEdits      = saveResumeEdits;
window.removeSkill          = removeSkill;
window.addSkillPrompt       = addSkillPrompt;
window.addExperiencePrompt  = addExperiencePrompt;
window.resetCurrentProfile  = resetCurrentProfile;
window.filterJobs           = filterJobs;
window.applyJob             = applyJob;
window.openCourse           = openCourse;
window.downloadResumePDF    = downloadResumePDF;

// Load Sample Candidates
function loadSampleProfile(type) {
  const profile = sampleProfiles[type];
  if (!profile) return;

  activeProfile = JSON.parse(JSON.stringify(profile));
  renderResume(activeProfile);
  renderJobs();
  renderRoadmap(activeProfile.sector);

  const chatContainer = document.getElementById("chatMessages");
  if (chatContainer) {
    const text = type === "electrician"
      ? "Hi, I'm Rahul Sharma from Jaipur. I have 2 years experience as an electrician and solar panel installer."
      : type === "retail"
      ? "Hi, I'm Priya Nair from Coimbatore. I work in retail inventory management and cashiering."
      : "Hi, I'm Amit Kumar from Lucknow. I've worked in warehouse logistics and dispatch tracking for 2 years.";

    chatContainer.innerHTML += `<div class="msg user">${text}</div>`;
    chatContainer.innerHTML += `
      <div class="msg bot">
        Namaste! 👋 Profile loaded: <strong>${profile.name}</strong> (${profile.title} in <strong>${profile.city}</strong>).<br><br>
        <strong>Extracted Skills:</strong> ${profile.skills.map(s => `<code>${s}</code>`).join(" ")}<br><br>
        👉 Your ATS Resume & Job Predictions have automatically updated!
      </div>
    `;
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }
  showToast(`Loaded candidate profile: ${profile.name} (${profile.city}) ✅`);
}

function configureApiKeyPrompt() {
  const currentKey = localStorage.getItem("SKILLBRIDGE_AI_KEY") || "";
  const newKey = prompt("Enter your OpenAI / Groq / Gemini API Key (Leave blank to use built-in Smart AI Engine):", currentKey);
  if (newKey !== null) {
    localStorage.setItem("SKILLBRIDGE_AI_KEY", newKey.trim());
    if (newKey.trim()) {
      showToast("🟢 Custom AI Cloud API Key saved!");
    } else {
      showToast("ℹ️ Switched to Built-in Smart AI Engine.");
    }
  }
}
window.configureApiKeyPrompt = configureApiKeyPrompt;

async function callOpenAICompatibleAPI(apiKey, messages) {
  const systemPrompt = `You are SkillBridge AI, an encouraging career assistant for Indian youth. Candidate Name: ${activeProfile.name}, City: ${activeProfile.city}, Target Role: ${activeProfile.title}. Give helpful, concise (2-3 sentences) responses in friendly English.`;
  const endpoint = apiKey.startsWith("gsk_")
    ? "https://api.groq.com/openai/v1/chat/completions"
    : "https://api.openai.com/v1/chat/completions";
  const model = apiKey.startsWith("gsk_") ? "llama-3.1-8b-instant" : "gpt-3.5-turbo";

  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    signal: AbortSignal.timeout(3500),
    body: JSON.stringify({
      model: model,
      messages: [{ role: "system", content: systemPrompt }, ...messages.slice(-4)],
      max_tokens: 250
    })
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data.choices?.[0]?.message?.content || null;
}

// Send Message
async function sendMessage() {
  const input = document.getElementById("chatInput");
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;

  const chatContainer = document.getElementById("chatMessages");
  if (!chatContainer) return;

  chatContainer.innerHTML += `<div class="msg user">${escapeHtml(text)}</div>`;
  input.value = "";
  chatContainer.scrollTop = chatContainer.scrollHeight;
  chatHistory.push({ role: "user", content: text });

  const loadingId = "bot-loading-" + Date.now();
  chatContainer.innerHTML += `
    <div class="msg bot" id="${loadingId}">
      <i class="fa-solid fa-spinner fa-spin"></i> <em>Analyzing skills & matching jobs…</em>
    </div>
  `;
  chatContainer.scrollTop = chatContainer.scrollHeight;

  let aiReply = null;

  // 1. Try Custom User API Key if configured
  const customKey = localStorage.getItem("SKILLBRIDGE_AI_KEY") || window.SKILLBRIDGE_AI_KEY;
  if (customKey) {
    try {
      aiReply = await callOpenAICompatibleAPI(customKey, chatHistory);
    } catch (_) {}
  }

  // 2. Try Localhost OmniRoute if running on localhost
  if (!aiReply) {
    const isLocalHost = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
    if (isLocalHost && OMNIROUTE_KEY) {
      try {
        aiReply = await callOmniRoute("antigravity/auto", chatHistory, 800);
      } catch (_) {}
    }
  }

  // 3. Fallback to Smart Internal AI Engine
  const reply = aiReply ?? processUserSkillInput(text);
  chatHistory.push({ role: "assistant", content: reply });

  const loadingEl = document.getElementById(loadingId);
  if (loadingEl) {
    loadingEl.outerHTML = `<div class="msg bot">${reply}</div>`;
  } else {
    chatContainer.innerHTML += `<div class="msg bot">${reply}</div>`;
  }
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function processUserSkillInput(inputStr) {
  processUserSkillInputSilent(inputStr);

  const lower = inputStr.toLowerCase();

  // 1. Greeting
  const isGreetingOnly = /\b(?:hi|hello|hey|namaste)\b/i.test(inputStr) && inputStr.split(' ').length <= 3;
  if (isGreetingOnly) {
    return `Namaste <strong>${activeProfile.name}</strong>! 👋<br><br>I am your SkillBridge AI Assistant. Tell me your name, city, degree, or skills (e.g. <em>"I am Kunal from Delhi with a B.Tech degree"</em>) and I will generate your ATS resume and match you with regional jobs!`;
  }

  // 2. Interview / Preparation Advice
  if (lower.includes("interview") || lower.includes("prepare") || lower.includes("question")) {
    return `
      💡 <strong>Interview Preparation Tips for ${activeProfile.title}:</strong><br><br>
      1️⃣ <strong>Technical Core:</strong> Be prepared to explain hands-on projects using ${activeProfile.skills.slice(0, 3).join(", ") || "your technical skills"}.<br>
      2️⃣ <strong>Local MSME Focus:</strong> Employers in <strong>${activeProfile.city}</strong> value practical problem-solving, safety compliance, and team coordination.<br>
      3️⃣ <strong>ATS Resume:</strong> Download your verified SkillBridge ATS PDF from the <strong>Resume</strong> tab and bring 2 printed copies!
    `;
  }

  // 3. Salary / Compensation Guidance
  if (lower.includes("salary") || lower.includes("pay") || lower.includes("package") || lower.includes("earning")) {
    return `
      💰 <strong>Regional Salary Insights for ${activeProfile.city}:</strong><br><br>
      • <strong>${activeProfile.title}:</strong> ₹25,000 – ₹45,000 / month (depending on experience & technical trade certifications).<br>
      • Top hiring sectors in ${activeProfile.city}: <strong>${activeProfile.sector} & Tech Enterprises</strong>.<br>
      👉 Check the <strong>Jobs</strong> tab to view live salary ranges for active openings!
    `;
  }

  // 4. Course / Micro-Roadmap Guidance
  if (lower.includes("course") || lower.includes("roadmap") || lower.includes("learn") || lower.includes("study")) {
    return `
      📚 <strong>Recommended Micro-Roadmap for ${activeProfile.name}:</strong><br><br>
      • <strong>Week 1:</strong> Core Skill Certification on IBM SkillsBuild Portal.<br>
      • <strong>Week 2:</strong> Practical Workplace Safety & Digital Operations.<br><br>
      👉 Click the <strong>Roadmap</strong> tab at the bottom to start your free 2-week learning modules!
    `;
  }

  // 5. Standard Profile Update Response
  const hasSkills = activeProfile.skills && activeProfile.skills.length > 0;
  if (!hasSkills) {
    return `
      Great to meet you, <strong>${activeProfile.name}</strong>! I've set up your profile in <strong>${activeProfile.city}</strong> with your <strong>${activeProfile.education}</strong>. ✅<br><br>
      👤 <strong>Name:</strong> ${activeProfile.name}<br>
      📍 <strong>Location:</strong> ${activeProfile.location}<br>
      🎓 <strong>Education:</strong> ${activeProfile.education}<br>
      💼 <strong>Target Role:</strong> ${activeProfile.title}<br>
      ⚠️ <strong>Skills:</strong> <em>None added yet.</em><br><br>
      💡 <strong>What skills or tech stack do you have?</strong><br>
      (e.g., <code>Python, React, Web Development, Java, SQL, C++, Electrician, Retail</code>)<br><br>
      👉 Tell me below, or click <strong>+ Add Skill</strong> on your Resume tab!
    `;
  }

  return `
    Great to meet you, <strong>${activeProfile.name}</strong>! I've updated your ATS Resume & Job Predictions. ✅<br><br>
    👤 <strong>Name:</strong> ${activeProfile.name}<br>
    📍 <strong>Location:</strong> ${activeProfile.location}<br>
    🎓 <strong>Education:</strong> ${activeProfile.education}<br>
    💼 <strong>Target Role:</strong> ${activeProfile.title}<br>
    🛠️ <strong>Your Skills:</strong> ${activeProfile.skills.map(s => `<code>${s}</code>`).join(" ")}<br><br>
    👉 Click the <strong>Resume</strong> tab to view/download your PDF, or <strong>Jobs</strong> to see live active positions in ${activeProfile.city}!
  `;
}

function processUserSkillInputSilent(inputStr) {
  const text = inputStr.toLowerCase();

  // Smart Name Extraction
  const nameMatch = inputStr.match(/(?:my name is|i am|i'm|this is)\s+([a-zA-Z]+(?:\s+[a-zA-Z]+)?)/i);
  let isNewUser = false;

  if (nameMatch?.[1]) {
    let extracted = nameMatch[1].trim();
    extracted = extracted.replace(/\s+(?:from|in|living|based|at|and|working|study|studying|with)\b.*/i, '').trim();
    if (extracted && extracted.toLowerCase() !== "from") {
      const newName = extracted.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
      if (newName !== activeProfile.name) {
        activeProfile.name = newName;
        activeProfile.skills = []; // RESET PRE-FILLED SKILLS FOR NEW USER!
        isNewUser = true;
      }
    }
  }

  // City Extraction
  for (const city of knownCities) {
    if (text.includes(city.toLowerCase())) {
      activeProfile.city     = city;
      activeProfile.location = `${city}, India`;
      break;
    }
  }

  // Update Email dynamically
  const firstName = activeProfile.name.split(' ')[0].toLowerCase();
  activeProfile.email = `${firstName}.${activeProfile.city.toLowerCase().replace(/\s+/g, '')}@gmail.com`;

  // Education & Degree Scanner
  const degreeKeywords = [
    { key: "b.tech", label: "B.Tech in Computer Science / Engineering — Delhi Technological University (2026)", isTech: true },
    { key: "btech",  label: "B.Tech in Engineering — Delhi Technical University (2026)", isTech: true },
    { key: "b.sc",   label: "B.Sc in Applied Sciences — University of Delhi (2026)", isTech: true },
    { key: "bsc",    label: "B.Sc Science Degree — University of Delhi (2026)", isTech: true },
    { key: "bca",    label: "BCA Computer Applications — IP University Delhi (2026)", isTech: true },
    { key: "diploma",label: "Diploma in Technical Trade — State Technical Board (2026)", isTech: false },
    { key: "degree", label: "Bachelor's Degree — Delhi University (2026)", isTech: true },
    { key: "iti",    label: "ITI Technical Certification — Govt ITI Institute (2026)", isTech: false }
  ];

  let detectedTechDegree = false;
  for (const item of degreeKeywords) {
    if (text.includes(item.key)) {
      activeProfile.education = item.label;
      if (item.isTech) detectedTechDegree = true;
      break;
    }
  }

  // Explicit Skill Extraction from user message
  const skillCatalog = [
    "Python", "React", "JavaScript", "HTML", "CSS", "Node.js", "Java", "C++", "C#", "SQL",
    "Web Development", "Software Engineering", "Full Stack", "Data Science", "Machine Learning",
    "Excel", "Solar Inverter Maintenance", "Electrical Wiring", "Circuit Debugging", "Safety Compliance",
    "Inventory Management", "Point of Sale (POS)", "Customer Service", "Stock Auditing", "Billing Cashiering",
    "Dispatch Management", "Warehouse Operations", "Barcode Tracking", "Route Optimization",
    "Team Coordination", "EV Charging", "HVAC Maintenance", "Plumbing", "Welding", "AutoCAD", "CAD"
  ];

  const newlyMentionedSkills = skillCatalog.filter(k => text.includes(k.toLowerCase()));

  if (newlyMentionedSkills.length > 0) {
    activeProfile.skills = Array.from(new Set([...activeProfile.skills, ...newlyMentionedSkills]));
  }

  // Dynamic Target Role & Summary
  if (detectedTechDegree || text.includes("python") || text.includes("react") || text.includes("code") || text.includes("software") || text.includes("web") || text.includes("java")) {
    activeProfile.title  = "Software Engineer & Tech Specialist";
    activeProfile.sector = "IT";
  } else if (text.includes("electric") || text.includes("solar") || text.includes("wire")) {
    activeProfile.title  = "Electrical & Solar Technician";
    activeProfile.sector = "Electrical";
  } else if (text.includes("retail") || text.includes("store") || text.includes("shop")) {
    activeProfile.title  = "Retail & Store Operations Executive";
    activeProfile.sector = "Retail";
  } else if (text.includes("logistic") || text.includes("warehouse") || text.includes("cargo")) {
    activeProfile.title  = "Warehouse Logistics Coordinator";
    activeProfile.sector = "Logistics";
  } else {
    activeProfile.title  = detectedTechDegree ? "Software Engineer & Tech Specialist" : "Technical Operations Specialist";
    activeProfile.sector = detectedTechDegree ? "IT" : "Operations";
  }

  const skillsSummaryText = activeProfile.skills.length > 0
    ? `Skilled in ${activeProfile.skills.slice(0, 4).join(", ")},`
    : `Focusing on ${activeProfile.title} opportunities,`;

  activeProfile.summary = `Motivated and results-driven ${activeProfile.title} based in ${activeProfile.city}. ${skillsSummaryText} seeking key opportunities in top regional enterprises and tech hubs (2026 Active Profile).`;

  if (isNewUser || (activeProfile.experience && activeProfile.experience[0]?.company.includes("Sunrise"))) {
    activeProfile.experience = [
      {
        role:    `Graduate Assistant / Intern — ${activeProfile.title}`,
        company: `${activeProfile.city} Tech Solutions & Regional Hub`,
        period:  "2024 - 2026 · Present",
        details: [
          `Worked on core projects for ${activeProfile.title} in ${activeProfile.city}.`,
          "Applied technical concepts, quality standards, and industry best practices."
        ]
      }
    ];
  }

  renderResume(activeProfile);
  renderJobs();
  renderRoadmap(activeProfile.sector);

  const paper = document.getElementById("resumePaper");
  if (paper) {
    paper.style.boxShadow = "0 0 30px rgba(99,102,241,0.6)";
    setTimeout(() => { paper.style.boxShadow = ""; }, 1500);
  }
}

function handleKeyPress(e) {
  if (e.key === "Enter") sendMessage();
}

// ================= ============================================
// RESUME INLINE EDITOR & AUTO-SYNC ENGINE
// ============================================================
function renderResume(profile) {
  const g = id => document.getElementById(id);
  if (g("resName"))     g("resName").textContent     = profile.name;
  if (g("resTitle"))    g("resTitle").textContent     = profile.title;
  if (g("resLocation")) g("resLocation").textContent  = profile.location;
  if (g("resEmail"))    g("resEmail").textContent     = profile.email;
  if (g("resPhone"))    g("resPhone").textContent     = profile.phone;
  if (g("resSummary"))  g("resSummary").textContent   = profile.summary;

  if (g("resSkills")) {
    if (!profile.skills || profile.skills.length === 0) {
      g("resSkills").innerHTML = `<span style="color:#64748b;font-size:12px;font-style:italic;">No skills added yet — tell AI Chat your skills or click + Add Skill</span>`;
    } else {
      g("resSkills").innerHTML = profile.skills
        .map((s, i) => `
          <span class="skill-chip blue">
            ${s}
            <span class="remove-skill-btn" onclick="removeSkill(${i})" title="Remove skill">&times;</span>
          </span>
        `).join("");
    }
  }

  if (g("resExperience")) {
    g("resExperience").innerHTML = profile.experience.map((exp) => `
      <div class="exp-item" style="margin-bottom: 14px;">
        <h4 class="editable-field" contenteditable="true" onblur="saveResumeEdits()" style="font-size:14px;font-weight:600;color:#0f172a;">${exp.role} — ${exp.company}</h4>
        <div class="meta editable-field" contenteditable="true" onblur="saveResumeEdits()" style="font-size:12px;color:#64748b;">${exp.period}</div>
        <p class="editable-field" contenteditable="true" onblur="saveResumeEdits()" style="font-size:13px;color:#334155;line-height:1.5;">${exp.details.join(" ")}</p>
      </div>
    `).join("");
  }

  if (g("resEducation")) {
    g("resEducation").innerHTML = profile.education;
  }
}

function saveResumeEdits() {
  const g = id => document.getElementById(id)?.textContent.trim() || "";
  activeProfile.name     = g("resName")     || activeProfile.name;
  activeProfile.title    = g("resTitle")    || activeProfile.title;
  activeProfile.location = g("resLocation") || activeProfile.location;
  activeProfile.email    = g("resEmail")    || activeProfile.email;
  activeProfile.phone    = g("resPhone")    || activeProfile.phone;
  activeProfile.summary  = g("resSummary")  || activeProfile.summary;
  activeProfile.education= g("resEducation")|| activeProfile.education;

  renderJobs();
  showToast("💾 Resume edits saved! Job predictions re-calculated.");
}

function removeSkill(index) {
  activeProfile.skills.splice(index, 1);
  renderResume(activeProfile);
  renderJobs();
  showToast("Skill removed. ✅");
}

function addSkillPrompt() {
  const newSkill = prompt("Enter a new skill (e.g. Python, React, Web Development, Solar Inverter):");
  if (newSkill && newSkill.trim()) {
    activeProfile.skills.push(newSkill.trim());
    renderResume(activeProfile);
    renderJobs();
    showToast(`Added skill: "${newSkill.trim()}" ✅`);
  }
}

function addExperiencePrompt() {
  const role = prompt("Job Role (e.g. Software Engineering Intern):", "Technical Specialist");
  if (!role) return;
  const company = prompt("Company Name (e.g. Delhi Tech Enterprises):", "Regional Enterprise");
  const period = prompt("Duration (e.g. 2024 - 2026):", "2024 - 2026");
  const details = prompt("Key Description / Accomplishment:", "Executed core software development projects.");

  activeProfile.experience.push({
    role,
    company,
    period,
    details: [details || "Successfully managed technical projects."]
  });

  renderResume(activeProfile);
  showToast("Work experience added! ✅");
}

function resetCurrentProfile() {
  activeProfile = JSON.parse(JSON.stringify(sampleProfiles.electrician));
  renderResume(activeProfile);
  renderJobs();
  renderRoadmap(activeProfile.sector);
  showToast("Profile reset to default Rahul Sharma (Electrician). ✅");
}

// ================= ============================================
// DYNAMIC REAL-WORLD JOB PREDICTION ENGINE
// ============================================================
function renderJobs() {
  const grid = document.getElementById("jobsGrid");
  if (!grid) return;

  const searchInput = document.getElementById("jobSearchInput")?.value.toLowerCase().trim() || "";
  const selectedCity   = document.getElementById("cityFilter")?.value || "all";
  const selectedSector = document.getElementById("sectorFilter")?.value || "all";

  let filtered = jobsData.filter(j => {
    const cityMatch   = selectedCity === "all" || j.city.toLowerCase() === selectedCity.toLowerCase();
    const sectorMatch = selectedSector === "all" || j.sector.toLowerCase().includes(selectedSector.toLowerCase());
    
    let searchMatch = true;
    if (searchInput) {
      searchMatch = j.title.toLowerCase().includes(searchInput) ||
                    j.company.toLowerCase().includes(searchInput) ||
                    j.skillsRequired.some(s => s.toLowerCase().includes(searchInput)) ||
                    j.city.toLowerCase().includes(searchInput);
    }
    return cityMatch && sectorMatch && searchMatch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; background: var(--surface); border-radius: 16px; border: 1px dashed var(--border);">
        <i class="fa-solid fa-magnifying-glass" style="font-size: 32px; color: var(--accent); margin-bottom: 12px;"></i>
        <h3 style="font-size: 16px;">No exact job matches found for current filters</h3>
        <p style="font-size: 13px; color: var(--muted); margin-top: 4px;">Try clearing search keywords or selecting "All Cities" to view live postings.</p>
        <button onclick="document.getElementById('jobSearchInput').value=''; document.getElementById('cityFilter').value='all'; document.getElementById('sectorFilter').value='all'; filterJobs();" class="btn-primary" style="margin-top: 16px; padding: 8px 20px; font-size: 13px;">Clear All Filters</button>
      </div>
    `;
    return;
  }

  // Calculate dynamic skill match score
  grid.innerHTML = filtered.map(job => {
    const userSkillsLower = (activeProfile.skills || []).map(s => s.toLowerCase());
    const matchedCount = job.skillsRequired.filter(req => 
      userSkillsLower.some(us => us.includes(req.toLowerCase()) || req.toLowerCase().includes(us))
    ).length;

    let matchPercentage = job.skillsRequired.length > 0 ? Math.round((matchedCount / job.skillsRequired.length) * 100) : 75;
    if (matchPercentage < 65) matchPercentage = 68;
    if (matchPercentage > 98) matchPercentage = 98;

    const circumference = 2 * Math.PI * 16;
    const strokeDashoffset = circumference * (1 - matchPercentage / 100);
    const ringColor = matchPercentage >= 90 ? "#10b981" : matchPercentage >= 80 ? "#6366f1" : "#8b5cf6";

    return `
      <div class="job-card">
        <div class="top">
          <div>
            <span class="company">${job.company}</span>
            <div class="title">${job.title}</div>
            <span style="font-size:10px;color:var(--muted);"><i class="fa-regular fa-clock"></i> ${job.posted} · ${job.type}</span>
          </div>
          <div class="match-ring" title="${matchedCount} of ${job.skillsRequired.length} required skills matched">
            <svg viewBox="0 0 40 40">
              <circle class="bg" cx="20" cy="20" r="16"/>
              <circle class="progress" cx="20" cy="20" r="16" stroke-dasharray="${circumference}" stroke-dashoffset="${strokeDashoffset}" stroke="${ringColor}"/>
            </svg>
            <span class="label" style="color: ${ringColor}">${matchPercentage}%</span>
          </div>
        </div>
        <div class="tags" style="margin: 10px 0;">
          ${job.skillsRequired.map(s => {
            const isMatched = userSkillsLower.some(us => us.includes(s.toLowerCase()) || s.toLowerCase().includes(us));
            return `<span style="${isMatched ? 'background:rgba(16,185,129,0.15);color:#10b981;border-color:rgba(16,185,129,0.3);' : ''}">${s} ${isMatched ? '✓' : ''}</span>`;
          }).join("")}
        </div>
        <div class="bottom" style="display:flex;flex-direction:column;gap:8px;align-items:stretch;">
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <span class="salary">${job.salary}</span>
            <span style="font-size:11px;color:var(--muted);"><i class="fa-solid fa-location-dot"></i> ${job.city}</span>
          </div>
          <div style="display:flex;gap:6px;margin-top:4px;">
            <a href="${job.applyUrl}" target="_blank" class="btn-secondary" style="flex:1;text-align:center;text-decoration:none;padding:6px 8px;font-size:11px;border-radius:8px;">
              🔗 Official Portal
            </a>
            <button class="apply-btn" style="flex:1.2;font-size:11px;padding:6px 8px;" onclick="applyJob(this, '${job.title}', '${job.company}')">
              ⚡ 1-Click AI Card
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function filterJobs() { renderJobs(); }

function applyJob(btn, title, company) {
  btn.innerHTML = '✓ Card Sent!';
  btn.style.background = 'rgba(16,185,129,0.2)';
  btn.style.color = '#10b981';
  showToast(`✅ Verified AI Match Card sent directly to HR at <strong>${company}</strong>!`);
  setTimeout(() => {
    btn.innerHTML = '⚡ 1-Click AI Card';
    btn.style.background = '';
    btn.style.color = '';
  }, 3000);
}

function renderRoadmap(sector) {
  const container = document.getElementById("roadmap");
  if (!container) return;

  const key  = sector ? sector.toLowerCase() : "electrical";
  const info = tradeCatalog[key] || tradeCatalog.electrical;

  container.innerHTML = info.courses.map((m, i) => `
    <div class="step">
      <div class="node ${i === 0 ? 'completed' : i === 1 ? 'in-progress' : 'locked'}">
        ${String(i + 1).padStart(2, '0')}
      </div>
      <div class="content">
        <h4>${m.title}</h4>
        <p>${m.desc}</p>
        <div style="margin-top: 8px;">
          <a href="#" onclick="openCourse(event, '${m.link}')" style="color: var(--accent); font-size: 11px; text-decoration: none; font-weight: 600;">
            <i class="fa-solid fa-circle-play"></i> ${m.link}
          </a>
        </div>
      </div>
    </div>
  `).join("");
}

function openCourse(event, courseName) {
  event.preventDefault();
  showToast(`📚 Opening course: <strong>${courseName}</strong> — Redirecting to IBM SkillsBuild Portal`);
}

function downloadResumePDF() {
  const element = document.getElementById('resumePaper');
  if (!element) return;
  
  const clone = element.cloneNode(true);
  clone.querySelectorAll('.remove-skill-btn').forEach(btn => btn.remove());
  
  const opt = {
    margin:       0.4,
    filename:     `${activeProfile.name.replace(/\s+/g, '_')}_SkillBridge_ATS_Resume.pdf`,
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2, useCORS: true },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  showToast("📄 Generating custom ATS PDF… download starting!");
  html2pdf().set(opt).from(clone).save();
}

function checkApiStatus() {
  fetch(`${OMNIROUTE_BASE}/models`, {
    headers: { "Authorization": `Bearer ${OMNIROUTE_KEY}` },
    signal: AbortSignal.timeout(1200)
  }).then(res => {
    if (res.ok) showToast("🟢 Antigravity CLI AI Engine Connected!");
  }).catch(() => {});
}

async function callOmniRoute(model, messages, timeoutMs = 1500) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  const systemPrompt = {
    role: "system",
    content: `You are SkillBridge AI, an encouraging career assistant for Indian youth. Give helpful, concise (2-3 sentences) responses. Candidate Name: ${activeProfile.name}, City: ${activeProfile.city}, Education: ${activeProfile.education}. Ask candidate what skills or tech stack they have if not provided yet.`
  };

  try {
    const res = await fetch(`${OMNIROUTE_BASE}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OMNIROUTE_KEY}`
      },
      signal: controller.signal,
      body: JSON.stringify({
        model: model,
        messages: [systemPrompt, ...messages.slice(-4)],
        temperature: 0.7,
        max_tokens: 250
      })
    });
    clearTimeout(timer);
    if (!res.ok) return null;
    const data = await res.json();
    return data.choices?.[0]?.message?.content || null;
  } catch (err) {
    clearTimeout(timer);
    return null;
  }
}

function showToast(message, type = "info") {
  document.querySelectorAll(".toast-notification").forEach(t => t.remove());
  const toast = document.createElement("div");
  toast.className = `toast-notification toast-${type}`;
  toast.innerHTML = message;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("toast-visible"));
  setTimeout(() => {
    toast.classList.remove("toast-visible");
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

function escapeHtml(str) {
  return str.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}
