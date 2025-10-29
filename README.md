
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
    ├── arkiv.json          # Her man putter inn egne sider og artikler
    ├── eksempel-side1/         # inneholder alt av html filer etc.
    │   ├── eksempel-side1.html # fylles inn med eksemplet under
    │   └── images/             # bilder spesifikke til artiklen
    │       └── preview.jpg     # Preview bildet
    │       └── alle_andre_bilder.jpg
````

### ✅ Eksempel på artikkel i  `arkiv.json`:

```json
 {
      "name": "NoTail",
      "description": "Et ellevillt barprosjekt i en promololeilighet",
      "folder": "notail",
      "tags": [
        "Studenthistorier"
      ],
      "author": "Andreas Holmsen",
      "created": "08-06-2024",
      "featured": true
    },
```
---

# Hvordan skrive en artikkel


### 1) Lag en ny mappe `artikkelnavn` som du skal putte inn i `arkiv` senere

  **Lag disse filene:**
  - `artikkelnavn.html` - filen som inneholder all HTML (selve teksten)
  - `images/` - mappen som inneholder alle bildene
  - `images/preview.jpg` - et bilde til forhåndsvisning 

### 2) Legg til et innlegg i `arkiv/arkiv.json` med info om artikkelen:

Legg til denne informasjonen

```json
     {
      "name": "NoTail",
      "description": "Et ellevillt barprosjekt i en promololeilighet",
      "folder": "notail",
      "tags": [
        "Studenthistorier"
      ],
      "author": "Andreas Holmsen",
      "created": "08-06-2024",
      "featured": true
    },
```

- name: Tittel på artikkelen
- description: Kort beskrivelse
- folder: mappenavnet
- tags: Hva slags type innlegg det er
- author: Hvem som har skrevet artikkelen
- created: Dato i format DD-MM-ÅÅÅÅ
- featured: true/false, om artikkelen er featured eller ikke

**HUSK! Riktig mengde komma. *Ikke komma for siste element i en liste***

### 3) I `artikkelnavn.html`, fyll inn dette:



```html

    <!DOCTYPE html>
    <html lang="en" class="scroll-smooth">

    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>ARTIKKELNAVN – NORGINSA</title>

      <!-- Tailwind + AOS CSS -->
      <link rel="stylesheet" href="../../assets/css/article.css">
      <script src="https://cdn.tailwindcss.com"></script>
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      <script>tailwind.config = { darkMode: 'class' }</script>
    </head>

    <body
      class="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300 relative font-sans">

      <!-- Navbar -->
      <div id="navbar"></div>
      <script src="../getNavbar.js"></script>
      <script>document.getElementById("navbar").innerHTML = getNavbarHTML();</script>
      <script src="../../assets/js/navbar.js"></script>


    <!-- ======= TITTEL ======= -->
      <section class="fade-down-anim max-w-7xl mx-auto px-4">
        <div class="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800">
          <div class="px-6 py-16 text-center">
            <p class="inline-flex items-center gap-2 text-sm font-medium text-red-600 dark:text-red-400">
              SIST OPPDATERT: [DATO]
            </p>
            <h1 class="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight">
                ARTIKKELTITTEL
            </h1>
            <p class="mt-3 text-base sm:text-lg text-gray-600 dark:text-gray-300">
              SKREVET AV: [NAVN]  
            </p>
          </div>
        </div>
      </section>

    <!-- Legg til ting her!!-->


    </div>
    </div>

      <!-- Footer Container -->
      <div id="footer"></div>
      <script src="../../assets/js/getFooter.js"></script>
      <script>document.getElementById("footer").innerHTML = getFooterHTML();</script>

      <!-- Floating Theme Toggle Button -->
      <div id="floatingButton"></div>
      <script src="getFloatingButton.js"></script>
      <script>document.getElementById("floatingButton").innerHTML = getFloatingButton();</script>


      <!-- Scripts -->
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      <script src="../bunnscript.js"></script>
    </body>

    </html>
```

Fortsett deretter med å fylle inn info og bilder osv.

**TIPS! Sjekk ut `arkiv/eksempelartikkel/` for alle mulige formateringsmuligheter! Copy+Paste mulighetene er store**


## 📚 Teknologier Brukt

* **HTML5**
* **Tailwind CSS**
* **JavaScript (Vanilla)**
* **JSON** for å dynamisk laste inn data


### Template stjålet fra https://github.com/x01-open-source/NORGINSA
