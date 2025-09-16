/* 
 * Language & Currency Switcher v1.2.0 (NPM Package)
 * ==================================================
 * 
 * KOMPLETNÁ SADA FUNKCIÍ (pre kontinuitu AI):
 * - Prepínanie jazykov: Vždy viditeľné s <a href> navigačnými odkazmi
 * - Prepínanie mien: Dvojitý režim - odkazy (currencyChangeUrl) alebo callback systém
 * - Vlastné SVG vlajky: 12 krajín zahrnutých v /src/flags/ - SK,EN,DE,FR,ES,IT,HU,CZ,PL,NL,RU,PT
 * - CSS triedy vlajok: .lcs-flag .lcs-flag-{kód} (NIE flag-icon-*!)
 * - Žiadne externé závislosti: Kompletne nezávislý plugin bez flag-icons
 * - Mobilná optimalizácia: Fixné pozíciovanie vľavo dole s overlay
 * - CSS custom properties: 67 premenných s prefixom --tp-lang-switcher-
 * - Podpora labelov: Voliteľné textové prefixy pre jazyk aj menu
 * - Accessibility: Plná ARIA podpora, oznámenia pre screen readery
 * - Správa eventov: Natívny addEventListener s proper cleanup
 * 
 * NOVÉ V v1.1.4:
 * - Vlastné SVG vlajky bez externých závislostí
 * - CSS triedy .lcs-flag-* namiesto flag-icon-*
 * - Kompletne nezávislý plugin
 * - Separátne span elementy pre currencyLabel (.currency-label) a hodnotu meny (.currency-value)
 * - Podporované vlajky: SK,EN/GB,DE,FR,ES,IT,HU,CZ,PL,NL,RU,PT
 * - OnlyFlags mód podporuje languageLabel (zobrazuje text pred vlajkami)
 * - OnlyCurrency mód zobrazuje iba menové symboly vedľa seba (bez dropdown)
 * - Oprava: displayText nedefinovanej premennej v currency switch debug logovaní
 * - KĽÚČOVÉ FUNKCIE PRE VLAJKY:
 *   • getFlagCode(langCode) - mapovanie jazyka na vlajku (en->gb)
 *   • createFlagSpan(langCode) - generuje <span class="lcs-flag lcs-flag-{kód}">
 *   • CSS cesty: background-image: url('flags/{kód}.svg')
 * 
 * NOVÉ V v1.1.3:
 * - NPM balík: language-currency-switcher
 * - Reorganizovaná štruktúra: src/, examples/, docs/
 * - Profesionálna NPM distribúcia
 * 
 * NOVÉ V v1.1.2:
 * - currencyChangeUrl option: Meny môžu fungovať ako odkazy (navigácia) alebo callback
 * - Spätná kompatibilita: Ak currencyChangeUrl nie je definovaná, používa sa callback systém
 * - Hybridný režim: Jazyky ako odkazy + meny ako callback (alebo naopak)
 * 
 * POŽIADAVKY NA HTML ŠTRUKTÚRU:
 * ```html
 * <div class="switch lang">
 *   <button class="current" role="combobox" aria-expanded="false" aria-haspopup="listbox">
 *     <!-- Generované: vlajka + text + sr-only + šípka -->
 *   </button>
 *   <ul class="options" role="listbox">
 *     <!-- Generované jazykové možnosti s vlajkami -->
 *   </ul>
 * </div>
 * ```
 * 
 * ZÁVISLOSTI:
 * - jQuery 3.0+
 * - language-currency-switcher.css (štýly pluginu s vlajkami)
 * 
 * POZNÁMKA PRE AI KONTINUITU:
 * Plugin obsahuje vlastné SVG vlajky v /src/flags/, žiadne externé závislosti nie sú potrebné.
 * Pre pridanie novej vlajky: 1) Pridať SVG do /src/flags/ 2) Pridať CSS .lcs-flag-{kód} 3) Aktualizovať getFlagCode()
 * Odporúčané zdroje pre nové vlajky: Flag Icons (flagicons.lipis.dev), Country Flags API (flagsapi.com)
 * 
 * INICIALIZÁCIA:
 * ```javascript
 * LCSwitcher.init({
 *   language: 'sk',           // Kód aktuálneho jazyka
 *   currency: 'eur',          // Kód aktuálnej meny  
 *   languages: ['sk|Slovenčina', 'en|English'], // Dostupné jazyky
 *   currencies: ['czk|CZK Kč', 'eur|EUR €'],    // Dostupné meny
 *   languageLabel: 'Jazyk:',  // Voliteľný textový prefix
 *   currencyLabel: 'Mena:',   // Voliteľný textový prefix
 *   allowCurrencyChange: true, // Zobraziť/skryť menový prepínač
 *   onlyFlags: false,         // Zobraziť iba vlajky (bez dropdown)
 *   onlyCurrency: false,      // Zobraziť iba menové symboly (bez dropdown)
 *   languageChangeUrl: '/Home/ChangeLanguage?code={CODE}',  // URL pre jazyky
 *   currencyChangeUrl: '/Shop/ChangeCurrency?code={CODE}',  // URL pre meny (voliteľné)
 *   debug: false              // Logovania do konzoly
 * });
 * ```
 */

(function ($, window, document) {
    'use strict';

    // Debug flag - nastavuje sa cez options.debug
    let DEBUG = false;

    function log() {
        if (DEBUG && console && console.log) {
            console.log.apply(console, ['LCSwitcher:'].concat(Array.prototype.slice.call(arguments)));
        }
    }

    /* ===============================
     * POMOCNÉ FUNKCIE
     * =============================== */
    
    /**
     * Získa kód jazyka z HTML document elementu
     * Fallback na prázdny reťazec ak sa nenájde
     * @returns {string} Kód jazyka (napr. 'sk', 'en')
     */
    function getHtmlLang() {
        const lang = (document.documentElement.lang || '').trim();
        return lang ? lang.toLowerCase().split('-')[0] : '';
    }

    /**
     * Maps language codes to flag country codes
     * Handles special cases like 'en' -> 'gb'
     * @param {string} langCode - Language code (e.g., 'en', 'sk')
     * @returns {string} Flag country code for CSS class
     */
    /**
     * Mapuje kódy jazykov na kódy krajín pre vlajky
     * Riešenie špeciálnych prípadov ako 'en' -> 'gb'
     * @param {string} langCode - Kód jazyka (napr. 'en', 'sk')
     * @returns {string} Kód krajiny pre CSS triedu vlajky
     */
    function getFlagCode(langCode) {
        // Mapovanie jazykových kódov na vlajky
        const flagMapping = {
            'en': 'gb',    // Angličtina -> Veľká Británia
            'sk': 'sk',    // Slovenčina -> Slovensko
            'cz': 'cz',    // Čeština -> Česko
            'de': 'de',    // Nemčina -> Nemecko
            'fr': 'fr',    // Francúzština -> Francúzsko
            'es': 'es',    // Španielčina -> Španielsko
            'it': 'it',    // Taliančina -> Taliansko
            'ru': 'ru',    // Ruština -> Rusko
            'pl': 'pl',    // Poľština -> Poľsko
            'hu': 'hu',    // Maďarčina -> Maďarsko
            'nl': 'nl',    // Holandčina -> Holandsko
            'pt': 'pt',    // Portugalčina -> Portugalsko
        };
        
        return flagMapping[langCode.toLowerCase()] || langCode.toLowerCase();
    }

    /**
     * Vytvorí HTML span element s CSS triedami ikony vlajky
     * Používa vlastné SVG vlajky zahrnuté v CSS
     * @param {string} langCode - Kód jazyka
     * @param {string} additionalClasses - Extra CSS triedy
     * @returns {string} HTML span element s triedami vlajky
     */
    function createFlagSpan(langCode, additionalClasses = '') {
        const flagCode = getFlagCode(langCode);
        return `<span class="lcs-flag lcs-flag-${flagCode} ${additionalClasses}"></span>`;
    }

    /**
     * Vytvorí alebo aktualizuje live región pre oznámenia screen readerom
     * Zabezpečuje accessibility pre dynamické zmeny obsahu
     * @param {string} msg - Správa na oznámenie screen readerom
     */
    function announce(msg) {
        // Vytvor live region ak neexistuje
        let live = document.getElementById('a11y-live');
        if (!live) {
            live = document.createElement('div');
            live.id = 'a11y-live';
            live.className = 'sr-only';
            live.setAttribute('aria-live', 'polite');
            document.body.appendChild(live);
            log('Vytvorený a11y-live región');
        }

        live.textContent = '';
        setTimeout(() => { live.textContent = msg; }, 10);
        log('Oznámené:', msg);
    }

    /* ===============================
     * JAZYKOVÝ PREPÍNAČ (onlyFlags mód)
     * ===============================
     * 
     * Funkcie:
     * - Zobrazuje iba vlajky vedľa seba
     * - Podporuje voliteľný textový label (languageLabel)
     * - Klik na vlajku = okamžitá navigácia
     * - Responzívne wrapping
     * - Aktívna vlajka má background označenie
     */
    function initLanguageFlagsOnly($root, options) {
        const currentLang = options.language || getHtmlLang() || 'sk';
        const urlTemplate = options.languageChangeUrl || '/Home/ChangeLanguage?code={CODE}';
        const labelText = options.languageLabel || '';

        log('Inicializácia jazykového prepínača (onlyFlags mód)', { currentLang, urlTemplate, labelText });

        // Vymažeme existujúcu štruktúru a vytvoríme flag container
        $root.empty().addClass('switch-flags-only');
        
        // Pridáme label ak je definovaný
        if (labelText) {
            const $label = $(`<span class="flags-label">${labelText}</span>`);
            $root.append($label);
        }
        
        // Vytvoríme kontajner pre vlajky
        const $flagsContainer = $('<div class="flags-container" role="tablist"></div>');
        
        options.languages.forEach(({ code, label }) => {
            const isActive = code.toLowerCase() === currentLang.toLowerCase();
            const href = urlTemplate.replace('{CODE}', encodeURIComponent(code));
            const flagHtml = createFlagSpan(code);
            
            const $flagLink = $(`
                <a href="${href}" 
                   class="flag-link ${isActive ? 'active' : ''}" 
                   role="tab"
                   aria-selected="${isActive}"
                   title="${label}"
                   data-lang="${code}">
                    ${flagHtml}
                </a>
            `);
            
            $flagsContainer.append($flagLink);
            log('Pridaná vlajka:', { code, label, href, isActive });
        });
        
        $root.append($flagsContainer);
        
        // Pridáme click eventy pre navigáciu
        $flagsContainer.on('click.switch-language', '.flag-link', function(e) {
            // Necháme štandardné link správanie (navigáciu)
            const langCode = $(this).data('lang');
            log('OnlyFlags: Navigácia na jazyk', langCode);
        });
        
        // Accessibility: keyboard navigation
        $flagsContainer.on('keydown.switch-language', '.flag-link', function(e) {
            const $flags = $flagsContainer.find('.flag-link');
            const currentIndex = $flags.index(this);
            
            switch(e.key) {
                case 'ArrowLeft':
                case 'ArrowUp':
                    e.preventDefault();
                    const prevIndex = currentIndex > 0 ? currentIndex - 1 : $flags.length - 1;
                    $flags.eq(prevIndex).focus();
                    break;
                    
                case 'ArrowRight':
                case 'ArrowDown':
                    e.preventDefault();
                    const nextIndex = currentIndex < $flags.length - 1 ? currentIndex + 1 : 0;
                    $flags.eq(nextIndex).focus();
                    break;
                    
                case 'Enter':
                case ' ':
                    e.preventDefault();
                    this.click();
                    break;
            }
        });
        
        log('OnlyFlags jazykový prepínač inicializovaný s', options.languages.length, 'vlajkami');
    }

    /* ===============================
     * JAZYKOVÝ PREPÍNAČ (Vždy aktívny)
     * ===============================
     * 
     * Funkcie:
     * - Vždy viditeľný a funkčný
     * - Generuje správne <a href> navigačné odkazy
     * - Integruje SVG vlajky z mapovacieho systému
     * - Podporuje voliteľné textové labely
     * - Udržiava stav aktuálneho jazyka
     * - Plná accessibility s ARIA
     */
    function initLanguageSwitch($root, options) {
        const currentLang = options.language || getHtmlLang() || 'sk';
        const urlTemplate = options.languageChangeUrl || '/Home/ChangeLanguage?code={CODE}';
        const labelText = options.languageLabel || ''; // Text pred výber jazyka

        const $current = $root.find('.current');
        const $listbox = $root.find('[role="listbox"]');

        log('Inicializácia jazykového prepínača', { currentLang, urlTemplate, labelText });

        // Nájdi správnu hodnotu pre aktuálny jazyk z dostupných jazykov
        const currentLanguageData = options.languages.find(lang => lang.code.toLowerCase() === currentLang.toLowerCase());
        const displayLang = currentLanguageData ? currentLanguageData.code : currentLang;
        const displayLabel = currentLanguageData ? currentLanguageData.label : currentLang.toUpperCase();
        
        log('Aktuálny jazyk nastavený na:', { displayLang, displayLabel });

        // Nastav aktuálny jazyk v UI s vlajkou a textom
        // Vyčisti aktuálny obsah current elementu (okrem sr-only)
        const $srOnly = $current.find('.sr-only').detach(); // Zachovaj sr-only
        const $arrow = $current.find('.arrow').detach(); // Zachovaj šípku ak existuje
        
        // Vyčisti ostatný obsah
        $current.empty();
        
        // Vytvor novú štruktúru: text + vlajka + sr-only + šípka
        const flagHtml = createFlagSpan(displayLang);
        const displayText = labelText ? labelText : displayLang.toUpperCase();
        
        $current.append(`<span class="text">${displayText}</span>`);
        $current.append(flagHtml);
        
        // Pridaj sr-only text
        if ($srOnly.length) {
            $srOnly.text(`Current language: ${displayLabel}`);
            $current.append($srOnly);
        } else {
            $current.append(`<span class="sr-only">Current language: ${displayLabel}</span>`);
        }
        
        // Pridaj šípku na koniec ak neexistuje
        if ($arrow.length) {
            $current.append($arrow);
        } else {
            $current.append(`
                <em class="arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" focusable="false">
                        <title>Open language options</title>
                        <g fill="currentColor"><path d="M5 8l4 4 4-4z"></path></g>
                    </svg>
                </em>
            `);
        }
        
        log('Language UI štruktúra vytvorená:', { displayText, flagClass: `lcs-flag-${getFlagCode(displayLang)}` });

        // Generuj jazykové položky s href linkami a vlajkami
        if ($listbox.length) {
            $listbox.empty();

            options.languages.forEach(({ code, label }) => {
                const liId = `opt-lang-${code}`;
                const isSelected = code.toLowerCase() === displayLang.toLowerCase();
                const href = urlTemplate.replace('{CODE}', encodeURIComponent(code));
                const flagHtml = createFlagSpan(code);

                const $li = $(`
          <li id="${liId}" role="option" data-lang="${code}" aria-selected="${isSelected}" class="${isSelected ? 'selected' : ''}">
            <a href="${href}" class="lang-link">
              ${flagHtml}
              <span class="text">${label}</span>
            </a>
          </li>
        `);

                $listbox.append($li);
                log('Pridaná jazyková možnosť:', { code, label, href, isSelected });
            });
        }

        const $items = $listbox.find('[role="option"]').attr('tabindex', '-1');
        log('Jazykový prepínač inicializovaný s', $items.length, 'položkami a vlajkami');

        // Vždy pridaj eventy (jazyk je vždy prepínateľný)
        setupDropdownEvents($root, $current, $listbox, $items, 'language');
    }

    /* ===============================
     * MENOVÝ PREPÍNAČ (onlyCurrency mód)
     * ===============================
     * 
     * Funkcie:
     * - Zobrazuje iba menové symboly/kódy vedľa seba
     * - Podporuje voliteľný textový label (currencyLabel)
     * - Klik na menu = okamžitá navigácia alebo callback
     * - Responzívne wrapping
     * - Aktívna mena má background označenie
     */
    function initCurrencySymbolsOnly($root, options) {
        const currentCurrency = options.currency || 'eur';
        const urlTemplate = options.currencyChangeUrl || '';
        const labelText = options.currencyLabel || '';

        log('Inicializácia menového prepínača (onlyCurrency mód)', { currentCurrency, urlTemplate, labelText });

        // Vymažeme existujúcu štruktúru a vytvoríme currency container
        $root.empty().addClass('switch-currency-only');
        
        // Pridáme label ak je definovaný
        if (labelText) {
            const $label = $(`<span class="currency-label">${labelText}</span>`);
            $root.append($label);
        }
        
        // Vytvoríme kontajner pre meny
        const $currencyContainer = $('<div class="currency-container" role="tablist"></div>');
        
        options.currencies.forEach(({ code, label }) => {
            const isActive = code.toLowerCase() === currentCurrency.toLowerCase();
            const displayText = label || code.toUpperCase();
            
            let $currencyElement;
            
            if (urlTemplate) {
                // Ak je definovaný URL template, vytvor <a> odkaz ako pri jazykoch
                const href = urlTemplate.replace('{CODE}', encodeURIComponent(code));
                
                $currencyElement = $(`
                    <a href="${href}" 
                       class="currency-link ${isActive ? 'active' : ''}" 
                       role="tab"
                       aria-selected="${isActive}"
                       title="${displayText}"
                       data-currency="${code}">
                        <span class="currency-text">${displayText}</span>
                    </a>
                `);
                
                // Pridaj click event pre navigáciu
                $currencyElement.on('click.switch-currency', function(e) {
                    // Necháme štandardné link správanie (navigáciu)
                    const currencyCode = $(this).data('currency');
                    log('OnlyCurrency: Navigácia na menu', currencyCode);
                    announce(`Navigating to currency ${displayText}`);
                });
                
            } else {
                // Ak nie je URL, použij span s callback systémom
                $currencyElement = $(`
                    <span class="currency-link ${isActive ? 'active' : ''}" 
                          role="tab"
                          aria-selected="${isActive}"
                          title="${displayText}"
                          data-currency="${code}">
                        <span class="currency-text">${displayText}</span>
                    </span>
                `);
                
                // Pridaj click event pre callback
                $currencyElement.on('click.switch-currency', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const newCurrency = $(this).data('currency');
                    if (newCurrency) {
                        log('OnlyCurrency: Mena zmenená na:', newCurrency);

                        // Aktualizuj aktívny stav
                        $currencyContainer.find('.currency-link').removeClass('active').attr('aria-selected', 'false');
                        $(this).addClass('active').attr('aria-selected', 'true');

                        announce(`Currency changed to ${newCurrency.toUpperCase()}`);

                        // Callback ak existuje
                        if (typeof window.onCurrencyChange === 'function') {
                            window.onCurrencyChange(newCurrency);
                        }
                    }
                });
            }
            
            $currencyContainer.append($currencyElement);
            log('Pridaný menový symbol:', { code, label: displayText, isActive, hasUrl: !!urlTemplate });
        });
        
        $root.append($currencyContainer);
        
        // Accessibility: keyboard navigation
        $currencyContainer.on('keydown.switch-currency', '.currency-link', function(e) {
            const $currencies = $currencyContainer.find('.currency-link');
            const currentIndex = $currencies.index(this);
            
            switch(e.key) {
                case 'ArrowLeft':
                case 'ArrowUp':
                    e.preventDefault();
                    const prevIndex = currentIndex > 0 ? currentIndex - 1 : $currencies.length - 1;
                    $currencies.eq(prevIndex).focus();
                    break;
                    
                case 'ArrowRight':
                case 'ArrowDown':
                    e.preventDefault();
                    const nextIndex = currentIndex < $currencies.length - 1 ? currentIndex + 1 : 0;
                    $currencies.eq(nextIndex).focus();
                    break;
                    
                case 'Enter':
                case ' ':
                    e.preventDefault();
                    this.click();
                    break;
            }
        });
        
        log('OnlyCurrency menový prepínač inicializovaný s', options.currencies.length, 'menami');
    }

    /* ===============================
     * MENOVÝ PREPÍNAČ (Podmienečný)
     * ===============================
     * 
     * Funkcie:
     * - Zobrazuje sa iba ak allowCurrencyChange !== false
     * - Dvojitý režim: odkazy (ak je currencyChangeUrl) alebo callback systém
     * - Podporuje voliteľné textové labely v separátnom span (.currency-label)
     * - Hodnota meny v separátnom span (.currency-value)
     * - S odkazmi: navigácia ako pri jazykoch
     * - Bez odkazov: spúšťa globálny callback window.onCurrencyChange()
     * - Plná accessibility s ARIA
     */
    function initCurrencySwitch($root, options) {
        const currentCurrency = options.currency || 'eur';
        const labelText = options.currencyLabel || ''; // Text pred výber meny
        const urlTemplate = options.currencyChangeUrl || ''; // URL template pre currency odkazy

        const $current = $root.find('.current');
        const $listbox = $root.find('[role="listbox"]');

        log('Inicializácia menového prepínača', { currentCurrency, labelText, urlTemplate });

        // Nastav aktuálnu menu v UI s prípadným labelom
        // Vyčisti aktuálny obsah current elementu (okrem sr-only)
        const $srOnly = $current.find('.sr-only').detach(); // Zachovaj sr-only
        const $arrow = $current.find('.arrow').detach(); // Zachovaj šípku ak existuje
        
        // Vyčisti ostatný obsah
        $current.empty();
        
        // Vytvor novú štruktúru: label (ak je definovaný) + hodnota meny + sr-only + šípka
        if (labelText) {
            $current.append(`<span class="currency-label">${labelText}</span>`);
        }
        $current.append(`<span class="currency-value">${currentCurrency.toUpperCase()}</span>`);
        
        // Pridaj sr-only text
        if ($srOnly.length) {
            $srOnly.text(`Current currency: ${currentCurrency.toUpperCase()}`);
            $current.append($srOnly);
        } else {
            $current.append(`<span class="sr-only">Current currency: ${currentCurrency.toUpperCase()}</span>`);
        }
        
        // Pridaj šípku na koniec ak neexistuje
        if ($arrow.length) {
            $current.append($arrow);
        } else {
            $current.append(`
                <em class="arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" focusable="false">
                        <title>Open currency options</title>
                        <g fill="currentColor"><path d="M5 8l4 4 4-4z"></path></g>
                    </svg>
                </em>
            `);
        }
        
        log('Currency UI štruktúra vytvorená:', { labelText, currentCurrency });

        // Generuj currency položky ak je poskytnutý currencies array
        if (options.currencies && Array.isArray(options.currencies) && $listbox.length) {
            $listbox.empty();

            options.currencies.forEach(currencyObj => {
                // Použiť spracovaný objekt meny (format: {code: "eur", label: "EUR €"})
                const code = currencyObj.code;
                const label = currencyObj.label;
                const liId = `opt-curr-${code}`;
                const isSelected = code.toLowerCase() === currentCurrency.toLowerCase();

                // Rozhodnutie medzi odkazom a span-om na základe currencyChangeUrl
                let linkHtml;
                if (urlTemplate) {
                    // Ak je definovaný URL template, vytvor <a> odkaz ako pri jazykoch
                    const href = urlTemplate.replace('{CODE}', encodeURIComponent(code));
                    linkHtml = `
                        <a href="${href}" class="currency-link">
                            <span class="text">${label || code.toUpperCase()}</span>
                        </a>
                    `;
                } else {
                    // Ak nie je URL, použij span ako doteraz (callback systém)
                    linkHtml = `
                        <span class="currency-link">
                            <span class="text">${label || code.toUpperCase()}</span>
                        </span>
                    `;
                }

                const $li = $(`
                    <li id="${liId}" role="option" data-currency="${code}" aria-selected="${isSelected}" class="${isSelected ? 'selected' : ''}">
                        ${linkHtml}
                    </li>
                `);

                $listbox.append($li);
                log('Pridaná menová možnosť:', { code, label, isSelected, hasUrl: !!urlTemplate });
            });
        }

        const $items = $listbox.find('[role="option"]').attr('tabindex', '-1');

        // Označ aktuálnu menu
        $items.removeClass('selected').attr('aria-selected', 'false');
        $items.filter(`[data-currency="${currentCurrency}"]`)
            .addClass('selected')
            .attr('aria-selected', 'true');

        log('Menový prepínač inicializovaný s', $items.length, 'položkami');
        setupDropdownEvents($root, $current, $listbox, $items, 'currency');
    }

    /* ===============================
     * SPRÁVA DROPDOWN EVENTOV
     * ===============================
     * 
     * Zdieľaná správa eventov pre jazykové aj menové dropdowny
     * Funkcie:
     * - Natívny addEventListener s capture fázou
     * - Mobilný overlay systém pre dotyková zariadenia
     * - Klávesová navigácia (šípky, Home, End, Escape)
     * - Globálne klik-mimo-na-zatvorenie
     * - Správna správa ARIA stavov
     * - Responzívne správanie s media queries
     * - Izolácia event namespace (predchádza konfliktom)
     */
    function setupDropdownEvents($root, $current, $listbox, $items, type) {
        /**
         * Sets ARIA expanded state and active descendant
         * Critical for accessibility and screen reader support
         */
        function setExpanded(open) {
            $current.attr('aria-expanded', open ? 'true' : 'false');
            if (!open) {
                $listbox.removeAttr('aria-activedescendant');
            } else {
                const $selected = $items.filter('.selected').first();
                if ($selected.length && $selected.attr('id')) {
                    $listbox.attr('aria-activedescendant', $selected.attr('id'));
                }
            }
        }

        /**
         * Opens dropdown with mobile overlay support
         * Handles focus management and animations
         */
        function open() {
            log('Otváram dropdown pre', type);

            // Zatvor ostatné
            $('.switch.show-options').not($root).each(function () {
                close($(this));
            });

            $root.addClass('show-options');
            setExpanded(true);
            
            // Pre mobilné zobrazenie vytvor overlay
            if (window.matchMedia('(max-width: 768px)').matches) {
                createMobileOverlay();
            }
            
            setTimeout(() => $root.addClass('anim-options'), 50);
            setTimeout(() => $root.addClass('show-shadow'), 200);

            // Fokus na selected alebo prvý
            setTimeout(() => {
                const $toFocus = $items.filter('.selected').first();
                const $finalFocus = $toFocus.length ? $toFocus : $items.first();
                log('Nastavujem focus na:', $finalFocus.text().trim());
                $finalFocus.focus();
                log('Dropdown otvorený, fokus na:', $toFocus.length ? 'vybraný' : 'prvý');
            }, 100);
        }

        /**
         * Closes dropdown and cleans up mobile overlay
         * Handles animation timing and ARIA cleanup
         */
        function close(targetRoot = $root) {
            log('Zatváram dropdown pre', type);
            targetRoot.removeClass('anim-options show-shadow');
            const $btn = targetRoot.find('.current');
            $btn.attr('aria-expanded', 'false');
            targetRoot.find('[role="listbox"]').removeAttr('aria-activedescendant');
            
            // Odstráň mobilný overlay
            removeMobileOverlay();
            
            setTimeout(() => targetRoot.removeClass('show-options'), 600);
        }

        /**
         * Creates mobile overlay for touch device optimization
         * Positioned fixed bottom-left per user requirements
         */
        function createMobileOverlay() {
            if ($('.switch-mobile-overlay').length === 0) {
                const $overlay = $('<div class="switch-mobile-overlay"></div>');
                $('body').append($overlay);
                
                // Event pre zatvorenie klikom na overlay
                $overlay.on('click.switch-overlay', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    log('Klik na mobilný overlay - zatváram dropdown');
                    close();
                });
                
                // Aktivuj overlay s animáciou
                setTimeout(() => $overlay.addClass('active'), 10);
                log('Vytvorený mobilný overlay');
            }
        }

        /**
         * Removes mobile overlay with fade animation
         * Includes proper event cleanup
         */
        function removeMobileOverlay() {
            const $overlay = $('.switch-mobile-overlay');
            if ($overlay.length > 0) {
                $overlay.removeClass('active');
                setTimeout(() => {
                    $overlay.off('click.switch-overlay').remove();
                    log('Odstránený mobilný overlay');
                }, 300);
            }
        }

        // Button events
        $current.off(`click.switch-${type}`).on(`click.switch-${type}`, function (e) {
            // Ignoruj click ak bol spustený klávesnicou
            if ($(this).data('keyboardTriggered')) {
                log('Ignorujem click - bol spustený klávesnicou');
                return;
            }
            
            e.preventDefault();
            e.stopImmediatePropagation();
            
            log('Klik na button pre', type);
            
            // Použijem setTimeout na zabránenie race condition
            setTimeout(() => {
                if ($root.hasClass('show-options')) {
                    log('Zatváram dropdown');
                    close();
                } else {
                    log('Otváram dropdown');
                    open();
                }
            }, 10);
        });

        $current.on(`keydown.switch-${type}`, function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                
                // Nastav flag aby sa zabránilo spusteniu click handlera
                $(this).data('keyboardTriggered', true);
                setTimeout(() => {
                    $(this).removeData('keyboardTriggered');
                }, 50);
                
                if ($root.hasClass('show-options')) close();
                else open();
            }
            if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                e.preventDefault();
                e.stopPropagation();
                open();
            }
            if (e.key === 'Escape') {
                e.preventDefault();
                e.stopPropagation();
                close();
            }
        });

        // Items events
        $items.on(`click.switch-${type}`, function (e) {
            if (type === 'language') {
                // Pre jazyky nechaj prirodzené správanie <a> linku
                const $link = $(this).find('a.lang-link');
                if ($link.length) {
                    log('Klik na jazykový link:', $link.attr('href'));
                    announce(`Navigating to ${$link.text().trim()}`);
                }
            } else {
                // Pre meny - rozlíš medzi odkazom a callback systémom
                const $currencyLink = $(this).find('a.currency-link');
                
                if ($currencyLink.length) {
                    // Ak je currency link <a> element, nechaj prirodzenú navigáciu
                    log('Klik na currency link:', $currencyLink.attr('href'));
                    announce(`Navigating to currency ${$currencyLink.text().trim()}`);
                    // Nepreventuj default - nechaj navigáciu
                } else {
                    // Ak je iba span, použij callback systém ako doteraz
                    e.stopPropagation();
                    e.preventDefault();

                    const newCurrency = $(this).data('currency');
                    if (newCurrency) {
                        log('Mena zmenená na:', newCurrency);

                        // Aktualizuj iba hodnotu meny v .currency-value elemente
                        const $valueSpan = $current.find('.currency-value');
                        if ($valueSpan.length) {
                            $valueSpan.text(newCurrency.toUpperCase());
                        } else {
                            // Fallback pre starý systém - hľadaj .currency-text
                            let $textSpan = $current.find('.currency-text');
                            if (!$textSpan.length) {
                                $textSpan = $current.find('span[aria-hidden="true"]');
                            }
                            
                            if ($textSpan.length) {
                                const currentText = $textSpan.text();
                                const hasLabel = currentText.includes(':');
                                
                                let newDisplayText = newCurrency.toUpperCase();
                                if (hasLabel) {
                                    // Zachovaj label text pred menou (hľadaj text pred ":")
                                    const labelMatch = currentText.match(/^([^:]+:)\s*/);
                                    if (labelMatch) {
                                        newDisplayText = `${labelMatch[1]} ${newDisplayText}`;
                                    }
                                }
                                
                                $textSpan.text(newDisplayText);
                            }
                        }

                        $items.removeClass('selected').attr('aria-selected', 'false');
                        $(this).addClass('selected').attr('aria-selected', 'true');

                        announce(`Currency changed to ${newCurrency.toUpperCase()}`);

                        // Callback ak existuje
                        if (typeof window.onCurrencyChange === 'function') {
                            window.onCurrencyChange(newCurrency);
                        }
                    }

                    close();
                    $current.focus();
                }
            }
        });

        $items.on(`keydown.switch-${type}`, function (e) {
            const $focusable = $items;
            const idx = $focusable.index(this);

            if (e.key === 'Escape') {
                e.preventDefault();
                e.stopPropagation();
                close();
                $current.focus();
                return;
            }

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                e.stopPropagation();
                const next = (idx + 1) % $focusable.length;
                const $next = $focusable.eq(next).focus();
                if ($next.attr('id')) {
                    $listbox.attr('aria-activedescendant', $next.attr('id'));
                }
                return;
            }

            if (e.key === 'ArrowUp') {
                e.preventDefault();
                e.stopPropagation();
                const prev = (idx - 1 + $focusable.length) % $focusable.length;
                const $prev = $focusable.eq(prev).focus();
                if ($prev.attr('id')) {
                    $listbox.attr('aria-activedescendant', $prev.attr('id'));
                }
                return;
            }

            if (e.key === 'Home') {
                e.preventDefault();
                e.stopPropagation();
                const $first = $focusable.first().focus();
                if ($first.attr('id')) {
                    $listbox.attr('aria-activedescendant', $first.attr('id'));
                }
                return;
            }

            if (e.key === 'End') {
                e.preventDefault();
                e.stopPropagation();
                const $last = $focusable.last().focus();
                if ($last.attr('id')) {
                    $listbox.attr('aria-activedescendant', $last.attr('id'));
                }
                return;
            }

            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();

                if (type === 'language') {
                    const $link = $(this).find('a.lang-link');
                    if ($link.length) {
                        log('Jazyk vybraný cez klávesnicu:', $link.attr('href'));
                        // Prirodzený klik na link po krátkom delay
                        setTimeout(() => {
                            window.location.href = $link.attr('href');
                        }, 100);
                    }
                } else {
                    // Currency handling
                    $(this).trigger('click');
                }
                return;
            }
        });

        // Global events - native addEventListener s capture
        let globalClickHandler = function(e) {
            // Skontroluj, či klik nie je v rámci dropdown-u
            if (!$root[0].contains(e.target) && $root.hasClass('show-options')) {
                // Dodatočná ochrana - skontroluj či event nie je synthesized z klávesnice
                if (e.isTrusted === false || e.clientX === 0 && e.clientY === 0) {
                    log('Ignorujem keyboard-triggered click event');
                    return;
                }
                log('Klik mimo dropdown - zatváram');
                close();
            }
        };
        
        // Uložíme referenciu pre cleanup
        $root.data('globalClickHandler', globalClickHandler);
        
        // Registrácia global eventov okamžite, ale s freshlyOpened ochranou
        document.addEventListener('click', globalClickHandler, true); // capture fáza

        // Globálne keyboard eventy tiež okamžite s ochranou
        $(document).on(`keydown.switch-${type}`, function (e) {
            if (e.key === 'Escape' && $root.hasClass('show-options')) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                log('ESC klávesa - zatváram iba dropdown, nie modálne okno');
                close();
            }
        });

        // Responzívne správanie - vyčisti overlay pri zmene na desktop
        let mobileMediaQuery = window.matchMedia('(max-width: 768px)');
        function handleMobileChange(mq) {
            log('Zmena zobrazenia na:', mq.matches ? 'mobilné' : 'desktop');
            if (!mq.matches) {
                // Pri prepnutí na desktop odstráň overlay
                removeMobileOverlay();
            }
        }
        
        if (mobileMediaQuery.addListener) {
            mobileMediaQuery.addListener(handleMobileChange);
        } else if (mobileMediaQuery.addEventListener) {
            mobileMediaQuery.addEventListener('change', handleMobileChange);
        }
    }

    /* ===============================
     * VEREJNÉ API: LCSwitcher
     * ===============================
     * 
     * Hlavné rozhranie pluginu s komplexnými možnosťami
     * Riešenie prepínania jazykov aj mien
     * Obsahuje debug nástroje a cleanup metódy
     */
    const LCSwitcher = {
        /**
         * Hlavná inicializačná metóda
         * @param {Object} options - Konfiguračný objekt
         * @param {string=} options.language - Kód aktuálneho jazyka (fallback: <html lang>)
         * @param {string=} options.currency - Kód aktuálnej meny pre menový prepínač
         * @param {string[]=} options.languages - Pole reťazcov "kod|Label" (default: CZ + EN)
         * @param {string[]=} options.currencies - Pole reťazcov "kod|Label" (default: ["czk|CZK Kč", "eur|EUR €"])
         * @param {boolean=} options.allowCurrencyChange - Zobraziť menový prepínač (default: true)
         * @param {boolean=} options.onlyFlags - Zobraziť iba vlajky vedľa seba bez dropdown (default: false)
         * @param {boolean=} options.onlyCurrency - Zobraziť iba menové symboly vedľa seba bez dropdown (default: false)
         * @param {boolean=} options.disabledPlugin - Úplne vypnúť plugin (default: false)
         * @param {string=} options.languageChangeUrl - URL šablóna pre jazykové odkazy
         * @param {string=} options.currencyChangeUrl - URL šablóna pre menové odkazy (ak nie je definovaná, použije sa callback systém)
         * @param {string=} options.languageLabel - Textový prefix pre výber jazyka
         * @param {string=} options.currencyLabel - Textový prefix pre výber meny
         * @param {boolean=} options.debug - Povoliť logovania do konzoly (default: false)
         */
        init(options) {
            // Automaticky zničiť predchádzajúcu inštanciu pre čistú re-inicializáciu
            this.destroy();
            
            options = options || {};

            // Kontrola disable option - ak je plugin vypnutý, skryj všetky switcher elementy
            if (options.disabledPlugin === true) {
                log('LCSwitcher: Plugin je vypnutý cez disabledPlugin: true');
                
                // Skry všetky switcher elementy aj ich kontajnery
                $('.switch.lang, .switch.currency').hide();
                $('.lc-switches, .lc-switch-container, .lang-currency-switches').hide();
                
                // Skry aj všetky elementy s class obsahujúcimi "switch" a "lang" alebo "currency"
                $('[class*="switch"][class*="lang"], [class*="switch"][class*="currency"]').hide();
                $('[class*="lang"][class*="switch"], [class*="currency"][class*="switch"]').hide();
                
                log('LCSwitcher: Všetky switcher elementy skryté');
                return;
            }

            // Nastav debug mode
            DEBUG = !!options.debug;
            log('LCSwitcher inicializácia začatá', options);

            // Spracuj jazyky
            const langsInput = options.languages || ["cz|Česky", "en|English"];
            const languages = langsInput
                .map(item => {
                    // Ak je už objekt, vráť ho ako je, inak konvertuj na string
                    if (typeof item === 'object' && item.code !== undefined) {
                        return item;
                    }
                    return String(item);
                })
                .map(s => {
                    // Ak je to objekt, vráť ho, inak spracuj string
                    if (typeof s === 'object') {
                        return s;
                    }
                    return s.trim();
                })
                .filter(Boolean)
                .map(pair => {
                    // Ak je už objekt, vráť ho
                    if (typeof pair === 'object') {
                        return pair;
                    }
                    // Inak spracuj string
                    const parts = pair.split('|');
                    const code = (parts[0] || '').trim();
                    const label = (parts[1] || code).trim();
                    return { code, label };
                })
                .filter(x => x.code);

            log('Spracované jazyky:', languages);

            // Spracuj meny
            const currenciesInput = options.currencies || ["czk|CZK Kč", "eur|EUR €"];
            const currencies = currenciesInput
                .map(item => {
                    // Ak je už objekt, vráť ho ako je, inak konvertuj na string
                    if (typeof item === 'object' && item.code !== undefined) {
                        return item;
                    }
                    return String(item);
                })
                .map(s => {
                    // Ak je to objekt, vráť ho, inak spracuj string
                    if (typeof s === 'object') {
                        return s;
                    }
                    return s.trim();
                })
                .filter(Boolean)
                .map(pair => {
                    // Ak je už objekt, vráť ho
                    if (typeof pair === 'object') {
                        return pair;
                    }
                    // Inak spracuj string
                    const parts = pair.split('|');
                    const code = (parts[0] || '').trim();
                    const label = (parts[1] || code).trim();
                    return { code, label };
                })
                .filter(x => x.code !== undefined);

            log('Spracované meny:', currencies);

            // Aktuálny jazyk: options.language -> <html lang> -> fallback
            const currentLanguage = options.language || getHtmlLang() || 'sk';
            log('Aktuálny jazyk určený ako:', currentLanguage);

            // Inicializuj language switchers
            const $langSwitchers = $('.switch.lang');
            log('Nájdené jazykové prepínače:', $langSwitchers.length);

            $langSwitchers.each(function () {
                const switcherOptions = {
                    language: currentLanguage,
                    languages: languages,
                    languageChangeUrl: options.languageChangeUrl,
                    languageLabel: options.languageLabel
                };

                // Rozhodnutie medzi onlyFlags módom a štandardným dropdown-om
                if (options.onlyFlags === true) {
                    initLanguageFlagsOnly($(this), switcherOptions);
                } else {
                    initLanguageSwitch($(this), switcherOptions);
                }
            });

            // Inicializuj currency switchers (iba ak je povolené)
            if (options.allowCurrencyChange !== false) {
                const $currSwitchers = $('.switch.currency');
                log('Nájdené menové prepínače:', $currSwitchers.length);

                // Zobraziť currency switchers
                $currSwitchers.show();

                $currSwitchers.each(function () {
                    const currencySwitcherOptions = {
                        currency: options.currency,
                        currencies: currencies, // Používaj spracované currencies namiesto options.currencies
                        allowCurrencyChange: options.allowCurrencyChange,
                        currencyLabel: options.currencyLabel,
                        currencyChangeUrl: options.currencyChangeUrl // NOVÁ OPTION
                    };

                    // Rozhodnutie medzi onlyCurrency módom a štandardným dropdown-om
                    if (options.onlyCurrency === true) {
                        initCurrencySymbolsOnly($(this), currencySwitcherOptions);
                    } else {
                        initCurrencySwitch($(this), currencySwitcherOptions);
                    }
                });
            } else {
                // Skry všetky currency switchers ak sú zakázané
                $('.switch.currency').hide();
                log('Menové prepínače skryté kvôli allowCurrencyChange: false');
            }

            // Nastav data atribúty na <html>
            if (currentLanguage) {
                document.documentElement.setAttribute('data-lang', currentLanguage);
                log('Nastavený data-lang atribút na:', currentLanguage);
            }
            if (options.currency) {
                document.documentElement.setAttribute('data-currency', options.currency);
                log('Nastavený data-currency atribút na:', options.currency);
            }

            log('LCSwitcher inicializácia dokončená');
        },

        /**
         * Enables debug console logging
         * Useful for development and troubleshooting
         */
        enableDebug() {
            DEBUG = true;
            log('Debug režim zapnutý');
        },

        /**
         * Disables debug console logging
         */
        disableDebug() {
            DEBUG = false;
        },

        /**
         * Complete cleanup of all plugin events and state
         * Removes native event listeners and jQuery events
         * Resets visual state to defaults
         */
        destroy() {
            log('Odstraňovanie LCSwitcher eventov');
            
            // Odstráň všetky switch eventy
            $('.switch').off('.switch-language .switch-currency');
            $(document).off('.switch-language .switch-currency');
            $(window).off('.switch-language .switch-currency');
            
            // Odstráň native event listeners
            $('.switch').each(function() {
                const handler = $(this).data('globalClickHandler');
                if (handler) {
                    document.removeEventListener('click', handler, true);
                    $(this).removeData('globalClickHandler');
                }
            });
            
            // Vyčisti pozičné triedy
            $('.switch .options').removeClass('dropdown-top dropdown-right dropdown-left');
            
            // Zatvor všetky otvorené dropdowns
            $('.switch.show-options').removeClass('show-options anim-options show-shadow');
            
            // Obnov pôvodné zobrazenie všetkých switcherov (odstráň skrytie)
            $('.switch.currency').show();
            $('.switch.lang').show();
            
            log('LCSwitcher eventy odstránené');
        }
    };

    // Export do globálu
    window.LCSwitcher = LCSwitcher;

})(jQuery, window, document);

/* ===============================
 * AUTOMATICKÁ INICIALIZÁCIA
 * ===============================
 * 
 * Predvolené nastavenie pre okamžité použitie
 * Prispôsobte tieto hodnoty pre vašu aplikáciu
 */
/*
$(document).ready(function () {
    if (window.LCSwitcher) {
        LCSwitcher.init({
            language: document.documentElement.getAttribute('lang'),
            languages: [
                "sk|Slovenčina",
                "cz|Čeština",
                "en|English",
                "de|Deutsch",
                "ru|Русский",
                "hu|Magyar"
            ],
            currencies: [
                "czk|CZK Kč", 
                "eur|EUR €"
            ],
            languageChangeUrl: '/Home/ChangeLanguage?code={CODE}', // Upraviť podľa potreby
            allowCurrencyChange: true, // Zmeniť na false ak chceš úplne skryť currency switcher
            debug: false // Zmeniť na true pre debug výpisy
        });
    }
});
*/