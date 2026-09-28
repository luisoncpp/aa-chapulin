---
id: audio
label: Audio Synthesis
color: "#ec4899"
icon: bolt
facades:
  - index.ts
architectureDoc: docs/architecture/audio-system.md
descriptionShort: "Synthesizes procedural sound effects and multitrack music"
---

# Audio Synthesis

Zero-asset Web Audio. `index.ts` exposes `soundEngine` and `midiComposer`. Soundtrack timing, timbre, and mix live in three nested modules that only `src/audio/Private/` imports: `Scheduler/` (lookahead clock), `Instruments/` (patches, including the original chip voices), and `Mixer/` (channel strips, session fade, generated reverb).
