# The tracker has no bars, so meter is a free parameter

`MidiMusicComposer` advances one 16th-note per tick and wraps on `step % track.length`. There is no bar counter, no time signature, and nothing that requires `length` to be a multiple of 16.

Every track in the catalog was 4/4 with 128 or 256 steps, which reads like a constraint of the format. It is not — it was just a habit. A track is in whatever meter its own note grouping implies:

- 5/4 = 20-step bars. `truth` is 20 bars of 5/4 (`length: 400`).
- 9/8 = 18-step bars.
- 3/4 = 12-step bars.

## Why it matters

Odd meters are not a novelty here; they are the defining trait of a whole genre of reference music. Four of the five Ace Attorney "truth" themes are in 5/4, 9/8 or 3/4, and the forward-leaning, never-settling quality those meters produce *is* the emotional content — it is what makes an explanation feel unfinished while it is being delivered.

The first attempt at `truth` stayed in 4/4 and tried to imply 5/4 with a 3+3+2 grouping in the bass alone. That reads as syncopation over a square grid, not as an odd meter, because the chords and percussion keep re-asserting the four. If a piece wants an odd meter, every channel has to be written in it.

## What to preserve

When composing in a non-4/4 meter, keep `length` an exact multiple of the bar length so the loop seam lands where the meter expects it. `truth` asserts `length % 20 === 0` in its test for exactly this reason — a loop that wraps mid-bar will sound like a dropped beat every time it repeats, which is hard to diagnose by ear.
