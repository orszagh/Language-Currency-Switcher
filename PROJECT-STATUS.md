# LCSwitcher STAV PROJEKTU

**Verzia:** 1.1.2  
**Posledná aktualizácia:** 9. september 2025 - 18:45  
**Stav:** PRIPRAVENÉ NA PRODUKCIU - DOKUMENTÁCIA KOMPLETNÁ

## PREHĽAD PROJEKTU
**LCSwitcher** je kompletný jazykový a menový prepínač pre webové stránky a e-shopy. Plugin poskytuje moderný dropdown UI s podporou SVG vlajok, CSS custom properties pre theming a nové funkcie ako OnlyFlags režim a currencyChangeUrl.

### 🎯 HLAVNÉ CIELE PROJEKTU
- Poskytovať moderný a prístupný jazykový prepínač
- Flexibilné riešenie pre menový prepínač (odkazy aj callback systém)
- Plná podpora accessibility a klávesovej navigácie
- Optimalizovaný výkon a responzívny dizajn
- Jednoduché API a rozsiahle možnosti prispôsobenia
- Kompletná dokumentácia v slovenskom jazyku

## AKTUÁLNY STAV

### ✅ DOKONČENÉ FUNKCIE
- **Hlavný Plugin** (v1.1.2): jQuery plugin s kompletným API a novou currencyChangeUrl option
- **CSS Štýlovanie**: SCSS súbor s CSS custom properties systémom  
- **OnlyFlags Režim**: Nový režim s vlajkami vedľa seba bez dropdown
- **Vypnutie Pluginu**: Možnosť dočasného vypnutia
- **Currency URL Option**: NOVÉ v1.1.2 - meny môžu fungovať ako odkazy alebo callback
- **Debug Systém**: Rozšírený debugging pre vývoj
- **SVG Vlajky**: Automatické generovanie vlajok pre 15+ krajín
- **Responzívny Dizajn**: Plne responzívny na všetkých zariadeniach
- **Výkon**: Optimalizované animácie a prechody

### ✅ DOKUMENTÁCIA
- **README.md**: Kompletná dokumentácia s API referenciou v slovenčine
- **initialization-examples.js**: 20 praktických príkladov použitia
- **PROJECT-STATUS.md**: Tento súbor pre AI kontinuitu
- **Inline komentáre**: Komentáre v kóde pre lepšie pochopenie

### ✅ POSLEDNÉ VYLEPŠENIA
- **Dropdown rozostupy**: Opravené CSS selektory pre správne rozostupy
- **Rýchlosť animácií**: Zrýchlené transitions (0.3s → 0.15s, 0.2s → 0.1s)
- **Opravy okrajov**: Odstránené čierne borders, transparentné border-color
- **OnlyFlags štýlovanie**: Kompletné CSS pre nový režim s hover efektmi

## TECHNICKÁ ARCHITEKTÚRA

### ŠTRUKTÚRA SÚBOROV
```
Content/plugins/switcher-lang-currency-orso/
├── switcher-lang-currency-orso.js      # Hlavný plugin (v1.1.0)
├── switcher-lang-currency-orso.scss    # Zdrojové štýly (užívateľ kompiluje)
├── switcher-lang-currency-orso.css     # Kompilované CSS (gitignored)
├── README.md                           # Hlavná dokumentácia
├── initialization-examples.js          # Príklady použitia
├── PROJECT-STATUS.md                   # Tento súbor
└── CHANGELOG.md                        # História zmien
```

### ZÁVISLOSTI
- **jQuery 3.0+**: Základná závislosť pre DOM manipuláciu
- **SVG súbory**: Obrázky vlajok v `/flags/` adresári
- **SCSS kompilácia užívateľa**: Užívateľ manuálne kompiluje .scss → .css

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

### Najnovšie funkcie (9. september 2025)
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

## PRIPRAVENÝ NA PRODUKCIU

### ✅ PRIPRAVENÝ NA GITHUB
- Čistý, dokumentovaný kód
- Komplexné príklady a dokumentácia v slovenčine
- Verzia 1.1.2 s currencyChangeUrl funkcionalitou
- Žiadne známe chyby alebo problémy
- Produkčne testovaný štýlovací systém

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

### Pripravené na vydanie
1. ✅ **Čistá dokumentácia**: README.md kompletne prepísané v slovenčine
2. ✅ **Príkladový kód**: initialization-examples.js s 20 scenármi  
3. ✅ **Statusová dokumentácia**: Tento PROJECT-STATUS.md súbor v slovenčine
4. ✅ **Vyčistenie demo**: Odstránené demo.html a testovacie súbory
5. ✅ **Finálny commit**: "Dokumentácia v slovenčine nahraná úspešne"

## POZNÁMKY PRE AI KONTINUITU

### Kľúčové informácie pre budúce AI sessions
- **Workflow užívateľa**: Edituje .scss súbory, kompiluje manuálne do .css
- **Nikdy needitovať CSS**: Vždy editovať .scss zdrojové súbory
- **Aktuálna verzia**: 1.1.0 s OnlyFlags a disablePlugin funkciami  
- **Všetky funkcie funkčné**: Žiadne chyby, pripravené na produkčné použitie
- **Dokumentácia kompletná**: README.md má plnú API referenciu a príklady v slovenčine

### Nedávny kontext
- Užívateľ požiadal o komplexnú finalizáciu projektu
- Všetky CSS/štýlovacie problémy úspešne vyriešené
- Zameranie na čistý, produkčne pripravený balík pre GitHub
- Užívateľ preferuje dôkladnú dokumentáciu a príklady v slovenčine

### Kritické súbory
- `switcher-lang-currency-orso.js` - Hlavný plugin
- `switcher-lang-currency-orso.scss` - Zdrojové štýly (editovať toto)  
- `README.md` - Hlavná dokumentácia v slovenčine
- `initialization-examples.js` - Príklady použitia
- `PROJECT-STATUS.md` - Tento statusový súbor v slovenčine

**Stav:** PRIPRAVENÉ NA PRODUKCIU - v1.1.2 s currencyChangeUrl funkcionalitou

---
**Posledná synchronizácia s GitHub:** 9. september 2025 - 18:45  
**Commit status:** v1.1.2 nahraná na GitHub úspešne  
**Nová funkcionalita:** currencyChangeUrl option implementovaná a zdokumentovaná
