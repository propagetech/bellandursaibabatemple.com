# Shri Sai Baba Temple, Bellandur

Pure **HTML · CSS · JavaScript** static website - no frameworks, no build step.

## Quick start

Open `index.html` in a browser, or serve the folder:

```bash
# Python
python3 -m http.server 8080

# Node (if installed)
npx serve .
```

Visit `http://localhost:8080`

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Home |
| `about.html` | Temple story, values, etiquette |
| `timings.html` | Aarti schedule, visit guidance |
| `sevas.html` | Sevas & indicative pricing |
| `festivals.html` | Observances & Thursday |
| `annadanam.html` | Community meals & volunteering |
| `gallery.html` | Photo gallery + lightbox |
| `visit.html` | Map, contact form, checklist |
| `volunteer.html` | Conceptual contribute/volunteer |
| `404.html` | Not found |

## Assets

```
assets/
  css/   style.css, components.css, responsive.css
  js/    navigation.js, faq.js, gallery.js, main.js
  images/  temple photography (.webp)
  icons/   favicon.svg
```

## Strategy document

Full interview case study (sections A–P): **[docs/STRATEGY.md](docs/STRATEGY.md)**

## Deploy (GitHub Pages)

Push to `main` - Actions copies HTML + `assets/` to Pages. `CNAME` → `bellandursaibabatemple.com`

## Contact

**Email:** saibaba.bellandur@gmail.com  
**Address:** 109, Margosa Ave, Green Glen Layout, Bellandur, Bengaluru 560103

## Content notes

- Seva prices are **indicative** - confirm with temple office.
- Sample testimonials are labelled.
- History section awaits verified committee content.
