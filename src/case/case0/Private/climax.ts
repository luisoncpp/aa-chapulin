// @Architecture(descriptionShort="Case 0 climax, verdict, and epilogue", type="data", icon="layers")
import type { ClimaxDefinition } from '../../../types/index.js';
import { CASE0_PLANCHA_POINT_TARGET } from './point_targets.js';

const EPILOGUE_BG = 'assets/bg_waiting_room_case0.webp';

export const CASE0_CLIMAX: ClimaxDefinition = {
  dialogue: [
    { speaker: 'DEFENSA', pose: 'donramon_point', text: 'Voy a demostrar dos cosas, señor juez: con qué golpearon a Don Nazario, y qué fue a buscar este señor a la casa de un paletero.', bgm: 'suspense' },
    { speaker: 'JUEZ', pose: 'judge_thinking', text: 'La defensa puede comenzar.' },
    { speaker: 'CASIMIRO', pose: 'casimiro_panic', text: '¡Eso es una calumnia sin encuadernar!' }
  ],
  presentTarget: ['plancha_carbon'],
  stages: [
    {
      presentTarget: ['plancha_carbon'],
      requiredUpdateStage: { informe_lesiones: 2 },
      prompt: '¿Qué objeto de la vivienda 4 explica esa lesión?',
      pointTarget: CASE0_PLANCHA_POINT_TARGET,
      successDialogue: [
        { speaker: 'DEFENSA', pose: 'donramon_slam', cutin: 'objection_toma_eso', sfx: 'desk_slam', text: '¡TOMA ESO!', bgm: 'pursuit' },
        { speaker: 'DEFENSA', pose: 'donramon_point', text: 'La plancha de carbón de la repisa. Base plana, borde recto, seis kilos: el calco encaja.' },
        { speaker: 'DEFENSA', pose: 'donramon_point', text: '¡El mango! Tizne fresco justo donde se agarra, y la plancha guardada con el asa hacia la pared.' },
        { speaker: 'CHAPULÍN', pose: 'chapulin_point', text: '¡Nadie guarda una plancha al revés... más que quien nunca la ha usado para planchar!' },
        { speaker: 'TORIBIO', pose: 'toribio_llorando', text: 'Yo la pongo con el asa para afuera, licenciado. Siempre.' },
        { speaker: 'DEFENSA', pose: 'donramon_point', text: 'Quien la usó la devolvió a su lugar. Se quedó. Tuvo calma.', updateEvidence: 'lata_ahorros' },
        { speaker: 'NARRADOR', text: 'El peritaje añade una línea sobre la lata: la tapa presenta el mismo tizne que el mango de la plancha.' },
        { speaker: 'CASIMIRO', pose: 'casimiro_panic', text: '¡Eso no prueba nada! ¡La lata seguía llena!' },
        { speaker: 'SUPER SAM', pose: 'supersam_point', text: 'Precisely! ¡Cuarenta pesos intactos! Ahí no hubo robo.' }
      ]
    },
    {
      presentTarget: ['lata_ahorros'],
      requiredUpdateStage: { lata_ahorros: 1 },
      prompt: '¿Qué objeto de esa casa no estaba donde debía estar?',
      successDialogue: [
        { speaker: 'DEFENSA', pose: 'donramon_slam', cutin: 'objection_protesto', sfx: 'desk_slam', text: '¡PROTESTO! ¡La lata está llena, pero no está en su lugar!', bgm: 'pursuit' },
        { speaker: 'DEFENSA', pose: 'donramon_point', text: 'La policía la encontró sobre la mesa. Toribio la guarda debajo del catre, envuelta en un trapo.' },
        { speaker: 'TORIBIO', pose: 'toribio_nervioso', text: 'Desde que entré a vivir ahí, licenciado.' },
        { speaker: 'CHAPULÍN', pose: 'chapulin_point', text: '¡La misma mano tiznada tocó las dos cosas!' },
        { speaker: 'DEFENSA', pose: 'donramon_point', text: 'Ese hombre entró a robar la lata. La tenía en sus manos cuando el cobrador abrió la puerta.' },
        { speaker: 'CASIMIRO', pose: 'casimiro_breakdown', text: '¡ERA UN VIEJO CON UN MALETÍN LLENO! ¡Y ese muchacho no tenía nada!' },
        { speaker: 'NARRADOR', text: 'Los tomos se le caen del maletín. Por primera vez, el testigo no mira los relojes.' },
        { speaker: 'SUPER SAM', pose: 'supersam_idle', text: 'La fiscalía retira la acusación contra Toribio Pantoja.' }
      ]
    }
  ],
  choicesAfterStage: 0,
  choices: [
    {
      id: 'arma', question: '¿Qué demuestra el hecho de que devolvieran la plancha a la repisa?',
      options: [
        { id: 'arma', label: 'Que la plancha fue el arma del asalto.' },
        { id: 'calma', label: 'Que quien golpeó tuvo tiempo y calma para acomodarla.' },
        { id: 'huellas', label: 'Que el culpable quiso borrar sus huellas.' },
        { id: 'orden', label: 'Que el acusado es una persona ordenada.' }
      ],
      correctId: 'calma',
      successDialogue: [
        { speaker: 'DEFENSA', pose: 'donramon_point', text: 'Exacto. No fue un golpe de pánico: alguien se tomó el tiempo de devolverla a la repisa.' },
        { speaker: 'JUEZ', pose: 'judge_neutral', text: 'Entonces la defensa debe explicar qué más cambió de lugar.' }
      ],
      failDialogue: [
        { speaker: 'JUEZ', pose: 'judge_shock', text: 'Eso no explica por qué la plancha terminó acomodada en la repisa.' },
        { speaker: 'DEFENSA', pose: 'donramon_point', text: 'Pensemos en la calma necesaria para devolver un objeto después del golpe.' }
      ]
    }
  ],
  verdict: [
    { speaker: 'JUEZ', pose: 'judge_gavel', text: 'Por lo escuchado hoy, este tribunal declara al acusado Toribio Pantoja...', sfx: 'gavel' },
    { speaker: 'JUEZ', pose: 'judge_gavel', text: '¡INOCENTE!', cutin: 'objection_inocente', bgm: 'victory' },
    { speaker: 'NARRADOR', text: 'Cae confeti sobre el estrado de la defensa.' },
    { speaker: 'TORIBIO', pose: 'toribio_aliviado', text: '¡Licenciado! ¡Licenciado, gané! ...¿ganamos?' },
        { speaker: 'DEFENSA', pose: 'donramon_idle', text: 'Ganó usted. Yo nomás hablé.' },
    { speaker: 'CHAPULÍN', pose: 'chapulin_idle', text: 'Se presiona gratis, se presenta con cuidado y se mira todo de cerquita.' },
    { speaker: 'JUEZ', pose: 'judge_gavel', text: 'Se ordena la detención de Casimiro Lengua y la devolución del maletín. Se cierra la audiencia.', sfx: 'gavel' }
  ],
  epilogue: {
    bg: EPILOGUE_BG,
    dialogue: [
      { speaker: 'NARRADOR', text: 'Sala de espera del tribunal.', bg: EPILOGUE_BG, bgm: 'epilogue' },
      { speaker: 'TORIBIO', pose: 'toribio_idle', text: 'Licenciado, no tengo con qué pagarle. Nomás traigo esto.', bg: EPILOGUE_BG },
      { speaker: 'DEFENSA', pose: 'donramon_idle', text: '¿Catorce paletas?', bg: EPILOGUE_BG },
      { speaker: 'TORIBIO', pose: 'toribio_aliviado', text: 'Trece. Una se derritió en el juzgado.', bg: EPILOGUE_BG },
      { speaker: 'DEFENSA', pose: 'donramon_idle', text: '(Trece paletas y catorce meses de renta. Vamos empatados.)', bg: EPILOGUE_BG },
      { speaker: 'CHAPULÍN', pose: 'chapulin_idle', text: 'Todo abogado empieza con un cliente que le paga en especie.', bg: EPILOGUE_BG },
      { speaker: 'DEFENSA', pose: 'donramon_idle', text: 'Y termina con un casero que le cobra en efectivo.', bg: EPILOGUE_BG },
      { speaker: 'NARRADOR', text: 'En el suelo, un periódico abierto: “ROBAN LA CHICHARRA PARALIZADORA DE ORO DEL MUSEO DE LAS CURIOSIDADES”.', bg: EPILOGUE_BG },
      { speaker: 'CHAPULÍN', pose: 'chapulin_idle', text: '...Chanfle.', bg: EPILOGUE_BG },
      { speaker: 'DEFENSA', pose: 'donramon_point', text: '¿Y a ese quién lo va a defender?', bg: EPILOGUE_BG },
      { speaker: 'CHAPULÍN', pose: 'chapulin_idle', text: 'Ahí está el detalle.', bg: EPILOGUE_BG }
    ]
  }
};
