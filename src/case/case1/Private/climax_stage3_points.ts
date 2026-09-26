// @Architecture(descriptionShort="Case 1 Spanish duct grate chained point targets", type="data", icon="layers")
import type { DialogueLine, PointTargetContradiction } from '../../../types/index.js';

const FAIL_ESQUINA: DialogueLine[] = [
  { speaker: 'JUEZ', pose: 'judge_thinking', text: 'Licenciado, los tornillos tienen la pintura entera. Busque por dónde pudo pasar.', sfx: 'damage' },
  { speaker: 'SUPER SAM', pose: 'supersam_point', text: '¡Wrong! ¡Mister Ramón está señalando lo que acabo de defender!' },
  { speaker: 'CHAPULIN', pose: 'chapulin_idle', text: 'Don Ramón, fíjese en el alambre, no en los tornillos...' }
];

const FAIL_CINTA: DialogueLine[] = [
  { speaker: 'JUEZ', pose: 'judge_thinking', text: 'Eso no demuestra que alguien haya tomado medidas premeditadas, licenciado.', sfx: 'damage' },
  { speaker: 'SUPER SAM', pose: 'supersam_point', text: '¡Time is money! ¡Deje de señalar al azar!' },
  { speaker: 'CHAPULIN', pose: 'chapulin_idle', text: 'Don Ramón, acuérdese de lo que dijo de la cinta métrica. Fíjese en el marco.' }
];

const FAIL_HILO: DialogueLine[] = [
  { speaker: 'JUEZ', pose: 'judge_thinking', text: 'Eso pertenece a la herrería, licenciado. Le pedí una prueba material que vincule al testigo.', sfx: 'damage' },
  { speaker: 'SUPER SAM', pose: 'supersam_point', text: '¡A este paso la defensa se queda sin argumentos y sin cliente!' },
  { speaker: 'CHAPULIN', pose: 'chapulin_idle', text: 'Don Ramón, mire bien lo que se quedó enganchado en el alambre...' }
];

export const STAGE_3_INTRO: DialogueLine[] = [
  { speaker: 'JUEZ', pose: 'judge_thinking', text: '¿La rejilla del ducto de ventilación? Licenciado, esta corte le pidió una prueba de que el testigo estuvo dentro de la sala dos, no una muestra de herrería.' },
  { speaker: 'SUPER SAM', pose: 'supersam_point', text: '¡Exactly! ¡Esa rejilla está atornillada al muro con cuatro tornillos del tamaño de mi pulgar! ¡Ahí no entra ni sale nadie!' },
  { speaker: 'DEFENSA', pose: 'donramon_idle', text: 'Alguien de su tamaño no, señor fiscal. Pero alguien que se tomó una Pastilla de Chiquitolina y se redujo al tamaño de un ratón, sí.' },
  { speaker: 'JUEZ', pose: 'judge_shock', text: '¡¿Escapar por ese ducto?! Pero licenciado, los cuatro tornillos tienen la pintura intacta. Nadie desatornilló esa rejilla.' },
  { speaker: 'DEFENSA', pose: 'donramon_point', text: 'No hacía falta desatornillarla, señor juez. Mire la lámina con cuidado.' }
];

const REJILLA_HILO_POINT_TARGET: PointTargetContradiction = {
  id: 'rejilla_hilo_traje',
  targetEvidenceId: 'rejilla_ducto',
  promptQuestion: 'Señala en la rejilla la prueba material que vincula directamente al testigo.',
  imageAsset: 'assets/examine_rejilla_ducto.webp',
  zones: [
    { id: 'hilo_casimir', bounds: [64, 53, 71, 74], isCorrect: true, failureDialogue: [] },
    { id: 'marcas_cinta_izq', bounds: [18, 30, 26, 46], isCorrect: false, failureDialogue: FAIL_HILO },
    { id: 'marcas_cinta_der', bounds: [73, 30, 81, 46], isCorrect: false, failureDialogue: FAIL_HILO },
    { id: 'tornillos', bounds: [18, 4, 82, 77], isCorrect: false, failureDialogue: FAIL_HILO },
    { id: 'rejilla_resto', bounds: [0, 0, 100, 100], isCorrect: false, failureDialogue: FAIL_HILO }
  ]
};

const REJILLA_CINTA_POINT_TARGET: PointTargetContradiction = {
  id: 'rejilla_marcas_cinta',
  targetEvidenceId: 'rejilla_ducto',
  promptQuestion: '¿Qué detalle en el marco demuestra que esta rejilla fue medida premeditadamente?',
  imageAsset: 'assets/examine_rejilla_ducto.webp',
  zones: [
    { id: 'marcas_cinta_izq', bounds: [18, 30, 26, 46], isCorrect: true, failureDialogue: [] },
    { id: 'marcas_cinta_der', bounds: [73, 30, 81, 46], isCorrect: true, failureDialogue: [] },
    { id: 'esquina_malla', bounds: [63, 40, 75, 68], isCorrect: false, failureDialogue: FAIL_CINTA },
    { id: 'fondo_ducto', bounds: [28, 20, 70, 60], isCorrect: false, failureDialogue: FAIL_CINTA },
    { id: 'rejilla_resto', bounds: [0, 0, 100, 100], isCorrect: false, failureDialogue: FAIL_CINTA }
  ],
  successDialogue: [
    { speaker: 'DEFENSA', text: '¡Miren el lateral interior del marco! El que da hacia la sala.', pose: 'donramon_point', sfx: 'desk_slam', bgm: 'pursuit' },
    { speaker: 'JUEZ', text: '¡Cáspita! Todo el marco tiene una capa de polvo de años... ¡excepto dos rayitas perfectamente limpias y paralelas!', pose: 'judge_shock' },
    { speaker: 'DEFENSA', text: 'Separadas exactamente por un centímetro y medio, señor juez. El ancho exacto de una cinta métrica estándar.', pose: 'donramon_slam', sfx: 'desk_slam' },
    { speaker: 'DEFENSA', text: 'Alguien apoyó la cinta en ese lateral y midió el hueco de dieciocho por veinticuatro centímetros. Lo hizo de día, desde la sala y sin ninguna prisa.', pose: 'donramon_idle' },
    { speaker: 'NARRADOR', text: 'Murmullo de asombro en la galería.', bg: 'assets/bg_gallery_characters.webp', furniture: 'none', sfx: 'realization' },
    { speaker: 'TRIPASECA', text: '¡Momento, momento! ¡Pamplinas!', pose: 'tripaseca_sweat' },
    { speaker: 'TRIPASECA', text: '¿Unas rayitas de cinta métrica? ¡Eso lo pudo haber hecho cualquiera! Un albañil, el conserje, el señor que vino a cambiar los zoclos... ¡o un curioso que pasaba por ahí!', pose: 'tripaseca_smug' },
    { speaker: 'SUPER SAM', text: '¡Excellent objection! ¡Tener marcas en una pared no vincula a mi testigo con este delito! ¡Falta la conexión personal!', pose: 'supersam_point' },
    { speaker: 'JUEZ', text: 'La corte debe darle la razón al señor fiscal y al testigo. Demostrar que alguien midió la rejilla no prueba que haya sido el señor Tripaseca.', pose: 'judge_thinking' },
    { speaker: 'DEFENSA', text: 'Alguien que mide con calma no deja su tarjeta de visita en el marco, señor juez. Pero el que se arrastró encogido por ese hueco... cometió un descuido.', pose: 'donramon_idle' }
  ],
  next: REJILLA_HILO_POINT_TARGET
};

export const CASE1_REJILLA_POINT_TARGET: PointTargetContradiction = {
  id: 'rejilla_esquina_abierta',
  targetEvidenceId: 'rejilla_ducto',
  promptQuestion: '¿Por dónde pudo escapar el intruso si nadie tocó los tornillos?',
  imageAsset: 'assets/examine_rejilla_ducto.webp',
  zones: [
    { id: 'esquina_malla_doblada', bounds: [63, 40, 75, 68], isCorrect: true, failureDialogue: [] },
    { id: 'tornillos', bounds: [18, 4, 82, 77], isCorrect: false, failureDialogue: FAIL_ESQUINA },
    { id: 'centro_malla', bounds: [28, 15, 62, 65], isCorrect: false, failureDialogue: FAIL_ESQUINA },
    { id: 'rejilla_resto', bounds: [0, 0, 100, 100], isCorrect: false, failureDialogue: FAIL_ESQUINA }
  ],
  successDialogue: [
    { speaker: 'DEFENSA', text: '¡AQUÍ, señor juez! ¡En la esquina inferior de la malla!', pose: 'donramon_slam', sfx: 'desk_slam', cutin: 'objection_toma_eso', bgm: 'objection' },
    { speaker: 'DEFENSA', text: 'El alambre no está roto por viejo. Está cortado.', pose: 'donramon_point' },
    { speaker: 'DEFENSA', text: 'Por ese hueco no pasa una persona normal, ni un gato, ni un perro. Pero alguien que mide diez centímetros entra y sale como por su casa.', pose: 'donramon_idle' },
    { speaker: 'CHAPULIN', text: '¡Chanfle! ¡Es una gatera para ratones!', pose: 'chapulin_point' },
    { speaker: 'JUEZ', text: 'La corte concede que por ahí cabría un hombre encogido... pero un momento, licenciado.', pose: 'judge_thinking' },
    { speaker: 'JUEZ', text: 'El simple hecho de que haya una malla rota en un museo viejo no prueba que nadie haya planeado usarla para este robo. Pudo ser un defecto de fábrica, o un descuido de hace diez años.', pose: 'judge_neutral' },
    { speaker: 'DEFENSA', text: 'No fue un descuido de hace diez años, señor juez. Quien preparó este golpe vino antes a inspeccionar este marco milímetro por milímetro.', pose: 'donramon_point' }
  ],
  next: REJILLA_CINTA_POINT_TARGET
};
