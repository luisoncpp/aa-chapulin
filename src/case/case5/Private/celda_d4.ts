// @Architecture(descriptionShort="Case 5 day 4 midnight detention cell investigation scene", type="data", icon="layers")
/**
 * Caso 5, Día 4 — Centro de Detención, celda de madrugada (`celda_c5_d4`). Spec §16.1.
 * Chapulín habla como DEFENSA; Don Ramón es el acusado.
 */

import type { InvestigationScene } from '../../../types/index.js';
import { CASE5_CELDA_D4_TALKS } from './celda_d4_talks.js';

export const CASE5_CELDA_D4: InvestigationScene = {
  title: 'Centro de Detención - Celda',
  name: 'Centro de Detención',
  bg: 'assets/bg_detention.webp',
  bgm: 'detention_center',
  speaker: 'NARRADOR',
  idlePose: 'donramon_idle',
  intro: [
    { speaker: 'NARRADOR', text: '9 de diciembre, 5:40 AM. Centro de Detención. Faltan poco más de diez horas para la última audiencia.', bg: 'assets/bg_detention.webp', furniture: 'none', bgm: 'detention_center' },
    { speaker: 'DON RAMÓN', text: 'Joven, son las cinco cuarenta de la mañana.', pose: 'donramon_idle' },
    { speaker: 'DEFENSA', text: '¡No he dormido!', pose: 'chapulin_panic' },
    { speaker: 'DON RAMÓN', text: 'Se le nota en las antenitas. Las trae chuecas.', pose: 'donramon_idle' },
    { speaker: 'DEFENSA', text: 'Don Ramón, tengo una idea y es una idea horrible.', pose: 'chapulin_idle' },
    { speaker: 'DON RAMÓN', text: 'Ésas son las que sirven. Siéntese.', pose: 'donramon_idle' }
  ],
  hotspots: [],
  talkOptions: CASE5_CELDA_D4_TALKS
};
