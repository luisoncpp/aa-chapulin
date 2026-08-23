# Investigation Flow

Operational guide for player actions during the crime scene investigation phase.

## 1. Trigger
- Player starts the game, moves to a scene (`#btn-inv-move`), clicks examine mode (`#btn-inv-examine`), or selects a talk topic (`#btn-inv-talk`).

## 2. Entry Point
- [`gameEngine.startInvestigation(location)`](file:///c:/Proyectos/ace-attorney-gemini/js/engine.js#L428)
- [`gameEngine.startExamineMode()`](file:///c:/Proyectos/ace-attorney-gemini/js/engine.js#L484)
- [`gameEngine.openTalkMenu()`](file:///c:/Proyectos/ace-attorney-gemini/js/engine.js#L511)

## 3. Step-by-Step Sequence

### Scene Transition
1. `gameState.currentLocation` is updated to the target location (`'museum'` or `'detention'`).
2. `locationBannerEl` text updates to current scene title.
3. `bgEl` background style switches to scene image (`bg_museum.jpg` or `bg_detention.jpg`).
4. `midiComposer.playTrack(scene.bgm)` transitions background music (`'investigation'` or `'suspense'`).
5. `renderHotspots()` injects percentage-based clickable regions into `#hotspots-container`.
6. `queueDialogue(scene.intro)` presents the opening narrative dialogue.

### Examination & Hotspot Click
1. Player clicks "🔍 Examinar" (`#btn-inv-examine`).
2. `#hotspots-container` receives class `.visible-hotspots` (enabling pointer events on hotspots).
3. Active character sprite is hidden (`hideCharacter()`) so the background is clear.
4. Player moves cursor over a hotspot: `#examine-tooltip` updates position and text label.
5. Player clicks hotspot:
   - SFX `'realization'` plays.
   - `exitExamineMode()` disables hotspot hover layer.
   - Hotspot dialogue array is queued via `queueDialogue()`.
   - Any `line.addEvidence` adds the item to `gameState.inventory` and shows `#game-notification`.
   - On completion callback, `checkInvestigationProgress()` verifies if trial is unlocked.

### Talk Option Click
1. Player clicks "💬 Hablar" (`#btn-inv-talk`).
2. `#talk-options-modal` opens with buttons for each topic defined in `scene.talkOptions`.
3. Player clicks a topic: modal closes, topic dialogue queues, and evidence is granted if scripted.
4. On completion callback, `checkInvestigationProgress()` runs.

### Unlocking & Launching Trial
1. `gameState.checkTrialReadiness()` verifies the 5 mandatory clues are collected.
2. If ready, `#btn-inv-trial` loses `.disabled`, gains `.pulse-glow`, and displays a ready notification.
3. Player clicks "⚖️ Ir a Juicio": `startTrial()` is invoked.

## 4. Reads
- `CASE_SCRIPT.investigation[location]`
- `gameState.inventory`
- `gameState.flags`

## 5. Writes
- `gameState.currentLocation`
- `gameState.inventory` (via `addEvidence`)
- `gameState.flags.ready_for_trial`

## 6. Side Effects
- DOM HUD visibility toggle (investigation vs examine vs trial controls).
- Audio synthesizer track change and sound effects.
- Notification banner sliding animations.

## 7. Files to Inspect
- [`js/engine.js`](file:///c:/Proyectos/ace-attorney-gemini/js/engine.js) (lines 428–550)
- [`js/game_state.js`](file:///c:/Proyectos/ace-attorney-gemini/js/game_state.js) (lines 89–129)
- [`js/case_script.js`](file:///c:/Proyectos/ace-attorney-gemini/js/case_script.js) (lines 10–150)

## 8. Common Failure Modes
- **Trial button remains disabled**: Player missed one of the 5 required clues (`chipote_chillon`, `pastillas_chiquitolina`, `antenitas_vinil`, `informe_medico`, `foto_crimen`).
- **Hotspots unclickable**: `isExamineActive` is false; user must click "🔍 Examinar" button first.
