// @Architecture(descriptionShort="English Case 4 day-2 intro and Maruja testimony", type="data", icon="layers")
/** Case 4 Trial Day 2 — Opening and Testimony 3, Maruja, English. */

import type { DialogueLine, PointTargetContradiction, Testimony } from '../../../types/index.js';
import { CASE4_PLANO_POINT_TARGET } from './trial_day2_success.js';

export const CASE4_DAY2_INTRO_EN: DialogueLine[] = [
  { bg: 'assets/bg_waiting_room.webp', furniture: 'none', speaker: 'NARRADOR', text: 'October 26, 4:00 PM. High Court - Waiting Room.', bgm: 'trial' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_gavel', text: 'Court resumes.', sfx: 'gavel', bgm: 'trial' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_point', text: 'New theory, Your Honor, and this one comes with an invoice. Toxicology says poison. The defendant carried the wine and had a quarrel with the deceased.' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_slam', text: 'A poisoning plumber! I can already see the headline. And headlines cost money too.', sfx: 'desk_slam' },
  { bg: 'assets/bg_defense.webp', speaker: 'DEFENSA', pose: 'donramon_slam', text: 'OBJECTION! Between the delivery of that bottle and the glass that was poured stood another room and other hands.', sfx: 'desk_slam' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_point', text: 'Prove it, counselor.' },
  { bg: 'assets/bg_defense.webp', speaker: 'DEFENSA', pose: 'donramon_idle', text: 'That is what I came for. Yesterday I took one hypothesis apart; today I have time for the second.' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_neutral', text: 'We will hear whoever saw that bottle opened. And I want to know why this room heard a shot at an hour when there was nobody left to shoot.' }
];

const PLANO_HALF_EN: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: 'OBJECTION! Look at the plan, Your Honor: 204 and 304 share the same duct run.', sfx: 'desk_slam', bgm: 'objection', pose: 'donramon_slam' },
  { speaker: 'MARUJA', text: 'I know nothing about pipes. I know what I felt.', pose: 'maruja_nerviosa' },
  { speaker: 'SUPER SAM', text: 'A pipe does not fire, counselor. Pipes have no finger.', pose: 'supersam_point' },
  { speaker: 'JUEZ', text: 'The objection holds, but a floor plan makes no noise. Prove a bulletless effect went off there.', pose: 'judge_thinking' }
];

const CASQUILLO_HALF_EN: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: 'OBJECTION! That casing is a blank: it makes a bang and leaves no bullet.', sfx: 'desk_slam', bgm: 'objection', pose: 'donramon_slam' },
  { speaker: 'MARUJA', text: 'A blank? Well, it sounded real enough.', pose: 'maruja_nerviosa' },
  { speaker: 'SUPER SAM', text: 'A loose casing does not say which room it went off in! It could have been anywhere!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'JUEZ', text: 'Agreed. Show me how that sound reached the room the witness named.', pose: 'judge_thinking' }
];

const RUTA_EN: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: 'OBJECTION! You felt that bang in the wall, miss, but the thing that made it was not in 304!', sfx: 'desk_slam', bgm: 'objection', pose: 'donramon_slam' },
  { speaker: 'MARUJA', text: 'What do you mean, not there? I felt it right here, in my arm.', pose: 'maruja_nerviosa' },
  { speaker: 'DEFENSA', text: 'You felt it in the radiator. And that radiator comes up from a floor below.', pose: 'donramon_point' },
  { speaker: 'MARUJA', text: '...A floor below?', pose: 'maruja_nerviosa' },
  { speaker: 'SARGENTO', text: 'In 204, miss. The device fires no bullet: it makes noise, and it runs on a delay. The test is logged and signed.', pose: 'pazguato_saludo' },
  { speaker: 'CHAPULIN', text: 'Pipes are terrible gossips, Your Honor! What is said below is heard above!', pose: 'chapulin_point' },
  { speaker: 'JUEZ', text: 'Good gracious! Then no shooter was needed inside 304 at that hour!', pose: 'judge_shock' },
  { speaker: 'JUEZ', text: 'Though that does not rule out someone acting much earlier.', pose: 'judge_thinking' },
  { speaker: 'SUPER SAM', text: 'Fine. That explains the noise. But the noise poisoned nobody! Still nobody is telling me who put something in that wine!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: 'You are right. And that is why you cannot tell me the only man who could touch it was the man who carried it. Miss: you left the guest of 204 alone with that bottle.', pose: 'donramon_idle' },
  { speaker: 'MARUJA', text: '...Yes. That little while I did not see.', pose: 'maruja_nerviosa' },
  { speaker: 'DEFENSA', text: 'Nobody saw it. And that is exactly where the prosecution stopped counting.', pose: 'donramon_point' }
];

const PLANO_EN: PointTargetContradiction = {
  ...CASE4_PLANO_POINT_TARGET,
  promptQuestion: 'How did that sound reach the room the witness named?',
  zones: [
    { id: 'ramal_204_304', bounds: [42, 14, 50, 88], isCorrect: true, failureDialogue: [] },
    { id: 'plano_resto', bounds: [0, 0, 100, 100], isCorrect: false, failureDialogue: [
      { speaker: 'DEFENSA', pose: 'donramon_panic', text: 'The bang travelled through this part of the building... I think!' },
      { speaker: 'JUEZ', pose: 'judge_shock', text: 'But counselor, that section has no direct link to Suite 304!', sfx: 'damage' },
      { speaker: 'SUPER SAM', pose: 'supersam_point', text: 'Pure architectural confusion!' }
    ] }
  ]
};

export const CASE4_TESTIMONY_3_EN: Testimony = {
  title: 'Testimony: The glass and the bang',
  witness: 'Maruja',
  bgm: 'cross_exam_moderato',
  statements: [
    {
      id: 'd2_t1_1',
      speaker: 'MARUJA',
      pose: 'maruja_idle',
      text: 'I saw the plumber deliver the bottle at the 204 door. The count signed the receipt without taking off his monocle.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'MARUJA', text: 'I walked with Rufino from reception, saw the ring on his hand, and watched delivery. Botija left without entering; no ring lent, no second handover.', pose: 'maruja_coqueta' }
      ]
    },
    {
      id: 'd2_t1_2',
      speaker: 'MARUJA',
      pose: 'maruja_idle',
      text: 'Then I came back with Mr. Gómez. He uncorked the bottle himself and poured a glass. He insisted on uncorking it himself, the way all men do.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'MARUJA', text: 'I went looking for Cuajinais over a gambling debt. I left Rufino alone with the bottle between visits.', pose: 'maruja_nerviosa' },
        { speaker: 'MARUJA', text: 'Cuajinais insisted on opening it himself and gifted me the cork, which I kept before he drank and handed to the Sergeant next day.', pose: 'maruja_idle' }
      ]
    },
    {
      id: 'd2_t1_3',
      speaker: 'MARUJA',
      pose: 'maruja_idle',
      text: 'Later came the bang, and that bang was born inside 304. I was pressed to that wall and I felt it in my bones.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'MARUJA', text: 'The radiator shook most. I saw no smoke, no shooter inside 304.', pose: 'maruja_nerviosa' }
      ],
      contradiction: {
        evidence: ['plano_hotel'],
        pointTarget: { ...PLANO_EN, promptQuestion: 'What link lets a noise from another room reach 304?' },
        successDialogue: PLANO_HALF_EN,
        followUp: { evidence: ['casquillo_fogueo'], prompt: 'What object proves a bulletless effect fired there?', successDialogue: RUTA_EN }
      }
    },
    {
      id: 'd2_t1_4',
      speaker: 'MARUJA',
      pose: 'maruja_idle',
      text: 'So at a quarter past eleven somebody was inside that room working a gun. There is no other way.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'MARUJA', text: 'The observed fact was the noise. A shooter there is my inference.', pose: 'maruja_nerviosa' }
      ],
      contradiction: {
        evidence: ['casquillo_fogueo'],
        successDialogue: CASQUILLO_HALF_EN,
        followUp: { evidence: ['plano_hotel'], pointTarget: PLANO_EN, prompt: 'How did that sound reach the room the witness named?', successDialogue: RUTA_EN }
      }
    }
  ]
};
