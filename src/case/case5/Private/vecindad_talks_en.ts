// @Architecture(descriptionShort="English Case 5 day 2 vecindad Barriga talk options", type="data", icon="layers")
/**
 * Case 5, Day 2 — talk options with Mr. Barriga. Spec §12.1.
 */

import type { TalkOption } from '../../../types/index.js';

export const CASE5_VECINDAD_TALKS_EN: TalkOption[] = [
  {
    id: 'vio_alguien',
    label: 'Did you see anyone?',
    dialogue: [
      { speaker: 'BARRIGA', text: 'Nobody, young man. I was having breakfast. I stepped out for the paper and there was the envelope.', pose: 'barriga_idle' },
      { speaker: 'DEFENSA', text: 'What time?', pose: 'chapulin_idle' },
      { speaker: 'BARRIGA', text: 'Nine on the dot. I have gone out for the paper at nine since 1954.', pose: 'barriga_idle' },
      { speaker: 'DEFENSA', text: '(Another man on a schedule. In this city everyone keeps a schedule except me.)', pose: 'chapulin_idle' }
    ]
  },
  {
    id: 'que_hizo_dinero',
    label: 'What did you do with the money?',
    unlockedByTalk: 'vio_alguien',
    dialogue: [
      { speaker: 'BARRIGA', text: 'I put those same bills in my office safe. Seventeen months, young man: four thousand two hundred fifty pesos. That does not go under the mattress.', pose: 'barriga_idle' },
      { speaker: 'DEFENSA', text: 'And the receipt?', pose: 'chapulin_idle' },
      { speaker: 'BARRIGA', text: 'I wrote it that same morning and gave it to Mr. Ramon on Monday in the courtyard. I said "thank you" and he made a very strange face.', pose: 'barriga_shock' },
      { speaker: 'DEFENSA', text: 'What did you write in the description?', pose: 'chapulin_point' },
      { speaker: 'BARRIGA', text: 'What happened. "Received from unidentified third party, on account of the tenant."', pose: 'barriga_idle' },
      { speaker: 'DEFENSA', text: 'Why did you not put Don Ramon\'s name?', pose: 'chapulin_idle' },
      { speaker: 'BARRIGA', text: 'Because he did not give it to me, young man. I may be a landlord, but I am not a liar.', pose: 'barriga_enojado' },
      { speaker: 'DEFENSA', text: '(This man just wrote, without meaning to, the defense\'s best proof. And he is going to take the stand and say it was Don Ramon.)', pose: 'chapulin_idle' }
    ]
  },
  {
    id: 'porque_donramon',
    label: 'Why do you think it was Don Ramon?',
    unlockedByTalk: 'que_hizo_dinero',
    dialogue: [
      { speaker: 'BARRIGA', text: 'Who else was going to pay Mr. Ramon\'s rent?', pose: 'barriga_idle' },
      { speaker: 'DEFENSA', text: 'I do not know. That is what I came to find out.', pose: 'chapulin_idle' },
      { speaker: 'BARRIGA', text: 'Young man, I do not want Mr. Ramon sent to prison. He owes me seventeen months.', pose: 'barriga_shock' },
      { speaker: 'BARRIGA', text: '...He OWED me. Oh, I do not even know anymore.', pose: 'barriga_enojado' },
      { speaker: 'DEFENSA', text: 'Mr. Barriga, will you lend me that envelope and the note?', pose: 'chapulin_point' },
      { speaker: 'BARRIGA', text: 'Take whatever you like except the receipt; that is my tax proof.', pose: 'barriga_idle' },
      { speaker: 'DEFENSA', text: 'Then give me a copy.', pose: 'chapulin_idle' },
      { speaker: 'BARRIGA', text: 'Two pesos a copy.', pose: 'barriga_enojado' },
      { speaker: 'DEFENSA', text: 'They take advantage of my noble nature!', pose: 'chapulin_panic' },
      { speaker: 'DEFENSA', text: '(A typewritten note, unsigned, written by someone who knows how to draft an official letter.)', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '(And who drafts official letters all day? Courts.)', pose: 'chapulin_point', unlockLocation: 'correspondencia' }
    ]
  }
];
