# Evidence Examine Flow

Operational guide for deep inspection of Court Record items (Case 4).

## 1. Trigger

Player opens the Acta (`#btn-court-record` or trial Present), selects an inventory item that defines `detailedView`, and clicks **Examinar Detalle** (`#btn-evidence-examine`).

## 2. Entry Point

- `ModalManager.selectEvidence` → [[src/engine/Private/EvidenceExamine.ts]] `syncExamineButton`.
- Catalog field `EvidenceItem.detailedView` in [[src/types/Private/evidence.ts]].

## 3. Step-by-Step Sequence

1. `#evidence-grid` click loads name, `getEvidenceDesc`, and icon into `#evidence-details`.
2. If `detailedView` exists, `#btn-evidence-examine` is shown; otherwise hidden.
3. Player clicks **Examinar Detalle** → `#evidence-examine-modal` opens (Court Record may stay underneath).
4. `#evidence-examine-caption` shows `detailedView.caption`; `#evidence-examine-image` loads `imageAsset` (`assets/examine_*.webp`).
5. Optional `clickableZones` render on `#evidence-examine-zones` as percentage boxes (`x,y,width,height`). A click toasts `tooltip` via the game notification (and updates the caption). Zones do not change inventory or trial state.
6. Close via `#btn-close-examine` or backdrop; no inventory or trial state change.

## 4. State Read / Write

| Read | Write |
|------|-------|
| `gameState.inventory` | None (read-only inspection) |
| `getEvidenceCatalog(lang, caseId)` for `detailedView` | None |

## 5. Case 4 Examine Items

| ID | Asset |
|----|-------|
| `foto_crimen` | `assets/examine_foto.webp` |
| `candado_cadena` | `assets/examine_cadena.webp` |
| `plano_hotel` | `assets/examine_plano.webp` |
| `botella_vino` | `assets/examine_botella.webp` |
| `nota_amenaza` | `assets/examine_nota.webp` (+ sentence zones) |

## 6. Related Modules

[[src/engine/Private/EvidenceExamine.ts]], [[src/engine/Private/ModalManager.ts]], [[docs/architecture/game-engine.md]]
