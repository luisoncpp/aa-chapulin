// @Architecture(descriptionShort="Case 5 day 2 court correspondence office talk unlocks", type="data", icon="layers")
/**
 * Caso 5, Día 2 — conversaciones con la Chimoltrufia. Spec §12.2.
 */

import type { TalkOption } from '../../../types/index.js';

export const CASE5_CORRESPONDENCIA_TALKS: TalkOption[] = [
  {
    id: 'quien_firmo_acuse',
    label: '¿Quién firmó ese acuse?',
    dialogue: [
      { speaker: 'CHIMOLTRUFIA', text: 'Un señor mayor, muy elegante, de traje negro y cadenita de reloj.', pose: 'chimoltrufia_idle' },
      { speaker: 'DEFENSA', text: '¿Vino él mismo?', pose: 'chapulin_point' },
      { speaker: 'CHIMOLTRUFIA', text: 'Él mismo. Siempre viene él mismo.', pose: 'chimoltrufia_idle' },
      { speaker: 'CHIMOLTRUFIA', text: 'Bueno, a veces manda a alguien.', pose: 'chimoltrufia_confundida' },
      { speaker: 'CHIMOLTRUFIA', text: 'Pero ese día vino él, porque me dio las gracias y me dijo «señorita» y a mí nadie me dice señorita.', pose: 'chimoltrufia_shock' },
      { speaker: 'DEFENSA', text: '¿Y le dijo algo del oficio?', pose: 'chapulin_idle' },
      { speaker: 'CHIMOLTRUFIA', text: 'Me preguntó si el actuario iba a ser el mismo de siempre.', pose: 'chimoltrufia_idle' },
      { speaker: 'CHIMOLTRUFIA', text: 'Y luego me preguntó si iba a haber policía.', pose: 'chimoltrufia_confundida' },
      { speaker: 'DEFENSA', text: '(...)', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '¿Y usted qué le dijo?', pose: 'chapulin_panic' },
      { speaker: 'CHIMOLTRUFIA', text: 'Que sí, el licenciado Balbuena. Los sábados cierra su libro de exhortos a las cinco en el juzgado de junto y nunca llega antes de las cinco y cuarto.', pose: 'chimoltrufia_idle' },
      { speaker: 'CHIMOLTRUFIA', text: 'Y que habría dos custodios, como siempre, y que a las cinco cambian de turno porque si no se enojan.', pose: 'chimoltrufia_confundida' },
      { speaker: 'DEFENSA', text: '(Que a las cinco cambian de turno.)', pose: 'chapulin_panic' },
      { speaker: 'DEFENSA', text: '(El mismo actuario, tarde como siempre. Y el relevo a las cinco.)', pose: 'chapulin_panic' },
      { speaker: 'DEFENSA', text: '(Señorita, usted acaba de decirme cómo alguien pudo planear esos quince minutos y ninguno de los dos lo sabe.)', pose: 'chapulin_idle' }
    ]
  },
  {
    id: 'quien_pregunta_oficios',
    label: '¿Quién más pregunta por los oficios?',
    unlockedByTalk: 'quien_firmo_acuse',
    dialogue: [
      { speaker: 'CHIMOLTRUFIA', text: 'Nadie, joven. Aquí nadie pregunta nada. Por eso me aburro.', pose: 'chimoltrufia_idle' },
      { speaker: 'DEFENSA', text: 'Señorita, ¿me puede decir dónde está esa sindicatura?', pose: 'chapulin_point' },
      { speaker: 'CHIMOLTRUFIA', text: 'Claro. Calle de Donceles 14, segundo piso. Despacho del licenciado Berrondo.', pose: 'chimoltrufia_idle' },
      { speaker: 'DEFENSA', text: '...¿Berrondo?', pose: 'chapulin_panic' },
      { speaker: 'CHIMOLTRUFIA', text: 'Berrondo. Muy buen señor. Manda una canasta en Navidad.', pose: 'chimoltrufia_idle' },
      { speaker: 'DEFENSA', text: '(El señor de la cadena de oro. El que ayuda a la fiscalía sin cobrar.)', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '(Que no panda el cúnico, Chapulín. Que no panda.)', pose: 'chapulin_panic', unlockLocation: 'despacho_berrondo' }
    ]
  }
];
