// @Architecture(descriptionShort="English Case 0 climax, verdict, and epilogue", type="data", icon="layers")
import type { ClimaxDefinition } from '../../../types/index.js';
import { CASE0_PLANCHA_POINT_TARGET_EN } from './point_targets.js';

const EPILOGUE_BG = 'assets/bg_waiting_room_case0.webp';

export const CASE0_CLIMAX_EN: ClimaxDefinition = {
  dialogue: [
    { speaker: 'DEFENSA', pose: 'donramon_point', text: 'I will prove two things, Your Honor: what struck Mr. Nazario, and what this man went looking for in a paleta seller’s home.', bgm: 'suspense' },
    { speaker: 'JUEZ', pose: 'judge_thinking', text: 'The defense may begin.' },
    { speaker: 'CASIMIRO', pose: 'casimiro_panic', text: 'That is unbound slander!' }
  ],
  presentTarget: ['plancha_carbon'],
  stages: [
    {
      presentTarget: ['plancha_carbon'], requiredUpdateStage: { informe_lesiones: 2 },
      prompt: 'What object in house 4 explains that injury?', pointTarget: CASE0_PLANCHA_POINT_TARGET_EN,
      successDialogue: [
        { speaker: 'DEFENSA', pose: 'donramon_slam', cutin: 'objection_toma_eso', sfx: 'desk_slam', text: 'TAKE THAT!', bgm: 'pursuit' },
        { speaker: 'DEFENSA', pose: 'donramon_point', text: 'The charcoal iron from the shelf. Flat base, straight edge, six kilos: the impression fits.' },
        { speaker: 'DEFENSA', pose: 'donramon_point', text: 'The handle! Fresh soot where it is held, and the iron put back with its handle against the wall.' },
        { speaker: 'CHAPULÍN', pose: 'chapulin_point', text: 'Nobody stores an iron backward unless they have never used one!' },
        { speaker: 'TORIBIO', pose: 'toribio_llorando', text: 'I always put the handle out, counselor.' },
        { speaker: 'DEFENSA', pose: 'donramon_point', text: 'Whoever used it put it back. He stayed. He had time.', updateEvidence: 'lata_ahorros' },
        { speaker: 'NARRADOR', text: 'The report adds a line: the savings tin lid has the same soot as the iron handle.' },
        { speaker: 'CASIMIRO', pose: 'casimiro_panic', text: 'That proves nothing! The tin was still full!' },
        { speaker: 'SUPER SAM', pose: 'supersam_point', text: 'Precisely! Forty pesos intact! There was no burglary.' }
      ]
    },
    {
      presentTarget: ['lata_ahorros'], requiredUpdateStage: { lata_ahorros: 1 },
      prompt: 'What object in that house was not where it belonged?',
      successDialogue: [
        { speaker: 'DEFENSA', pose: 'donramon_slam', cutin: 'objection_protesto', sfx: 'desk_slam', text: 'OBJECTION! The tin is full, but it is not where it belongs!', bgm: 'pursuit' },
        { speaker: 'DEFENSA', pose: 'donramon_point', text: 'Police found it on the table. Toribio keeps it under the cot, wrapped in cloth.' },
        { speaker: 'TORIBIO', pose: 'toribio_nervioso', text: 'Since I moved in, counselor.' },
        { speaker: 'CHAPULÍN', pose: 'chapulin_point', text: 'The same hand touched both things!' },
        { speaker: 'DEFENSA', pose: 'donramon_point', text: 'That man entered for the tin. He had it in his hands when the collector opened the door.' },
        { speaker: 'CASIMIRO', pose: 'casimiro_breakdown', text: 'HE WAS AN OLD MAN WITH A FULL BRIEFCASE! That boy had nothing!' },
        { speaker: 'NARRADOR', text: 'The sample volumes fall from his case. For the first time, the witness stops looking at his watches.' },
        { speaker: 'SUPER SAM', pose: 'supersam_idle', text: 'The prosecution withdraws its charge against Toribio Pantoja.' }
      ]
    }
  ],
  choicesAfterStage: 0,
  choices: [
    {
      id: 'arma', question: 'What does putting the iron back on the shelf prove?',
      options: [
        { id: 'arma', label: 'That the iron was the assault weapon.' },
        { id: 'calma', label: 'That whoever struck him had time and calm enough to put it away.' },
        { id: 'huellas', label: 'That the culprit wanted to erase fingerprints.' },
        { id: 'orden', label: 'That the defendant is an orderly person.' }
      ],
      correctId: 'calma',
      successDialogue: [
        { speaker: 'DEFENSA', pose: 'donramon_point', text: 'Exactly. This was not a panicked blow: someone took the time to return it to the shelf.' },
        { speaker: 'JUEZ', pose: 'judge_neutral', text: 'Then the defense must explain what else was moved.' }
      ],
      failDialogue: [
        { speaker: 'JUEZ', pose: 'judge_shock', text: 'That does not explain why the iron ended up arranged on the shelf.' },
        { speaker: 'DEFENSA', pose: 'donramon_point', text: 'Think about the calm required to put an object back after the blow.' }
      ]
    }
  ],
  verdict: [
    { speaker: 'JUEZ', pose: 'judge_gavel', text: 'For what was heard today, this court finds the defendant Toribio Pantoja...', sfx: 'gavel' },
    { speaker: 'JUEZ', pose: 'judge_gavel', text: 'NOT GUILTY!', cutin: 'objection_inocente', bgm: 'victory' },
    { speaker: 'TORIBIO', pose: 'toribio_aliviado', text: 'Counselor! I won! ...Did we win?' },
        { speaker: 'DEFENSA', pose: 'donramon_idle', text: 'You won. I just talked.' },
    { speaker: 'CHAPULÍN', pose: 'chapulin_idle', text: 'Pressing is free, presenting takes care, and every detail matters.' },
    { speaker: 'JUEZ', pose: 'judge_gavel', text: 'Casimiro Lengua is remanded, and the collection file is returned. Court is adjourned.', sfx: 'gavel' }
  ],
  epilogue: {
    bg: EPILOGUE_BG,
    dialogue: [
      { speaker: 'NARRADOR', text: 'The courthouse waiting room.', bg: EPILOGUE_BG, bgm: 'epilogue' },
      { speaker: 'TORIBIO', pose: 'toribio_idle', text: 'Counselor, I cannot pay you. I only have this.', bg: EPILOGUE_BG },
      { speaker: 'DEFENSA', pose: 'donramon_idle', text: 'Fourteen paletas?', bg: EPILOGUE_BG },
      { speaker: 'TORIBIO', pose: 'toribio_aliviado', text: 'Thirteen. One melted at the courthouse.', bg: EPILOGUE_BG },
      { speaker: 'DEFENSA', pose: 'donramon_idle', text: '(Thirteen paletas and fourteen months of rent. We are even.)', bg: EPILOGUE_BG },
      { speaker: 'CHAPULÍN', pose: 'chapulin_idle', text: 'Every lawyer starts with a client who pays in kind.', bg: EPILOGUE_BG },
      { speaker: 'DEFENSA', pose: 'donramon_idle', text: 'And ends with a landlord who wants cash.', bg: EPILOGUE_BG },
      { speaker: 'NARRADOR', text: 'An open newspaper lies on the bench: “GOLDEN PARALYZING CHICHARRA STOLEN FROM THE MUSEUM OF CURIOSITIES.”', bg: EPILOGUE_BG },
      { speaker: 'CHAPULÍN', pose: 'chapulin_idle', text: '...Chanfle.', bg: EPILOGUE_BG },
      { speaker: 'DEFENSA', pose: 'donramon_point', text: 'Who will defend that one?', bg: EPILOGUE_BG },
      { speaker: 'CHAPULÍN', pose: 'chapulin_idle', text: 'That is the detail.', bg: EPILOGUE_BG }
    ]
  }
};
