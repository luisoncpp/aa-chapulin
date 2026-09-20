// @Architecture(descriptionShort="Case 1 four climax stages from WHO to the card", type="data", icon="layers")
/**
 * Caso 1 — Clímax, etapas 1 a 4 (§13.1–§13.4).
 * La etapa 1 es la única acusación personal del episodio y la ordena el Juez.
 */

import type { ClimaxStage, DialogueLine } from '../../../types/index.js';
import { CASE1_REJILLA_POINT_TARGET, STAGE_3_INTRO } from './climax_stage3_points.js';

const STAGE_1_FAIL: DialogueLine[] = [
  { speaker: 'JUEZ', pose: 'judge_thinking', text: 'No, licenciado. Y esta corte le recuerda que no le preguntó de quién sospecha, sino a quién señalan las pruebas que usted mismo ha admitido.' },
  { speaker: 'SUPER SAM', pose: 'supersam_point', text: '¡Objection! ¡La defensa está tirando nombres al aire!', sfx: 'damage' },
  { speaker: 'JUEZ', pose: 'judge_neutral', text: 'La corte le repite la pregunta. Y le advierte que no se la va a repetir muchas veces más.' }
];

const STAGE_1_SUCCESS: DialogueLine[] = [
  { speaker: 'DEFENSA', text: '¡PROTESTO!', sfx: 'desk_slam', cutin: 'objection_protesto', pose: 'donramon_slam', bgm: 'pursuit' },
  { speaker: 'DEFENSA', text: 'Señor juez, el hombre que estuvo parado sobre ese pedestal está sentado en el estrado de los testigos.', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'El Tripaseca.', pose: 'donramon_slam', sfx: 'desk_slam' },
  { speaker: 'NARRADOR', text: 'La galería se levanta entera.', sfx: 'realization' },
  { speaker: 'TRIPASECA', text: '¡¿YO?! ¡Yo nomás pasaba!', pose: 'tripaseca_sweat' },
  { speaker: 'SUPER SAM', text: '¡OBJECTION! ¡Your Honor, el testigo de la fiscalía no es un sospechoso! ¡La defensa está desesperada!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'JUEZ', text: 'La corte comparte la objeción en principio. Defensa, fundamente o retire.', pose: 'judge_neutral' },
  { speaker: 'DEFENSA', text: 'Con tres frases, señor juez. Tres frases que dijo él, delante de usted, sin que nadie se las sacara.', pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: 'Primera. Ayer declaró que vio a mi cliente "parado sobre el pedestal de la vitrina, ése de madera, como de la cintura de uno".', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'Ese pedestal no se ve desde el callejón. El ventanuco mide cuarenta centímetros, está a dos metros veinte y tiene el vidrio esmerilado.', pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: 'Segunda. Hoy declaró que la chapa de la puerta de carga está vencida "desde marzo". Con mes.', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'Tercera. Ayer describió el sonido del golpe como "un costalazo de fierros", cuando en esa sala, según la fiscalía, sólo había un chipote.', pose: 'donramon_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: 'Nadie describe así un golpe que no oyó de cerca. Nadie sabe un mes mirando una chapa. Y nadie mide un pedestal por un vidrio esmerilado.', pose: 'donramon_point' },
  { speaker: 'TRIPASECA', text: '¡Yo soy un comerciante honrado!', pose: 'tripaseca_panic' },
  { speaker: 'JUEZ', text: 'La corte permite a la defensa continuar.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'JUEZ', text: 'Pero le advierto una cosa, licenciado: tres frases no son tres pruebas.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'Si usted sostiene que ese hombre se llevó la Chicharra Paralizadora de Oro, esta corte quiere saber dónde está esa pieza en este momento.', pose: 'judge_thinking' },
  { speaker: 'CHAPULIN', text: '¡Mis antenitas! ¡Si el que se la llevó la trae encima, ellas lo señalan ahorita mismo!', pose: 'chapulin_point' },
  { speaker: 'JUEZ', text: '¿Propone una demostración con esas antenitas, licenciado?', pose: 'judge_thinking' },
  { speaker: 'DEFENSA', text: 'Propongo un instrumento, señor juez. Que el Acta diga con cuál.', pose: 'donramon_idle' }
];

const STAGE_2_FAIL: DialogueLine[] = [
  { speaker: 'JUEZ', pose: 'judge_thinking', text: 'Licenciado, la ficha de la pieza describe lo robado, no lo encuentra.', sfx: 'damage' },
  { speaker: 'JUEZ', pose: 'judge_neutral', text: 'La corte no pidió la descripción. Pidió el instrumento para localizarla aquí mismo.' }
];

const STAGE_2_SUCCESS: DialogueLine[] = [
  { speaker: 'DEFENSA', text: 'La defensa presenta las Antenitas de Vinil del acusado, señor juez.', pose: 'donramon_idle' },
  { speaker: 'SUPER SAM', text: '¡¿Las antenitas?! ¡Your Honor, esto ya es un circo!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'CHAPULIN', text: '¡No son un circo, son un instrumento de precisión!', pose: 'chapulin_point' },
  { speaker: 'CHAPULIN', text: 'Detectan al enemigo... y a veces nada más la pista. En el juicio del Chómpiras vibraron frente a una lata de grasa, y el oro estaba adentro.', pose: 'chapulin_point' },
  { speaker: 'CHAPULIN', text: 'Ahí quedaron asentadas como instrumento de detección. Y en veinte años nunca me han fallado... salvo aquella vez del perro, pero el perro también era enemigo.', pose: 'chapulin_idle' },
  { speaker: 'JUEZ', text: 'La corte autoriza la demostración. Alguacil, colóquelas en el centro de la sala.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'NARRADOR', text: 'El alguacil deja las antenitas sobre la mesa del centro. Silencio.', bgm: 'suspense' },
  { speaker: 'NARRADOR', text: 'Primero nada. Después, un temblorcito.', sfx: 'whoosh' },
  { speaker: 'NARRADOR', text: 'Y de pronto las dos antenitas se doblan al mismo tiempo, rígidas, apuntando al estrado de los testigos.', sfx: 'chicharra' },
  { speaker: 'TRIPASECA', text: '...Están descompuestas.', pose: 'tripaseca_sweat' },
  { speaker: 'NARRADOR', text: 'Las antenitas vibran tan fuerte que la mesa camina un centímetro sobre el piso.', sfx: 'realization' },
  { speaker: 'JUEZ', text: '¡ALGUACIL! ¡Revise el gabán del testigo!', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'TRIPASECA', text: '¡No me toque! ¡No me toque, que yo soy comerciante honrado!', pose: 'tripaseca_panic' },
  { speaker: 'NARRADOR', text: 'El alguacil mete la mano en el forro del gabán del testigo.', sfx: 'whoosh' },
  { speaker: 'NARRADOR', text: 'Y saca una cigarra de oro macizo del tamaño de las dos manos.', sfx: 'chicharra', cutin: 'objection_toma_eso' },
  { speaker: 'NARRADOR', text: 'La sala entera se queda inmóvil, y no por la chicharra.', bgm: 'pursuit' },
  { speaker: 'FLORINDA', text: '¡MI CHICHARRA!', pose: 'florinda_shock' },
  { speaker: 'CHAPULIN', text: '¡Se lo dije, doña Florinda! ¡Camarón que se duerme...!', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: '...a hierro muere.', pose: 'donramon_idle' },
  { speaker: 'CHAPULIN', text: '¡Chanfle! ¡Ahora usted también!', pose: 'chapulin_panic' },
  { speaker: 'DEFENSA', text: 'Es que ya se me pegó, joven. Es contagioso, como la chusma.', pose: 'donramon_idle' },
  { speaker: 'JUEZ', text: '¡Que se asiente en el acta! ¡La pieza robada apareció en la ropa del testigo de la fiscalía!', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'TRIPASECA', text: '¡Yo la compré!', pose: 'tripaseca_panic' },
  { speaker: 'JUEZ', text: '¿Cómo dice?', pose: 'judge_shock' },
  { speaker: 'TRIPASECA', text: '¡Que yo la compré! ¡Anteayer! ¡En efectivo, a un señor en la calle! ¡Yo compro barato y vendo lo que se deje, ya se lo dije!', pose: 'tripaseca_panic' },
  { speaker: 'SUPER SAM', text: '¡Ahí está, Your Honor! ¡Receptación, no robo! ¡Cargo distinto, juicio distinto, otro día, otro presupuesto!', pose: 'supersam_point' },
  { speaker: 'DEFENSA', text: '(Y con eso se le escapa. Traer la pieza no prueba que entró al museo.)', pose: 'donramon_sweat' },
  { speaker: 'JUEZ', text: 'La corte debe conceder que tener una cosa robada no es lo mismo que robarla.', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: 'Defensa: si usted sostiene que ese hombre estuvo dentro de la sala dos, póngalo dentro de la sala dos.', pose: 'judge_neutral' }
];

const STAGE_3_FAIL: DialogueLine[] = [
  { speaker: 'JUEZ', pose: 'judge_thinking', text: 'Eso no pone a nadie dentro de esa sala, licenciado.', sfx: 'damage' },
  { speaker: 'JUEZ', pose: 'judge_neutral', text: 'La corte quiere un rastro que sólo pudo dejar quien estuvo del lado de adentro.' }
];

const STAGE_3_SUCCESS: DialogueLine[] = [
  { speaker: 'DEFENSA', text: '¡AQUÍ! ¡Atorado en el alambre de la malla, del lado interior!', sfx: 'desk_slam', cutin: 'objection_toma_eso', pose: 'donramon_slam', bgm: 'objection' },
  { speaker: 'NARRADOR', text: 'Don Ramón levanta un sobrecito de papel encerado con una pinza.', sfx: 'whoosh' },
  { speaker: 'DEFENSA', text: 'Un hilo de casimir crema con raya, señor juez. De tres milímetros de largo.', pose: 'donramon_point' },
  { speaker: 'JUEZ', text: '¿Tres milímetros? Licenciado, eso no es un hilo. Eso es una pelusa.', pose: 'judge_thinking' },
  { speaker: 'DEFENSA', text: 'Para un hombre del tamaño de usted, señor juez, es una pelusa.', pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: 'Para un hombre del tamaño de un ratón, es media solapa.', pose: 'donramon_slam', sfx: 'desk_slam' },
  { speaker: 'NARRADOR', text: 'Murmullo en la galería.', sfx: 'realization' },
  { speaker: 'DEFENSA', text: 'Señor juez, le pido a la corte que compare ese hilo con el traje que el testigo trae puesto en este momento.', pose: 'donramon_slam', sfx: 'desk_slam', cutin: 'objection_toma_eso' },
  { speaker: 'NARRADOR', text: 'Todas las cabezas de la sala giran hacia el estrado. El testigo se aprieta las solapas del saco de raya crema.', sfx: 'realization' },
  { speaker: 'TRIPASECA', text: '...Hay mil trajes iguales.', pose: 'tripaseca_panic' },
  { speaker: 'JUEZ', text: 'Habrá mil, pero sólo uno está sentado en el estrado de esta corte. Alguacil, tome la muestra.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'NARRADOR', text: 'El perito tarda cuatro minutos. Nadie se mueve.', bgm: 'suspense' },
  { speaker: 'NARRADOR', text: 'El perito asiente con la cabeza.', sfx: 'realization', bgm: 'pursuit' },
  { speaker: 'JUEZ', text: '¡Coincide!', sfx: 'gavel', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'Y ya que el perito está de pie, señor juez: en el enjarre de la barda del patio hay una huella de zapato del veintisiete y medio.', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'Del número cuarenta y dos, para los que compramos calzado y no reglamentos.', pose: 'donramon_idle' },
  { speaker: 'JUEZ', text: 'Alguacil, el zapato del testigo.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'NARRADOR', text: 'El alguacil levanta el pie derecho del testigo. En la suela, el número está estampado de fábrica: 42.', sfx: 'realization' },
  { speaker: 'TRIPASECA', text: '¡Medio México calza del cuarenta y dos!', pose: 'tripaseca_panic' },
  { speaker: 'DEFENSA', text: 'Medio México, sí. Pero medio México no deja además su hilo del saco atorado en una rejilla por dentro.', pose: 'donramon_slam', sfx: 'desk_slam' },
  { speaker: 'TRIPASECA', text: '¡BUENO, SÍ!', pose: 'tripaseca_panic' },
  { speaker: 'NARRADOR', text: 'El testigo se levanta de golpe y tira la silla.', sfx: 'desk_slam' },
  { speaker: 'TRIPASECA', text: '¡Sí entré! ¡Sí me encogí y sí entré por esa rejilla! ¡Pero yo no le pegué a nadie!', pose: 'tripaseca_panic' },
  { speaker: 'TRIPASECA', text: '¡El grandote se me echó encima y yo nomás me defendí con lo que traía en la mano!', pose: 'tripaseca_panic' },
  { speaker: 'DEFENSA', text: 'Lo que traía en la mano era una bolsa de lona de la fiscalía con seis kilos de moneda de plata.', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'Y el velador tenía la nuca hacia usted, señor Tripaseca. Nadie se defiende de una nuca.', pose: 'donramon_slam', sfx: 'desk_slam' },
  { speaker: 'TRIPASECA', text: '......', pose: 'tripaseca_panic' },
  { speaker: 'JUEZ', text: 'Que se asiente la confesión. El testigo admite haber entrado al museo y haber golpeado al velador.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'SUPER SAM', text: '...Your Honor, la fiscalía... la fiscalía solicita un momento.', pose: 'supersam_sweat' },
  { speaker: 'JUEZ', text: 'La fiscalía lleva dos días solicitando momentos. Se le niega.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'Y esta corte tiene una última pregunta, porque si no la contesta no va a dormir.', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: 'Señor Tripaseca: usted supo la medida de una rejilla, el mes de una chapa, la hora de un velador y el estado de un rollo de cámara.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: '¿De dónde sacó usted todo eso?', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'TRIPASECA', text: '¿Pues de dónde más, señor juez? ¡De aquí mero!', pose: 'tripaseca_smug' },
  { speaker: 'TRIPASECA', text: 'Uno tiene su talento, ¿sabe? Fui muy observador. Me pasé semanas rondando el museo, estudiando cada rincón, calculando las medidas al milímetro...', pose: 'tripaseca_smug' },
  { speaker: 'TRIPASECA', text: '¡Tengo una memoria privilegiada! Como quien dice, fotogénica... eh, ¡fotográfica! Me lo aprendí todo de memoria, sin apuntar nada. Es el arte del crimen.', pose: 'tripaseca_smug' },
  { speaker: 'SUPER SAM', text: '¡Of course! ¡Time is money! ¡El trabajo duro rinde frutos! ¡Un criminal que estudia es un delincuente de calidad!', pose: 'supersam_point' },
  { speaker: 'CHAPULIN', text: '¡Chanfle! ¡A mí se me olvida si al perro le tocaba croqueta o hueso, y este señor se memorizó un museo con medidas y todo!', pose: 'chapulin_panic' },
  { speaker: 'DEFENSA', text: '(¿Estudiar? Pero si este tipo con trabajos terminó la primaria nocturna...)', pose: 'donramon_sweat' },
  { speaker: 'DEFENSA', text: '¡PROTESTO!', sfx: 'desk_slam', cutin: 'objection_protesto', pose: 'donramon_slam', bgm: 'objection' },
  { speaker: 'DEFENSA', text: '¡Mire nomás qué bonita vecindad! Señor juez, ¡no me haga reír que traigo los labios partidos!', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: '¿El señor Tripaseca? ¿Observador meticuloso? ¡Por favor! Si una vez confundió un billete de cincuenta pesos con una envoltura de chicle y se lo echó a la boca.', pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: '¡Este hombre no observó nada, no estudió nada y no memorizó nada!', pose: 'donramon_slam', sfx: 'desk_slam' },
  { speaker: 'TRIPASECA', text: '¡Oiga! ¡Que me diga ratero se lo paso, pero que me diga burro no!', pose: 'tripaseca_sweat' },
  { speaker: 'JUEZ', text: 'La corte coincide en que cuesta imaginar al testigo como un erudito de la arquitectura delictiva...', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: 'Pero él ha declarado bajo juramento que lo memorizó todo por su cuenta. Si la defensa sostiene que no fue su memoria...', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: '¿De dónde salió entonces toda esa información? Demuéstrelo con una prueba del Acta.', sfx: 'gavel', pose: 'judge_gavel' }
];

export const CASE1_CLIMAX_STAGES: ClimaxStage[] = [
  {
    profileTarget: ['perfil_tripaseca'],
    prompt: '¿Quién estaba parado sobre el pedestal de esa vitrina?',
    failDialogue: STAGE_1_FAIL,
    successDialogue: STAGE_1_SUCCESS
  },
  {
    presentTarget: ['antenitas_vinil'],
    prompt: '¿Con qué instrumento propone localizar la Chicharra aquí mismo, en esta sala?',
    failDialogue: STAGE_2_FAIL,
    successDialogue: STAGE_2_SUCCESS
  },
  {
    presentTarget: ['rejilla_ducto'],
    prompt: '¿Qué prueba que el testigo estuvo dentro de esa sala?',
    introDialogue: STAGE_3_INTRO,
    pointTarget: CASE1_REJILLA_POINT_TARGET,
    failDialogue: STAGE_3_FAIL,
    successDialogue: STAGE_3_SUCCESS
  }
];
