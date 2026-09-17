# Project Glossary

Domain terminology and project-specific concepts for **El Chapulín Colorado: Ace Attorney**.

## Gameplay & Ace Attorney Concepts

| Term | Definition | Relevant Module |
|------|------------|-----------------|
| **Acta del Juicio (Court Record)** | The player's evidence inventory containing items, profiles, and documents gathered during investigations or introduced during trial. | [[src/state/Private/GameStateManager.ts]], [[src/engine/Private/ModalManager.ts]] |
| **Investigation Mode** | The phase where the defense explores crime scene locations, examines objects via interactive hotspots, speaks to witnesses, and collects required evidence. | [[src/engine/Private/InvestigationController.ts]] |
| **Trial Mode** | The courtroom litigation phase where the defense confronts prosecution witnesses through testimony cross-examinations, pressing statements, and presenting contradictions. | [[src/engine/Private/TrialController.ts]] |
| **Testimonio (Testimony)** | A series of numbered narrative statements delivered by a witness under oath in court. | [[src/case/case1/Private/trial_day1.ts]] |
| **Presionar (Press / ¡UN MOMENTO!)** | Cross-examination action where the defense presses the witness for more detail or reveals additional context about a specific statement without risking a penalty. | [[src/engine/Private/TrialController.ts#Statement Pressing & Contradictions]] |
| **Presentar (Present / ¡PROTESTO!)** | Cross-examination action where the defense submits a piece of evidence from the Court Record to expose a logical contradiction in the witness's statement. | [[src/engine/Private/TrialController.ts#Statement Pressing & Contradictions]] |
| **Contradicción (Contradiction)** | A direct conflict between a witness statement and factual evidence in the Court Record. | [[src/case/case1/Private/trial_day1_t2.ts]] |
| **Penalización (Penalty)** | A strike deducted from the defense's 5-point health bar upon presenting incorrect evidence during trial (cross-examination, climax present, or climax choice). Reaching 0 health triggers a Game Over ("Culpable") and restarts the trial. | [[src/state/Private/GameStateManager.ts#Penalty & Health]] |
| **Cut-in** | Full-screen animated graphic overlay (e.g. `¡PROTESTO!`, `¡UN MOMENTO!`, `¡TOMA ESO!`, `¡CULPABLE!`, `¡INOCENTE!`) accompanying major dramatic legal shouts and verdicts. | [[src/engine/Private/VisualEffects.ts#Dramatic Cut-in Overlays]] |
| **Acta de Personajes (Character Record)** | Second tab of the Court Record, holding one card per person in the case. Visible only when the active case declares profiles, so only Case 1 shows the tab bar. Readable during any cross-examination; presentable only when the court asks for a person by name. | [[src/state/Private/ProfileInventory.ts]], [[src/engine/Private/CourtRecordTabs.ts]], [[docs/flows/character-record-flow.md]] |
| **Ficha (Profile card / the museum card)** | Two senses. (1) A card in the Acta de Personajes. (2) In Case 1, *la ficha del museo*: the typewritten six-line card someone sold to the culprit, carrying the latch, the grate, the watchman's round, the pills, the camera roll and "servicio de cierre incluido". | [[src/state/Private/ProfileCatalogCase1Es.ts]], [[src/case/case1/Private/climax.ts]] |
| **Sala de espera (Waiting Room)** | Lobby outside the courtroom used by post-verdict epilogues, not a trial camera angle. Cases 2–4 reuse `bg_waiting_room.webp`; Case 0 uses `bg_waiting_room_case0.webp` because its epilogue requires an open newspaper. | [[src/engine/Private/TrialClimax.ts]], [[src/case/case0/Private/climax.ts]] |

## El Chapulín Colorado Lore & Case Items

| Term | Definition | Catalog Reference |
|------|------------|-------------------|
| **Don Ramón (Abogado Defensor)** | The defense lawyer: an improvised, street-smart public defender taking Chapulín's case to clear his client and pay his 14 months of rent. Occasionally refers to himself with his playful catchphrase "Con permisito, dijo Monchito". | [[src/case/case1/Private/trial_day1.ts]], [[src/case/case1/Private/detention.ts]] |
| **El Chapulín Colorado** | The defendant: a bumbling yet noble superhero framed for stealing the Golden Chicharra. Arrived five minutes late to his own innocence. | [[src/case/case1/Private/detention.ts]] |
| **Super Sam** | The prosecutor: an eccentric hero obsessed with capitalism and speed ("Time is money!"), wielding a canvas bag of silver coin. In Case 1 he takes the floor without it on day 1, refuses to say where it was, and asks for the recess himself — a thread the case deliberately leaves open. | [[src/case/case1/Private/trial_day1.ts]] |
| **El Tripaseca** | Case 1 star witness and sole culprit. A trader — *"compro barato y vendo lo que se deje"* — who did not study the museum: he bought the plan. Takes the stand three times. | [[src/case/case1/Private/trial_day1_t2.ts]], [[src/case/case1/Private/trial_day2_t2.ts]] |
| **Doña Florinda** | Museum curator; Case 1 day-1 witness (testimony 1) and the only holder of the front-door key. | [[src/case/case1/Private/museo.ts]], [[src/case/case1/Private/trial_day1.ts]] |
| **Alma Negra** | Case 1 victim and day-2 witness: the museum's night watchman, an ex-sailor who speaks in nautical slang (*bodega de proa / de popa*, *grumete*) and never appears healthy — unconscious on day 1, bandaged in a wheelchair from day 2 on. His written round is what made the crime plannable. | [[src/case/case1/Private/clinica_d2.ts]], [[src/case/case1/Private/trial_day2.ts]] |
| **Profesor Jirafales** | Case 1 guest lecturer (investigation only, never takes the stand); also the Case 2 judge and vault owner. A neighbor of Don Ramón from the vecindad — so is Doña Florinda, so nobody is surprised they know each other; the greeting is what shames her into letting the defense work. Times everything to the second and corrects El Chapulín's mangled proverbs. | [[src/case/case1/Private/museo.ts]] |

| **Chipote Chillón** | Chapulín's squeaky hammer, erroneously accused of being the heavy blunt assault weapon. | [[src/state/Private/EvidenceCatalog.ts]] |
| **Pastillas de Chiquitolina** | Shrinking pills used by the true culprit to enter the sealed museum display through an air vent. | [[src/state/Private/EvidenceCatalog.ts]] |
| **Antenitas de Vinil** | Vinyl antennae that may vibrate near an enemy or an important clue. They have led the Chapulín to stolen objects even when no enemy was nearby. They do not identify what triggered them, prove ownership, or make silence exculpatory. | [[src/state/Private/EvidenceCatalog.ts]] |
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
| **La Chimoltrufia** | Case 4 day-3 hotel desk: replaces Don Cecilio at `hotel_lobby_d3`; files the wine delivery certification, baccarat slip, and telegram copy. | [[docs/specs/case-4-el-caso-del-hotel-buena-vista.md]], [[docs/lessons-learned/location-cast-rotation.md]] |
| **Cartapacio de Cobranza** | Case 0 stolen item: Don Nazario's accordion file (cartapacio de fuelle) holding the rent list, one pocket per house. Folds flat, which is why it fits among the volumes in Casimiro's sample case — a rigid briefcase would not. `EvidenceId` stays `maletin_cobranza`. | [[src/state/Private/EvidenceCatalogCase0Es.ts]], [[docs/specs/case-0-el-primer-juicio-de-monchito.md]] |
| **"¿Cartapa... qué?" (chiste de palabra difícil)** | Gag recurrente del Chapulín: un personaje culto suelta una palabra rebuscada, el Chapulín la corta a media sílaba con cara de no entender (`chapulin_idle`), el otro completa la sílaba que falta, y el Chapulín remata con `¡Chanfle!` (`chapulin_panic`). En el juicio el juez aprovecha para definir el término y mostrarlo en una lámina a pantalla completa. Estrenado con *cartapacio* en la tercera presión del Testimonio 1 de Case 0; reutilizable con cualquier tecnicismo legal o de época. | [[src/case/case0/Private/trial.ts]], [[docs/specs/case-0-el-primer-juicio-de-monchito.md]] |
| **El Chómpiras** (bellhop) | Case 4 day-2 terrace (`hotel_terraza_d2`): logs freight-elevator B-17 weights; accompanies the day-2 roof trunk inspection. | [[docs/specs/case-4-el-caso-del-hotel-buena-vista.md]] |

## Audio & Engine Terminology

| Term | Definition | Relevant Subsystem |
|------|------------|--------------------|
| **Procedural Synthesizer** | Pure Web Audio API waveform generator producing retro 16-bit sound effects (gavels, desk slams, typewriter blips) without audio file downloads. | [[src/audio/Private/SoundEngine.ts]] |
| **MIDI Music Tracker** | Step-sequenced 4-channel chiptune synthesizer composing dynamic multitrack background music (Bass, Lead, Chords, Drums) at runtime. | [[src/audio/Private/MidiMusicComposer.ts]] |
| **Hotspot** | Relative coordinate bounding box on a scene background that triggers investigation interactions when clicked. | [[src/engine/Private/InvestigationController.ts]] |
