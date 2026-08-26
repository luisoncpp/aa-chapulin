# Language Switching Flow

End-to-end trace when the user toggles the game language between Spanish and English.

## Trigger

- User clicks the language toggle button in the top HUD (`#btn-lang-toggle`).
- User clicks the language toggle button in the title splash card (`#btn-lang-splash`).
- Page loads with URL query parameter (e.g. `?lang=en`).

## Sequence of Operations

```mermaid
sequenceDiagram
    actor Player
    participant UI as DOM Controls
    participant Binder as EngineEventBinder
    participant Engine as GameEngine
    participant I18n as I18nService
    participant State as GameStateManager
    participant Case as Case Facade
    participant Updater as UiLanguageUpdater
    participant Inv as InvestigationController
    participant Trial as TrialController

    Player->>UI: Click #btn-lang-toggle
    UI->>Binder: Click Event
    Binder->>Engine: toggleLanguage()
    Engine->>I18n: toggleLanguage() -> nextLang ('es' | 'en')
    Engine->>State: setLanguage(nextLang)
    State->>State: allEvidence = getEvidenceCatalog(nextLang)
    Engine->>Case: getCaseScript(nextLang)
    Engine->>Inv: setScript(newScript)
    Engine->>Trial: setScript(newScript)
    Engine->>Updater: updateUi(dom, nextLang)
    Updater->>UI: Update Button Labels & Modal Headers
    Note over Inv,Trial: Active scene or testimony re-renders with new localized text
```

## State & Side Effects

1. **`i18n.currentLanguage`**: Updated to `'es'` or `'en'`.
2. **`gameState.language`**: Updated to match active locale.
3. **`gameState.allEvidence`**: Re-indexed with localized item names and descriptions.
4. **`GameEngine.script`**: Replaced with the corresponding localized script tree.
5. **DOM Elements**: Navigation buttons (`Examinar`/`Examine`, `Hablar`/`Talk`, etc.), HUD banner titles, modal headers, and tooltip placeholders update instantly.
