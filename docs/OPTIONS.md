# 📋 Kompletný prehľad options pre Language-Currency-Switcher v1.2.0

## 🎯 Základné nastavenia

| Option | Typ | Default | Popis |
|--------|-----|---------|-------|
| **`language`** | `string` | `<html lang>` alebo `'sk'` | Kód aktuálneho jazyka (napr. 'sk', 'en', 'de') |
| **`currency`** | `string` | `'eur'` | Kód aktuálnej meny (napr. 'eur', 'czk', 'usd') |

## 🌍 Jazykové nastavenia

| Option | Typ | Default | Popis |
|--------|-----|---------|-------|
| **`languages`** | `string[]` | `["cz\|Česky", "en\|English"]` | Pole jazykov vo formáte `"kod\|Názov"` |
| **`languageLabel`** | `string` | `''` | Textový prefix pre jazykový prepínač (napr. "Jazyk:") |
| **`languageChangeUrl`** | `string` | `''` | URL šablóna pre jazyky: `'/Home/ChangeLanguage?code={CODE}'` |

## 💰 Menové nastavenia

| Option | Typ | Default | Popis |
|--------|-----|---------|-------|
| **`currencies`** | `string[]` | `["czk\|CZK Kč", "eur\|EUR €"]` | Pole mien vo formáte `"kod\|Zobrazenie"` |
| **`currencyLabel`** | `string` | `''` | Textový prefix pre menový prepínač (napr. "Mena:") |
| **`currencyChangeUrl`** | `string` | `undefined` | URL šablóna pre meny (ak nie je definovaná, používa callback) |
| **`allowCurrencyChange`** | `boolean` | `true` | Zobraziť/skryť menový prepínač |

## 🎨 Vizuálne režimy

| Option | Typ | Default | Popis |
|--------|-----|---------|-------|
| **`onlyFlags`** | `boolean` | `false` | Zobraziť iba vlajky vedľa seba (bez dropdown) |
| **`onlyCurrency`** | `boolean` | `false` | **NOVÉ!** Zobraziť iba menové symboly vedľa seba (bez dropdown) |
| **`disabledPlugin`** | `boolean` | `false` | Úplne vypnúť celý plugin |

## 🔧 Technické nastavenia

| Option | Typ | Default | Popis |
|--------|-----|---------|-------|
| **`debug`** | `boolean` | `false` | Povoliť debug logovania do konzoly |

---

## 🚀 Príklady použitia

### 1. Základná inicializácia
```javascript
LCSwitcher.init({
    language: 'sk',
    currency: 'eur',
    languages: ['sk|Slovenčina', 'en|English', 'de|Deutsch'],
    currencies: ['eur|EUR €', 'czk|CZK Kč'],
    debug: true
});
```

### 2. OnlyCurrency mód s URL navigáciou
```javascript
LCSwitcher.init({
    currency: 'eur',
    currencies: ['eur|EUR €', 'czk|CZK Kč', 'usd|USD $'],
    currencyLabel: 'Mena:',
    currencyChangeUrl: '/Shop/ChangeCurrency?code={CODE}',
    onlyCurrency: true,  // NOVÝ MÓD!
    allowCurrencyChange: true,
    debug: true
});
```

### 3. OnlyCurrency mód s callback systémom
```javascript
LCSwitcher.init({
    currency: 'czk',
    currencies: ['eur|EUR €', 'czk|CZK Kč', 'pln|PLN zł'],
    currencyLabel: 'Platba:',
    // currencyChangeUrl nie je definovaná = callback systém
    onlyCurrency: true,
    allowCurrencyChange: true
});

// Globálny callback pre meny
window.onCurrencyChange = function(newCurrency) {
    console.log('Mena zmenená na:', newCurrency);
    // Vlastná logika
};
```

### 4. Kombinovaný mód: OnlyFlags + OnlyCurrency
```javascript
LCSwitcher.init({
    language: 'sk',
    currency: 'eur',
    languages: ['sk|Slovenčina', 'en|English', 'de|Deutsch'],
    currencies: ['eur|EUR', 'czk|CZK', 'usd|USD'],
    languageLabel: 'Jazyk:',
    currencyLabel: 'Mena:',
    languageChangeUrl: '/Home/ChangeLanguage?code={CODE}',
    currencyChangeUrl: '/Shop/ChangeCurrency?code={CODE}',
    onlyFlags: true,     // Vlajky vedľa seba
    onlyCurrency: true,  // Meny vedľa seba
    allowCurrencyChange: true
});
```

### 5. OnlyCurrency bez labelu (iba symboly)
```javascript
LCSwitcher.init({
    currency: 'usd',
    currencies: ['eur|€', 'usd|$', 'gbp|£', 'jpy|¥'],
    // currencyLabel: '',  // Žiadny label
    onlyCurrency: true,
    allowCurrencyChange: true
});
```

### 6. Kompletné nastavenie s dropdown módmi
```javascript
LCSwitcher.init({
    language: 'sk',
    currency: 'eur',
    languages: ['sk|Slovenčina', 'en|English', 'de|Deutsch', 'fr|Français'],
    currencies: ['eur|EUR €', 'czk|CZK Kč', 'usd|USD $'],
    languageLabel: 'Jazyk:',
    currencyLabel: 'Mena:',
    languageChangeUrl: '/Home/ChangeLanguage?code={CODE}',
    currencyChangeUrl: '/Shop/ChangeCurrency?code={CODE}',
    allowCurrencyChange: true,
    // onlyFlags: false,     // Jazykový dropdown
    // onlyCurrency: false,  // Menový dropdown
    debug: false
});
```

---

## 📌 Podporované vlajky

SK, EN/GB, DE, FR, ES, IT, HU, CZ, PL, NL, RU, PT

## ⚡ Nové funkcie v onlyCurrency móde

- ✅ **Menové symboly vedľa seba** (bez dropdown)
- ✅ **URL navigácia alebo callback systém** 
- ✅ **Voliteľný textový label** (currencyLabel)
- ✅ **Responzívny design** s mobilnou optimalizáciou
- ✅ **Accessibility podpora** (ARIA, keyboard navigation)
- ✅ **Hover a focus efekty** s animáciami
- ✅ **Aktívny stav** s vizuálnym označením
- ✅ **Dark theme podpora**

## 🔧 CSS triedy pre onlyCurrency

- `.switch-currency-only` - hlavný kontajner
- `.currency-label` - textový label
- `.currency-container` - kontajner pre symboly
- `.currency-link` - jednotlivé menové symboly
- `.currency-link.active` - aktívny menový symbol
- `.currency-text` - text vnútri symbolu

## 🎯 Použitie

OnlyCurrency mód je ideálny pre:
- **E-commerce stránky** s rýchlym prepínaním mien
- **Mobilné rozhrania** s úsporou miesta
- **Dashboards** s kompaktnými prvkami
- **Kombinovanie s onlyFlags** pre úplne minimalistické riešenie

## 📝 Poznámky

1. **onlyCurrency** a **standardný dropdown** sa navzájom vylučujú
2. **currencyChangeUrl** určuje či sa použije navigácia alebo callback
3. **allowCurrencyChange: false** skryje všetky menové prepínače
4. **currencyLabel** je voliteľný - ak nie je definovaný, zobrazujú sa iba symboly
5. **debug: true** poskytuje detailné logovania do konzoly