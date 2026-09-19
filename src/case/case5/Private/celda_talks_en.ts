// @Architecture(descriptionShort="English Case 5 day 1 celda talk options and December 4 flashback", type="data", icon="layers")
/**
 * Case 5, Day 1 — cell dialogue (`celda_c5`), English. Spec §10.1.
 */

import type { TalkOption } from '../../../types/index.js';

const DETENTION_BG = 'assets/bg_detention.webp';
const PASILLO_BG = 'assets/bg_archivo_pasillo7.webp';

const relatoFlashback: TalkOption['dialogue'] = [
  { speaker: 'NARRADOR', text: 'December 4, 4:44 PM. Hallway 7, Judicial Archive.', bg: PASILLO_BG, furniture: 'none', bgm: 'suspense' },
  { speaker: 'CASIMIRO', text: 'Counselor. Four forty-four. Punctual for a sidewalk lawyer.', bg: PASILLO_BG, furniture: 'none', pose: 'casimiro_amable' },
  { speaker: 'DON RAMON', text: 'Mr. Lengua.', bg: PASILLO_BG, furniture: 'none', pose: 'donramon_idle' },
  { speaker: 'CASIMIRO', text: 'I did not call you here to apologize. People with time do that.', bg: PASILLO_BG, furniture: 'none', pose: 'casimiro_catalogo' },
  { speaker: 'CASIMIRO', text: 'I called you because you are the only one who believed I could read.', bg: PASILLO_BG, furniture: 'none', pose: 'casimiro_catalogo' },
  { speaker: 'DON RAMON', text: 'You told the court you had studied nothing.', bg: PASILLO_BG, furniture: 'none', pose: 'donramon_idle' },
  { speaker: 'CASIMIRO', text: 'And that is true. I do not study: I recognize. Different trade, worse pay.', bg: PASILLO_BG, furniture: 'none', pose: 'casimiro_amable' },
  { speaker: 'NARRADOR', text: 'The convict opens his file at page 214 and sets a finger on a card glued to the paper.', bg: PASILLO_BG, furniture: 'none' },
  { speaker: 'CASIMIRO', text: 'They seized this one from me in July. And in August, in a museum courtyard, another like it turned up. It made the papers.', bg: PASILLO_BG, furniture: 'none', pose: 'casimiro_catalogo' },
  { speaker: 'CASIMIRO', text: 'The same typewriter wrote both, counselor. I should know: I spent nine years typing on it.', bg: PASILLO_BG, furniture: 'none', pose: 'casimiro_catalogo' },
  { speaker: 'DON RAMON', text: 'And where is that typewriter?', bg: PASILLO_BG, furniture: 'none', pose: 'donramon_shock' },
  { speaker: 'CASIMIRO', text: 'Down below. Twelve meters from where we are sitting. Four forty-nine.', bg: PASILLO_BG, furniture: 'none', pose: 'casimiro_amable' },
  { speaker: 'CASIMIRO', text: 'I will tell you one thing, and then I will say no more until the court clerk arrives.', bg: PASILLO_BG, furniture: 'none', pose: 'casimiro_catalogo' },
  { speaker: 'CASIMIRO', text: 'Someone sold you the door to your own house, counselor. It has been on file since sixty-nine.', bg: PASILLO_BG, furniture: 'none', pose: 'casimiro_catalogo' },
  { speaker: 'DON RAMON', text: '...What did you say?', bg: PASILLO_BG, furniture: 'none', pose: 'donramon_shock' },
  { speaker: 'CUSTODIO', text: 'Visiting time is over! Everybody down!', bg: PASILLO_BG, furniture: 'none' },
  { speaker: 'CASIMIRO', text: 'Four fifty-six. Go with God. I will wait here.', bg: PASILLO_BG, furniture: 'none', pose: 'casimiro_amable' }
];

export const CASE5_CELDA_TALKS_EN: TalkOption[] = [
  {
    id: 'que_paso_4_dic',
    label: 'What happened on December fourth?',
    dialogue: [
      { speaker: 'DON RAMON', text: 'A summons reached me Monday. Mr. Lengua wanted me at a hearing on his appeal.', pose: 'donramon_idle' },
      { speaker: 'DEFENSA', text: 'The man you beat asked you to come?', pose: 'chapulin_idle' },
      { speaker: 'DON RAMON', text: 'That is exactly what I thought. I went out of curiosity and courtesy, which is how most foolish things get done.', pose: 'donramon_idle' },
      { speaker: 'DON RAMON', text: 'I signed the visitor log at four forty. I went up to hallway seven. He was there at a consultation table, two guards at the gate.', pose: 'donramon_idle' },
      { speaker: 'DEFENSA', text: 'And what did you talk about?', pose: 'chapulin_point' },
      { speaker: 'DON RAMON', text: 'Twelve minutes, kid. I will tell you every one, because that is all I have.', pose: 'donramon_sweat' },
      ...relatoFlashback,
      { speaker: 'DEFENSA', text: '...And you left?', pose: 'chapulin_panic', bg: DETENTION_BG, furniture: 'none', bgm: 'detention_center' },
      { speaker: 'DON RAMON', text: 'I signed out at four fifty-eight and went to the vecindad so the landlord would not see me arrive.', pose: 'donramon_sweat', bg: DETENTION_BG, furniture: 'none' },
      { speaker: 'DON RAMON', text: 'At nine thirty that night the police were at my door.', pose: 'donramon_idle', bg: DETENTION_BG, furniture: 'none' },
      { speaker: 'DEFENSA', text: 'And what he told you? About the door to your house?', pose: 'chapulin_idle', bg: DETENTION_BG, furniture: 'none' },
      { speaker: 'DON RAMON', text: 'I thought it was Mr. Lengua being Mr. Lengua. Talking pretty so you keep thinking.', pose: 'donramon_sweat', bg: DETENTION_BG, furniture: 'none' },
      { speaker: 'DON RAMON', text: 'I have been thinking for nearly forty hours.', pose: 'donramon_sweat', bg: DETENTION_BG, furniture: 'none' }
    ]
  },
  {
    id: 'parte_detencion',
    label: 'Show me the arrest report',
    dialogue: [
      { speaker: 'NARRADOR', text: 'The bailiff slides a copy of the December fourth arrest report through the slot.', sfx: 'click' },
      { speaker: 'DEFENSA', text: '(Arrest at nine forty PM. Inventory: one lawyer badge, three pesos, a notebook...)', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '(...and a rent receipt in his name. Seventeen months. Paid.)', pose: 'chapulin_panic' },
      { speaker: 'DEFENSA', text: 'Don Ramon! This says you paid seventeen months of rent!', pose: 'chapulin_point' },
      { speaker: 'DON RAMON', text: 'I paid nothing, kid.', pose: 'donramon_idle' },
      { speaker: 'DON RAMON', text: 'Monday afternoon Mr. Barriga stopped me in the courtyard, handed me a receipt, and said thank you.', pose: 'donramon_sweat' },
      { speaker: 'DON RAMON', text: 'He said thank you, Chapulin. In seventeen years he never had. I thought he was mocking me.', pose: 'donramon_sweat' },
      { speaker: 'DEFENSA', text: '(I will keep the report.)', pose: 'chapulin_idle', addEvidence: 'parte_detencion' },
      { speaker: 'NARRADOR', text: 'The bailiff slides a second sheet, stapled on its own: the Archive custody relay sheet.', sfx: 'click' },
      { speaker: 'DEFENSA', text: '(Four signatures and four times. Rangel and Nieto sign out of the gate at five sharp...)', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '(...and Cadena and Solis do not sign in until a quarter past five.)', pose: 'chapulin_panic' },
      { speaker: 'DEFENSA', text: '(Fifteen minutes. A paper with hours on it is always useful, and this one has a hole in it.)', pose: 'chapulin_idle', addEvidence: 'hoja_relevo' }
    ]
  },
  {
    id: 'que_tenia_muerto',
    label: 'What was the dead man holding?',
    dialogue: [
      { speaker: 'DON RAMON', text: 'That is what has me in here.', pose: 'donramon_idle' },
      { speaker: 'NARRADOR', text: 'Among the report pages is a forensic photograph: a closed hand over a scrap of cardstock.' },
      { speaker: 'DEFENSA', text: 'It is a corner piece. Torn. Typewritten letters.', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '"...city of Calle del Espanto 8, apt. 72."', pose: 'chapulin_point' },
      { speaker: 'DON RAMON', text: 'My house, kid. With my apartment number.', pose: 'donramon_sweat' },
      { speaker: 'DEFENSA', text: 'But this proves nothing! Anyone can write an address!', pose: 'chapulin_panic' },
      { speaker: 'DON RAMON', text: 'Anyone can. But look closely at the scrap.', pose: 'donramon_idle' },
      { speaker: 'DEFENSA', text: '(Torn clean. No creases. Paper ripped off someone in a struggle gets crumpled, and this one is pressed flat.)', pose: 'chapulin_idle' },
      { speaker: 'DON RAMON', text: 'Keep it safe and study it in the Record when you have a calm moment.', pose: 'donramon_idle' },
      { speaker: 'DEFENSA', text: '(I will keep it. This smells like a setup.)', pose: 'chapulin_idle', addEvidence: 'esquina_tarjeta' },
      { speaker: 'DON RAMON', text: 'Go to the Judicial Archive, kid. Before they sweep.', pose: 'donramon_idle', unlockLocation: 'archivo_vestibulo' },
      { speaker: 'DEFENSA', text: 'They never counted on my cunning!', pose: 'chapulin_point' },
      { speaker: 'DON RAMON', text: 'I was counting on it, kid. It is all I have to count on.', pose: 'donramon_idle' }
    ]
  }
];
