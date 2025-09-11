# AI KONTINUITA - Language & Currency Switcher v1.1.4

## 🔧 KĽÚČOVÉ TECHNICKÉ INFORMÁCIE

### Vlastné SVG vlajky (v1.1.4)
- **Umiestnenie:** `/src/flags/{kód}.svg`
- **Podporované krajiny:** SK, EN, DE, FR, ES, IT, HU, CZ, PL, NL, RU, PT
- **CSS triedy:** `.lcs-flag .lcs-flag-{kód}` (NIE `.flag-icon-*`!)
- **CSS cesty:** `background-image: url('flags/{kód}.svg')`
- **Žiadne externé závislosti** - kompletne nezávislý plugin

### Kľúčové funkcie pre vlajky
```javascript
getFlagCode(langCode)     // Mapovanie: en->gb, sk->sk, atď.
createFlagSpan(langCode)  // Generuje: <span class="lcs-flag lcs-flag-{kód}">
```

### Pridanie novej vlajky
1. Pridať SVG súbor: `/src/flags/{kód}.svg`
2. Pridať CSS: `.lcs-flag-{kód} { background-image: url('flags/{kód}.svg'); }`
3. Aktualizovať `getFlagCode()` ak je potrebné mapovanie
4. Rekompilovať SCSS → CSS

### Zdroje pre nové vlajky
- **Flag Icons:** https://flagicons.lipis.dev/
- **Country Flags API:** https://flagsapi.com/

## 📁 ŠTRUKTÚRA PROJEKTU
```
src/
├── language-currency-switcher.js    // Hlavný JS súbor
├── language-currency-switcher.css   // Kompilovaný CSS
├── language-currency-switcher.scss  // Zdrojový SCSS
└── flags/                           // Vlastné SVG vlajky
    ├── sk.svg, en.svg, de.svg, ...
examples/
├── initialization-examples.js       // 24 príkladov použitia
docs/
├── API.md                           // Anglická API dokumentácia
└── CHANGELOG.md                     // História zmien v SK
```

## ⚙️ KONFIGURAČNÉ MOŽNOSTI
- `language`: Aktuálny jazyk (sk, en, de, ...)
- `currency`: Aktuálna mena (eur, usd, czk, ...)
- `languages`: Pole jazykov ['sk|Slovenčina', 'en|English']
- `currencies`: Pole mien ['eur|EUR €', 'usd|USD $']
- `languageChangeUrl`: URL pre jazykové odkazy
- `currencyChangeUrl`: URL pre menové odkazy (NOVÉ)
- `onlyFlags`: Boolean - iba vlajky bez dropdown
- `targetSelector`: CSS selektor cieľového elementu
- `debug`: Boolean - console.log pre debugging

## 🎯 KĽÚČOVÉ FUNKČNOSTI
- **Dual mode meny:** Odkazy (currencyChangeUrl) alebo callback systém
- **OnlyFlags režim:** Horizontálne vlajky bez dropdown (v1.1.0+)
- **Accessibility:** Plná ARIA podpora, screen reader oznámenia
- **Mobile first:** Fixné pozíciovanie vľavo dole s overlay
- **CSS custom properties:** 67 premenných s prefixom --tp-lang-switcher-

## 📦 NPM BALÍK
- **Názov:** `language-currency-switcher`
- **Verzia:** 1.1.4
- **Hlavný súbor:** `src/language-currency-switcher.js`
- **Štýly:** `src/language-currency-switcher.css`
- **Závislosť:** jQuery 3.0+
- **Žiadne peer dependencies** (odstránené flag-icons v1.1.4)

## 🔄 HISTÓRIA VERZIÍ
- **v1.1.4:** Vlastné SVG vlajky, odstránené flag-icons
- **v1.1.3:** NPM balík, profesionálna štruktúra
- **v1.1.2:** currencyChangeUrl dual mode
- **v1.1.0:** OnlyFlags režim
- **v1.0.x:** Základná funkcionalita

## 🚨 DÔLEŽITÉ PRE AI ASISTENTOV
- **NIKDY nepoužívať** `flag-icon-*` CSS triedy - iba `lcs-flag-*`!
- **NIKDY nepridávať** flag-icons závislosti - plugin má vlastné vlajky
- **VŽDY používať** `getFlagCode()` pre mapovanie jazykov na vlajky
- **VŽDY kontrolovať** dostupnosť vlajky v `/src/flags/` pred použitím
- Ak nie je vlajka dostupná, odporučiť stiahnutie z Flag Icons alebo Country Flags API
