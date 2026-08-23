# Architecture Docs

Canonical technical guides — the single source of truth for each subsystem's design, data model, and behavior rules.

Covers implemented architecture. For future architectural plans and roadmaps, check [`docs/plans/`](file:///c:/Proyectos/ace-attorney-gemini/docs/plans/).

## Subsystem Index

| File | Subsystem | Notes |
|------|-----------|-------|
| [`game-engine.md`](file:///c:/Proyectos/ace-attorney-gemini/docs/architecture/game-engine.md) | Presentation & Game Engine | DOM rendering, dialogue queue, typewriter FX, sprite stage, modals, and screen FX (`js/engine.js`). |
| [`game-state.md`](file:///c:/Proyectos/ace-attorney-gemini/docs/architecture/game-state.md) | Game State & Inventory | Singleton `GameState`, Court Record, penalty meter, investigation readiness, and progress flags (`js/game_state.js`). |
| [`audio-system.md`](file:///c:/Proyectos/ace-attorney-gemini/docs/architecture/audio-system.md) | Audio & Music Synthesis | Web Audio API sound synthesis, procedural SFX generator, and 4-channel procedural MIDI tracker (`js/audio_engine.js`, `js/midi_music.js`). |
| [`case-scripting.md`](file:///c:/Proyectos/ace-attorney-gemini/docs/architecture/case-scripting.md) | Case Narrative & Trial Script | Dialogue graph, hotspot definitions, testimony schemas, contradictions, and climax scripting (`js/case_script.js`). |
| [`asset-pipeline.md`](file:///c:/Proyectos/ace-attorney-gemini/docs/architecture/asset-pipeline.md) | Asset Extraction & Verification | Automated magenta chroma-keying, sprite grid slicing, and asset integrity verification (`process_assets.py`, `verify_assets.py`). |
