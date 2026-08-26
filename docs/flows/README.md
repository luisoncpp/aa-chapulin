# Flow Docs

Operational guides organized by user or system action: "when this happens, everything that follows is this."

## Purpose

Use `docs/flows/` when you need to follow behavior end-to-end from a trigger instead of from a subsystem boundary.

This folder is for:
- debugging a concrete user action
- understanding which functions run in sequence
- finding which state is read, written, or only projected for UI
- locating side effects quickly without codebase-wide search

## Flow Index

| File | Scope | Trigger | Relevant Modules |
|------|-------|---------|------------------|
| [[docs/flows/investigation-flow.md\|investigation-flow.md]] | Crime Scene Exploration | Player clicks Examine, Talk, Move, or Hotspots during investigation. | [[src/engine/Private/InvestigationController.ts]], [[src/state/Private/GameStateManager.ts]] |
| [[docs/flows/trial-cross-examination-flow.md\|trial-cross-examination-flow.md]] | Courtroom Cross-Examination | Player navigates statements, clicks "Presionar", presents evidence, or reaches verdict. | [[src/engine/Private/TrialController.ts]], [[src/case/Private/case1_trial.ts]] |
| [[docs/flows/dialogue-and-cutin-flow.md\|dialogue-and-cutin-flow.md]] | Dialogue & Animation Sequencing | Engine queues dialogue lines, types text, displays cut-in shouts, and shakes screen. | [[src/engine/Private/GameEngine.ts]], [[src/engine/Private/Typewriter.ts]], [[src/engine/Private/VisualEffects.ts]] |
| [[docs/flows/audio-synthesis-flow.md\|audio-synthesis-flow.md]] | Web Audio & MIDI Lifecycle | Player clicks Start Game splash, triggers SFX, or soundtrack track transitions occur. | [[src/audio/Private/SoundEngine.ts]], [[src/audio/Private/MidiMusicComposer.ts]] |
| [[docs/flows/language-switching-flow.md\|language-switching-flow.md]] | Runtime Language Switching | Player toggles language in HUD or splash card; state, script, catalog, and UI update. | [[src/i18n/Private/I18nService.ts]], [[src/engine/Private/GameEngine.ts]], [[src/engine/Private/UiLanguageUpdater.ts]] |
