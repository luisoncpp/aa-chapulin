// @Architecture(descriptionShort="English Case 5 day 3 penal effects locker hotspot and day close", type="data", icon="layers")
/**
 * Case 5, Day 3 — personal effects warehouse hotspot. Spec §14.3. English.
 * Closes the day by delivering `efectos_casimiro`.
 */

import type { Hotspot } from '../../../types/index.js';

export const CASE5_PENAL_EFECTOS_HOTSPOTS_EN: Hotspot[] = [
  {
    id: 'hotspot_caja',
    label: 'Box 214-J',
    x: 8, y: 42, w: 34, h: 40,
    dialogue: [
      { speaker: 'NARRADOR', text: 'Inside the box: two stopped wristwatches, a necktie bow, a black-cover notebook, and a carbon paper folded in four.' },
      { speaker: 'DEFENSA', text: 'Two watches.', pose: 'chapulin_idle' },
      { speaker: 'SARGENTO', text: 'One per arm, says the log. Both stopped at the same hour.', pose: 'pazguato_sweat' },
      { speaker: 'DEFENSA', text: '(Two watches that no longer serve anyone.)', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: 'The carbon paper is a copy of an official letter.', pose: 'chapulin_point' },
      { speaker: 'DEFENSA', text: '"Citizen public ministry agent. The undersigned, inmate, offers to deliver to that social representation a file..."', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '"...in exchange for consideration of a reduction in my sentence. November 8."', pose: 'chapulin_idle' },
      { speaker: 'SARGENTO', text: 'And the notebook, Counselor. Read it. I already read it and that is why I have this face.', pose: 'pazguato_decidido' },
      { speaker: 'NARRADOR', text: 'The notebook is written in small, cramped hand, with margins and underlines.' },
      { speaker: 'NARRADOR', text: '"Volume one. From the machine."' },
      { speaker: 'NARRADOR', text: '"Point one. The card they seized from me in July has the drooping s. I studied it nine years, line by line."' },
      { speaker: 'NARRADOR', text: '"Point two. The museum card that ran in the newspaper in August has the drooping s. You can see it in the photograph, even blurred."' },
      { speaker: 'NARRADOR', text: '"Point three. The same device wrote them. A device does not correct itself: you correct it with a mechanic, and nobody called a mechanic in eleven years."' },
      { speaker: 'NARRADOR', text: '"Point four. I know where that device is because I typed on it from 1962 to 1971, and it has not been moved."' },
      { speaker: 'NARRADOR', text: '"Point five. What I do not know is how to say it without looking like I want to save myself. And I do want to save myself."' },
      { speaker: 'DEFENSA', text: '...Sergeant.', pose: 'chapulin_panic' },
      { speaker: 'SARGENTO', text: 'Yes, Counselor.', pose: 'pazguato_sweat' },
      { speaker: 'DEFENSA', text: 'This man was doing my job.', pose: 'chapulin_idle' },
      { speaker: 'SARGENTO', text: 'He had been doing it since November eighth.', pose: 'pazguato_decidido' },
      { speaker: 'SARGENTO', text: 'And they killed him twelve meters from the machine, stored in the basement, the day someone finally listened.', pose: 'pazguato_decidido', addEvidence: 'efectos_casimiro' },
      { speaker: 'DEFENSA', text: '(I have the machine. I have the cards. I have five files. I have a book with no exit column.)', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '(And I have absolutely nothing, because all of that is legal.)', pose: 'chapulin_panic' },
      { speaker: 'SARGENTO', text: 'Counselor. May I tell you something that is not police business?', pose: 'pazguato_sweat' },
      { speaker: 'DEFENSA', text: 'Tell me.', pose: 'chapulin_idle' },
      { speaker: 'SARGENTO', text: 'Mr. Ramon has rubbed me the wrong way since the Scream Case. He said "cop" three times.', pose: 'pazguato_idle' },
      { speaker: 'SARGENTO', text: 'And if they convict him tomorrow, I will spend the rest of my life knowing I had the expert book in my hand on day one and did not hand it over.', pose: 'pazguato_decidido' },
      { speaker: 'DEFENSA', text: 'Sergeant, you did nothing wrong.', pose: 'chapulin_idle' },
      { speaker: 'SARGENTO', text: 'I did nothing, Counselor. Which is different and worse.', pose: 'pazguato_decidido' },
      { speaker: 'NARRADOR', text: 'The courthouse bell sounds in the distance.', sfx: 'bell' },
      { speaker: 'DEFENSA', text: 'Follow me, good people, Sergeant!', pose: 'chapulin_point' },
      { speaker: 'SARGENTO', text: 'At your orders, Counselor.', pose: 'pazguato_saludo' }
    ]
  }
];
