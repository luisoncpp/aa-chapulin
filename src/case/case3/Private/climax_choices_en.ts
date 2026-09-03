// @Architecture(descriptionShort="English Case 3 climax choice prompts", type="data", icon="layers")
/**
 * Case 3 climax multiple-choice prompts (voice trap + proverb trap) English.
 */

import type { ChoicePrompt } from '../../../types/index.js';

export const CASE3_CLIMAX_CHOICES_EN: ChoicePrompt[] = [
  {
    id: 'prove_voice',
    question: 'What does the defense still need to close the case?',
    options: [
      { id: 'signed_confession', label: 'His signed confession' },
      { id: 'prove_voice', label: 'Proof that the cartridge voice is his' },
      { id: 'trophy_prints', label: 'Fingerprints on the trophy' }
    ],
    correctId: 'prove_voice',
    failDialogue: [
      { speaker: 'DEFENSA', text: 'Well... he should confess, Your Honor! Confess already!', pose: 'donramon_sweat' },
      { speaker: 'ANICETO', text: 'Gladly I confess... that I am outraged.', pose: 'aniceto_sweat' },
      { speaker: 'JUEZ', text: 'Counselor, this court does not run on wishes. Penalty!', pose: 'judge_gavel', sfx: 'damage' }
    ],
    successDialogue: [
      { speaker: 'DEFENSA', text: 'Only one thing remains, Your Honor: that this court hear Mr. Rebollar speak with Señor Barriga\'s voice.', pose: 'donramon_point' },
      { speaker: 'ANICETO', text: 'Never! I will not open my mouth!', pose: 'aniceto_panic' },
      { speaker: 'JUEZ', text: 'And he is not obliged to. How do you plan to achieve that, Counselor?', pose: 'judge_thinking' }
    ]
  },
  {
    id: 'proverb_trap',
    question: 'How do we make "La Voz de Oro" speak with Señor Barriga\'s voice before the court?',
    options: [
      { id: 'ask_politely', label: 'Ask him politely' },
      { id: 'threaten_jail', label: 'Threaten him with prison' },
      { id: 'proverb_trap', label: 'Play the sketch... and misquote his famous line' }
    ],
    correctId: 'proverb_trap',
    failDialogue: [
      { speaker: 'DEFENSA', text: 'Wouldn\'t you do a little voice for us, pretty please?', pose: 'donramon_sweat' },
      { speaker: 'ANICETO', text: 'Counselor, I have twenty-five years of career and you have a dented badge.', pose: 'aniceto_panic' },
      { speaker: 'JUEZ', text: 'Do not clown in my courtroom!', pose: 'judge_gavel', sfx: 'damage' }
    ],
    successDialogue: [
      { speaker: 'DEFENSA', text: 'Chapulín. The sketch tape. And do me a favor... say it the way you say the proverbs.', pose: 'donramon_idle' },
      { speaker: 'CHAPULIN', text: 'With great pleasure! ¡Todos mis movimientos están fríamente calculados!', pose: 'chapulin_point' },
      { speaker: 'NARRADOR', text: '(The tape plays. "El Casero Cascarrabias" starts his famous line... and Chapulín lowers the volume and finishes it himself.)' },
      { speaker: 'CHAPULIN', text: '"¡TENÍA QUE SER... EL CHANGO DEL OCHO!"', sfx: 'chipote', pose: 'chapulin_slam' },
      { speaker: 'NARRADOR', text: '(Silence.)' },
      { speaker: 'NARRADOR', text: '(Don Aniceto Rebollar, twenty-five years on air, closes his eyes. His lip trembles. He can\'t. He cannot let it pass.)' },
      { speaker: 'ANICETO', text: '¡¡¡ES "EL CHAVO DEL OCHO", ANIMAL!!! ¡¡¡"TE-NÍ-A QUE SER EL CHAVO DEL OCHO"!!!', sfx: 'realization', bgm: 'objection', pose: 'aniceto_breakdown' },
      { speaker: 'NARRADOR', text: '(He shouts it in Señor Barriga\'s voice. Exact. Round. Identical to the cartridge. Two thousand heard it on September 15; one hundred twenty hear it now.)' },
      { speaker: 'NARRADOR', text: '(Don Aniceto freezes, mouth open, hearing himself bounce off the courtroom walls.)' },
      { cutin: 'objection_protesto', speaker: 'DEFENSA', text: 'Thank you, Don Aniceto. You just confessed in your best voice.', sfx: 'whoosh', pose: 'donramon_point' },
      { speaker: 'ANICETO', text: 'Twenty-five years...', bgm: 'pursuit', pose: 'aniceto_breakdown' },
      { speaker: 'ANICETO', text: 'Twenty-five years holding that station up with my fingernails! Paying the power bill with my salary! Tying cables with rope!', pose: 'aniceto_breakdown' },
      { speaker: 'ANICETO', text: 'And that trophy was the ONLY thing I had left of myself! I pawned it to pay for the transmitter and redeemed it with what there was, because the fund was going to pay it back — all of it!', pose: 'aniceto_breakdown' },
      { speaker: 'BARRIGA', text: 'Aniceto... you could have asked me for the money. I\'d give it. I would have given it.', pose: 'barriga_vendado' },
      { speaker: 'ANICETO', text: 'NO! You were going to say my name! MY NAME! On air! On MY station! After this neighborhood loved me for twenty-five years!', pose: 'aniceto_breakdown' },
      { speaker: 'ANICETO', text: 'And I knew the doctor would run upstairs! I knew! He\'s a doctor! Doctors always run!', sfx: 'damage', pose: 'aniceto_breakdown' },
      { speaker: 'NARRADOR', text: '(He starts speaking in Barriga\'s voice. Then Florinda\'s. Then the Professor\'s. Then the Judge\'s. Twenty-five years of voices spilling from one throat.)' },
      { speaker: 'ANICETO', text: '"...Aquí XEVC... La Voz de la Vecindad... transmitiendo para usted... desde... desde..."', pose: 'aniceto_breakdown' },
      { speaker: 'NARRADOR', text: '(He clutches the Golden Microphone and goes quiet. For the first time in twenty-five years, truly quiet.)' },
      { speaker: 'SUPER SAM', text: 'OH NOOO! Three days! THREE DAYS! My fees! My bonus! My lunch hour!', sfx: 'damage', pose: 'supersam_breakdown' },
      { speaker: 'JUEZ', text: 'Order! Method, motive, and author established... this court issues its verdict.', pose: 'judge_gavel', sfx: 'gavel' },
      { cutin: 'objection_inocente', speaker: 'JUEZ', text: 'I declare the defendant, Doctor Chapatín... NOT GUILTY!', sfx: 'whoosh', bgm: 'victory', pose: 'judge_gavel' },
      { speaker: 'CHAPATIN', text: '...Hmpf. About time.', pose: 'chapatin_conmovido' },
      { speaker: 'CHAPULIN', text: '¡Síganme los buenos!', pose: 'chapulin_point' }
    ]
  }
];
