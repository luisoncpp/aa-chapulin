# Future Development Roadmap & Architecture Plan

Strategic engineering and content roadmap for **El Chapulín Colorado: Ace Attorney**.

## Phase 1: Deep Module Modularization & TypeScript Migration (COMPLETED)

Successfully refactored monolithic JavaScript files into type-safe deep modules according to [`GUIDELINES.md`](file:///c:/Proyectos/ace-attorney-gemini/docs/GUIDELINES.md):

1. **Strict File & Function Constraints**:
   - Every file strictly < 200 lines (all files < 180 lines).
   - Every function strictly <= 30 lines.
   - Max 3 parameters per function.
   - Simulated named parameter comments for hardcoded arguments (`/*isTrialPresent=*/true`) and callbacks (`setTimeout(/*hideSplash*/ () => {}, /*delayInMs=*/400)`).
   - Return-early control flow patterns across all modules.

2. **Deep Module Subsystems**:
   - `src/types/`: Domain contracts (`DialogueLine`, `Hotspot`, `Statement`, `ContradictionRule`, `EvidenceItem`, `TrackDefinition`).
   - `src/audio/`: Encapsulated Web Audio API synthesizer (`SoundEngine`, `CourtSfx`, `NoveltySfx`, `MidiMusicComposer`, `TrackCatalog`).
   - `src/state/`: `GameStateManager` and `EvidenceCatalog`.
   - `src/case/`: Declarative case data (`case1_investigation`, `case1_trial`, `case1_climax`).
   - `src/engine/`: `GameEngine` coordinator, `Typewriter`, `VisualEffects`, `ModalManager`, `InvestigationController`, `TrialController`, `EngineEventBinder`, `DomElements`.
   - `src/main.ts`: Application entrypoint.


## Phase 2: Automated Testing Suite (IN PROGRESS)

Vitest covers state, contradictions, investigation, engine, i18n, the character record, save migration, and Case 1/2 scripts. Remaining: raise branch coverage to 90%, `npx fallow audit`, browser playtest of Case 2.

## Phase 3: Episode 2 & Gameplay Extensions

1. **Case 2: "El Juicio del Chómpiras — El Asalto de las Dos Caras"** — **content implemented** (bilingual scripts in [[src/case/Private/case2_script.ts]], dedicated poses/BGs/icons via [[process_case2_assets.py]]). Spec: [[docs/specs/case-2-el-juicio-del-chompiras.md]]. Remaining polish: split [[src/engine/Private/GameEngine.ts]] / [[src/engine/Private/TrialController.ts]] under 200 lines, coverage/fallow, playtest. Unique Case 2 art is **not** a TODO.

2. **Save / Load Persistence** — implemented (`localStorage`, including `caseId` / `trialDay`).

3. **Gamepad & Keyboard Accessibility** — still planned:
    - Full keyboard shortcuts (`Z`/`Enter` to advance, `X`/`Esc` to back, `C` to Court Record, `P` to Present).

> Canonical Case 2 title: "El Juicio del Chómpiras — El Asalto de las Dos Caras". Older "Rascabuches" name is obsolete.

## Phase 4: Episode 3 (IMPLEMENTED)

**Case 3: "El Juicio del Doctor Chapatín — La Noche del Grito"** — scripts, engine hooks, and art pipeline in [[src/case/case3/index.ts]], spec [[docs/specs/case-3-la-noche-del-grito.md]]. Press-gated statements, multi-stage evidence descriptions, third trial day via `adjournment.next`, splash `#btn-start-case3`, debug `?case=3&trial=2|3`.

## Phase 5: Episode 4 (IMPLEMENTED — catalog & platform hooks)

**Case 4: "Crimen en el Gran Hotel — El Caso del Hotel Buena Vista"** — spec [[docs/specs/case-4-el-caso-del-hotel-buena-vista.md]]. **Implemented in this phase:** isolated evidence catalog ([[src/state/Private/EvidenceCatalogCase4.ts]]), `detailedView` / `pointTarget` types, Present & Point and Acta examine DOM/CSS, splash `#btn-start-case4`, i18n `btnStartCase4`, debug `?case=4`. **Pending:** bilingual scripts in [[src/case/case4/index.ts]], trial/investigation content, asset pipeline for hotel cast and examine plates.

## Phase 6: Series Arc — Case 1 rebuild & Case 5 finale (IN PROGRESS)

Connects the five episodes under one through-line without modifying cases 0, 2, 3 or 4, which stay byte-identical. Three planning docs, spoiler-gated:

1. [[docs/plans/arco-general-el-tomo-trece.md]] — canonical arc, non-modification contract, and the four loose ends the existing specs already contain. Read this first; the two case plans depend on it.
2. [[docs/plans/case-1-reconstruccion-narrativa.md]] — rebuilds Case 1 into two investigations and two trials with the mechanics invented for Cases 3 and 4. Replaces [[docs/specs/case-1-turnabout-red-grasshopper.md]] under the same filename and `caseId`. **Implemented:** the full bilingual rewrite ([[src/case/case1/index.ts]]), the isolated Case 1 catalogue pair, the Acta de Personajes ([[docs/flows/character-record-flow.md]]), conditional hotspots, save schema v2 with a v1 migration, and the test suites for all of it. **Pending:** the art called for in spec §18 — three backgrounds, the Alma Negra sprite family, six examine plates, five evidence icons and seven profile icons — plus a timed playthrough against the 85–95 minute target.
3. [[docs/plans/case-5-el-tomo-trece.md]] — new final episode, three days, Don Ramón in the dock and El Chapulín as defense counsel. No new engine work expected beyond archived cross-case Court Record entries.

Case 1 is implemented and green against the test suite; Case 5 has not started.
