# SIP Abacus, Lakhra – centre website

React + Vite + Tailwind CSS (v3).

## Run locally

```
npm install
npm run dev       # http://localhost:5173
npm run build
npm run preview
```

## Deploy to Netlify
The Netlify site is connected to this GitHub repository and deploys from `main`. Netlify runs `npm run build` and publishes `dist/`, as configured in `netlify.toml`. Push changes to `main` to trigger a production deployment. The public site is `https://abacusguwahati.netlify.app/`.

## Site features
- English and Assamese language switch, with localized page titles and meta descriptions.
- Enquiry form that opens WhatsApp with a prepared message. The visitor must press **Send** in WhatsApp; the website does not send the message itself.
- Privacy policy at `/#privacy`, linked from the footer.
- Responsive photo gallery with a keyboard-accessible enlarged-photo viewer.
- Custom bilingual 404 page at `public/404.html`.
- Logo-based SVG favicon at `public/favicon.svg`.

## Updating content and photos
Business details and gallery entries live in `src/config.js`; translations are in `src/i18n.jsx`. The gallery currently has 16 photos. Each photo needs `<name>-600.webp` and `<name>-1200.webp` variants in `public/gallery/`. Register the photo in `src/config.js`, add its alt-text and caption keys to `src/components/Gallery.jsx`, then provide English and Assamese strings in `src/i18n.jsx`. The gallery uses the smaller variant for thumbnails and the larger variant in the viewer.

Some unverified values are intentionally omitted from the page. For example, opening hours are hidden until confirmed rather than shown as a placeholder.

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
