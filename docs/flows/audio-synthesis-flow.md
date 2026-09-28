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

### Procedural Music Sequencer
1. `midiComposer.playTrack(trackName)` looks up [[src/audio/Private/TrackCatalog.ts]]. The same `TrackDefinition` under another name (an alias) keeps the current step.
2. A new composition fades the previous mix session (~30 ms) and starts [[src/audio/Private/Scheduler/index.ts]]. Every 25 ms the scheduler queues each 16th whose audio-clock time falls inside the next 100 ms.
3. [[src/audio/Private/StepRenderer.ts]] reads that step. `0` and `HOLD` (`-1`) schedule nothing; `HOLD` lengthens the note that came before it. The patch comes from `track.instruments` or, if that channel is omitted, from `chip_bass` / `chip_lead` / `chip_pad`.
4. [[src/audio/Private/Instruments/index.ts]] starts the voice at the scheduled time and connects it to [[src/audio/Private/Mixer/index.ts]]. Drums use the same bus. The mix goes to `bgmGain`, with an optional send into a generated reverb. Legacy chip patches send none.
5. `stop()` stops the scheduler and fades the session so the lookahead's already-queued notes do not play into the next cue. The reverb tail is left alone.

### Trial Reveal Cue
1. A correct contradiction queues its `successDialogue`.
2. The first reveal line carries `bgm: 'objection'`, switching away from the testimony loop before the objection is explained.
3. If the contradiction has a follow-up turnabout, its first line carries `bgm: 'pursuit'` and takes over for the remainder of that reveal.
4. After the witness is cornered, the "here is what really happened" narration — the case's central truth argued at length — carries `bgm: 'truth'` on its first line instead. `truth` ("Atando Cabos") is reserved for the big reveal: a 60s B minor loop that opens on a 16th-note ostinato alone, brings in the theme at bar 5, climbs through a rising sequence, and peaks at 17–20, about 40 seconds in. Cue it on the first reveal line so the build has room to work. It turns back onto its own dominant and never resolves, so the release still belongs to `victory` at the verdict. When court business resumes, switch back to the testimony/cross-exam loop. To land the shout in a silent room first, give the objection line `bgm: 'silence'` and put `truth` on the next line.
5. `suspense` is never a reveal cue: it opens the pre-verdict climax dilemma (see [[docs/flows/trial-cross-examination-flow.md]]).
6. **The block hands the cue back.** The engine never ends `objection` or `pursuit` on its own; the next `playTrack` call is `startTestimony` for the following testimony, which may be twenty lines later. The line where routine court business resumes inside the success or follow-up block must stamp the testimony's own `bgm` again, or the dramatic loop rides through the witness dismissal and the next swearing-in. A follow-up block with no `bgm` inherits the parent cue, so its own peak declares one explicitly. Last chain of the last day is exempt: it hands over to the climax, whose first line declares the cue.

### Game Over Cue
1. A wrong present (cross-examination, climax present, climax choice, or Present & Point) calls `applyPenaltyEffects`; `takePenalty()` empties the health bar.
2. `queuePenaltyDialogue` in [[src/engine/Private/TrialPenalty.ts]] appends the guilty block — the engine's default judge/defense lines, or the case's `trial.climax.guiltyDialogue`.
3. `gameOverLines` stamps `bgm: GAME_OVER_BGM` (`game_over`, an alias of the `detention_center` elegy) on the **first** line of that block, so the music turns somber exactly when CULPABLE is pronounced instead of riding the cross-examination loop into the verdict. A scripted guilty block that declares its own `bgm` keeps it.
4. [[src/engine/Private/DialogueFlow.ts]] applies the cue via `midiComposer.playTrack`.
5. `onRestartTrial` / `showGameOverModal` resets health and calls `startTrial()`; the trial intro's `bgm: 'trial'` restores the courtroom loop.
6. A press hint never replaces the verdict: `onPresentPenalty` branches to the guilty block before `maybeQueuePressHint` when `gameOver` is set.

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
- `midiComposer` audible step (via `getPlaybackSnapshot()`)

## 6. Side Effects
- Real-time audio signal generation to default system sound output.

## 7. Files to Inspect
- [[src/audio/Private/SoundEngine.ts]]
- [[src/audio/Private/MidiMusicComposer.ts]]
- [[src/audio/Private/Scheduler/index.ts]]
- [[src/audio/Private/Instruments/index.ts]]
- [[src/audio/Private/Mixer/index.ts]]
- [[src/audio/Private/CourtSfx.ts]]
- [[src/audio/Private/NoveltySfx.ts]]
- [[src/audio/Private/TrackCatalog.ts]]

## 8. Common Failure Modes
- **Audio Suspended on Page Load**: If the user has not interacted with the DOM, browser policies suspend `AudioContext`. Resolved by the mandatory start splash card.
- **Audio Overload / Distortion**: Addressed by fixed gain stages (`masterGain` 0.85, `bgmGain` 0.65, `sfxGain` 0.85) and strict ADSR gain ramps preventing click/pop artifacts.
