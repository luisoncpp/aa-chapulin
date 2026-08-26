# Internationalization (i18n) Subsystem

Provides comprehensive runtime localization support for **Spanish** (`es`) and **English** (`en`) across UI controls, evidence catalogs, investigation scenes, talk trees, and trial cross-examination scripts.

## Module Boundaries

```mermaid
graph TD
    Engine[Presentation & GameEngine] -->|setLanguage| I18n[I18nService]
    Engine -->|updateUi| Updater[UiLanguageUpdater]
    Engine -->|setScript| Case[Case Narrative Facade]
    State[GameStateManager] -->|getEvidenceCatalog| Evidence[EvidenceCatalog]
    I18n -->|UI Dictionaries| Dictionaries[ui_es / ui_en]
    Case -->|Bilingual Scripts| Scripts[Case 1 ES / EN]
```

## Public Facade (`src/i18n/index.ts`)

The internationalization deep module exposes:
- `I18nService` / singleton `i18n`: Locale registry providing language query (`getLanguage()`), setting (`setLanguage(lang)`), toggling (`toggleLanguage()`), and event subscriptions (`subscribe(listener)`).
- `SUPPORTED_LANGUAGES`: Constant array `['es', 'en']`.
- `DEFAULT_LANGUAGE`: Default locale `'es'`.
- `UI_ES` & `UI_EN`: Strongly-typed translation dictionaries implementing the `UiTranslations` interface.

## Language Switching Flow

1. **Trigger**: Player clicks the language toggle button (`#btn-lang-toggle` in top HUD or `#btn-lang-splash` in start splash overlay) or loads a URL parameter (`?lang=en`).
2. **State & i18n Update**: `GameEngine.setLanguage(lang)` invokes `i18n.setLanguage(lang)` and `gameState.setLanguage(lang)`.
3. **Evidence Reload**: `gameState.allEvidence` is repopulated with localized titles and descriptions via `getEvidenceCatalog(lang)`.
4. **Script Swap**: Investigation and trial controllers receive the matching localized narrative graph via `getCaseScript(lang)`.
5. **DOM Synchronization**: `UiLanguageUpdater.updateUi(dom, lang)` updates all button labels, modal headers, HUD banners, and tooltip templates in the DOM without requiring a full page reload.

## Structural Invariants

- **Contradiction Parity**: English and Spanish case scripts must share identical statement indices, contradiction evidence ID arrays (`['chipote_chillon', 'informe_medico']`), and climax target arrays (`['antenitas_vinil', 'bolsa_dolares']`).
- **Asset Uniformity**: Character pose keys, sound effect names, background images, and cut-in keys remain invariant across languages.
