# Language & Currency Switcher API Documentation

## Table of Contents
- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [Configuration Options](#configuration-options)
- [Methods](#methods)
- [Events](#events)
- [Examples](#examples)

## Installation

### NPM
```bash
npm install language-currency-switcher
```

### CDN
```html
<script src="https://cdn.jsdelivr.net/npm/language-currency-switcher@1.1.3/src/language-currency-switcher.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/language-currency-switcher@1.1.3/src/language-currency-switcher.min.css">
```

### Manual Download
Download the files from GitHub and include them in your project:
```html
<script src="path/to/language-currency-switcher.js"></script>
<link rel="stylesheet" href="path/to/language-currency-switcher.css">
```

## Basic Usage

### HTML Structure
```html
<div id="language-currency-switcher"></div>
```

### JavaScript Initialization
```javascript
$(document).ready(function() {
    $('#language-currency-switcher').LCSwitcher({
        languages: [
            { code: 'sk', name: 'Slovenčina', flag: 'sk.png' },
            { code: 'en', name: 'English', flag: 'gb.png' }
        ],
        currencies: [
            { code: 'EUR', symbol: '€', name: 'Euro' },
            { code: 'USD', symbol: '$', name: 'US Dollar' }
        ]
    });
});
```

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `languages` | Array | `[]` | Array of language objects with `code`, `name`, and `flag` properties |
| `currencies` | Array | `[]` | Array of currency objects with `code`, `symbol`, and `name` properties |
| `flagPath` | String | `'flags/'` | Path to flag images directory |
| `defaultLanguage` | String | `'sk'` | Default language code |
| `defaultCurrency` | String | `'EUR'` | Default currency code |
| `showLabels` | Boolean | `true` | Show/hide text labels next to flags and currency symbols |
| `orientation` | String | `'horizontal'` | Layout orientation: `'horizontal'` or `'vertical'` |
| `onlyFlags` | Boolean | `false` | Show only flags without language names |
| `currencyChangeUrl` | String/Function | `null` | URL pattern or callback function for currency changes |
| `theme` | String | `'default'` | Theme name: `'default'`, `'minimal'`, `'modern'` |
| `animation` | Boolean | `true` | Enable/disable animations |
| `customClass` | String | `''` | Additional CSS class for the switcher container |

## Methods

### Initialize
```javascript
$('#switcher').LCSwitcher(options);
```

### Get Current Language
```javascript
var currentLang = $('#switcher').LCSwitcher('getCurrentLanguage');
```

### Get Current Currency
```javascript
var currentCurrency = $('#switcher').LCSwitcher('getCurrentCurrency');
```

### Set Language
```javascript
$('#switcher').LCSwitcher('setLanguage', 'en');
```

### Set Currency
```javascript
$('#switcher').LCSwitcher('setCurrency', 'USD');
```

### Destroy
```javascript
$('#switcher').LCSwitcher('destroy');
```

### Update Options
```javascript
$('#switcher').LCSwitcher('updateOptions', {
    showLabels: false,
    onlyFlags: true
});
```

## Events

### Language Change Event
```javascript
$('#switcher').on('languageChanged', function(event, languageCode, languageData) {
    console.log('Language changed to:', languageCode);
    console.log('Language data:', languageData);
});
```

### Currency Change Event
```javascript
$('#switcher').on('currencyChanged', function(event, currencyCode, currencyData) {
    console.log('Currency changed to:', currencyCode);
    console.log('Currency data:', currencyData);
});
```

### Initialization Complete Event
```javascript
$('#switcher').on('lcSwitcherReady', function(event) {
    console.log('LCSwitcher is ready');
});
```

## Examples

### Basic Language Switcher
```javascript
$('#switcher').LCSwitcher({
    languages: [
        { code: 'sk', name: 'Slovenčina', flag: 'sk.png' },
        { code: 'en', name: 'English', flag: 'gb.png' },
        { code: 'de', name: 'Deutsch', flag: 'de.png' }
    ],
    defaultLanguage: 'sk'
});
```

### Currency Switcher with URL Changes
```javascript
$('#switcher').LCSwitcher({
    currencies: [
        { code: 'EUR', symbol: '€', name: 'Euro' },
        { code: 'USD', symbol: '$', name: 'US Dollar' },
        { code: 'GBP', symbol: '£', name: 'British Pound' }
    ],
    currencyChangeUrl: '/products?currency={currency}',
    defaultCurrency: 'EUR'
});
```

### Currency Switcher with Callback
```javascript
$('#switcher').LCSwitcher({
    currencies: [
        { code: 'EUR', symbol: '€', name: 'Euro' },
        { code: 'USD', symbol: '$', name: 'US Dollar' }
    ],
    currencyChangeUrl: function(currencyCode, currencyData) {
        // Custom logic for currency change
        updatePrices(currencyCode);
        saveUserPreference(currencyCode);
    },
    defaultCurrency: 'EUR'
});
```

### Flags Only Mode
```javascript
$('#switcher').LCSwitcher({
    languages: [
        { code: 'sk', name: 'Slovenčina', flag: 'sk.png' },
        { code: 'en', name: 'English', flag: 'gb.png' },
        { code: 'fr', name: 'Français', flag: 'fr.png' }
    ],
    onlyFlags: true,
    showLabels: false,
    flagPath: '/images/flags/'
});
```

### Vertical Layout
```javascript
$('#switcher').LCSwitcher({
    languages: [
        { code: 'sk', name: 'Slovenčina', flag: 'sk.png' },
        { code: 'en', name: 'English', flag: 'gb.png' }
    ],
    currencies: [
        { code: 'EUR', symbol: '€', name: 'Euro' },
        { code: 'USD', symbol: '$', name: 'US Dollar' }
    ],
    orientation: 'vertical',
    theme: 'minimal'
});
```

### Complete E-commerce Setup
```javascript
$('#switcher').LCSwitcher({
    languages: [
        { code: 'sk', name: 'Slovenčina', flag: 'sk.png' },
        { code: 'en', name: 'English', flag: 'gb.png' },
        { code: 'de', name: 'Deutsch', flag: 'de.png' }
    ],
    currencies: [
        { code: 'EUR', symbol: '€', name: 'Euro' },
        { code: 'USD', symbol: '$', name: 'US Dollar' },
        { code: 'GBP', symbol: '£', name: 'British Pound' }
    ],
    currencyChangeUrl: function(currencyCode, currencyData) {
        // Update all prices on the page
        updateProductPrices(currencyCode);
        
        // Save user preference
        localStorage.setItem('preferred_currency', currencyCode);
        
        // Track analytics
        gtag('event', 'currency_change', {
            'currency_code': currencyCode
        });
    },
    defaultLanguage: 'sk',
    defaultCurrency: 'EUR',
    flagPath: '/assets/flags/',
    theme: 'modern',
    customClass: 'ecommerce-switcher'
});

// Handle language changes
$('#switcher').on('languageChanged', function(event, langCode) {
    // Redirect to localized version
    window.location.href = '/' + langCode + window.location.pathname;
});
```

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+
- Internet Explorer 11+

## Dependencies

- jQuery 3.0.0 or higher

## License

MIT License - see LICENSE file for details.
