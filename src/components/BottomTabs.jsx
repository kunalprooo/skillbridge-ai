import React from 'react';

export default function BottomTabs({ activeTab, onSwitchTab }) {
  return (
    <nav className="bottom-tabs" role="navigation" aria-label="App tabs">
      <button className={`tab ${activeTab === 0 ? 'active' : ''}`} onClick={() => onSwitchTab(0)}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
        </svg>
        <span>Home</span>
      </button>

      <button className={`tab ${activeTab === 1 ? 'active' : ''}`} onClick={() => onSwitchTab(1)}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m-4 0h8"/>
          <rect x="9" y="2" width="6" height="11" rx="3"/>
          <path d="M5 12a7 7 0 0014 0"/>
        </svg>
        <span>Voice</span>
      </button>

      <button className={`tab ${activeTab === 2 ? 'active' : ''}`} onClick={() => onSwitchTab(2)}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M9 12h6M9 16h6"/>
          <rect x="4" y="2" width="16" height="20" rx="2"/>
          <line x1="8" y1="2" x2="8" y2="4"/>
          <line x1="16" y1="2" x2="16" y2="4"/>
        </svg>
        <span>Resume</span>
      </button>

      <button className={`tab ${activeTab === 3 ? 'active' : ''}`} onClick={() => onSwitchTab(3)}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          <path d="M16 11l-4 4-2-2"/>
        </svg>
        <span>Jobs</span>
      </button>

      <button className={`tab ${activeTab === 4 ? 'active' : ''}`} onClick={() => onSwitchTab(4)}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
        </svg>
        <span>Roadmap</span>
      </button>
    </nav>
  );
}
