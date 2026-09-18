// @Architecture(descriptionShort="Case 5 day-1 Sargento testimony two (EN)", type="data", icon="layers")
/**
 * Case 5 Trial Day 1 — Testimony 2, El Sargento (spec §11.3), English.
 */

import type { DialogueLine, Testimony } from '../../../types/index.js';
import { CASE5_D1_T2_PARTE_SUCCESS_EN, CASE5_D1_T2_TARJETA_SUCCESS_EN } from './trial_day1_success_en.js';

const MOMENTO: DialogueLine = {
  speaker: 'DEFENSA',
  text: 'HOLD IT!',
  cutin: 'objection_un_momento',
  sfx: 'whoosh',
  pose: 'chapulin_point'
};

export const CASE5_TESTIMONY_2_EN: Testimony = {
  title: 'Testimony: The Sequence I Logged',
  witness: 'El Sargento',
  bgm: 'cross_exam_moderato',
  statements: [
    {
      id: 'c5_d1t2_1',
      speaker: 'SARGENTO',
      pose: 'pazguato_idle',
      text: 'I got the call at five thirty-eight and arrived at five fifty-two with the coroner.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'Fourteen minutes on the road. Why so fast?', pose: 'chapulin_point' },
        { speaker: 'SARGENTO', text: 'Because the Archive is across the street from the courthouse, counselor. I mean... sorry.', pose: 'pazguato_sweat' },
        { speaker: 'SUPER SAM', text: 'Your salary is cut!', pose: 'supersam_point' },
        { speaker: 'SARGENTO', text: 'Not anymore, prosecutor. Since October I am on the pay scale.', pose: 'pazguato_decidido' },
        { speaker: 'SUPER SAM', text: '...Since when?', pose: 'supersam_sweat' },
        { speaker: 'SARGENTO', text: 'Since you signed my promotion without reading it.', pose: 'pazguato_decidido' },
        { speaker: 'NARRADOR', text: 'Laughter in the gallery.', sfx: 'realization' },
        { speaker: 'JUEZ', text: 'Order!', sfx: 'gavel', pose: 'judge_gavel' }
      ]
    },
    {
      id: 'c5_d1t2_2',
      speaker: 'SARGENTO',
      pose: 'pazguato_idle',
      text: 'The body lay face down between shelf seven and the reading table, head toward the shelf.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'Head toward the shelf?', pose: 'chapulin_point' },
        { speaker: 'SARGENTO', text: 'Toward the shelf. Feet toward the table. He fell forward, like someone walking who just switches off.', pose: 'pazguato_idle' },
        { speaker: 'DEFENSA', text: 'So he had his back to whoever hit him.', pose: 'chapulin_idle' },
        { speaker: 'SARGENTO', text: 'Back turned and seated, counselor. The chair had tipped backward.', pose: 'pazguato_idle' },
        { speaker: 'DEFENSA', text: '(Seated. Reading. Lamp on and a file open.)', pose: 'chapulin_panic' },
        { speaker: 'DON RAMÓN', text: '(He was waiting for the bailiff. He told me: "I will wait here.")', pose: 'donramon_sweat' }
      ]
    },
    {
      id: 'c5_d1t2_3',
      speaker: 'SARGENTO',
      pose: 'pazguato_idle',
      text: 'One meter away, Volume XI of an encyclopedia, blood on the spine edge. I photographed it before touching it.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'Describe the blow, Sergeant.', pose: 'chapulin_point' },
        { speaker: 'SARGENTO', text: 'One only. On the back of the neck. The preliminary report fixes a straight edge four centimeters long.', pose: 'pazguato_idle' },
        { speaker: 'DEFENSA', text: 'And with how much force?', pose: 'chapulin_idle' },
        { speaker: 'SARGENTO', text: 'It is not yet established whether the object was cushioned or applied another way. I asked the coroner to enlarge the mark analysis.', pose: 'pazguato_sweat' },
        { speaker: 'JUEZ', text: 'That enlargement is still pending, then?', pose: 'judge_shock' },
        { speaker: 'SARGENTO', text: 'Yes, Your Honor. I do not want to confuse what we saw with what the expert still has to conclude.', pose: 'pazguato_idle' },
        { speaker: 'DEFENSA', text: '(A straight edge four centimeters long. I need the manner of the blow, not just the mark size.)', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: '(I hope that enlargement arrives before today\'s trial closes.)', pose: 'chapulin_panic' }
      ]
    },
    {
      id: 'c5_d1t2_4',
      speaker: 'SARGENTO',
      pose: 'pazguato_idle',
      text: 'In his right hand he held a corner of card stock, with a typewritten address.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'That corner of card stock. Was it squeezed tight?', pose: 'chapulin_point' },
        { speaker: 'SARGENTO', text: 'The hand was closed, counselor. I logged that.', pose: 'pazguato_idle' },
        { speaker: 'DEFENSA', text: 'I did not ask about the hand. I asked about the paper.', pose: 'chapulin_point' },
        { speaker: 'SARGENTO', text: '...The paper was smooth.', pose: 'pazguato_sweat' },
        { speaker: 'JUEZ', text: 'Smooth?', pose: 'judge_thinking' },
        { speaker: 'SARGENTO', text: 'Smooth, Your Honor. Not a wrinkle. I took it out with tweezers, put it in an envelope, and it felt odd, but you log facts, you do not opine.', pose: 'pazguato_decidido' },
        { speaker: 'DEFENSA', text: '(You log facts, Sergeant. I will opine.)', pose: 'chapulin_idle' }
      ]
    },
    {
      id: 'c5_d1t2_5',
      speaker: 'SARGENTO',
      pose: 'pazguato_idle',
      text: 'I took statements from the hallway custodians. Both told me that all afternoon nobody went up except the defendant.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'Both custodians?', pose: 'chapulin_point' },
        { speaker: 'SARGENTO', text: 'Both. Alfredo Rangel and Jesus Nieto. Both said the same thing.', pose: 'pazguato_idle' },
        { speaker: 'DEFENSA', text: 'And were they at the hallway gate all afternoon?', pose: 'chapulin_idle' },
        { speaker: 'SARGENTO', text: '...All afternoon, yes. Well.', pose: 'pazguato_sweat' },
        { speaker: 'SARGENTO', text: 'Your Honor, may I add something to my testimony? Because if I do not say it I will not sleep.', pose: 'pazguato_sweat' },
        { speaker: 'JUEZ', text: 'The court wants to hear that! Witness, add that statement to your testimony.', sfx: 'gavel', pose: 'judge_gavel' },
        { speaker: 'NARRADOR', text: 'A new statement has been added to the testimony.', sfx: 'realization' }
      ]
    },
    {
      id: 'c5_d1t2_6',
      speaker: 'SARGENTO',
      pose: 'pazguato_idle',
      text: '...Both pairs of custodians, Your Honor. Because at five o\'clock there was a shift change.',
      unlockedBy: 'c5_d1t2_5',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'Shift change?', pose: 'chapulin_point' },
        { speaker: 'SARGENTO', text: 'Duty rotation, counselor. Rangel and Nieto handed off at five. The ones who came in were Cadena and Solis.', pose: 'pazguato_idle' },
        { speaker: 'DEFENSA', text: 'And what time did Cadena and Solis reach the gate?', pose: 'chapulin_point' },
        { speaker: 'SARGENTO', text: '...They did not tell me that. It is on the shift-change sheet.', pose: 'pazguato_sweat' },
        { speaker: 'SUPER SAM', text: 'Irrelevant! A shift change lasts as long as a handshake!', pose: 'supersam_slam', sfx: 'desk_slam' },
        { speaker: 'DEFENSA', text: '(A handshake. Let us see how long a handshake lasts in this country.)', pose: 'chapulin_idle' }
      ],
      contradiction: {
        evidence: ['parte_detencion'],
        successDialogue: CASE5_D1_T2_PARTE_SUCCESS_EN,
        followUp: {
          evidence: ['esquina_tarjeta'],
          prompt: 'How did that paper reach the deceased\'s hand?',
          successDialogue: CASE5_D1_T2_TARJETA_SUCCESS_EN
        }
      }
    }
  ]
};
