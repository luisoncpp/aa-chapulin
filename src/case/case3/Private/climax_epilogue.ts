// @Architecture(descriptionShort="Case 3 waiting-room epilogue dialogue", type="data", icon="layers")
/**
 * Case 3 epilogue — Sala de Espera de la Corte.
 */

import type { DialogueLine } from '../../../types/index.js';

const WAITING_ROOM = 'assets/bg_waiting_room.jpg';

export const CASE3_EPILOGUE: DialogueLine[] = [
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'NARRADOR', text: 'Una hora después. Sala de espera del tribunal. Afuera, la vecindad todavía no se lo cree.' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'BARRIGA', text: 'Ñoño. Ven acá, hijo. ¿Un año? ¿Un año entero con el corazón malo y no me dices nada?', pose: 'barriga_vendado' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'NONO', text: '¡Es que no quería que te preocuparas, papi!', pose: 'nono_llorando' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'BARRIGA', text: '¡Me preocupo más si me entero en un juzgado, muchacho!', pose: 'barriga_vendado', sfx: 'realization' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'CHAPATIN', text: 'Y usted, a mi consultorio el lunes a las nueve. Sin falta.', pose: 'chapatin_enojado' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'NONO', text: '¿Y cuánto le debo, doctor?', pose: 'nono_idle' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'CHAPATIN', text: 'Nada. Ya me pagaron con tres días de cárcel y un abogado con sombrero de mezclilla.', pose: 'chapatin_idle' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'PAZGUATO', text: '¡Mi Licenciado! ¡El fiscal me descontó la quincena otra vez! ¡Dice que fue por "insubordinación olfativa" por lo de la basura!', pose: 'pazguato_decidido' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'BARRIGA', text: 'Sargento, la estación necesita velador. Y velador honrado. ¿Le interesa?', pose: 'barriga_idle' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'PAZGUATO', text: '¡A sus órdenes! ¿Y paga usted... con dinero?', pose: 'pazguato_saludo' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'BARRIGA', text: 'Con dinero, sargento. Y ya que estamos hablando de dinero, Licenciado Monchito...', pose: 'barriga_idle' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'DEFENSA', text: '¡¿Yo?! ¡Si yo acabo de salvarle la vida al hombre que lo iba a...!', pose: 'donramon_panic' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'BARRIGA', text: 'Quince meses de renta, Don Ramón. QUINCE.', pose: 'barriga_enojado', sfx: 'desk_slam' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'DEFENSA', text: '...¿Y si se los descuento de los honorarios?', pose: 'donramon_sweat' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'BARRIGA', text: '¿Cuáles honorarios? ¡Si el doctor no le pagó!', pose: 'barriga_idle' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'DEFENSA', text: '¡CHANFLE!', pose: 'donramon_panic' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'NARRADOR', text: '(En la bocina del pasillo se oye la estación abriendo de nuevo. Es una voz joven, temblorosa, que se aclara la garganta.)' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'NONO', text: '"Muy buenas noches tengan todos ustedes... Aquí XEVC, La Voz de la Vecindad..."' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'CHAPULIN', text: '¿Sabe qué, Monchito? El que a hierro mata... acaba con la casa llena de fierros.', pose: 'chapulin_idle' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'DEFENSA', text: '...No es así el dicho, Chapulín.', pose: 'donramon_idle' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'CHAPULIN', text: '¡Ya lo sé! ¡Pero si lo digo bien, la próxima vez no atrapamos a nadie! ¡Síganme los buenos!', pose: 'chapulin_point' }
];
