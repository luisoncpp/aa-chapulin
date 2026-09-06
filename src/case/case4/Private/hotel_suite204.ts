// @Architecture(descriptionShort="Case 4 day 2 Suite 204 with Rufino Rufián", type="data", icon="layers")
/**
 * Case 4 Day 2 — Suite 204 (`hotel_suite204`), 10:00. Spec §9.2.
 */

import type { InvestigationScene } from '../../../types/index.js';
import { SUITE204_HOTSPOTS } from './hotel_suite204_hotspots.js';

export const CASE4_HOTEL_SUITE204: InvestigationScene = {
  title: 'Suite 204 - Habitación de Rufino Rufián',
  name: 'Suite 204',
  bg: 'assets/bg_hotel_suite204.webp',
  bgm: 'casa_clotilde',
  speaker: 'NARRADOR',
  idlePose: 'rufino_smug',
  intro: [
    { speaker: 'NARRADOR', text: '26 de octubre, 10:00 AM. Suite 204. Visita autorizada y supervisada por el Sargento.' },
    { speaker: 'RUFINO', text: 'Adelante, adelante. Y antes de que conviertan mis aposentos en taller de fontanería: sí, el señor Gómez estuvo aquí. No voy a negar una visita que vio medio hotel.', pose: 'rufino_monocle' },
    { speaker: 'DEFENSA', text: 'Botija dice que le entregó el vino en esta puerta.', pose: 'donramon_idle' },
    { speaker: 'RUFINO', text: 'Y me pidió una firma. Se la di. En mi familia se firma todo, hasta las condolencias.', pose: 'rufino_smug' },
    { speaker: 'CHAPULIN', text: '¿Y su familia de dónde es?', pose: 'chapulin_idle' },
    { speaker: 'RUFINO', text: 'De Montemayor, jovencito.', pose: 'rufino_smug' },
    { speaker: 'CHAPULIN', text: '¡Ah, yo tengo un primo en Montemayor!', pose: 'chapulin_point' },
    { speaker: 'RUFINO', text: '...Lo dudo muchísimo.', pose: 'rufino_sweat' },
    { speaker: 'DEFENSA', text: '(Nunca había visto a un conde defender su pueblo con tanta prisa.)', pose: 'donramon_idle' },
    { speaker: 'CHAPULIN', text: '¿Y el baúl?', pose: 'chapulin_point' },
    { speaker: 'RUFINO', text: 'Se lo presté a mi invitado. Tenía cosas que subir a su habitación, y uno es generoso con el equipaje ajeno.', pose: 'rufino_smug' },
    { speaker: 'DEFENSA', text: 'Empecemos por esa visita.', pose: 'donramon_idle' }
  ],
  hotspots: SUITE204_HOTSPOTS,
  talkOptions: [
    {
      id: 'la_reunion',
      label: 'La reunión',
      dialogue: [
        { speaker: 'RUFINO', text: 'Hablamos de un negocio y el señor Gómez se marchó vivo. No admito ninguna extorsión.', pose: 'rufino_smug' },
        { speaker: 'DEFENSA', text: '(Registramos su versión sin acusarlo aún.)', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'la_botella',
      label: 'La botella',
      dialogue: [
        { speaker: 'RUFINO', text: 'La recibí cerrada, la dejé en la mesa y mi invitado la abrió. Maruja estuvo presente al abrirla.', pose: 'rufino_monocle' },
        { speaker: 'DEFENSA', text: '(El periodo entre entrega y apertura todavía requiere reconstrucción.)', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'el_baul',
      label: 'El baúl',
      dialogue: [
        { speaker: 'RUFINO', text: 'Reconozco la propiedad de B-17: firmé salida y recepción. Ayudé a acomodar cosas del invitado.', pose: 'rufino_smug' },
        { speaker: 'DEFENSA', text: '(Esta explicación quedará expuesta a contraste.)', pose: 'donramon_point' }
      ]
    },
    {
      id: 'objetos_reserva',
      label: 'Objetos de su reserva',
      dialogue: [
        { speaker: 'DEFENSA', text: 'Ese anillo que gira... ya lo vimos en recepción.', pose: 'donramon_point' },
        { speaker: 'RUFINO', text: 'Gira para proteger el relieve. Nada más.', pose: 'rufino_monocle' },
        { speaker: 'DEFENSA', text: '¿No le preocupa que hayan encontrado un artefacto de la gala en su radiador?', pose: 'donramon_idle' },
        { speaker: 'RUFINO', text: 'Me preocupa que alguien haya usado mi habitación de bodega. Aquí entró y salió personal toda la noche: camareras, botones, fontaneros...', pose: 'rufino_sweat' },
        { speaker: 'CHAPULIN', text: '¡Y condes!', pose: 'chapulin_point' },
        { speaker: 'RUFINO', text: 'El conde vive aquí, jovencito. Es distinto.', pose: 'rufino_monocle' },
        { speaker: 'SARGENTO', text: 'Voy a registrar también esos accesos. Todos, con nombre y hora.', pose: 'pazguato_decidido' },
        { speaker: 'DEFENSA', text: 'Hágalo, Sargento. Encontrar una cosa en un cuarto no dice quién la dejó ahí. Si no, a mí me acusarían de las goteras de mi propia casa.', pose: 'donramon_idle', unlockLocation: 'hotel_terraza_d2' }
      ]
    }
  ]
};
