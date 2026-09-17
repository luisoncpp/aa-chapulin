// @Architecture(descriptionShort="English Case 1 day 2 entry testimony and pointing 1", type="data", icon="layers")
/**
 * Case 1, Day 2 — Testimony 2, El Tripaseca (§12.3) and Pointing 1.
 * Zone bounds must be re-measured on the generated plate
 * ([[docs/lessons-learned/present-point-cover-crop.md]]).
 */

import type { DialogueLine, PointTargetContradiction, Testimony } from '../../../types/index.js';
import { CASE1_CALL_TRIPASECA_D2_T3_EN } from './witness_calls_en.js';

const FAIL_GLASS_EN: DialogueLine[] = [
  { speaker: 'JUEZ', pose: 'judge_thinking', text: 'That does not tell this court which side the blow came from, counselor.', sfx: 'damage' },
  { speaker: 'SUPER SAM', pose: 'supersam_point', text: 'One less credibility point for the defense! And counting!' },
  { speaker: 'CHAPULIN', pose: 'chapulin_idle', text: 'Steady, Don Ramón. Remember what the watchman said: where he trod on the glass.' }
];

const FAIL_RULER_EN: DialogueLine[] = [
  { speaker: 'JUEZ', pose: 'judge_thinking', text: 'That is the scale rule the examiner left, counselor. It gives the scale, not the direction of the blow.', sfx: 'damage' },
  { speaker: 'SUPER SAM', pose: 'supersam_point', text: 'One less credibility point for the defense! And counting!' },
  { speaker: 'CHAPULIN', pose: 'chapulin_idle', text: 'Steady, Don Ramón. Remember what the watchman said: where he trod on the glass.' }
];

const VITRINA_POINT_TARGET_EN: PointTargetContradiction = {
  targetEvidenceId: 'vitrina_rota',
  promptQuestion: 'Point at the plate: what proves nobody struck this case from outside?',
  imageAsset: 'assets/examine_vitrina_rota.webp',
  zones: [
    { id: 'cristal_afuera', bounds: [12, 58, 65, 98], isCorrect: true, failureDialogue: [] },
    { id: 'pedestal', bounds: [42, 42, 73, 84], isCorrect: false, failureDialogue: FAIL_GLASS_EN },
    { id: 'rejilla', bounds: [72, 48, 81, 63], isCorrect: false, failureDialogue: FAIL_GLASS_EN },
    { id: 'jaula_perico', bounds: [0, 52, 25, 92], isCorrect: false, failureDialogue: FAIL_GLASS_EN },
    { id: 'regla_testigo', bounds: [22, 85, 54, 97], isCorrect: false, failureDialogue: FAIL_RULER_EN },
    { id: 'vitrina_resto', bounds: [0, 0, 100, 100], isCorrect: false, failureDialogue: FAIL_GLASS_EN }
  ]
};

const CASE1_D2_T2_SUCCESS_EN: DialogueLine[] = [
  { speaker: 'DEFENSA', text: 'HERE, Your Honor! The glass is ALL on the outside!', sfx: 'desk_slam', cutin: 'objection_toma_eso', pose: 'donramon_slam', bgm: 'objection' },
  { speaker: 'DEFENSA', text: 'Fanned out towards the door, as far as six metres. That is why the watchman trod on glass two steps inside.', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'And the frame is bent outward, not inward.', pose: 'donramon_idle' },
  { speaker: 'TRIPASECA', text: '...And what of it?', pose: 'tripaseca_sweat' },
  { speaker: 'DEFENSA', text: 'That glass does not travel to the side it was struck from, Mr. Tripaseca. You said it yourself a minute ago: "anybody knows that".', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'This display case was broken from the inside.', pose: 'donramon_slam', sfx: 'desk_slam', updateProfile: 'perfil_tripaseca' },
  { speaker: 'NARRADOR', text: 'The room erupts.', sfx: 'realization', bgm: 'objection' },
  { speaker: 'JUEZ', text: 'ORDER! ORDER IN THE COURT!', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'JUEZ', text: 'From the inside?! It is an eighty-centimetre case!', pose: 'judge_shock' },
  { speaker: 'SUPER SAM', text: 'IMPOSSIBLE! No man fits in there! Not even a child!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: 'We agree, counselor. No man fits in there.', pose: 'donramon_idle' },
  { speaker: 'JUEZ', text: 'Then the defense will have to explain to this court who broke a closed display case from the inside.', pose: 'judge_neutral' }
];

const CASE1_D2_T2_FOLLOWUP_EN: DialogueLine[] = [
  { speaker: 'DEFENSA', text: 'Nobody fits, Your Honor. Nobody... of this size.', pose: 'donramon_point', bgm: 'pursuit' },
  { speaker: 'DEFENSA', text: 'Pastillas de Chiquitolina. They shrink whoever takes them to the size of a mouse for fifteen minutes. And they shrink what he is wearing and what he is holding as well.', pose: 'donramon_slam', sfx: 'desk_slam' },
  { speaker: 'JUEZ', text: 'Fifteen minutes?!', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'Fifteen. Not one more. And when they run out, you return to your size wherever you happen to be.', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'Your Honor: the thief did not break the display case. The thief grew inside the display case.', pose: 'donramon_slam', sfx: 'desk_slam', cutin: 'objection_toma_eso' },
  { speaker: 'NARRADOR', text: 'Silence. Then uproar.', sfx: 'realization' },
  { speaker: 'SUPER SAM', text: 'HOLD IT!! HOLD IT!!', sfx: 'desk_slam', cutin: 'objection_un_momento', pose: 'supersam_slam' },
  { speaker: 'SUPER SAM', text: 'Your Honor! And WHO, in this entire city, carries pills that shrink people?!', pose: 'supersam_point' },
  { speaker: 'SUPER SAM', text: 'THE DEFENDANT! They are listed in his own arrest report! The defense has just accused its own client!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'CHAPULIN', text: '¡Chanfle! Don Ramón, I think we have beaten ourselves!', pose: 'chapulin_panic' },
  { speaker: 'DEFENSA', text: '(Steady. Steady, Don Ramón. You saw this coming from the yard this morning.)', pose: 'donramon_sweat' },
  { speaker: 'DEFENSA', text: '...Counselor, I thank you for bringing the arrest report yourself. It saves me the trip.', pose: 'donramon_idle', updateEvidence: 'parte_detencion' },
  { speaker: 'DEFENSA', text: 'Because the report carries a laboratory annex the prosecution did not read.', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'The box of pills my client was carrying was factory-sealed. Twelve pills of twelve. With the seal intact.', pose: 'donramon_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: 'My client took none that night. And nobody shrinks on a pill that is still in the box.', pose: 'donramon_point' },
  { speaker: 'SUPER SAM', text: '...Grrr.', pose: 'supersam_sweat' },
  { speaker: 'JUEZ', text: 'Then somebody else obtained those pills.', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: "Somebody else, Your Honor. Somebody who also knew the exact size of a grate, the exact hour of a watchman and the exact month a latch broke.", pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: '(Not yet. The photograph is still missing.)', pose: 'donramon_idle' },
  { speaker: 'JUEZ', text: 'The court wishes to finish with the last piece.', pose: 'judge_neutral' },
  ...CASE1_CALL_TRIPASECA_D2_T3_EN
];

export const CASE1_TESTIMONY_4_EN: Testimony = {
  title: 'Testimony: How the thief got in',
  witness: 'El Tripaseca',
  bgm: 'cross_exam_allegro',
  statements: [
    {
      id: 'c1_d2t2_1',
      speaker: 'TRIPASECA',
      pose: 'tripaseca_smug',
      text: 'Since His Honor wants to know how he got in, I told the law from the start: through the loading door.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT! Did you tell the police that on the night of the twenty-first?', sfx: 'whoosh', cutin: 'objection_un_momento', pose: 'donramon_point' },
        { speaker: 'TRIPASECA', text: 'I told the prosecutor himself.', pose: 'tripaseca_smug' },
        { speaker: 'DEFENSA', text: 'How curious: the arrest report contains not a single line about the loading door.', pose: 'donramon_idle' },
        { speaker: 'SUPER SAM', text: 'The case was already solved! One does not write down what is no longer needed!', pose: 'supersam_sweat' },
        { speaker: 'DEFENSA', text: 'One writes down everything, counselor. That is what they pay you for.', pose: 'donramon_idle' },
        { speaker: 'JUEZ', text: 'The court asks the prosecution to refrain from deciding what is needed.', pose: 'judge_neutral' }
      ]
    },
    {
      id: 'c1_d2t2_2',
      speaker: 'TRIPASECA',
      pose: 'tripaseca_smug',
      text: 'That door has had a broken latch since March. You push it and you are in. No magic required.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT! Since March, you said?', sfx: 'whoosh', cutin: 'objection_un_momento', pose: 'donramon_point' },
        { speaker: 'TRIPASECA', text: 'Since March.', pose: 'tripaseca_smug' },
        { speaker: 'DEFENSA', text: "And how do you know which month the service door latch of a museum broke?", pose: 'donramon_shock' },
        { speaker: 'TRIPASECA', text: '...Well, you can see it. You can see it is old.', pose: 'tripaseca_sweat' },
        { speaker: 'DEFENSA', text: '"Old" you can see. "March" you cannot see, Mr. Tripaseca. March you know.', pose: 'donramon_point' },
        { speaker: 'TRIPASECA', text: 'I must have heard it from somebody. One hears things.', pose: 'tripaseca_sweat' },
        { speaker: 'JUEZ', text: 'Good gracious! Let it be entered in the record.', sfx: 'gavel', pose: 'judge_shock' },
        { speaker: 'SUPER SAM', text: 'Objection! The witness walks down that alley every day!', pose: 'supersam_slam', sfx: 'desk_slam' },
        { speaker: 'DEFENSA', text: 'Yesterday he said he was passing "on his own business". Today he passes every day. Agree on a story with your witness, counselor.', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'c1_d2t2_3',
      speaker: 'TRIPASECA',
      pose: 'tripaseca_smug',
      text: 'The coveted chicharra was inside the case, but he was outside and only glass stood between them... so he kept it simple: wham!, smashed the glass with one swing.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT! Describe the swing at the display case.', sfx: 'whoosh', cutin: 'objection_un_momento', pose: 'donramon_point' },
        { speaker: 'TRIPASECA', text: 'Like this, from above, bang! And the glass went inward.', pose: 'tripaseca_smug' },
        { speaker: 'DEFENSA', text: 'Inward?', pose: 'donramon_idle' },
        { speaker: 'TRIPASECA', text: 'Obviously. You hit glass from outside and the glass goes inward. Anybody knows that.', pose: 'tripaseca_smug' },
        { speaker: 'DEFENSA', text: '(Anybody knows that. And he is entirely right.)', pose: 'donramon_sweat' },
        { speaker: 'CHAPULIN', text: '(Don Ramón! The watchman said he trod on glass two steps from the door!)', pose: 'chapulin_point' },
        { speaker: 'DEFENSA', text: '(I know, young man. I know. Now let us look at it on the plate.)', pose: 'donramon_idle' }
      ],
      contradiction: {
        evidence: ['vitrina_rota'],
        pointTarget: VITRINA_POINT_TARGET_EN,
        successDialogue: CASE1_D2_T2_SUCCESS_EN,
        followUp: {
          evidence: ['pastillas_chiquitolina'],
          prompt: 'Who fits inside that display case?',
          successDialogue: CASE1_D2_T2_FOLLOWUP_EN
        }
      }
    },
    {
      id: 'c1_d2t2_4',
      speaker: 'TRIPASECA',
      pose: 'tripaseca_smug',
      text: 'He grabbed the chicharra and ran for the lobby, for the big door.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT! You saw him run towards the lobby?', sfx: 'whoosh', cutin: 'objection_un_momento', pose: 'donramon_point' },
        { speaker: 'TRIPASECA', text: 'I saw him. Straight for the big door.', pose: 'tripaseca_smug' },
        { speaker: 'DEFENSA', text: 'From a rubbish drum, through a forty-centimetre window.', pose: 'donramon_idle' },
        { speaker: 'TRIPASECA', text: 'From right there. And there is a photograph that proves me right, do not forget.', pose: 'tripaseca_smug' },
        { speaker: 'DEFENSA', text: '(I have not forgotten. It is all I have thought about since I saw it this morning.)', pose: 'donramon_idle' }
      ]
    }
  ]
};
