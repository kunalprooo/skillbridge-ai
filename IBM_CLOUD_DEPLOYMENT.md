# ☁️ IBM Cloud Deployment Guide — SkillBridge AI

> **IBM SkillsBuild SDG 8 Project** — *Decent Work and Economic Growth*

This guide outlines the step-by-step methods to deploy **SkillBridge AI** on **IBM Cloud**.

---

## 🎯 Option 1: Deploy on IBM Cloud Code Engine (Recommended)

IBM Cloud Code Engine is a fully managed, serverless platform that deploys static sites and web apps directly from source code or Docker containers.

### Steps via IBM Cloud Console (GUI):
1. Log into your **[IBM Cloud Console](https://cloud.ibm.com/)**.
2. Go to **Code Engine** ➔ **Applications** ➔ Click **Create**.
3. Select **Source code**:
   - Repository URL: `https://github.com/kunalprooo/skillbridge-ai`
   - Branch: `main`
4. Click **Build image** ➔ Select your IBM Container Registry namespace.
5. Set Port to `80` and click **Create**!

### Steps via IBM Cloud CLI:
```bash
# 1. Log in to IBM Cloud CLI
ibmcloud login --sso

# 2. Target your resource group & region
ibmcloud target -g Default -r us-south

# 3. Select or create Code Engine project
ibmcloud ce project select --name skillbridge-project || ibmcloud ce project create --name skillbridge-project

# 4. Deploy application from GitHub source repository
ibmcloud ce application create --name skillbridge-ai \
  --build-source https://github.com/kunalprooo/skillbridge-ai \
  --port 80
```

---

## 🪣 Option 2: Deploy on IBM Cloud Object Storage (Static Web Hosting)

1. Log into **[IBM Cloud Console](https://cloud.ibm.com/)** ➔ Go to **Object Storage**.
2. Create a bucket with **Public Access** enabled.
3. Upload `index.html`, `app.js`, `styles.css`, and your asset files.
4. Enable **Static Web Hosting** on the bucket settings to get your public IBM Cloud URL:
   `https://skillbridge-ai.s3-web.us-south.cloud-object-storage.appdomain.cloud/index.html`

---

## 🚀 Option 3: Deploy via IBM Cloud Foundry CLI (`ibmcloud cf`)

```bash
# Push directly using the included manifest.yml
ibmcloud cf push skillbridge-ai
```

---

*SkillBridge AI (2026) — Certified IBM SkillsBuild SDG 8 Application.*
