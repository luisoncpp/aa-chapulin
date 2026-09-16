// @Architecture(descriptionShort="Case 1 English mirror-photo chained point targets", type="data", icon="layers")
import type { DialogueLine, PointTargetContradiction } from '../../../types/index.js';

const FAIL_CHEST: DialogueLine[] = [
  { speaker: 'JUEZ', pose: 'judge_thinking', text: "Counselor, the court asked you for that man's chest.", sfx: 'damage' },
  { speaker: 'JUEZ', pose: 'judge_neutral', text: 'That does not answer what the witness just claimed about the emblem letters.' },
  { speaker: 'SUPER SAM', pose: 'supersam_point', text: 'Another point gone! At this rate the defense will be free of charge!' },
  { speaker: 'CHAPULIN', pose: 'chapulin_idle', text: 'Don Ramón, remember what the witness said: the two letters. Look at them closely.' }
];

const FAIL_PAINTING: DialogueLine[] = [
  { speaker: 'JUEZ', pose: 'judge_thinking', text: 'That does not prove the camera photographed a mirror.', sfx: 'damage' },
  { speaker: 'SUPER SAM', pose: 'supersam_point', text: 'Wrong answer! Time is money, and you are wasting both!' },
  { speaker: 'CHAPULIN', pose: 'chapulin_idle', text: 'Don Ramón, the sketch showed where the camera and mirror were. Look at what appears behind me.' }
];

const FAIL_CROQUIS_PAINTING: DialogueLine[] = [
  { speaker: 'JUEZ', pose: 'judge_thinking', text: 'Counselor, focus on the corridor sketch. Where was that painting?', sfx: 'damage' },
  { speaker: 'SUPER SAM', pose: 'supersam_point', text: 'Wrong! Mister Ramón is pointing blindly!' },
  { speaker: 'CHAPULIN', pose: 'chapulin_idle', text: 'Don Ramón, remember: the camera was aimed at the mirror. Where did the painting have to be to appear in the reflection?' }
];

// fallow-ignore-next-line unused-export -- tested in tests/case/Case1PresentPointZones.test.ts
export const CROQUIS_PINTURA_POINT_TARGET_EN: PointTargetContradiction = {
  id: 'croquis_ubicacion_pintura',
  targetEvidenceId: 'plano_pasillo',
  promptQuestion: 'Point out on the sketch where the painting is located.',
  imageAsset: 'assets/examine_plano_pasillo.webp',
  zones: [
    { id: 'pared_fondo_pintura', bounds: [14, 50, 21, 81], isCorrect: true, failureDialogue: [] },
    { id: 'zona_camara', bounds: [18, 65, 30, 81], isCorrect: false, failureDialogue: FAIL_CROQUIS_PAINTING },
    { id: 'zona_espejo', bounds: [76, 50, 86, 80], isCorrect: false, failureDialogue: FAIL_CROQUIS_PAINTING },
    { id: 'zona_patio', bounds: [25, 25, 48, 45], isCorrect: false, failureDialogue: FAIL_CROQUIS_PAINTING },
    { id: 'zona_salas', bounds: [50, 25, 68, 52], isCorrect: false, failureDialogue: FAIL_CROQUIS_PAINTING },
    { id: 'resto_croquis', bounds: [0, 0, 100, 100], isCorrect: false, failureDialogue: FAIL_CROQUIS_PAINTING }
  ]
};

const PAINTING_POINT_TARGET: PointTargetContradiction = {
  id: 'foto_pintura_espejo',
  targetEvidenceId: 'foto_crimen',
  promptQuestion: 'Point at the proof that this photograph was taken facing a mirror.',
  imageAsset: 'assets/examine_foto_crimen.webp',
  zones: [
    { id: 'pintura', bounds: [61, 18, 81, 41], isCorrect: true, failureDialogue: [] },
    { id: 'chapulin', bounds: [30, 20, 65, 100], isCorrect: false, failureDialogue: FAIL_PAINTING },
    { id: 'marco_espejo', bounds: [0, 0, 18, 100], isCorrect: false, failureDialogue: FAIL_PAINTING },
    { id: 'piso_pasillo', bounds: [18, 60, 100, 100], isCorrect: false, failureDialogue: FAIL_PAINTING },
    { id: 'foto_resto', bounds: [0, 0, 100, 100], isCorrect: false, failureDialogue: FAIL_PAINTING }
  ],
  successDialogue: [
    { speaker: 'DEFENSA', text: 'The painting behind the Chapulín, Your Honor!', pose: 'donramon_slam', sfx: 'desk_slam', cutin: 'objection_toma_eso', bgm: 'objection' },
    { speaker: 'JUEZ', text: 'The painting?', pose: 'judge_shock' },
    { speaker: 'JUEZ', text: 'Defense: if that painting explains the reflection... point out on the corridor sketch where it is located.', pose: 'judge_thinking' }
  ],
  next: CROQUIS_PINTURA_POINT_TARGET_EN
};

export const CASE1_FOTO_POINT_TARGET_EN: PointTargetContradiction = {
  id: 'foto_emblema_invertido',
  targetEvidenceId: 'foto_crimen',
  promptQuestion: "Point at the plate: what is strange about that man's chest?",
  imageAsset: 'assets/examine_foto_crimen.webp',
  zones: [
    { id: 'emblema_pecho', bounds: [42, 37, 53, 51], isCorrect: true, failureDialogue: [] },
    { id: 'manos', bounds: [32, 46, 64, 64], isCorrect: false, failureDialogue: FAIL_CHEST },
    { id: 'marco_espejo', bounds: [0, 0, 18, 100], isCorrect: false, failureDialogue: FAIL_CHEST },
    { id: 'piso_pasillo', bounds: [18, 60, 100, 100], isCorrect: false, failureDialogue: FAIL_CHEST },
    { id: 'pasillo_reflejado', bounds: [18, 12, 100, 60], isCorrect: false, failureDialogue: FAIL_CHEST },
    { id: 'foto_resto', bounds: [0, 0, 100, 100], isCorrect: false, failureDialogue: FAIL_CHEST }
  ],
  successDialogue: [
    { speaker: 'DEFENSA', text: 'HERE! The heart on his chest, Your Honor!', sfx: 'desk_slam', cutin: 'objection_toma_eso', pose: 'donramon_slam', bgm: 'objection' },
    { speaker: 'DEFENSA', text: 'The witness said "C, H." But the letters are not in that order in this photograph.', pose: 'donramon_point' },
    { speaker: 'NARRADOR', text: '...', bg: 'assets/ampliacion_foto_crimen_emblema.webp', furniture: 'none', sfx: 'realization', bgm: 'objection' },
    { speaker: 'JUEZ', text: 'Good heavens! They are backward!', pose: 'judge_shock' },
    { speaker: 'SUPER SAM', text: 'It is a reflection from the negative! They flipped it at the laboratory!', pose: 'supersam_slam', sfx: 'desk_slam' },
    { speaker: 'DEFENSA', text: 'The negative did not create that reflection, counselor. The scene was already reflected when the shutter clicked.', pose: 'donramon_idle' },
    { speaker: 'SUPER SAM', text: 'Then prove it, Mister Defense! Time is money!', pose: 'supersam_point', sfx: 'desk_slam' }
  ],
  next: PAINTING_POINT_TARGET
};
