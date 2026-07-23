import React, { useState, useEffect } from 'react';
import ThreeCanvas from './components/ThreeCanvas';
import Navbar from './components/Navbar';
import BottomTabs from './components/BottomTabs';
import { initialProfile, sampleProfiles, jobsData, tradeCatalog } from './data/mockData';

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [profile, setProfile] = useState(initialProfile);
  const [language, setLanguage] = useState('en');
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Namaste! 👋 I am your SkillBridge AI Companion.\n\nTell me your name, city, and trade skills or past experience (or click one of the sample profiles above).'
    }
  ]);
  const [input, setInput] = useState('');
  const [cityFilter, setCityFilter] = useState('all');
  const [sectorFilter, setSectorFilter] = useState('all');
  const [toast, setToast] = useState(null);
  const [isRecording, setIsRecording] = useState(false);

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

  const handleSendMessage = () => {
    if (!input.trim()) return;
    const userText = input.trim();
    setInput('');
    setMessages(prev => [...prev, { sender: 'user', text: userText }]);

    setTimeout(() => {
      let trade = tradeCatalog.general;
      const lower = userText.toLowerCase();

      if (lower.includes('electric') || lower.includes('solar') || lower.includes('wire')) trade = tradeCatalog.electrical;
      else if (lower.includes('retail') || lower.includes('store') || lower.includes('sales')) trade = tradeCatalog.retail;
      else if (lower.includes('logistic') || lower.includes('warehouse') || lower.includes('dispatch')) trade = tradeCatalog.logistics;

      setProfile(prev => ({
        ...prev,
        title: trade.title,
        sector: trade.sector,
        skills: trade.skills
      }));

      const botReply = lower.includes('hi') || lower.includes('namaste')
        ? `Namaste! 👋 Tell me your name, current city, and skills (e.g. Electrician in Jaipur) to build your ATS resume and match jobs!`
        : `Analyzed your input! ✅\nDetected Role: ${trade.title}\nExtracted Skills: ${trade.skills.join(', ')}\n\n👉 Check the Resume & Jobs tabs for updated matches!`;

      setMessages(prev => [...prev, { sender: 'bot', text: botReply }]);
    }, 600);
  };

  const handleDownloadPDF = () => {
    showToast("📄 Resume PDF generated! Downloading...");
  };

  const filteredJobs = jobsData.filter(j => {
    const cMatch = cityFilter === 'all' || j.city === cityFilter;
    const sMatch = sectorFilter === 'all' || j.sector === sectorFilter;
    return cMatch && sMatch;
  });

  const activeCourses = (tradeCatalog[profile.sector.toLowerCase()] || tradeCatalog.electrical).courses;

  return (
    <div className="app">
      <ThreeCanvas />

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
              apiStatus="Local Engine"
            />
            <div className="hero">
              <h1 className="reveal-item revealed">Bridge Skills.<br/>Build Futures.</h1>
              <p className="reveal-item revealed">Vernacular AI platform bridging employment gaps for Tier-2/3 youth through voice guidance, predictive MSME job matching, and ATS resume generation.</p>
              <div className="cta-group">
                <button className="btn-primary reveal-item revealed" onClick={() => handleSwitchTab(1)}>Launch Voice Assistant</button>
                <button className="btn-secondary reveal-item revealed" onClick={() => handleSwitchTab(3)}>Explore Jobs</button>
              </div>
            </div>
          </div>
        </div>

        {/* Tab 1: Voice */}
        <div className={`tab-page ${activeTab === 1 ? 'active' : ''}`}>
          <div className="ui-layer" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div className="chat-container">
              <div className="chat-header">
                <h2>Vernacular AI Voice Assistant</h2>
                <p>Speak or type your experience, skills, or city in your language</p>
              </div>

              <div className="sample-chips">
                <button className="sample-chip" onClick={() => handleSampleProfile('electrician')}>⚡ Rahul (Jaipur) — Electrician</button>
                <button className="sample-chip" onClick={() => handleSampleProfile('retail')}>🛍️ Priya (Coimbatore) — Retail</button>
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
                <button
                  className={`mic-btn ${isRecording ? 'recording' : ''}`}
                  onClick={() => {
                    setIsRecording(!isRecording);
                    showToast(isRecording ? "Voice recording stopped" : "🎙️ Listening... speak now!");
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="2" width="6" height="11" rx="3"/><path d="M5 12a7 7 0 0 0 14 0"/><line x1="12" y1="19" x2="12" y2="22"/></svg>
                </button>
                <input
                  type="text"
                  placeholder="Type your experience, skills, or city name..."
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
                <p style={{ fontSize: '12px', color: 'var(--muted)' }}>Auto-updated from your AI chat conversation</p>
              </div>
              <button className="btn-primary" style={{ padding: '8px 18px', fontSize: '13px' }} onClick={handleDownloadPDF}>
                Download PDF
              </button>
            </div>

            <div className="resume-card">
              <div className="resume-header">
                <div>
                  <div className="name">{profile.name}</div>
                  <div className="title">{profile.title}</div>
                </div>
                <div className="contact">
                  {profile.location}<br/>
                  {profile.email}<br/>
                  {profile.phone}
                </div>
              </div>
              <div className="resume-divider"></div>
              <div className="resume-section-title">Professional Profile</div>
              <p style={{ fontSize: '13px', color: '#334155', lineHeight: '1.6', marginBottom: '16px' }}>{profile.summary}</p>
              <div className="resume-divider"></div>
              <div className="resume-section-title">Skills & Technical Competencies</div>
              <div className="skills">
                {profile.skills.map((s, idx) => (
                  <span key={idx} className="skill-chip blue">{s}</span>
                ))}
              </div>
              <div className="resume-divider"></div>
              <div className="resume-section-title">Experience & Key Projects</div>
              {profile.experience.map((exp, idx) => (
                <div key={idx} className="exp-item">
                  <h4>{exp.role} — {exp.company}</h4>
                  <div className="meta">{exp.period}</div>
                  <ul>
                    {exp.details.map((d, i) => <li key={i}>{d}</li>)}
                  </ul>
                </div>
              ))}
              <div className="resume-divider"></div>
              <div className="resume-section-title">Education & Certifications</div>
              <div className="edu-item">
                <strong>{profile.education}</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Tab 3: Jobs */}
        <div className={`tab-page ${activeTab === 3 ? 'active' : ''}`}>
          <div className="ui-layer jobs-wrap">
            <div className="page-header">
              <h2>Predictive Job Matching Engine</h2>
              <p>Hyper-local MSME job opportunities tailored to your skill profile</p>
            </div>

            <div className="filter-row">
              <select value={cityFilter} onChange={(e) => setCityFilter(e.target.value)}>
                <option value="all">All Cities</option>
                <option value="Jaipur">Jaipur</option>
                <option value="Coimbatore">Coimbatore</option>
                <option value="Lucknow">Lucknow</option>
              </select>
              <select value={sectorFilter} onChange={(e) => setSectorFilter(e.target.value)}>
                <option value="all">All Sectors</option>
                <option value="Electrical">Electrical & Renewable</option>
                <option value="Retail">Retail & Supply Chain</option>
                <option value="Logistics">Logistics & Warehousing</option>
              </select>
            </div>

            <div className="jobs-grid">
              {filteredJobs.map((j) => {
                const circumference = 2 * Math.PI * 16;
                const offset = circumference * (1 - j.match / 100);
                return (
                  <div key={j.id} className="job-card">
                    <div className="top">
                      <div>
                        <span className="company">{j.company}</span>
                        <div className="title">{j.title}</div>
                      </div>
                      <div className="match-ring">
                        <svg viewBox="0 0 40 40">
                          <circle className="bg" cx="20" cy="20" r="16"/>
                          <circle className="progress" cx="20" cy="20" r="16" strokeDasharray={circumference} strokeDashoffset={offset} stroke={j.color}/>
                        </svg>
                        <span className="label" style={{ color: j.color }}>{j.match}%</span>
                      </div>
                    </div>
                    <div className="tags">
                      {j.skillsRequired.map((s, idx) => <span key={idx}>{s}</span>)}
                    </div>
                    <div className="bottom">
                      <span className="salary">{j.salary}</span>
                      <button className="apply-btn" onClick={(e) => {
                        e.target.textContent = 'Applied ✓';
                        showToast(`✅ Applied for ${j.title}`);
                      }}>Apply Now</button>
                    </div>
                  </div>
                );
              })}
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
                  <div className={`node ${c.status}`}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="content">
                    <h4>{c.title}</h4>
                    <p>{c.desc}</p>
                    <span className={`status-badge ${c.status}`}>
                      {c.status === 'completed' ? 'Completed' : c.status === 'in-progress' ? 'In Progress' : 'Upcoming'}
                    </span>
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
