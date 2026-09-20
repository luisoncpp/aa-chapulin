// @Architecture(descriptionShort="Case 5 day 1 judicial archive hallway 7 scene", type="data", icon="layers")
/**
 * Caso 5, Día 1 — Archivo Judicial, pasillo 7 (`archivo_pasillo7`). Spec §10.3.
 */

import type { InvestigationScene } from '../../../types/index.js';
import { CASE5_PASILLO7_HOTSPOTS } from './archivo_pasillo7_hotspots.js';

export const CASE5_ARCHIVO_PASILLO7: InvestigationScene = {
  title: 'Archivo Judicial - Pasillo 7',
  name: 'Archivo Judicial - Pasillo 7',
  bg: 'assets/bg_archivo_pasillo7.webp',
  bgm: 'suspense',
  speaker: 'NARRADOR',
  idlePose: 'pazguato_idle',
  intro: [
    { speaker: 'NARRADOR', text: '6 de diciembre, 11:40 AM. Pasillo 7, primer piso. Hace un calor absurdo para diciembre.', bg: 'assets/bg_archivo_pasillo7.webp', furniture: 'none', bgm: 'suspense' },
    { speaker: 'SARGENTO', text: '¡A sus órdenes, mi Licen...!', pose: 'pazguato_saludo' },
    { speaker: 'SARGENTO', text: '...ciado.', pose: 'pazguato_sweat' },
    { speaker: 'DEFENSA', text: '¡Sargento!', pose: 'chapulin_point' },
    { speaker: 'SARGENTO', text: 'Perdone usted. Es que llevo casi tres meses diciéndole «mi licenciado» al otro y se me hace nudo la lengua.', pose: 'pazguato_sweat' },
    { speaker: 'DEFENSA', text: 'Dígame «mi licenciado» a mí. Traigo su insignia y todo.', pose: 'chapulin_idle' },
    { speaker: 'SARGENTO', text: '...A sus órdenes, mi Licenciado.', pose: 'pazguato_saludo' },
    { speaker: 'DEFENSA', text: 'Sargento, con todo respeto: ¿usted de qué lado está?', pose: 'chapulin_idle' },
    { speaker: 'SARGENTO', text: 'Del lado de asentar bien las cosas, mi Licenciado. En septiembre moví un micrófono antes de fotografiarlo y me lo recordaron seis semanas.', pose: 'pazguato_decidido' },
    { speaker: 'SARGENTO', text: 'Aquí no moví nada. Fotografié, medí, pedí análisis y me esperé.', pose: 'pazguato_decidido' },
    { speaker: 'SARGENTO', text: 'Y le voy a decir una cosa que no debería: a mí este expediente no me gusta.', pose: 'pazguato_sweat', addProfile: 'perfil_sargento' }
  ],
  hotspots: CASE5_PASILLO7_HOTSPOTS,
  talkOptions: []
};
