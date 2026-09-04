// @Architecture(descriptionShort="Case 4 waiting-room epilogue dialogue", type="data", icon="layers")
/**
 * Case 4 epilogue — Sala de Espera de la Corte.
 */

import type { DialogueLine } from '../../../types/index.js';

const WAITING_ROOM = 'assets/bg_waiting_room.webp';

export const CASE4_EPILOGUE: DialogueLine[] = [
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'NARRADOR', text: '27 de octubre, 6:00 PM. Sala de espera de la corte.' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'BOTIJA', text: 'Don Ramón... Chapulín... No tengo cómo pagarles. Me salvaron de pudrirme en el penal.', pose: 'botija_aliviado' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'DEFENSA', text: 'Con que no vuelvas a esconderte en canastos de sábanas ajenas me doy por bien pagado, Botija.', pose: 'donramon_idle' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'SARGENTO', text: '¡Mi Licenciado! Super Sam me cesó formalmente por insubordinación balística, pero Don Cecilio me acaba de nombrar Director General de Seguridad del Gran Hotel.', pose: 'pazguato_saludo' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'DEFENSA', text: '¡¿Y hay buena paga?!', pose: 'donramon_shock' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'SARGENTO', text: '¡Sueldo fijo, uniforme de gala y barra libre de refrescos en la terraza!', pose: 'pazguato_decidido' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'CHOMPIRAS', text: '¡Tómelo por el lado amable, Don Ramón! Ahora cuando visite el hotel puede pedir fiado en el restaurante de postines.', pose: 'chompiras_relieved' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'CHAPULIN', text: '¿Saben una cosa, mis amigos? Al final de la jornada... a caballo regalado no le entran moscas si no abre el colmillo.', pose: 'chapulin_idle' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'DEFENSA', text: '...Chapulín, acabas de mezclar el caballo del colmillo con la boca cerrada de las moscas.', pose: 'donramon_sweat' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'CHAPULIN', text: '¡Bueno, la idea es esa! ¡Lo sospeché desde un principio! ¡Síganme los buenos!', pose: 'chapulin_point' }
];

export const CASE4_EPILOGUE_EN: DialogueLine[] = [
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'NARRADOR', text: 'October 27th, 6:00 PM. Court waiting room.' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'BOTIJA', text: 'Don Ramón... Chapulín... I have no way to pay you. You saved me from rotting in jail.', pose: 'botija_aliviado' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'DEFENSA', text: 'As long as you don\'t hide in other people\'s laundry hampers again, I consider myself paid, Botija.', pose: 'donramon_idle' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'SARGENTO', text: 'Mi Licenciado! Super Sam formally fired me for ballistic insubordination, but Don Cecilio just named me General Security Director of the Grand Hotel.', pose: 'pazguato_saludo' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'DEFENSA', text: 'And does it pay well?!', pose: 'donramon_shock' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'SARGENTO', text: 'Fixed salary, dress uniform, and free soft drinks at the terrace bar!', pose: 'pazguato_decidido' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'CHOMPIRAS', text: 'Look on the bright side, Don Ramón! Now when you visit the hotel you can run a tab at the fancy restaurant.', pose: 'chompiras_relieved' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'CHAPULIN', text: 'Know what, my friends? At the end of the day... don\'t look a gift horse in the mouth if it doesn\'t open its fangs.', pose: 'chapulin_idle' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'DEFENSA', text: '...Chapulín, you just mixed the horse\'s fangs with flies and closed mouths.', pose: 'donramon_sweat' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'CHAPULIN', text: 'Well, that\'s the idea! I suspected it from the start! Follow me, good people!', pose: 'chapulin_point' }
];
