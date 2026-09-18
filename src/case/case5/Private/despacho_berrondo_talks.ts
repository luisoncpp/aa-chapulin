// @Architecture(descriptionShort="Case 5 day 2 Berrondo office talk chain and plates", type="data", icon="layers")
/**
 * Caso 5, Día 2 — conversaciones con el Lic. Berrondo. Spec §12.3.
 */

import type { TalkOption } from '../../../types/index.js';

const DESPACHO_BG = 'assets/bg_despacho_berrondo.webp';
const PLATE_MASA = 'assets/plate_masa_concursal.webp';
const PLATE_FICHA = 'assets/plate_anatomia_ficha.webp';

export const CASE5_BERRONDO_TALKS: TalkOption[] = [
  {
    id: 'quiebra_no_cierra',
    label: '¿Qué es una quiebra que no se cierra?',
    dialogue: [
      { speaker: 'BERRONDO', text: 'Lo que queda de una sociedad muerta se llama masa concursal.', pose: 'berrondo_definicion' },
      { speaker: 'DEFENSA', text: '¿La masa concur... qué?', pose: 'chapulin_idle' },
      { speaker: 'BERRONDO', text: '...sal.', pose: 'berrondo_idle' },
      { speaker: 'DEFENSA', text: '¡Chanfle!', pose: 'chapulin_panic' },
      { speaker: 'BERRONDO', text: 'Del latín concursus, «concurrencia»: todos los acreedores concurren a la vez sobre lo que queda.', pose: 'berrondo_definicion' },
      { speaker: 'BERRONDO', text: 'Es una palabra bonita para una cosa muy fea, licenciado.', pose: 'berrondo_idle' },
      { speaker: 'NARRADOR', text: 'Lámina ilustrativa: masa concursal. Todo lo que una sociedad quebrada deja se inventaría, se sella y se deposita.', bg: PLATE_MASA, furniture: 'none' },
      { speaker: 'NARRADOR', text: 'Mientras un bien siga sin adjudicarse, queda en administración; uno ya rematado puede continuar depositado por las condiciones del remate.', bg: PLATE_MASA, furniture: 'none' },
      { speaker: 'NARRADOR', text: 'Del depósito responde el síndico. Es quien puede abrir el huacal y responde de cada apertura con su firma.', bg: PLATE_MASA, furniture: 'none' },
      { speaker: 'NARRADOR', text: 'Por eso los depósitos se guardan donde el juzgado pueda verlos: en el Archivo Judicial.', bg: PLATE_MASA, furniture: 'none' },
      { speaker: 'DEFENSA', text: '¿En el Archivo? ¿En ese Archivo?', pose: 'chapulin_panic', bg: DESPACHO_BG, furniture: 'none' },
      { speaker: 'BERRONDO', text: 'En el sótano, licenciado. Catorce huacales. Bajo dos veces al mes y firmo cada vez.', pose: 'berrondo_idle' },
      { speaker: 'BERRONDO', text: 'Si le parece a usted siniestro, piénselo al revés: el lugar más vigilado de esta ciudad para guardar algo es un juzgado.', pose: 'berrondo_idle' },
      { speaker: 'DEFENSA', text: '(Y el lugar donde nadie mira dos veces a un señor con credencial... también.)', pose: 'chapulin_idle' }
    ]
  },
  {
    id: 'que_hay_huacales',
    label: '¿Y qué hay en esos huacales?',
    unlockedByTalk: 'quiebra_no_cierra',
    dialogue: [
      { speaker: 'BERRONDO', text: 'Muebles de oficina, tres mil doscientos tomos que nadie quiso, doscientos diez ejemplares de la edición de lujo...', pose: 'berrondo_idle' },
      { speaker: 'BERRONDO', text: '...y el cedulario.', pose: 'berrondo_definicion' },
      { speaker: 'DEFENSA', text: '¿El cedu...?', pose: 'chapulin_idle' },
      { speaker: 'BERRONDO', text: 'Cedulario. Once mil cuatrocientas tarjetas. Es lo único de esa empresa que valía algo y por eso lo remataron al final.', pose: 'berrondo_idle' },
      { speaker: 'DEFENSA', text: '¿Tarjetas de qué?', pose: 'chapulin_point' },
      { speaker: 'BERRONDO', text: 'De clientes, licenciado. Para venderle a crédito veinticuatro tomos a una familia, uno tiene que saber quién es esa familia.', pose: 'berrondo_idle' },
      { speaker: 'BERRONDO', text: 'Tenga, le enseño una en blanco. Son todas iguales.', pose: 'berrondo_idle' },
      { speaker: 'NARRADOR', text: 'Tarjeta de cedulario, formato único desde 1956. Seis campos, llenados a máquina por el vendedor al volver de la ruta.', bg: PLATE_FICHA, furniture: 'none' },
      { speaker: 'NARRADOR', text: 'Domicilio. Ingreso declarado por el jefe de familia. Objetos de valor que la familia dice tener.', bg: PLATE_FICHA, furniture: 'none' },
      { speaker: 'NARRADOR', text: 'Puntualidad de pago. Observaciones del vendedor. Y, abajo del todo, el estado de la puerta.', bg: PLATE_FICHA, furniture: 'none' },
      { speaker: 'NARRADOR', text: 'Ese último campo servía para saber si había que volver o si se podía dejar el tomo adentro.', bg: PLATE_FICHA, furniture: 'none' },
      { speaker: 'DEFENSA', text: '...¿El estado de la puerta?', pose: 'chapulin_panic', bg: DESPACHO_BG, furniture: 'none' },
      { speaker: 'BERRONDO', text: 'La chapa, licenciado. Si estaba buena, si estaba vencida, si se empujaba.', pose: 'berrondo_idle' },
      { speaker: 'BERRONDO', text: 'Era una empresa de crédito a domicilio. Necesitaba saber si el domicilio existía y si el domicilio cerraba.', pose: 'berrondo_idle' },
      { speaker: 'DEFENSA', text: '(Once mil cuatrocientas casas. Con lo que hay adentro y con cómo se abre la puerta.)', pose: 'chapulin_panic' },
      { speaker: 'DEFENSA', text: '(Escrito por las propias familias.)', pose: 'chapulin_idle' },
      { speaker: 'BERRONDO', text: 'Veo que le impresiona. A mí me impresionó en 1971; con permiso del juzgado pagué tres pesos por el cedulario. Me lo adjudicaron, pero los originales debían seguir depositados aquí hasta concluir la quiebra.', pose: 'berrondo_idle' },
      { speaker: 'DEFENSA', text: '¿Y para qué lo quiso usted?', pose: 'chapulin_point' },
      { speaker: 'BERRONDO', text: 'Para vender copias, licenciado. Ficha por ficha, a quien las pida y las pague.', pose: 'berrondo_idle' },
      { speaker: 'DEFENSA', text: '¡¿Y eso se puede?!', pose: 'chapulin_panic' },
      { speaker: 'BERRONDO', text: 'Búsquelo usted, se lo suplico. Tomo IX del Código, voz «cosas fuera del comercio». La información no está ahí.', pose: 'berrondo_definicion' },
      { speaker: 'BERRONDO', text: 'Vender información no es delito en este país, licenciado. Ni lo era en el setenta y uno, ni lo es hoy.', pose: 'berrondo_idle' },
      { speaker: 'DEFENSA', text: '(No me está confesando nada. Me está dando una clase.)', pose: 'chapulin_idle' }
    ]
  },
  {
    id: 'a_quien_vende',
    label: '¿A quién se la vende?',
    unlockedByTalk: 'que_hay_huacales',
    dialogue: [
      { speaker: 'BERRONDO', text: 'A quien la pida. No pregunto para qué. Tampoco lo pregunta el que vende un cuchillo.', pose: 'berrondo_idle' },
      { speaker: 'DEFENSA', text: '¡Pero un cuchillo sirve para partir el pan!', pose: 'chapulin_point' },
      { speaker: 'BERRONDO', text: 'Y una ficha sirve para saber a quién hay que cobrarle. La han comprado tres cobradores este año.', pose: 'berrondo_idle' },
      { speaker: 'DEFENSA', text: '¡Pues a mí no me cuadra! ¡Porque dime con quién andas... y a aullar se enseña!', pose: 'chapulin_point' },
      { speaker: 'BERRONDO', text: '...Son dos refranes, licenciado.', pose: 'berrondo_definicion' },
      { speaker: 'DEFENSA', text: '¡Ya sé!', pose: 'chapulin_panic' },
      { speaker: 'BERRONDO', text: 'El primero es del Quijote, segunda parte, capítulo veintitrés. El segundo es del refranero castellano y trae lobos.', pose: 'berrondo_definicion' },
      { speaker: 'BERRONDO', text: 'Usted los empalmó por la mitad. Le quedó una frase perfectamente gramatical que no quiere decir absolutamente nada.', pose: 'berrondo_idle' },
      { speaker: 'DEFENSA', text: '¡A mí sí me dice!', pose: 'chapulin_point' },
      { speaker: 'BERRONDO', text: 'A usted sí. Ése es el problema de hablar con usted.', pose: 'berrondo_idle' },
      { speaker: 'DEFENSA', text: '(Me acaba de corregir igualito que el profesor Jirafales.)', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '(Y no sé por qué eso no me dio risa.)', pose: 'chapulin_idle' }
    ]
  },
  {
    id: 'ver_inventario',
    label: '¿Me deja ver el inventario?',
    unlockedByTalk: 'a_quien_vende',
    dialogue: [
      { speaker: 'BERRONDO', text: 'Naturalmente. Es público desde 1971; puede pedirlo en el juzgado, pero le ahorro el trámite.', pose: 'berrondo_idle' },
      { speaker: 'NARRADOR', text: 'Berrondo saca de la vitrina un legajo delgado y lo pone sobre la mesa, abierto.' },
      { speaker: 'DEFENSA', text: 'Cuarenta y siete partidas...', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '«Partida 12: cedulario, once mil cuatrocientas tarjetas.»', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '«Partida 41: máquina de escribir Olivetti Lexikon 80.»', pose: 'chapulin_point' },
      { speaker: 'BERRONDO', text: 'Ésa la usaban las secretarias para los contratos. Sigue abajo. Con su número de partida pintado en la carcasa.', pose: 'berrondo_idle' },
      { speaker: 'DEFENSA', text: '¿Y no se la llevó nadie?', pose: 'chapulin_idle' },
      { speaker: 'BERRONDO', text: 'Licenciado, esa máquina no es mía. Es de la masa.', pose: 'berrondo_idle' },
      { speaker: 'BERRONDO', text: 'Sacarla del depósito sería disponer de un bien ajeno, y yo llevo veintisiete años de ejercicio sin una sola nota en mi expediente.', pose: 'berrondo_idle' },
      { speaker: 'DEFENSA', text: '(Veintisiete años sin una sola nota.)', pose: 'chapulin_idle', addEvidence: 'inventario_1971' },
      { speaker: 'BERRONDO', text: 'Llévese el inventario. Y una cosa más, licenciado, si me permite.', pose: 'berrondo_idle' },
      { speaker: 'DEFENSA', text: 'Dígame.', pose: 'chapulin_idle' },
      { speaker: 'BERRONDO', text: 'Su cliente es un hombre decente. Lo he visto litigar cuatro veces y las cuatro me pareció que hacía falta en esta ciudad.', pose: 'berrondo_idle' },
      { speaker: 'BERRONDO', text: 'Espero de veras que lo saque usted.', pose: 'berrondo_idle' },
      { speaker: 'DEFENSA', text: '...Gracias.', pose: 'chapulin_idle' },
      { speaker: 'NARRADOR', text: 'El Chapulín baja las escaleras de Donceles 14 y se detiene en el descanso del primer piso.' },
      { speaker: 'DEFENSA', text: '(Todos mis movimientos están fríamente calculados.)', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '(Menos las antenitas. Las antenitas se me erizaron allá arriba y no sé por qué.)', pose: 'chapulin_panic', unlockLocation: 'delegacion_c5' }
    ]
  }
];
