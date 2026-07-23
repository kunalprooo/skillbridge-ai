import React from 'react';

export default function Navbar({ activeTab, onSwitchTab, language, onLanguageChange, apiStatus }) {
  return (
    <nav>
      <a className="brand" href="#" onClick={(e) => { e.preventDefault(); onSwitchTab(0); }}>
        <svg viewBox="0 0 32 32" fill="none">
          <path d="M16 2L4 10v12l12 8 12-8V10L16 2z" stroke="url(#bgGrad1)" strokeWidth="1.8" fill="none"/>
          <path d="M16 16l-7-4v8l7 4 7-4v-8l-7 4z" stroke="url(#bgGrad2)" strokeWidth="1.3" fill="none"/>
          <defs>
            <linearGradient id="bgGrad1" x1="4" y1="2" x2="28" y2="30">
              <stop stopColor="#6366f1"/>
              <stop offset="1" stopColor="#d946ef"/>
            </linearGradient>
            <linearGradient id="bgGrad2" x1="9" y1="12" x2="23" y2="24">
              <stop stopColor="#8b5cf6"/>
              <stop offset="1" stopColor="#10b981"/>
            </linearGradient>
          </defs>
        </svg>
        SkillBridge AI
      </a>
      <div className="nav-links">
        <span className="sdg-badge">🌿 SDG 8</span>
        <span className="status-badge-header">⚡ {apiStatus}</span>
        <select value={language} onChange={(e) => onLanguageChange(e.target.value)} className="lang-select">
          <option value="en">English</option>
          <option value="hi">हिंदी (Hindi)</option>
          <option value="ta">தமிழ் (Tamil)</option>
          <option value="te">తెలుగు (Telugu)</option>
          <option value="mr">मराठी (Marathi)</option>
        </select>
        <div className="audio-indicator">
          <span className="bar"></span><span className="bar"></span><span class="bar"></span><span className="bar"></span><span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}
