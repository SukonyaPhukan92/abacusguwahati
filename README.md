# SIP Abacus, Lakhra – centre website

React + Vite + Tailwind CSS (v3).

## Deploy (GitHub Pages)
Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and deploys it. One-time setup: repo **Settings → Pages → Build and deployment → Source: GitHub Actions**. The site is then served at `https://dibyajyotisatnami.github.io/sip-abacus/`.

## Setup
```
npm install
npm run dev       # http://localhost:5173
npm run build && npm run preview
```
All editable details live in **`src/config.js`**. `null` means "not verified" – the UI shows "To be confirmed" and hides that action.

## Sources and verification status
The two requested sources (`sipabacus.com/in/` and the Google Maps listing) were **blocked by this build environment's network proxy**, so they could not be read.

| Item | Status |
|---|---|
| Centre name "SIP ABACUS, LAKHRA", Guwahati, Assam | From your brief / Maps link title |
| Google Maps link | Supplied by you; used only for Directions |
| Programme names (Abacus, Brain Gym, Speed Writing) and general approach | From web-search excerpts of sipabacus.com; **not read on the site itself – confirm** |
| Address (UCO Bank Building, Lokhra Bamunpara, Lokhra, Guwahati 781040), Plus Code, phone 086386 69857 | **Verified** – from the Google Maps listing text supplied by the site owner (29 Sep 2026) |
| Google rating 4.9 / 104 reviews and 3 quoted reviews (Priti Das, Deepika Das, Chatrajit Sinha) | From the same listing; shown with "as of" date and a link. Not put in structured data |
| WhatsApp | Set to the listed mobile 086386 69857 at the site owner's request; every Enquire button opens WhatsApp with a prefilled message. **Confirm this number is on WhatsApp** |
| Opening hours, email, social links | **Placeholders – unverified** (hours not listed on Maps) |
| Fees, ages, levels, batch timings, demo availability | Deliberately omitted |
| Logo | Supplied by the site owner (`public/images/sip-abacus-logo.webp`, cropped from the supplied JPEG) |
| Brand colours | Sampled from that logo: orange ≈ #F58634, red ≈ #E23B3B, grey ≈ #3A3A3A (darker shades used where needed for contrast) |
| Photos | 12 photos supplied by the site owner, in `public/gallery/` as 600px and 1200px WebP. Captions only state what is visible or printed in each photo. "At the centre" photos show the Lakhra classroom; one certificate reads "SIP Lakhra". Event photos are SIP regional/Assam events (Regional SIP Abacus Competition, 28 July 2024; SIP Assam Annual Awards 2022) |
| Local programme | The SIP Lakhra certificate shows "Junior Level 1" of the "SIP Abacus Junior programme", so that programme is marked as offered at Lakhra |

Lachit Nagar SIP Abacus listings found in search are different centres and were not used.

## Needed before launch
1. Opening hours. Re-check the Google rating/review count before launch and update `asOf`; ideally get the reviewers' or centre's OK to quote them.
2. Confirm 086386 69857 receives WhatsApp messages (or set `whatsapp` in `src/config.js` to the right number).
3. Google Maps embed URL (optional) and verified social links.
4. Confirm parents have agreed to their children's photos being used online. The certificate photo shows a child's name, so replace or blur it if consent isn't given.
5. Confirmation of which other programmes run locally, and any genuine attributable parent reviews.
6. Public site URL (for structured data). JSON-LD includes only filled-in fields, no ratings.
