// @Architecture(descriptionShort="English Case 2 climax, breakdown, verdict, and epilogue", type="data", icon="layers")
/**
 * Case 2 Final Climax, Verdict, and Epilogue (English).
 */

import type { ClimaxDefinition } from '../../types/index.js';

export const CASE2_CLIMAX_EN: ClimaxDefinition = {
  dialogue: [
    { speaker: 'SUPER SAM', text: 'Stop right there! If Mr. Peterete is the thief, I demand the defense present the Golden Chanfle this instant!', pose: 'supersam_point', sfx: 'desk_slam' },
    { speaker: 'JUEZ', text: 'It is the golden rule of this court: to convict the mastermind we must locate the corpus delicti. Does the defense have that decisive proof?', pose: 'judge_thinking' },
    { speaker: 'DEFENSA', text: '(This is the decisive moment. The gold is not in Peterete\'s pockets... but it sat in the mail cart the whole time...)', pose: 'donramon_idle' },
    { speaker: 'CHAPULIN', text: 'Monchito! My vinyl antennae say the culprit disguised the treasure in plain sight!', pose: 'chapulin_point' }
  ],
  presentTarget: ['lata_grasa', 'antenitas_vinil'],
  verdict: [
    { cutin: 'objection_protesto', speaker: 'DEFENSA', text: 'OBJECTION!', sfx: 'whoosh', bgm: 'pursuit', pose: 'donramon_point' },
    { speaker: 'DEFENSA', text: "Here is the Golden Chanfle, hidden inside Chómpiras's Shoe Polish Tin!", pose: 'donramon_point' },
    { speaker: 'SUPER SAM', text: 'What?! A simple tin of shoe polish?!', pose: 'supersam_slam', sfx: 'desk_slam' },
    { speaker: 'DEFENSA', text: 'It weighs over 5 KILOS and gold dust spills from the seam! Peterete emptied the polish, stuffed the statuette in, and resealed the lid.', pose: 'donramon_slam', sfx: 'desk_slam' },
    { speaker: 'CHAPULIN', text: 'And my Vinyl Antennae confirm it — they vibrate straight at this tin! Open it and see the gold shine!', pose: 'chapulin_slam', sfx: 'chipote' },
    { speaker: 'NARRADOR', text: '*CLAAANG-GLOWWW!* (The lid gives way and the Golden Chanfle lights up the courtroom)', sfx: 'realization' },
    { speaker: 'PETERETE', text: 'NOOOOOOOOOOOO!!! MY PERFECT FIVE-MILLION-DOLLAR PLAN RUINED BY A SHOESHINE BOY AND A NECAXA FAN!!!', pose: 'peterete_breakdown', sfx: 'damage' },
    { speaker: 'NARRADOR', text: '(Peterete slaps himself with his fedora until he collapses on the witness stand).' },
    { speaker: 'SUPER SAM', text: 'OH NOOO! My fees! My bonus! Time is money and I lost my dollars!', pose: 'supersam_breakdown' },
    { speaker: 'JUEZ', text: 'Silence and order! With the smoking gun revealed, this court issues its final verdict!', pose: 'judge_gavel', sfx: 'gavel' },
    { cutin: 'objection_culpable', speaker: 'JUEZ', text: 'I declare the defendant, Aquiles Esquivel Madrazo... NOT GUILTY!', sfx: 'whoosh', bgm: 'victory', pose: 'judge_gavel' },
    { speaker: 'CHOMPIRAS', text: 'Oh, Don Ramón, Chapulín! I don\'t know how to thank you! I already saw myself eating rock soup for 20 years!', pose: 'chompiras_relieved' },
    { speaker: 'CHAPULIN', text: 'Think nothing of it, Chómpiras! Nobility and cunning always beat evil! Follow the good guys!', pose: 'chapulin_point' },
    { speaker: 'FLORINDA', text: 'I must admit, Don Ramón... for once in your life you did not behave like the usual rabble.', pose: 'florinda_idle' },
    { speaker: 'JIRAFALES', text: 'A lecture in Aristotelian deduction, Don Ramón. Admirable.', pose: 'jirafales_idle' },
    { speaker: 'DEFENSA', text: 'Heh heh! No cheese, only potatoes! And now that I have proven my legal talent...', pose: 'donramon_idle' },
    { speaker: 'NARRADOR', text: '(Suddenly, heavy footsteps in the hall... it is Señor Barriga with his briefcase!)', sfx: 'realization' },
    { speaker: 'DEFENSA', text: 'CHANFLE!!! SEÑOR BARRIGA IS HERE FOR THE 14 MONTHS OF RENT!!!', pose: 'donramon_panic' },
    { speaker: 'CHAPULIN', text: 'Here, Monchito! Take a Chiquitolina Pill and hide in my pocket!', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: 'Excuse me, said Monchitooooo!', pose: 'donramon_point' }
  ]
};
