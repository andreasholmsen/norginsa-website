
# NORGINSA – Nettside

## 🧱 Prosjektstruktur

```bash
.
├── index.html                # Hjemmeside
├── about.html                # Om NORGINSA siden
├── kontakt.html              # Kontaktside
├── arkiv.html                # Arkivside
├── assets/
│   └── css/                  # Lokal CSS
│       ├── style.css         # Ekstra CSS hvis nødvendig
│       ├── navbar.css        # Ekstra CSS hvis nødvendig
│   ├── images/               # Alt av bilder utenom bilder i artikler
│   └── js/                   # Scripts
│       ├── getFooter.js      # genererer footer
│       ├── getNavbar.js      # generer navbar
│       └── navbar.js         # ekstra navbar script (animasjoner etc.)
└── arkiv/
    ├── templates.json        # Her man putter inn egne sider og artikler
    ├── eksempel-side1/       # inneholder alt av html filer etc.
    │   ├── metadata.json     # fylles inn med eksemplet under
    │   └── assets/images/    # bilder spesifikke til artikler
    │       └── bg.jpg
````

### ✅ Eksempel `metadata.json`:

```json
{
  "name": "Business Landing Page",
  "description": "Modern startup landing page with CTA, features, and testimonials.",
  "author": "Sana J.",
  "created": "2025-07-01",
  "tags": ["startup", "landing", "marketing", "business"],
  "previewImage": "assets/images/bg.jpg",
  "images": [
    "assets/images/ui2.jpg",
    "assets/images/bg.jpg"
  ],
  "liveUrl": "index.html",
  "sourceUrl": "https://github.com/NORGINSA/business-landing",
  "sections": [
    { "id": "hero", "title": "Hero" },
    { "id": "features", "title": "Features" },
    { "id": "testimonials", "title": "Testimonials" },
    { "id": "cta", "title": "Call to Action" }
  ]
}
```
---

## 📚 Teknologier Brukt

* **HTML5**
* **Tailwind CSS**
* **JavaScript (Vanilla)**
* **JSON** for å dynamisk laste inn data


### Template stjålet fra https://github.com/x01-open-source/NORGINSA