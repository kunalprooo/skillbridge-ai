// Runs at Vercel build time (see vercel.json "buildCommand"). Writes config.js
// from environment variables so an optional default AI key can be set via the
// Vercel dashboard instead of being committed to the repo.
//
// WARNING: this is a 100% client-side, static site with no backend. Any key
// written here ships inside a public JS file and is visible to every visitor
// (view-source, browser dev tools, network tab). Only set GEMINI_API_KEY in
// Vercel if you're fine with that — e.g. a free-tier key with a low quota and
// (ideally) HTTP referrer restrictions configured in Google AI Studio. Leaving
// it unset is the safe default: visitors can still bring their own key via the
// in-app "AI Settings" button, stored only in their own browser.

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const key = process.env.GEMINI_API_KEY || process.env.SKILLBRIDGE_AI_KEY || "";

const contents = `// Auto-generated at build time by scripts/generate-config.js — do not edit.
window.SKILLBRIDGE_AI_KEY = ${JSON.stringify(key)};
`;

fs.writeFileSync(path.join(__dirname, "..", "config.js"), contents);
console.log(key ? "config.js written with a default AI key." : "config.js written with no default AI key (visitors will need to add their own via AI Settings).");
