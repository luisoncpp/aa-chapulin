// @Architecture(descriptionShort="Case 5 day 3 penal personal effects investigation scene", type="data", icon="layers")
/**
 * Caso 5, Día 3 — Penal del Distrito, bodega de efectos (`penal_efectos`). Spec §14.3.
 */

import type { InvestigationScene } from '../../../types/index.js';
import { CASE5_PENAL_EFECTOS_HOTSPOTS } from './penal_efectos_hotspots.js';

export const CASE5_PENAL_EFECTOS: InvestigationScene = {
  title: 'Penal del Distrito — Bodega de Efectos',
  name: 'Penal — efectos',
  bg: 'assets/bg_penal_efectos.webp',
  bgm: 'suspense',
  speaker: 'NARRADOR',
  idlePose: 'pazguato_idle',
  intro: [
    { speaker: 'NARRADOR', text: '8 de diciembre, 2:40 PM. Penal del Distrito, bodega de efectos personales.', bg: 'assets/bg_penal_efectos.webp', furniture: 'none', bgm: 'suspense' },
    { speaker: 'NARRADOR', text: 'Trescientas cajas de cartón numeradas en un estante metálico. En la etiqueta de la 214-J dice: LENGUA, CASIMIRO.' },
    { speaker: 'SARGENTO', text: 'Caja doscientos catorce jota, mi Licenciado. Y fíjese en el número.', pose: 'pazguato_decidido' },
    { speaker: 'DEFENSA', text: 'Doscientos catorce.', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: 'Como la foja del expediente que dejó abierto.', pose: 'chapulin_panic' },
    { speaker: 'SARGENTO', text: 'Coincidencia, mi Licenciado. Lo verifiqué: se las numeran por orden de ingreso.', pose: 'pazguato_idle' },
    { speaker: 'DEFENSA', text: '...Ya.', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: '(Coincidencia. Pero yo me acordé de la foja por el número, y por eso vine.)', pose: 'chapulin_idle' }
  ],
  hotspots: CASE5_PENAL_EFECTOS_HOTSPOTS,
  talkOptions: []
};
