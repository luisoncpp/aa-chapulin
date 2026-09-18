// @Architecture(descriptionShort="Case 5 day 4 archive boiler room investigation scene", type="data", icon="layers")
/**
 * Caso 5, Día 4 — Sótano del Archivo Judicial, sala de calderas (`archivo_caldera`). Spec §16.2.
 */

import type { InvestigationScene } from '../../../types/index.js';
import { CASE5_ARCHIVO_CALDERA_HOTSPOTS } from './archivo_caldera_hotspots.js';

export const CASE5_ARCHIVO_CALDERA: InvestigationScene = {
  title: 'Archivo Judicial - Sala de Calderas',
  name: 'Sala de calderas',
  bg: 'assets/bg_archivo_caldera.webp',
  bgm: 'investigation_core',
  speaker: 'NARRADOR',
  idlePose: 'pazguato_idle',
  intro: [
    { speaker: 'NARRADOR', text: '9 de diciembre, 7:20 AM. Sótano del Archivo Judicial, sala de calderas.', bg: 'assets/bg_archivo_caldera.webp', furniture: 'none', bgm: 'investigation_core' },
    { speaker: 'NARRADOR', text: 'Una caldera de hierro remachado y dos secadores industriales, apagados desde el martes. El cuarto ya se ha enfriado.' },
    { speaker: 'SARGENTO', text: '¡A sus órdenes, mi Licenciado! Llevo aquí desde las cuatro.', pose: 'pazguato_saludo' },
    { speaker: 'CHOMPIRAS', text: 'Y yo desde las cuatro y media, porque él tiene llave y yo tengo pata de cabra.', pose: 'chompiras_idle' },
    { speaker: 'DEFENSA', text: 'Sargento, necesito dos cosas y las dos son de hoy.', pose: 'chapulin_point' },
    { speaker: 'SARGENTO', text: 'Deme la primera.', pose: 'pazguato_decidido' }
  ],
  hotspots: CASE5_ARCHIVO_CALDERA_HOTSPOTS,
  talkOptions: []
};
