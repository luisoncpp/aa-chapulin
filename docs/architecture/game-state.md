# Game State & Inventory Architecture

Technical guide for [[src/state/index.ts]], configured in [[src/state/state.group.md]].

## Overview

The `GameStateManager` class ([[src/state/Private/GameStateManager.ts]]) is the single source of truth for the game's logical progression, inventory management, penalty/health meters, and investigation state.

```mermaid
classDiagram
    class GameState {
        +string mode
        +string currentLocation
        +Array~string~ unlockedLocations
        +number health
        +number maxHealth
        +boolean gameOver
        +string caseId
        +number trialDay
        +Array~string~ requiredEvidence
        +Object allEvidence
        +Array~string~ inventory
        +Object flags
        +beginNewCase(script) void
        +beginTrialDay2(adjournment) void
        +unlockLocation(locationId) boolean
        +isLocationUnlocked(locationId) boolean
        +addEvidence(evidenceId) boolean
        +hasEvidence(evidenceId) boolean
        +takePenalty() boolean
        +resetHealth() void
        +checkTrialReadiness() boolean
    }
```

## Data Model

### 1. Evidence Registry (`allEvidence`)
Contains the master catalog defined in [[src/state/Private/EvidenceCatalog.ts#Evidence Registry]] (Case 1 plus Case 2 IDs from [[src/state/Private/EvidenceCatalogCase2.ts]]):

| Evidence ID | Name | Role in Case |
|-------------|------|--------------|
| `insignia_abogado` | Insignia de Abogado CH | Default starting badge |
| `chipote_chillon` | Chipote Chillón | Disproves lethal blunt assault charge |
| `pastillas_chiquitolina` | Pastillas de Chiquitolina | Explains entry into locked display case |
| `antenitas_vinil` | Antenitas de Vinil | Detects villain location & timestamps alarm |
| `informe_medico` | Informe Médico de Alma Negra | Shows guard was struck with metal coins |
| `foto_crimen` | Foto del Sospechoso | Mirror reflection proves escape direction |
| `chicharra_oro` | Chicharra Paralizadora de Oro | The stolen artifact |
| `bolsa_dolares` | Bolsa de Dólares de Super Sam | Prosecutor's coin bag / true blunt weapon |

### 2. Player Inventory (`inventory`)
- Array of active evidence IDs currently held by the player.
- Initialized with `['insignia_abogado']`.
- Updated via `addEvidence(evidenceId)` in [[src/state/Private/GameStateManager.ts#Inventory Operations]] which prevents duplicate additions.

### 3. Location Management (`unlockedLocations`)
- Array of unlocked location identifiers accessible during the investigation phase.
- Default construction uses `['museum']`; `beginNewCase` replaces this with `[script.startLocation]` (Case 2: `'detention'`).
- Updated via `unlockLocation(locationId)` in [[src/state/Private/GameStateManager.ts#Location Operations]] which dynamically registers new areas and returns `true` only when an area is newly unlocked.
- Queryable via `isLocationUnlocked(locationId)`.

### 4. Penalty System (`health` & `takePenalty`)
- Defense starts with `5` health points (displayed as 5 green exclamation points `!` on the HUD).
- Each invalid evidence submission deducts `1` point via `takePenalty()` in [[src/state/Private/GameStateManager.ts#Penalty & Health]].
- When `health` reaches `0`, `gameOver` is set to `true`, prompting a retry modal that restores health and resets the current trial phase.

### 5. Case start, trial day, and readiness
- `beginNewCase(script)` in [[src/state/Private/GameStateManager.ts#Case Progression]] sets `caseId`, `trialDay = 1`, investigation at `script.startLocation`, inventory to `['insignia_abogado']`, then `applyProgressionRules(script)`.
- `trialDay` is `1` or `2`. `beginTrialDay2(adjournment)` sets day 2, clears `ready_for_trial`, copies `adjournment.requiredEvidence`, returns to investigation, and unlocks `adjournment.unlockLocations`.
- `checkTrialReadiness()` is case-aware: it requires every ID in the current `requiredEvidence` list (not a hardcoded Case 1 five-item set).
- Case 1 `requiredEvidence`: `chipote_chillon`, `pastillas_chiquitolina`, `antenitas_vinil`, `informe_medico`, `foto_crimen`.
- Case 2 day 1: `palanca_rota`, `informe_boveda`, `reloj_pendulo`, `aroma_dulce`, `plano_hacienda`, `caja_generador`.
- Case 2 day 2 (`adjournment.requiredEvidence`): `multa_transito`, `registro_postal`, `lata_grasa`, `antenitas_vinil`, `frasco_valeriana`, `molde_cera`.

### 6. Debug Trial State Setup (`populateTrialEvidence`)
- `populateTrialEvidence()` in [[src/state/Private/GameStateManager.ts#Trial Debug Setup]] adds `debugEvidence`, unlocks `debugUnlockLocations`, sets `flags.ready_for_trial = true`, and switches `mode` to `'TRIAL'`. Those lists come from the active `CaseScript` (Case 1 extra `bolsa_dolares`; Case 2 debug uses day-1 evidence + `boveda` / `restaurante`).

### 7. Browser Storage Persistence (`SaveManager`)
- `SaveManager` in [[src/state/Private/SaveManager.ts]] provides persistence in `window.localStorage` under key `'ace_attorney_save_data'`.
- `exportState(trialSnapshot)` serializes game progression, unlocked locations, inventory, flags, health, mode, language, `caseId`, `trialDay`, and active trial testimony statements.
- `restoreState(data)` rehydrates game state and validates schema versioning (`CURRENT_SAVE_VERSION = 1`).

## Invariants

- Evidence can only be added if it exists in `allEvidence`.
- Inventory contains no duplicates.
- Health cannot drop below 0.
- Corrupted or outdated save payloads are rejected safely without mutating runtime state.
