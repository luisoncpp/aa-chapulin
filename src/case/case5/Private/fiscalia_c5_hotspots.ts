// @Architecture(descriptionShort="Case 5 day 3 prosecutor office canvas bag hotspot", type="data", icon="layers")
/**
 * Caso 5, Día 3 — punto de interés del despacho del fiscal. Spec §14.2.
 */

import type { Hotspot } from '../../../types/index.js';

export const CASE5_FISCALIA_C5_HOTSPOTS: Hotspot[] = [
  {
    id: 'hotspot_bolsa',
    label: 'Bolsa de lona doblada',
    x: 77, y: 84, w: 23, h: 16,
    dialogue: [
      { speaker: 'NARRADOR', text: 'En el rincón, doblada sobre una silla, una bolsa de lona cruda con el sello de la fiscalía. Vacía y limpia.' },
      { speaker: 'DEFENSA', text: '¿Y ésta?', pose: 'chapulin_idle' },
      { speaker: 'SUPER SAM', text: 'Ésa es mi bolsa.', pose: 'supersam_sweat' },
      { speaker: 'DEFENSA', text: 'Está vacía.', pose: 'chapulin_idle' },
      { speaker: 'SUPER SAM', text: 'Desde agosto.', pose: 'supersam_sweat' },
      { speaker: 'DEFENSA', text: 'Pues la que usted trae al hombro se ve bien llena.', pose: 'chapulin_idle' },
      { speaker: 'SUPER SAM', text: 'Algodón, counselor.', pose: 'supersam_sweat' },
      { speaker: 'DEFENSA', text: 'Señor fiscal, en agosto usted me acusó a mí.', pose: 'chapulin_point' },
      { speaker: 'SUPER SAM', text: 'Lo sé perfectamente, counselor. Cerré ese caso en cinco minutos. Five.', pose: 'supersam_sweat' },
      { speaker: 'SUPER SAM', text: 'Y llevo más de tres meses rellenándola de algodón para que no se me olvide por qué los cerré tan rápido.', pose: 'supersam_sweat' },
      { speaker: 'DEFENSA', text: '...¿Perdón?', pose: 'chapulin_panic' },
      { speaker: 'SUPER SAM', text: 'Nada. Get out of my office.', pose: 'supersam_point' },
      { speaker: 'DEFENSA', text: '(No. No me lo va a decir hoy. Y si se lo saco a la fuerza, deja de ser suyo.)', pose: 'chapulin_idle' }
    ]
  }
];
