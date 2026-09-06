// @Architecture(descriptionShort="Case 4 waiting-room epilogue dialogue", type="data", icon="layers")
/**
 * Case 4 epilogue — Sala de Espera de la Corte, 18:00 (spec §13.5).
 * Segunda y última mezcla de refranes; no participa en deducciones.
 */

import type { DialogueLine } from '../../../types/index.js';

const WAITING_ROOM = 'assets/bg_waiting_room.webp';

export const CASE4_EPILOGUE: DialogueLine[] = [
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'NARRADOR', text: 'Sala de espera de la corte.' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'BOTIJA', text: 'Nunca había salido de un juzgado por mi propio pie.', pose: 'botija_aliviado' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'CHIMOLTRUFIA', text: 'Pues acostúmbrate, porque de esta casa no te vuelves a ir ni a la esquina sin avisar.', pose: 'chimoltrufia_idle' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'SARGENTO', text: 'Don Cecilio me ofreció jefe de seguridad del hotel. Con uniforme de gala.', pose: 'pazguato_saludo' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'DEFENSA', text: '¿Y qué le contestó?', pose: 'donramon_idle' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'SARGENTO', text: 'Que en la policía me dejan pedir análisis. En el hotel solo me dejarían abrir puertas.', pose: 'pazguato_decidido' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'CHOMPIRAS', text: 'Yo le guardé el puesto al Botija. Y el montacargas ya tiene cartel nuevo: “solo equipaje”.', pose: 'chompiras_relieved' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'BOTIJA', text: 'Ese cartel ya estaba.', pose: 'botija_aliviado' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'CHOMPIRAS', text: 'Ahora está en grande.', pose: 'chompiras_idle' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'CHAPULIN', text: 'Yo lo sospeché desde un principio. Como dice el dicho: camarón que se duerme no lo dejes para mañana.', pose: 'chapulin_idle' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'DEFENSA', text: '...Chapulín.', pose: 'donramon_sweat' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'CHAPULIN', text: 'Espere: no dejes para mañana el camarón que se lo lleva la corriente... Bueno, la idea es esa.', pose: 'chapulin_point' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'CHIMOLTRUFIA', text: 'A mí me pareció bonito.', pose: 'chimoltrufia_idle' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'DEFENSA', text: 'A mí me parece que ya nos podemos ir.', pose: 'donramon_idle' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'BOTIJA', text: 'Don Ramón. Lo del pago...', pose: 'botija_nervioso' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'DEFENSA', text: 'Arréglame la llave del lavadero y quedamos a mano. Lleva dieciséis meses goteando, igual que mi casero.', pose: 'donramon_idle' }
];

export const CASE4_EPILOGUE_EN: DialogueLine[] = [
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'NARRADOR', text: 'Court waiting room.' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'BOTIJA', text: 'I had never walked out of a courtroom on my own two feet.', pose: 'botija_aliviado' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'CHIMOLTRUFIA', text: 'Get used to it, because you are not leaving this house for the corner without telling me.', pose: 'chimoltrufia_idle' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'SARGENTO', text: 'Don Cecilio offered me hotel security chief. With a dress uniform.', pose: 'pazguato_saludo' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'DEFENSA', text: 'And what did you answer?', pose: 'donramon_idle' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'SARGENTO', text: 'That on the force they let me request lab tests. At the hotel they would only let me open doors.', pose: 'pazguato_decidido' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'CHOMPIRAS', text: 'I kept Botija’s job. And the freight lift has a new sign: “luggage only”.', pose: 'chompiras_relieved' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'BOTIJA', text: 'That sign was already there.', pose: 'botija_aliviado' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'CHOMPIRAS', text: 'Now it is in large print.', pose: 'chompiras_idle' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'CHAPULIN', text: 'I suspected it from the start. As the saying goes: you snooze, you lose, so don’t put off the shrimp.', pose: 'chapulin_idle' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'DEFENSA', text: '...Chapulín.', pose: 'donramon_sweat' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'CHAPULIN', text: 'Wait: don’t put off till tomorrow the shrimp the current takes away... Well, that’s the idea.', pose: 'chapulin_point' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'CHIMOLTRUFIA', text: 'I thought it was sweet.', pose: 'chimoltrufia_idle' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'DEFENSA', text: 'I think we can go now.', pose: 'donramon_idle' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'BOTIJA', text: 'Don Ramón. About the payment...', pose: 'botija_nervioso' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'DEFENSA', text: 'Fix my laundry tap and we are even. It has dripped sixteen months, same as my landlord.', pose: 'donramon_idle' }
];
