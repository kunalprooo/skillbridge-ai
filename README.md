# 🚀 SkillBridge AI — 3D WebGL Career Platform & ATS Resume Builder (2026)

SkillBridge AI is a state-of-the-art WebGL 3D career guidance application designed for Indian youth and regional MSME job seekers. It features an interactive AI Chat Assistant, real-time ATS Resume Generator with live inline editing, 1-click ATS PDF Export, live verified job postings with skill match percentages, and a 2-Week Micro-Roadmap.

---

## 🌟 Key Features & Capabilities

### 1. 🎨 3D WebGL Space Particle Canvas
- Powered by **Three.js** with **UnrealBloomPass** post-processing.
- **5 Persistent Scenes** with over 14,000 glowing star particles and rotating 3D geometry across all tabs:
  - **Home:** Interactive Wireframe Icosahedron & Torus Knot with orbiting octahedron stars.
  - **AI Chat:** Futuristic Glowing Emerald AI Data Core with orbital ring.
  - **Resume:** Deep Indigo & Violet Nebula Star Field.
  - **Jobs:** Cyan & Teal Cosmic Star Field.
  - **Roadmap:** Magenta & Purple Deep Space Nebula.

### 2. 💬 AI Chat Assistant (2026)
- **Smart Natural Language Extraction:** Parses name, location, degree (e.g. *B.Tech, B.Sc, BCA, Diploma, ITI*), and technical skills automatically from chat input.
- **Model Fallback Cascade:** Cascades through Antigravity CLI & OmniRoute model endpoints (`antigravity/auto`, `antigravity/default`, `agy/default`, `antigravity/claude-3-5-sonnet`) with a fast 1.5s internal fallback engine.
- **Visual Resume Highlight:** Triggers a 3D glow effect on the ATS Resume paper whenever the AI updates your candidate details.

### 3. 📄 Interactive ATS Resume Editor & PDF Exporter
- **Full Inline Editing (`contenteditable="true"`):** Click any text on your resume paper to edit Name, Title, Location, Email, Phone, Summary, Experience, and Education directly.
- **Dynamic Skill Chips:** Click `+ Add Skill` to add custom skills or click `×` on any chip to remove it.
- **1-Click ATS PDF Export:** Powered by `html2pdf.js`, generating clean single-page ATS PDFs with edit controls stripped out.

### 4. ⚡ Real-World Live Job Match Engine
- **35+ Verified Active Postings:** Features real-world jobs from top Indian employers (*Tata Power Solar*, *Schneider Electric*, *Infosys BPM*, *Shadowfax Technologies*, *Reliance Retail*, *Ecom Express*, *Amazon IN*).
- **Direct Official Apply Links:** Direct `target="_blank"` links to official career portals.
- **Dynamic Skill Match Percentage:** Computes real-time Jaccard skill overlap between candidate skills and job requirements with animated circular SVG match rings.
- **Filters:** Search bar, City filter dropdown (Jaipur, Coimbatore, Lucknow, Delhi, etc.), and Sector filter.

---

## 📁 Project File Structure

```
skillbridge-ai/
├── index.html         # Main Web Application UI & Three.js 3D WebGL Canvas
├── app.js             # Core Engine (AI Chat, ATS Resume Sync, Jobs Dataset, Match Engine)
├── styles.css         # Modern Glassmorphism CSS Design System & Utility Classes
├── README.md          # Project Documentation & Sharing Instructions
└── package.json       # Project Metadata & Scripts
```

---

## ⚡ Quick Start Guide (How to Run)

### Method 1: Python (Recommended)
Open your terminal in this directory and run:
```bash
python -m http.server 3000
```
Then open **`http://localhost:3000`** in your browser.

### Method 2: Node.js / serve
```bash
npx serve .
```

### Method 3: Direct File Opening
You can double-click **`index.html`** to open directly in Google Chrome, Microsoft Edge, or Firefox.

---

## 🧪 Testing & Verification Checkpoints

Here are a few quick test flows for error checking and review:
1. **AI Chat Test:** Type `"I am Kunal from Delhi with a B.Tech degree"` in AI Chat. Verify that your name (*Kunal*), location (*Delhi, India*), education (*B.Tech*), and role (*Software Engineer*) update automatically on your resume.
2. **Skill Prompt Test:** Type `"My skills are Python, React, JavaScript, SQL"`. Verify that your resume populates with those exact skills and job match percentages update on the Jobs tab.
3. **Inline Edit Test:** Switch to the **Resume** tab, click on your name or summary, edit the text directly, and click **Download ATS PDF**.
4. **Job Search Test:** Switch to the **Jobs** tab, type `"React"` or `"Delhi"` in the search bar, or filter by City/Sector.

---

*SkillBridge AI (2026) — Built for IBM SkillsBuild & Regional Youth Workforce Empowerment.*
