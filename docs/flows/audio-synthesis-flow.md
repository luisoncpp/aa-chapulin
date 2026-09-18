# Audio & Music Synthesis Flow

Operational guide for the procedural Web Audio API synthesizer, MIDI music tracker, and audio lifecycle management.

## 1. Trigger
- Player clicks "COMENZAR JUICIO (PLAY)" on the start splash screen, clicks the audio mute button, clicks anywhere on the screen, or game events request SFX or soundtrack track playback.

## 2. Entry Point
- `soundEngine.init()` / `soundEngine.ensureActive()` in [[src/audio/Private/SoundEngine.ts#AudioContext Lifecycle & Gains]]
- `soundEngine.toggleMute()` in [[src/audio/Private/SoundEngine.ts#Mute Control & State]]
- `midiComposer.playTrack(trackName)` in [[src/audio/Private/MidiMusicComposer.ts#Sequencer Loop & Timing]]
- `soundEngine.playSFX(sfxName)` in [[src/audio/Private/SoundEngine.ts#SFX Routing & Dispatcher]]

## 3. Step-by-Step Sequence

### AudioContext Initialization & Unlock
1. User clicks `#btn-start-game` or any interactive element.
2. `soundEngine.init()` executes:
   - Instantiates `window.AudioContext`.
   - Creates `masterGain` (gain = 0.85) -> connects to `ctx.destination`.
   - Creates `bgmGain` (gain = 0.65) -> connects to `masterGain`.
   - Creates `sfxGain` (gain = 0.85) -> connects to `masterGain`.
   - Calls `ctx.resume()` to unlock suspended state.

### Procedural Music Sequencer Loop
1. `midiComposer.playTrack(trackName)`:
   - Halts any existing tracker timer via `clearInterval()`.
   - Looks up track definition from [[src/audio/Private/TrackCatalog.ts]] (BPM, step length, Bass, Lead, Chords, Drums).
   - Computes 16th-note step interval: `stepTimeMs = (60000 / bpm) / 4`.
   - Starts interval timer advancing `step` index every `stepTimeMs` milliseconds:
     - **Bass**: Synthesizes triangle wave note with ADSR envelope through `bgmGain`.
     - **Lead**: Synthesizes square wave note through `bgmGain`.
     - **Chords**: Synthesizes sawtooth pad note through `bgmGain`.
     - **Drums**: Synthesizes Kick (sine sweep), Snare (noise buffer), or Hi-Hat (highpass noise).
   - Loops seamlessly when `step % track.length` wraps around.
   - If a new cue resolves to a catalog alias of the currently playing `TrackDefinition`, the composer keeps the existing timer and step position. This preserves the victory composition while the verdict scene fades into a waiting-room epilogue.

### Trial Reveal Cue
1. A correct contradiction queues its `successDialogue`.
2. The first reveal line carries `bgm: 'objection'`, switching away from the testimony loop before the objection is explained.
3. If the contradiction has a follow-up turnabout, its first line carries `bgm: 'pursuit'` and takes over for the remainder of that reveal.
4. After the witness is cornered, the "here is what really happened" narration — the case's central truth argued at length — carries `bgm: 'truth'` on its first line instead. `truth` ("Cerrando el Cerco") is reserved for the big reveal: a ~38s E minor 5/4 loop that opens on a heartbeat kick and hollow fifths, then tightens through a chromatic climb to an apex near the end. Cue it on the first reveal line so the build has room to work — the payoff bar is ~33 seconds in, so a late cue wastes the shape. It loops back onto its own dominant and never resolves, so the release still belongs to `victory` at the verdict. When court business resumes, switch back to the testimony/cross-exam loop.
5. `suspense` is never a reveal cue: it opens the pre-verdict climax dilemma (see [[docs/flows/trial-cross-examination-flow.md]]).

### On-Demand SFX Generation
1. Game Engine calls specific SFX method (e.g. `playGavel()`):
   - Ensures `ctx.state` is active.
   - Instantiates transient oscillators/noise buffer sources and gain nodes via [[src/audio/Private/CourtSfx.ts]] or [[src/audio/Private/NoveltySfx.ts]].
   - Applies frequency sweeps and linear gain ramps (`setValueAtTime`, `linearRampToValueAtTime`).
   - Connects node chain to `sfxGain`.
   - Calls `source.start(t)` and `source.stop(t + duration)`.
   - Nodes are automatically garbage collected by the browser engine upon completion.

### Mute Toggle
1. User clicks `#btn-audio-toggle`:
   - Flips `soundEngine.isMuted`.
   - Sets `masterGain.gain` to `0` (muted) or `0.85` (unmuted).
   - Updates button icon (`🔇` / `🔊`).

## 4. Reads
- `TRACK_CATALOG` in [[src/audio/Private/TrackCatalog.ts]]
- `soundEngine.isMuted`
- `soundEngine.ctx.currentTime`

## 5. Writes
- `soundEngine.ctx`
- `soundEngine.masterGain.gain`
- `midiComposer.currentTrack`
- `midiComposer.step`
- `midiComposer.timer`

## 6. Side Effects
- Real-time audio signal generation to default system sound output.

## 7. Files to Inspect
- [[src/audio/Private/SoundEngine.ts]]
- [[src/audio/Private/MidiMusicComposer.ts]]
- [[src/audio/Private/CourtSfx.ts]]
- [[src/audio/Private/NoveltySfx.ts]]
- [[src/audio/Private/TrackCatalog.ts]]

## 8. Common Failure Modes
- **Audio Suspended on Page Load**: If the user has not interacted with the DOM, browser policies suspend `AudioContext`. Resolved by the mandatory start splash card.
- **Audio Overload / Distortion**: Addressed by fixed gain stages (`masterGain` 0.85, `bgmGain` 0.65, `sfxGain` 0.85) and strict ADSR gain ramps preventing click/pop artifacts.
