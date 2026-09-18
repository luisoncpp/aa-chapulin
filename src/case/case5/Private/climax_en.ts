// @Architecture(descriptionShort="English Case 5 climax, breakdown, verdict, and epilogue", type="data", icon="layers")
/**
 * Case 5 Final Climax EN — Verdict and Waiting-Room Epilogue (spec §18–§19).
 */

import type { ClimaxDefinition } from '../../../types/index.js';
import { CASE5_CLIMAX_CHOICES_EN } from './climax_choices_en.js';
import { CASE5_EPILOGUE_EN } from './climax_epilogue_en.js';
import { assembleCase5Climax } from './climax_shared.js';
import { CASE5_CLIMAX_STAGE1_EN } from './climax_stage1_en.js';
import { CASE5_CLIMAX_STAGE2_EN } from './climax_stage2_en.js';
import { CASE5_CLIMAX_STAGE3_EN } from './climax_stage3_en.js';
import { CASE5_CLIMAX_STAGE4_EN } from './climax_stage4_en.js';
import { CASE5_CLIMAX_STAGE5_EN } from './climax_stage5_en.js';
import { CASE5_CLIMAX_GUILTY_EN, CASE5_CLIMAX_VERDICT_EN } from './climax_verdict_en.js';

export const CASE5_CLIMAX_EN: ClimaxDefinition = {
  ...assembleCase5Climax({
    dialogue: [
      { speaker: 'JUEZ', text: 'Counselor: for four days this court kept you from naming a person, and it was right to.', sfx: 'gavel', bgm: 'pursuit', pose: 'judge_gavel' },
      { speaker: 'JUEZ', text: 'We establish facts. People come at the end, or they do not come.', pose: 'judge_neutral' },
      { speaker: 'JUEZ', text: 'Today the facts leave nobody else standing.', pose: 'judge_thinking' },
      { speaker: 'JUEZ', text: 'Name one and back it with the Court Record.', sfx: 'gavel', pose: 'judge_gavel' },
      { speaker: 'DEFENSA', text: '(Don Ramon. Do I say it?)', pose: 'chapulin_idle' },
      { speaker: 'DON RAMÓN', text: '(Young man, I have spent seventeen years waiting for someone to pay my rent.)', pose: 'donramon_idle' },
      { speaker: 'DON RAMÓN', text: '(And when they finally paid it, it was to put me in jail.)', pose: 'donramon_idle' },
      { speaker: 'DON RAMÓN', text: '(Say it.)', pose: 'donramon_shock' }
    ],
    stage1: CASE5_CLIMAX_STAGE1_EN,
    stage2: CASE5_CLIMAX_STAGE2_EN,
    stage3: CASE5_CLIMAX_STAGE3_EN,
    stage4: CASE5_CLIMAX_STAGE4_EN,
    stage5: CASE5_CLIMAX_STAGE5_EN,
    choices: CASE5_CLIMAX_CHOICES_EN,
    verdict: CASE5_CLIMAX_VERDICT_EN,
    epilogue: CASE5_EPILOGUE_EN
  }),
  guiltyDialogue: CASE5_CLIMAX_GUILTY_EN
};
