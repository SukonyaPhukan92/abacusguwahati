# SIP Abacus, Lakhra – centre website

A single-page application (SPA) built with React 18, Vite 5+, and Tailwind CSS v3 featuring client-side rendering (CSR), internationalization via React Context API, and automatic CI/CD deployment via Netlify.

## Development environment

**Prerequisites:** Node.js 16+ (ESM module support), npm 8+

```bash
npm install                  # Install dependencies from package-lock.json
npm run dev                  # Vite dev server with HMR at http://localhost:5173
npm run build                # Production build (minified, tree-shaken) to dist/
npm run preview              # Serve dist/ locally for pre-deployment verification
```

The dev server uses Vite's native ESM serving for sub-100ms HMR with React Fast Refresh integration.

## Continuous deployment (Netlify)

Deployment pipeline configured with automatic triggers:

- **Repository integration:** GitHub webhook on push to `main` branch
- **Build environment:** Node.js runtime (version inferred from `.nvmrc` or netlify.toml)
- **Build command:** `npm run build` (executed in isolated build sandbox)
- **Publish directory:** `dist/` (static asset output from Vite bundler)
- **Asset delivery:** Netlify CDN with edge caching (cache headers set per file type)
- **Production URL:** `https://abacusguwahati.netlify.app/`

Configuration file: `netlify.toml` (build command and publish directory declarations)

Each push to `main` triggers atomic deployments with zero-downtime updates via Netlify's distributed edge network.

## Changelog

### 2026-10-04 (continued)
- **Meet the Team section added:** New `Team` component displays centre leadership
  - Principal & Local Centre Leader: Mathura Mohan Roy
  - Team member photo and role displayed in responsive card layout
  - New `team` array in `src/config.js` for easy management
  - Bilingual support in i18n (English: "Meet the Team", Assamese: "দলৰ সৈতে পৰিচয় কৰক")
  - Section positioned between Gallery and FAQs

### 2026-10-04
- **Centre information added:** Class schedules, admission/progression levels, fee structure
  - Hours: Thursday–Friday 5:00 PM; Saturday 10:00 AM, 4:30 PM; Sunday 9:00 AM, 11:30 AM, 4:00 PM
  - Programmes confirmed: Abacus & Mental Arithmetic, Brain Gym, Speed Writing
  - Admission levels: Junior 1 (Class UKG/1), Junior 2 (Class 2), Foundation 1 (Class 3)
  - Progression: Junior (4 levels), Foundation (4 levels), Advance (4 levels), G.M. (3 levels)
  - Fee structure: Registration ₹2,050, monthly ₹1,500, book fees vary by level
  - Social media: Instagram and Facebook links added to config
- **FAQ updates:** Both English and Assamese FAQs now include specific schedules, fees, and levels (via `src/i18n.jsx`)
- **Config exports:** New `admissionLevels`, `progressionLevels`, `feeStructure` in `src/config.js`

### 2026-10-02
- **i18n module update:** Modified gallery caption (mixedUniforms key) from "Classwork in a mixed-uniform classroom" to "Learning in progress" in both en and as locales via `src/i18n.jsx`
- **Build artifacts:** No dependency changes; Vite cache invalidation via content-hash

## Architecture & features

### Internationalization (i18n)
- **Implementation:** React Context API (`LanguageProvider` in `src/i18n.jsx`) with dual-language locale support (English `en`, Assamese `as`)
- **Persistence:** localStorage with fallback to browser default on first visit
- **Metadata localization:** Dynamic `<title>`, `og:title`, `og:description`, and `lang` attribute updates via `useEffect` listener on `window.hashchange`
- **Translation schema:** Nested object structure with BCP 47 language tags

### Routing & navigation
- **Hash-based routing:** Single-page navigation via `window.location.hash` (privacy policy at `/#privacy`)
- **Fallback page:** Custom `public/404.html` with bilingual content for 404 errors (Netlify-configured redirect handling)

### Forms & integrations
- **Enquiry form:** Client-side validation with WhatsApp deep linking (`https://wa.me/{phoneNumber}?text={encodedMessage}`)
- **No backend submission:** Form data processed in-browser; WhatsApp handles final message delivery
- **Accessibility:** Semantic HTML with ARIA labels, keyboard navigation support

### Media & assets
- **Responsive gallery:** 16 photo set with WebP format (600px thumbnails, 1200px enlarged variants)
- **Image optimization:** Vite's asset pipeline with on-demand WebP encoding
- **Gallery viewer:** Keyboard-accessible (arrow keys, Enter/Esc), ARIA-compliant modal overlay
- **Favicon:** SVG-based (`public/favicon.svg`) for scalable multi-resolution support

## Content management & asset pipeline

### Configuration
- **Business metadata:** `src/config.js` (address, phone, location coordinates, WhatsApp number)
- **Translations & captions:** `src/i18n.jsx` (nested locale-specific strings, photo alt-text/captions, form labels, meta descriptions)

### Gallery management
Current photo count: 16 images

**Asset requirements per photo:**
- Filename convention: `<name>-600.webp` (thumbnail, 600px width) and `<name>-1200.webp` (enlarged viewer, 1200px width)
- Format: WebP (superior compression vs. JPEG/PNG)
- Location: `public/gallery/` (static asset directory, not processed by Vite)

**Integration steps:**
1. Register photo metadata in `src/config.js` (filename references)
2. Add caption keys to `src/components/Gallery.jsx` component logic
3. Provide localized English and Assamese strings in `src/i18n.jsx` under `gallery` namespace

The responsive image system selects thumbnail variant for grid display and large variant for lightbox modal viewer.

### Content validation
Unverified/unconfirmed data is explicitly omitted from DOM rendering (not shown as placeholders). Example: opening hours remain hidden until centre confirmation to prevent stale information.

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
| Opening hours, email, social links | Hours are not listed and remain hidden until confirmed; email and social links are not configured |
| Fees, ages, levels, batch timings, demo availability | Deliberately omitted |
| Logo | Supplied by the site owner (`public/images/sip-abacus-logo.webp`, cropped from the supplied JPEG) |
| Brand colours | Sampled from that logo: orange ≈ #F58634, red ≈ #E23B3B, grey ≈ #3A3A3A (darker shades used where needed for contrast) |
| Photos | 16 photos supplied by the site owner, in `public/gallery/` as 600px and 1200px WebP. Captions and alt text describe visible content. The latest classroom photos show students in different uniforms and teacher-supported classwork; event photos include SIP regional/Assam events |
| Local programme | The SIP Lakhra certificate shows "Junior Level 1" of the "SIP Abacus Junior programme", so that programme is marked as offered at Lakhra |

Lachit Nagar SIP Abacus listings found in search are different centres and were not used.

## Needed before launch
1. Add opening hours after the centre confirms them. Re-check the Google rating/review count before launch and update `asOf`; ideally get the reviewers' or centre's OK to quote them.
2. Confirm 086386 69857 receives WhatsApp messages (or set `whatsapp` in `src/config.js` to the right number).
3. Google Maps embed URL (optional) and verified social links.
4. Confirm parents have agreed to their children's photos being used online. The certificate photo shows a child's name, so replace or blur it if consent isn't given.
5. Confirmation of which other programmes run locally, and any genuine attributable parent reviews.
6. Public site URL (for structured data). JSON-LD includes only filled-in fields, no ratings.
