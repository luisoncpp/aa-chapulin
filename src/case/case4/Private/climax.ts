// @Architecture(descriptionShort="Case 4 climax, breakdown, verdict, and epilogue", type="data", icon="layers")
/**
 * Case 4 Final Climax, Verdict, and Waiting-Room Epilogue.
 */

import type { ClimaxDefinition } from '../../../types/index.js';
import { CASE4_EPILOGUE } from './climax_epilogue.js';
import {
  CASE4_CLIMAX_BOTTLE_POINT, CASE4_CLIMAX_STAGE1_SUCCESS,
  CASE4_CLIMAX_STAGE2_SUCCESS, CASE4_CLIMAX_VERDICT
} from './climax_stage_success.js';

const WAITING_ROOM_BG = 'assets/bg_waiting_room.webp';

export const CASE4_CLIMAX: ClimaxDefinition = {
  dialogue: [
    { speaker: 'RUFINO', text: '¡Pamplinas! ¡Nadie en esta sala puede demostrar científicamente cómo entró el cianuro a esa botella si el corcho estaba sellado con mi lacre intacto!', pose: 'rufino_panic', sfx: 'desk_slam', bgm: 'pursuit' },
    { speaker: 'JUEZ', text: '¡Silencio en la sala! Licenciado Monchito: el testigo desafía a este tribunal. ¿Tiene la defensa en sus manos la prueba material que demuestra cómo se inoculó el veneno sin violar el corcho?', pose: 'judge_gavel', sfx: 'gavel' },
    { speaker: 'DEFENSA', text: '¡La defensa tiene la prueba decisiva que destruirá la coartada del falso conde!', cutin: 'objection_protesto', sfx: 'desk_slam', pose: 'donramon_slam' }
  ],
  presentTarget: ['botella_vino'],
  stages: [
    {
      presentTarget: ['botella_vino'],
      prompt: '¿Qué prueba material demuestra cómo se inoculó el veneno sin violar el corcho?',
      pointTarget: CASE4_CLIMAX_BOTTLE_POINT,
      successDialogue: CASE4_CLIMAX_STAGE1_SUCCESS
    },
    {
      presentTarget: ['sello_lacre'],
      prompt: '¿Con qué objeto específico se derritió y estampó el sello de lacre?',
      successDialogue: CASE4_CLIMAX_STAGE2_SUCCESS
    }
  ],
  verdict: CASE4_CLIMAX_VERDICT,
  epilogue: { bg: WAITING_ROOM_BG, dialogue: CASE4_EPILOGUE }
};
