# Defense Counsel Role Decoupling and Hands-Planted Sprite Extraction

## Context
In courtroom litigation adventures where the titular protagonist is also the defendant (e.g. *El Chapulín Colorado* accused of theft), character role assignment between the legal advocate and the accused defendant must remain visually and narratively distinct.

## What Was Learned

### 1. Distinct Defense Persona Prevents Role Ambiguity
When the defendant is a prominent personality with iconic catchphrases, assigning them as their own defense advocate at the bench causes jarring dialogue conflicts (e.g. speaking in third-person vs first-person, or referring to evidence owned by the defendant as if the lawyer owns it). Establishing an active, distinct Defense Counsel (Don Ramón / "Lic. Monchito") gives the player a clear legal avatar while preserving the defendant's role as a supporting hero who reacts and assists during dramatic breakthroughs.

### 2. Isolate Hands in Desk-Slam Poses via Skin Chroma Ratio
AI-generated desk-slam poses often bake a flat wood desk under the palms. To preserve compatibility with the engine's decoupled foreground furniture layering (`court_bench.png` at `z-index: 3` and slam sprite at `z-index: 4`):
- Brown table wood has a low Blue-to-Green ratio (\(B/G < 0.55\), \(B < 75\)).
- Human skin tones maintain significantly higher Blue values (\(B/G \ge 0.56\), \(B > 80\)).
- Filtering table pixels by chroma ratio rather than simple RGB Euclidean distance successfully isolates the wrists, palms, and outstretched fingers without eroding the character's hands.
