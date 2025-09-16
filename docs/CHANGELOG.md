# História zmien

Všetky významné zmeny v projekte Language & Currency Switcher budú zdokumentované v tomto súbore.

Formát je založený na [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
a tento projekt dodržiava [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.0] - 2025-09-16

### Pridané
- OnlyCurrency mód pre zobrazenie menových symbolov vedľa seba
- Nová konfiguračná možnosť `onlyCurrency: true`
- Kompletné CSS štýly pre `.switch-currency-only` mód
- Symetrické módy: onlyFlags a onlyCurrency s rovnakým štýlovaním
- Rozšírená SCSS architektúra pre currency symboly
- Konzistentné animácie a hover efekty medzi only módmi

### Zmenené
- Vylepšené štýlovanie pre konzistentný vzhľad medzi vlajkami a menami
- Responzívne správanie pre oba only módy
- Aktualizovaná dokumentácia OPTIONS.md s onlyCurrency príkladmi
- Rozšírená API dokumentácia pre nové možnosti

### Opravené
- Konzistentné medzery a padding medzi onlyFlags a onlyCurrency módmi
- Symetrické animácie pre oba only módy

## [1.1.5] - 2025-09-11

### Zmenené
- Odstránený duplikovaný AI-KONTINUITA.md súbor
- PROJECT-STATUS.md zostáva jediným zdrojom AI kontinuity
- Vyčistená štruktúra projektu pre lepšiu organizáciu

## [1.1.4] - 2025-09-11

### Pridané
- Vlastné SVG vlajky zahrnuté priamo v plugine
- Kompletne nezávislý plugin bez externých závislostí na vlajky
- Nové CSS triedy `.lcs-flag` namiesto `flag-icon`
- Podpora pre 12 krajín: SK, EN/GB, DE, FR, ES, IT, HU, CZ, PL, NL, RU, PT
- Odporúčania na stiahnutie ďalších vlajok z Flag Icons a Country Flags API

### Zmenené  
- Odstránená závislosť na flag-icons balíčku z package.json
- Aktualizované CSS štýly pre vlastné vlajky
- Zmenené CSS triedy z `flag-icon-*` na `lcs-flag-*`
- Aktualizovaná dokumentácia bez odkazov na flag-icons
- Kompletne prerobené SCSS pre vlastné vlajky

### Odstránené
- Externá závislosť na flag-icons balíček
- Kontrola prítomnosti flag-icons v JavaScript kóde
- Varovania o chýbajúcej flag-icons knižnici

## [1.1.3] - 2025-09-11

### Pridané
- NPM balíček štruktúra s profesionálnou organizáciou adresárov
- Profesionálny package.json s kompletými metadátami
- Podrobná API dokumentácia v docs/API.md
- .npmignore súbor pre čistú distribúciu balíčka
- Kompletná slovenská dokumentácia v README.md
- Úplná tabuľka konfiguračných možností s 12 opciami

### Zmenené
- Premenované hlavné súbory z `switcher-lang-currency-orso.*` na `language-currency-switcher.*`
- Presunuté príklady inicializácie do `examples/` adresára
- Organizovaná dokumentácia v `docs/` adresári
- Aktualizované všetky hlavičky verzií na v1.1.3
- Rozšírený popis balíčka a kľúčové slová pre lepšie objavovanie na NPM

### Opravené
- Pridané chýbajúce `currencyChangeUrl` možnosti do príkladov 5, 8, a 12
- Dokončená dokumentácia všetkých konfiguračných možností
- Vylepšená organizácia kódu pre NPM distribúciu

## [1.1.2] - 2024-12-28

### Pridané
- `currencyChangeUrl` možnosť pre duálne spracovanie mien
  - Podpora URL vzorov s `{currency}` zástupným znakom
  - Podpora callback funkcií pre vlastnú logiku zmeny meny
- Rozšírená funkcionalita prepínania mien
- Vylepšený callback systém pre zmeny mien

### Zmenené
- Rozšírený menový prepínač na podporu URL presmerovaní aj callbacks
- Vylepšené inicializačné príklady s currencyChangeUrl demonštráciami
- Aktualizovaná dokumentácia zahŕňajúca nové možnosti spracovania mien

### Opravené
- Prepínanie mien teraz správne spracováva URL aj callback režimy
- Vylepšené spracovanie chýb pre operácie zmeny meny

## [1.1.1] - 2024-12-20

### Pridané
- OnlyFlags režim pre zobrazenie iba vlajok bez názvov jazykov
- Rozšírené accessibility funkcie
- Vylepšené rozostupy a layout dropdown menu
- Lepšia podpora responzívneho dizajnu

### Zmenené
- Optimalizované CSS pre lepší výkon
- Vylepšené zarovnanie a rozostupy vlajok
- Rozšírené štýlovanie dropdown menu

### Opravené
- Opravené problémy s rozostupmi dropdown v rôznych prehliadačoch
- Vylepšené načítavanie a zobrazovanie obrázkov vlajok
- Opravené problémy so špecificitou CSS

## [1.1.0] - 2024-12-15

### Pridané
- Funkcionalita menového prepínača popri prepínaní jazykov
- Podpora viacerých mien so symbolmi a názvami
- Nové konfiguračné možnosti:
  - `currencies`: Pole objektov mien
  - `defaultCurrency`: Predvolená voľba meny
  - `showLabels`: Prepínanie zobrazenia/skrytia štítkov
  - `orientation`: Horizontálne alebo vertikálne rozloženie
  - `theme`: Podpora tém
  - `animation`: Ovládanie animácií
  - `customClass`: Podpora vlastných CSS tried

### Zmenené
- Rozšírená architektúra pluginu na podporu jazykov aj mien
- Vylepšený systém udalostí s udalosťami zmeny meny
- Lepšie oddelenie logiky jazykov a mien

### Opravené
- Vylepšená kompatibilita prehliadačov
- Rozšírené spracovanie chýb pre neplatné konfigurácie

## [1.0.2] - 2024-12-10

### Opravené
- Opravené riešenie ciest k obrázkom vlajok
- Vylepšené pozicionovanie dropdown menu
- Opravené konflikty CSS s Bootstrap a inými frameworkmi

### Zmenené
- Rozšírená špecificita CSS na predchádzanie konfliktom štýlov
- Vylepšená dokumentácia s viacerými príkladmi

## [1.0.1] - 2024-12-05

### Pridané
- Základná funkcionalita prepínania jazykov
- Podpora zobrazenia vlajok
- Dropdown menu pre výber jazyka
- Systém udalostí pre zmeny jazykov

### Opravené
- Opravy chýb počiatočného vydania
- Vylepšená kompatibilita s jQuery

## [1.0.0] - 2024-12-01

### Pridané
- Počiatočné vydanie Language & Currency Switcher
- Základná funkcionalita prepínania jazykov
- Architektúra jQuery pluginu
- Podpora obrázkov vlajok
- Konfigurovateľné možnosti jazykov
- Udalostí-riadené zmeny jazykov
- Podpora responzívneho dizajnu
- MIT licencia

### Funkcie
- Podpora viacerých jazykov
- Ikony vlajok s nastaviteľnou cestou
- Rozhranie dropdown
- Accessibility s klávesnicou
- Mobilný responzívny dizajn
- Jednoduché integrovanie s existujúcimi webstránkami
- Ľahký a rýchly výkon

---

## Číslovanie verzií

Tento projekt dodržiava [Semantic Versioning](https://semver.org/):

- **HLAVNÁ** verzia pri nekompatibilných zmenách API
- **VEDĽAJŠIA** verzia pri pridaní funkcionality spätne kompatibilným spôsobom
- **OPRAVNÁ** verzia pri spätne kompatibilných opravách chýb

## Odkazy

- [NPM Balíček](https://www.npmjs.com/package/language-currency-switcher)
- [GitHub Repository](https://github.com/OrszaghLubomir/language-currency-switcher)
- [Dokumentácia](https://github.com/OrszaghLubomir/language-currency-switcher/blob/main/README.md)
- [API Referencia](https://github.com/OrszaghLubomir/language-currency-switcher/blob/main/docs/API.md)
