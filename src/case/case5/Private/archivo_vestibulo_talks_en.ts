// @Architecture(descriptionShort="English Case 5 day 1 vestibulo talk options and pasillo unlock", type="data", icon="layers")
/**
 * Case 5, Day 1 — conversations with Nicanor, English. Spec §10.2.
 */

import type { TalkOption } from '../../../types/index.js';

export const CASE5_VESTIBULO_TALKS_EN: TalkOption[] = [
  {
    id: 'como_encontro_cuerpo',
    label: 'How did you find the body?',
    dialogue: [
      { speaker: 'NICANOR', text: 'At five thirty-five I go up to close the hallways. Always at five thirty-five, because my relief comes at six and I lock up at seven.', pose: 'nicanor_idle' },
      { speaker: 'NICANOR', text: 'I reached seven and saw the shoes first. The shoes, then everything else.', pose: 'nicanor_sweat' },
      { speaker: 'DEFENSA', text: 'Did you move anything?', pose: 'chapulin_idle' },
      { speaker: 'NICANOR', text: 'Nothing. I ran downstairs and called. I have swept this building thirty-one years and never swept up a dead man.', pose: 'nicanor_sweat' },
      { speaker: 'NICANOR', text: 'And I do not plan to.', pose: 'nicanor_idle' }
    ]
  },
  {
    id: 'quien_mas_estuvo',
    label: 'Who else was here that afternoon?',
    unlockedByTalk: 'como_encontro_cuerpo',
    dialogue: [
      { speaker: 'NICANOR', text: 'From the public, fourteen people, all before five. The last was your counselor.', pose: 'nicanor_idle' },
      { speaker: 'DEFENSA', text: 'And the ones who are not public?', pose: 'chapulin_point' },
      { speaker: 'NICANOR', text: 'I cannot swear to those. I have my door and Miss Genoveva has hers.', pose: 'nicanor_idle' },
      { speaker: 'NICANOR', text: 'Each his own logbook, kid. Here that is like each his own grave.', pose: 'nicanor_idle' },
      { speaker: 'DEFENSA', text: '(I will have to meet Miss Genoveva.)', pose: 'chapulin_idle' },
      { speaker: 'NICANOR', text: 'Go up to seven if you like. They took the tape down this morning. And do not lean on the shelf; it is straightened.', pose: 'nicanor_escoba', unlockLocation: 'archivo_pasillo7' },
      { speaker: 'DEFENSA', text: 'Straightened?', pose: 'chapulin_idle' },
      { speaker: 'NICANOR', text: 'Dead straight. Like always. That is the only piece of furniture in this building that never gives me trouble.', pose: 'nicanor_idle' }
    ]
  }
];
