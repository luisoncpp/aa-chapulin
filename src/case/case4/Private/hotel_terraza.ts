// @Architecture(descriptionShort="Case 4 day 1 terrace bar with Maruja and chain clue", type="data", icon="layers")
/**
 * Case 4 Day 1 — Terraza Bar "El Chapuzón" (`hotel_terraza`).
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE4_HOTEL_TERRAZA: InvestigationScene = {
  title: 'Terraza Bar "El Chapuzón"',
  name: 'Terraza Bar',
  bg: 'assets/bg_hotel_bar.webp',
  bgm: 'investigation',
  speaker: 'NARRADOR',
  idlePose: 'maruja_idle',
  intro: [
    { speaker: 'NARRADOR', text: '25 de octubre, 1:15 PM. Terraza Bar "El Chapuzón".' },
    { speaker: 'MARUJA', text: 'Caramba... ¿Qué tenemos por aquí? Un caballero con sombrero de pescador y un muchacho enfundado en terciopelo encarnado.', pose: 'maruja_abanico' },
    { speaker: 'CHAPULIN', text: '¡Chanfle! ¡Es una muñeca de sololoy de carne y hueso!', pose: 'chapulin_panic' },
    { speaker: 'DEFENSA', text: 'Señora o señorita... Soy el abogado defensor de Gordon Botija.', pose: 'donramon_sweat' },
    { speaker: 'MARUJA', text: 'Puedes llamarme Maruja, Licenciado... Aunque si pretendes salvar a ese gigante que despachó al pobre Gómez, temo que estás gastando pólvora en infiernitos.', pose: 'maruja_coqueta' },
    { speaker: 'CHAPULIN', text: '¡Tranquila, primorosa dama! Porque más vale pájaro en mano... que verlo madrugar volando.', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: '¡No, Chapulín! Al que madruga Dios le ayuda, y más vale pájaro en mano que ver un ciento volando.', pose: 'donramon_idle' },
    { speaker: 'MARUJA', text: 'Qué graciosos son...', pose: 'maruja_abanico' }
  ],
  hotspots: [
    {
      id: 'hotspot_barra',
      label: 'Mostrador del Bar',
      x: 10, y: 38, w: 42, h: 34,
      dialogue: [
        { speaker: 'MARUJA', text: 'Aquí sirvo cócteles a la alta sociedad. Aunque anoche casi se me cae el abanico del susto.', pose: 'maruja_abanico' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'about_hallway',
      label: '¿Qué escuchó anoche en el pasillo?',
      dialogue: [
        { speaker: 'MARUJA', text: 'Estaba en mi Suite 303 descansando de una migraña. A las 11:15 PM oyó una detonación brutal que cimbró las paredes.', pose: 'maruja_idle' },
        { speaker: 'MARUJA', text: 'Al salir al pasillo, vi a Don Cecilio tratando de empujar la puerta de la 304.', pose: 'maruja_nerviosa' }
      ]
    },
    {
      id: 'about_victim',
      label: 'Sobre la víctima (Sr. Gómez)',
      unlockedByTalk: 'about_hallway',
      dialogue: [
        { speaker: 'MARUJA', text: 'Apenas lo conocía de vista cuando nos cruzamos en la recepción por la tarde.', pose: 'maruja_coqueta' },
        { speaker: 'DEFENSA', text: '(Se pone nerviosa cuando menciono al Cuajinais... Interesante.)', pose: 'donramon_sweat' }
      ]
    },
    {
      id: 'about_chain_object',
      label: 'El objeto del pasillo',
      unlockedByTalk: 'about_victim',
      dialogue: [
        { speaker: 'MARUJA', text: 'Cuando el Sargento embistió la puerta a las 11:20 PM, saltó hacia la alfombra del pasillo el cerrojo de cadena. Yo lo levanté porque traía enredado un alambre brillante muy raro...', pose: 'maruja_nerviosa' },
        { speaker: 'MARUJA', text: 'Pensé que era bisutería, pero se los entrego si les sirve de algo.', pose: 'maruja_abanico', addEvidence: 'candado_cadena' },
        { speaker: 'DEFENSA', text: '(Sedal de pescar en el perno... ¡El cuarto cerrado era un truco!)', pose: 'donramon_shock', sfx: 'realization' }
      ]
    }
  ]
};
