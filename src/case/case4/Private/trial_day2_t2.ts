// @Architecture(descriptionShort="Case 4 day-2 testimony 2 placeholder", type="data", icon="layers")
/**
 * Case 4 Trial Day 2 — Testimony 2 placeholder (trial agent overwrites).
 */

import type { Testimony } from '../../../types/index.js';

export const CASE4_TESTIMONY_4: Testimony = {
  title: 'Testimonio: El estampido de las 11:15',
  witness: 'Maruja',
  bgm: 'cross_exam_allegro',
  statements: [
    {
      id: 'd2_t2_1',
      speaker: 'MARUJA',
      pose: 'maruja_idle',
      text: 'A las 11:15 PM el estrépito sacudió la pared que comparte tuberías con la 304.',
      pressText: [
        { speaker: 'DEFENSA', text: '¿Qué tembló con más fuerza?', pose: 'donramon_point' },
        { speaker: 'MARUJA', text: '¡El radiador de hierro forjado!', pose: 'maruja_nerviosa' }
      ]
    }
  ]
};
