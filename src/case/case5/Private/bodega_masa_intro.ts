// @Architecture(descriptionShort="Case 5 day 3 bodega intro and antenitas beat", type="data", icon="layers")
/**
 * Caso 5, Día 3 — introducción de la bodega de bienes (`bodega_masa`). Spec §14.1.
 */

import type { DialogueLine } from '../../../types/index.js';

const BODEGA_BG = 'assets/bg_bodega_masa.webp';

export const CASE5_BODEGA_MASA_INTRO: DialogueLine[] = [
  { speaker: 'NARRADOR', text: '8 de diciembre, 9:00 AM. Sótano del Archivo Judicial. Bodega de bienes en depósito.', bg: BODEGA_BG, furniture: 'none', bgm: 'suspense' },
  { speaker: 'NARRADOR', text: 'Catorce huacales de madera: doce apilados de dos en dos y otros dos sobre el suelo. El número nueve es de gran formato; las tapas están encostradas de tiras de papel sellado.' },
  { speaker: 'SARGENTO', text: 'Inspección judicial en el asunto 5.514. Presentes: la defensa, el representante del ministerio público, el suscrito y el síndico. Son las nueve horas con dos minutos.', pose: 'pazguato_decidido' },
  { speaker: 'BERRONDO', text: 'Buenos días, licenciado. Le traje café otra vez; hace frío aquí abajo.', pose: 'berrondo_idle' },
  { speaker: 'DEFENSA', text: '...Gracias.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: '(Me trae café el día que vengo a abrirle su caja. Y no lo hace por cinismo. Lo hace por educación.)', pose: 'chapulin_idle' },
  { speaker: 'CHOMPIRAS', text: '¡Chapulín! ¡Digo, licenciado! ¡Digo... ay, caray!', pose: 'chompiras_nervous' },
  { speaker: 'DEFENSA', text: '¡Chómpiras! ¿Tú aquí?', pose: 'chapulin_point' },
  { speaker: 'CHOMPIRAS', text: 'Yo cargo los huacales, licenciado. Desde septiembre.', pose: 'chompiras_idle' },
  { speaker: 'CHOMPIRAS', text: 'Es mi primer trabajo con seguro y con aguinaldo y no lo pienso perder, así que si alguien pregunta, yo no dije nada de nada.', pose: 'chompiras_nervous' },
  { speaker: 'DEFENSA', text: 'Nadie te va a quitar nada, Chómpiras.', pose: 'chapulin_idle' },
  { speaker: 'CHOMPIRAS', text: 'Eso mismo me dijeron en agosto y acabé en el bote.', pose: 'chompiras_nervous', addProfile: 'perfil_chompiras' },
  { speaker: 'DEFENSA', text: '(A ver, antenitas de vinil. Trabajo para ustedes.)', pose: 'chapulin_idle' },
  { speaker: 'NARRADOR', text: 'El Chapulín se planta frente al huacal 9 y cierra los ojos. Las antenitas se yerguen.', sfx: 'whoosh' },
  { speaker: 'NARRADOR', text: 'Y no pasa nada.' },
  { speaker: 'DEFENSA', text: '...¿Nada?', pose: 'chapulin_panic' },
  { speaker: 'NARRADOR', text: 'El Chapulín da un paso más. Pega las antenitas a la madera.' },
  { speaker: 'NARRADOR', text: 'Nada. Quietas como dos cordones de zapato.', sfx: 'whoosh' },
  { speaker: 'DEFENSA', text: '¡PERO SI ESTO ES EL CATÁLOGO DE ONCE MIL CUATROCIENTOS ROBOS!', pose: 'chapulin_panic' },
  { speaker: 'SARGENTO', text: '¿Le fallaron, mi Licenciado?', pose: 'pazguato_sweat' },
  { speaker: 'DEFENSA', text: '...No sé qué significa.', pose: 'chapulin_idle' },
  { speaker: 'BERRONDO', text: 'Tal vez las está interrogando mal, licenciado.', pose: 'berrondo_idle' },
  { speaker: 'DEFENSA', text: '¿Cómo dice?', pose: 'chapulin_point' },
  { speaker: 'BERRONDO', text: 'Una cosa es lo que sugiera su aparato. Otra, el remate que yo mismo le conté y el inventario que usted examinó.', pose: 'berrondo_idle' },
  { speaker: 'BERRONDO', text: 'Y los papeles dicen que lo que hay en ese huacal, sencillamente, no es robado.', pose: 'berrondo_idle' },
  { speaker: 'NARRADOR', text: 'Silencio en el sótano.', bgm: 'suspense' },
  { speaker: 'DEFENSA', text: '(...Chanfle.)', pose: 'chapulin_idle' }
];
