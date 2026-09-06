// @Architecture(descriptionShort="English Case 4 day-1 Sargento testimony", type="data", icon="layers")
/** Case 4 Trial Day 1 — Testimony 2, Sergeant, English. */

import type { DialogueLine, Testimony } from '../../../types/index.js';
import { CASE4_D1_T2_ALMOHADA_SUCCESS, CASE4_D1_T2_FORENSE_SUCCESS } from './trial_day1_success.js';

const FORENSE_EN: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: 'OBJECTION! That sequence falls apart with the supplement, Sergeant!', sfx: 'desk_slam', bgm: 'objection', pose: 'donramon_slam' },
  { speaker: 'SUPER SAM', text: 'Explain yourself, counselor. And be quick, the meter is running.', pose: 'supersam_point' },
  { speaker: 'DEFENSA', text: 'The wound shows no vital reaction. In plain words, Your Honor: that body was already dead when the bullet went in.', pose: 'donramon_point' },
  { speaker: 'JUEZ', text: 'Good gracious! Are you telling this court that somebody shot a dead man?', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'I am. And the report closes the death window at ten at night, margin and all. Botija clocked in to work at five past eleven.', pose: 'donramon_point' },
  { speaker: 'CHAPULIN', text: 'He arrived an hour and five minutes too late to kill him!', pose: 'chapulin_point', updateEvidence: 'informe_policial' },
  { speaker: 'BOTIJA', text: 'Then... when I walked into that bathroom...', pose: 'botija_nervioso' },
  { speaker: 'DEFENSA', text: 'That man had been dead a good while behind the screen.', pose: 'donramon_idle' },
  { speaker: 'BOTIJA', text: 'And me tightening a nut.', pose: 'botija_llorando' },
  { speaker: 'SUPER SAM', text: '...Grrr. That changes the cause. But the shot happened! I have the bullet right here, and bullets are not invented!', pose: 'supersam_sweat', bgm: 'objection' },
  { speaker: 'JUEZ', text: 'And what object in that room would account for a shot nobody could tell from the bang?', pose: 'judge_thinking' }
];

const ALMOHADA_EN: DialogueLine[] = [
  { speaker: 'DEFENSA', text: 'The pillow! It has the hole and the cloth is scorched: the gun was fired resting against it.', pose: 'donramon_point' },
  { speaker: 'CHAPULIN', text: 'They put a pillow on the dead man! And then they say I am the odd one!', pose: 'chapulin_idle' },
  { speaker: 'SARGENTO', text: 'That hole is exactly why we asked for the comparison, counselor. The moment ballistics comes in, I file it.', pose: 'pazguato_saludo' },
  { speaker: 'DEFENSA', text: 'I do not call it silent, Your Honor. I say that shot is not the bang the whole hotel heard, and until today we were billing them as one.', pose: 'donramon_idle' },
  { speaker: 'JUEZ', text: 'It stands refuted that the bullet killed at 23:15.', pose: 'judge_gavel', sfx: 'gavel' },
  { speaker: 'SUPER SAM', text: '...The prosecution drops that reconstruction. But the defendant carried the drink up to the victim, and that same afternoon they fought!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: 'A quarrel is not a cause of death, prosecutor. If it were, my landlord would have been stiff for sixteen months.', pose: 'donramon_idle' },
  { speaker: 'SUPER SAM', text: 'Precisely! So I am asking for toxicology and a rebuild of the service. A serious prosecutor does not ignore an autopsy: he re-invoices it.', pose: 'supersam_sweat' },
  { speaker: 'JUEZ', text: 'The inquiry widens. The noise hour stops being the killing hour.', pose: 'judge_gavel', sfx: 'gavel' }
];

const SUPPLEMENT_PRESS: DialogueLine[] = [
  { speaker: 'SARGENTO', text: 'One moment, Your Honor! The court office has just received the supplement we asked for yesterday up in the suite.', pose: 'pazguato_saludo' },
  { speaker: 'SUPER SAM', text: 'You ordered extra examinations? That comes out of the prosecution budget! YOUR SALARY IS CUT!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'SARGENTO', text: 'That makes three paychecks, prosecutor. At this rate I will end up working for you free... which is to say, exactly as now.', pose: 'pazguato_sweat' },
  { speaker: 'JUEZ', text: 'Enter the document for both sides before we continue.', pose: 'judge_gavel', sfx: 'gavel' },
  { speaker: 'NARRADOR', text: 'The report sets out tissue reaction, the death window, and the analyses still pending.' },
  { speaker: 'SARGENTO', text: 'That one was my report. This one is the coroner\'s. And they do not say the same thing.', pose: 'pazguato_decidido', addEvidence: 'informe_forense' }
];

export const CASE4_TESTIMONY_2_EN: Testimony = {
  title: 'Testimony: The Sequence I Logged',
  witness: 'Sergeant Pazguato',
  bgm: 'cross_exam_allegro',
  statements: [
    {
      id: 'd1_t2_1',
      speaker: 'SARGENTO',
      pose: 'pazguato_idle',
      text: 'At 23:15 we heard the bang, Your Honor. At 23:20 we got the room open by sheer shoving.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'SARGENTO', text: 'One thing is the noise, another the opening. Five minutes passed between them.', pose: 'pazguato_saludo' }
      ]
    },
    {
      id: 'd1_t2_2',
      speaker: 'SARGENTO',
      pose: 'pazguato_idle',
      text: 'The victim bore a chest wound and there was a revolver beside the body. I photographed it before touching it, because that is what they pay me for. Poorly, but they pay me.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'SARGENTO', text: 'Let us review gun and pillow when the supplement arrives. For now they stand as found.', pose: 'pazguato_sweat' }
      ]
    },
    {
      id: 'd1_t2_3',
      speaker: 'SARGENTO',
      pose: 'pazguato_idle',
      text: 'My first reconstruction was that the bullet killed him right when the bang sounded.',
      pressText: [
        ...SUPPLEMENT_PRESS
      ],
      contradiction: {
        evidence: ['informe_forense'],
        successDialogue: FORENSE_EN,
        followUp: { evidence: ['foto_crimen', 'informe_policial'], prompt: 'What object could have muffled the real shot?', successDialogue: ALMOHADA_EN }
      }
    },
    {
      id: 'd1_t2_4',
      speaker: 'SARGENTO',
      pose: 'pazguato_idle',
      text: 'And that was the sequence I used to tie Mr. Botija to the killing.',
      pressText: [
        ...SUPPLEMENT_PRESS
      ],
      contradiction: {
        evidence: ['informe_forense'],
        successDialogue: FORENSE_EN,
        followUp: { evidence: ['foto_crimen', 'informe_policial'], prompt: 'What object could have muffled the real shot?', successDialogue: ALMOHADA_EN }
      }
    }
  ]
};

void CASE4_D1_T2_FORENSE_SUCCESS;
void CASE4_D1_T2_ALMOHADA_SUCCESS;
