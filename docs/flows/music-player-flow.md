# Title-Screen Music Player Flow

Operational guide for the splash-only procedural soundtrack jukebox.

## 1. Trigger
- Player clicks `#btn-music-player` (♫) on `#start-splash-overlay`, or closes the overlay with **Escape** or **X**.

## 2. Entry Point
- `bindMusicPlayer()` in [[src/engine/Private/MusicPlayer/index.ts]] from [[src/engine/Private/GameEngine.ts#Initialization & Bootstrapping]]
- `listSoundtrack()` in [[src/audio/index.ts]] for the numbered track list

## 3. Step-by-Step Sequence

### Open
1. Player clicks `#btn-music-player`.
2. `MusicPlayerController.open()` removes `.hidden` from `#music-player-modal`, calls `soundEngine.ensureActive()`, renders the playlist, and starts an rAF seek-bar refresh loop.

### Play / Pause / Stop
1. **Play** — `ensureActive()`; if the selected row matches a paused track, `midiComposer.resumePaused()`; otherwise `midiComposer.playTrack(id)` from step 0.
2. **Pause** — `midiComposer.pause()` clears the interval but keeps `currentTrack` and `step`.
3. **Stop (transport)** — if a track is loaded, `pause()` then `seekToStep(0)` so the row, now-playing label, and seek bar stay usable while silent. Does **not** call `midiComposer.stop()`.
4. **Next / Prev** — wrap the selected index and call `playTrack()` immediately.
5. **List click** — plays that composition from 0; clicking the current row while paused restarts it.
6. **Seek bar** — click or drag maps pointer X to `midiComposer.seekToStep()` (sequencer step, not AudioBuffer time).

### Close
1. Escape, **X**, or toggling the notes button calls `MusicPlayerController.close()`.
2. Overlay hides, rAF loop stops, `midiComposer.stop()` — title screen stays silent.
3. Starting any case via [[src/engine/Private/EngineLaunch.ts]] also calls `stopMusicPlayerIfOpen()` so jukebox playback cannot fight the first scene `bgm` cue.

## 4. Reads
- `TRACK_CATALOG` via `listSoundtrack()`
- `midiComposer.getPlaybackSnapshot()`
- `i18n.t.trackTitle` and `musicPlayerTitle`

## 5. Writes
- `midiComposer.step`, `currentTrack`, `isPlaying`, timer
- Music player DOM: list highlight, now-playing label, seek fill, transport disabled state

## 6. Side Effects
- Procedural BGM through the existing [[src/audio/Private/MidiMusicComposer.ts]] sequencer (loops per track definition).

## 7. Files to Inspect
- [[src/engine/Private/MusicPlayer/index.ts]]
- [[src/engine/Private/MusicPlayer/MusicPlayerController.ts]]
- [[src/audio/Private/SoundtrackPlaylist.ts]]
- [[index.html]] (`#start-splash-overlay` children only — no in-game HUD control)

## 8. Common Failure Modes
- **Seek appears to do nothing with no track loaded** — `seekToStep` requires an active `currentTrack`; select a row or press Play first. After transport **Stop**, the track stays loaded at step 0 and the bar remains scrubbable; only **Close** or starting a case clears `currentTrack` via `midiComposer.stop()`.
- **Victory + epilogue duplicate rows** — `listSoundtrack()` skips later catalog aliases that share the same `TrackDefinition` object; only `victory` appears in the jukebox.
