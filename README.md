# Ortho Assist

Clinical decision-support PWA for the OPD, ward, and OT — built region by region.
Currently live: **Shoulder** (History → Examination → Differential → Management, plus Rehab, Conditions, MRI reading, Injections, Classifications, Management protocols, Surgical techniques, Arthroscopy, Imaging guide, References).

Content is built from a course handbook plus published, evidence-based orthopaedic literature (paraphrased into original wording throughout — no verbatim textbook reproduction). It is a clinical reference and decision-support tool, **not a replacement for clinical judgement or surgeon discretion.**

---

## Files

```
index.html          → app shell (loads style.css + app.js)
style.css            → all styling
app.js                → all logic + content data
manifest.json     → PWA manifest (name, icons, theme colour)
sw.js                   → service worker (offline caching)
icons/                  → app icons (icon-192.png, icon-512.png)
```

There is also a **single-file build** in some earlier shares (`ortho-assist.html`) with everything inlined — useful for quick previewing, but the multi-file version above is the one to actually deploy, since it supports the PWA manifest + offline service worker properly (a single HTML file cannot register a scoped service worker the same way).

---

## Deploying

### Option A — GitHub Pages (recommended, free, permanent)
1. Create a new GitHub repo, e.g. `ortho-assist`.
2. Upload all the files above (keep the folder structure — `icons/` stays a subfolder).
3. Repo → **Settings → Pages** → Source: `Deploy from a branch` → Branch: `main` / `root`.
4. Your app will be live at `https://<your-username>.github.io/ortho-assist/` within a minute or two.
5. On your phone, open that URL in the browser → **Add to Home Screen** → it installs as a proper app icon, works offline after first load.

### Option B — Netlify Drop (fastest, no GitHub needed)
1. Go to **netlify.com/drop**.
2. Drag the whole folder in.
3. You get a live URL instantly. Same "Add to Home Screen" step on your phone.

### Local testing (before deploying)
Opening `index.html` directly by double-clicking (`file://...`) will **not** work fully — the service worker and manifest need a real server origin (`http://` or `https://`), not `file://`. To test locally:
```bash
cd ortho-assist
python3 -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

---

## Updating content later

All clinical content lives in `app.js` as plain JavaScript data objects near the top of the file (`screenFlags`, `romPatterns`, `diagnosisManagementMap`, `phaseSurgeries`, `conditionsTopics`, etc.) — search for the relevant section and edit the text directly. No build step, no dependencies — just edit and re-upload/redeploy.

## Icon

Replace `icons/icon-192.png` and `icons/icon-512.png` (same filenames, same square aspect ratio) to change the app icon — everything else picks it up automatically via `manifest.json`.
