// @Architecture(descriptionShort="English Case 1 day 1 museum gallery 2 crime scene", type="data", icon="layers")
/**
 * Case 1, Day 1 — Museum of Curiosities, gallery 2 (`museo_sala2`). Spec §9.2.
 * The mangled proverb is rebuilt from two related English sayings (spec §21)
 * so Jirafales can still correct it in one line.
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE1_MUSEO_EN: InvestigationScene = {
  title: 'Museum of Curiosities - Gallery 2',
  name: 'Museum (Gallery 2)',
  bg: 'assets/bg_museo_sala2.webp',
  bgm: 'investigation',
  speaker: 'NARRADOR',
  idlePose: 'florinda_idle',
  intro: [
    { speaker: 'NARRADOR', text: 'August 22nd, 11:00 AM. Museum of Curiosities, gallery 2. The police tape is still up.', bg: 'assets/bg_museo_sala2.webp', furniture: 'none', bgm: 'investigation' },
    { speaker: 'FLORINDA', text: 'Oh, my museum! My poor museum!', pose: 'florinda_crying' },
    { speaker: 'DEFENSA', text: 'Doña Florinda, good morn...', pose: 'donramon_idle' },
    { speaker: 'FLORINDA', text: 'YOU! What are you doing here?', pose: 'florinda_angry' },
    { speaker: 'DEFENSA', text: "I'm the defendant's attorney.", pose: 'donramon_sweat' },
    { speaker: 'FLORINDA', text: '¡Chusma, chusma! Riffraff! Come along, Professor, it might be contagious!', pose: 'florinda_angry' },
    { speaker: 'JIRAFALES', text: 'Doña Florinda, please. Every person is entitled to a defense. It is in the books.', pose: 'jirafales_idle' },
    { speaker: 'JIRAFALES', text: 'Besides, he is a neighbor, Doña Florinda. Good morning, Don Ramón.', pose: 'jirafales_smoking' },
    { speaker: 'DEFENSA', text: 'Professor Jirafales! What brings you here?', pose: 'donramon_idle' },
    { speaker: 'JIRAFALES', text: 'Last night I gave the eight o\'clock talk right here: "The Paralyzing Chicharra: myth and metallurgy".', pose: 'jirafales_smoking' },
    { speaker: 'DEFENSA', text: '(Please do not bring up the rent, please do not bring up the rent...) And what time did it end, Professor?', pose: 'donramon_sweat' },
    { speaker: 'JIRAFALES', text: 'At eight thirty and four seconds. I keep a stopwatch.', pose: 'jirafales_idle', addProfile: 'perfil_florinda' },
    { speaker: 'DEFENSA', text: '(Same as always: he puts a clock on the seconds. That will be useful to me somehow.)', pose: 'donramon_idle', addProfile: 'perfil_jirafales' }
  ],
  hotspots: [
    {
      id: 'hotspot_vitrina',
      label: 'Shattered display case',
      x: 42, y: 28, w: 29, h: 43,
      dialogue: [
        { speaker: 'NARRADOR', text: "The Chicharra's display case, blown open. The wooden pedestal stands at a man's waist height." },
        { speaker: 'DEFENSA', text: 'Smashed to pieces. And the glass... the glass ended up scattered all over the floor.', pose: 'donramon_idle' },
        { speaker: 'FLORINDA', text: 'They took everything! That red bug left my museum in ruins!', pose: 'florinda_crying' },
        { speaker: 'DEFENSA', text: '(There is something strange about how that glass fell, but right now I could not say what. I will take it into the record and look at it calmly.)', pose: 'donramon_idle', addEvidence: 'vitrina_rota' }
      ]
    },
    {
      id: 'hotspot_rejilla',
      label: 'Duct grate',
      x: 72, y: 55, w: 11, h: 17,
      dialogue: [
        { speaker: 'NARRADOR', text: 'On the wall, just above the baseboard, a small metal grate.' },
        { speaker: 'DEFENSA', text: 'Eighteen by twenty-four. Not even a cat could get through there.', pose: 'donramon_idle' },
        { speaker: 'DEFENSA', text: 'Four screws, and the paint on all four is unbroken. Nobody has loosened them since the wall was painted.', pose: 'donramon_shock' },
        { speaker: 'FLORINDA', text: 'That grate leads to the loading yard. It has been there since the museum was a button factory.', pose: 'florinda_idle' },
        { speaker: 'DEFENSA', text: 'The lower corner of the mesh is bent upward and pushed back into place.', pose: 'donramon_shock' },
        { speaker: 'DEFENSA', text: 'And on the inner lip, two parallel strips of dust are missing. Something is caught between the diamonds.', pose: 'donramon_idle' },
        { speaker: 'NARRADOR', text: 'With tweezers, Don Ramón pulls out a cream pinstriped worsted thread and bags it in waxed paper.', sfx: 'whoosh' },
        { speaker: 'DEFENSA', text: '(No pry marks and no screws touched. I still do not know what those strips or that thread mean, but they came from the inside.)', pose: 'donramon_idle', addEvidence: 'rejilla_ducto' }
      ]
    },
    {
      id: 'hotspot_cedula',
      label: 'Catalogue card of the stolen piece',
      x: 38, y: 47, w: 12, h: 13,
      dialogue: [
        { speaker: 'NARRADOR', text: "Beside the empty pedestal stands the piece's catalogue card, with its photograph." },
        { speaker: 'DEFENSA', text: '"Golden Paralyzing Chicharra. Solid gold, one kilo two hundred. Sharp-edged filigree."', pose: 'donramon_idle' },
        { speaker: 'JIRAFALES', text: 'And it is no ornament, counselor. It is mounted on a resonance base.', pose: 'jirafales_smoking' },
        { speaker: 'DEFENSA', text: 'And what does that mean?', pose: 'donramon_idle' },
        { speaker: 'JIRAFALES', text: 'That if you lift it off the base, it sounds. And whoever hears it goes stiff for about a minute. That is why they put it under glass and not under lock.', pose: 'jirafales_idle' },
        { speaker: 'DEFENSA', text: 'A whole minute?', pose: 'donramon_shock' },
        { speaker: 'JIRAFALES', text: 'Sixty seconds, counselor. I counted them myself in 1968 and I still remember the ceiling.', pose: 'jirafales_smoking', addEvidence: 'chicharra_oro' }
      ]
    },
    {
      id: 'hotspot_jaula',
      label: 'Historic parrot cage',
      x: 0, y: 58, w: 28, h: 31,
      dialogue: [
        { speaker: 'NARRADOR', text: 'A brass cage knocked over on the floor. Inside, a stuffed parrot with a permanent look of surprise.' },
        { speaker: 'DEFENSA', text: 'Tipped inward from the corridor entrance into gallery two. The feathers scattered further in.', pose: 'donramon_idle' },
        { speaker: 'FLORINDA', text: 'That is Aristotle! Two hundred years of history and that grasshopper knocked him over with one shove!', pose: 'florinda_angry' },
        { speaker: 'DEFENSA', text: '(If he knocked it over entering from the corridor, that fits the turns he told me about.)', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'hotspot_ventana',
      label: 'Alley window',
      x: 8, y: 0, w: 18, h: 20,
      dialogue: [
        { speaker: 'NARRADOR', text: 'A high, narrow little window, its glass clouded with dust.' },
        { speaker: 'DEFENSA', text: 'This is where the witness says he saw everything.', pose: 'donramon_idle' },
        { speaker: 'DEFENSA', text: '(It is two metres twenty above the alley floor, it is forty centimetres wide and the glass is frosted. To see anything you have to climb... and know what to climb onto.)', pose: 'donramon_shock' },
        { speaker: 'JIRAFALES', text: 'There is a rubbish drum underneath, on the alley side. I saw it on my way out last night.', pose: 'jirafales_idle' },
        { speaker: 'DEFENSA', text: '(A drum. Right. So you can see in after all. A pity: there goes the first objection of the case.)', pose: 'donramon_sweat' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'cierre_museo',
      label: 'What time did you lock up the museum?',
      dialogue: [
        { speaker: 'FLORINDA', text: 'At eight forty. With my key, which is the only one that exists, and with the Professor as witness.', pose: 'florinda_idle' },
        { speaker: 'JIRAFALES', text: 'Eight forty and eleven seconds. Stopwatch.', pose: 'jirafales_smoking' },
        { speaker: 'FLORINDA', text: 'Only Alma Negra was left inside. My poor watchman.', pose: 'florinda_crying' },
        { speaker: 'DEFENSA', text: 'And the loading door?', pose: 'donramon_idle' },
        { speaker: 'FLORINDA', text: 'I never use that one. The latch has been broken for years, but it leads to the yard and the yard is walled...', pose: 'florinda_idle' },
        { speaker: 'DEFENSA', text: '(Walled. With a wall anyone can hop and a latch that has not worked in years.)', pose: 'donramon_sweat' }
      ]
    },
    {
      id: 'que_vio_florinda',
      label: 'What did you see when you arrived?',
      dialogue: [
        { speaker: 'FLORINDA', text: 'A neighbour rang me at nine oh four. I ran, opened the big door with my key and...', pose: 'florinda_crying' },
        { speaker: 'FLORINDA', text: 'There was my Alma Negra, down like a sack. And on top of him that red bug, still with the chipote in his hand.', pose: 'florinda_angry' },
        { speaker: 'DEFENSA', text: 'On top of him, or standing beside him?', pose: 'donramon_idle' },
        { speaker: 'FLORINDA', text: 'It is the same thing!', pose: 'florinda_angry' },
        { speaker: 'DEFENSA', text: '(It is not the same thing, Doña Florinda. But I will ask you that this afternoon, with the judge as witness.)', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'conferencia_jirafales',
      label: "Your lecture last night (Professor Jirafales)",
      dialogue: [
        { speaker: 'JIRAFALES', text: 'Forty attendees, all ticketed. I finished at eight thirty, signed two copies and stayed chatting with Doña Florinda until closing.', pose: 'jirafales_idle' },
        { speaker: 'DEFENSA', text: 'Did anyone stay inside?', pose: 'donramon_idle' },
        { speaker: 'JIRAFALES', text: 'Nobody. Doña Florinda counts the people leaving the way I count my students: twice.', pose: 'jirafales_smoking' },
        { speaker: 'DEFENSA', text: 'And the watchman?', pose: 'donramon_idle' },
        { speaker: 'JIRAFALES', text: 'Ah, Alma Negra. A most punctual man. He proudly showed me his little notebook: he walks the same round every night, at the same hours, written in his own hand.', pose: 'jirafales_idle' },
        { speaker: 'DEFENSA', text: 'Written down?', pose: 'donramon_shock' },
        { speaker: 'JIRAFALES', text: 'Written down and hung from a nail in his booth, so he never slips. I told him a man of order is an invincible man.', pose: 'jirafales_smoking' },
        { speaker: 'DEFENSA', text: '(Invincible. Right. With his timetable in plain sight of anyone who buys a ticket.)', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'cree_jirafales',
      label: 'Do you think El Chapulín did it? (Professor Jirafales)',
      condition: (flags) =>
        Boolean(flags.talk_conferencia_jirafales) &&
        Boolean(flags.examined_hotspot_vitrina) &&
        Boolean(flags.examined_hotspot_rejilla) &&
        Boolean(flags.examined_hotspot_cedula),
      dialogue: [
        { speaker: 'JIRAFALES', text: 'I believe nothing, counselor. I only know what time things happened.', pose: 'jirafales_idle' },
        { speaker: 'FLORINDA', text: 'Well, I do believe! And I believe that grasshopper will rot in jail!', pose: 'florinda_angry' },
        { speaker: 'NARRADOR', text: "A tinny little voice comes out of Don Ramón's jacket pocket: the two-peso radio El Chapulín is using to \"run the investigation\" from his cell.", sfx: 'whoosh' },
        { speaker: 'CHAPULIN', text: '¡Que no panda el cúnico, Doña Florinda! You will see the thief fall all by himself: the early bird... gathers no moss.', pose: 'donramon_idle' },
        { speaker: 'JIRAFALES', text: '¡¡¡TA-TA-TA-TA-TAAAAAA!!! Young man! Those are TWO sayings and neither of them says that!', pose: 'jirafales_angry' },
        { speaker: 'CHAPULIN', text: 'Exactly, Professor. One alone was not enough for me.', pose: 'donramon_idle' },
        { speaker: 'DEFENSA', text: '(He has got into my investigation through my pocket. Con permisito, dijo Monchito.)', pose: 'donramon_sweat' },
        { speaker: 'JIRAFALES', text: 'Counselor, if you truly want to help your client, go to the clinic. Alma Negra still has not woken up.', pose: 'jirafales_idle', unlockLocation: 'clinica' }
      ]
    }
  ]
};
