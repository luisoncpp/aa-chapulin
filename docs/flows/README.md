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

| File | Scope | Trigger |
|------|-------|---------|
| [`investigation-flow.md`](file:///c:/Proyectos/ace-attorney-gemini/docs/flows/investigation-flow.md) | Crime Scene Exploration | Player clicks Examine, Talk, Move, or Hotspots during investigation. |
| [`trial-cross-examination-flow.md`](file:///c:/Proyectos/ace-attorney-gemini/docs/flows/trial-cross-examination-flow.md) | Courtroom Cross-Examination | Player navigates statements, clicks "Presionar", presents evidence, or reaches verdict. |
| [`dialogue-and-cutin-flow.md`](file:///c:/Proyectos/ace-attorney-gemini/docs/flows/dialogue-and-cutin-flow.md) | Dialogue & Animation Sequencing | Engine queues dialogue lines, types text, displays cut-in shouts, and shakes screen. |
| [`audio-synthesis-flow.md`](file:///c:/Proyectos/ace-attorney-gemini/docs/flows/audio-synthesis-flow.md) | Web Audio & MIDI Lifecycle | Player clicks Start Game splash, triggers SFX, or soundtrack track transitions occur. |
