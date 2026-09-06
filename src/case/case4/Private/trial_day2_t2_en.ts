// @Architecture(descriptionShort="English Case 4 day-2 Chómpiras testimony", type="data", icon="layers")
/** Case 4 Trial Day 2 — Testimony 4, Chómpiras, English. */

import type { DialogueLine, PointTargetContradiction, Testimony } from '../../../types/index.js';
import { CASE4_REGISTRO_POINT_TARGET } from './trial_day2_success.js';

const REGISTRO_EN: PointTargetContradiction = {
  ...CASE4_REGISTRO_POINT_TARGET,
  promptQuestion: 'Which run forces us to investigate an unloading before the store?',
  zones: [
    { id: 'fila_B17_descarga', bounds: [4, 40, 96, 57], isCorrect: true, failureDialogue: [] },
    { id: 'registro_resto', bounds: [0, 0, 100, 100], isCorrect: false, failureDialogue: [
      { speaker: 'JUEZ', pose: 'judge_thinking', text: 'That row is ordinary freight. Point to the run that forces us to investigate an unloading.', sfx: 'damage' }
    ] }
  ]
};

const REGISTRO_SUCCESS_EN: DialogueLine[] = [
  { cutin: 'objection_un_momento', speaker: 'DEFENSA', text: 'HOLD IT! The same trunk is weighed twice... and it does not weigh the same!', sfx: 'desk_slam', bgm: 'objection', pose: 'donramon_slam' },
  { speaker: 'CHOMPIRAS', text: 'Let me see... a hundred kilos going up to the third floor. Twenty when it reached the roof.', pose: 'chompiras_nervous' },
  { speaker: 'CHAPULIN', text: 'Eighty kilos of difference! It is as if the trunk got hungry backwards!', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'On the third floor, eighty kilos came out of that trunk, Your Honor.', pose: 'donramon_point' },
  { speaker: 'SUPER SAM', text: 'Eighty kilos of anything, counselor. Towels. Bottles. Bricks. You cannot put a name on a weight!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: 'There I grant you the point. A weight has no name... until you find its clothes.', pose: 'donramon_idle' },
  { speaker: 'JUEZ', text: 'Then present that link, counselor.', pose: 'judge_thinking' }
];

/** Spec §10.3 closing: follows the turnabout and precedes the day-2 adjournment. */
const AFTERMATH_EN: DialogueLine[] = [
  { speaker: 'JUEZ', text: 'It is now clear that the 304 scene was staged after the move.', pose: 'judge_thinking' },
  { speaker: 'RUFINO', text: 'But I did not poison him! That man brought the bottle! When I understood what was happening I thought they would blame me... me, a man with a coat of arms!', pose: 'rufino_panic' },
  { speaker: 'DEFENSA', text: 'And the coat of arms did you no good at all, did it? Welcome to the rest of the world.', pose: 'donramon_idle' },
  { speaker: 'SUPER SAM', text: 'Your Honor, the witness has just confessed to hiding a corpse. That throws my whole spreadsheet out. The prosecution will investigate his part as well.', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: 'And the defense will follow that bottle step by step: from the moment it left the cellar to the moment somebody uncorked it.', pose: 'donramon_point' },
  { speaker: 'JUEZ', text: 'Order the search of Suite 204 and the custody of all related objects. Mr. Rufián remains at the disposal of this court.', pose: 'judge_gavel', sfx: 'gavel' },
  { speaker: 'SARGENTO', text: 'At once. I log his personal effects and the wine samples separately. Each thing in its bag and with its number.', pose: 'pazguato_decidido' },
  { speaker: 'CHAPULIN', text: 'Do not lose your keep, Botija! Only one night to go!', pose: 'chapulin_point' },
  { speaker: 'BOTIJA', text: 'That is the third time somebody tells me that. But it is the first time I believe it.', pose: 'botija_aliviado' }
];

const BAUL_SUCCESS_EN: DialogueLine[] = [
  { cutin: 'objection_toma_eso', speaker: 'DEFENSA', text: 'TAKE THAT! This swatch was snagged on the trunk lining. And its edges fit the tear in Mr. Gómez\'s suit!', sfx: 'whoosh', bgm: 'objection', pose: 'donramon_point' },
  { speaker: 'SARGENTO', text: 'The comparison is documented, Your Honor. Both photographs, at the same scale.', pose: 'pazguato_saludo' },
  { speaker: 'SUPER SAM', text: 'The man could have kept his clothes in there! People travel with clothes!', pose: 'supersam_point' },
  { speaker: 'DEFENSA', text: 'Yes. And almost always wearing them. Let us count it slowly: a victim already dead before ten, a trunk going up at 22:20, the cloth of his suit snagged inside, and eighty kilos vanishing on the third floor...', pose: 'donramon_idle' },
  { speaker: 'CHAPULIN', text: 'And the third floor is where the dead man turned up!', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'The defense holds that B-17 went up with the body inside. And I ask the gentleman who received it to tell us what he took out.', cutin: 'objection_toma_eso', sfx: 'desk_slam', bgm: 'objection', pose: 'donramon_slam' },
  { speaker: 'JUEZ', text: 'Mr. Rufián, your reception and the later opening are documented. Answer this court.', pose: 'judge_gavel', sfx: 'gavel' },
  { speaker: 'RUFINO', text: 'I... I did not want the name of this hotel dragged into such a...', pose: 'rufino_panic' },
  { speaker: 'SUPER SAM', text: 'Such a WHAT?', pose: 'supersam_point' },
  { speaker: 'RUFINO', text: 'I found him dead in my room! I panicked. I put him in the trunk and asked for it to be taken up.', pose: 'rufino_sweat' },
  { speaker: 'NARRADOR', text: 'A murmur runs through the gallery. The count\'s monocle trembles, but does not quite fall.', bgm: 'suspense' },
  { speaker: 'BOTIJA', text: '...I took him up? I sent that trunk?', pose: 'botija_nervioso' },
  { speaker: 'RUFINO', text: 'You moved a trunk, my good man. You had no reason to know the rest.', pose: 'rufino_sweat' },
  { speaker: 'BOTIJA', text: 'Don Ramón, I checked that the strap was whole. With these hands.', pose: 'botija_llorando' },
  { speaker: 'DEFENSA', text: 'And you signed the receipt, and you reported it arrived intact. Botija: your job was real. The only false thing was what rode inside.', cutin: 'objection_toma_eso', sfx: 'whoosh', bgm: 'objection', pose: 'donramon_idle' },
  ...AFTERMATH_EN
];

export const CASE4_TESTIMONY_4_EN: Testimony = {
  title: 'Testimony: A luggage freight',
  witness: 'Chómpiras',
  bgm: 'cross_exam_allegro',
  statements: [
    {
      id: 'd2_t2_1',
      speaker: 'CHOMPIRAS',
      pose: 'chompiras_idle',
      text: 'I logged B-17 leaving floor 2 and later entering the rooftop store. In my own handwriting, which may be ugly but is mine.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'CHOMPIRAS', text: 'To be precise about the middle stop: no direct 2-to-roof run. Both rows stand since the investigation.', pose: 'chompiras_nervous' }
      ]
    },
    {
      id: 'd2_t2_2',
      speaker: 'CHOMPIRAS',
      pose: 'chompiras_idle',
      text: 'The freight up to 304 was worked by Botija, and the count took delivery right there.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'CHOMPIRAS', text: 'I name him by close sight and receipt. Nothing about height or rank.', pose: 'chompiras_idle' }
      ]
    },
    {
      id: 'd2_t2_3',
      speaker: 'CHOMPIRAS',
      pose: 'chompiras_idle',
      text: 'I saw a sealed trunk leave and arrive. Only luggage rode in there, Your Honor. Not a person, because a person complains.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'CHOMPIRAS', text: 'I admit I saw no inside; I checked no visible passengers and an outer seal. My conclusion outruns that sight.', pose: 'chompiras_nervous' }
      ],
      contradiction: {
        evidence: ['registro_montacargas'],
        pointTarget: REGISTRO_EN,
        successDialogue: REGISTRO_SUCCESS_EN,
        followUp: { evidence: ['baul_etiquetas'], successDialogue: BAUL_SUCCESS_EN }
      }
    },
    {
      id: 'd2_t2_4',
      speaker: 'CHOMPIRAS',
      pose: 'chompiras_idle',
      text: 'And the strap was whole when the count received it. I signed the stub beside Botija.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'CHOMPIRAS', text: 'Number and strap confirmed. The strap breaks after Rufino takes delivery. Botija holds no hidden cabin stretch.', pose: 'chompiras_idle' }
      ]
    }
  ]
};
