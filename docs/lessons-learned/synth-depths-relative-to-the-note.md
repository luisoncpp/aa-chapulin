# Synth depths must be relative to the note

A patch that sounds right on the scratch note it was tuned on can sound broken in a track, because absolute amounts do not scale with pitch or tempo. All of these passed "renders without throwing" and sounded wrong in real tracks:

- **Vibrato in Hz.** ±6 Hz is 20 cents at C5 and a full semitone at G2. Give depth in cents, or cap a legacy Hz depth in cents.
- **Pitch scoops.** A 180-cent bend on every note reads as out of tune, not as brass. Keep an automatic scoop under a quarter tone and about 30 ms.
- **Filter envelopes with no sustain.** Ramping back to `base` turns every held brass note into a "wah" that ends muffled. Settle on a separate `sustain` cutoff.
- **Fourier-built waves with `disableNormalization`.** The textbook pulse series describes a 0-to-1 pulse, half the swing of the built-in ±1 square, so a pulse lead came out 7–10 dB quieter than the square it replaced. Scale custom waves to ±1.
- **Struck instruments cut to one 16th.** A piano released at the step sounds like a blip. Let it ring until the channel's next note, and cap how long.

Test these by rendering a note on `FakeAudioContext` and reading the scheduled `AudioParam` events: detune range, the last filter cutoff, the vibrato gain connected to `frequency` or `detune`, the PeriodicWave coefficients summed into a waveform. Measure them in musical units (cents, relative level), at the extremes of the register a track actually uses.
