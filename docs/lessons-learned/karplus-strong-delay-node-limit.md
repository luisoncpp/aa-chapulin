# Karplus-Strong cannot use a DelayNode

Web Audio clamps a delay loop (`DelayNode` feeding itself) to at least 128 samples. At 44100 Hz that is about 344 Hz. Every guitar and bass note above that is impossible if the string is a live feedback loop.

Render the string into an `AudioBuffer` instead: a noise burst of `round(sampleRate / frequency)` samples, then `y[n] = decay * 0.5 * (y[n - N] + y[n - N - 1])`, cached per context and MIDI note. Playback is an `AudioBufferSourceNode`, which has no 128-sample floor.

Do this again the next time a "just use a DelayNode" plucked string shows up.
