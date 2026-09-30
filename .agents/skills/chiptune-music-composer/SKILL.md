---
name: chiptune-music-composer
description: Compose, arrange, and optimize retro 16-bit procedural chiptune soundtracks, MIDI tracks, and sound effects for visual novel and courtroom games. Prevents player ear fatigue by applying video game audio design principles, multi-phrase loop architecture, and harmonic theory. Use when creating or refining soundtrack themes, cross-examinations, pursuit themes, or ambient game music.
---

# Chiptune Music Composer

This skill enables agents to compose, structure, and refine multi-track procedural MIDI music and 16-bit chiptune soundtracks that remain fresh, engaging, and non-fatiguing during extended gameplay sessions.

---

## 1. Core Principles to Prevent Music Fatigue

Music fatigue happens when short, repetitive loops play incessantly during thinking-intensive gameplay (like cross-examinations or investigations).

### The Golden Rules of Anti-Fatigue Composition:
1. **Never Loop Under 64 Steps**: A 32-step loop at 130 BPM repeats every 3.7 seconds! Target **64 to 256 steps** (8 to 32 bars, ~30–60 seconds).
2. **Multi-Section Narrative Structure**:
   - **Section A (Bars 1–4 / Steps 0–63)**: Establishes main hook and rhythmic groove.
   - **Section B (Bars 5–8 / Steps 64–127)**: Harmonic modulation, contrasting rhythm, or counter-melody.
   - **Section C / Climax (Optional, Steps 128–191)**: Peak energy, arpeggios, syncopation.
   - **Turnaround (Final 4–8 steps)**: Drum fill and cadence that smoothly resolves back into Section A.
3. **Polyphonic Voicings**: Use 3-note triads and 4-note 7th chords (`[52, 55, 59]`, etc.) instead of monophonic single-note chords for lush harmonic backing.
4. **Rhythmic Breathing Room**: Leave 16th-note rests between lead phrases. Continuous 16th-note runs cause cognitive overload.
5. **Frequency De-confliction**:
   - **Bass**: Low octaves (MIDI 36–52 / C2–E3). Triangle wave for roundness.
   - **Chords / Harmony**: Mid octaves (MIDI 48–65 / C3–F4). Sawtooth/pad for rich body with polyphonic arrays.
   - **Lead**: High-mid octaves (MIDI 64–84 / E4–C6). Square wave with vibrato LFO and breathing rests.
   - **Drums**: `K` `S` `H` `O` `C` `P`, and when the scene asks for it `X` `R` `T` `M` `B` `G` `Y` (see the palette below). Compounds: `KC`, `KH`, `SH`.

For in-depth theory, see [references/game-audio-principles.md](file:///c:/Proyectos/ace-attorney-gemini/.agents/skills/chiptune-music-composer/references/game-audio-principles.md).

---

## 2. Track Data Format Specification

Tracks are `TrackDefinition` objects. Each index is one 16th note. In 4/4, one bar is 16 steps.

```typescript
export const HOLD = -1; // sustain the previous note for this step

export interface TrackDefinition {
  bpm: number;
  length: number;
  bass?: NoteEntry[];
  lead?: NoteEntry[];
  chords?: NoteEntry[];
  counter?: NoteEntry[]; // optional fourth melodic line
  drums?: string[];
  instruments?: Partial<Record<'bass' | 'lead' | 'chords' | 'counter', InstrumentId>>;
  accents?: Partial<Record<'bass' | 'lead' | 'chords' | 'counter', number[]>>; // 0..1 gain
}
```

`0` rests. A positive number is a MIDI note. An array is a chord. `HOLD` extends the previous note; a run of `k` holds lasts `(k + 1)` steps, with a 10% gap unless the patch is legato.

If `instruments` is omitted, the channel uses `chip_bass`, `chip_lead`, or `chip_pad` (the original triangle, square, and sawtooth). Those three stay the default so an old track does not change timbre by accident.

### Instrument palette

| Id | Use |
|---|---|
| `chip_bass`, `chip_lead`, `chip_pad` | Original voices. Keep at least one of these in the cross-examination family; the square lead is part of the game. |
| `pulse_lead_12`, `pulse_lead_25` | NES pulse widths. Allegro and moderato leads. |
| `upright_bass` | Walking and courtroom bass. |
| `piano`, `epiano` | Ostinato, confrontation bass, investigation chords. Without `HOLD` a note rings through the rests after it until the channel's next note (at most 1.2–1.5 s); write a note on the next step to keep it short. |
| `marimba`, `nylon_guitar` | Percussive color, and ring the same way. Guitar and upright bass are Karplus-Strong buffers, not a delay loop. |
| `brass`, `mariachi_trumpet` | Brass stabs and fanfares. |
| `flute`, `accordion`, `organ`, `string_pad` | Atmosphere and pads. |
| `orchestra_hit` | A single downbeat stab, not a melody. |

**Owner preference (2026-09-28):** the first instrument assignment was kept only on the cross-examination family, `truth` and `archivo`; the rest went back to the chip voices while other instruments are tried. Changing instruments is welcome; changing an existing track's notes is not, unless asked.

### Drums

`K` kick, `S` snare, `H` closed hat, `O` open hat, `C` crash, `P` slap, `X` clap, `R` rimshot, `T` low tom, `M` mid tom, `B` cowbell, `G` güiro, `Y` timbal. Compounds such as `KC` play every character. `0` is a rest.

### Role hints

Keep cross-examinations recognisably chiptune (`chip_lead` or a pulse lead). Pursuit and objection can take the trumpet. Investigation and location themes can leave the chip set. Do not put reverb on bass or drums; the patches already send little or none.

---

## 3. Composition Workflow

When tasked with creating or improving a track:

1. **Identify the Dramatic Role**:
   - *Investigation*: 108–116 BPM, minor/blues/dorian, walking bass, swinging hi-hats.
   - *Cross-Examination (Moderato)*: 116–124 BPM, steady driving pulse, analytical tension.
   - *Cross-Examination (Allegro)*: 140–148 BPM, heightened urgency, syncopated lead.
   - *Objection / Turnaround*: 144–154 BPM, triumphant major/minor modal shift, brassy anthemic lead.
   - *Cornered / Pursuit*: 156–168 BPM, rapid 16th-note bassline, relentless energy, Spanish/Latin rhythmic flair.
   - *Suspense / Revelation*: 88–98 BPM, minimalist drone, sparse heartbeat kick.

2. **Select Scale & Root Key**:
   - Consult [references/midi-theory-reference.md](file:///c:/Proyectos/ace-attorney-gemini/.agents/skills/chiptune-music-composer/references/midi-theory-reference.md) for MIDI numbers, polyphonic chord voicings, and Latin/Spanish Phrygian modes.

3. **Pick a Template**:
   - Use or adapt structural blueprints from [references/track-templates.md](file:///c:/Proyectos/ace-attorney-gemini/.agents/skills/chiptune-music-composer/references/track-templates.md).

4. **Compose the 4 Channels**:
   - Construct arrays matching the exact `length`.
   - Ensure all 4 arrays (`bass`, `lead`, `chords`, `drums`) have identical lengths equal to `length`.

5. **Validate with Script**:
   - Run the validation tool:
     ```bash
     python .agents/skills/chiptune-music-composer/scripts/validate_track.py
     ```

---

## 4. Scripts & Utilities

- **Track Validator**: `python .agents/skills/chiptune-music-composer/scripts/validate_track.py`
  - Validates note ranges, polyphonic chord arrays, compound drum symbols, step count consistency, and syntax.
- **MIDI to Tracker Converter**: `python .agents/skills/chiptune-music-composer/scripts/midi_to_tracker.py input.mid output.ts`
  - Extracts polyphonic step tracker arrays from standard `.mid` files into TypeScript format.
