// @Architecture(descriptionShort="Case 1 Spanish mirror-photo chained point targets", type="data", icon="layers")
import type { DialogueLine, PointTargetContradiction } from '../../../types/index.js';

const FAIL_PECHO: DialogueLine[] = [
  { speaker: 'JUEZ', pose: 'judge_thinking', text: 'Licenciado, la corte le pidió el pecho de ese hombre.', sfx: 'damage' },
  { speaker: 'JUEZ', pose: 'judge_neutral', text: 'Eso no resuelve lo que el testigo acaba de afirmar sobre las letras del emblema.' },
  { speaker: 'SUPER SAM', pose: 'supersam_point', text: '¡Otro punto menos! ¡A este paso la defensa me sale gratis!' },
  { speaker: 'CHAPULIN', pose: 'chapulin_idle', text: 'Don Ramón, acuérdese de lo que dijo el testigo: las dos letras. Mírelas de cerca.' }
];

const FAIL_PINTURA: DialogueLine[] = [
  { speaker: 'JUEZ', pose: 'judge_thinking', text: 'Eso no demuestra que la cámara retratara un espejo.', sfx: 'damage' },
  { speaker: 'SUPER SAM', pose: 'supersam_point', text: '¡Wrong answer! ¡Time is money y usted está gastando los dos!' },
  { speaker: 'CHAPULIN', pose: 'chapulin_idle', text: 'Don Ramón, el croquis decía dónde estaban la cámara y el espejo. Fíjese en lo que aparece detrás de mí.' }
];

const FAIL_CROQUIS_PINTURA: DialogueLine[] = [
  { speaker: 'JUEZ', pose: 'judge_thinking', text: 'Licenciado, concéntrese en el plano del pasillo. ¿Dónde estaba esa pintura?', sfx: 'damage' },
  { speaker: 'SUPER SAM', pose: 'supersam_point', text: '¡Wrong! ¡Mister Ramón está señalando a ciegas!' },
  { speaker: 'CHAPULIN', pose: 'chapulin_idle', text: 'Don Ramón, acuérdese: la cámara apuntaba al espejo. ¿Dónde tenía que estar la pintura para salir en el reflejo?' }
];

// fallow-ignore-next-line unused-export -- tested in tests/case/Case1PresentPointZones.test.ts
export const CROQUIS_PINTURA_POINT_TARGET: PointTargetContradiction = {
  id: 'croquis_ubicacion_pintura',
  targetEvidenceId: 'plano_pasillo',
  promptQuestion: 'Señala en el croquis dónde está ubicada la pintura.',
  imageAsset: 'assets/examine_plano_pasillo.webp',
  zones: [
    { id: 'pared_fondo_pintura', bounds: [14, 50, 21, 81], isCorrect: true, failureDialogue: [] },
    { id: 'zona_camara', bounds: [18, 65, 30, 81], isCorrect: false, failureDialogue: FAIL_CROQUIS_PINTURA },
    { id: 'zona_espejo', bounds: [76, 50, 86, 80], isCorrect: false, failureDialogue: FAIL_CROQUIS_PINTURA },
    { id: 'zona_patio', bounds: [25, 25, 48, 45], isCorrect: false, failureDialogue: FAIL_CROQUIS_PINTURA },
    { id: 'zona_salas', bounds: [50, 25, 68, 52], isCorrect: false, failureDialogue: FAIL_CROQUIS_PINTURA },
    { id: 'resto_croquis', bounds: [0, 0, 100, 100], isCorrect: false, failureDialogue: FAIL_CROQUIS_PINTURA }
  ]
};

const PINTURA_POINT_TARGET: PointTargetContradiction = {
  id: 'foto_pintura_espejo',
  targetEvidenceId: 'foto_crimen',
  promptQuestion: 'Señala en la foto la prueba de que fue tomada frente a un espejo.',
  imageAsset: 'assets/examine_foto_crimen.webp',
  zones: [
    { id: 'pintura', bounds: [61, 18, 81, 41], isCorrect: true, failureDialogue: [] },
    { id: 'chapulin', bounds: [30, 20, 65, 100], isCorrect: false, failureDialogue: FAIL_PINTURA },
    { id: 'marco_espejo', bounds: [0, 0, 18, 100], isCorrect: false, failureDialogue: FAIL_PINTURA },
    { id: 'piso_pasillo', bounds: [18, 60, 100, 100], isCorrect: false, failureDialogue: FAIL_PINTURA },
    { id: 'foto_resto', bounds: [0, 0, 100, 100], isCorrect: false, failureDialogue: FAIL_PINTURA }
  ],
  successDialogue: [
    { speaker: 'DEFENSA', text: '¡La pintura que se ve detrás del Chapulín, señor juez!', pose: 'donramon_slam', sfx: 'desk_slam', cutin: 'objection_toma_eso', bgm: 'objection' },
    { speaker: 'JUEZ', text: '¿La pintura?', pose: 'judge_shock' },
    { speaker: 'JUEZ', text: 'Defensa: si esa pintura explica el reflejo... señale en el croquis del pasillo dónde se encuentra.', pose: 'judge_thinking' }
  ],
  next: CROQUIS_PINTURA_POINT_TARGET
};

export const CASE1_FOTO_POINT_TARGET: PointTargetContradiction = {
  id: 'foto_emblema_invertido',
  targetEvidenceId: 'foto_crimen',
  promptQuestion: 'Señala en la lámina: ¿qué tiene de raro el pecho de ese hombre?',
  imageAsset: 'assets/examine_foto_crimen.webp',
  zones: [
    { id: 'emblema_pecho', bounds: [42, 37, 53, 51], isCorrect: true, failureDialogue: [] },
    { id: 'manos', bounds: [32, 46, 64, 64], isCorrect: false, failureDialogue: FAIL_PECHO },
    { id: 'marco_espejo', bounds: [0, 0, 18, 100], isCorrect: false, failureDialogue: FAIL_PECHO },
    { id: 'piso_pasillo', bounds: [18, 60, 100, 100], isCorrect: false, failureDialogue: FAIL_PECHO },
    { id: 'pasillo_reflejado', bounds: [18, 12, 100, 60], isCorrect: false, failureDialogue: FAIL_PECHO },
    { id: 'foto_resto', bounds: [0, 0, 100, 100], isCorrect: false, failureDialogue: FAIL_PECHO }
  ],
  successDialogue: [
    { speaker: 'DEFENSA', text: '¡AQUÍ! ¡El corazón del pecho, señor juez!', sfx: 'desk_slam', cutin: 'objection_toma_eso', pose: 'donramon_slam', bgm: 'objection' },
    { speaker: 'DEFENSA', text: 'El testigo declaró "ce, hache". Pero en esta fotografía las letras no están en ese orden.', pose: 'donramon_point' },
    { speaker: 'NARRADOR', text: '...', bg: 'assets/ampliacion_foto_crimen_emblema.webp', furniture: 'none', sfx: 'realization', bgm: 'objection' },
    { speaker: 'JUEZ', text: '¡Cáspita! ¡Están al revés!', pose: 'judge_shock' },
    { speaker: 'SUPER SAM', text: '¡Es un reflejo del negativo! ¡Lo voltearon en el laboratorio!', pose: 'supersam_slam', sfx: 'desk_slam' },
    { speaker: 'DEFENSA', text: 'No es un reflejo provocado por el negativo, señor fiscal. La escena ya estaba reflejada cuando apretaron el obturador.', pose: 'donramon_idle' },
    { speaker: 'SUPER SAM', text: '¡Entonces pruébelo, Mister Defensa! ¡Time is money!', pose: 'supersam_point', sfx: 'desk_slam' }
  ],
  next: PINTURA_POINT_TARGET
};
