# Case Scripting Architecture

Technical guide for [[src/case/index.ts]], configured in [[src/case/case.group.md]].

## Overview

Narrative lives in `CaseScript` objects. `getCaseScript(lang, caseId)` in [[src/case/index.ts]] returns Case 1 (`case1`), Case 2 (`case2`), Case 3 (`case3`), or Case 4 (`case4` when scripted); default `CASE_SCRIPT` is still Case 1 Spanish. Each script has `id`, `startLocation`, `requiredEvidence`, `debugEvidence`, `debugUnlockLocations`, `investigation`, `trial`, and optional `adjournment` ([[src/types/Private/script.ts]]). Case 3 lives in nested module [[src/case/case3/index.ts]]; Case 4 will live in [[src/case/case4/index.ts]].

```mermaid
graph TD
    Facade[getCaseScript lang caseId] --> C1[case1]
    Facade --> C2[case2]
    C1 --> Inv1[museum detention]
    C1 --> Trial1[trial then climax]
    C2 --> Inv2[detention boveda restaurante]
    C2 --> Day1[trial day 1]
    Day1 --> Adj[adjournment]
    Adj --> Inv3[oficina_postal casa_clotilde]
    Inv3 --> Day2[adjournment.trial]
    Day2 --> Climax[script.trial.climax]
```

Case 3 (`case3`) is assembled in [[src/case/case3/index.ts]]: `detention` → `cabina_radio` → `plaza_kermes` → day-1 trial → `despacho_barriga` → `clinica_chapatin` → `delegacion` → day-2 trial → `bodega_radio` → `detention_d3` → `delegacion_d3` → day-3 trial → four-stage climax + proverb-trap choices + waiting-room epilogue. Day 1 reuses the shared `detention` id; day 3 revisits detention and the precinct under `_d3` ids because `investigation` is one scene per location key and the intros are day-specific. Day 3 visits detention **before** the precinct so the two precinct clues close the day (see the gating invariant below). `Statement.unlockedBy` hides a line until another statement is pressed. `ClimaxStage.requiredUpdateStage` rejects `microfono_oro` until two description updates. `adjournment.next` is the third trial day. After Barriga wakes, day-3 trial, climax, and epilogue lines use the wheelchair family (`barriga_vendado`, `barriga_shock`, `barriga_enojado`) and never `barriga_idle`. Shock and enojado come from [[tools/raw/barriga_injured_poses_raw.png]], not from the idle 2×2. `tests/case/Case3BarrigaTrialPoses.test.ts` and `tests/assets/BarrigaInjuredPoses.test.ts` guard that. Case 3 owns `informe_barriga` rather than reusing Case 1's `informe_medico`, and `getEvidenceCatalog(lang, 'case3')` returns the Case 3 map alone — no Case 1 entries leak in.

> **Gating invariant (all multi-day cases):** `checkTrialReadiness` reads only the inventory, never the visited-location set. The **last** location of each investigation day must therefore hand over at least one `requiredEvidence` item, or `#btn-inv-trial` lights up early and the player can skip scenes the trial script assumes were seen. Case 3 day lists live in [[src/case/case3/Private/progress.ts]]; `tests/case/Case3Scripts.test.ts` walks the `unlockLocation` chain to assert it.

Case 2 is assembled in [[src/case/case2/index.ts]]: ES/EN scene modules, day-1 trial (`trial_day1*`), day-2 trial (`trial_day2*`), climax on `trial.climax` (`climax.ts`). Day-1 investigation: `detention` → `boveda` → `restaurante`. After testimony 2, `adjournment` sends the player to `oficina_postal` (unlock), then `casa_clotilde`. Day-2 testimonies live on `adjournment.trial`; the finale is still `script.trial.climax`. Case 2 uses optional `climax.stages`: three presents (`lata_grasa`/`antenitas_vinil`, then `frasco_valeriana`/`aroma_dulce`, then `molde_cera`), then optional `climax.choices` (two `ChoicePrompt` questions after the wax-mold present). Case 1 has a single present (`presentTarget` only) and no choices. After the Not Guilty line, courtroom confetti plays, then a black fade into Case 2 `climax.epilogue` in `assets/bg_waiting_room.jpg` (no bench/podium). Case 1 has no `adjournment` and no epilogue. Once that victory is queued, the engine is no longer awaiting a climax present, so the Acta must not reopen on the lobby cut.

## Schema Definitions

### 1. Dialogue Line Object ([[src/types/Private/script.ts#Dialogue & Visual Tags]])

Each entry in a dialogue sequence supports the following optional and required fields:

| Field | Type | Description |
|-------|------|-------------|
| `speaker` | string | Speaker label displayed in the nameplate (e.g. `'DEFENSA'`, `'DON RAMON'`, `'CHAPULIN'`, `'SUPER SAM'`, `'JUEZ'`, `'TRIPASECA'`, `'FLORINDA'`, `'NARRADOR'`). |
| `text` | string | Text string rendered via typewriter. |
| `pose` | string \| null | Sprite key (e.g. `'donramon_idle'`, `'donramon_shock'`, `'chompiras_crying'`). If `null` during trial, defense defaults to `'donramon_idle'`. `donramon_slam` is a desk-contact pose for trial benches; investigation uses `donramon_shock`. Leftover slam tags remap to shock when mode is not `TRIAL`. |
| `bg` | string | File path to switch the background image (`#scene-bg`). |
| `bgm` | string | Track ID to switch soundtrack playback in `midiComposer`. |
| `sfx` | string | SFX identifier to trigger procedural audio (`'gavel'`, `'desk_slam'`, `'whoosh'`, `'realization'`, `'damage'`, `'chipote'`, `'chicharra'`). |
| `cutin` | string | Cut-in graphic key (`'objection_protesto'`, `'objection_un_momento'`, `'objection_toma_eso'`, `'objection_culpable'`, `'objection_inocente'`). |
| `addEvidence` | string | Evidence ID to automatically add to the player's inventory with a progress notification (same toast + realization SFX as a new location). |
| `updateEvidence` | string | Advances one Court Record description stage (`updates[]` or legacy `updatedDesc`). Missing items are added first. |

Statements may set `unlockedBy` to another statement id; [[src/engine/Private/StatementUnlock.ts]] keeps those lines out of the visible cross-exam list until that id is pressed.

### 2. Investigation Scene Schema ([[src/case/case1/Private/investigation.ts]], [[src/case/case2/index.ts]])

```typescript
investigation: {
  [locationId]: {
    title: string;
    bg: string;
    bgm: TrackName;
    speaker: SpeakerName;
    intro: DialogueLine[];
    hotspots: Hotspot[];
    talkOptions: TalkOption[];
  }
}
```

`TalkOption` supports progressive unlocking via optional `unlockedByTalk` (another talk option id that must be played first), `unlockedByHotspot` (a hotspot id that must be examined first), and `condition` predicates. [[src/engine/Private/TalkOptionUnlock.ts]] filters available options for the talk modal and triggers realization SFX and `notifDialogueUnlocked` banner notifications whenever a previously locked topic unlocks.

Hotspot `x,y,w,h` are percentages of the 960×540 `#game-screen`, not of the JPEG. `#scene-bg` uses `background-size: cover` and `background-position: center`, so a 1536×1024 (3:2) Case 2 plate is width-fitted and the extra height is cropped equally top and bottom. Place boxes on that cover crop (and keep Spanish/English geometry identical). Keep clickable regions above the dialogue strip when the object is fully visible there; a floor object that only exists under the 145px dialogue box still belongs on that object.

### 3. Testimony & Cross-Examination Schema ([[src/case/case1/Private/trial.ts]])

```typescript
testimony: {
  title: string;
  witness: string;
  bgm: TrackName;
  statements: Statement[];
}
```

### 4. Climax Schema ([[src/case/case1/Private/climax.ts]], [[src/case/case2/Private/climax.ts]])

```typescript
climax: {
  dialogue: DialogueLine[];
  presentTarget: EvidenceId[];
  stages?: { presentTarget: EvidenceId[]; successDialogue: DialogueLine[]; prompt?: string; requiredUpdateStage?: Partial<Record<EvidenceId, number>> }[];
  choices?: ChoicePrompt[];
  verdict: DialogueLine[];
  epilogue?: { bg: string; dialogue: DialogueLine[] };
}

interface ChoicePrompt {
  id: string;
  question: string;
  options: { id: string; label: string }[];
  correctId: string;
  successDialogue: DialogueLine[];
  failDialogue: DialogueLine[];
}
```

If `stages` is set, [[src/engine/Private/TrialClimax.ts]] walks them in order: a correct present plays that stage's `successDialogue` and opens the Court Record again, until the last stage. Optional `ClimaxStage.prompt` is the question shown on `#climax-present-prompt` and `#court-record-present-prompt` while that stage awaits a present ([[src/engine/Private/ClimaxPresentPrompt.ts]]); Case 3 fills all four (cuándo / dónde / quién / por qué). Case 1 omits `stages` and treats `presentTarget` + `verdict` as one step. When `choices` is set (Case 2), the final present plays that stage's `successDialogue` (wax mold + judge question), then [[src/engine/Private/TrialChoice.ts]] opens `#choice-prompt-modal` for each `ChoicePrompt`. Wrong answers apply penalties and reopen the same prompt; the last correct choice queues its `successDialogue` (verdict through Not Guilty), then confetti and epilogue. `climax.verdict` mirrors the last choice's `successDialogue`. [[src/engine/Private/TrialClimax.ts]] fires courtroom confetti and fades through black into `epilogue.bg`. Every epilogue line is stamped with that `bg` and `furniture: 'none'` so trial speaker cameras do not fire. After the last epilogue line the screen fades to black and `#case-complete-overlay` reports the case is finished. Case 1 omits `epilogue` and uses the same complete plate after the verdict confetti. Case 2 opens the epilogue with a narrator time-skip into the waiting room.

### 5. Adjournment ([[src/types/Private/script.ts]])

Optional `AdjournmentDefinition`: `nextLocation`, `unlockLocations`, next-day `requiredEvidence`, a `trial` (intro + two testimonies, no nested climax), and optional `next` for a third day. Climax always stays on `script.trial.climax`. [[src/engine/Private/TrialDayRouter.ts]] walks that chain (`trialDay` 1|2|3).

## Case 1 Contradiction Mapping

| Phase | Statement | Contradiction Logic | Required Evidence | Module Source |
|-------|-----------|---------------------|-------------------|---------------|
| **Testimony 1** | Witness claims Chapulín knocked out the guard with his lethal Chipote Chillón. | The Chipote is hollow soft vinyl and makes squeaky sounds; medical report proves the guard suffered a blunt fracture from heavy metal coins. | `chipote_chillon` or `informe_medico` | [[src/case/case1/Private/trial.ts#Testimony 1: Assault Weapon]] |
| **Testimony 2 (Part 1)** | Witness claims the culprit broke into the glass case from the outside. | Glass shards fell outward and Chiquitolina shrinking pills were found by the vent, showing the culprit shrank and broke the glass from inside. | `pastillas_chiquitolina` | [[src/case/case1/Private/trial.ts#Testimony 2: Escape Route]] |
| **Testimony 2 (Part 2)** | Witness claims security photo shows Chapulín running toward the front exit. | The chest logo shows inverted "HC", proving the photo captured a reflection in the mirror; culprit was running to the rear loading bay. | `foto_crimen` | [[src/case/case1/Private/trial.ts#Testimony 2: Escape Route]] |
| **Climax** | Prosecution demands physical proof of where the stolen artifact is right now. | Vinyl antennae detect enemy presence pointing straight at Tripaseca's jacket pocket where the Chicharra is concealed. | `antenitas_vinil` or `bolsa_dolares` | [[src/case/case1/Private/climax.ts#Climax Confrontation & Dilemma]] |

## Case 4 Assembly (`case4`)

Case 4 (`case4`) is specified in [[docs/specs/case-4-el-caso-del-hotel-buena-vista.md]]; scripts land in [[src/case/case4/index.ts]] when implemented. Investigation path:

| Day | Location chain | Notes |
|-----|----------------|-------|
| **1** | `detention` → `hotel_lobby` → `suite_304` → `hotel_terraza` | Maruja (`maruja_idle`) seals day with `candado_cadena`. |
| **2** | `sotano` → `suite_204` → `hotel_terraza_d2` → `delegacion` | Terrace rotates to Chómpiras (`chompiras_idle`); precinct delivers `informe_forense`. |
| **3** | `cava_sotano` → `hotel_lobby_d3` → `azotea` → `detention_d3` | Lobby rotates to Chimoltrufia (`chimoltrufia_idle`); detention revisit unlocks `nota_amenaza`. |

Day 1 reuses `detention`; day 3 revisits it as `detention_d3` (same gating pattern as Case 3). Cast rotation uses **new location ids** (`hotel_terraza_d2`, `hotel_lobby_d3`) instead of mutating the same scene — see [[docs/lessons-learned/location-cast-rotation.md]].

### Case 4 script fields (beyond Case 3)

| Field | Where | Purpose |
|-------|-------|---------|
| `pointTarget` | `Statement`, `ContradictionRule`, `ClimaxStage` | After a correct present, opens `#present-point-overlay` so the player clicks a zone on the evidence plate ([[docs/flows/present-point-flow.md]]). |
| `followUp` | `ContradictionRule` | Optional second beat after `pointTarget` success (extra dialogue before `updateEvidence`). |
| `openingPresent` | `testimony` | Day-3 trial opens with a mandatory present (`nota_amenaza`) before testimony 1. |
| `detailedView` | `EvidenceItem` in [[src/state/Private/EvidenceCatalogCase4.ts]] | Five items expose `#btn-evidence-examine` in the Acta ([[docs/flows/evidence-examine-flow.md]]). |

### Case 4 trial gating (`checkTrialReadiness`)

Readiness is inventory-only (see [[docs/lessons-learned/trial-gating-is-inventory-only.md]]). Last location of each day must hand over at least one `requiredEvidence` item:

| Day | `requiredEvidence` | Last location | Sealing item |
|-----|-------------------|---------------|--------------|
| **1** | `informe_policial`, `foto_crimen`, `plano_hotel`, `billetera_cuajinais`, `candado_cadena` | `hotel_terraza` | `candado_cadena` |
| **2** | `residuos_manos`, `casquillo_fogueo`, `registro_montacargas`, `informe_forense` | `delegacion` | `informe_forense` |
| **3** | `copa_vino`, `botella_vino`, `boleta_baccarat`, `baul_etiquetas`, `sello_lacre`, `nota_amenaza` | `detention_d3` | `nota_amenaza` |

`getEvidenceCatalog(lang, 'case4')` returns the Case 4 map alone (16 entries including `insignia_abogado`); Case 1 `foto_crimen` text must not leak.
