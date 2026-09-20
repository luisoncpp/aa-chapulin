// @Architecture(descriptionShort="English Case 1 day 2 clinic revisit with a woken Alma Negra", type="data", icon="layers")
/**
 * Case 1, Day 2 — Clinic, second visit (`clinica_d2`). Spec §11.3.
 * "The forward hold" / "the after hold" must read identically here, in the
 * D2-T1 contradiction and in line three of the card (spec §21).
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE1_CLINICA_D2_EN: InvestigationScene = {
  title: 'Municipal Clinic - Room 6 (day 2)',
  name: 'Clinic (day 2)',
  bg: 'assets/bg_clinica.webp',
  bgm: 'investigation_core',
  speaker: 'NARRADOR',
  idlePose: 'almanegra_vendado',
  intro: [
    { speaker: 'NARRADOR', text: 'August 30th, 12:00 PM. Municipal clinic, room 6. The bed is empty. The enormous man is sitting in a wheelchair, bandaged to the eyebrows.', bg: 'assets/bg_clinica.webp', furniture: 'none', bgm: 'investigation_core' },
    { speaker: 'ALMA NEGRA', text: 'By a thousand devils! Who goes there?', pose: 'almanegra_shock' },
    { speaker: 'DEFENSA', text: 'Easy, easy. Don Ramón, defense counsel.', pose: 'donramon_sweat' },
    { speaker: 'ALMA NEGRA', text: 'Counsel for whom, deckhand?', pose: 'almanegra_vendado' },
    { speaker: 'CHAPULIN', text: 'For me!', pose: 'chapulin_idle' },
    { speaker: 'ALMA NEGRA', text: '...And what are you?', pose: 'almanegra_shock' },
    { speaker: 'CHAPULIN', text: 'El Chapulín Colorado!', pose: 'chapulin_point' },
    { speaker: 'ALMA NEGRA', text: 'Ah. Forgive me, but I pictured you taller.', pose: 'almanegra_vendado' },
    { speaker: 'CHAPULIN', text: '¡Se aprovechan de mi nobleza!', pose: 'chapulin_panic' },
    { speaker: 'DEFENSA', text: "(He woke last night. And he woke up talking. This changes my client's trial... for better or worse, I do not know yet.)", pose: 'donramon_idle', addProfile: 'perfil_almanegra' }
  ],
  hotspots: [
    {
      id: 'hotspot_silla_ruedas',
      label: 'Wheelchair',
      x: 34, y: 46, w: 30, h: 34,
      dialogue: [
        { speaker: 'NARRADOR', text: 'A hospital wheelchair, with chrome handles and a folded blanket on the back.' },
        { speaker: 'DEFENSA', text: '(If the judge admits him, he will testify from this. And nobody talks him down from his version.)', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'hotspot_buro',
      label: 'Bedside table',
      x: 70, y: 52, w: 18, h: 22,
      dialogue: [
        { speaker: 'NARRADOR', text: 'On the bedside table: a glass of water, a spare eyepatch and a notebook with coffee-stained covers.' },
        { speaker: 'DEFENSA', text: '(A notebook. I will not touch it yet: first let him tell me what it is for.)', pose: 'donramon_idle' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'recuerda_noche',
      label: 'What do you remember about that night?',
      dialogue: [
        { speaker: 'ALMA NEGRA', text: 'Little, deckhand. I was on my round. I heard glass burst in gallery two and off I went like a cannonball.', pose: 'almanegra_vendado' },
        { speaker: 'DEFENSA', text: 'And what did you see?', pose: 'donramon_idle' },
        { speaker: 'ALMA NEGRA', text: 'Nothing. It was dark. I got to the broken case, could not make anyone out, and turned back towards the door to call for help. After that, the canvas.', pose: 'almanegra_vendado' },
        { speaker: 'DEFENSA', text: '"The canvas"?', pose: 'donramon_sweat' },
        { speaker: 'ALMA NEGRA', text: 'The floor, counselor. I was a sailor, not a poet.', pose: 'almanegra_vendado' },
        { speaker: 'CHAPULIN', text: '(Don Ramón, if he saw nothing, then he did not see me either.)', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: '(I was thinking the same, young man. A witness who saw nothing is the best thing that has happened to this defense.)', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'oyo_algo',
      label: 'Did you hear anything?',
      dialogue: [
        { speaker: 'ALMA NEGRA', text: 'Aye. And that I will not forget in a hundred years.', pose: 'almanegra_shock' },
        { speaker: 'ALMA NEGRA', text: 'When they hit me, I heard money.', pose: 'almanegra_vendado' },
        { speaker: 'DEFENSA', text: 'Money?', pose: 'donramon_shock' },
        { speaker: 'ALMA NEGRA', text: 'Coins, deckhand. Coins hitting the floor, rolling, bouncing. A great pile of coins.', pose: 'almanegra_vendado' },
        { speaker: 'ALMA NEGRA', text: 'And I thought, already down on the floor: "strange, there is no till in here".', pose: 'almanegra_vendado' },
        { speaker: 'CHAPULIN', text: '¡Chanfle!', pose: 'chapulin_panic' },
        { speaker: 'DEFENSA', text: '(The weapon burst in his hand. That is why there were coins on the floor... and why he had to gather them. That cost him time.)', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'ronda_almanegra',
      label: 'Is your round always the same?',
      dialogue: [
        { speaker: 'ALMA NEGRA', text: 'Always. Every night the same. A ship without routine is a sunken ship.', pose: 'almanegra_vendado' },
        { speaker: 'DEFENSA', text: 'And how do you remember it?', pose: 'donramon_idle' },
        { speaker: 'ALMA NEGRA', text: 'It is written down. I have it here, the curator brought it to me.', pose: 'almanegra_vendado' },
        { speaker: 'NARRADOR', text: 'Alma Negra pulls a notebook with coffee-stained covers out of the bedside table.' },
        { speaker: 'DEFENSA', text: '"Twenty forty-five: the forward hold. Twenty-one hundred: the after hold."', pose: 'donramon_idle' },
        { speaker: 'DEFENSA', text: '...\"The forward hold\"?', pose: 'donramon_sweat' },
        { speaker: 'ALMA NEGRA', text: 'Gallery one, deckhand. And gallery two is the after hold. That is how I understand myself.', pose: 'almanegra_vendado' },
        { speaker: 'CHAPULIN', text: 'Ah, so you gave the museum ship names!', pose: 'chapulin_idle' },
        { speaker: 'ALMA NEGRA', text: 'A man gives ship names to everything. My room is "the cabin" and my wife is "the admiral".', pose: 'almanegra_vendado' },
        { speaker: 'DEFENSA', text: 'And where do you keep this notebook while you work?', pose: 'donramon_idle' },
        { speaker: 'ALMA NEGRA', text: 'Hanging from a nail in the booth. So I do not lose it.', pose: 'almanegra_vendado' },
        { speaker: 'DEFENSA', text: '(Hanging from a nail. In the booth by the entrance. Where everyone who buys a ticket walks past.)', pose: 'donramon_shock' }
      ]
    },
    {
      id: 'puede_declarar',
      label: 'Can you testify today?',
      unlockedByTalk: 'ronda_almanegra',
      dialogue: [
        { speaker: 'DEFENSA', text: 'Don Alma Negra, I will ask you straight: can you take an afternoon of trial?', pose: 'donramon_idle' },
        { speaker: 'ALMA NEGRA', text: 'The doctor already signed me out to testify today. He says do not take off the bandage and do not get excited.', pose: 'almanegra_vendado' },
        { speaker: 'ALMA NEGRA', text: 'Deckhand, I once lasted three days lashed to a mainmast with the pox. I can take a judge.', pose: 'almanegra_vendado' },
        { speaker: 'CHAPULIN', text: 'That is the spirit!', pose: 'chapulin_point' },
        { speaker: 'ALMA NEGRA', text: 'And another thing, counselor: I am not coming to sink anybody. I am coming to say what I heard.', pose: 'almanegra_vendado' },
        { speaker: 'ALMA NEGRA', text: 'If that helps the red lad, good. And if it does not, so be it.', pose: 'almanegra_vendado' },
        { speaker: 'DEFENSA', text: '(A witness who wants to win nothing. What a relief.)', pose: 'donramon_idle' },
        { speaker: 'ALMA NEGRA', text: 'Take my notebook too, counselor. If the judge wants my word, let him have my bearings and my hours.', pose: 'almanegra_vendado' },
        { speaker: 'NARRADOR', text: 'Alma Negra hands over the round notebook.', addEvidence: 'bitacora_ronda' },
        { speaker: 'NARRADOR', text: 'The TRIAL button lights up.', sfx: 'realization' }
      ]
    }
  ]
};
