// @Architecture(descriptionShort="English Case 5 day 2 precinct talk chain", type="data", icon="layers")
/**
 * Case 5, Day 2 — talk options with the Sergeant at the precinct. Spec §12.4.
 */

import type { TalkOption } from '../../../types/index.js';

export const CASE5_DELEGACION_C5_TALKS_EN: TalkOption[] = [
  {
    id: 'que_hizo_anoche',
    label: 'What did you do last night?',
    dialogue: [
      { speaker: 'SARGENTO', text: 'I started thinking about what you said in court yesterday: that the list was incomplete.', pose: 'pazguato_idle' },
      { speaker: 'SARGENTO', text: 'And I got to thinking about another list.', pose: 'pazguato_decidido' },
      { speaker: 'SARGENTO', text: 'Counselor: Mr. Ramon defended four trials between August and October and won all four.', pose: 'pazguato_idle' },
      { speaker: 'SARGENTO', text: 'I was at two of them. And last night I went to the Archive and requested all four files.', pose: 'pazguato_decidido' },
      { speaker: 'DEFENSA', text: 'And what did you find?', pose: 'chapulin_point' },
      { speaker: 'SARGENTO', text: 'I do not know.', pose: 'pazguato_sweat' },
      { speaker: 'SARGENTO', text: 'I truly do not know, counselor. But my hand shook and I have learned to listen to that.', pose: 'pazguato_decidido' }
    ]
  },
  {
    id: 'enseneme_expedientes',
    label: 'Show me those files',
    unlockedByTalk: 'que_hizo_anoche',
    dialogue: [
      { speaker: 'NARRADOR', text: 'The Sergeant unties five dossiers and lines them up on the desk by date.' },
      { speaker: 'SARGENTO', text: 'July. Mr. Lengua, the encyclopedia man. They seized a business card from a company dissolved since seventy-one.', pose: 'pazguato_idle' },
      { speaker: 'SARGENTO', text: 'August, the museum. A six-line typewritten card turned up in the loading yard. Nobody ever learned who wrote it.', pose: 'pazguato_idle' },
      { speaker: 'SARGENTO', text: 'August again, the hacienda. A bottle of valerian and a wax mold bought by a customer nobody identified.', pose: 'pazguato_idle' },
      { speaker: 'SARGENTO', text: 'September, the radio station. A pawn ticket: twelve thousand pesos in cash, September third.', pose: 'pazguato_idle' },
      { speaker: 'SARGENTO', text: 'And October, the hotel. A necklace stolen before whose split was never paid.', pose: 'pazguato_idle' },
      { speaker: 'DEFENSA', text: 'Sergeant... these five cases have nothing to do with one another.', pose: 'chapulin_idle' },
      { speaker: 'SARGENTO', text: 'Nothing, counselor. Different culprits, different neighborhoods, different crimes.', pose: 'pazguato_decidido' },
      { speaker: 'SARGENTO', text: 'That is why my hand shook.', pose: 'pazguato_decidido', addEvidence: 'expediente_serie' },
      { speaker: 'DEFENSA', text: '(Five papers from five cases that do not know each other.)', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '(And all five talk about the same business.)', pose: 'chapulin_panic' },
      { speaker: 'SARGENTO', text: 'Counselor. I am going to ask you something and forgive my boldness.', pose: 'pazguato_sweat' },
      { speaker: 'SARGENTO', text: 'Do not say it in court today until the man with the lorgnette is on the stand.', pose: 'pazguato_decidido' },
      { speaker: 'DEFENSA', text: 'Why?', pose: 'chapulin_idle' },
      { speaker: 'SARGENTO', text: 'Because an amicus can object. A witness cannot.', pose: 'pazguato_decidido' },
      { speaker: 'DEFENSA', text: '(Sergeant, since when do you know law?)', pose: 'chapulin_idle' },
      { speaker: 'SARGENTO', text: 'Since September, counselor. It is the only good thing September left me.', pose: 'pazguato_saludo' },
      { speaker: 'NARRADOR', text: 'The courthouse bell rings.', sfx: 'bell' }
    ]
  }
];
