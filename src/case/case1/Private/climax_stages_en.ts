// @Architecture(descriptionShort="English Case 1 climax stages 1 to 3", type="data", icon="layers")
/**
 * Case 1 — Climax stages 1 to 3 (§13.1–§13.3).
 * Stage 1 is the only personal accusation of the episode, and the Judge orders it.
 */

import type { ClimaxStage, DialogueLine } from '../../../types/index.js';
import { CASE1_REJILLA_POINT_TARGET_EN, STAGE_3_INTRO_EN } from './climax_stage3_points_en.js';

const STAGE_1_FAIL_EN: DialogueLine[] = [
  { speaker: 'JUEZ', pose: 'judge_thinking', text: 'No, counselor. And this court reminds you that it did not ask whom you suspect, but whom the evidence you yourself have entered points to.' },
  { speaker: 'SUPER SAM', pose: 'supersam_point', text: 'Objection! The defense is throwing names into the air!', sfx: 'damage' },
  { speaker: 'JUEZ', pose: 'judge_neutral', text: 'The court repeats the question. And warns you it will not repeat it many more times.' }
];

const STAGE_1_SUCCESS_EN: DialogueLine[] = [
  { speaker: 'DEFENSA', text: '¡PROTESTO!', sfx: 'desk_slam', cutin: 'objection_protesto', pose: 'donramon_slam', bgm: 'pursuit' },
  { speaker: 'DEFENSA', text: 'Your Honor, the man who stood on that pedestal is sitting in the witness stand.', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'El Tripaseca.', pose: 'donramon_slam', sfx: 'desk_slam' },
  { speaker: 'NARRADOR', text: 'The whole gallery rises.', sfx: 'realization' },
  { speaker: 'TRIPASECA', text: 'ME?! I was only passing by!', pose: 'tripaseca_sweat' },
  { speaker: 'SUPER SAM', text: "OBJECTION! Your Honor, the prosecution's witness is not a suspect! The defense is desperate!", pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'JUEZ', text: 'The court shares the objection in principle. Defense, substantiate or withdraw.', pose: 'judge_neutral' },
  { speaker: 'DEFENSA', text: 'In three sentences, Your Honor. Three sentences he said, in front of you, with nobody dragging them out of him.', pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: 'First. Yesterday he testified that he saw my client "standing on the pedestal of the display case, the wooden one, about waist-high".', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'That pedestal cannot be seen from the alley. The window is forty centimetres wide, two metres twenty up, and the glass is frosted.', pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: 'Second. Today he testified that the loading door latch has been broken "since March". With the month.', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'Third. Yesterday he described the sound of the blow as "a sackful of iron", when in that gallery, according to the prosecution, there was only a chipote.', pose: 'donramon_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: 'Nobody describes a blow that way unless he heard it up close. Nobody learns a month by looking at a latch. And nobody measures a pedestal through frosted glass.', pose: 'donramon_point' },
  { speaker: 'TRIPASECA', text: 'I am an honest trader!', pose: 'tripaseca_panic' },
  { speaker: 'JUEZ', text: 'The court permits the defense to continue.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'JUEZ', text: 'But I warn you of one thing, counselor: three sentences are not three pieces of evidence.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'If you maintain that man took the Golden Paralyzing Chicharra, this court wants to know where that piece is at this moment.', pose: 'judge_thinking' },
  { speaker: 'CHAPULIN', text: 'My antennae! If the one who took it is carrying it, they will point him out right now!', pose: 'chapulin_point' },
  { speaker: 'JUEZ', text: 'Are you proposing a demonstration with those antennae, counselor?', pose: 'judge_thinking' },
  { speaker: 'DEFENSA', text: 'I am proposing an instrument, Your Honor. Let the Record say which one.', pose: 'donramon_idle' }
];

const STAGE_2_FAIL_EN: DialogueLine[] = [
  { speaker: 'JUEZ', pose: 'judge_thinking', text: 'Counselor, the card for the piece describes what was stolen; it does not find it.', sfx: 'damage' },
  { speaker: 'JUEZ', pose: 'judge_neutral', text: 'The court asked for no description. It asked for the instrument to locate it right here.' }
];

const STAGE_2_SUCCESS_EN: DialogueLine[] = [
  { speaker: 'DEFENSA', text: "The defense presents the defendant's Antenitas de Vinil, Your Honor.", pose: 'donramon_idle' },
  { speaker: 'SUPER SAM', text: 'The antennae?! Your Honor, this is a circus now!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'CHAPULIN', text: 'They are not a circus, they are a precision instrument!', pose: 'chapulin_point' },
  { speaker: 'CHAPULIN', text: 'They detect an enemy... and sometimes just the clue. At El Chompiras\'s trial they buzzed at a tin of shoe grease, and the gold was inside it.', pose: 'chapulin_point' },
  { speaker: 'CHAPULIN', text: 'They went on the record there as an instrument of detection. And in twenty years they have never failed me... except that time with the dog, but the dog was an enemy too.', pose: 'chapulin_idle' },
  { speaker: 'JUEZ', text: 'The court authorises the demonstration. Bailiff, place them in the centre of the room.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'NARRADOR', text: 'The bailiff sets the antennae on the central table. Silence.', bgm: 'suspense' },
  { speaker: 'NARRADOR', text: 'At first nothing. Then a small tremor.', sfx: 'whoosh' },
  { speaker: 'NARRADOR', text: 'And suddenly both antennae bend at once, rigid, pointing at the witness stand.', sfx: 'chicharra' },
  { speaker: 'TRIPASECA', text: '...They are broken.', pose: 'tripaseca_sweat' },
  { speaker: 'NARRADOR', text: 'The antennae vibrate so hard the table walks a centimetre across the floor.', sfx: 'realization' },
  { speaker: 'JUEZ', text: "BAILIFF! Search the witness's overcoat!", sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'TRIPASECA', text: 'Do not touch me! Do not touch me, I am an honest trader!', pose: 'tripaseca_panic' },
  { speaker: 'NARRADOR', text: "The bailiff reaches into the lining of the witness's overcoat.", sfx: 'whoosh' },
  { speaker: 'NARRADOR', text: 'And pulls out a solid gold cicada the size of two hands.', sfx: 'chicharra', cutin: 'objection_toma_eso' },
  { speaker: 'NARRADOR', text: 'The entire room goes still, and not because of the chicharra.', bgm: 'pursuit' },
  { speaker: 'FLORINDA', text: 'MY CHICHARRA!', pose: 'florinda_shock' },
  { speaker: 'CHAPULIN', text: 'I told you, Doña Florinda! The early bird...!', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: '...gathers no moss.', pose: 'donramon_idle' },
  { speaker: 'CHAPULIN', text: '¡Chanfle! Now you too!', pose: 'chapulin_panic' },
  { speaker: 'DEFENSA', text: 'It has rubbed off on me, young man. It is contagious, like riffraff.', pose: 'donramon_idle' },
  { speaker: 'JUEZ', text: "Let it be entered in the record! The stolen piece was found in the prosecution witness's clothing!", sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'TRIPASECA', text: 'I bought it!', pose: 'tripaseca_panic' },
  { speaker: 'JUEZ', text: 'I beg your pardon?', pose: 'judge_shock' },
  { speaker: 'TRIPASECA', text: 'I bought it! The day before yesterday! Cash, from a man in the street! I buy cheap and sell whatever will sell, I told you already!', pose: 'tripaseca_panic' },
  { speaker: 'SUPER SAM', text: 'There you are, Your Honor! Receiving, not theft! Different charge, different trial, another day, another budget!', pose: 'supersam_point' },
  { speaker: 'DEFENSA', text: '(And with that he slips away. Carrying the piece does not prove he entered the museum.)', pose: 'donramon_sweat' },
  { speaker: 'JUEZ', text: 'The court must concede that holding a stolen thing is not the same as stealing it.', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: 'Defense: if you maintain that man was inside gallery two, put him inside gallery two.', pose: 'judge_neutral' }
];

const STAGE_3_FAIL_EN: DialogueLine[] = [
  { speaker: 'JUEZ', pose: 'judge_thinking', text: 'That puts nobody inside that gallery, counselor.', sfx: 'damage' },
  { speaker: 'JUEZ', pose: 'judge_neutral', text: 'The court wants a trace only someone on the inside could have left.' }
];

const STAGE_3_SUCCESS_EN: DialogueLine[] = [
  { speaker: 'DEFENSA', text: 'RIGHT HERE! Caught on the wire of the mesh, on the inner side!', sfx: 'desk_slam', cutin: 'objection_toma_eso', pose: 'donramon_slam', bgm: 'objection' },
  { speaker: 'NARRADOR', text: 'Don Ramón lifts a small waxed-paper envelope with a pair of tweezers.', sfx: 'whoosh' },
  { speaker: 'DEFENSA', text: 'Caught in the mesh, on the inner side, a cream pinstriped worsted thread. Three millimetres long.', pose: 'donramon_point' },
  { speaker: 'JUEZ', text: 'Three millimetres? Counselor, that is not a thread. That is lint.', pose: 'judge_thinking' },
  { speaker: 'DEFENSA', text: 'For a man of your size, Your Honor, it is lint.', pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: 'For a man the size of a mouse, it is half a lapel.', pose: 'donramon_slam', sfx: 'desk_slam' },
  { speaker: 'NARRADOR', text: 'A murmur runs through the gallery.', sfx: 'realization' },
  { speaker: 'DEFENSA', text: 'Your Honor, I ask the court to compare that thread with the suit the witness is wearing at this moment.', pose: 'donramon_slam', sfx: 'desk_slam', cutin: 'objection_toma_eso' },
  { speaker: 'NARRADOR', text: 'Every head in the room turns towards the stand. The witness clutches the lapels of his cream pinstriped jacket.', sfx: 'realization' },
  { speaker: 'TRIPASECA', text: '...There are a thousand suits like it.', pose: 'tripaseca_panic' },
  { speaker: 'JUEZ', text: 'There may be a thousand, but only one is sitting in the stand of this court. Bailiff, take the sample.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'NARRADOR', text: 'The examiner takes four minutes. Nobody moves.', bgm: 'suspense' },
  { speaker: 'NARRADOR', text: 'The examiner nods.', sfx: 'realization', bgm: 'pursuit' },
  { speaker: 'JUEZ', text: 'It matches!', sfx: 'gavel', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'And while the examiner is on his feet, Your Honor: in the plaster of the yard wall there is a shoe print of twenty-seven and a half centimetres.', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'A size forty-two, for those of us who buy shoes and not regulations.', pose: 'donramon_idle' },
  { speaker: 'JUEZ', text: "Bailiff, the witness's shoe.", sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'NARRADOR', text: "The bailiff lifts the witness's right foot. On the sole, the size is stamped at the factory: 42.", sfx: 'realization' },
  { speaker: 'TRIPASECA', text: 'Half of Mexico wears a forty-two!', pose: 'tripaseca_panic' },
  { speaker: 'DEFENSA', text: 'Half of Mexico, yes. But half of Mexico does not also leave a thread of its jacket caught in a grate from the inside.', pose: 'donramon_slam', sfx: 'desk_slam' },
  { speaker: 'TRIPASECA', text: 'ALL RIGHT, YES!', pose: 'tripaseca_panic' },
  { speaker: 'NARRADOR', text: 'The witness jumps to his feet and knocks over the chair.', sfx: 'desk_slam' },
  { speaker: 'TRIPASECA', text: 'I did go in! I did shrink and I did go in through that grate! But I did not hit anybody!', pose: 'tripaseca_panic' },
  { speaker: 'TRIPASECA', text: 'The big man came at me and I only defended myself with what I had in my hand!', pose: 'tripaseca_panic' },
  { speaker: 'DEFENSA', text: "What you had in your hand was a prosecutor's canvas bag with six kilos of silver coin.", pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'And the watchman had the back of his head towards you, Mr. Tripaseca. Nobody defends himself against the back of a head.', pose: 'donramon_slam', sfx: 'desk_slam' },
  { speaker: 'TRIPASECA', text: '......', pose: 'tripaseca_panic' },
  { speaker: 'JUEZ', text: 'Let the confession be entered. The witness admits entering the museum and striking the watchman.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'SUPER SAM', text: '...Your Honor, the prosecution... the prosecution requests a moment.', pose: 'supersam_sweat' },
  { speaker: 'JUEZ', text: 'The prosecution has spent two days requesting moments. Denied.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'And this court has one last question, because otherwise it will not sleep.', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: 'Mr. Tripaseca: you knew the size of a grate, the month of a latch, the hour of a watchman and the state of a camera roll.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'Where did you get all of that?', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'TRIPASECA', text: 'Where else, Your Honor? From right in here! (taps his temple)', pose: 'tripaseca_smug' },
  { speaker: 'TRIPASECA', text: 'A man has his talents, you know? I was very observant. I spent weeks casing the museum, studying every corner, calculating the measurements to the millimetre...', pose: 'tripaseca_smug' },
  { speaker: 'TRIPASECA', text: "I have a privileged memory! As they say, photogenic... uh, photographic! I learned it all by heart, without writing anything down. It's the art of crime.", pose: 'tripaseca_smug' },
  { speaker: 'SUPER SAM', text: 'Of course! Time is money! Hard work pays off! A criminal who studies is a quality crook!', pose: 'supersam_point' },
  { speaker: 'CHAPULIN', text: '¡Chanfle! I forget whether the dog gets kibble or a bone, and this man memorised a whole museum with measurements and all!', pose: 'chapulin_panic' },
  { speaker: 'DEFENSA', text: '(Study? This guy could barely make it through night school...)', pose: 'donramon_sweat' },
  { speaker: 'DEFENSA', text: '¡PROTESTO!', sfx: 'desk_slam', cutin: 'objection_protesto', pose: 'donramon_slam', bgm: 'objection' },
  { speaker: 'DEFENSA', text: "Just look at this circus! Your Honor, don't make me laugh, my lips are chapped!", pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'Mr. Tripaseca? A meticulous observer? Please! He once mistook a fifty-peso note for a chewing gum wrapper and put it in his mouth.', pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: 'This man observed nothing, studied nothing, and memorised nothing!', pose: 'donramon_slam', sfx: 'desk_slam' },
  { speaker: 'TRIPASECA', text: "Hey! You can call me a thief, but don't you dare call me stupid!", pose: 'tripaseca_sweat' },
  { speaker: 'JUEZ', text: 'The court agrees it is difficult to imagine the witness as a scholar of criminal architecture...', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: 'However, he has testified under oath that he memorised it all on his own. If the defense contends it was not his memory...', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'Where, then, did all of that information come from? Prove it with evidence from the Court Record.', sfx: 'gavel', pose: 'judge_gavel' }
];

export const CASE1_CLIMAX_STAGES_EN: ClimaxStage[] = [
  {
    profileTarget: ['perfil_tripaseca'],
    prompt: 'Who was standing on the pedestal of that display case?',
    failDialogue: STAGE_1_FAIL_EN,
    successDialogue: STAGE_1_SUCCESS_EN
  },
  {
    presentTarget: ['antenitas_vinil'],
    prompt: 'What instrument does the defense propose to locate the Chicharra with, here in this room?',
    failDialogue: STAGE_2_FAIL_EN,
    successDialogue: STAGE_2_SUCCESS_EN
  },
  {
    presentTarget: ['rejilla_ducto'],
    prompt: 'What proves the witness was inside that gallery?',
    introDialogue: STAGE_3_INTRO_EN,
    pointTarget: CASE1_REJILLA_POINT_TARGET_EN,
    failDialogue: STAGE_3_FAIL_EN,
    successDialogue: STAGE_3_SUCCESS_EN
  }
];
