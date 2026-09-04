// @Architecture(descriptionShort="English Case 4 day-1 testimony 2 placeholder", type="data", icon="layers")
/**
 * Case 4 Trial Day 1 — Testimony 2 English placeholder.
 */

import type { Testimony } from '../../../types/index.js';

export const CASE4_TESTIMONY_2_EN: Testimony = {
  title: 'Testimony: The Security Chain',
  witness: 'Don Cecilio',
  bgm: 'cross_exam_allegro',
  statements: [
    {
      id: 'd1_t2_1',
      speaker: 'CECILIO',
      pose: 'cecilio_idle',
      text: 'The Suite 304 door was barred with the interior security chain.',
      pressText: [
        { speaker: 'DEFENSA', text: 'Could no one manipulate it from outside?', pose: 'donramon_point' },
        { speaker: 'CECILIO', text: 'Impossible from the hallway, distinguished counsel!', pose: 'cecilio_escandalo' }
      ]
    }
  ]
};
