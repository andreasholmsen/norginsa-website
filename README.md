
# NORGINSA – Nettside

Hva som mangler:

- [ ] Fikse visning av "featured articles" på hjemmesiden på mobil - på visse enheter fungerer det ikke.
- [ ] Legge til oppsummering av NORGINSA-programmet på /about.html siden
- [ ] Legge til bidragsytere på /about.html siden (utifra hvor mange som faktisk bidrar til siden)
- [ ] Fikse tags i /arkiv.html, slik at man kan sortere etter artikler som inneholder tags
- [ ] Passe på at tekstboksen i /arkiv.html er trygg og ikke kan ødelegge siden
- [ ] Legge til bilde av alle studentene fra 17. Mai på hjemmesiden.
- [ ] Generellt sett skrive om tekster til å bli bedre ved behov - spesielt teksten på hjemmesiden.
- [X] Fikse slik at bildet på hjemmesiden er like bredt som boksen rett over på desktop
- [ ] Skrive masse artikler!
    - [ ] TEKNA-Toulouse
    - [ ] ANSA-Toulouse
    - [ ] NoTail
    - [ ] Søknadsprosessen
    - [ ] Førsteklasse
    - [ ] MIC
    - [ ] IMACS
    - [ ] IC
    - [ ] ICBE
    - [ ] Vintur
    - [ ] Julebord
    - [ ] PYRRA
    - [ ] 17. Mai
    - [ ] Sommerlunsj
    - [ ] Utveksling / Dobbeldiplom
    - [ ] PK
    - [ ] BOOM
    - [ ] Barer i Toulouse
    - [ ] Afterworks
    - [ ] Feriesystem
    - [ ] Stage / Internship
    - [ ] AS
    - [ ] RU
    - [ ] Campus-Appen
    - [ ] Nyttige lenker (kopi av wiki-siden ish)
    - [ ] Quoi de nøff
    - [ ] Bosituasjonen på campus
    - [ ] Bosituasjonen i byen
    - [ ] Chazel
    - [ ] Hebras
    - [ ] Intervjue tidligere NORGINSA for erfaringer


## 🧱 Prosjektstruktur

```bash
.
├── index.html                  # Hjemmeside
├── about.html                  # Om NORGINSA siden
├── kontakt.html                # Kontaktside
├── arkiv.html                  # Arkivside
├── assets/
│   └── css/                    # Lokal CSS
│       ├── style.css           # Ekstra CSS hvis nødvendig
│       ├── navbar.css          # Ekstra CSS hvis nødvendig
│   ├── images/                 # Alt av bilder utenom bilder i artikler
│   └── js/                     # Scripts
│       ├── getFooter.js        # genererer footer
│       ├── getNavbar.js        # generer navbar
│       └── navbar.js           # ekstra navbar script (animasjoner etc.)
└── arkiv/
    ├── templates.json          # Her man putter inn egne sider og artikler
    ├── eksempel-side1/         # inneholder alt av html filer etc.
    │   ├── eksempel-side1.html # fylles inn med eksemplet under
    │   └── images/             # bilder spesifikke til artiklen
    │       └── preview.jpg     # Preview bildet
    │       └── alle_andre_bilder.jpg
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
