# BGM aliases should preserve the sequencer position

The track catalog can expose multiple narrative names for one composition. Case 1 uses `victory` for the verdict and `epilogue` for the waiting-room line, while both names reference the same victory definition.

When a dialogue cue changes only that label, compare the resolved `TrackDefinition` before stopping the timer. Comparing names alone restarts the song at step zero during the courtroom-to-lobby fade.
