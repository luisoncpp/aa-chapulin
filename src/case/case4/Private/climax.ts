// @Architecture(descriptionShort="Case 4 climax, breakdown, verdict, and epilogue", type="data", icon="layers")
/**
 * Case 4 Final Climax, Verdict, and Waiting-Room Epilogue (spec §13).
 * Sin choices: dos stages con present + point, luego verdict y epílogo.
 */

import type { ClimaxDefinition } from '../../../types/index.js';
import { CASE4_EPILOGUE } from './climax_epilogue.js';
import {
  CASE4_ANILLO_POINT_TARGET, CASE4_CIERRE_POINT_TARGET,
  CASE4_CLIMAX_STAGE1_SUCCESS, CASE4_CLIMAX_STAGE2_SUCCESS, CASE4_CLIMAX_VERDICT
} from './climax_stage_success.js';

const WAITING_ROOM_BG = 'assets/bg_waiting_room.webp';

export const CASE4_CLIMAX: ClimaxDefinition = {
  dialogue: [
    { speaker: 'SUPER SAM', text: 'Facts, Your Honor. Hechos. El vino salió cerrado de la cava, lo transportó el acusado y un rato después mató a un hombre.', pose: 'supersam_slam', sfx: 'desk_slam', bgm: 'suspense' },
    { speaker: 'SUPER SAM', text: 'El señor Rufián escondió un cadáver por cobarde. Eso es otro delito y va en otra factura. ¡La copa la sirvió alguien más!', pose: 'supersam_idle' },
    { speaker: 'RUFINO', text: 'Yo recibí una botella sellada. La dejé sobre la mesa y no volví a tocarla hasta que mi invitado la abrió.', pose: 'rufino_smug' },
    { speaker: 'DEFENSA', text: 'Esa botella se abrió delante de una testigo, con el lacre puesto. Eso no lo discute nadie.', pose: 'donramon_idle' },
    { speaker: 'JUEZ', text: 'Entonces, licenciado, este tribunal necesita saber cómo entra un tóxico en una botella cerrada.', pose: 'judge_thinking' },
    { speaker: 'CHAPULIN', text: '¡Ay, Monchito! ¿Y ahora quién podrá defendernos?', pose: 'chapulin_panic' },
    { speaker: 'DEFENSA', text: 'Nosotros mismos, Chapulín. Señor juez: eso está contestado desde ayer. Lo que pasa es que la respuesta venía dentro de un corcho.', pose: 'donramon_point', bgm: 'pursuit' }
  ],
  presentTarget: ['botella_vino'],
  stages: [
    {
      presentTarget: ['botella_vino'],
      prompt: '¿Qué muestra el cierre de la V58-17 que no pudo hacer un sacacorchos?',
      pointTarget: CASE4_CIERRE_POINT_TARGET,
      successDialogue: CASE4_CLIMAX_STAGE1_SUCCESS
    },
    {
      presentTarget: ['sello_lacre'],
      prompt: '¿Qué prueba explica el fragmento que se quedó dentro del canal?',
      pointTarget: CASE4_ANILLO_POINT_TARGET,
      successDialogue: CASE4_CLIMAX_STAGE2_SUCCESS
    }
  ],
  verdict: CASE4_CLIMAX_VERDICT,
  epilogue: { bg: WAITING_ROOM_BG, dialogue: CASE4_EPILOGUE }
};
