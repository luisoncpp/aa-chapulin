# Evidence Examine Flow

Operational guide for deep inspection of Court Record items (Case 4).

## 1. Trigger

Player opens the Acta (`#btn-court-record` or trial Present), selects an inventory item that defines `detailedView`, and clicks **Examinar Detalle** (`#btn-evidence-examine`). Items without `detailedView` show only their normal Court Record entry.

## 2. Entry Point

- `ModalManager.selectEvidence` → [[src/engine/Private/EvidenceExamine.ts]] `syncExamineButton`.
- Catalog field `EvidenceItem.detailedView` in [[src/types/Private/evidence.ts]].

## 3. Step-by-Step Sequence

1. `#evidence-grid` click loads name, `getEvidenceDesc`, and icon into `#evidence-details`.
2. If `detailedView` exists, `#btn-evidence-examine` is shown; otherwise hidden.
3. Player clicks **Examinar Detalle** → `#evidence-examine-modal` opens (Court Record may stay underneath).
4. `#evidence-examine-caption` shows `detailedView.caption`; `#evidence-examine-image` loads `imageAsset` (`assets/examine_*.webp`).
5. Optional `clickableZones` render on `#evidence-examine-zones` as percentage boxes (`x,y,width,height`). Percentages are relative to the 640×360 stage, which matches the 960×540 plate exactly (16:9, `object-fit: contain` adds no letterbox), so zone coordinates must be measured on the generated WebP. After regenerating a plate, recalibrate these zones and any related trial `pointTarget` zones against the final image in both language modules before shipping. Each zone is a `<button>` carrying `title`/`aria-label` = `tooltip`; `.examine-zone` must neutralize native button chrome (transparent background, no default border) or the zones paint as opaque white rectangles. A click toasts `tooltip` via the game notification (and updates the caption). Zones do not change inventory or trial state.
6. Close via `#btn-close-examine` or backdrop; no inventory or trial state change.

## 4. State Read / Write

| Read | Write |
|------|-------|
| `gameState.inventory` | None (read-only inspection) |
| `getEvidenceCatalog(lang, caseId)` for `detailedView` | None |

## 5. Case 4 Examine Items

Only the items below expose **Examinar Detalle**. Other Case 4 evidence, including `foto_crimen`, intentionally has no `detailedView`.

| ID | Asset |
|----|-------|
| `candado_cadena` | `assets/examine_cadena.webp` |
| `plano_hotel` | `assets/examine_plano.webp` |
| `botella_vino` | `assets/examine_botella.webp` |
| `nota_amenaza` | `assets/examine_nota.webp` (+ `encabezado_hora` / `linea_exigencia` / `firma_remitente` / `acuse_recepcion` zones) |
| `orden_servicios` | `assets/examine_orden.webp` |
| `registro_montacargas` | `assets/examine_registro.webp` |
| `sello_lacre` | `assets/examine_sello.webp` |

## 6. Related Modules

[[src/engine/Private/EvidenceExamine.ts]], [[src/engine/Private/ModalManager.ts]], [[docs/architecture/game-engine.md]]
