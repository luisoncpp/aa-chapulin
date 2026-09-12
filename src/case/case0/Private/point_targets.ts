// @Architecture(descriptionShort="Case 0 present-and-point geometry", type="data", icon="target")
import type { DialogueLine, PointTargetContradiction } from '../../../types/index.js';

const FOTO_FAILURE_ES: DialogueLine[] = [
  { speaker: 'JUEZ', pose: 'judge_shock', text: 'Ese punto no dice nada sobre una campanada, licenciado.' },
  { speaker: 'SUPER SAM', pose: 'supersam_slam', sfx: 'desk_slam', text: '¡Un peso menos de credibilidad para la defensa! ¡Y van!' },
  { speaker: 'CHAPULÍN', pose: 'chapulin_point', text: 'Calma, Don Ramón. Vuelve a mirar la foto: la escuela está al fondo, y lo que le falta es lo que importa.' }
];

const PLANCHA_FAILURE_ES: DialogueLine[] = [
  { speaker: 'JUEZ', pose: 'judge_shock', text: 'Ese detalle no demuestra quién usó la plancha.' },
  { speaker: 'SUPER SAM', pose: 'supersam_slam', sfx: 'desk_slam', text: '¡Otro peso menos de credibilidad! La defensa debe señalar un detalle material.' },
  { speaker: 'CHAPULÍN', pose: 'chapulin_point', text: 'Calma, Don Ramón. Mira la plancha completa y busca lo que no debería estar ahí.' }
];

export const CASE0_FOTO_POINT_TARGET: PointTargetContradiction = {
  targetEvidenceId: 'foto_patio',
  promptQuestion: 'Señala en la imagen: ¿qué hay en la escuela de enfrente el día 12 de julio?',
  imageAsset: 'assets/point_foto_patio.webp',
  zones: [
    { id: 'campanario_vacio', bounds: [80, 0, 97, 32], isCorrect: true, failureDialogue: FOTO_FAILURE_ES },
    { id: 'lavadero', bounds: [0, 55, 32, 100], isCorrect: false, failureDialogue: FOTO_FAILURE_ES },
    { id: 'tendedero', bounds: [0, 0, 58, 55], isCorrect: false, failureDialogue: FOTO_FAILURE_ES },
    { id: 'puerta_4', bounds: [88, 40, 100, 100], isCorrect: false, failureDialogue: FOTO_FAILURE_ES },
    { id: 'carrito_paletas', bounds: [58, 60, 80, 100], isCorrect: false, failureDialogue: FOTO_FAILURE_ES }
  ]
};

export const CASE0_FOTO_POINT_TARGET_EN: PointTargetContradiction = {
  ...CASE0_FOTO_POINT_TARGET,
  promptQuestion: 'Point to the image: what is at the school across the street on July 12?',
  zones: CASE0_FOTO_POINT_TARGET.zones.map((zone) => ({
    ...zone,
    failureDialogue: [
      { speaker: 'JUEZ', pose: 'judge_shock', text: 'That spot says nothing about a bell, counselor.' },
      { speaker: 'SUPER SAM', pose: 'supersam_slam', sfx: 'desk_slam', text: 'Another point of credibility for the defense! It must identify a material detail.' },
      { speaker: 'CHAPULÍN', pose: 'chapulin_point', text: 'Stay calm, Don Ramón. Look at the school in the background, and find what is missing.' }
    ]
  }))
};

export const CASE0_PLANCHA_POINT_TARGET: PointTargetContradiction = {
  targetEvidenceId: 'plancha_carbon',
  promptQuestion: 'Señala en la imagen el detalle que delata a quien usó la plancha.',
  imageAsset: 'assets/point_plancha.webp',
  zones: [
    { id: 'mango_tizne', bounds: [31, 5, 74, 45], isCorrect: true, failureDialogue: PLANCHA_FAILURE_ES },
    { id: 'base', bounds: [28, 45, 78, 100], isCorrect: false, failureDialogue: PLANCHA_FAILURE_ES },
    { id: 'carbon', bounds: [0, 0, 28, 45], isCorrect: false, failureDialogue: PLANCHA_FAILURE_ES },
    { id: 'repisa', bounds: [0, 78, 100, 100], isCorrect: false, failureDialogue: PLANCHA_FAILURE_ES },
    { id: 'pared', bounds: [78, 0, 100, 78], isCorrect: false, failureDialogue: PLANCHA_FAILURE_ES }
  ]
};

export const CASE0_PLANCHA_POINT_TARGET_EN: PointTargetContradiction = {
  ...CASE0_PLANCHA_POINT_TARGET,
  promptQuestion: 'Point to the image detail that gives away who used the iron.',
  zones: CASE0_PLANCHA_POINT_TARGET.zones.map((zone) => ({
    ...zone,
    failureDialogue: [
      { speaker: 'JUEZ', pose: 'judge_shock', text: 'That detail does not show who used the iron.' },
      { speaker: 'SUPER SAM', pose: 'supersam_slam', sfx: 'desk_slam', text: 'Another point of credibility lost! The defense must identify a material detail.' },
      { speaker: 'CHAPULÍN', pose: 'chapulin_point', text: 'Stay calm, Don Ramón. Look at the whole iron and find what should not be there.' }
    ]
  }))
};
