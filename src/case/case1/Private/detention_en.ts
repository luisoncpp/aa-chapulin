// @Architecture(descriptionShort="English Case 1 day 1 detention centre visit", type="data", icon="layers")
/**
 * Case 1, Day 1 — Detention Centre (`detention`). Spec §9.1.
 * Canonical Chapulín and Don Ramón catchphrases stay in Spanish (spec §21).
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE1_DETENTION_EN: InvestigationScene = {
  title: 'Detention Centre - Visiting Room',
  name: 'Detention Centre',
  bg: 'assets/bg_detention.webp',
  bgm: 'detention_center',
  speaker: 'NARRADOR',
  idlePose: 'chapulin_idle',
  intro: [
    { speaker: 'NARRADOR', text: 'August 22nd, 9:00 AM. City Detention Centre.', bg: 'assets/bg_detention.webp', furniture: 'none', bgm: 'detention_center' },
    { speaker: 'DEFENSA', text: "Good morning. I'm Don Ramón, public defender... and street-corner defender, depending on who you ask.", pose: 'donramon_idle' },
    { speaker: 'CHAPULIN', text: '¡No contaban con mi astucia! They never counted on my cunning!', pose: 'chapulin_point' },
    { speaker: 'DEFENSA', text: 'Young man, you are in jail.', pose: 'donramon_sweat' },
    { speaker: 'CHAPULIN', text: 'Yes, but they never counted on it.', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: '(Fourteen months of unpaid rent and I get to defend a gentleman dressed as a grasshopper. I root for the Necaxa and even that works out better for me.)', pose: 'donramon_sweat' },
    { speaker: 'CHAPULIN', text: "Counselor, before you start: I didn't steal anything. I arrived late. Again.", pose: 'chapulin_panic' },
    { speaker: 'DEFENSA', text: "Then let's start there. Tell me the whole night, from the beginning, skipping nothing.", pose: 'donramon_idle', addProfile: 'perfil_chapulin' },
    { speaker: 'DEFENSA', text: "(I've written us both into the record. Him because he's my client; me because if I get distracted I forget which side I'm on.)", pose: 'donramon_idle', addProfile: 'perfil_donramon' },
    { speaker: 'MODO TUTORIAL', text: 'The yellow heart of the COURT RECORD now has two tabs: EVIDENCE and PROFILES. The PROFILES tab holds everything you know about each person, and it updates itself as the case moves.', instant: true }
  ],
  hotspots: [
    {
      id: 'hotspot_chapulin',
      label: 'El Chapulín Colorado',
      x: 22, y: 12, w: 56, h: 66,
      dialogue: [
        { speaker: 'CHAPULIN', text: '¡Todos mis movimientos están fríamente calculados! Every one of my moves is coldly calculated! ...Except my arrival time.', pose: 'chapulin_idle' }
      ]
    },
    {
      id: 'hotspot_cristal',
      label: 'Visiting-room glass',
      x: 86, y: 16, w: 12, h: 44,
      dialogue: [
        { speaker: 'DEFENSA', text: '(Scratched glass, a speaker that does not work, and a "no smoking" sign with a burn mark on it.)', pose: 'donramon_idle' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'noche_21',
      label: 'What happened on the night of the 21st?',
      dialogue: [
        { speaker: 'CHAPULIN', text: 'At eight forty-five my vinyl antennae buzzed. They buzz when an enemy is near; they never fail.', pose: 'chapulin_idle' },
        { speaker: 'CHAPULIN', text: 'I flew off to the museum. Well, not flew. Ran. With stops.', pose: 'chapulin_panic' },
        { speaker: 'DEFENSA', text: 'How many stops?', pose: 'donramon_idle' },
        { speaker: 'CHAPULIN', text: 'Two. A traffic light and a lady who dropped her groceries.', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: '(Fifteen minutes between heroism, a traffic light and some groceries.)', pose: 'donramon_sweat' },
        { speaker: 'CHAPULIN', text: 'I arrived at nine on the dot. The loading door was open. I pushed it and went in.', pose: 'chapulin_point' },
        { speaker: 'DEFENSA', text: 'Open, or forced?', pose: 'donramon_idle' },
        { speaker: 'CHAPULIN', text: 'Open, counselor. Like when you push a door and the door says "come on in".', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: 'And in the yard? Nobody?', pose: 'donramon_idle' },
        { speaker: 'CHAPULIN', text: 'Dark, counselor. A truck under a tarp. I was heading inside. I did not stop to greet the furniture.', pose: 'chapulin_idle' },
        { speaker: 'CHAPULIN', text: 'Inside it was dark. I tripped over a cage, a stuffed parrot came down on me, and when I got up the watchman was at my feet and the prosecutor was at my neck.', pose: 'chapulin_panic' },
        { speaker: 'DEFENSA', text: 'And the mallet?', pose: 'donramon_idle' },
        { speaker: 'CHAPULIN', text: 'Hanging from my belt. I need my hands to run, counselor.', pose: 'chapulin_idle', addEvidence: 'antenitas_vinil' },
        { speaker: 'CHAPULIN', text: 'When the cage hit me, the mallet flew off. I picked it up off the floor before standing.', pose: 'chapulin_panic', addEvidence: 'chipote_chillon' }
      ]
    },
    {
      id: 'pertenencias',
      label: 'What were you carrying when they arrested you?',
      dialogue: [
        { speaker: 'CHAPULIN', text: 'My full regulation kit: the Chipote Chillón, the vinyl antennae and a box of Chiquitolina pills. Sealed, mind you.', pose: 'chapulin_point' },
        { speaker: 'DEFENSA', text: 'Sealed?', pose: 'donramon_idle' },
        { speaker: 'CHAPULIN', text: 'Factory-sealed. Twelve pills, twelve. The last box ran out in June, because of a leak.', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: "I didn't ask.", pose: 'donramon_sweat' },
        { speaker: 'CHAPULIN', text: 'It was a very unfair leak.', pose: 'chapulin_panic' },
        { speaker: 'NARRADOR', text: 'The bailiff hands Don Ramón a copy of the arrest report.', sfx: 'whoosh' },
        { speaker: 'DEFENSA', text: '(Arrested at nine oh seven. Mallet, pills, antennae and three pesos. Of the golden chicharra... nothing.)', pose: 'donramon_idle', addEvidence: 'pastillas_chiquitolina' },
        { speaker: 'DEFENSA', text: '(They searched the museum piece by piece and it never turned up either. And the vehicles on the premises: "not logged". Not logged, it says.)', pose: 'donramon_shock', addEvidence: 'parte_detencion' }
      ]
    },
    {
      id: 'por_que_museo',
      label: 'Why did you go into the museum?',
      condition: (flags) => Boolean(flags.talk_noche_21) && Boolean(flags.talk_pertenencias),
      dialogue: [
        { speaker: 'CHAPULIN', text: 'Because the antennae are never wrong, counselor. If they buzz, there is a crook. And if there is a crook, in I go.', pose: 'chapulin_point' },
        { speaker: 'DEFENSA', text: 'They buzzed at eight forty-five. The theft, according to the prosecution, was at five to nine.', pose: 'donramon_idle' },
        { speaker: 'CHAPULIN', text: 'Exactly! My antennae detected the thief ten minutes before he stole anything!', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: 'That, or they detected you.', pose: 'donramon_sweat' },
        { speaker: 'CHAPULIN', text: '¡Chanfle!', pose: 'chapulin_panic' },
        { speaker: 'DEFENSA', text: '(Although... if the thief was already near the museum at eight forty-five, and the museum closed at eight forty, that man was outside waiting for something.)', pose: 'donramon_idle' },
        { speaker: 'CHAPULIN', text: '¡Vaya al museo, licenciado! ¡Síganme los buenos!', pose: 'chapulin_point', unlockLocation: 'museo_sala2' },
        { speaker: 'DEFENSA', text: 'You cannot follow me, you are in jail.', pose: 'donramon_sweat' },
        { speaker: 'CHAPULIN', text: 'Then you follow me. I will stay here directing.', pose: 'chapulin_idle' }
      ]
    }
  ]
};
