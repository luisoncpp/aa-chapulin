// @Architecture(descriptionShort="Case 3 climax four-stage present success dialogues", type="data", icon="layers")
/**
 * Case 3 climax — success dialogue for each present-target stage.
 */

import type { DialogueLine } from '../../../types/index.js';

export const CASE3_CLIMAX_STAGE1: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: '¡El libreto del Profesor Jirafales! ¡El aviso del niño extraviado se anunció UNA SOLA VEZ en toda la noche: a las 9:40 PM!', sfx: 'desk_slam', pose: 'donramon_slam' },
  { speaker: 'JIRAFALES', text: '¡¡¡TA-TA-TA-TA-TAAAAAA!!! ¡Nueve cuarenta, ni un segundo antes ni uno después!', pose: 'jirafales_angry' },
  { speaker: 'JUEZ', text: 'Entonces el grito se grabó a las 9:40 PM. ¡Una hora y cinco minutos ANTES de la agresión!', pose: 'judge_shock' }
];

export const CASE3_CLIMAX_STAGE2: DialogueLine[] = [
  { speaker: 'SUPER SAM', text: '¡Y a las 9:40 el acusado estaba encerrado en una cabina! ¡Case closed!', pose: 'supersam_point' },
  { cutin: 'objection_toma_eso', speaker: 'DEFENSA', text: '¡Exactamente, señor fiscal! ¡Y aquí está lo que grabó!', sfx: 'whoosh', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: '¡"La Salud es Primero", Cabina B, de 9:30 a 9:50 PM, según la bitácora! ¡Escuchen el minuto diez!', sfx: 'desk_slam', pose: 'donramon_slam' },
  { speaker: 'NARRADOR', text: '(De la bocina sale la voz del doctor recomendando el té de manzanilla... y por debajo, lejano, "...se ha perdido un niño de cachetes muy grandes...")', sfx: 'realization' },
  { speaker: 'JUEZ', text: '¡El mismo aviso! ¡En la cinta del acusado!', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'A las 9:40 en punto, mi cliente estaba hablando de la manzanilla en la Cabina B, y quedó grabado haciéndolo. No pudo estar en dos cabinas a la vez.', pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: 'La bitácora lo dice: a las 9:40 la Cabina C todavía estaba vacía. La Chimoltrufia no entra a grabar horóscopos hasta las diez. ¡Sólo había otra cabina ocupada a esa hora! ¡La Cabina A!', pose: 'donramon_point' },
  { speaker: 'SUPER SAM', text: '...Y en la Cabina A, de 9:30 a 10:00, según la bitácora, estaba grabándose...', pose: 'supersam_sweat' },
  { speaker: 'CHAPULIN', text: '¡El sketch de los jueves!', pose: 'chapulin_point' }
];

export const CASE3_CLIMAX_STAGE3: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: '¡"El Casero Cascarrabias"! ¡El sketch semanal de XEVC, en el que un actor IMITA la voz del Señor Barriga desde hace cuatro años!', sfx: 'desk_slam', pose: 'donramon_slam' },
  { speaker: 'JUEZ', text: '¡Yo lo oigo todos los jueves! ¡Es malísimo y me encanta!', pose: 'judge_shock' },
  { speaker: 'ANICETO', text: '¡Ese personaje lo hace un actor invitado! ¡Un muchacho de Guadalajara! ¡Ya se fue!', pose: 'aniceto_panic' },
  { speaker: 'DEFENSA', text: 'Qué raro. La hoja de programación de XEVC no registra ningún actor invitado en cuatro años. Registra a un solo locutor... el mismo que hace las noticias, el horario, los anuncios y el sketch.', pose: 'donramon_point' },
  { speaker: 'BARRIGA', text: '¡Yo le pagaba doble por hacerlo, porque decía que le daba pena!', pose: 'barriga_enojado' }
];

export const CASE3_CLIMAX_STAGE4: DialogueLine[] = [
  { cutin: 'objection_toma_eso', speaker: 'DEFENSA', text: '¡Y aquí está el porqué! ¡Boleta del Monte de Piedad! ¡Un micrófono de bronce empeñado en junio... y desempeñado el 3 de septiembre con DOCE MIL PESOS EN EFECTIVO!', sfx: 'whoosh', bgm: 'pursuit', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: '¡Y el calcado del Libro Verde dice: "Faltan cuarenta mil. Los retiros los firmó EL TESORERO"!', pose: 'donramon_point' },
  { speaker: 'JUEZ', text: '¡¿Y quién es el tesorero del Fondo de la Kermés?!', pose: 'judge_shock' },
  { speaker: 'BARRIGA', text: '...Aniceto. Aniceto Rebollar. Desde hace veinticinco años.', pose: 'barriga_vendado' },
  { speaker: 'DEFENSA', text: '¡Veintiocho mil pesos se fueron en pagar el adeudo del transmisor de la estación! ¡Y doce mil, en rescatar ESTO!', sfx: 'desk_slam', pose: 'donramon_slam' },
  { speaker: 'NARRADOR', text: '(Don Ramón levanta el Micrófono de Oro. La placa brilla: "A Aniceto Rebollar, 25 años de La Voz de Oro".)' },
  { speaker: 'DEFENSA', text: '¡El arma del crimen es su propio trofeo, señor Rebollar! ¡El que rescató con el dinero de la kermés, y el que agarró del pedestal cuando el único hombre que lo sabía le dijo que lo iba a decir al aire!', pose: 'donramon_point' },
  { speaker: 'ANICETO', text: '¡N-no pueden probar que esa voz sea la mía! ¡Es una cinta! ¡Una cinta no tiene cara!', sfx: 'damage', pose: 'aniceto_panic' },
  { speaker: 'SUPER SAM', text: "He's right... Sin la voz, todo esto son papeles. Time is money and this is... paperwork.", pose: 'supersam_sweat' },
  { speaker: 'JUEZ', text: 'El fiscal tiene razón, por increíble que parezca. Licenciado, ¿puede usted probar que esa voz pertenece al testigo?', pose: 'judge_thinking' }
];
