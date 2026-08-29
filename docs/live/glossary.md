# Project Glossary

Domain terminology and project-specific concepts for **El Chapulín Colorado: Ace Attorney**.

## Gameplay & Ace Attorney Concepts

| Term | Definition | Relevant Module |
|------|------------|-----------------|
| **Acta del Juicio (Court Record)** | The player's evidence inventory containing items, profiles, and documents gathered during investigations or introduced during trial. | [[src/state/Private/GameStateManager.ts]], [[src/engine/Private/ModalManager.ts]] |
| **Investigation Mode** | The phase where the defense explores crime scene locations, examines objects via interactive hotspots, speaks to witnesses, and collects required evidence. | [[src/engine/Private/InvestigationController.ts]] |
| **Trial Mode** | The courtroom litigation phase where the defense confronts prosecution witnesses through testimony cross-examinations, pressing statements, and presenting contradictions. | [[src/engine/Private/TrialController.ts]] |
| **Testimonio (Testimony)** | A series of numbered narrative statements delivered by a witness under oath in court. | [[src/case/Private/case1_trial.ts]] |
| **Presionar (Press / ¡UN MOMENTO!)** | Cross-examination action where the defense presses the witness for more detail or reveals additional context about a specific statement without risking a penalty. | [[src/engine/Private/TrialController.ts#Statement Pressing & Contradictions]] |
| **Presentar (Present / ¡PROTESTO!)** | Cross-examination action where the defense submits a piece of evidence from the Court Record to expose a logical contradiction in the witness's statement. | [[src/engine/Private/TrialController.ts#Statement Pressing & Contradictions]] |
| **Contradicción (Contradiction)** | A direct conflict between a witness statement and factual evidence in the Court Record. | [[src/case/Private/case1_trial.ts]] |
| **Penalización (Penalty)** | A strike deducted from the defense's 5-point health bar upon presenting incorrect evidence during a trial cross-examination. Reaching 0 health triggers a Game Over ("Culpable"). | [[src/state/Private/GameStateManager.ts#Penalty & Health]] |
| **Cut-in** | Full-screen animated graphic overlay (e.g. `¡PROTESTO!`, `¡UN MOMENTO!`, `¡TOMA ESO!`, `¡INOCENTE!`) accompanying major dramatic legal shouts. | [[src/engine/Private/VisualEffects.ts#Dramatic Cut-in Overlays]] |

## El Chapulín Colorado Lore & Case Items

| Term | Definition | Catalog Reference |
|------|------------|-------------------|
| **Don Ramón (Lic. Monchito)** | The defense lawyer: an improvised, street-smart public defender taking Chapulín's case to clear his client and pay his 14 months of rent. | [[src/case/Private/case1_trial.ts]], [[src/case/Private/case1_investigation.ts]] |
| **El Chapulín Colorado** | The defendant: a bumbling yet noble superhero framed for stealing the Golden Chicharra. | [[src/case/Private/case1_investigation.ts]] |
| **Super Sam** | The prosecutor: an eccentric hero obsessed with capitalism and speed ("Time is money!"), wielding bags of dollars. | [[src/case/Private/case1_trial.ts]] |
| **El Tripaseca** | The prosecution witness and true culprit: a notorious gangster trying to frame Chapulín. | [[src/case/Private/case1_trial.ts]] |
| **Doña Florinda** | The museum curator and initial investigation witness. | [[src/case/Private/case1_investigation.ts]] |
| **Alma Negra** | The pirate security guard found knocked out at the museum. | [[src/case/Private/case1_investigation.ts]] |
| **Chipote Chillón** | Chapulín's soft vinyl squeaky hammer, erroneously accused of being the heavy blunt assault weapon. | [[src/state/Private/EvidenceCatalog.ts]] |
| **Pastillas de Chiquitolina** | Shrinking pills used by the true culprit to enter the sealed museum display through an air vent. | [[src/state/Private/EvidenceCatalog.ts]] |
| **Antenitas de Vinil** | Vinyl antennae that vibrate when detecting the presence of enemies, used to pinpoint the hidden loot. | [[src/state/Private/EvidenceCatalog.ts]] |
| **Chicharra Paralizadora de Oro** | The stolen museum relic that immobilizes anyone nearby when sounded. | [[src/state/Private/EvidenceCatalog.ts]] |
| **El Chómpiras** | Case 2 defendant: hapless thief framed for stealing the Chanfle de Oro from Jirafales's vault. | [[src/case/Private/case2_detention.ts]] |
| **El Peterete** | Case 2 star witness and true culprit: Chómpiras's partner posing as a lawyer. | [[src/case/Private/case2_trial_day1_t2.ts]] |
| **Profesor Jirafales** | Vault owner and Case 2 judge; hacienda floor plans and generator box are his. | [[src/case/Private/case2_boveda.ts]] |
| **Don Jaimito** | Postman whose overtime alibi and traffic ticket break Peterete's postal story. | [[src/case/Private/case2_postal.ts]] |
| **Doña Clotilde** | Neighbor whose valerian perfume and wax mold expose the dumbwaiter escape. | [[src/case/Private/case2_clotilde.ts]] |
| **Chanfle de Oro** | Stolen 5 kg gold relic (`chanfle_oro`); the Case 2 corpus delicti. | [[src/state/Private/EvidenceCatalogCase2.ts]] |

## Audio & Engine Terminology

| Term | Definition | Relevant Subsystem |
|------|------------|--------------------|
| **Procedural Synthesizer** | Pure Web Audio API waveform generator producing retro 16-bit sound effects (gavels, desk slams, typewriter blips) without audio file downloads. | [[src/audio/Private/SoundEngine.ts]] |
| **MIDI Music Tracker** | Step-sequenced 4-channel chiptune synthesizer composing dynamic multitrack background music (Bass, Lead, Chords, Drums) at runtime. | [[src/audio/Private/MidiMusicComposer.ts]] |
| **Hotspot** | Relative coordinate bounding box on a scene background that triggers investigation interactions when clicked. | [[src/engine/Private/InvestigationController.ts]] |