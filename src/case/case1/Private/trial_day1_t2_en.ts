// @Architecture(descriptionShort="English Case 1 day 1 Tripaseca testimony and turnabout 1", type="data", icon="layers")
/**
 * Case 1, Day 1 — Testimony 2, El Tripaseca (§10.3) and TURNABOUT 1 (§10.4).
 * Holds the only `unlockedBy` statement in the whole case (statement 5).
 */

import type { DialogueLine, Testimony } from '../../../types/index.js';

const CASE1_GIRO_1_EN: DialogueLine[] = [
  { speaker: 'JUEZ', text: 'This court is going to order something very simple. Prosecution: the museum inventory.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'SUPER SAM', text: 'What do you want the inventory for, Your Honor?', pose: 'supersam_sweat' },
  { speaker: 'JUEZ', text: 'To learn which object in that museum weighs like a sack of coin and is flexible.', pose: 'judge_neutral' },
  { speaker: 'NARRADOR', text: 'The bailiff hands over a bundle of papers. Super Sam leafs through it. The room waits.', sfx: 'whoosh' },
  { speaker: 'SUPER SAM', text: '...Four hundred and twelve pieces, Your Honor.', pose: 'supersam_sweat' },
  { speaker: 'JUEZ', text: 'And?', pose: 'judge_thinking' },
  { speaker: 'SUPER SAM', text: 'The heaviest one a person can carry is the chicharra. One kilo two hundred. Solid gold, with filigree... sharp-edged.', pose: 'supersam_sweat' },
  { speaker: 'DEFENSA', text: 'Sharp-edged, Your Honor. With edges. And the wound has not a single one.', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'In that museum there is no object that could have made that wound.', pose: 'donramon_slam', sfx: 'desk_slam' },
  { speaker: 'JUEZ', text: 'Then the weapon came in off the street.', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: "It came in off the street, Your Honor, in somebody's hand, and left again in somebody's hand. Because it did not turn up inside either.", pose: 'donramon_point' },
  { speaker: 'NARRADOR', text: 'The room erupts. The Judge strikes the gavel three times.', sfx: 'gavel' },
  { speaker: 'JUEZ', text: 'ORDER!', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'JUEZ', text: 'Somebody walked to that museum carrying a sack of metal coin on the night of August the twenty-first.', pose: 'judge_neutral' },
  { speaker: 'DEFENSA', text: '(Somebody with a sack of coin... five minutes from the museum... and in such a hurry to close the case.)', pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: '(No. Not yet. If I say it today they will knock it down in three seconds.)', pose: 'donramon_sweat' },
  { speaker: 'DEFENSA', text: 'Your Honor, the defense has one single question and it is addressed to the prosecution.', pose: 'donramon_point' },
  { speaker: 'SUPER SAM', text: 'To ME?!', pose: 'supersam_sweat' },
  { speaker: 'DEFENSA', text: "To you. Counselor: every single day since I have known you, you have carried on your shoulder a canvas bag with the prosecutor's seal, full of silver coin.", pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: 'Today you are not carrying it. Where was that bag on the night of the twenty-first?', pose: 'donramon_slam', sfx: 'desk_slam', cutin: 'objection_protesto' },
  { speaker: 'NARRADOR', text: 'Absolute silence.', bgm: 'suspense' },
  { speaker: 'SUPER SAM', text: '...Your Honor.', pose: 'supersam_sweat' },
  { speaker: 'JUEZ', text: 'Prosecution, answer.', pose: 'judge_neutral' },
  { speaker: 'SUPER SAM', text: 'The prosecution is not going to answer that question.', pose: 'supersam_sweat' },
  { speaker: 'JUEZ', text: 'I beg your pardon?!', pose: 'judge_shock' },
  { speaker: 'SUPER SAM', text: 'And the prosecution... the prosecution requests a recess.', pose: 'supersam_sweat' },
  { speaker: 'DEFENSA', text: '(What?)', pose: 'donramon_shock' },
  { speaker: 'CHAPULIN', text: '(Don Ramón! The prosecutor who charges by the minute just asked for time!)', pose: 'chapulin_panic', updateProfile: 'perfil_supersam' },
  { speaker: 'JUEZ', text: 'The court grants the recess, and grants it with displeasure.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'JUEZ', text: 'Tomorrow this court wants two things: how the thief got in, and how the weapon got out.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: "And one thing more. The court authorises the defendant to accompany his counsel on tomorrow's enquiries, in the bailiff's custody.", pose: 'judge_neutral' },
  { speaker: 'SUPER SAM', text: 'Objection! Do you know what a custodial transfer costs?!', pose: 'supersam_case1_slam', sfx: 'desk_slam' },
  { speaker: 'JUEZ', text: 'Less than two more days of hearings, counselor.', pose: 'judge_thinking' },
  { speaker: 'CHAPULIN', text: '¡No contaban con mi astucia!', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'You did nothing, young man.', pose: 'donramon_sweat' },
  { speaker: 'CHAPULIN', text: 'But I was going to!', pose: 'chapulin_idle' },
  { speaker: 'JUEZ', text: 'This session is adjourned.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'DEFENSA', text: '(Fourteen months of rent and I have just picked a fight with the fastest prosecutor in the city.)', pose: 'donramon_sweat' },
  { speaker: 'DEFENSA', text: '(Con permisito, dijo Monchito. Tomorrow I take on that loading yard.)', pose: 'donramon_idle' }
];

const CASE1_D1_T2_SUCCESS_EN: DialogueLine[] = [
  { speaker: 'DEFENSA', text: '¡PROTESTO!', sfx: 'desk_slam', cutin: 'objection_protesto', pose: 'donramon_slam', bgm: 'objection' },
  { speaker: 'DEFENSA', text: "Your Honor, the witness attributed that \"sackful of iron\" to my client's Chipote.", pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: '"A sackful of iron." Loose metal, a great deal of it, inside something that can hold it.', pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: 'But the Chipote squeaks when squeezed. The report demands a heavy, dense object with no edges.', pose: 'donramon_slam', sfx: 'desk_slam', updateEvidence: 'informe_medico' },
  { speaker: 'DEFENSA', text: 'With the urgent expansion I requested this morning: the wound impression corresponds to a flexible object that deformed on impact. And the trajectory runs downward and from behind.', pose: 'donramon_point' },
  { speaker: 'JUEZ', text: 'Flexible and heavy at once?', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'A sack, Your Honor. A sack full of metal coin.', pose: 'donramon_slam', sfx: 'desk_slam' },
  { speaker: 'NARRADOR', text: 'A murmur runs through the gallery.', sfx: 'realization' },
  { speaker: 'TRIPASECA', text: '...I only said what I heard.', pose: 'tripaseca_sweat', updateProfile: 'perfil_tripaseca' },
  { speaker: 'SUPER SAM', text: 'Objection! A sack of coins! Where would the defendant get a sack of coins?!', pose: 'supersam_case1_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: 'That, counselor, is the first intelligent question you have asked in two days.', pose: 'donramon_idle', updateProfile: 'perfil_chapulin' },
  { speaker: 'DEFENSA', text: 'And there is another thing, Your Honor. The blow came from above. The watchman is six foot three in boots.', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'My client is five foot four. Antennae included.', pose: 'donramon_idle' },
  { speaker: 'CHAPULIN', text: 'Five foot four and a half!', pose: 'chapulin_panic' },
  { speaker: 'DEFENSA', text: 'Five foot four and a half, my apologies.', pose: 'donramon_sweat' },
  { speaker: 'JUEZ', text: 'Good gracious! To land that blow, the defendant would have had to be standing on something.', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'On something like... a wooden pedestal at waist height, Your Honor.', pose: 'donramon_point', updateProfile: 'perfil_tripaseca' },
  { speaker: 'DEFENSA', text: '(And we will come to that. Not yet. The weapon first.)', pose: 'donramon_idle' },
  ...CASE1_GIRO_1_EN
];

export const CASE1_TESTIMONY_2_EN: Testimony = {
  title: 'Testimony: What I saw through the alley window',
  witness: 'El Tripaseca',
  bgm: 'cross_exam_allegro',
  statements: [
    {
      id: 'c1_d1t2_1',
      speaker: 'TRIPASECA',
      pose: 'tripaseca_smug',
      text: 'I was walking through the loading alley around nine, on my own business.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT! What business takes a man to a loading alley at nine at night?', sfx: 'whoosh', cutin: 'objection_un_momento', pose: 'donramon_point' },
        { speaker: 'TRIPASECA', text: "A trader's business, counselor. One walks, one looks, one buys.", pose: 'tripaseca_smug' },
        { speaker: 'DEFENSA', text: 'And what did you buy that night?', pose: 'donramon_idle' },
        { speaker: 'TRIPASECA', text: 'Nothing. Bad day.', pose: 'tripaseca_smug' },
        { speaker: 'SUPER SAM', text: 'Objection! A man walking at night is not a crime! I walk at night!', pose: 'supersam_point' },
        { speaker: 'DEFENSA', text: 'Nobody said it was, counselor. I am only keeping time.', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'c1_d1t2_2',
      speaker: 'TRIPASECA',
      pose: 'tripaseca_smug',
      text: 'Through the little window of gallery two I saw that red fellow standing on the pedestal of the display case.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT! That window is two metres twenty above the alley floor. How did you see inside?', sfx: 'whoosh', cutin: 'objection_un_momento', pose: 'donramon_point' },
        { speaker: 'TRIPASECA', text: 'There is a rubbish drum underneath. I climbed up.', pose: 'tripaseca_smug' },
        { speaker: 'DEFENSA', text: '(A drum. Exactly as the Professor told me. This man is not lying about the window.)', pose: 'donramon_sweat' },
        { speaker: 'DEFENSA', text: 'Very well. And what do you say my client was standing on?', pose: 'donramon_idle' },
        { speaker: 'TRIPASECA', text: 'On the pedestal of the display case. The wooden one, about waist-high.', pose: 'tripaseca_smug' },
        { speaker: 'DEFENSA', text: '(About waist-high... through a forty-centimetre window, with frosted glass, in the dark.)', pose: 'donramon_shock' },
        { speaker: 'CHAPULIN', text: '(Don Ramón... I have never climbed a pedestal in my life. Even kerbs make me dizzy.)', pose: 'chapulin_panic' },
        { speaker: 'DEFENSA', text: '(Hold on to that, young man. I do not know what to do with it yet.)', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'c1_d1t2_3',
      speaker: 'TRIPASECA',
      pose: 'tripaseca_smug',
      text: 'He raised the chipote and struck the watchman on the back of the head. One blow, but a good one.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT! Describe the blow. No embellishment.', sfx: 'whoosh', cutin: 'objection_un_momento', pose: 'donramon_point' },
        { speaker: 'TRIPASECA', text: 'Just one. Downward, to the back of the head. The big man never turned.', pose: 'tripaseca_smug' },
        { speaker: 'JUEZ', text: 'Downward, says the witness.', pose: 'judge_thinking' },
        { speaker: 'TRIPASECA', text: 'Downward. And let me tell you another thing nobody has asked me...', pose: 'tripaseca_smug' },
        { speaker: 'JUEZ', text: 'The court wants to hear that! Witness, add that statement to your testimony.', sfx: 'gavel', pose: 'judge_gavel' }
      ]
    },
    {
      id: 'c1_d1t2_4',
      speaker: 'TRIPASECA',
      pose: 'tripaseca_smug',
      text: 'The watchman went down face first and I ran off to find the law.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT! Where did you run to?', sfx: 'whoosh', cutin: 'objection_un_momento', pose: 'donramon_point' },
        { speaker: 'TRIPASECA', text: 'The telephone on the corner. I called the police at nine oh three. You can check.', pose: 'tripaseca_smug' },
        { speaker: 'SUPER SAM', text: 'And I was four blocks away! I arrived in four minutes! FOUR! That is service!', pose: 'supersam_case1_slam', sfx: 'desk_slam' },
        { speaker: 'DEFENSA', text: 'Four minutes. How lucky the museum was to have you so near, counselor.', pose: 'donramon_idle' },
        { speaker: 'SUPER SAM', text: 'It is not luck! It is... it is efficiency!', pose: 'supersam_sweat' },
        { speaker: 'DEFENSA', text: '(He took his time answering. A quarter of a second, but he took it.)', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'c1_d1t2_5',
      unlockedBy: 'c1_d1t2_3',
      speaker: 'TRIPASECA',
      pose: 'tripaseca_smug',
      text: 'And that chipote did not sound like a toy... look, I have heard blows in my life. It sounded like a sackful of iron.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT! "A sackful of iron." Explain that to me.', sfx: 'whoosh', cutin: 'objection_un_momento', pose: 'donramon_point' },
        { speaker: 'TRIPASECA', text: 'That chipote, counselor. It sounded like dropping a box of screws. Chink, chink, chink. Iron.', pose: 'tripaseca_smug' },
        { speaker: 'DEFENSA', text: 'Iron?', pose: 'donramon_idle' },
        { speaker: 'TRIPASECA', text: 'Iron. And let the record show I only say what I heard.', pose: 'tripaseca_smug' },
        { speaker: 'CHAPULIN', text: '(Don Ramón! My chipote does not go "chink chink chink"! My chipote goes "eeeek"!)', pose: 'chapulin_panic' },
        { speaker: 'DEFENSA', text: '(I heard it, young man. I heard it.)', pose: 'donramon_idle' }
      ],
      contradiction: {
        evidence: ['informe_medico'],
        successDialogue: CASE1_D1_T2_SUCCESS_EN
      }
    }
  ]
};
