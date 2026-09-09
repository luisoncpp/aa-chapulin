// @Architecture(descriptionShort="English Case 4 day-1 intro and testimony", type="data", icon="layers")
/** Case 4 Trial Day 1 — Opening and Testimony 1, Cecilio, English. */

import type { DialogueLine, PointTargetContradiction, Testimony } from '../../../types/index.js';
import { CASE4_CADENA_POINT_TARGET } from './trial_day1_success.js';
void CASE4_CADENA_POINT_TARGET;

export const CASE4_TRIAL_INTRO_EN: DialogueLine[] = [
  { bg: 'assets/bg_waiting_room.webp', furniture: 'none', speaker: 'NARRADOR', text: 'October 25, 3:00 PM. High Court - Waiting Room.', bgm: 'trial' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_gavel', text: 'Order in this court! This hearing opens over the death of the Suite 304 guest.', sfx: 'gavel', bgm: 'trial' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_idle', text: 'One dead man, one gun, one man locked in with both. Time is money, Your Honor: this court bills by the hour, and so do I.' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_slam', text: 'And on top of it the defendant is a plumber! A man who earns his living putting his hand where it does not belong!', sfx: 'desk_slam' },
  { bg: 'assets/bg_defense.webp', speaker: 'DEFENSA', pose: 'donramon_slam', text: 'OBJECTION! Pardon me, said Monchito!', sfx: 'desk_slam' },
  { bg: 'assets/bg_defense.webp', speaker: 'DEFENSA', pose: 'donramon_point', text: 'That man walked into that suite because the hotel sent him to work. With a written order and an hour on it.' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_point', text: 'A work order explains the door, counselor. It does not explain the corpse.' },
  { bg: 'assets/bg_defense.webp', speaker: 'DEFENSA', pose: 'donramon_idle', text: 'Not yet. But it explains why the prosecution\'s only suspect showed up armed with a pipe wrench.' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_neutral', text: 'Both observations stand. We will first hear how that door was found.' }
];

const POINT_EN: PointTargetContradiction = {
  ...CASE4_CADENA_POINT_TARGET,
  promptQuestion: 'What route lets this latch be worked from the corridor after preparing it?',
  zones: [
    { id: 'puerta_lazo', bounds: [49, 40, 63, 68], isCorrect: true, failureDialogue: [] },
    { id: 'cadena_resto', bounds: [0, 0, 100, 100], isCorrect: false, failureDialogue: [
      { speaker: 'JUEZ', pose: 'judge_thinking', text: 'That point does not connect to the corridor, counselor. Review the whole route.', sfx: 'damage' },
      { speaker: 'SUPER SAM', pose: 'supersam_slam', text: 'And every minute of this court costs money, counselor!', sfx: 'desk_slam' },
      { speaker: 'DEFENSA', pose: 'donramon_sweat', text: '(And every mistake costs me a piece of my client. Again, Monchito. Slowly.)' }
    ] }
  ]
};

const T1_SUCCESS_EN: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: 'OBJECTION! That chain tells us how the door stood when you arrived, not who left it that way!', sfx: 'desk_slam', bgm: 'objection', pose: 'donramon_slam' },
  { speaker: 'CECILIO', text: 'But the bolt is on the inside face, counselor. Even I can see that.', pose: 'cecilio_ciego' },
  { speaker: 'DEFENSA', text: 'Then look closer: a thread runs through that bolt, and the thread continues to the edge of the door.', pose: 'donramon_point' },
  { speaker: 'CHAPULIN', text: 'And the little piece they picked up in the corridor is the same thread! My antennae tingled!', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'His antennae and the Sergeant\'s inventory, which for our purposes agree.', pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: 'With the door open you prepare the loop. Then you pull from the corridor and the chain drops by itself. The only thing that went wrong for whoever did it was one piece snagging.', pose: 'donramon_point' },
  { speaker: 'JUEZ', text: 'Good gracious! Then someone could have acted after the defendant went in?', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'They could. That is what this piece proves. Who did it, not yet.', pose: 'donramon_idle' },
  { speaker: 'SUPER SAM', text: 'And it does not prove the plumber did not slide it with his own hand!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: 'Correct, prosecutor. So now we review your homicide. It is running late.', pose: 'donramon_idle' }
];

export const CASE4_TESTIMONY_1_EN: Testimony = {
  title: 'Testimony: The Only Person Inside',
  witness: 'Don Cecilio Buenavista',
  bgm: 'cross_exam_moderato',
  statements: [
    {
      id: 'd1_t1_1',
      speaker: 'CECILIO',
      pose: 'cecilio_idle',
      text: 'After that bang I went up to 304 with the Sergeant. Thirty-one years without a scandal in my hotel, Your Honor. Thirty-one.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'CECILIO', text: 'I heard the bang; what I saw was the door later. I name no shooter.', pose: 'cecilio_ciego' }
      ]
    },
    {
      id: 'd1_t1_2',
      speaker: 'CECILIO',
      pose: 'cecilio_idle',
      text: 'The key lock stood open, but the chain would not let us in. I checked that with my hand, not with my eyes.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'CECILIO', text: 'The leaf stopped on the chain, not on furniture nor a second lock.', pose: 'cecilio_idle' }
      ]
    },
    {
      id: 'd1_t1_3',
      speaker: 'CECILIO',
      pose: 'cecilio_idle',
      text: 'And that bolt, gentlemen, can only be slid by someone who is inside the room.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'CECILIO', text: 'I describe the plate as I saw it. My conclusion needs nobody to have rigged it before.', pose: 'cecilio_ciego' }
      ],
      contradiction: { evidence: ['candado_cadena'], pointTarget: POINT_EN, successDialogue: T1_SUCCESS_EN }
    },
    {
      id: 'd1_t1_4',
      speaker: 'CECILIO',
      pose: 'cecilio_idle',
      text: 'Since Mr. Botija was the only living soul we found in there, he must have slid the chain himself.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'SUPER SAM', text: 'The finding wants explaining, though the witness saw no hand work the latch.', pose: 'supersam_point' }
      ],
      contradiction: { evidence: ['candado_cadena'], pointTarget: POINT_EN, successDialogue: T1_SUCCESS_EN }
    }
  ]
};
