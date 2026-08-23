# Zero-Asset Procedural Audio Synthesis

## Context
In retro web game development, packaging dozens of `.wav` and `.mp3` files creates asset management overhead, bandwidth penalties, cross-origin playback issues, and latency when triggering rapid sound effects (such as typewriter blips or sudden desk slams).

## What Was Learned

### 1. Web Audio Waveform Synthesis Replaces Static SFX
Pure Web Audio oscillators (`square`, `triangle`, `sawtooth`, `sine`) combined with basic math envelopes (linear and exponential ramps) and dynamic Biquad filters can replicate classic Capcom GBA/DS 16-bit sound effects identically:
- **Typewriter chirp**: A square wave dropping from ~540 Hz to 360 Hz over 40ms with a tiny random pitch offset sounds virtually identical to Ace Attorney text sound.
- **Desk slam**: A lowpass filtered sawtooth oscillator dropping from 120 Hz to 25 Hz with a rapid decay creates physical impact without sample files.
- **Wood gavel impact**: Combining a low triangle wave thud with a 950 Hz bandpass-filtered noise buffer replicates resonant wood strikes.

### 2. Procedural MIDI Step-Tracking Beats Audio Loops
Writing a 4-channel step sequencer (Bass, Lead, Chords, Drums) in JavaScript:
- **File size**: Takes only ~300 lines of code (~13 KB of JS) for 8 complete full-length soundtrack themes compared to 20-30 MB of compressed MP3 files.
- **Dynamic Adaptability**: Tempo (BPM), instrumentation, and notes can be modulated in real time without audio re-encoding.
- **Zero Loop Glitches**: Seamless looping without buffer stitch artifacts.

### 3. Key Rule for Web Audio Envelopes
Always ramp gains to a non-zero minimum (e.g. `0.0001`) before calling `.stop()`. Cutting an active oscillator to zero instantly causes audible clicking/popping artifacts due to abrupt DC offset shifts.
