// @Architecture(descriptionShort="Case 4 day-3 testimony 2 placeholder", type="data", icon="layers")
/**
 * Case 4 Trial Day 3 — Testimony 2 placeholder (trial agent overwrites).
 */

import type { Testimony } from '../../../types/index.js';

export const CASE4_TESTIMONY_6: Testimony = {
  title: 'Testimonio: Yo jamás subí al tercer piso',
  witness: 'Rufino Rufián',
  bgm: 'cross_exam_presto',
  statements: [
    {
      id: 'd3_t2_1',
      speaker: 'RUFINO',
      pose: 'rufino_sweat',
      text: 'Jamás pisé la Suite 304 ni toqué al occiso.',
      pressText: [
        { speaker: 'DEFENSA', text: '¿Y su baúl de viaje?', pose: 'donramon_point' },
        { speaker: 'RUFINO', text: '¡Calumnias de un plebeyo ignorante!', pose: 'rufino_panic' }
      ]
    }
  ]
};
