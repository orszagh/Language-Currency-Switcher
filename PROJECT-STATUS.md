# LCSwitcher STAV PROJEKTU

**Verzia:** 1.1.2  
**Posledná aktualizácia:** 8. september 2025 - 16:00  
**Stav:** PRIPRAVENÉ NA PRODUKCIU - STABILNÁ VERZIA

## PREHĽAD PROJEKTU
**LCSwitcher** je kompletný jazykový a menový prepínač pre webové stránky a e-shopy. Plugin poskytuje moderný dropdown UI s podporou SVG vlajok, CSS custom properties pre theming a nové funkcie ako OnlyFlags režim.

### 🎯 HLAVNÉ CIELE PROJEKTU
- Poskytovať moderný a prístupný jazykový prepínač
- Plná podpora accessibility a klávesovej navigácie
- Optimalizovaný výkon a responzívny dizajn
- Jednoduché API a rozsiahle možnosti prispôsobenia
- Kompletná dokumentácia v slovenskom jazyku

## AKTUÁLNY STAV v1.1.2

### ✅ DOKONČENÉ FUNKCIE
- **Hlavný Plugin** (v1.1.2): jQuery plugin s kompletným API
- **CSS Štýlovanie**: SCSS súbor s CSS custom properties systémom  
- **OnlyFlags Režim**: Nový režim s vlajkami vedľa seba bez dropdown
- **Vypnutie Pluginu**: Možnosť dočasného vypnutia
- **Debug Systém**: Rozšírený debugging pre vývoj
- **SVG Vlajky**: Automatické generovanie vlajok pre 15+ krajín
- **Responzívny Dizajn**: Plne responzívny na všetkých zariadeniach
- **Výkon**: Optimalizované animácie a prechody

### ✅ DOKUMENTÁCIA V SLOVENČINE
- **README.md**: Kompletná dokumentácia s API referenciou v slovenčine
- **initialization-examples.js**: 20 praktických príkladov použitia
- **PROJECT-STATUS.md**: Tento súbor pre AI kontinuitu v slovenčine
- **Inline komentáre**: Komentáre v kóde pre lepšie pochopenie

### ✅ VYLEPŠENIA v1.1.2 (september 2025)
- **Kompletná slovenská dokumentácia**: Všetky súbory preložené
- **GitHub synchronizácia**: Všetky súbory správne nahrané
- **Stabilná verzia**: Overená funkcionalita a dokumentácia
- **Dropdown rozostupy**: Opravené CSS selektory
- **Rýchlosť animácií**: Zrýchlené transitions (0.3s → 0.15s, 0.2s → 0.1s)
- **Opravy okrajov**: Odstránené čierne borders, transparentné border-color
- **OnlyFlags štýlovanie**: Kompletné CSS pre nový režim s hover efektmi

## TECHNICKÁ ARCHITEKTÚRA

### ŠTRUKTÚRA SÚBOROV
```
Content/plugins/switcher-lang-currency-v1.1.2/
├── switcher-lang-currency-orso.js      # Hlavný plugin (v1.1.2)
├── switcher-lang-currency-orso.scss    # Zdrojové štýly (užívateľ kompiluje)
├── switcher-lang-currency-orso.css     # Kompilované CSS (užívateľ má)
├── README.md                           # Hlavná dokumentácia v slovenčine
├── initialization-examples.js          # 20 príkladov použitia
├── PROJECT-STATUS.md                   # Tento súbor v slovenčine
└── CHANGELOG.md                        # História zmien
```

### ZÁVISLOSTI
- **jQuery 3.0+**: Základná závislosť pre DOM manipuláciu
- **SVG súbory**: Obrázky vlajok v `/flags/` adresári
- **SCSS kompilácia užívateľa**: Užívateľ manuálne kompiluje .scss → .css

### CSS CUSTOM PROPERTIES
**67 CSS premenných** s `--tp-lang-switcher-` prefixom:
- **Farby**: pozadia, okraje, text, hover stavy
- **Rozostupy**: paddings, margins, gaps
- **Typografia**: veľkosti písma, váhy, výšky riadkov  
- **Efekty**: tiene, prechody, transformácie
- **Layout**: šírky, výšky, pozicionovanie

## API REFERENCIA

### METÓDY
| Metóda | Účel | Stav |
|--------|------|------|
| `LCSwitcher.init(options)` | Inicializuje plugin | ✅ KOMPLETNÉ |
| `LCSwitcher.destroy()` | Vyčistí plugin | ✅ KOMPLETNÉ |
| `LCSwitcher.enableDebug()` | Zapne debug režim | ✅ KOMPLETNÉ |
| `LCSwitcher.disableDebug()` | Vypne debug režim | ✅ KOMPLETNÉ |

### MOŽNOSTI v1.1.2
- `onlyFlags: boolean` - Zobrazovať iba vlajky bez dropdown
- `disabledPlugin: boolean` - Dočasne vypnúť plugin
- `debug: boolean` - Zapnúť debug logovanie
- `language, languages, currency, currencies`
- `languageLabel, currencyLabel, languageChangeUrl`
- `allowCurrencyChange` (boolean)

## PRACOVNÝ POSTUP - KRITICKÉ PRAVIDLÁ!

### SCSS KOMPILÁCIA
- **Zdrojový súbor**: `switcher-lang-currency-orso.scss`
- **Kompilácia**: Zodpovednosť užívateľa (nie automatická)
- **Výstup**: `switcher-lang-currency-orso.css`
- **PRAVIDLO #1**: Vždy editovať .scss, nikdy .css priamo
- **PRAVIDLO #2**: Po úprave .scss kompilujte do .css

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

## STAV TESTOVANIA v1.1.2

### ✅ OVERENÉ FUNKCIE
- Dropdown funkcionalita a rozostupy
- OnlyFlags horizontálny layout
- Funkcia vypnutia pluginu  
- Výkon animácií a prechody
- Opravy štýlovania okrajov
- Responzívne správanie na všetkých zariadeniach
- SVG rendering vlajok
- CSS custom properties prepísanie
- GitHub synchronizácia dokumentácie

### ✅ KOMPATIBILITA PREHLIADAČOV
- Chrome 80+, Firefox 70+, Safari 13+, Edge 80+
- Mobile: iOS Safari 13+, Chrome Mobile 80+

## VYRIEŠENÉ PROBLÉMY

### Opravy v1.1.2 (8. september 2025)
1. **GitHub synchronizácia**: Vyriešené problémy s nahrávaním dokumentácie
2. **Slovenská dokumentácia**: Kompletné preloženie všetkých súborov
3. **Stabilná verzia**: Overená funkcionalita a súbory

### Opravy v1.1.0-1.1.1 (8. september 2025)
1. **Dropdown rozostupy**: Opravený CSS selektor `.options-list` → `.options[role="listbox"]`
2. **Rýchlosť animácií**: Optimalizované transition hodnoty pre lepší UX
3. **Problémy s okrajmi**: Nastavené transparentné `border-color` na problematických elementoch
4. **OnlyFlags štýlovanie**: Vytvorené komplexné CSS pre nový layout režim

## PRIPRAVENÝ NA PRODUKCIU

### ✅ STABILNÁ VERZIA v1.1.2
- Čistý, dokumentovaný kód
- Komplexné príklady a dokumentácia v slovenčine
- Všetky funkcie testované a overené
- Žiadne známe chyby alebo problémy
- GitHub synchronizácia vyriešená

## POZNÁMKY PRE AI KONTINUITU

### 🔑 KĽÚČOVÉ INFORMÁCIE PRE BUDÚCE AI SESSIONS
- **Aktuálna verzia**: v1.1.2 (stabilná verzia)
- **Workflow užívateľa**: Edituje .scss súbory, kompiluje manuálne do .css
- **NIKDY NEEDITOVAŤ CSS**: Vždy editovať .scss zdrojové súbory
- **Všetky funkcie funkčné**: Žiadne chyby, pripravené na produkčné použitie
- **Dokumentácia kompletná**: Všetko v slovenčine

### 📝 KONTEXT VERZIE v1.1.2
- Vytvorená kvôli problémom s GitHub synchronizáciou
- Všetky súbory skopírované a aktualizované
- Slovenská dokumentácia kompletná
- Stabilná verzia pripravená na distribúciu

### 📁 KRITICKÉ SÚBORY v1.1.2
- `switcher-lang-currency-orso.js` - Hlavný plugin
- `switcher-lang-currency-orso.scss` - **ZDROJOVÉ ŠTÝLY** (vždy editovať)  
- `README.md` - Dokumentácia v slovenčine
- `initialization-examples.js` - 20 príkladov
- `PROJECT-STATUS.md` - Tento súbor v slovenčine

### 🚨 DÔLEŽITÉ PRAVIDLÁ PRE v1.1.2
1. **Vždy editovať .scss súbory**, nie .css
2. **Dokumentácia v slovenčine** - všetky texty preložené
3. **API je kompletné** - žiadne nové funkcie potrebné
4. **Výkon optimalizovaný** - animácie rýchle
5. **Projekt produkčne pripravený** - stabilná verzia

---

**FINÁLNY STAV v1.1.2:** PRIPRAVENÉ NA PRODUKCIU  
**VERZIA:** Stabilná, otestovaná a pripravená na GitHub  
**POSLEDNÁ AKTUALIZÁCIA:** 8. september 2025 - 16:00
