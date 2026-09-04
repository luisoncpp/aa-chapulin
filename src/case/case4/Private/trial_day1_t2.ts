// @Architecture(descriptionShort="Case 4 day-1 testimony 2 placeholder", type="data", icon="layers")
/**
 * Case 4 Trial Day 1 — Testimony 2 placeholder (trial agent overwrites).
 */

import type { Testimony } from '../../../types/index.js';

export const CASE4_TESTIMONY_2: Testimony = {
  title: 'Testimonio: La cadena de seguridad',
  witness: 'Don Cecilio',
  bgm: 'cross_exam_allegro',
  statements: [
    {
      id: 'd1_t2_1',
      speaker: 'CECILIO',
      pose: 'cecilio_idle',
      text: 'La puerta de la Suite 304 estaba trabada con la cadena interior.',
      pressText: [
        { speaker: 'DEFENSA', text: '¿Nadie pudo manipularla desde afuera?', pose: 'donramon_point' },
        { speaker: 'CECILIO', text: '¡Imposible desde el pasillo, distinguido letrado!', pose: 'cecilio_escandalo' }
      ]
    }
  ]
};
