// @Architecture(descriptionShort="Defines English final confrontation, culprit breakdown, and verdict", type="data", icon="layers")
/**
 * Case 1 Final Climax & Verdict Script - English
 * Consumed by [[src/engine/Private/TrialController.ts]].
 */

import type { ClimaxDefinition } from '../../types/index.js';

// @Section(Climax Confrontation & Dilemma - English)
export const CLIMAX_DATA_EN: ClimaxDefinition = {
  dialogue: [
    { speaker: 'SUPER SAM', text: 'Hold it right there! If Tripaseca is the thief... where is the Golden Chicharra at this very moment?!', pose: 'supersam_point', sfx: 'desk_slam' },
    { speaker: 'JUEZ', text: 'The prosecution is right! To pass sentence, the defense must present conclusive proof of where the treasure is hidden.', pose: 'judge_thinking' },
    { speaker: 'DEFENSA', text: '(This is my final chance. El Chapulín\'s Vinyl Antennae are detecting enemy presence... right at the witness stand!)', pose: 'donramon_idle' }
  ],
  presentTarget: ['antenitas_vinil', 'bolsa_dolares'],
  // @Section(Guilty Confession & Not Guilty Verdict - English)
  verdict: [
    { cutin: 'objection_protesto', speaker: 'DEFENSA', text: 'OBJECTION!', sfx: 'whoosh', bgm: 'pursuit', pose: 'donramon_point' },
    { speaker: 'DEFENSA', text: "El Chapulín's Vinyl Antennae are vibrating with maximum force, pointing straight at Tripaseca's jacket pocket!", pose: 'donramon_point' },
    { speaker: 'CHAPULIN', text: "They didn't count on my cleverness! And even less on my antennae!", pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: "Officer, inspect the lining of the witness's jacket!", sfx: 'realization', pose: 'donramon_slam' },
    { speaker: 'JUEZ', text: 'Bailiff! Proceed with the search at once!', pose: 'judge_gavel', sfx: 'gavel' },
    { speaker: 'NARRADOR', text: '*BEEP-BOOOOP!* (The Golden Paralyzing Chicharra falls to the floor, echoing across the court)', sfx: 'chicharra' },
    { speaker: 'TRIPASECA', text: 'CURSESSSS! I CONFEEEEEESS! I STOLE THE CHICHARRA AND PAID OFF SAM WITH COUNTERFEIT DOLLARS!', pose: 'tripaseca_breakdown' },
    { speaker: 'SUPER SAM', text: 'WHAAAT?! COUNTERFEIT DOLLARS?! MY MONEY IS RUINED, OH NOOOOO!', pose: 'supersam_breakdown' },
    { speaker: 'JUEZ', text: 'Proven and verified! This court has reached a definitive and unquestionable verdict.', pose: 'judge_gavel', sfx: 'gavel' },
    { cutin: 'objection_inocente', speaker: 'JUEZ', text: 'NOT GUILTY!', sfx: 'whoosh', bgm: 'victory', pose: 'judge_gavel' },
    { speaker: 'CHAPULIN', text: 'They take advantage of my nobility! But justice always triumphs! FOLLOW ME, GOOD GUYS!', pose: 'chapulin_point' },
    { speaker: 'DEFENSA', text: 'Case Closed! And now, Señor Barriga... I can pay your 14 months of rent!', pose: 'donramon_idle' }
  ]
};
