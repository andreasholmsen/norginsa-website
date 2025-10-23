
# NORGINSA – Nettside

### Template stjålet fra https://github.com/x01-open-source/NORGINSA

- Arkiv lagret i `arkiv/<template-folder>` med `metadata.json`

## 🧱 Prosjektstruktur

```bash
.
├── index.html                # Homepage - showcase of templates
├── assets/
│   ├── css/style.css         # Optional custom styles
│   ├── images/               # Preview images
│   └── js/                   # Scripts
│       ├── main.js           # Loads cards from templates.json
│       ├── detail.js         # Handles arkiv-details.html
│       └── nav_footer_loader.js # Injects navbar/footer
├── components/
│   ├── navbar.html
│   └── footer.html
├── pages/
│   ├── arkiv.html        # Full templates listing
│   ├── arkiv-details.html# Dynamic detail view
│   └── about.html
└── arkiv/
    ├── templates.json        # Her man putter inn artikler eller egne sider tenkte jeg
    ├── business-landing/
    │   ├── metadata.json
    │   └── assets/images/
    │       └── bg.jpg
    └── portfolio-site/
        └── metadata.json
````

### ✅ Example `metadata.json`:

```json
{
  "name": "Business Landing Page",
  "description": "Modern startup landing page with CTA, features, and testimonials.",
  "author": "Sana J.",
  "created": "2025-07-01",
  "license": "Apache-2.0",
  "tags": ["startup", "landing", "marketing", "business"],
  "technologies": ["HTML", "Tailwind CSS", "Alpine.js"],
  "features": [
    "Call-to-action banner",
    "Testimonial carousel",
    "Responsive hero section",
    "Sticky navigation"
  ],
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

## 📚 Technologies Used

* **HTML5**
* **Tailwind CSS**
* **JavaScript (Vanilla)**
* **Alpine.js** (optional per template)
* **JSON** for dynamic metadata loading