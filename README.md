
# NORGINSA – Nettside

### Template stjålet fra https://github.com/x01-open-source/webhub

**weHub** is a community-powered open-source platform to **showcase, explore, and download web templates** built using HTML, CSS, JS, and modern libraries like Tailwind CSS. It's a library of frontend website templates anyone can browse, contribute to, or clone for their own projects.

## 🚀 Features

- Browse beautiful templates with preview cards
- Click "Explore" to view full metadata and screenshots
- Pagination and tag-based filtering
- Light/Dark mode toggle
- Fully responsive design
- Built with **HTML**, **Tailwind CSS**, and **JavaScript**
- Templates stored in `templates/<template-folder>` with a `metadata.json`

## 🧱 Project Structure

```bash
.
├── index.html                # Homepage - showcase of templates
├── assets/
│   ├── css/style.css         # Optional custom styles
│   ├── images/               # Preview images
│   └── js/                   # Scripts
│       ├── main.js           # Loads cards from templates.json
│       ├── detail.js         # Handles template-details.html
│       └── nav_footer_loader.js # Injects navbar/footer
├── components/
│   ├── navbar.html
│   └── footer.html
├── pages/
│   ├── templates.html        # Full templates listing
│   ├── template-details.html# Dynamic detail view
│   └── about.html
└── templates/
    ├── templates.json        # List of templates for homepage/cards
    ├── business-landing/
    │   ├── metadata.json
    │   └── assets/images/
    │       └── bg.jpg
    └── portfolio-site/
        └── metadata.json
````

## 🧩 How to Contribute

Want to add your own site?

1. Fork this repo
2. Create a new folder under `/templates`
3. Add:

   * `metadata.json` (see format below)
   * `index.html`, `style.css`, `script.js`, etc.
   * A folder: `assets/images/` with screenshots
4. Add entry to `templates/templates.json`
5. Open a PR!

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
  "sourceUrl": "https://github.com/webhub/business-landing",
  "sections": [
    { "id": "hero", "title": "Hero" },
    { "id": "features", "title": "Features" },
    { "id": "testimonials", "title": "Testimonials" },
    { "id": "cta", "title": "Call to Action" }
  ]
}
```
---

## ✨ Roadmap

* [x] Responsive card UI for templates
* [x] Dynamic detail view
* [x] Theme toggle (light/dark)
* [x] JSON-driven architecture
* [ ] Deployment via GitHub Pages / Netlify
* [ ] Add template rating/stars
* [ ] Contributor leaderboard
* [ ] Search by author / tags

---

## 📚 Technologies Used

* **HTML5**
* **Tailwind CSS**
* **JavaScript (Vanilla)**
* **Alpine.js** (optional per template)
* **JSON** for dynamic metadata loading

---

## 🧑‍💻 Contributors

We appreciate your contributions! All contributors will be listed in the `CONTRIBUTORS.md` soon.

---

## 🛡️ License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 💬 Community

* Submit templates, raise issues, or suggest features
* Tweet about your contributions with `#webhub`
* Join our Discord (coming soon)

---
