# 🌍 Language & Currency Switcher v1.2.0

Pokročilý jazykový a menový prepínač pre webové stránky s plnou podporou accessibility, klávesovej navigácie a responsívneho dizajnu.

## 📁 Štruktúra projektu

```
language-currency-switcher/
├── .gitignore                   # Git ignore súbory (node_modules, dist, logs)
├── .npmignore                   # NPM ignore súbory pre čistú publikáciu
├── LICENSE                      # MIT licencia
├── package.json                 # NPM manifest (verzia, závislosti, scripts)
├── README.md                    # 📖 Hlavná dokumentácia a Getting Started
├── docs/                        # 📚 Kompletná dokumentácia projektu
│   ├── API.md                   # 🔧 Anglická API dokumentácia pre vývojárov
│   ├── CHANGELOG.md             # 📝 História všetkých verzií a zmien
│   ├── OPTIONS.md               # ⚙️ Kompletný prehľad všetkých konfigurácií
│   └── PROJECT-STATUS.md        # 🤖 AI kontinuita a stav vývoja projektu
├── examples/                    # 💡 Praktické príklady použitia
│   └── initialization-examples.js  # Kompletné príklady inicializácie pluginu
└── src/                         # 🛠️ Zdrojové súbory pluginu
    ├── language-currency-switcher.js   # Hlavný JavaScript kód
    ├── language-currency-switcher.scss # SCSS zdrojové štýly
    ├── language-currency-switcher.css  # Kompilované CSS štýly
    └── flags/                   # 🏁 SVG vlajky krajín (12 podporovaných)
        ├── sk.svg, en.svg, de.svg, fr.svg, es.svg, it.svg
        └── hu.svg, cz.svg, pl.svg, nl.svg, ru.svg, pt.svg
```

## ✨ Nové funkcie v1.2.0

- 💰 **onlyCurrency režim** - Kompaktný prepínač iba pre meny bez dropdown menu
- 🎨 **Konzistentný styling** - Zjednotený dizajn medzi onlyFlags a onlyCurrency
- 🐛 **Bug fixes** - Opravený displayText undefined error v debug logovaní
- 📚 **Rozšírená dokumentácia** - Aktualizované OPTIONS.md s novými možnosťami

## Funkcie z v1.1.5

- 🧹 **Cleanup release** - Odstránený duplikovaný AI-KONTINUITA.md súbor
- 🎯 **Konzistentná štruktúra** - Iba PROJECT-STATUS.md pre AI kontinuitu
- 📦 **Čistý NPM balíček** - Optimalizovaný obsah bez duplikátov

## Funkcie z v1.1.4

- 🏁 **Vlastné SVG vlajky** - Kompletne nezávislý plugin bez externých závislostí
- 🎨 **Nové CSS triedy** - `.lcs-flag-*` namiesto `flag-icon-*` (BREAKING CHANGE)
- 🌍 **12 zahrnutých vlajok** - SK, EN, DE, FR, ES, IT, HU, CZ, PL, NL, RU, PT
- 🔗 **Odporúčania zdrojov** - Návod na stiahnutie ďalších vlajok z Flag Icons a Country Flags API
- 📦 **Zero dependencies** - Odstránená závislosť na flag-icons balíčku

## Funkcie z v1.1.2

- 🏁 **OnlyFlags režim** - Zobrazenie vlajok horizontálne bez dropdown menu
- 🔧 **Možnosť vypnutia pluginu** - Dočasné vypnutie prepínača
- 🐛 **Rozšírený debug systém** - Lepšie logovanie pre vývoj
- ⚡ **Optimalizovaný výkon** - Rýchlejšie animácie a prechody
- 📚 **Kompletná slovenská dokumentácia** - Všetka dokumentácia v slovenčine

## 🚀 Funkcie

- 🌐 **Jazykový prepínač** s vlajkami krajín
- 💰 **Menový prepínač** s konfigurovateľnými menami  
- ⌨️ **Klávesová navigácia** (Tab, Enter, Šípky, Escape)
- ♿ **Accessibility** (ARIA, Screen readers, Focus indikátory)
- 📱 **Responsívny dizajn** (Desktop dropdown, Mobile overlay)
- 🎨 **67 CSS premenných** pre kompletné prispôsobenie
- 🔧 **Jednoduché API** s re-inicializáciou

## 📦 Inštalácia

### NPM inštalácia
```bash
npm install language-currency-switcher
```

### 1. Zahrnutie súborov
Plugin obsahuje vlastné SVG vlajky - žiadne externé závislosti nie sú potrebné!

```html
<!-- Plugin CSS štýly (obsahuje aj vlajky) -->
<link rel="stylesheet" href="src/language-currency-switcher.css">

<!-- JavaScript (vyžaduje jQuery 3.0+) -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="src/language-currency-switcher.js"></script>
```

### 2. HTML štruktúra (automaticky generovaná)
```html
<!-- Jazykový prepínač -->
<div class="switch lang" id="language-switcher">
    <button class="current" role="combobox" aria-expanded="false" aria-haspopup="listbox">
        <!-- Vyplní sa automaticky -->
    </button>
    <ul class="options" role="listbox">
        <!-- Vyplní sa automaticky -->
    </ul>
</div>

<!-- Menový prepínač -->
<div class="switch currency" id="currency-switcher">
    <button class="current" role="combobox" aria-expanded="false" aria-haspopup="listbox">
        <!-- Vyplní sa automaticky -->
    </button>
    <ul class="options" role="listbox">
        <!-- Vyplní sa automaticky -->
    </ul>
</div>
```

### 2. Inicializácia

#### Základné použitie
```javascript
LCSwitcher.init();
```

#### Pokročilá konfigurácia
```javascript
LCSwitcher.init({
    language: 'sk',
    currency: 'eur',
    languages: [
        'sk|Slovenčina',
        'en|English',
        'de|Deutsch',
        'hu|Magyar'
    ],
    currencies: [
        'eur|EUR €',
        'czk|CZK Kč',
        'huf|HUF Ft'
    ],
    languageLabel: 'Jazyk:',
    currencyLabel: 'Mena:',
    languageChangeUrl: '/change-language/{CODE}'
});
```

#### OnlyFlags režim (NOVINKA v1.1.0)
```javascript
LCSwitcher.init({
    onlyFlags: true,
    languages: [
        'sk|Slovenčina',
        'en|English',
        'de|Deutsch',
        'fr|Français'
    ],
    allowCurrencyChange: false
});
```

#### OnlyCurrency režim (NOVINKA v1.2.0)
```javascript
LCSwitcher.init({
    onlyCurrency: true,
    currencies: [
        'EUR|€|EUR',
        'USD|$|USD',
        'GBP|£|GBP',
        'CZK|Kč|CZK'
    ],
    allowLanguageChange: false,
    currencyChangeUrl: '/change-currency/{CODE}'
});
```

## 📖 API Referencia

### Metódy

| Metóda | Popis | Príklad |
|--------|-------|---------|
| `LCSwitcher.init(options)` | Inicializuje plugin | `LCSwitcher.init({language: 'sk'})` |
| `LCSwitcher.destroy()` | Vyčistí plugin a odstráni z DOM | `LCSwitcher.destroy()` |
| `LCSwitcher.enableDebug()` | Zapne debug režim | `LCSwitcher.enableDebug()` |
| `LCSwitcher.disableDebug()` | Vypne debug režim | `LCSwitcher.disableDebug()` |

### Konfiguračné možnosti

| Možnosť | Typ | Predvolené | Popis |
|---------|-----|------------|-------|
| `language` | string | `'sk'` | Aktuálny jazyk |
| `currency` | string | `'eur'` | Aktuálna mena |
| `languages` | array | `['sk\|Slovenčina', 'en\|English']` | Dostupné jazyky |
| `currencies` | array | `['eur\|EUR €', 'czk\|CZK Kč']` | Dostupné meny |
| `languageLabel` | string | `''` | Label pre jazykový prepínač |
| `currencyLabel` | string | `''` | Label pre menový prepínač |
| `languageChangeUrl` | string | `''` | URL pre zmenu jazyka |
| `allowCurrencyChange` | boolean | `true` | Povoliť zmenu meny |
| `onlyFlags` | boolean | `false` | **NOVÉ:** Zobrazovať iba vlajky |
| `disabledPlugin` | boolean | `false` | **NOVÉ:** Dočasne vypnúť plugin |
| `debug` | boolean | `false` | **NOVÉ:** Debug režim |

## 🎨 Prispôsobenie

Plugin používa **67 CSS custom properties** pre kompletné prispôsobenie:

```css
:root {
  /* Základné farby */
  --tp-lang-switcher-bg-color: #ffffff;
  --tp-lang-switcher-text-color: #333333;
  --tp-lang-switcher-border-color: #ddd;
  
  /* Hover stavy */
  --tp-lang-switcher-hover-bg-color: #f5f5f5;
  --tp-lang-switcher-hover-text-color: #000;
  
  /* Aktívny stav */
  --tp-lang-switcher-active-bg-color: #007cba;
  --tp-lang-switcher-active-text-color: #fff;
  
  /* Rozostupy */
  --tp-lang-switcher-padding: 8px 12px;
  --tp-lang-switcher-gap: 8px;
  --tp-lang-switcher-border-radius: 4px;
  
  /* Typografia */
  --tp-lang-switcher-font-size: 14px;
  --tp-lang-switcher-font-weight: 400;
  --tp-lang-switcher-line-height: 1.4;
  
  /* Animácie */
  --tp-lang-switcher-transition-duration: 0.15s;
  --tp-lang-switcher-animation-timing: ease-out;
}
```

### OnlyFlags režim štýlovanie
```css
/* Prispôsobenie OnlyFlags režimu */
.switch-flags-only {
  --tp-lang-switcher-flags-gap: 12px;
  --tp-lang-switcher-flag-size: 24px;
  --tp-lang-switcher-flag-border-radius: 4px;
}
```

## 📱 Responsívnosť

Plugin je plne responzívny:

- **Desktop:** Dropdown menu s hover efektmi
- **Tablet:** Upravené rozostupy a väčšie touch targets
- **Mobile:** Overlay režim s optimalizovaným ovládaním

## ♿ Accessibility

Plná podpora accessibility:

- **ARIA atribúty:** `role`, `aria-expanded`, `aria-haspopup`
- **Klávesová navigácia:** Tab, Enter, Šípky, Escape
- **Screen readers:** Správne označovanie a oznámenia
- **Focus management:** Viditeľné focus indikátory

## 📋 Príklady použitia

### E-shop konfigurácia
```javascript
LCSwitcher.init({
    language: 'sk',
    currency: 'eur',
    languages: [
        'sk|Slovenčina',
        'en|English',
        'de|Deutsch',
        'hu|Magyar',
        'cz|Čeština'
    ],
    currencies: [
        'eur|EUR €',
        'czk|CZK Kč',
        'huf|HUF Ft',
        'pln|PLN zł'
    ],
    languageLabel: 'Jazyk obchodu:',
    currencyLabel: 'Mena obchodu:',
    languageChangeUrl: '/eshop/change-language?lang={CODE}'
});
```

### Blog s jazykmi
```javascript
LCSwitcher.init({
    language: 'sk',
    languages: [
        'sk|Slovenčina',
        'en|English (translated)',
        'cz|Čeština'
    ],
    languageLabel: 'Čítať v jazyku:',
    allowCurrencyChange: false,
    languageChangeUrl: '/blog/lang/{CODE}'
});
```

### Medzinárodná aplikácia s OnlyFlags
```javascript
LCSwitcher.init({
    onlyFlags: true,
    language: 'en',
    languages: [
        'en|English',
        'de|Deutsch',
        'fr|Français',
        'es|Español',
        'it|Italiano',
        'sk|Slovenčina'
    ],
    allowCurrencyChange: false
});
```

## 🔧 Pokročilé použitie

### Debug režim
```javascript
// Zapnutie debug režimu
LCSwitcher.enableDebug();

// Inicializácia s debuggingom
LCSwitcher.init({
    debug: true,
    languages: ['sk|SK', 'en|EN']
});

// Všetky akcie sa budú logovaať v konzole
```

### Re-inicializácia
```javascript
// Vyčistenie predchádzajúcej inicializácie
LCSwitcher.destroy();

// Nová konfigurácia
LCSwitcher.init({
    language: 'en',
    languages: ['en|English', 'sk|Slovenčina']
});
```

### Dočasné vypnutie
```javascript
LCSwitcher.init({
    disabledPlugin: true  // Plugin sa nezobrazí
});
```

## 🌍 Podporované vlajky

Plugin obsahuje vlastné SVG vlajky pre tieto krajiny:

- 🇸🇰 **SK** - Slovensko
- 🇬🇧 **EN** - Anglicko  
- 🇩🇪 **DE** - Nemecko
- 🇫🇷 **FR** - Francúzsko
- 🇪🇸 **ES** - Španielsko
- 🇮🇹 **IT** - Taliansko
- 🇭🇺 **HU** - Maďarsko
- 🇨🇿 **CZ** - Česko
- 🇵🇱 **PL** - Poľsko
- 🇳🇱 **NL** - Holandsko
- �� **RU** - Rusko
- �� **PT** - Portugalsko

### Pridanie vlastných vlajok

Ak potrebujete vlajky pre iné krajiny, môžete si ich stiahnuť z:
- **[Flag Icons](https://flagicons.lipis.dev/)** - Kompletná kolekcia SVG vlajok
- **[Country Flags API](https://flagsapi.com/)** - REST API pre vlajky krajín

Stačí pridať SVG súbor do priečinka `src/flags/` a aktualizovať CSS:

```css
.lcs-flag-[kód-krajiny] { 
    background-image: url('flags/[kód-krajiny].svg'); 
}
```

## 🔗 Závislosti

- **jQuery 3.0+** (povinné)
- **Moderný prehliadač** s podporou CSS custom properties
- **SVG podpora** pre vlajky

## 📊 Kompatibilita prehliadačov

- ✅ **Chrome 80+**
- ✅ **Firefox 70+**
- ✅ **Safari 13+**
- ✅ **Edge 80+**
- ✅ **Mobile Safari 13+**
- ✅ **Chrome Mobile 80+**

## 📂 Štruktúra súborov

```
switcher-lang-currency-orso/
├── switcher-lang-currency-orso.js      # Hlavný plugin
├── switcher-lang-currency-orso.scss    # Zdrojové štýly (editujte toto)
├── switcher-lang-currency-orso.css     # Kompilované štýly
├── initialization-examples.js          # 20 príkladov použitia
├── README.md                           # Táto dokumentácia
├── PROJECT-STATUS.md                   # Stav projektu
├── CHANGELOG.md                        # História zmien
└── LICENSE                            # Licencia
```

## ⚡ Optimalizácia výkonu

- **Lazy loading** - Plugin sa inicializuje iba pri prvom použití
- **Event delegation** - Optimalizované event handling
- **CSS transforms** - Hardware akcelerácia pre animácie
- **Debounced events** - Optimalizované resize a scroll eventy

## 🧪 Testovanie

Plugin bol testovaný na:

- ✅ Rôznych rozlíšeniach obrazoviek
- ✅ Touch zariadeniach
- ✅ Klávesovej navigácii
- ✅ Screen readeroch
- ✅ Rôznych prehliadačoch
- ✅ Výkonnostných scenároch

## 🔄 Changelog

### v1.1.5 (2025-09-11)
- 🧹 **Cleanup:** Odstránený duplikovaný AI-KONTINUITA.md súbor
- 🎯 **Organizácia:** PROJECT-STATUS.md jediný zdroj AI kontinuity
- 📦 **NPM:** Vyčistený balíček bez duplikátov

### v1.1.4 (2025-09-11)
- 🏁 **Nové:** Vlastné SVG vlajky zahrnuté priamo v plugine
- 🎨 **BREAKING CHANGE:** Nové CSS triedy `.lcs-flag-*` namiesto `flag-icon-*`
- 🌍 **Nové:** 12 zahrnutých vlajok krajín bez externých závislostí
- 📦 **Odstránené:** Závislosť na flag-icons balíček
- 🔗 **Nové:** Odporúčania na stiahnutie ďalších vlajok

### v1.1.3 (2025-09-11)
- 📦 **Nové:** NPM balíček štruktúra s profesionálnou organizáciou
- 📚 **Nové:** Podrobná API dokumentácia v docs/API.md
- 🔗 **Nové:** currencyChangeUrl funkcia pre duálny režim mien
- 📁 **Zmenené:** Reorganizované súbory do src/examples/docs adresárov

### v1.1.2 (2025-09-08)
- 📚 **Nové:** Kompletná slovenská dokumentácia
- 🔧 **Opravené:** GitHub synchronizácia dokumentácie
- ✅ **Overené:** Všetky súbory správne nahrané na GitHub
- 🚀 **Stabilná verzia** pripravená na produkčné použitie

### v1.1.0 (2025-09-08)
- ✨ **Nové:** OnlyFlags režim pre horizontálne zobrazenie vlajok
- ✨ **Nové:** Možnosť dočasného vypnutia pluginu
- ✨ **Nové:** Rozšírený debug systém
- 🎨 **Vylepšené:** Optimalizované animácie (o 50% rýchlejšie)
- 🐛 **Opravené:** Dropdown spacing problémy
- 🐛 **Opravené:** Čierne borders odstránené
- 📚 **Dokumentácia:** Kompletne prepísaná v slovenčine

### v1.0.0 (2024)
- 🎉 Prvé vydanie
- 🌐 Základný jazykový a menový prepínač
- 🎨 67 CSS custom properties
- ♿ Plná accessibility podpora
- 📱 Responsívny dizajn

## �📄 Licencia

MIT License - pozrite [LICENSE](LICENSE) súbor pre detaily.

## 🤝 Prispievanie

Príspevky sú vítané! Pre väčšie zmeny najprv otvorte issue pre diskusiu.

## 📞 Podpora

- 📧 **Email:** lorszagh@ecopress.sk
- 🐛 **Issues:** [GitHub Issues](https://github.com/orszagh/Switcher-Language-Currency/issues)
- 📖 **Dokumentácia:** [GitHub Repository](https://github.com/orszagh/Switcher-Language-Currency)

---

**LCSwitcher v1.2.0** - Modernný, prístupný a výkonný jazykový prepínač pre web. 🚀
