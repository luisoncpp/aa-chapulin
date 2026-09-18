// @Architecture(descriptionShort="Case 5 day-4 courtroom intro, opening present, testimony exports, English", type="data", icon="layers")
/**
 * Case 5 Trial Day 4 — Opening (§17.1), boiler-log opening present, testimony T9, English.
 */

import type { DialogueLine, OpeningPresent } from '../../../types/index.js';
import { CASE5_DAY4_INTRO_EN } from './trial_openings.js';
import { CASE5_DAY4_OPENING_PRESENT_SUCCESS_EN } from './trial_day4_success_en.js';
import { CASE5_TESTIMONY_9_EN } from './trial_day4_t1_en.js';

export { CASE5_TESTIMONY_9_EN };

export const CASE5_DAY4_INTRO_FULL_EN: DialogueLine[] = [
  ...CASE5_DAY4_INTRO_EN,
  { speaker: 'NARRADOR', text: 'December 9, 4:00 PM. Fourth and final hearing.', bgm: 'trial' },
  { speaker: 'JUEZ', pose: 'judge_gavel', text: 'Court is back in session. This court announced yesterday that it would deliver sentence today, and it stands by that.', sfx: 'gavel' },
  { speaker: 'JUEZ', pose: 'judge_neutral', text: 'Defense: you have the floor, and you have one afternoon.' },
  { speaker: 'DEFENSA', text: 'Your Honor, before I call my witness, the defense must correct one piece of evidence.', pose: 'chapulin_idle' },
  { speaker: 'JUEZ', text: 'Correct?', pose: 'judge_thinking' },
  { speaker: 'DEFENSA', text: 'The medical examiner\'s report.', pose: 'chapulin_point' },
  { speaker: 'SECRETARIO', text: 'The prosecution does not object... though it does not understand.' },
  { speaker: 'DON RAMÓN', text: '(Nobody understands, Mr. Clerk. I don\'t either, and it\'s my neck.)', pose: 'donramon_sweat' },
  { speaker: 'JUEZ', text: 'Present what you have, defense.', sfx: 'gavel', pose: 'judge_gavel' }
];

export const CASE5_DAY4_OPENING_PRESENT_EN: OpeningPresent = {
  evidence: ['bitacora_caldera'],
  prompt: 'What room temperature did the medical examiner assume?',
  successDialogue: CASE5_DAY4_OPENING_PRESENT_SUCCESS_EN
};
