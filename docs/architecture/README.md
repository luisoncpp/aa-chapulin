# Architecture Docs

Canonical technical guides — the single source of truth for each subsystem's design, data model, and behavior rules.

Covers implemented architecture. For future architectural plans and roadmaps, check [`docs/plans/`](file:///c:/Proyectos/ace-attorney-gemini/docs/plans/).

## Subsystem Index

| File | Subsystem | CodeChart Group | Notes |
|------|-----------|-----------------|-------|
| [[docs/architecture/game-engine.md\|game-engine.md]] | Presentation & Game Engine | [[src/engine/engine.group.md\|engine]] | DOM rendering, dialogue queue, typewriter FX, sprite stage, modals, and screen FX ([[src/engine/index.ts]]). |
| [[docs/architecture/game-state.md\|game-state.md]] | Game State & Inventory | [[src/state/state.group.md\|state]] | Singleton `gameState`, Court Record, penalty meter, investigation readiness, and progress flags ([[src/state/index.ts]]). |
| [[docs/architecture/audio-system.md\|audio-system.md]] | Audio & Music Synthesis | [[src/audio/audio.group.md\|audio]] | Web Audio API sound synthesis, procedural SFX generator, and 4-channel procedural MIDI tracker ([[src/audio/index.ts]]). |
| [[docs/architecture/case-scripting.md\|case-scripting.md]] | Case Narrative & Trial Script | [[src/case/case.group.md\|case]] | Dialogue graph, hotspot definitions, testimony schemas, contradictions, and climax scripting ([[src/case/index.ts]]). |
| [[docs/architecture/i18n-system.md\|i18n-system.md]] | Internationalization (i18n) | [[src/i18n/i18n.group.md\|i18n]] | Runtime Spanish/English localization, UI translation dictionaries, and reactive language switching ([[src/i18n/index.ts]]). |
| [[docs/architecture/asset-pipeline.md\|asset-pipeline.md]] | Asset Extraction & Verification | [[pipeline.group.md\|asset_pipeline]] | Automated magenta chroma-keying, sprite grid slicing, and asset integrity verification ([[process_assets.py]], [[process_case2_assets.py]], [[process_case3_assets.py]], [[process_case4_assets.py]], [[verify_assets.py]]). |
