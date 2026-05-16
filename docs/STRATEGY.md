# Shri Sai Baba Temple, Bellandur - Strategy & Case Study (A–P)

**Interview:** NetBramha Studios - Design + Engineering Leadership  
**Stack:** HTML · CSS · JavaScript only (no frameworks)

---

## A. Executive Summary

A **pure static** multi-page website for Shri Sai Baba Temple (Bellandur) that prioritises devotee tasks-timings, sevas, directions-over decorative fluff. The solution demonstrates **UX strategy**, **editorial visual design**, **WCAG AA accessibility**, **local SEO**, and **performance-first engineering** without React, Vite, or CSS frameworks.

**Key decision:** Flat `.html` files + `assets/` folder for zero build step, maximum interview clarity, and GitHub Pages deploy in one click.

---

## B. UX / Content / Business Strategy

### Business goals
- Reduce repetitive phone/email queries (timings, address, sevas)
- Strengthen trust for first-time visitors
- Support Thursday and festival footfall with clear guidance
- Channel Annadanam/volunteer interest safely

### User goals
- Plan darshan around aarti times
- Book or enquire about sevas
- Find address and etiquette
- Participate in community seva

### Content pillars
1. Darshan rhythm · 2. Seva · 3. Community · 4. Festivals · 5. Visit · 6. Story (editable)

### Tone
Devotional, calm, warm, human, uncluttered - never preachy or corporate.

### Trust signals
Verified address, email, coordinates; seva prices marked “confirm with office”; sample testimonials labelled; privacy note on form; no fake payments or legal claims.

### Content governance
- `<!-- CMS: section-name -->` for admin-managed blocks
- `<!-- Replace with verified temple-specific content -->` for history
- Committee approves all pricing and festival dates before publish

---

## C. Sitemap

```
index.html
about.html
timings.html
sevas.html
festivals.html
annadanam.html
gallery.html
visit.html
volunteer.html (conceptual)
404.html
```

Supporting: `robots.txt`, `sitemap.xml`, `site.webmanifest`, `assets/icons/favicon.svg`

---

## D. Information Architecture

| Page | Intent | Primary CTA |
|------|--------|-------------|
| Home | Orient & route | Plan visit |
| About | Trust, etiquette | View timings |
| Timings | Plan darshan | Get directions |
| Sevas | Choose offering | Enquire |
| Festivals | Plan observance | Contact office |
| Annadanam | Community seva | Volunteer enquiry |
| Gallery | Emotional connection | Visit temple |
| Visit | Complete trip | Send enquiry |
| Volunteer | Conceptual giving | Contact office |

**Utility nav:** Email, map (visit page)  
**Internal linking:** Home previews deep-link to every section; footer repeats sitemap.

---

## E. User Personas

| Persona | Age/context | Need |
|---------|-------------|------|
| **Priya** | 35, Bellandur resident | Quick Thursday + aarti times |
| **Ramesh & Lakshmi** | 60s, family visit | Parking, seating, calm flow |
| **Arjun** | 28, first-time ORR worker | Map, dress code, expectations |
| **Meera** | 42, volunteer | Annadanam signup path |
| **Vikram** | 30, festival guest | Crowd + event timing |

---

## F. Key User Journeys

1. **Thursday aarti:** Home → Timings → Dhoopaarathi 6:30 PM → Visit (parking)  
2. **First visit:** Search → Home → Visit + About etiquette  
3. **Seva booking:** Home → Sevas → price table → Visit form (seva topic)  
4. **Volunteer:** Annadanam → steps → Visit `#enquiry-heading`  
5. **Festival:** Festivals → crowd guidance → email office  

---

## G. Design Direction

**Moodboard:** Sandstone courtyard · morning lamp · woven texture · Bellandur green · editorial serif · terracotta accent · community hands · sacred restraint

**Palette:** Ivory `#faf7f2` · Sandstone `#ebe4d8` · Saffron `#b87333` · Maroon `#5c2e2e` · Leaf `#5a6b5a`

**Typography:** Cormorant Garamond (headings) · Source Sans 3 (body) - Google Fonts CDN, `font-display: swap`

**Layout:** Editorial hero · lifted quick-access cards · asymmetric splits · timing tables - not uniform SaaS cards

**Light-first:** Warm daylight palette; no dark mode (temple use context).

**Icons:** Inline SVG (Lucide-style paths, no CDN dependency)

---

## H. Full Page-by-Page Content

All copy lives in root `.html` files. Summary:

- **Home:** Om Sai Ram hero; quick links; aarti preview; seva/festival/annadanam/gallery previews; sample testimonials; FAQ  
- **About:** Overview; Sai Baba significance; editable journey; values; etiquette  
- **Timings:** Full aarti table + explanations; Thursday; festivals; accessibility  
- **Sevas:** 8 sevas with verified INR table (subject to office confirmation)  
- **Festivals:** Thursday + annual observances; Event schema  
- **Annadanam:** Community meals; volunteer steps; contact-first  
- **Gallery:** 4 categories, 6 images, lightbox  
- **Visit:** Map, form, checklist, privacy, FAQ  
- **Volunteer:** Conceptual - contact office only  

---

## I. Tech Approach (HTML / CSS / JS Only)

| Layer | Approach |
|-------|----------|
| HTML | Semantic landmarks, one `h1` per page, flat filenames |
| CSS | `style.css` tokens + base; `components.css`; `responsive.css` |
| JS | IIFE modules: `navigation.js`, `faq.js`, `gallery.js`, `main.js` - all `defer`, no bundler |
| Deploy | Copy root HTML + `assets/` to GitHub Pages - no build |

**Why no build tool:** Interview portability, transparent code review, Lighthouse-friendly delivery.

---

## J. Recommended Folder Structure

```
/
├── index.html … volunteer.html, 404.html
├── robots.txt, sitemap.xml, site.webmanifest, CNAME
├── assets/
│   ├── css/ (style, components, responsive)
│   ├── js/ (navigation, faq, gallery, main)
│   ├── images/ (*.webp)
│   └── icons/ (favicon.svg)
└── docs/STRATEGY.md
```

Legacy `old/`, Vite `dist/`, and folder-based routes from v1 are retained in repo but excluded from deploy.

---

## K. SEO, Schema, Metadata

- Unique `<title>` + meta description per page  
- `link rel="canonical"` → `https://bellandursaibabatemple.com/{page}.html`  
- Open Graph + Twitter cards  
- JSON-LD: `HinduTemple` (home), `FAQPage` (timings), `Event` (festivals), `ContactPoint` (visit)  
- `sitemap.xml` + `robots.txt`  
- `site.webmanifest` for add-to-home-screen  
- Local SEO: NAP consistency, geo coordinates, Bellandur/Bengaluru keywords  

**Multilingual readiness:** `lang="en"`; future `kn`, `ta`, `te` via duplicated pages or JSON + small i18n script.

---

## L. Accessibility Checklist

- [x] Skip link · landmarks · one h1  
- [x] Keyboard menu + lightbox + accordion  
- [x] `aria-expanded`, `aria-controls`, `aria-current`  
- [x] Form labels, `reportValidity`, `aria-live` status  
- [x] Timing `<table>` with `scope`  
- [x] Focus-visible · 44px targets  
- [x] `prefers-reduced-motion`  
- [x] Alt text on meaningful images; decorative `alt=""` on logo  

---

## M. Lighthouse / Performance Checklist

- [x] No frameworks · ~4KB total JS  
- [x] Deferred scripts only  
- [x] WebP with width/height  
- [x] `loading="lazy"` below fold  
- [x] Limited font weights  
- [x] `content-visibility` on long sections  
- [x] No layout shift (aspect-ratio, image dimensions)  
- [x] Small DOM · single CSS bundle per page (3 files, cacheable)  

---

## N. Future Improvements

1. CMS (Decap/Sanity) for timings, events, announcements  
2. Kannada/Tamil/Telugu pages + `hreflang`  
3. Announcement banner component  
4. Verified testimonials + gallery uploads  
5. `.ics` calendar export for festivals  
6. Server-side form endpoint (replace mailto)  
7. Self-hosted fonts for offline/privacy  

---

## O. Interview Talking Points

1. **Task-first IA** - timings in 2 taps beats philosophical homepage.  
2. **Honest content** - editable history, labelled samples, seva asterisks.  
3. **Pure static** - no build = committee can host anywhere; CMS later.  
4. **Accessibility as inclusion** - elders are primary users.  
5. **Visual restraint** - sandstone palette vs. stock spiritual gradients.  
6. **Measure:** organic “temple bellandur” rankings, timings page views, enquiry clicks, Thursday spikes.  

**Analytics:** Plausible/Fathom - `visit_cta`, `timings_view`, `seva_enquiry` - privacy-respecting.

---

## P. Additional Leadership Layers

| Topic | Recommendation |
|-------|----------------|
| Trust | NAP + schema + office confirmation pattern |
| Privacy | Form uses mailto only; note at `visit.html#privacy` |
| Announcements | Future `<!-- CMS: announcement -->` bar in header |
| Empty states | Gallery documents “replace with verified photos” |
| Errors | 404.html with calm copy + home link |
| Images | Temple `/assets/images/` first; log external licenses |
| Phase 2 | Online booking only after temple verifies payments |

---

*Implementation: root HTML files + `assets/` - open `index.html` locally or serve with any static server.*
