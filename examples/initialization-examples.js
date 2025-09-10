// Language & Currency Switcher v1.1.3 - Príklady inicializácie
// ==============================================================
// 
// AI KONTINUITA: Tento súbor obsahuje kompletné príklady použitia LCSwitcher pluginu
// s najnovšími funkciami vrátane currencyChangeUrl option a NPM distribúcie v1.1.3
// 
// KOMPLETNÁ REFERENCIA VŠETKÝCH OPTIONS:
// ======================================

/* 
 * LCSwitcher.init(options) - Všetky možné konfiguračné options:
 * 
 * ZÁKLADNÉ NASTAVENIA:
 * - language: 'sk'              // Aktuálny jazyk (kód krajiny)
 * - currency: 'eur'             // Aktuálna mena (kód meny)
 * - languages: ['sk|Slovenčina', 'en|English']  // Pole jazykov 'kód|názov'
 * - currencies: ['eur|EUR €', 'czk|CZK Kč']     // Pole mien 'kód|zobrazenie'
 * 
 * URL NAVIGÁCIA:
 * - languageChangeUrl: '/change-lang/{CODE}'     // URL template pre jazyky (vždy odkazy)
 * - currencyChangeUrl: '/change-curr/{CODE}'     // URL template pre meny (NOVÉ v1.1.2)
 *   → Ak currencyChangeUrl JE definovaná = meny fungujú ako odkazy (navigácia)
 *   → Ak currencyChangeUrl NIE JE definovaná = meny fungujú cez callback window.onCurrencyChange()
 * 
 * LABELY A ZOBRAZENIE:
 * - languageLabel: 'Jazyk:'     // Text pred jazykovým prepínačom
 * - currencyLabel: 'Mena:'      // Text pred menovým prepínačom
 * - allowCurrencyChange: true   // Zobraziť/skryť menový prepínač úplne
 * 
 * ŠPECIÁLNE REŽIMY (v1.1.0+):
 * - onlyFlags: false            // true = iba vlajky horizontálne, false = dropdown
 * - disabledPlugin: false       // true = úplne skryje plugin, false = normálne fungovanie
 * 
 * DEBUG A DEVELOPMENT:
 * - debug: false                // true = logovania do konzoly, false = tichý režim
 * 
 * CALLBACK SYSTÉM PRE MENY (ak currencyChangeUrl nie je definovaná):
 * window.onCurrencyChange = function(currencyCode) {
 *     console.log('Currency changed to:', currencyCode);
 *     // Vaša vlastná logika pre zmenu meny
 * };
 */

/* ===============================
 * ZÁKLADNÉ PRÍKLADY
 * ===============================
 */

// 1. Najjednoduchšia inicializácia s defaultmi
LCSwitcher.init();

// 2. Základný jazykový prepínač
LCSwitcher.init({
    languages: ['sk|Slovenčina', 'en|English'],
    allowCurrencyChange: false
});

// 3. Základný menový prepínač
LCSwitcher.init({
    currencies: ['eur|EUR €', 'usd|USD $', 'czk|CZK Kč'],
    languages: [] // Žiadne jazyky
});

/* ===============================
 * E-SHOP KONFIGURÁCIE
 * ===============================
 */

// 4. Kompletný e-shop setup
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
    languageChangeUrl: '/eshop/change-language?lang={CODE}',
    currencyChangeUrl: '/eshop/change-currency?curr={CODE}' // NOVÉ: URL pre meny
});

// 5. Medzinárodný obchod
LCSwitcher.init({
    language: 'en',
    currency: 'usd',
    languages: [
        'en|English',
        'de|Deutsch',
        'fr|Français',
        'es|Español',
        'it|Italiano'
    ],
    currencies: [
        'usd|USD $',
        'eur|EUR €',
        'gbp|GBP £',
        'cad|CAD $'
    ],
    languageChangeUrl: '/api/locale/change/{CODE}',
    currencyChangeUrl: '/api/currency/change/{CODE}'  // NOVÉ: Currency s odkazmi
});

/* ===============================
 * NOVÉ FUNKCIE v1.1.0
 * ===============================
 */

// 6. OnlyFlags režim - iba vlajky vedľa seba
LCSwitcher.init({
    onlyFlags: true,
    languages: [
        'sk|Slovenčina',
        'en|English',
        'de|Deutsch',
        'fr|Français',
        'es|Español',
        'it|Italiano'
    ],
    allowCurrencyChange: false
});

// 7. Dočasné vypnutie pluginu
LCSwitcher.init({
    disabledPlugin: true  // Plugin sa nezobrazí
});

// 8. OnlyFlags s menami
LCSwitcher.init({
    onlyFlags: true,
    languages: ['sk|SK', 'en|EN', 'de|DE'],
    currencies: ['eur|€', 'usd|$'],
    currencyChangeUrl: '/flags/change-currency/{CODE}',  // NOVÉ: URL pre OnlyFlags + meny
    allowCurrencyChange: true
});

/* ===============================
 * DEBUGGING A VÝVOJ
 * ===============================
 */

// 9. Debug režim pre vývoj
LCSwitcher.init({
    debug: true,
    languages: ['sk|SK', 'en|EN'],
    currencies: ['eur|€', 'czk|Kč']
});

// 10. Testovanie s API kontrolou
LCSwitcher.enableDebug();
LCSwitcher.init({
    language: 'sk',
    languages: ['sk|Slovenčina', 'en|English'],
    languageChangeUrl: '/test/change-lang/{CODE}'
});
// V konzole uvidíte všetky akcie

/* ===============================
 * POKROČILÉ SCENÁRE
 * ===============================
 */

// 11. Blog s autorským obsahom
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

// 12. SaaS aplikácia
LCSwitcher.init({
    language: 'en',
    currency: 'usd',
    languages: [
        'en|English',
        'de|Deutsch',
        'fr|Français',
        'es|Español'
    ],
    currencies: [
        'usd|USD',
        'eur|EUR'
    ],
    languageLabel: 'Interface language:',
    currencyLabel: 'Billing currency:',
    languageChangeUrl: '/dashboard/locale/{CODE}',
    currencyChangeUrl: '/dashboard/billing/{CODE}'  // NOVÉ: Currency pre SaaS
});

// 13. Mobilná aplikácia (PWA)
LCSwitcher.init({
    language: 'sk',
    languages: [
        'sk|Slovenčina',
        'en|English',
        'cz|Čeština'
    ],
    allowCurrencyChange: false,
    languageChangeUrl: '/pwa/change-language/{CODE}'
});

/* ===============================
 * DYNAMICKÉ SCENÁRE
 * ===============================
 */

// 14. Re-inicializácia na základe user settings
function updateSwitcherSettings(userPrefs) {
    LCSwitcher.destroy(); // Vyčisti predchádzajúci stav
    
    LCSwitcher.init({
        language: userPrefs.preferredLanguage,
        currency: userPrefs.preferredCurrency,
        languages: userPrefs.availableLanguages,
        currencies: userPrefs.availableCurrencies,
        debug: userPrefs.debugMode || false
    });
}

// 15. Conditionally enable/disable
function toggleSwitcher(enabled) {
    if (enabled) {
        LCSwitcher.init({
            language: 'sk',
            languages: ['sk|Slovenčina', 'en|English'],
            disabledPlugin: false
        });
    } else {
        LCSwitcher.init({
            disabledPlugin: true
        });
    }
}

// 16. A/B testing scenario
function initSwitcherVariant(variant) {
    const baseConfig = {
        language: 'sk',
        languages: ['sk|Slovenčina', 'en|English', 'de|Deutsch']
    };
    
    if (variant === 'flags-only') {
        LCSwitcher.init({
            ...baseConfig,
            onlyFlags: true,
            allowCurrencyChange: false
        });
    } else if (variant === 'full') {
        LCSwitcher.init({
            ...baseConfig,
            currencies: ['eur|EUR €', 'czk|CZK Kč'],
            languageLabel: 'Jazyk:',
            currencyLabel: 'Mena:'
        });
    } else {
        LCSwitcher.init(baseConfig);
    }
}

/* ===============================
 * ERROR HANDLING
 * ===============================
 */

// 17. Bezpečná inicializácia s error handling
function safeSwitcherInit(options) {
    try {
        // Enableni debug pre troubleshooting
        LCSwitcher.enableDebug();
        
        // Skús inicializáciu
        LCSwitcher.init(options);
        
        console.log('LCSwitcher successfully initialized');
    } catch (error) {
        console.error('LCSwitcher initialization failed:', error);
        
        // Fallback na základnú konfiguráciu
        try {
            LCSwitcher.init({
                languages: ['sk|SK', 'en|EN'],
                allowCurrencyChange: false
            });
        } catch (fallbackError) {
            console.error('Even fallback failed:', fallbackError);
        }
    }
}

/* ===============================
 * PRODUKČNÉ PRÍKLADY
 * ===============================
 */

// 18. Produkčná konfigurácia s kompletným setup
const PRODUCTION_CONFIG = {
    language: 'sk',
    currency: 'eur',
    languages: [
        'sk|Slovenčina',
        'en|English',
        'de|Deutsch',
        'hu|Magyar',
        'cz|Čeština',
        'pl|Polski'
    ],
    currencies: [
        'eur|EUR €',
        'czk|CZK Kč',
        'huf|HUF Ft',
        'pln|PLN zł',
        'usd|USD $'
    ],
    languageLabel: 'Jazyk:',
    currencyLabel: 'Mena:',
    languageChangeUrl: '/api/user/change-language/{CODE}',
    allowCurrencyChange: true,
    onlyFlags: false,
    disabledPlugin: false,
    debug: false  // V produkcii vždy false
};

// Inicializácia v produkcii
LCSwitcher.init(PRODUCTION_CONFIG);

/* ===============================
 * CLEANUP PATTERNS
 * ===============================
 */

// 19. Proper cleanup before page unload
window.addEventListener('beforeunload', function() {
    LCSwitcher.destroy();
});

// 20. SPA (Single Page Application) pattern
function initPage() {
    // Vyčisti predchádzajúci stav
    LCSwitcher.destroy();
    
    // Inicializuj pre novú stránku
    LCSwitcher.init({
        language: getCurrentPageLanguage(),
        languages: getAvailableLanguagesForPage(),
        allowCurrencyChange: isEcommercePage()
    });
}

// Helper funkcie pre SPA
function getCurrentPageLanguage() {
    return document.documentElement.lang || 'sk';
}

function getAvailableLanguagesForPage() {
    // Logic based on current page/route
    return ['sk|Slovenčina', 'en|English'];
}

function isEcommercePage() {
    return window.location.pathname.includes('/shop');
}

/* ===============================
 * NOVÁ FUNKCIA v1.1.2: currencyChangeUrl
 * ===============================
 */

// 21. E-shop s currency odkazmi (navigácia ako pri jazykoch)
LCSwitcher.init({
    language: 'sk',
    currency: 'eur',
    languages: [
        'sk|Slovenčina',
        'en|English',
        'de|Deutsch'
    ],
    currencies: [
        'eur|EUR €',
        'czk|CZK Kč',
        'usd|USD $'
    ],
    languageChangeUrl: '/shop/change-language/{CODE}',
    currencyChangeUrl: '/shop/change-currency/{CODE}' // NOVÉ: Currency ako odkazy
});

// 22. Meny iba s callback (bez currencyChangeUrl)
LCSwitcher.init({
    language: 'sk',
    currencies: [
        'eur|EUR €',
        'czk|CZK Kč'
    ],
    // currencyChangeUrl: nie je definovaná = callback systém
    allowCurrencyChange: true
});

// Pre callback systém definuj globálny handler
window.onCurrencyChange = function(currencyCode) {
    console.log('Currency changed to:', currencyCode);
    // Vlastná logika pre zmenu meny
};

// 23. Hybridný režim - jazyky s odkazmi, meny s callback
LCSwitcher.init({
    language: 'sk',
    currency: 'eur',
    languages: ['sk|Slovenčina', 'en|English'],
    currencies: ['eur|EUR €', 'czk|CZK Kč'],
    languageChangeUrl: '/api/change-language/{CODE}', // Jazyky = odkazy
    // currencyChangeUrl: nie je definovaná = meny = callback
    allowCurrencyChange: true
});

// 24. Plné URL odkazy pre oba prepínače
LCSwitcher.init({
    language: 'sk',
    currency: 'eur',
    languages: [
        'sk|Slovenčina',
        'en|English',
        'de|Deutsch'
    ],
    currencies: [
        'eur|EUR €',
        'czk|CZK Kč',
        'usd|USD $',
        'gbp|GBP £'
    ],
    languageLabel: 'Jazyk stránky:',
    currencyLabel: 'Mena nákupu:',
    languageChangeUrl: '/api/set-language/{CODE}',
    currencyChangeUrl: '/api/set-currency/{CODE}', // Oba s odkazmi
    allowCurrencyChange: true
});
