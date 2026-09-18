// @Architecture(descriptionShort="Case 5 climax stage 3 point success and L8 plate", type="data", icon="layers")
/**
 * Case 5 climax — estante señalamiento success + lámina L8 (spec §18.3).
 */

import type { DialogueLine } from '../../../types/index.js';

const PLATE_TOMO_TRECE = 'assets/plate_tomo_trece.webp';

export const CASE5_CLIMAX_STAGE3_POINT_SUCCESS: DialogueLine[] = [
  { speaker: 'DEFENSA', text: '¡AQUÍ, SEÑOR JUEZ! ¡LA RANURA ONCE!', pose: 'chapulin_slam', sfx: 'desk_slam', cutin: 'objection_toma_eso' },
  { speaker: 'DEFENSA', text: 'Veintidós lomos de tela verde... y uno de media piel con cantoneras de latón.', pose: 'chapulin_point' },
  { speaker: 'NARRADOR', text: 'La sala entera se inclina hacia la lámina.', sfx: 'realization', bgm: 'pursuit' },
  { speaker: 'JUEZ', text: '¡Alguacil! ¡Que traigan a esta corte esa fotografía... y el tomo que en ella sobra! ¡AHORA!', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'NARRADOR', text: 'Cuatro minutos. Nadie se sienta.', bgm: 'suspense' },
  { speaker: 'NARRADOR', text: 'El alguacil deposita sobre el estrado la fotografía pericial del estante y, junto a ella, un volumen pesado, encuadernado en media piel, con cantoneras de latón en el canto del lomo.' },
  { speaker: 'JUEZ', text: 'Ábralo por la guarda, señor secretario.', pose: 'judge_neutral' },
  { speaker: 'SECRETARIO', text: 'Hay un sello, señor juez. De tinta violeta.' },
  { speaker: 'SECRETARIO', text: '«Q guion ciento catorce diagonal mil novecientos setenta y uno. Masa concursal. Huacal nueve.»' },
  { speaker: 'NARRADOR', text: 'La galería estalla. El Juez golpea el mazo seis veces.', sfx: 'gavel', bgm: 'objection' },
  { speaker: 'JUEZ', text: '¡ORDEN! ¡ORDEN!', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'DEFENSA', text: '¡Señor juez, ese tomo es de la edición de lujo!', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: '¡Doscientos diez ejemplares sin vender desde 1971, partida cuarenta y cuatro del inventario!', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: '¡Y según el inventario, los doscientos diez debían permanecer en el sótano, dentro del huacal nueve!', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'JUEZ', text: '¿Está la defensa diciendo...?', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'Estoy diciendo lo que pasó esa tarde, señor juez, y lo voy a decir despacio.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'Alguien sacó el Tomo XI de la ranura once y se lo cerró en la nuca a ese hombre.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'Y el tomo quedó en el suelo, con sangre. No se podía volver a poner.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'Y entonces en ese estante quedaba un hueco.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'Un hueco que ese hombre no podía soportar.', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'NARRADOR', text: 'Silencio.', bgm: 'suspense' },
  { speaker: 'DEFENSA', text: 'Bajó al sótano en el montacargas. Noventa segundos. Abrió el huacal nueve por segunda vez esa tarde y sacó un Tomo XI de lujo.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'Volvió a cerrarlo, le pegó su tira y la firmó, porque no sabe irse dejando una tapa abierta. Y después subió con el tomo en otros noventa segundos y lo metió en la ranura once.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'El plano muestra los tres descansos. El Chómpiras declaró que el síndico conservaba el mando y sabía operarlo solo.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: '(Nadie mata así por rabia. Así se mata... ordenadamente.)', pose: 'chapulin_panic' },
  { speaker: 'SARGENTO', text: '¡Señor juez! ¡La fotografía de la tapa!', pose: 'pazguato_decidido' },
  { speaker: 'SARGENTO', text: '¡Hay dos tiras de sello con fecha del cuatro de diciembre, una encima de la otra! ¡Las revisé anoche y no supe qué hacer con ellas!', pose: 'pazguato_decidido' },
  { speaker: 'JUEZ', text: 'Léale a esta corte la rúbrica de la de encima, Sargento.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'SARGENTO', text: 'La misma de las otras doscientas cincuenta, señor juez. F. Berrondo. De su puño, con sus dos rayas debajo.', pose: 'pazguato_decidido' },
  { speaker: 'NARRADOR', text: 'Silencio en la sala.', sfx: 'realization' },
  { speaker: 'JUEZ', text: 'Secretario, coteje ahora la carpeta de vales que exhibió la señorita Peñaloza. ¿Cuántas aperturas del huacal nueve se registraron ese sábado?', pose: 'judge_thinking' },
  { speaker: 'SECRETARIO', text: 'Un vale, señor juez. Revisión inicial del contenido; ninguna extracción posterior registrada.' },
  { speaker: 'DEFENSA', text: 'Dos sellos firmados, un solo vale. La segunda apertura la hizo la misma mano y no la registró nadie.', pose: 'chapulin_point' },
  { speaker: 'JUEZ', text: '¡Que se asiente!', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'BERRONDO', text: '...Señor juez.', pose: 'berrondo_sweat' },
  { speaker: 'BERRONDO', text: 'Un estante incompleto es un desorden.', pose: 'berrondo_sweat' },
  { speaker: 'BERRONDO', text: 'Yo no soporto los desórdenes. Nunca los he soportado.', pose: 'berrondo_panic' },
  { speaker: 'BERRONDO', text: 'Eso... eso no es un delito.', pose: 'berrondo_panic' },
  { speaker: 'DEFENSA', text: 'No, licenciado.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'Es una firma.', pose: 'chapulin_slam', sfx: 'desk_slam', cutin: 'objection_toma_eso' },
  { bg: PLATE_TOMO_TRECE, furniture: 'none', speaker: 'NARRADOR', text: 'El Saber Universal se anunció en veinticuatro volúmenes y sólo llegó a imprimir veintitrés.' },
  { bg: PLATE_TOMO_TRECE, furniture: 'none', speaker: 'NARRADOR', text: 'El Tomo Trece se anunció como parte de la colección de veinticuatro volúmenes, pero nunca se imprimió ni se entregó.' },
  { bg: PLATE_TOMO_TRECE, furniture: 'none', speaker: 'NARRADOR', text: 'Por eso todas las colecciones del país tienen un hueco en el mismo sitio.' },
  { bg: PLATE_TOMO_TRECE, furniture: 'none', speaker: 'NARRADOR', text: 'Y por eso en el bajo mundo, desde hace once años, «el Tomo Trece» es el nombre de lo que quedó de esa empresa.' }
];
