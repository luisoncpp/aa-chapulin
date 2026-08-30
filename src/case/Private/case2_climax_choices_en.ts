// @Architecture(descriptionShort="English Case 2 climax choice prompts", type="data", icon="layers")
/**
 * Case 2 climax multiple-choice verdict questions (English).
 */

import type { ChoicePrompt } from '../../types/index.js';

export const CASE2_CLIMAX_CHOICES_EN: ChoicePrompt[] = [
  {
    id: 'clotilde_key',
    question: "What matters most in Doña Clotilde's testimony?",
    options: [
      { id: 'clothing', label: 'How he was dressed' },
      { id: 'manners', label: 'His manners' },
      { id: 'purchase_time', label: 'The time of purchase' }
    ],
    correctId: 'purchase_time',
    failDialogue: [
      { speaker: 'DEFENSA', text: 'Well... the man had impeccable style, Your Honor!', pose: 'donramon_sweat' },
      { speaker: 'SUPER SAM', text: 'Time is money! This is a court of law, not a fashion show!', pose: 'supersam_idle' },
      { speaker: 'JUEZ', text: 'The defense will receive a penalty if it keeps wasting time!', pose: 'judge_shock' }
    ],
    successDialogue: [
      { speaker: 'DEFENSA', text: 'The key is not how he was dressed, but WHEN he went! Doña Clotilde said the man came to buy the essence on the afternoon of August 28.', pose: 'donramon_point' },
      { speaker: 'JUEZ', text: 'The afternoon of August 28? And why is that specific time so important?', pose: 'judge_neutral' }
    ]
  },
  {
    id: 'key_holder',
    question: 'Who carried the master key on the afternoon of August 28?',
    options: [
      { id: 'bellhop', label: 'The bellhop' },
      { id: 'security_chief', label: 'The chief of security' },
      { id: 'general_manager', label: 'The general manager' }
    ],
    correctId: 'security_chief',
    failDialogue: [
      { speaker: 'DEFENSA', text: "It's crystal clear! Whoever carried the key was... that person!", pose: 'donramon_sweat' },
      { speaker: 'PETERETE', text: "I'm afraid hotel rules say otherwise. Try reading the employee manual before accusing anyone.", pose: 'peterete_smug' },
      { speaker: 'JUEZ', text: 'Counselor, if you keep making unfounded accusations I will have to penalize you.', pose: 'judge_gavel', sfx: 'gavel' }
    ],
    successDialogue: [
      { speaker: 'DEFENSA', text: 'And by hotel rules, the only person carrying the original master key that afternoon was the CHIEF OF SECURITY!', pose: 'donramon_slam', sfx: 'desk_slam' },
      { speaker: 'DEFENSA', text: 'You bought the valerian, copied your own key, put Chómpiras to sleep, opened the safe, and stuffed the gold in the tin!', pose: 'donramon_point' },
      { speaker: 'PETERETE', text: 'NOOOOOOOOOOOO!!! MY PERFECT FIVE-MILLION-DOLLAR PLAN RUINED BY A SHOESHINE BOY AND A NECAXA FAN!!!', pose: 'peterete_breakdown', sfx: 'damage' },
      { speaker: 'NARRADOR', text: '(Peterete slaps himself with his fedora until he collapses on the witness stand).' },
      { speaker: 'SUPER SAM', text: 'OH NOOO! My fees! My bonus! Time is money and I lost my dollars!', pose: 'supersam_breakdown' },
      { speaker: 'JUEZ', text: 'Silence and order! With the smoking gun revealed, the method proven, and the true culprit confessed, this court issues its final verdict!', pose: 'judge_gavel', sfx: 'gavel' },
      { cutin: 'objection_culpable', speaker: 'JUEZ', text: 'I declare the defendant, Aquiles Esquivel Madrazo... NOT GUILTY!', sfx: 'whoosh', bgm: 'victory', pose: 'judge_gavel' }
    ]
  }
];
