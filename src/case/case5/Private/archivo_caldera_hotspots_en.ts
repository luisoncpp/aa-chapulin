// @Architecture(descriptionShort="English Case 5 day 4 boiler room examine hotspots and day close", type="data", icon="layers")
/**
 * Case 5, Day 4 — boiler room hotspots. Spec §16.2. English.
 * Boiler, thermograph, and log are painted into the background for Examine.
 */

import type { Hotspot } from '../../../types/index.js';

export const CASE5_ARCHIVO_CALDERA_HOTSPOTS_EN: Hotspot[] = [
  {
    id: 'hotspot_caldera',
    label: 'Boiler and dryers',
    x: 28, y: 38, w: 34, h: 32,
    dialogue: [
      { speaker: 'NARRADOR', text: 'The boiler is shut down and the two industrial dryers, out of service, still point at a duct climbing the wall.' },
      { speaker: 'CHOMPIRAS', text: 'That duct goes straight up to corridor seven, Counselor. They built it that way when the building was a factory.', pose: 'chompiras_idle' },
      { speaker: 'DEFENSA', text: 'And they have been running since...?', pose: 'chapulin_idle' },
      { speaker: 'CHOMPIRAS', text: 'Since December third, when the pipe burst. They shut them off the day before yesterday.', pose: 'chompiras_idle' },
      { speaker: 'DEFENSA', text: 'And what temperature does it get upstairs with this on?', pose: 'chapulin_point' },
      { speaker: 'SARGENTO', text: 'No need to guess, Counselor. There is a device that records it by itself.', pose: 'pazguato_decidido' }
    ]
  },
  {
    id: 'hotspot_termografo',
    label: 'Thermograph',
    x: 62, y: 22, w: 22, h: 28,
    condition: (flags) => Boolean(flags.examined_hotspot_caldera),
    dialogue: [
      { speaker: 'NARRADOR', text: 'Bolted to the wall, a clock drum with a gridded paper strip and a pen tracing one continuous line.' },
      { speaker: 'SARGENTO', text: 'Archive thermograph, Counselor. The drum is down here, but its probe is wired to corridor seven: it measures the air at the scene. They installed it in sixty-four because of the humidity.', pose: 'pazguato_idle' },
      { speaker: 'SARGENTO', text: 'It turns once a week; every Sunday the previous strip is removed, archived, and a new one is mounted.', pose: 'pazguato_decidido' },
      { speaker: 'DEFENSA', text: 'Show me the strip for Saturday, December fourth.', pose: 'chapulin_point' },
      { speaker: 'NARRADOR', text: 'The Sergeant unrolls that week\'s strip, removed and archived on Sunday the fifth: an ink line rising and falling like a saw.' },
      { speaker: 'DEFENSA', text: 'From the third to the fifth... the line climbs and stays.', pose: 'chapulin_idle' },
      { speaker: 'SARGENTO', text: 'Thirty-one degrees, Counselor. Sustained.', pose: 'pazguato_decidido' },
      { speaker: 'DEFENSA', text: 'And what temperature did the coroner use?', pose: 'chapulin_point' },
      { speaker: 'SARGENTO', text: 'Twenty. That is the number printed on the chart.', pose: 'pazguato_sweat' },
      { speaker: 'DEFENSA', text: '(Eleven degrees. Eleven degrees of difference.)', pose: 'chapulin_panic', addEvidence: 'bitacora_caldera' },
      { speaker: 'SARGENTO', text: 'Counselor, the second thing. The documentoscopy expert worked all night.', pose: 'pazguato_decidido' },
      { speaker: 'SARGENTO', text: 'She compared three documents: the July card, the August museum card, and the note from the rent envelope.', pose: 'pazguato_idle' },
      { speaker: 'DEFENSA', text: 'And?', pose: 'chapulin_point' },
      { speaker: 'SARGENTO', text: 'All three have the same drooping s. Same slump, same degree of tilt. Same machine.', pose: 'pazguato_decidido', updateEvidence: 'maquina_escribir' },
      { speaker: 'DEFENSA', text: 'So we are done?!', pose: 'chapulin_point' },
      { speaker: 'SARGENTO', text: 'No, Counselor. And this is where I want to cry.', pose: 'pazguato_sweat' },
      { speaker: 'SARGENTO', text: 'The expert could not match against the Olivetti. The machine is in judicial deposit and taking a sample from it is using it.', pose: 'pazguato_idle' },
      { speaker: 'SARGENTO', text: 'And using property in deposit requires a court order.', pose: 'pazguato_decidido' },
      { speaker: 'DEFENSA', text: 'And you did not ask for one?', pose: 'chapulin_panic' },
      { speaker: 'SARGENTO', text: 'I asked last night at eleven. They told me the judge was asleep.', pose: 'pazguato_sweat' },
      { speaker: 'DEFENSA', text: '(So the proof still missing to close this case has to be requested from the judge in front of everyone.)', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '(And he will only give it to me if I first give him a reason to give it.)', pose: 'chapulin_point' },
      { speaker: 'CHOMPIRAS', text: 'Counselor... what if he does not?', pose: 'chompiras_nervous' },
      { speaker: 'DEFENSA', text: 'Then Don Ramón stays inside, Chómpiras.', pose: 'chapulin_idle' },
      { speaker: 'CHOMPIRAS', text: '...I was inside eight months.', pose: 'chompiras_nervous' },
      { speaker: 'CHOMPIRAS', text: 'I am only telling you so you know how long that is.', pose: 'chompiras_idle' },
      { speaker: 'NARRADOR', text: 'The courthouse bell sounds in the distance, four times.', sfx: 'bell' },
      { speaker: 'DEFENSA', text: 'Follow me, good people!', pose: 'chapulin_point' }
    ]
  }
];
