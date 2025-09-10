# Changelog

All notable changes to the Language & Currency Switcher project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.3] - 2025-01-03

### Added
- NPM package structure with proper directory organization
- Professional package.json with complete metadata
- Comprehensive API documentation in docs/API.md
- .npmignore file for clean package distribution
- Complete Slovak documentation in README.md
- Full configuration options table with 12 options

### Changed
- Renamed main files from `switcher-lang-currency-orso.*` to `language-currency-switcher.*`
- Moved initialization examples to `examples/` directory
- Organized documentation in `docs/` directory
- Updated all version headers to v1.1.3
- Enhanced package description and keywords for NPM discovery

### Fixed
- Added missing `currencyChangeUrl` option to examples 5, 8, and 12
- Completed documentation of all configuration options
- Improved code organization for NPM distribution

## [1.1.2] - 2024-12-28

### Added
- `currencyChangeUrl` option for dual-mode currency handling
  - Support for URL patterns with `{currency}` placeholder
  - Support for callback functions for custom currency change logic
- Enhanced currency switching functionality
- Improved callback system for currency changes

### Changed
- Enhanced currency switcher to support both URL redirects and callbacks
- Improved initialization examples with currencyChangeUrl demonstrations
- Updated documentation to include new currency handling options

### Fixed
- Currency switching now properly handles both URL and callback modes
- Improved error handling for currency change operations

## [1.1.1] - 2024-12-20

### Added
- OnlyFlags mode for flag-only display without language names
- Enhanced accessibility features
- Improved dropdown spacing and layout
- Better responsive design support

### Changed
- Optimized CSS for better performance
- Improved flag alignment and spacing
- Enhanced dropdown menu styling

### Fixed
- Fixed dropdown spacing issues in various browsers
- Improved flag image loading and display
- Corrected CSS specificity issues

## [1.1.0] - 2024-12-15

### Added
- Currency switcher functionality alongside language switching
- Support for multiple currencies with symbols and names
- New configuration options:
  - `currencies`: Array of currency objects
  - `defaultCurrency`: Default currency selection
  - `showLabels`: Toggle for showing/hiding labels
  - `orientation`: Horizontal or vertical layout
  - `theme`: Theming support
  - `animation`: Animation control
  - `customClass`: Custom CSS class support

### Changed
- Enhanced plugin architecture to support both languages and currencies
- Improved event system with currency change events
- Better separation of language and currency logic

### Fixed
- Improved cross-browser compatibility
- Enhanced error handling for invalid configurations

## [1.0.2] - 2024-12-10

### Fixed
- Fixed flag image path resolution
- Improved dropdown menu positioning
- Corrected CSS conflicts with Bootstrap and other frameworks

### Changed
- Enhanced CSS specificity to prevent style conflicts
- Improved documentation with more examples

## [1.0.1] - 2024-12-05

### Added
- Basic language switching functionality
- Flag display support
- Dropdown menu for language selection
- Event system for language changes

### Fixed
- Initial release bug fixes
- Improved jQuery compatibility

## [1.0.0] - 2024-12-01

### Added
- Initial release of Language & Currency Switcher
- Basic language switching functionality
- jQuery plugin architecture
- Flag image support
- Configurable language options
- Event-driven language changes
- Responsive design support
- MIT License

### Features
- Support for multiple languages
- Flag icons with customizable path
- Dropdown interface
- Keyboard accessibility
- Mobile-friendly responsive design
- Easy integration with existing websites
- Lightweight and fast performance

---

## Version Numbering

This project follows [Semantic Versioning](https://semver.org/):

- **MAJOR** version when you make incompatible API changes
- **MINOR** version when you add functionality in a backwards compatible manner
- **PATCH** version when you make backwards compatible bug fixes

## Links

- [NPM Package](https://www.npmjs.com/package/language-currency-switcher)
- [GitHub Repository](https://github.com/OrszaghLubomir/language-currency-switcher)
- [Documentation](https://github.com/OrszaghLubomir/language-currency-switcher/blob/main/README.md)
- [API Reference](https://github.com/OrszaghLubomir/language-currency-switcher/blob/main/docs/API.md)
