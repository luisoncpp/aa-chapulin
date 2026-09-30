# Dense tracks choke the audio thread before they hit the voice cap

Symptom: `cross_exam_careo` (164 BPM, 3–4-note piano chords in gallop rhythm) stuttered, then **everything** went silent for seconds, including SFX. Silence that also takes out the SFX means Chrome's audio renderer is overloaded. It is not a scheduler or mixer bug: main-thread ticks and step order were clean in real time.

- **Cost is per node chain, not per note.** Each chord note used to build its own filter, amp, reverb send and hammer-noise chain, which put careo at about 3× the render cost of the other themes. A patch whose filter envelope does not follow pitch can share one filter/amp/hammer per chord (biquads are linear, so the sound does not change). `SubtractiveVoice` does this now, about 5× cheaper on careo.
- **Measure render cost with short offline segments** (64 steps, fresh `OfflineAudioContext` each). Offline rendering creates every node up front, so a whole-track render grows superlinearly and looks like a leak even when nothing leaks. Compare segments against a known-good track.
- **The music bus counts sources by scheduled stop time** (`watch(node, endAt)`). A counter decremented in `onended` lags behind on a busy main thread and drops notes early.
- **Disconnect voice chains on `ended`** (`releaseOnEnd`). Chrome can keep an automated biquad processing its tail after its input stops.
- The machine you test on may have more audio headroom than the user's. "It plays fine here" does not clear a track whose segment cost is several times its siblings'.
