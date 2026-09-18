# BGM seek is a sequencer step, not AudioBuffer time

The procedural MIDI composer has no decoded audio file and no `currentTime` on a buffer source. Playback is a `setInterval` advancing an integer `step` index into `TrackDefinition` arrays.

When building transport UI (jukebox seek bar, future scrubbing), map the pointer ratio to `seekToStep(n)` and read progress from `getPlaybackSnapshot()` (`step % length`). Do not call Web Audio `AudioBuffer` APIs or assume sub-step sample accuracy — the next audible change happens on the following 16th-note tick.
