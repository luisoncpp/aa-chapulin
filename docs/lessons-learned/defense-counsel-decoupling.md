# Defense Counsel Role Decoupling and Hands-Planted Sprite Extraction

## Context
In courtroom litigation adventures where the titular protagonist is also the defendant (e.g. *El Chapulín Colorado* accused of theft), character role assignment between the legal advocate and the accused defendant must remain visually and narratively distinct.

## What Was Learned

### 1. Distinct Defense Persona Prevents Role Ambiguity
When the defendant is a prominent personality with iconic catchphrases, assigning them as their own defense advocate at the bench causes jarring dialogue conflicts (e.g. speaking in third-person vs first-person, or referring to evidence owned by the defendant as if the lawyer owns it). Establishing an active, distinct Defense Counsel (Don Ramón / "Lic. Monchito") gives the player a clear legal avatar while preserving the defendant's role as a supporting hero who reacts and assists during dramatic breakthroughs.

### 2. Upstream Decoupling in Generation vs Destructive Post-Hoc Pixel Filtering
Attempting to carve out baked furniture from sprite cells using hardcoded bounding boxes or narrow RGB/chroma ratios (`B/G >= 0.56`) is brittle and creates severe artifacts:
- Arbitrary row and column slices clip extremities (e.g. wrists/cuffs) and truncate waist lengths, creating floating bodies and gaps above the bench.
- Narrow color thresholds erode antialiased, shadowed, and knuckle pixels, causing Swiss-cheese analog noise across the hands.
- The robust solution is enforcing pure upstream decoupling in the generation prompt (`NO furniture, NO desk, full upper body extending cleanly down against solid magenta background`). Standard vectorized chroma-key and despill pipelines then preserve 100% of the character's hands, cuffs, and torso geometry without noise or clipping.
