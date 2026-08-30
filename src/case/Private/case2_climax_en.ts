// @Architecture(descriptionShort="English Case 2 climax, breakdown, verdict, and epilogue", type="data", icon="layers")
/**
 * Case 2 Final Climax, Verdict, and Waiting-Room Epilogue (English).
 */

import type { DialogueLine } from '../../types/index.js';
import { assembleCase2Climax } from './case2_climax_shared.js';

const GOLD_REVEAL: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: 'OBJECTION!', sfx: 'whoosh', bgm: 'pursuit', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: "Here is the Golden Chanfle, hidden inside Chómpiras's Shoe Polish Tin!", pose: 'donramon_point' },
  { speaker: 'SUPER SAM', text: 'What?! A simple tin of shoe polish?!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: 'It weighs over 5 KILOS and gold dust spills from the seam! Peterete emptied the polish, stuffed the statuette in, and resealed the lid.', pose: 'donramon_slam', sfx: 'desk_slam' },
  { speaker: 'CHAPULIN', text: 'And my Vinyl Antennae confirm it — they vibrate straight at this tin! Open it and see the gold shine!', pose: 'chapulin_slam', sfx: 'chipote' },
  { speaker: 'NARRADOR', text: '*CLAAANG-GLOWWW!* (The lid gives way and the Golden Chanfle lights up the courtroom)', sfx: 'realization' },
  { speaker: 'PETERETE', text: "G-grrrk! Th-that's Chómpiras's tin! This only proves HE hid the gold in his own can! I have nothing to do with it!", pose: 'peterete_sweat' },
  { speaker: 'SUPER SAM', text: 'Exactly! The defendant had the tin and the crowbar! He is still the only possible culprit!', pose: 'supersam_point' },
  { speaker: 'DEFENSA', text: "(Darn it! They're right — gold in Chómpiras's tin does not pin Peterete... unless I prove Chómpiras could not have done it.)", pose: 'donramon_idle' }
];

const CHOMPIRAS_ASLEEP: DialogueLine[] = [
  { cutin: 'objection_toma_eso', speaker: 'DEFENSA', text: "TAKE THAT! Chómpiras couldn't have stashed the gold because he was sound asleep!", sfx: 'whoosh', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'Someone pumped this Valerian Essence through the vent. A sedative so strong it knocked him out for 30 minutes!', pose: 'donramon_slam', sfx: 'desk_slam' },
  { speaker: 'PETERETE', text: 'B-but the safe opened with a key! I returned the master key to custody at 8:30 PM! Nobody else had a way to open it!', pose: 'peterete_panic' }
];

const VERDICT_LINES: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: 'OBJECTION! You did not need the original key, because you made a DUPLICATE!', sfx: 'whoosh', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: "We found this Wax Mold in Doña Clotilde's trash! It bears the exact imprint of the master key!", pose: 'donramon_slam', sfx: 'desk_slam' },
  { speaker: 'PETERETE', text: 'Bah! Doña Clotilde said it was a mysterious man with a scarf and hat. It could have been anyone!', pose: 'peterete_smug' },
  { speaker: 'DEFENSA', text: 'Don\'t play dumb! Doña Clotilde said the man came to buy the essence on the afternoon of August 28.', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'And by hotel rules, the only person carrying the original master key that afternoon was the CHIEF OF SECURITY!', pose: 'donramon_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: 'You bought the valerian, copied your own key, put Chómpiras to sleep, opened the safe, and stuffed the gold in the tin!', pose: 'donramon_point' },
  { speaker: 'PETERETE', text: 'NOOOOOOOOOOOO!!! MY PERFECT FIVE-MILLION-DOLLAR PLAN RUINED BY A SHOESHINE BOY AND A NECAXA FAN!!!', pose: 'peterete_breakdown', sfx: 'damage' },
  { speaker: 'NARRADOR', text: '(Peterete slaps himself with his fedora until he collapses on the witness stand).' },
  { speaker: 'SUPER SAM', text: 'OH NOOO! My fees! My bonus! Time is money and I lost my dollars!', pose: 'supersam_breakdown' },
  { speaker: 'JUEZ', text: 'Silence and order! With the smoking gun revealed, the method proven, and the true culprit confessed, this court issues its final verdict!', pose: 'judge_gavel', sfx: 'gavel' },
  { cutin: 'objection_culpable', speaker: 'JUEZ', text: 'I declare the defendant, Aquiles Esquivel Madrazo... NOT GUILTY!', sfx: 'whoosh', bgm: 'victory', pose: 'judge_gavel' }
];

export const CASE2_CLIMAX_EN = assembleCase2Climax({
  dialogue: [
    { speaker: 'SUPER SAM', text: 'Stop right there! If Mr. Peterete is the thief, I demand the defense present the Golden Chanfle this instant!', pose: 'supersam_point', sfx: 'desk_slam' },
    { speaker: 'JUEZ', text: 'It is the golden rule of this court: to convict the mastermind we must locate the corpus delicti. Does the defense have that decisive proof?', pose: 'judge_thinking' },
    { speaker: 'DEFENSA', text: '(This is the decisive moment. The gold is not in Peterete\'s pockets... but it sat in the mail cart the whole time...)', pose: 'donramon_idle' },
    { speaker: 'CHAPULIN', text: 'Monchito! My vinyl antennae say the culprit disguised the treasure in plain sight!', pose: 'chapulin_point' }
  ],
  goldReveal: GOLD_REVEAL,
  chompirasAsleep: CHOMPIRAS_ASLEEP,
  verdict: VERDICT_LINES,
  epilogue: [
    { speaker: 'NARRADOR', text: '(Later, in the courthouse waiting room...)' },
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
});
