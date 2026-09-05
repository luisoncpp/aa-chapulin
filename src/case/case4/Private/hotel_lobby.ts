// @Architecture(descriptionShort="Case 4 day 1 hotel lobby with Don Cecilio", type="data", icon="layers")
/**
 * Case 4 Day 1 — Gran Vestíbulo (`hotel_lobby`).
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE4_HOTEL_LOBBY: InvestigationScene = {
  title: 'Gran Vestíbulo del Hotel Buena Vista',
  name: 'Gran Vestíbulo',
  bg: 'assets/bg_hotel_lobby.webp',
  bgm: 'investigation',
  speaker: 'NARRADOR',
  idlePose: 'cecilio_idle',
  intro: [
    { speaker: 'NARRADOR', text: '25 de octubre, 10:30 AM. Gran Vestíbulo del Hotel Buena Vista.' },
    { speaker: 'CECILIO', text: '¡Sea muy bienvenido a nuestro ilustre establecimiento, distinguido caballero de frac! Permítame guardar su sombrero de copa.', pose: 'cecilio_ciego' },
    { speaker: 'DEFENSA', text: '¡Oiga, Don Cecilio! ¡Póngase los anteojos! ¡No soy ningún conde, soy Don Ramón! ¡Y esto no es sombrero de copa, es mi gorrito de mezclilla arrugado!', pose: 'donramon_panic' },
    { speaker: 'CECILIO', text: '¡Cielos santos! ¡Un menesteroso invadiendo la alfombra persa de mi lobby de cinco estrellas!', pose: 'cecilio_escandalo' },
    { speaker: 'CHAPULIN', text: '¡Detenga su ademán, noble hostelero! ¡El Chapulín Colorado investiga el trágico suceso de anoche en el tercer piso!', pose: 'chapulin_point' },
    { speaker: 'CECILIO', text: '¡Ah, el deplorable espectáculo del inquilino de la cicatriz! Perturbó el reposo del Conde de Montemayor y de toda la planta noble.', pose: 'cecilio_idle' }
  ],
  hotspots: [
    {
      id: 'hotspot_recepcion',
      label: 'Mostrador de Recepción',
      x: 46, y: 40, w: 44, h: 42,
      dialogue: [
        { speaker: 'CECILIO', text: 'Aquí registro a la flor y nata de la sociedad. ¡Nada de gorritos de mezclilla en mi mostrador de mármol!', pose: 'cecilio_escandalo' }
      ]
    },
    {
      id: 'hotspot_candelabro',
      label: 'Candelabro de Cristal',
      x: 42, y: 8, w: 16, h: 20,
      dialogue: [
        { speaker: 'DEFENSA', text: '(Brilla más que mi futuro financiero. No sirve de nada, pero qué bonito.)', pose: 'donramon_sweat' },
        { speaker: 'CHAPULIN', text: '¡Más vale pájaro en mano que ciento volando!', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: 'Chapulín, eso no aplica a candelabros.', pose: 'donramon_idle' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'about_scandal',
      label: 'El escándalo de anoche',
      dialogue: [
        { speaker: 'CECILIO', text: 'A las 11:15 PM oí un estampido como trueno desde el tercer piso. Subí con el Sargento y encontramos la puerta trabada con la cadena interior.', pose: 'cecilio_idle' },
        { speaker: 'DEFENSA', text: '¿Y el fontanero Botija?', pose: 'donramon_point' },
        { speaker: 'CECILIO', text: '¡Escondido en el cesto de ropa sucia como un ratón de alcantarilla! ¡Qué vergüenza para mi hotel!', pose: 'cecilio_escandalo' }
      ]
    },
    {
      id: 'about_blueprint',
      label: 'El plano del edificio',
      unlockedByTalk: 'about_scandal',
      dialogue: [
        { speaker: 'CECILIO', text: 'Tome usted el esquema del inmueble. Fue construido en 1920 con hierro macizo y tiros verticales de vapor.', pose: 'cecilio_idle', addEvidence: 'plano_hotel' },
        { speaker: 'DEFENSA', text: '¿La Suite 304 comparte tuberías con alguna otra habitación?', pose: 'donramon_idle' },
        { speaker: 'CECILIO', text: 'Con la Suite 204, directamente debajo. Pero eso es asunto de fontanería, no de crímenes.', pose: 'cecilio_ciego', unlockLocation: 'hotel_suite' }
      ]
    }
  ]
};
