// @Architecture(descriptionShort="English Case 5 day 2 court correspondence talk unlocks", type="data", icon="layers")
/**
 * Case 5, Day 2 — talk options with La Chimoltrufia. Spec §12.2.
 */

import type { TalkOption } from '../../../types/index.js';

export const CASE5_CORRESPONDENCIA_TALKS_EN: TalkOption[] = [
  {
    id: 'quien_firmo_acuse',
    label: 'Who signed that receipt?',
    dialogue: [
      { speaker: 'CHIMOLTRUFIA', text: 'An older gentleman, very elegant, in a black suit and a watch chain.', pose: 'chimoltrufia_idle' },
      { speaker: 'DEFENSA', text: 'Did he come himself?', pose: 'chapulin_point' },
      { speaker: 'CHIMOLTRUFIA', text: 'Himself. He always comes himself.', pose: 'chimoltrufia_idle' },
      { speaker: 'CHIMOLTRUFIA', text: 'Well, sometimes he sends someone.', pose: 'chimoltrufia_confundida' },
      { speaker: 'CHIMOLTRUFIA', text: 'But that day he came himself, because he thanked me and called me "miss" and nobody calls me miss.', pose: 'chimoltrufia_shock' },
      { speaker: 'DEFENSA', text: 'Did he say anything about the letter?', pose: 'chapulin_idle' },
      { speaker: 'CHIMOLTRUFIA', text: 'He asked whether the bailiff would be the usual one.', pose: 'chimoltrufia_idle' },
      { speaker: 'CHIMOLTRUFIA', text: 'And then he asked whether there would be police.', pose: 'chimoltrufia_confundida' },
      { speaker: 'DEFENSA', text: '(...)', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: 'And what did you tell him?', pose: 'chapulin_panic' },
      { speaker: 'CHIMOLTRUFIA', text: 'That yes, Attorney Balbuena. On Saturdays he closes his writ book at five in the next courthouse and never arrives before five fifteen.', pose: 'chimoltrufia_idle' },
      { speaker: 'CHIMOLTRUFIA', text: 'And that there would be two custodians, as always, and that at five they change shift because otherwise they get angry.', pose: 'chimoltrufia_confundida' },
      { speaker: 'DEFENSA', text: '(That they change shift at five.)', pose: 'chapulin_panic' },
      { speaker: 'DEFENSA', text: '(The same bailiff, late as always. And the relief at five.)', pose: 'chapulin_panic' },
      { speaker: 'DEFENSA', text: '(Miss, you just told me how someone could plan those fifteen minutes and neither of us knows it.)', pose: 'chapulin_idle' }
    ]
  },
  {
    id: 'quien_pregunta_oficios',
    label: 'Who else asks about the letters?',
    unlockedByTalk: 'quien_firmo_acuse',
    dialogue: [
      { speaker: 'CHIMOLTRUFIA', text: 'Nobody, young man. Nobody asks anything here. That is why I am bored.', pose: 'chimoltrufia_idle' },
      { speaker: 'DEFENSA', text: 'Miss, can you tell me where that syndicate office is?', pose: 'chapulin_point' },
      { speaker: 'CHIMOLTRUFIA', text: 'Of course. Donceles 14, second floor. Attorney Berrondo\'s office.', pose: 'chimoltrufia_idle' },
      { speaker: 'DEFENSA', text: '...Berrondo?', pose: 'chapulin_panic' },
      { speaker: 'CHIMOLTRUFIA', text: 'Berrondo. A very fine gentleman. He sends a basket at Christmas.', pose: 'chimoltrufia_shock' },
      { speaker: 'DEFENSA', text: '(The man with the lorgnette. The one who helps the prosecution for free.)', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '(Easy does it, Chapulín. Easy does it.)', pose: 'chapulin_panic', unlockLocation: 'despacho_berrondo' }
    ]
  }
];
