# Changelog

Všetky významné zmeny v tomto projekte budú zdokumentované v tomto súbore.

## [1.1.0] - 2025-01-27

### ✨ Pridané
- **OnlyFlags mód** (`onlyFlags: true`) - zobrazuje iba vlajky vedľa seba bez dropdown-u
- **DisabledPlugin option** (`disabledPlugin: true`) - umožňuje úplne vypnúť plugin
- **Automatické skrývanie** switcher elementov pri disabledPlugin (vrátane .lc-switches kontajnerov)
- **Horizontálny layout vlajiek** s responzívnym wrapping
- **Okamžitá navigácia** pri kliku na vlajku v onlyFlags móde
- **Nové CSS štýly** pre flag-only display s dark theme podporou
- **Demo príklady** pre nové funkcie v demo.html vrátane disable/enable testov
- **Rozšírená dokumentácia** s príkladmi použitia nových funkcií

### 🔧 Technické vylepšenia
- **Podmienené načítanie** funkcií podľa módu (onlyFlags vs dropdown)
- **Keyboard accessibility** pre onlyFlags mód (šípky, Enter, Space)
- **Automatické switcher prepínanie** v demo prostredí
- **Aktívna vlajka styling** s výrazným pozadím
- **Focus indikátory** pre všetky nové elementy
- **Rozšírené skrývanie elementov** - detekcia rôznych typov switcher kontajnerov

### 🛠️ Opravy
- **DisabledPlugin** teraz správne skrýva aj existujúce HTML elementy (lc-switches, atď.)
- **jQuery selektory** pre komplexnejšie detekcie switcher elementov
- **Demo environment** s ukážkou disable/enable funkcionalite

## [1.0.0] - 2025-09-04

### ✨ Pridané
- **Kompletný jazykový prepínač** s vlajkami krajín
- **Menový prepínač** s konfigurovateľnými menami
- **Klávesová navigácia** (Tab, Enter, Šípky, Escape)
- **Accessibility support** (ARIA, Screen readers, Focus indikátory)
- **Responsívny dizajn** (Desktop dropdown, Mobile overlay)
- **67 CSS custom properties** pre kompletné prispôsobenie
- **Debug režim** s detailnými logmi
- **Re-inicializácia** bez manuálneho destroy()
- **Automatické atribúty** (data-lang, data-currency)
- **ES5 kompatibilita** pre staršie prehliadače

### 🔧 Technické
- **jQuery 3.0+ kompatibilita**
- **WCAG 2.1 compliance** pre accessibility
- **Namespace eventy** pre zamedzenie konfliktov
- **CSS custom properties** pre theming
- **SCSS zdrojové súbory** s kompletnou štruktúrou

### 📱 Responsívnosť
- **Desktop mód:** Dropdown s inteligentným pozicionovaním
- **Mobile mód:** Fullscreen overlay optimalizovaný pre dotyky
- **Automatické prepínanie** na základe šírky obrazovky

### 🌐 Jazykové funkcie
- **Automatické vlajky** pre všetky podporované krajiny
- **Detekcia jazyka** z `<html lang>` atribútu
- **URL template systém** s {CODE} placeholder
- **Mapovanie jazykov na krajiny** (en → gb, atď.)

### 💰 Menové funkcie
- **Konfigurovateľné meny** s vlastnými labelmi
- **Dynamické skrývanie/zobrazovanie** prepínača
- **Event callbacky** pre handling zmien meny
- **CSS custom properties** pre aktuálnu menu

### ♿ Accessibility
- **ARIA compliant** markup
- **Screen reader optimalization**
- **Focus indikátory** pre keyboard navigáciu
- **Live regions** pre oznámenia zmien
- **Semantic HTML** štruktúra

### 🎨 Styling
- **67 CSS premenných** pre kompletné prispôsobenie
- **Themovateľné komponenty** (farby, spacing, typography)
- **Animácie a prechody** s konfigurovateľným timingom
- **Mobile-first approach** pre responsívnosť

### 🔧 Developer Experience
- **Jednoduché API** s jasnou dokumentáciou
- **Debug režim** s detailnými logmi
- **Re-inicializácia** bez manuálnych krokov
- **Error handling** s informatívnymi správami
- **TypeScript-ready** štruktúra

### 📦 Distribúcia
- **Hlavný JS súbor** (ES6+)
- **ES5 verzia** pre staršie prehliadače
- **Minifikované CSS** pre produkciu
- **SCSS zdrojáky** pre customization
- **Kompletná dokumentácia** v slovenčine

---

## Formát

Tento changelog dodržiava [Keep a Changelog](https://keepachangelog.com/sk/1.0.0/) štandard a používa [Semantic Versioning](https://semver.org/lang/sk/).

## Typy zmien

- **✨ Pridané** - pre nové funkcie
- **🔧 Zmenené** - pre zmeny v existujúcej funkcionalite  
- **🐛 Opravené** - pre opravy chýb
- **🚨 Deprecated** - pre funkcie ktoré budú odstránené
- **❌ Odstránené** - pre odstránené funkcie
- **🔒 Bezpečnosť** - pre security opravy
