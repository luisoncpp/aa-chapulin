// @Architecture(descriptionShort="Case 5 climax stage 5 — máquina de escribir", type="data", icon="layers")
/**
 * Case 5 climax — Etapa 5 EL COTEJO DECISIVO (spec §18.6).
 */

import type { ClimaxStage } from '../../../types/index.js';
import { CASE5_CLIMAX_BREAKDOWN } from './climax_breakdown.js';

const PLATE_CUATRO_RENGLONES = 'assets/plate_cuatro_renglones.webp';

const CASE5_CLIMAX_STAGE5_SUCCESS: ClimaxStage['successDialogue'] = [
  { speaker: 'DEFENSA', text: '¡TOMA ESO!', sfx: 'desk_slam', cutin: 'objection_toma_eso', pose: 'chapulin_slam', bgm: 'pursuit' },
  { speaker: 'DEFENSA', text: '¡La máquina de escribir, señor juez! ¡Partida cuarenta y uno del inventario de mil novecientos setenta y uno!', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: '¡Una Olivetti Lexikon 80 que está hoy en el fondo de ese huacal, once años después de su inventario, y cuyas más de doscientas cincuenta tiras de sello llevan una sola rúbrica: la suya!', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'SECRETARIO', text: '¡El dictamen de documentoscopia obra en autos, señor juez, y dice que no se pudo cotejar contra el aparato!' },
  { speaker: 'DEFENSA', text: '¡Porque hace falta una orden de esta corte para usar un bien en depósito!', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: '¡Y llevo cuatro días esperando para pedírsela!', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'JUEZ', text: 'Concedida.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'BERRONDO', text: '¡SEÑOR JUEZ!', pose: 'berrondo_panic', bg: 'assets/bg_courtroom.webp' },
  { speaker: 'BERRONDO', text: '¡Ese aparato es un bien de la masa concursal! ¡Usarlo altera el depósito!', pose: 'berrondo_panic', bg: 'assets/bg_courtroom.webp' },
  { speaker: 'JUEZ', text: 'Lo altera, licenciado. Y la corte responde de ello.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'Alguacil: la máquina, a esta sala. En su carrito.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'NARRADOR', text: 'Once minutos. Nadie se mueve de la galería.', bgm: 'suspense' },
  { speaker: 'NARRADOR', text: 'El alguacil entra empujando un carrito de metal con una máquina de escribir negra, con el número 41 pintado a plantilla en el costado.', sfx: 'whoosh' },
  { speaker: 'NARRADOR', text: 'La pone sobre la mesa del secretario. La sala entera puede oír el papel entrando en el rodillo.', sfx: 'click' },
  { speaker: 'JUEZ', text: 'Señor secretario. Escriba usted, al dictado, el texto del fragmento hallado en la mano de la víctima, respetando sus cuatro renglones.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'DEFENSA', text: '«...cindad de la calle del Espanto 8, viv. 72.»', pose: 'chapulin_idle' },
  { speaker: 'NARRADOR', text: 'El secretario mecanografía el fragmento en una sala en la que no se oye nada más que las teclas.', sfx: 'text' },
  { speaker: 'NARRADOR', text: 'El secretario saca la hoja del rodillo y la levanta.', sfx: 'realization' },
  { speaker: 'SECRETARIO', text: '...Señor juez.' },
  { speaker: 'SECRETARIO', text: 'Todas las eses están media línea por debajo del renglón.' },
  { speaker: 'NARRADOR', text: 'La galería se levanta entera.', sfx: 'realization', bgm: 'objection' },
  { speaker: 'JUEZ', text: '¡ORDEN! ¡ORDEN EN LA SALA!', sfx: 'gavel', pose: 'judge_gavel' },
  { bg: PLATE_CUATRO_RENGLONES, furniture: 'none', speaker: 'NARRADOR', text: 'Doce de julio. Tarjeta de presentación decomisada a Casimiro Lengua. La ese, media línea abajo.' },
  { bg: PLATE_CUATRO_RENGLONES, furniture: 'none', speaker: 'NARRADOR', text: 'Veintiuno de agosto. Ficha de seis renglones hallada en el patio de carga de un museo. La ese, media línea abajo.' },
  { bg: PLATE_CUATRO_RENGLONES, furniture: 'none', speaker: 'NARRADOR', text: 'Veintinueve de noviembre. Nota que acompañó diecisiete meses de renta en un sobre amarillo. La ese, media línea abajo.' },
  { bg: PLATE_CUATRO_RENGLONES, furniture: 'none', speaker: 'NARRADOR', text: 'Hoy, en esta sala. Una muestra recién mecanografiada. La ese, media línea abajo.' },
  { speaker: 'DEFENSA', text: 'Cuatro papeles, señor juez. Una máquina.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'El cotejo identifica la máquina de los papeles; no identifica por sí solo a quien la usó, y menos aún al homicida.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'Pero el oficio prueba que Berrondo conocía la diligencia; el vale acredita qué cajón consultó; las dos tiras muestran dos aperturas el día del crimen, aunque solo una quedó registrada.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'El tomo de lujo salió de ese huacal y apareció donde faltaba el arma; la tarjeta mutilada enlaza el fichero con el fragmento puesto en la mano de Casimiro. Es la combinación de esos rastros con el acceso de Berrondo y sus propias palabras sobre el estante lo que sostiene la acusación.', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: 'Y abrir ese huacal, señor juez, ha dejado once años de tiras firmadas por una sola mano: la suya. Sacar la máquina sin orden habría sido disponer de un bien ajeno.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'Me lo dijo él en su despacho el martes, tomándose un café conmigo.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: '«Yo llevo veintisiete años de ejercicio sin una sola nota en mi expediente.»', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'Licenciado Berrondo: usted mató a un hombre.', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: 'Y no se llevó la máquina porque no era suya.', pose: 'chapulin_slam', sfx: 'desk_slam', cutin: 'objection_toma_eso' },
  ...CASE5_CLIMAX_BREAKDOWN
];

export const CASE5_CLIMAX_STAGE5: ClimaxStage = {
  presentTarget: ['maquina_escribir'],
  requiredUpdateStage: { maquina_escribir: 2 },
  prompt: '¿Qué le falta a esta corte por cotejar?',
  failDialogue: [
    { speaker: 'JUEZ', text: 'Eso ya está en autos y ya lo discutimos, licenciado.', pose: 'judge_thinking' },
    { speaker: 'JUEZ', text: 'Esta corte le pidió cerrar el origen de los documentos y enlazarlo con los actos ya probados.', pose: 'judge_neutral' },
    { speaker: 'SECRETARIO', text: 'Señor juez, a la defensa le queda muy poco crédito.', sfx: 'damage' },
    { speaker: 'DON RAMÓN', text: '(Joven, el señor Lengua se lo escribió en una libreta y se lo escribió a usted.)', pose: 'donramon_idle' }
  ],
  successDialogue: CASE5_CLIMAX_STAGE5_SUCCESS
};
