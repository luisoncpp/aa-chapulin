// @Architecture(descriptionShort="Case 1 English duct grate chained point targets", type="data", icon="layers")
import type { DialogueLine, PointTargetContradiction } from '../../../types/index.js';

const FAIL_CORNER_EN: DialogueLine[] = [
  { speaker: 'JUEZ', pose: 'judge_thinking', text: 'Counselor, the screws have unbroken paint. Look for where he could have slipped through.', sfx: 'damage' },
  { speaker: 'SUPER SAM', pose: 'supersam_point', text: 'Wrong! Mister Ramón is pointing right at what I just defended!' },
  { speaker: 'CHAPULIN', pose: 'chapulin_idle', text: 'Don Ramón, look at the wire, not at the screws...' }
];

const FAIL_TAPE_EN: DialogueLine[] = [
  { speaker: 'JUEZ', pose: 'judge_thinking', text: 'That does not prove anyone took premeditated measurements, counselor.', sfx: 'damage' },
  { speaker: 'SUPER SAM', pose: 'supersam_point', text: 'Time is money! Stop pointing at random!' },
  { speaker: 'CHAPULIN', pose: 'chapulin_idle', text: 'Don Ramón, remember what you said about the tape measure. Look at the frame.' }
];

const FAIL_THREAD_EN: DialogueLine[] = [
  { speaker: 'JUEZ', pose: 'judge_thinking', text: 'That belongs to the ironwork, counselor. I asked for physical evidence linking the witness.', sfx: 'damage' },
  { speaker: 'SUPER SAM', pose: 'supersam_point', text: 'At this rate the defense will run out of arguments and out of a client!' },
  { speaker: 'CHAPULIN', pose: 'chapulin_idle', text: 'Don Ramón, look closely at what got caught on the wire...' }
];

export const STAGE_3_INTRO_EN: DialogueLine[] = [
  { speaker: 'JUEZ', pose: 'judge_thinking', text: 'The ventilation duct grate? Counselor, this court requested proof that the witness was inside gallery two, not a sample of ironwork.' },
  { speaker: 'SUPER SAM', pose: 'supersam_point', text: 'Exactly! That grate is screwed into the wall with four screws the size of my thumb! Nobody goes in or out through there!' },
  { speaker: 'DEFENSA', pose: 'donramon_idle', text: 'Nobody of your size, counselor. But someone who took a Chiquitolina Pill and shrank to the size of a mouse certainly could.' },
  { speaker: 'JUEZ', pose: 'judge_shock', text: 'Escape through that duct?! But counselor, all four screws have unbroken paint. Nobody unscrewed that grate.' },
  { speaker: 'DEFENSA', pose: 'donramon_point', text: 'There was no need to unscrew it, Your Honor. Look closely at the plate.' }
];

const REJILLA_HILO_POINT_TARGET_EN: PointTargetContradiction = {
  id: 'rejilla_hilo_traje',
  targetEvidenceId: 'rejilla_ducto',
  promptQuestion: 'Point out the physical evidence on the grate that directly links the witness.',
  imageAsset: 'assets/examine_rejilla_ducto.webp',
  zones: [
    { id: 'hilo_casimir', bounds: [64, 53, 71, 74], isCorrect: true, failureDialogue: [] },
    { id: 'marcas_cinta_izq', bounds: [18, 30, 26, 46], isCorrect: false, failureDialogue: FAIL_THREAD_EN },
    { id: 'marcas_cinta_der', bounds: [73, 30, 81, 46], isCorrect: false, failureDialogue: FAIL_THREAD_EN },
    { id: 'tornillos', bounds: [18, 4, 82, 77], isCorrect: false, failureDialogue: FAIL_THREAD_EN },
    { id: 'rejilla_resto', bounds: [0, 0, 100, 100], isCorrect: false, failureDialogue: FAIL_THREAD_EN }
  ]
};

const REJILLA_CINTA_POINT_TARGET_EN: PointTargetContradiction = {
  id: 'rejilla_marcas_cinta',
  targetEvidenceId: 'rejilla_ducto',
  promptQuestion: 'What detail on the frame proves this grate was premeditatedly measured?',
  imageAsset: 'assets/examine_rejilla_ducto.webp',
  zones: [
    { id: 'marcas_cinta_izq', bounds: [18, 30, 26, 46], isCorrect: true, failureDialogue: [] },
    { id: 'marcas_cinta_der', bounds: [73, 30, 81, 46], isCorrect: true, failureDialogue: [] },
    { id: 'esquina_malla', bounds: [63, 40, 75, 68], isCorrect: false, failureDialogue: FAIL_TAPE_EN },
    { id: 'fondo_ducto', bounds: [28, 20, 70, 60], isCorrect: false, failureDialogue: FAIL_TAPE_EN },
    { id: 'rejilla_resto', bounds: [0, 0, 100, 100], isCorrect: false, failureDialogue: FAIL_TAPE_EN }
  ],
  successDialogue: [
    { speaker: 'DEFENSA', text: 'Look at the inner lip of the frame! The one facing the gallery.', pose: 'donramon_point', sfx: 'desk_slam', bgm: 'pursuit' },
    { speaker: 'JUEZ', text: 'Great Scott! The entire frame carries years of dust... except for two perfectly clean parallel strips!', pose: 'judge_shock' },
    { speaker: 'DEFENSA', text: 'Separated by exactly one and a half centimetres, Your Honor. The exact width of a standard tape measure.', pose: 'donramon_slam', sfx: 'desk_slam' },
    { speaker: 'DEFENSA', text: 'Someone rested the tape on that lip and measured the eighteen-by-twenty-four opening. Standing up, by day, from the gallery and in no hurry at all.', pose: 'donramon_idle' },
    { speaker: 'NARRADOR', text: 'A murmur of astonishment runs through the gallery.', bg: 'assets/bg_gallery_characters.webp', furniture: 'none', sfx: 'realization' },
    { speaker: 'TRIPASECA', text: 'Wait a minute, wait a minute! Rubbish!', pose: 'tripaseca_sweat' },
    { speaker: 'TRIPASECA', text: 'A couple of tape measure marks? Anyone could have done that! A bricklayer, the janitor, the guy replacing the baseboards... or some curious tourist passing by!', pose: 'tripaseca_smug' },
    { speaker: 'SUPER SAM', text: 'Excellent objection! Having marks on a wall does not link my witness to this crime! We lack the personal connection!', pose: 'supersam_point' },
    { speaker: 'JUEZ', text: 'The court must agree with the prosecutor and the witness. Proving someone measured the grate does not prove it was Mr. Tripaseca.', pose: 'judge_thinking' },
    { speaker: 'DEFENSA', text: "Someone measuring on their feet doesn't leave a calling card on the frame, Your Honor. But the one who crawled through that opening... made a slip-up.", pose: 'donramon_idle' }
  ],
  next: REJILLA_HILO_POINT_TARGET_EN
};

export const CASE1_REJILLA_POINT_TARGET_EN: PointTargetContradiction = {
  id: 'rejilla_esquina_abierta',
  targetEvidenceId: 'rejilla_ducto',
  promptQuestion: 'Where could the intruder have slipped through if nobody touched the screws?',
  imageAsset: 'assets/examine_rejilla_ducto.webp',
  zones: [
    { id: 'esquina_malla_doblada', bounds: [63, 40, 75, 68], isCorrect: true, failureDialogue: [] },
    { id: 'tornillos', bounds: [18, 4, 82, 77], isCorrect: false, failureDialogue: FAIL_CORNER_EN },
    { id: 'centro_malla', bounds: [28, 15, 62, 65], isCorrect: false, failureDialogue: FAIL_CORNER_EN },
    { id: 'rejilla_resto', bounds: [0, 0, 100, 100], isCorrect: false, failureDialogue: FAIL_CORNER_EN }
  ],
  successDialogue: [
    { speaker: 'DEFENSA', text: 'RIGHT HERE, Your Honor! In the bottom corner of the mesh!', pose: 'donramon_slam', sfx: 'desk_slam', cutin: 'objection_toma_eso', bgm: 'objection' },
    { speaker: 'DEFENSA', text: 'The wire is not broken from age. It was cut.', pose: 'donramon_point' },
    { speaker: 'DEFENSA', text: 'A normal person, a cat, or a dog cannot fit through there. But someone who stands ten centimetres tall goes in and out like it is their own home.', pose: 'donramon_idle' },
    { speaker: 'CHAPULIN', text: '¡Chanfle! It is a cat door for mice!', pose: 'chapulin_point' },
    { speaker: 'JUEZ', text: 'The court concedes that a shrunken man could fit through there... but one moment, counselor.', pose: 'judge_thinking' },
    { speaker: 'JUEZ', text: 'The simple fact of a torn mesh in an old museum does not prove anyone planned to use it for this theft. It could be a factory defect, or neglect from ten years ago.', pose: 'judge_neutral' },
    { speaker: 'DEFENSA', text: 'It was not neglect from ten years ago, Your Honor. Whoever prepared this heist came earlier to inspect this frame millimetre by millimetre.', pose: 'donramon_point' }
  ],
  next: REJILLA_CINTA_POINT_TARGET_EN
};
