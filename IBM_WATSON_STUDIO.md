# 🤖 IBM Watson Studio & IBM Cloud Architecture — SkillBridge AI

> **IBM SkillsBuild SDG 8 Project** — *Decent Work and Economic Growth*

SkillBridge AI integrates **IBM Cloud** infrastructure with **IBM Watson Studio** and **IBM Watson Assistant** to deliver machine learning job skill matching, conversational career guidance, and ATS resume generation.

---

## 🛠️ IBM Technology Integration Stack

```
   ┌─────────────────────────────────────────────────────────┐
   │                   SkillBridge AI Client                 │
   │           (Three.js 3D WebGL Canvas + Glassmorphism UI) │
   └──────────────────────────┬──────────────────────────────┘
                              │
            ┌─────────────────┴─────────────────┐
            ▼                                   ▼
 ┌──────────────────────┐           ┌──────────────────────┐
 │ IBM Watson Assistant │           │  IBM Watson Studio   │
 │ (Conversational AI)  │           │ (ML Skill Prediction)│
 └──────────┬───────────┘           └──────────┬───────────┘
            │                                   │
            └─────────────────┬─────────────────┘
                              ▼
                ┌──────────────────────────┐
                │        IBM Cloud         │
                │ (Code Engine & COS S3)   │
                └──────────────────────────┘
```

---

## ☁️ Core Components

### 1. IBM Watson Assistant
- **Purpose:** Natural language understanding and vernacular career dialogue.
- **Service Endpoint:** `https://api.us-south.assistant.watson.cloud.ibm.com`
- **Capabilities:** Direct candidate onboarding, degree extraction (*B.Tech, B.Sc, ITI, etc.*), and skill discovery.

### 2. IBM Watson Studio & Machine Learning
- **Purpose:** Predictive ML model training, dataset scoring, and job-skill compatibility calculation.
- **Model Framework:** Scikit-Learn / Jaccard Similarity Scoring for Indian MSME trades.
- **Outputs:** Dynamic 0–100% skill match percentage indicators rendered in SVG circular rings.

### 3. IBM Cloud Code Engine
- **Purpose:** Serverless static application hosting and container orchestration.
- **Port:** `80` (Nginx Alpine Base Container)

---

*Certified IBM SkillsBuild SDG 8 Submission (2026).*
