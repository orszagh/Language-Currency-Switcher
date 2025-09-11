# Language & Currency Switcher STAV PROJEKTU

**Verzia:** 1.1.3  
**Posledná aktualizácia:** 11. september 2025 - 09:55  
**Stav:** PUBLIKOVANÉ NA NPM - NPM BALÍČEK DOSTUPNÝ

## PREHĽAD PROJEKTU
**Language & Currency Switcher** je kompletný jazykový a menový prepínač publikovaný ako NPM balíček `language-currency-switcher`. Plugin poskytuje moderný dropdown UI s podporou vlajok, plnú accessibility a nové funkcie ako OnlyFlags režim a currencyChangeUrl duálny systém.

### 🎯 HLAVNÉ CIELE PROJEKTU
- Poskytovať moderný a prístupný jazykový prepínač
- Flexibilné riešenie pre menový prepínač (odkazy aj callback systém)
- Plná podpora accessibility a klávesovej navigácie
- Optimalizovaný výkon a responzívny dizajn
- Jednoduché API a rozsiahle možnosti prispôsobenia
- Kompletná dokumentácia v slovenskom jazyku
- NPM distribúcia pre jednoduché používanie vo všetkých projektoch

## AKTUÁLNY STAV

### ✅ DOKONČENÉ FUNKCIE
- **NPM Balíček** (v1.1.3): Publikovaný na npmjs.com ako `language-currency-switcher`
- **Hlavný Plugin**: jQuery plugin s kompletným API a currencyChangeUrl option
- **NPM Štruktúra**: Profesionálna štruktúra src/examples/docs pre distribúciu
- **CSS Štýlovanie**: SCSS súbor s CSS custom properties systémom  
- **OnlyFlags Režim**: Nový režim s vlajkami vedľa seba bez dropdown
- **Vypnutie Pluginu**: Možnosť dočasného vypnutia
- **Currency URL Option**: Meny môžu fungovať ako odkazy alebo callback
- **Debug Systém**: Rozšírený debugging pre vývoj
- **Vlajky**: Automatické generovanie vlajok pre 15+ krajín
- **Responzívny Dizajn**: Plne responzívny na všetkých zariadeniach
- **Výkon**: Optimalizované animácie a prechody

### ✅ DOKUMENTÁCIA
- **README.md**: Kompletná dokumentácia s API referenciou v slovenčine
- **docs/API.md**: Detailná anglická API dokumentácia pre NPM
- **docs/CHANGELOG.md**: Kompletná história verzií a zmien
- **examples/initialization-examples.js**: 24 praktických príkladov použitia
- **PROJECT-STATUS.md**: Tento súbor pre AI kontinuitu
- **package.json**: NPM konfigurácia s metadátami
- **Inline komentáre**: Komentáre v kóde pre lepšie pochopenie

### ✅ POSLEDNÉ VYLEPŠENIA (v1.1.3)
- **NPM publikácia**: Balíček úspešne publikovaný na npmjs.com
- **Profesionálna štruktúra**: Reorganizácia do src/examples/docs adresárov
- **Premenované súbory**: language-currency-switcher.* pre konzistentnosť
- **Rozšírené príklady**: Pridané chýbajúce currencyChangeUrl do všetkých príkladov
- **Kompletná dokumentácia**: API.md a CHANGELOG.md pre profesionálne použitie
- **NPM metadáta**: Optimalizované kľúčové slová a popis pre objavovanie

### Predchádzajúce vylepšenia (v1.1.2)
- **Dropdown rozostupy**: Opravené CSS selektory pre správne rozostupy
- **Rýchlosť animácií**: Zrýchlené transitions (0.3s → 0.15s, 0.2s → 0.1s)
- **Opravy okrajov**: Odstránené čierne borders, transparentné border-color
- **OnlyFlags štýlovanie**: Kompletné CSS pre nový režim s hover efektmi

## TECHNICKÁ ARCHITEKTÚRA

### ŠTRUKTÚRA SÚBOROV (NPM v1.1.3)
```
language-currency-switcher/
├── src/                                      # NPM hlavné súbory
│   ├── language-currency-switcher.js        # Hlavný plugin
│   ├── language-currency-switcher.css       # Kompilované CSS
│   └── language-currency-switcher.scss      # Zdrojové štýly
├── examples/                                 # Príklady použitia
│   └── initialization-examples.js           # 24 príkladov inicializácie
├── docs/                                     # Dokumentácia
│   ├── API.md                               # Anglická API dokumentácia
│   └── CHANGELOG.md                         # História verzií
├── package.json                             # NPM konfigurácia
├── .npmignore                               # NPM exclude súbory
├── LICENSE                                  # MIT licencia
├── README.md                                # Slovenská dokumentácia
├── PROJECT-STATUS.md                        # Tento súbor
└── [legacy files]                           # Spätná kompatibilita
    ├── switcher-lang-currency-orso.js       # Starší názov súboru
    ├── switcher-lang-currency-orso.scss     
    └── switcher-lang-currency-orso.css
```

### NPM INŠTALÁCIA A POUŽITIE
```bash
npm install language-currency-switcher
```

```javascript
// Import v Node.js/Webpack/Vite projektoch
import 'language-currency-switcher/src/language-currency-switcher.css';
import 'language-currency-switcher/src/language-currency-switcher.js';

// Alebo CDN
<script src="https://unpkg.com/language-currency-switcher@1.1.3/src/language-currency-switcher.js"></script>
<link rel="stylesheet" href="https://unpkg.com/language-currency-switcher@1.1.3/src/language-currency-switcher.css">
```

### ZÁVISLOSTI
- **jQuery 3.0+**: Základná závislosť pre DOM manipuláciu
- **NPM**: Node.js 14.0+ pre inštaláciu balíčka
- **Vlajky**: Obrázky vlajok v používateľskom `/flags/` adresári
- **SCSS kompilácia**: Automaticky kompilované pre NPM distribúciu

### CSS CUSTOM PROPERTIES
**67 CSS premenných** s `--tp-lang-switcher-` prefixom:
- Farby: pozadia, okraje, text, hover stavy
- Rozostupy: paddings, margins, gaps
- Typografia: veľkosti písma, váhy, výšky riadkov  
- Efekty: tiene, prechody, transformácie
- Layout: šírky, výšky, pozicionovanie

## API REFERENCIA

### METÓDY
| Metóda | Účel | Stav |
|--------|------|------|
| `LCSwitcher.init(options)` | Inicializuje plugin | ✅ KOMPLETNÉ |
| `LCSwitcher.destroy()` | Vyčistí plugin | ✅ KOMPLETNÉ |
| `LCSwitcher.enableDebug()` | Zapne debug režim | ✅ KOMPLETNÉ |
| `LCSwitcher.disableDebug()` | Vypne debug režim | ✅ KOMPLETNÉ |

### NOVÉ MOŽNOSTI (v1.1.2)
- `currencyChangeUrl: string` - **NOVÉ** URL template pre menové odkazy (voliteľné)
  - Ak je definovaná → meny fungujú ako odkazy (navigácia)
  - Ak nie je definovaná → meny fungujú cez callback window.onCurrencyChange()

### EXISTUJÚCE MOŽNOSTI (v1.1.0+)
- `onlyFlags: boolean` - Zobrazovať iba vlajky bez dropdown
- `disabledPlugin: boolean` - Dočasne vypnúť plugin
- `debug: boolean` - Zapnúť debug logovanie

### ZÁKLADNÉ MOŽNOSTI
- `language, languages, currency, currencies`
- `languageLabel, currencyLabel, languageChangeUrl`
- `allowCurrencyChange` (boolean)

## PRACOVNÝ POSTUP

### SCSS KOMPILÁCIA
- **Zdrojový súbor**: `switcher-lang-currency-orso.scss`
- **Kompilácia**: Zodpovednosť užívateľa (nie automatická)
- **Výstup**: `switcher-lang-currency-orso.css` (gitignored)
- **Editovanie**: Vždy editovať .scss, nikdy .css priamo

### CSS PRISPÔSOBENIE
Užívatelia môžu prepísať akúkoľvek z 67 CSS custom properties:
```css
:root {
  --tp-lang-switcher-bg-color: #ffffff;
  --tp-lang-switcher-text-color: #333333;
  --tp-lang-switcher-border-radius: 8px;
  /* ... ďalších 64 premenných ... */
}
```

## STAV TESTOVANIA

### ✅ OVERENÉ FUNKCIE
- Dropdown funkcionalita a rozostupy
- OnlyFlags horizontálny layout
- Funkcia vypnutia pluginu  
- Výkon animácií
- Opravy štýlovania okrajov
- Responzívne správanie
- SVG rendering vlajok
- CSS custom properties prepísanie

### ✅ KOMPATIBILITA PREHLIADAČOV
- Chrome 80+, Firefox 70+, Safari 13+, Edge 80+
- Mobile: iOS Safari 13+, Chrome Mobile 80+

## VYRIEŠENÉ PROBLÉMY

### NAJNOVŠIE FUNKCIE (v1.1.3 - 11. september 2025)
1. **NPM publikácia**: Balíček úspešne publikovaný na https://www.npmjs.com/package/language-currency-switcher
2. **Profesionálna štruktúra**: Reorganizácia súborov do src/examples/docs adresárov
3. **Premenované súbory**: Všetky súbory premenované na language-currency-switcher.*
4. **Rozšírené príklady**: Pridané chýbajúce currencyChangeUrl do príkladov 5, 8, 12
5. **API dokumentácia**: Vytvorená docs/API.md s kompletnou anglickou dokumentáciou
6. **CHANGELOG**: Detailná história všetkých verzií v docs/CHANGELOG.md
7. **NPM metadáta**: Optimalizované package.json s kľúčovými slovami a popisom

### Funkcie z v1.1.2 (9. september 2025)
1. **currencyChangeUrl option**: Implementovaná nová option pre currency odkazy
   - Dvojitý režim: odkazy (s currencyChangeUrl) alebo callback (bez nej)
   - Plná spätná kompatibilita s existujúcim kódom
   - Hybridný režim: jazyky ako odkazy + meny ako callback
2. **Kompletná dokumentácia**: Pridaná úplná referencia všetkých options do initialization-examples.js
3. **AI kontinuita**: Zdokumentovaná nová funkcionalita pre budúce AI pokračovanie

### Posledné opravy (8. september 2025)
1. **Dropdown rozostupy**: Opravený CSS selektor `.options-list` → `.options[role="listbox"]`
2. **Rýchlosť animácií**: Optimalizované transition hodnoty pre lepší UX
3. **Problémy s okrajmi**: Nastavené transparentné `border-color` na problematických elementoch
4. **OnlyFlags štýlovanie**: Vytvorené komplexné CSS pre nový layout režim

### Optimalizácie výkonu
- Znížené trvanie prechodov o 50%
- Optimalizované CSS selektory pre špecificitu
- Minimalizované reflows počas animácií

## PUBLIKOVANÉ NA NPM

### ✅ NPM BALÍČEK DOSTUPNÝ
- **Názov:** `language-currency-switcher`
- **Verzia:** 1.1.3
- **Registry:** https://www.npmjs.com/package/language-currency-switcher
- **Autor:** lubo (Országh Ľubomír)
- **Licencia:** MIT
- **Veľkosť:** 29.2 kB (124.1 kB rozbalené)

### ✅ PRIPRAVENÝ NA GITHUB
- Čistý, dokumentovaný kód
- Komplexné príklady a dokumentácia v slovenčine aj angličtine
- Verzia 1.1.3 s NPM štruktúrou a currencyChangeUrl funkcionalitou
- Žiadne známe chyby alebo problémy
- Produkčne testovaný štýlovací systém
- Tag v1.1.3 vytvorený na GitHub repository

### VYČISTENIE DOKONČENÉ
- ✅ Odstránené `demo.html` (vývojársky súbor)
- ✅ Odstránené dočasné/testovacie súbory
- ✅ Zabezpečené že `.css` súbor je gitignored (užívateľ kompiluje z .scss)

## ĎALŠIA FÁZA VÝVOJA

### Potenciálne budúce funkcie
- **TypeScript podpora**: .d.ts definície
- **Framework integrácie**: React/Vue komponenty
- **Ďalšie vlajky**: Viac vlajok krajín
- **Accessibility**: Rozšírená ARIA podpora
- **Témy**: Predpripravené farebné schémy

### Údržba
- Pravidelné aktualizácie kompatibility prehliadačov
- Monitorovanie výkonu
- Integrácia spätnej väzby od užívateľov

## GITHUB COMMIT STRATÉGIA

### Pripravené na používanie
1. ✅ **NPM publikácia dokončená**: Balíček dostupný pre inštaláciu
2. ✅ **GitHub release vytvorený**: Tag v1.1.3 na repository
3. ✅ **Dokumentácia kompletná**: README.md, API.md, CHANGELOG.md
4. ✅ **Príklady aktualizované**: 24 príkladov s currencyChangeUrl
5. ✅ **NPM metadáta optimalizované**: Kľúčové slová a popis pre objavovanie

## POZNÁMKY PRE AI KONTINUITU

### Kľúčové informácie pre budúce AI sessions
- **NPM balíček publikovaný**: `language-currency-switcher` v1.1.3 dostupný na npmjs.com
- **Štruktúra súborov**: src/examples/docs organizácia pre NPM distribúciu
- **Hlavné súbory**: language-currency-switcher.js/css v src/ adresári
- **Spätná kompatibilita**: Staré switcher-lang-currency-orso.* súbory zachované
- **Dokumentácia**: README.md (SK) + docs/API.md (EN) + docs/CHANGELOG.md
- **Všetky funkcie funkčné**: currencyChangeUrl, OnlyFlags, disablePlugin - pripravené na produkčné použitie
- **NPM workflow**: Užívatelia inštalujú cez `npm install language-currency-switcher`

### Nedávny kontext (v1.1.3)
- Úspešná NPM publikácia balíčka language-currency-switcher
- Reorganizácia súborov do profesionálnej NPM štruktúry
- Vytvorenie komplexnej API dokumentácie v angličtine
- Rozšírenie príkladov s chýbajúcimi currencyChangeUrl možnosťami
- GitHub tag v1.1.3 vytvorený a pushnutý

### Kritické súbory (NPM štruktúra)
- `src/language-currency-switcher.js` - Hlavný plugin pre NPM
- `src/language-currency-switcher.scss` - Zdrojové štýly (editovať toto)
- `examples/initialization-examples.js` - 24 príkladov použitia
- `docs/API.md` - Anglická API dokumentácia
- `docs/CHANGELOG.md` - História verzií
- `README.md` - Hlavná dokumentácia v slovenčine
- `package.json` - NPM konfigurácia
- `PROJECT-STATUS.md` - Tento statusový súbor v slovenčine

**Stav:** PUBLIKOVANÉ NA NPM - v1.1.3 dostupná pre celý svet

---
**Posledná synchronizácia s NPM:** 11. september 2025 - 09:56  
**NPM balíček:** https://www.npmjs.com/package/language-currency-switcher  
**GitHub repository:** https://github.com/orszagh/Language-Currency-Switcher  
**NPM status:** ✅ PUBLIKOVANÉ a dostupné pre inštaláciu
