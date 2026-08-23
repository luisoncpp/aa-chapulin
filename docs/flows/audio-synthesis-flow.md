# Audio & Music Synthesis Flow

Operational guide for the procedural Web Audio API synthesizer, MIDI music tracker, and audio lifecycle management.

## 1. Trigger
- Player clicks "COMENZAR JUICIO (PLAY)" on the start splash screen, clicks the audio mute button, clicks anywhere on the screen, or game events request SFX or soundtrack track playback.

## 2. Entry Point
- [`soundEngine.init()`](file:///c:/Proyectos/ace-attorney-gemini/js/audio_engine.js#L16) / [`soundEngine.ensureActive()`](file:///c:/Proyectos/ace-attorney-gemini/js/audio_engine.js#L59)
- [`soundEngine.toggleMute()`](file:///c:/Proyectos/ace-attorney-gemini/js/audio_engine.js#L67)
- [`midiComposer.playTrack(trackName)`](file:///c:/Proyectos/ace-attorney-gemini/js/midi_music.js#L295)
- [`soundEngine.[sfxMethod]()`](file:///c:/Proyectos/ace-attorney-gemini/js/audio_engine.js#L78)

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
   - Looks up track definition (BPM, step length, Bass, Lead, Chords, Drums).
   - Computes 16th-note step interval: `stepTimeMs = (60000 / bpm) / 4`.
   - Starts interval timer advancing `step` index every `stepTimeMs` milliseconds:
     - **Bass**: Synthesizes triangle wave note with ADSR envelope through `bgmGain`.
     - **Lead**: Synthesizes square wave note through `bgmGain`.
     - **Chords**: Synthesizes sawtooth pad note through `bgmGain`.
     - **Drums**: Synthesizes Kick (sine sweep), Snare (noise buffer), or Hi-Hat (highpass noise).
     - Loops seamlessly when `step % track.length` wraps around.

### On-Demand SFX Generation
1. Game Engine calls specific SFX method (e.g. `playGavel()`):
   - Ensures `ctx.state` is active.
   - Instantiates transient oscillators/noise buffer sources and gain nodes.
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
- `midiComposer.getTracks()`
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
- [`js/audio_engine.js`](file:///c:/Proyectos/ace-attorney-gemini/js/audio_engine.js) (complete file)
- [`js/midi_music.js`](file:///c:/Proyectos/ace-attorney-gemini/js/midi_music.js) (complete file)

## 8. Common Failure Modes
- **Audio Suspended on Page Load**: If the user has not interacted with the DOM, browser policies suspend `AudioContext`. Resolved by the mandatory start splash card.
- **Audio Overload / Distortion**: Addressed by fixed gain stages (`masterGain` 0.85, `bgmGain` 0.65, `sfxGain` 0.85) and strict ADSR gain ramps preventing click/pop artifacts.
