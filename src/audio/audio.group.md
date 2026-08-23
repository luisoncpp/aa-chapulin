---
id: audio
label: Audio Synthesis
color: "#ec4899"
icon: bolt
facades:
  - index.ts
architectureDoc: docs/architecture/audio-system.md
descriptionShort: "Synthesizes procedural sound effects and multitrack chiptune music"
---

# Audio Synthesis

Provides a zero-asset procedural sound engine and multitrack chiptune music sequencer built on the Web Audio API. Exposes singleton instances `soundEngine` and `midiComposer` via [[index.ts]] for playing courtroom sound effects and background themes. Internally delegates synthesis to specialized court, novelty, and MIDI sequencing modules in `Private/`.
