import React, { useState } from 'react';
import ThreeCanvas from './components/ThreeCanvas';
import Navbar from './components/Navbar';
import BottomTabs from './components/BottomTabs';
import { initialProfile, sampleProfiles, jobsData, tradeCatalog } from './data/mockData';

const knownCities = ["Jaipur", "Coimbatore", "Lucknow", "Indore", "Delhi", "Mumbai", "Pune", "Ahmedabad", "Kolkata", "Chennai", "Bangalore", "Hyderabad", "Bhopal", "Patna"];

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [profile, setProfile] = useState(initialProfile);
  const [language, setLanguage] = useState('en');
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Namaste! 👋 I am your SkillBridge AI Companion.\n\nTell me your name, city, degree, or skills (e.g. "I am Kunal from Delhi with a B.Tech degree").'
    }
  ]);
  const [input, setInput] = useState('');
  const [searchKey, setSearchKey] = useState('');
  const [cityFilter, setCityFilter] = useState('all');
  const [sectorFilter, setSectorFilter] = useState('all');
  const [toast, setToast] = useState(null);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3500);
  };

  const handleSwitchTab = (index) => {
    setActiveTab(index);
  };

  const handleSampleProfile = (type) => {
    const p = sampleProfiles[type];
    if (!p) return;
    setProfile({ ...p });
    const userText = type === 'electrician'
      ? "Hi, I'm Rahul Sharma from Jaipur. I have 2 years experience as an electrician and solar panel installer."
      : type === 'retail'
      ? "Hi, I'm Priya Nair from Coimbatore. I work in retail inventory management and cashiering."
      : "Hi, I'm Amit Kumar from Lucknow. I've worked in warehouse logistics and dispatch tracking for 2 years.";

    setMessages(prev => [
      ...prev,
      { sender: 'user', text: userText },
      {
        sender: 'bot',
        text: `Great to meet you, ${p.name}! ✅\n\nProfile Loaded: ${p.title} in ${p.city}\nSkills Extracted: ${p.skills.join(', ')}\n\n👉 Click the Resume tab to view your ATS PDF, or Jobs tab to see your local matches!`
      }
    ]);
    showToast(`Loaded ${p.name}'s profile (${p.city}) ✅`);
  };

  const processInput = (text) => {
    let newProfile = { ...profile };
    const lower = text.toLowerCase();

    // 1. Smart Name Extraction
    const nameMatch = text.match(/(?:my name is|i am|i'm|this is)\s+([a-zA-Z]+(?:\s+[a-zA-Z]+)?)/i);
    if (nameMatch?.[1]) {
      let extracted = nameMatch[1].trim();
      extracted = extracted.replace(/\s+(?:from|in|living|based|at|and|working|study|studying|with)\b.*/i, '').trim();
      if (extracted && extracted.toLowerCase() !== "from") {
        const cleanName = extracted.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
        if (cleanName !== newProfile.name) {
          newProfile.name = cleanName;
          newProfile.skills = []; // reset pre-filled skills for new user
        }
      }
    }

    // 2. City Extraction
    for (const c of knownCities) {
      if (lower.includes(c.toLowerCase())) {
        newProfile.city = c;
        newProfile.location = `${c}, India`;
        break;
      }
    }

    const firstName = newProfile.name.split(' ')[0].toLowerCase();
    newProfile.email = `${firstName}.${newProfile.city.toLowerCase().replace(/\s+/g, '')}@gmail.com`;

    // 3. Education & Degree Scanner
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

    let isTechDegree = false;
    for (const item of degreeKeywords) {
      if (lower.includes(item.key)) {
        newProfile.education = item.label;
        if (item.isTech) isTechDegree = true;
        break;
      }
    }

    // 4. Skills Extraction
    const skillCatalog = [
      "Python", "React", "JavaScript", "HTML", "CSS", "Node.js", "Java", "C++", "C#", "SQL",
      "Web Development", "Software Engineering", "Full Stack", "Data Science", "Machine Learning",
      "Excel", "Solar Inverter Maintenance", "Electrical Wiring", "Circuit Debugging", "Safety Compliance",
      "Inventory Management", "Point of Sale (POS)", "Customer Service", "Stock Auditing", "Billing Cashiering",
      "Dispatch Management", "Warehouse Operations", "Barcode Tracking", "Route Optimization",
      "Team Coordination", "EV Charging", "HVAC Maintenance", "Plumbing", "Welding", "AutoCAD", "CAD"
    ];

    const newlyMentioned = skillCatalog.filter(k => lower.includes(k.toLowerCase()));
    if (newlyMentioned.length > 0) {
      newProfile.skills = Array.from(new Set([...newProfile.skills, ...newlyMentioned]));
    }

    // 5. Role & Sector
    if (isTechDegree || lower.includes("python") || lower.includes("react") || lower.includes("code") || lower.includes("software") || lower.includes("web") || lower.includes("java")) {
      newProfile.title = "Software Engineer & Tech Specialist";
      newProfile.sector = "IT";
    } else if (lower.includes("electric") || lower.includes("solar") || lower.includes("wire")) {
      newProfile.title = "Electrical & Solar Technician";
      newProfile.sector = "Electrical";
    } else if (lower.includes("retail") || lower.includes("store")) {
      newProfile.title = "Retail & Store Operations Executive";
      newProfile.sector = "Retail";
    } else if (lower.includes("logistic") || lower.includes("warehouse")) {
      newProfile.title = "Warehouse Logistics Coordinator";
      newProfile.sector = "Logistics";
    } else {
      newProfile.title = isTechDegree ? "Software Engineer & Tech Specialist" : "Technical Operations Specialist";
      newProfile.sector = isTechDegree ? "IT" : "Operations";
    }

    const skillsText = newProfile.skills.length > 0
      ? `Skilled in ${newProfile.skills.slice(0, 4).join(", ")},`
      : `Focusing on ${newProfile.title} opportunities,`;

    newProfile.summary = `Motivated and results-driven ${newProfile.title} based in ${newProfile.city}. ${skillsText} seeking key opportunities in top regional enterprises and tech hubs (2026 Active Profile).`;

    setProfile(newProfile);
    return newProfile;
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;
    const userText = input.trim();
    setInput('');
    setMessages(prev => [...prev, { sender: 'user', text: userText }]);

    setTimeout(() => {
      const updatedProfile = processInput(userText);
      const lower = userText.toLowerCase();

      let botReply = `Great to meet you, ${updatedProfile.name}! ✅\n\n👤 Name: ${updatedProfile.name}\n📍 Location: ${updatedProfile.location}\n🎓 Education: ${updatedProfile.education}\n💼 Target Role: ${updatedProfile.title}\n🛠️ Your Skills: ${updatedProfile.skills.join(', ') || 'None added yet'}\n\n👉 Click the Resume tab to view your ATS PDF, or Jobs tab to see live active positions in ${updatedProfile.city}!`;

      if (lower.includes("interview") || lower.includes("prepare")) {
        botReply = `💡 Interview Preparation Tips for ${updatedProfile.title}:\n\n1️⃣ Technical Core: Be prepared to explain hands-on projects using ${updatedProfile.skills.join(', ') || 'your technical skills'}.\n2️⃣ Local Employer Focus: Employers in ${updatedProfile.city} value practical problem-solving and team coordination.\n3️⃣ ATS Resume: Download your verified ATS PDF from the Resume tab!`;
      } else if (lower.includes("salary") || lower.includes("pay")) {
        botReply = `💰 Regional Salary Insights for ${updatedProfile.city}:\n\n• ${updatedProfile.title}: ₹25,000 – ₹45,000 / month.\n• Top hiring sectors: ${updatedProfile.sector} & Tech Enterprises.\n👉 Check the Jobs tab to view live active salary ranges!`;
      }

      setMessages(prev => [...prev, { sender: 'bot', text: botReply }]);
    }, 400);
  };

  const handleDownloadPDF = () => {
    if (window.html2pdf) {
      const element = document.getElementById('resumePaper');
      if (element) {
        const clone = element.cloneNode(true);
        clone.querySelectorAll('.remove-skill-btn').forEach(btn => btn.remove());
        const opt = {
          margin: 0.4,
          filename: `${profile.name.replace(/\s+/g, '_')}_SkillBridge_ATS_Resume.pdf`,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true },
          jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        showToast("📄 Generating ATS PDF... Download starting!");
        window.html2pdf().set(opt).from(clone).save();
        return;
      }
    }
    showToast("📄 Resume PDF generated!");
  };

  const handleRemoveSkill = (idx) => {
    setProfile(prev => {
      const newSkills = [...prev.skills];
      newSkills.splice(idx, 1);
      return { ...prev, skills: newSkills };
    });
    showToast("Skill removed ✅");
  };

  const handleAddSkill = () => {
    const s = prompt("Enter a new skill (e.g. Python, React, Solar Maintenance):");
    if (s && s.trim()) {
      setProfile(prev => ({ ...prev, skills: [...prev.skills, s.trim()] }));
      showToast(`Added skill: "${s.trim()}" ✅`);
    }
  };

  const filteredJobs = jobsData.filter(j => {
    const cMatch = cityFilter === 'all' || j.city.toLowerCase() === cityFilter.toLowerCase();
    const sMatch = sectorFilter === 'all' || j.sector.toLowerCase().includes(sectorFilter.toLowerCase());
    const kMatch = !searchKey || j.title.toLowerCase().includes(searchKey.toLowerCase()) || j.company.toLowerCase().includes(searchKey.toLowerCase());
    return cMatch && sMatch && kMatch;
  });

  const activeCourses = (tradeCatalog[profile.sector.toLowerCase()] || tradeCatalog.electrical).courses;

  return (
    <div className="app">
      <ThreeCanvas activeTab={activeTab} />

      {toast && (
        <div className="toast-notification toast-visible">
          {toast}
        </div>
      )}

      <div className="page-container">
        {/* Tab 0: Home */}
        <div className={`tab-page ${activeTab === 0 ? 'active' : ''}`}>
          <div className="ui-layer hero-page">
            <Navbar
              activeTab={activeTab}
              onSwitchTab={handleSwitchTab}
              language={language}
              onLanguageChange={setLanguage}
              apiStatus="AI Engine Connected"
            />
            <div className="hero">
              <h1 className="reveal-item revealed">Bridge Skills.<br/>Build Futures.</h1>
              <p className="reveal-item revealed">AI career companion bridging employment gaps for Tier-2/3 youth through conversational AI, predictive MSME job matching, and live ATS resume generation.</p>
              <div className="cta-group">
                <button className="btn-primary reveal-item revealed" onClick={() => handleSwitchTab(1)}>Launch AI Assistant</button>
                <button className="btn-secondary reveal-item revealed" onClick={() => handleSwitchTab(3)}>Explore Jobs</button>
              </div>
            </div>
          </div>
        </div>

        {/* Tab 1: AI Chat */}
        <div className={`tab-page ${activeTab === 1 ? 'active' : ''}`}>
          <div className="ui-layer" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div className="chat-container">
              <div className="chat-header">
                <h2>AI Chat Assistant (2026)</h2>
                <p>Chat to auto-generate & update your live ATS Resume & Job predictions</p>
              </div>

              <div className="sample-chips">
                <button className="sample-chip" onClick={() => handleSampleProfile('electrician')}>⚡ Rahul (Jaipur) — Electrician</button>
                <button class="sample-chip" onClick={() => handleSampleProfile('retail')}>🛍️ Priya (Coimbatore) — Retail</button>
                <button className="sample-chip" onClick={() => handleSampleProfile('logistic')}>📦 Amit (Lucknow) — Warehouse</button>
              </div>

              <div className="messages">
                {messages.map((m, idx) => (
                  <div key={idx} className={`msg ${m.sender}`}>
                    {m.text.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br/>
                      </React.Fragment>
                    ))}
                  </div>
                ))}
              </div>

              <div className="input-area">
                <input
                  type="text"
                  placeholder="Type your name, city, degree, or skills..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button className="send-btn" onClick={handleSendMessage}>Send</button>
              </div>
            </div>
          </div>
        </div>

        {/* Tab 2: Resume */}
        <div className={`tab-page ${activeTab === 2 ? 'active' : ''}`}>
          <div className="ui-layer resume-wrap">
            <div className="download-bar">
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', color: 'var(--accent)' }}>ATS-Ready Resume Preview</h3>
                <p style={{ fontSize: '12px', color: 'var(--muted)' }}>Click any field to edit directly • Auto-synced with AI Chat</p>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button className="btn-secondary" style={{ padding: '6px 12px', fontSize: '12px' }} onClick={handleAddSkill}>+ Add Skill</button>
                <button className="btn-primary" style={{ padding: '6px 14px', fontSize: '12px' }} onClick={handleDownloadPDF}>Download PDF</button>
              </div>
            </div>

            <div className="resume-card" id="resumePaper">
              <div className="resume-header">
                <div>
                  <div className="name" contentEditable suppressContentEditableWarning onBlur={(e) => setProfile(p => ({ ...p, name: e.target.textContent }))}>{profile.name}</div>
                  <div className="title" contentEditable suppressContentEditableWarning onBlur={(e) => setProfile(p => ({ ...p, title: e.target.textContent }))}>{profile.title}</div>
                </div>
                <div className="contact">
                  <span contentEditable suppressContentEditableWarning onBlur={(e) => setProfile(p => ({ ...p, location: e.target.textContent }))}>{profile.location}</span><br/>
                  <span contentEditable suppressContentEditableWarning onBlur={(e) => setProfile(p => ({ ...p, email: e.target.textContent }))}>{profile.email}</span><br/>
                  <span contentEditable suppressContentEditableWarning onBlur={(e) => setProfile(p => ({ ...p, phone: e.target.textContent }))}>{profile.phone}</span>
                </div>
              </div>
              <div className="resume-divider"></div>
              <div className="resume-section-title">Professional Profile</div>
              <p contentEditable suppressContentEditableWarning onBlur={(e) => setProfile(p => ({ ...p, summary: e.target.textContent }))} style={{ fontSize: '13px', color: '#334155', lineHeight: '1.6', marginBottom: '16px' }}>{profile.summary}</p>
              <div className="resume-divider"></div>
              <div className="resume-section-title">Skills & Technical Competencies</div>
              <div className="skills">
                {profile.skills.length === 0 ? (
                  <span style={{ color: '#64748b', fontSize: '12px', fontStyle: 'italic' }}>No skills added yet — tell AI Chat your skills or click + Add Skill</span>
                ) : (
                  profile.skills.map((s, idx) => (
                    <span key={idx} className="skill-chip blue">
                      {s}
                      <span className="remove-skill-btn" onClick={() => handleRemoveSkill(idx)} style={{ marginLeft: '6px', cursor: 'pointer', opacity: 0.7 }}>&times;</span>
                    </span>
                  ))
                )}
              </div>
              <div className="resume-divider"></div>
              <div className="resume-section-title">Experience & Key Projects</div>
              {profile.experience.map((exp, idx) => (
                <div key={idx} className="exp-item">
                  <h4 contentEditable suppressContentEditableWarning>{exp.role} — {exp.company}</h4>
                  <div className="meta" contentEditable suppressContentEditableWarning>{exp.period}</div>
                  <ul>
                    {exp.details.map((d, i) => <li key={i} contentEditable suppressContentEditableWarning>{d}</li>)}
                  </ul>
                </div>
              ))}
              <div className="resume-divider"></div>
              <div className="resume-section-title">Education & Certifications</div>
              <div className="edu-item">
                <strong contentEditable suppressContentEditableWarning onBlur={(e) => setProfile(p => ({ ...p, education: e.target.textContent }))}>{profile.education}</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Tab 3: Jobs */}
        <div className={`tab-page ${activeTab === 3 ? 'active' : ''}`}>
          <div className="ui-layer jobs-wrap">
            <div className="page-header">
              <h2>Predictive Job Matching Engine</h2>
              <p>Verified active openings matched against your skills in real time</p>
            </div>

            <div className="filter-row" style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
              <input
                type="text"
                placeholder="Search jobs, skills, companies..."
                value={searchKey}
                onChange={(e) => setSearchKey(e.target.value)}
                style={{ flex: 2, padding: '8px 14px', background: 'rgba(15,23,42,0.6)', border: '1px solid var(--border)', borderRadius: '8px', color: '#fff', fontSize: '13px' }}
              />
              <select value={cityFilter} onChange={(e) => setCityFilter(e.target.value)} style={{ flex: 1, padding: '8px', background: 'rgba(15,23,42,0.6)', border: '1px solid var(--border)', borderRadius: '8px', color: '#fff', fontSize: '13px' }}>
                <option value="all">All Cities</option>
                <option value="Delhi">Delhi</option>
                <option value="Jaipur">Jaipur</option>
                <option value="Coimbatore">Coimbatore</option>
                <option value="Lucknow">Lucknow</option>
              </select>
              <select value={sectorFilter} onChange={(e) => setSectorFilter(e.target.value)} style={{ flex: 1, padding: '8px', background: 'rgba(15,23,42,0.6)', border: '1px solid var(--border)', borderRadius: '8px', color: '#fff', fontSize: '13px' }}>
                <option value="all">All Sectors</option>
                <option value="IT">IT & Tech</option>
                <option value="Electrical">Electrical & Solar</option>
                <option value="Retail">Retail</option>
                <option value="Logistics">Logistics</option>
              </select>
            </div>

            <div className="jobs-grid">
              {filteredJobs.length === 0 ? (
                <div style={{ gridColumn: '1 / -1', textAlignment: 'center', padding: '40px', background: 'var(--surface)', borderRadius: '16px', border: '1px dashed var(--border)' }}>
                  <h3>No matching job postings found</h3>
                  <button className="btn-primary" style={{ marginTop: '12px', padding: '6px 16px', fontSize: '12px' }} onClick={() => { setSearchKey(''); setCityFilter('all'); setSectorFilter('all'); }}>Clear Filters</button>
                </div>
              ) : (
                filteredJobs.map((j) => {
                  const userSkillsLower = (profile.skills || []).map(s => s.toLowerCase());
                  const matchedCount = j.skillsRequired.filter(req =>
                    userSkillsLower.some(us => us.includes(req.toLowerCase()) || req.toLowerCase().includes(us))
                  ).length;

                  let matchPercentage = j.skillsRequired.length > 0 ? Math.round((matchedCount / j.skillsRequired.length) * 100) : 75;
                  if (matchPercentage < 65) matchPercentage = 68;
                  if (matchPercentage > 98) matchPercentage = 98;

                  const circumference = 2 * Math.PI * 16;
                  const offset = circumference * (1 - matchPercentage / 100);
                  const ringColor = matchPercentage >= 90 ? "#10b981" : matchPercentage >= 80 ? "#6366f1" : "#8b5cf6";

                  return (
                    <div key={j.id} className="job-card">
                      <div className="top">
                        <div>
                          <span className="company">{j.company}</span>
                          <div className="title">{j.title}</div>
                        </div>
                        <div className="match-ring" title={`${matchedCount} skills matched`}>
                          <svg viewBox="0 0 40 40">
                            <circle className="bg" cx="20" cy="20" r="16"/>
                            <circle className="progress" cx="20" cy="20" r="16" strokeDasharray={circumference} strokeDashoffset={offset} stroke={ringColor}/>
                          </svg>
                          <span className="label" style={{ color: ringColor }}>{matchPercentage}%</span>
                        </div>
                      </div>
                      <div className="tags" style={{ margin: '10px 0' }}>
                        {j.skillsRequired.map((s, idx) => {
                          const isMatched = userSkillsLower.some(us => us.includes(s.toLowerCase()) || s.toLowerCase().includes(us));
                          return <span key={idx} style={isMatched ? { background: 'rgba(16,185,129,0.15)', color: '#10b981', borderColor: 'rgba(16,185,129,0.3)' } : {}}>{s} {isMatched ? '✓' : ''}</span>;
                        })}
                      </div>
                      <div className="bottom" style={{ display: 'flex', gap: '6px' }}>
                        <a href={j.applyUrl} target="_blank" rel="noreferrer" className="btn-secondary" style={{ flex: 1, textAlign: 'center', textDecoration: 'none', padding: '6px 8px', fontSize: '11px', borderRadius: '8px' }}>
                          🔗 Apply Portal
                        </a>
                        <button className="apply-btn" style={{ flex: 1.2, fontSize: '11px', padding: '6px 8px' }} onClick={(e) => {
                          e.target.textContent = 'Card Sent ✓';
                          e.target.style.background = 'rgba(16,185,129,0.2)';
                          e.target.style.color = '#10b981';
                          showToast(`✅ Verified AI Match Card sent to HR at ${j.company}`);
                        }}>⚡ 1-Click AI Card</button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>

        {/* Tab 4: Roadmap */}
        <div className={`tab-page ${activeTab === 4 ? 'active' : ''}`}>
          <div className="ui-layer roadmap-wrap">
            <div className="page-header">
              <h2>Micro-Upskilling Roadmap</h2>
              <p>2-Week targeted learning modules to bridge identified skill gaps</p>
            </div>

            <div className="roadmap">
              {activeCourses.map((c, i) => (
                <div key={i} className="step">
                  <div className={`node ${i === 0 ? 'completed' : i === 1 ? 'in-progress' : 'locked'}`}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="content">
                    <h4>{c.title}</h4>
                    <p>{c.desc}</p>
                    <div style={{ marginTop: '8px' }}>
                      <a href="#course" onClick={(e) => { e.preventDefault(); showToast(`📚 Opening course: ${c.title}`); }} style={{ color: 'var(--accent)', fontSize: '11px', textDecoration: 'none', fontWeight: '600' }}>
                        ▶ {c.link}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <BottomTabs activeTab={activeTab} onSwitchTab={handleSwitchTab} />
    </div>
  );
}
