# Project Glossary

Domain terminology and project-specific concepts for **El Chapulín Colorado: Ace Attorney**.

## Gameplay & Ace Attorney Concepts

| Term | Definition | Relevant Module |
|------|------------|-----------------|
| **Acta del Juicio (Court Record)** | The player's evidence inventory containing items, profiles, and documents gathered during investigations or introduced during trial. | [[src/state/Private/GameStateManager.ts]], [[src/engine/Private/ModalManager.ts]] |
| **Investigation Mode** | The phase where the defense explores crime scene locations, examines objects via interactive hotspots, speaks to witnesses, and collects required evidence. | [[src/engine/Private/InvestigationController.ts]] |
| **Trial Mode** | The courtroom litigation phase where the defense confronts prosecution witnesses through testimony cross-examinations, pressing statements, and presenting contradictions. | [[src/engine/Private/TrialController.ts]] |
| **Testimonio (Testimony)** | A series of numbered narrative statements delivered by a witness under oath in court. | [[src/case/case1/Private/trial.ts]] |
| **Presionar (Press / ¡UN MOMENTO!)** | Cross-examination action where the defense presses the witness for more detail or reveals additional context about a specific statement without risking a penalty. | [[src/engine/Private/TrialController.ts#Statement Pressing & Contradictions]] |
| **Presentar (Present / ¡PROTESTO!)** | Cross-examination action where the defense submits a piece of evidence from the Court Record to expose a logical contradiction in the witness's statement. | [[src/engine/Private/TrialController.ts#Statement Pressing & Contradictions]] |
| **Contradicción (Contradiction)** | A direct conflict between a witness statement and factual evidence in the Court Record. | [[src/case/case1/Private/trial.ts]] |
| **Penalización (Penalty)** | A strike deducted from the defense's 5-point health bar upon presenting incorrect evidence during trial (cross-examination, climax present, or climax choice). Reaching 0 health triggers a Game Over ("Culpable") and restarts the trial. | [[src/state/Private/GameStateManager.ts#Penalty & Health]] |
| **Cut-in** | Full-screen animated graphic overlay (e.g. `¡PROTESTO!`, `¡UN MOMENTO!`, `¡TOMA ESO!`, `¡CULPABLE!`, `¡INOCENTE!`) accompanying major dramatic legal shouts and verdicts. | [[src/engine/Private/VisualEffects.ts#Dramatic Cut-in Overlays]] |
| **Sala de espera (Waiting Room)** | Lobby outside the courtroom used for the Case 2 post-verdict epilogue (`bg_waiting_room.jpg`), not a trial camera angle. | [[src/engine/Private/TrialClimax.ts]], [[src/case/case2/Private/climax.ts]] |

## El Chapulín Colorado Lore & Case Items

| Term | Definition | Catalog Reference |
|------|------------|-------------------|
| **Don Ramón (Lic. Monchito)** | The defense lawyer: an improvised, street-smart public defender taking Chapulín's case to clear his client and pay his 14 months of rent. | [[src/case/case1/Private/trial.ts]], [[src/case/case1/Private/investigation.ts]] |
| **El Chapulín Colorado** | The defendant: a bumbling yet noble superhero framed for stealing the Golden Chicharra. | [[src/case/case1/Private/investigation.ts]] |
| **Super Sam** | The prosecutor: an eccentric hero obsessed with capitalism and speed ("Time is money!"), wielding bags of dollars. | [[src/case/case1/Private/trial.ts]] |
| **El Tripaseca** | The prosecution witness and true culprit: a notorious gangster trying to frame Chapulín. | [[src/case/case1/Private/trial.ts]] |
| **Doña Florinda** | The museum curator and initial investigation witness. | [[src/case/case1/Private/investigation.ts]] |
| **Alma Negra** | The pirate security guard found knocked out at the museum. | [[src/case/case1/Private/investigation.ts]] |
| **Chipote Chillón** | Chapulín's soft vinyl squeaky hammer, erroneously accused of being the heavy blunt assault weapon. | [[src/state/Private/EvidenceCatalog.ts]] |
| **Pastillas de Chiquitolina** | Shrinking pills used by the true culprit to enter the sealed museum display through an air vent. | [[src/state/Private/EvidenceCatalog.ts]] |
| **Antenitas de Vinil** | Vinyl antennae that vibrate when detecting the presence of enemies, used to pinpoint the hidden loot. | [[src/state/Private/EvidenceCatalog.ts]] |
| **Chicharra Paralizadora de Oro** | The stolen museum relic that immobilizes anyone nearby when sounded. | [[src/state/Private/EvidenceCatalog.ts]] |
| **El Chómpiras** | Case 2 defendant: hapless thief framed for stealing the Chanfle de Oro from Jirafales's vault. | [[src/case/case2/Private/detention.ts]] |
| **El Peterete** | Case 2 star witness and true culprit: Chómpiras's partner posing as a lawyer. | [[src/case/case2/Private/trial_day1_t2.ts]] |
| **Profesor Jirafales** | Vault owner and Case 2 judge; hacienda floor plans and generator box are his. | [[src/case/case2/Private/boveda.ts]] |
| **Don Jaimito** | Postman whose overtime alibi and traffic ticket break Peterete's postal story. | [[src/case/case2/Private/postal.ts]] |
| **Doña Clotilde** | Neighbor whose valerian perfume and wax mold expose the dumbwaiter escape. | [[src/case/case2/Private/clotilde.ts]] |
| **Doctor Chapatín** | Case 3 defendant: elderly grouchy doctor who hits people with a paper bag and hides Ñoño's treatment under professional secrecy. | [[src/case/case3/index.ts]] |
| **El Sargento** (Refugio Pazguato) | Case 3 Gumshoe-style cop. Everyone calls him "el Sargento"; the full name is spoken once. Dialogue speaker key is `SARGENTO`, sprite prefix stays `pazguato_*`. Contaminates the scene, then recovers the station-cut cartridge from the trash. | [[src/case/case3/index.ts]] |
| **Don Aniceto Rebollar** | Case 3 star announcer and true culprit; corrects other people's diction and cannot let a misquoted sketch line pass. Base pose `aniceto_idle` is his identity lock. | [[src/case/case3/index.ts]] |
| **Micrófono de Oro** | Bronze trophy-mic (`microfono_oro`); Case 3 murder weapon. Needs two Court Record updates before the last climax present accepts it. | [[src/state/Private/EvidenceCatalogCase3.ts]] |
| **Gordon Botija ("El Botija")** | Case 4 defendant: reformed ex-burglar working as hotel plumber/maintenance, framed for murder in the penthouse suite. | [[docs/specs/case-4-el-caso-del-hotel-buena-vista.md]] |
| **Rufino Rufián** | Case 4 star guest and true culprit: fake count ("Conde de Montemayor") and international swindler who poisoned Cuajinais and staged the phantom gunshot. | [[docs/specs/case-4-el-caso-del-hotel-buena-vista.md]] |
| **Don Cecilio Buenavista** | Case 4 witness: Gran Hotel owner/manager; severely nearsighted and easily confused. | [[docs/specs/case-4-el-caso-del-hotel-buena-vista.md]] |
| **Maruja** | Case 4 witness: glamorous guest ("La Sirena del Hotel") staying in Suite 303. | [[docs/specs/case-4-el-caso-del-hotel-buena-vista.md]] |
| **El Cuajinais** | Case 4 victim: mobster with the scar on his cheek, checked in as "Sr. Gómez" to extort Rufino. | [[docs/specs/case-4-el-caso-del-hotel-buena-vista.md]] |

## Audio & Engine Terminology

| Term | Definition | Relevant Subsystem |
|------|------------|--------------------|
| **Procedural Synthesizer** | Pure Web Audio API waveform generator producing retro 16-bit sound effects (gavels, desk slams, typewriter blips) without audio file downloads. | [[src/audio/Private/SoundEngine.ts]] |
| **MIDI Music Tracker** | Step-sequenced 4-channel chiptune synthesizer composing dynamic multitrack background music (Bass, Lead, Chords, Drums) at runtime. | [[src/audio/Private/MidiMusicComposer.ts]] |
| **Hotspot** | Relative coordinate bounding box on a scene background that triggers investigation interactions when clicked. | [[src/engine/Private/InvestigationController.ts]] |