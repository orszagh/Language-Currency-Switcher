// Language & Currency Switcher - Príklady inicializácie
// =====================================================

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
    languageChangeUrl: '/eshop/change-language?lang={CODE}'
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
    languageChangeUrl: '/api/locale/change/{CODE}'
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
    languageChangeUrl: '/dashboard/locale/{CODE}'
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
