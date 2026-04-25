# codenogi

Személyes portfólió weboldal — egyoldalas, reszponzív, kétnyelvű (angol / magyar) bemutatkozó site, amely a fejlesztői profilomat, készségeimet és projektjeimet mutatja be.

🌐 **Élő demó:** [https://code-nogi.github.io/codenogi-website/](https://code-nogi.github.io/codenogi-website/)

## Áttekintés

A site egy klasszikus single-page portfólió, az alábbi szekciókkal:

- **Home** — bemutatkozás és a MERN stack ikonjai
- **About** — köszöntés, rövid intro, valamint a korábbi tapasztalatok (katonaság, légtérellenőrzés, pénzügy, vitorlázórepülés)
- **Skills** — front-end és back-end készségek (HTML, CSS, ES6, React, MongoDB, Mongoose, Express, Node.js)
- **Portfolio** — projektkártyák GitHub és élő demó linkekkel
- **Contact** — kapcsolatfelvételi űrlap egy saját REST API-n keresztül (`hunmetdataapi.hu`)

További funkciók:

- Light / dark téma váltó
- Nyelvváltó (EN / HU) `i18next` alapokon
- Animált, áramkör-stílusú SVG háttér
- Görgetésérzékeny menü `IntersectionObserver`-rel — a látható szekció kiemelve marad a fejlécben
- Honeypot mező a kontakt formon spamvédelemnek

## Tech stack

| Kategória   | Eszköz                                                       |
| ----------- | ------------------------------------------------------------ |
| Build tool  | Vite 7                                                       |
| UI library  | React 19                                                     |
| Lokalizáció | i18next, react-i18next                                       |
| Stílus      | CSS Modules                                                  |
| Linting     | ESLint 9 (flat config) + react-hooks, react-refresh pluginek |
| Deploy      | GitHub Pages (`gh-pages`)                                    |

## Projekt struktúra

```
codenogi/
├── public/
├── src/
│   ├── assets/                      # Favicon, képek
│   ├── components/                  # React komponensek + hozzájuk tartozó CSS Module fájlok
│   │   ├── header.jsx
│   │   ├── menu.jsx
│   │   ├── background.jsx           # SVG áramköri animáció
│   │   ├── contact-form.jsx
│   │   ├── dialog.jsx
│   │   ├── project-card.jsx
│   │   └── ...
│   ├── utilities/
│   │   ├── i18n.js                  # i18next konfiguráció
│   │   ├── translations.json        # EN / HU fordítások
│   │   ├── theme-context.jsx        # Light/dark téma context
│   │   ├── use-form-validation.js   # Custom hook a form mezőkhöz
│   │   ├── constants.js             # Menü, stack, projekt adatok
│   │   ├── background-items.js      # SVG háttér geometria
│   │   ├── background-paths.js
│   │   └── svg-getters.jsx          # Inline SVG ikonok
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

## Telepítés és futtatás

**Követelmények:** Node.js 20+, npm

```bash
# Függőségek telepítése
npm install

# Fejlesztői szerver indítása (HMR-rel, alapértelmezetten http://localhost:5173)
npm run dev

# Production build
npm run build

# Build előnézete lokálisan
npm run preview

# Linter futtatása
npm run lint
```

## Deploy

A projekt GitHub Pages-re deployolható egyetlen paranccsal — a `predeploy` script automatikusan lefuttatja a build-et:

```bash
npm run deploy
```

Ez a `dist/` mappát publikálja a `gh-pages` branchre.

A `vite.config.js`-ben a `base` URL alapértelmezetten `/codenogi-website/`. Ha más útvonalra deployolsz, állítsd be a `VITE_BASE` environment változót:

```bash
VITE_BASE=/saját-útvonal/ npm run build
```

## Konfigurálás

### Tartalmak szerkesztése

A statikus tartalmak (menüpontok, projektek listája, tech stack ikonok) központosítva, a `src/utilities/constants.js`-ben találhatók. Új projekt hozzáadásához bővítsd a `projectDataArray`-t:

```javascript
{
  name: "új-projekt",
  langKeys: ["UjProjekt-title", "UjProjekt-text"],
  techSVGs: [getReactSVG, getNodeJSSVG],
  githubURL: "https://github.com/...",
  demoURL: "https://...",
}
```

### Fordítások

A `src/utilities/translations.json` tartalmazza az angol és magyar szöveget kulcs-érték párokban. Új kulcs hozzáadásakor mindkét nyelven add meg a fordítást.

### Téma és nyelv

- A téma kezdeti értéke a böngésző `prefers-color-scheme` értékéből származik (`theme-context.jsx`).
- A nyelv alapértelmezetten angol (`i18n.js` — `lng: "en"`).

## Komponens-architektúra

A főbb építőelemek:

- **`App.jsx`** — a `ThemeProvider`-rel körbeveszi a teljes alkalmazást, és egy `IntersectionObserver`-rel követi a látható szekciót (`activeSection`), amit átad a `Header`-nek és az `Anchor` komponenseknek.
- **`Header`** — Logo, Title, Menu, Social, Modes komponenseket fog össze.
- **`Menu`** — `MenuToggle` (mobil hamburger) + `MenuList` (linkek).
- **`Section`** — a tartalmi szekciók közös wrappere (id, className).
- **`ContactForm`** — `TextInput`, `TextArea`, `Button` és `Dialog` kombinációja, a `useFormValidation` hookra építve.
- **`Dialog`** — natív `<dialog>` elem `showModal()`-lal, sending / success / error státuszokkal.
- **`Background`** — dekoratív, animált SVG az áramköri ikonnal és a "GIG" felirattal.

## Kapcsolat / kontakt API

A kapcsolati űrlap a `https://hunmetdataapi.hu/contact/siteemail` végpontra POST-ol JSON-t. A backend is saját projekt, ami a GitHub-on itt található: `https://github.com/code-nogi/contact_api`.

## Licenc

Privát projekt, minden jog fenntartva.

## Készítő

**code-nogi** — [GitHub](https://github.com/code-nogi)
