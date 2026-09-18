// @Architecture(descriptionShort="English Case 5 day 1 pasillo 7 examine hotspots and day close", type="data", icon="layers")
/**
 * Case 5, Day 1 — hallway 7 points of interest, English. Spec §10.3.
 * Body outline, volume, and shelf are painted into the background for Examine.
 */

import type { Hotspot } from '../../../types/index.js';

export const CASE5_PASILLO7_HOTSPOTS_EN: Hotspot[] = [
  {
    id: 'hotspot_cuerpo',
    label: 'Body Outline',
    x: 38, y: 54, w: 26, h: 26,
    dialogue: [
      { speaker: 'NARRADOR', text: 'A chalk outline on the floor, between the shelf and the consultation table. Face down, head toward the shelf.' },
      { speaker: 'DEFENSA', text: 'He fell forward. Face toward the books.', pose: 'chapulin_idle' },
      { speaker: 'SARGENTO', text: 'Single blow to the back of the neck, Counselor. The coroner is preparing a supplement on direction and manner of impact.', pose: 'pazguato_idle' },
      { speaker: 'DEFENSA', text: 'And the time?', pose: 'chapulin_point' },
      { speaker: 'SARGENTO', text: 'Between five and five thirty. They took his temperature at six forty.', pose: 'pazguato_idle' },
      { speaker: 'DEFENSA', text: 'Sergeant, do you not feel it is frying-pan hot in here?', pose: 'chapulin_idle' },
      { speaker: 'SARGENTO', text: 'Yes, but the coroner did not come to feel. He came to measure.', pose: 'pazguato_sweat' },
      { speaker: 'DEFENSA', text: '(There is the detail... or maybe not. I will note it anyway.)', pose: 'chapulin_idle', addEvidence: 'informe_forense_c5' }
    ]
  },
  {
    id: 'hotspot_tomo',
    label: 'Fallen Volume',
    x: 54, y: 82, w: 18, h: 16,
    dialogue: [
      { speaker: 'NARRADOR', text: 'One meter from the outline, marked with a forensic tag, a thick volume bound in green cloth.' },
      { speaker: 'DEFENSA', text: '"Universal Knowledge. Volume XI. Railways - Guatemala."', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: 'There is blood on the spine edge.', pose: 'chapulin_panic' },
      { speaker: 'SARGENTO', text: 'Two kilos eight hundred grams. That is the weapon, Counselor. The prosecution already photographed it, tagged it, and ordered it kept here under guard; I have the forensic card.', pose: 'pazguato_idle' },
      { speaker: 'DEFENSA', text: 'And this little purple stamp on the first page?', pose: 'chapulin_idle' },
      { speaker: 'SARGENTO', text: 'No idea. Half faded and tiny lettering. With the Record magnifier you might read it.', pose: 'pazguato_idle' },
      { speaker: 'DEFENSA', text: '(I will study it calmly later. Right now what matters is they killed this man with a book.)', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '(With a book, Chapulin. With a book.)', pose: 'chapulin_panic', addEvidence: 'tomo_caido' }
    ]
  },
  {
    id: 'hotspot_estante',
    label: 'Consultation Shelf',
    x: 54, y: 6, w: 46, h: 72,
    dialogue: [
      { speaker: 'NARRADOR', text: 'A dark wood shelf against the wall, with numbered slots from 1 to 24 on cardboard tabs.' },
      { speaker: 'DEFENSA', text: 'A complete set. One through twenty-four.', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '(Let me see... one, two, three... twelve... fourteen...)', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: 'Sergeant, one is missing. Slot thirteen is empty.', pose: 'chapulin_point' },
      { speaker: 'SARGENTO', text: 'That one has been empty since before I was born, Counselor. The janitor told me.', pose: 'pazguato_idle' },
      { speaker: 'SARGENTO', text: 'He says that volume was announced and never printed. That it happened to every set in the country.', pose: 'pazguato_idle' },
      { speaker: 'DEFENSA', text: 'So none are actually missing?', pose: 'chapulin_idle' },
      { speaker: 'SARGENTO', text: 'None. Twenty-three volumes and the usual gap. I counted three times because I could not believe it.', pose: 'pazguato_decidido' },
      { speaker: 'DEFENSA', text: 'But the weapon is a volume from this set! If they took it from here another one should be missing!', pose: 'chapulin_panic' },
      { speaker: 'SARGENTO', text: 'That is why I counted three times.', pose: 'pazguato_sweat' },
      { speaker: 'DEFENSA', text: '(Twenty-three volumes on the shelf and one more on the floor. Twenty-four volumes for twenty-four slots... and one empty slot.)', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '(The math does not add up and I do not know why. I am taking the whole shelf into the Record.)', pose: 'chapulin_idle', addEvidence: 'estante_consulta' }
    ]
  },
  {
    id: 'hotspot_mesa',
    label: 'Consultation Table',
    x: 0, y: 4, w: 34, h: 58,
    dialogue: [
      { speaker: 'NARRADOR', text: 'A long oak table with a green-shaded lamp. On it, an open file bundle tied with ribbon.' },
      { speaker: 'DEFENSA', text: 'It is Mr. Lengua file. His appeal.', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: 'And it is open to page two hundred fourteen.', pose: 'chapulin_point' },
      { speaker: 'SARGENTO', text: 'He left it there. Nobody has turned that page, Counselor; I have the seven PM photograph and it is identical.', pose: 'pazguato_decidido' },
      { speaker: 'DEFENSA', text: 'On page two hundred fourteen there is a card glued with paste.', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '"Universal Knowledge Encyclopedias, Inc." Evidence seized from the convict in July.', pose: 'chapulin_idle' },
      { speaker: 'SARGENTO', text: 'That company was dissolved in seventy-one. It says so below, in the clerk handwriting.', pose: 'pazguato_idle' },
      { speaker: 'DEFENSA', text: '(A man with four years left on his sentence asked to be brought here to point at an old card.)', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '(And they killed him before the court clerk arrived.)', pose: 'chapulin_panic', addEvidence: 'expediente_casimiro' },
      { speaker: 'SARGENTO', text: 'Counselor. One more thing and then I will shut up.', pose: 'pazguato_sweat' },
      { speaker: 'SARGENTO', text: 'The prosecution asked me for the visitor logbook and I gave it to them.', pose: 'pazguato_idle' },
      { speaker: 'DEFENSA', text: 'And the other one?', pose: 'chapulin_point' },
      { speaker: 'SARGENTO', text: 'Which other?', pose: 'pazguato_sweat' },
      { speaker: 'DEFENSA', text: 'The expert log. The side door.', pose: 'chapulin_idle' },
      { speaker: 'SARGENTO', text: '...Nobody asked me for it.', pose: 'pazguato_sweat' },
      { speaker: 'SARGENTO', text: 'And I did not offer it, because visitors are visitors and experts are experts.', pose: 'pazguato_sweat' },
      { speaker: 'DEFENSA', text: '(Do not say that at trial, Sergeant. Let them figure it out.)', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '(And if they do not, I will.)', pose: 'chapulin_point' },
      { speaker: 'NARRADOR', text: 'The courthouse bell rings across the street.', sfx: 'bell' },
      { speaker: 'DEFENSA', text: 'Follow the good guys! To the courtroom!', pose: 'chapulin_point' },
      { speaker: 'SARGENTO', text: 'At your service, Counselor.', pose: 'pazguato_saludo' }
    ]
  }
];
