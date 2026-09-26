// @Architecture(descriptionShort="Case 5 climax, breakdown, verdict, and epilogue", type="data", icon="layers")
/**
 * Case 5 Final Climax, Verdict, and Waiting-Room Epilogue (spec §18–§19).
 */

import type { ClimaxDefinition } from '../../../types/index.js';
import { CASE5_CLIMAX_CHOICES } from './climax_choices.js';
import { CASE5_EPILOGUE } from './climax_epilogue.js';
import { assembleCase5Climax } from './climax_shared.js';
import { CASE5_CLIMAX_STAGE1 } from './climax_stage1.js';
import { CASE5_CLIMAX_STAGE2 } from './climax_stage2.js';
import { CASE5_CLIMAX_STAGE3 } from './climax_stage3.js';
import { CASE5_CLIMAX_STAGE4 } from './climax_stage4.js';
import { CASE5_CLIMAX_STAGE5 } from './climax_stage5.js';
import { CASE5_CLIMAX_GUILTY, CASE5_CLIMAX_VERDICT } from './climax_verdict.js';

export const CASE5_CLIMAX: ClimaxDefinition = {
  ...assembleCase5Climax({
    dialogue: [
      { speaker: 'JUEZ', text: 'Se señalan hechos. Las personas vienen al final o no vienen.', bgm: 'pursuit', pose: 'judge_neutral' },
      { speaker: 'JUEZ', text: 'Hoy los hechos ya no dejan a nadie más de pie.', pose: 'judge_thinking' },
      { speaker: 'JUEZ', text: 'Diga usted un nombre y respáldelo con el Acta.', sfx: 'gavel', pose: 'judge_gavel' },
      { speaker: 'DEFENSA', text: '(Don Ramón. ¿Lo digo?)', pose: 'chapulin_idle' },
      { speaker: 'DON RAMÓN', text: '(Joven, llevo diecisiete años esperando a que alguien pague mi renta.)', pose: 'donramon_idle' },
      { speaker: 'DON RAMÓN', text: '(Y cuando por fin la pagaron, fue para meterme a la cárcel.)', pose: 'donramon_idle' },
      { speaker: 'DON RAMÓN', text: '(Dígalo.)', pose: 'donramon_shock' }
    ],
    stage1: CASE5_CLIMAX_STAGE1,
    stage2: CASE5_CLIMAX_STAGE2,
    stage3: CASE5_CLIMAX_STAGE3,
    stage4: CASE5_CLIMAX_STAGE4,
    stage5: CASE5_CLIMAX_STAGE5,
    choices: CASE5_CLIMAX_CHOICES,
    verdict: CASE5_CLIMAX_VERDICT,
    epilogue: CASE5_EPILOGUE
  }),
  guiltyDialogue: CASE5_CLIMAX_GUILTY
};
