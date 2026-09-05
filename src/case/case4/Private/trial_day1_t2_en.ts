// @Architecture(descriptionShort="English Case 4 day-1 Cecilio testimony", type="data", icon="layers")
/**
 * Case 4 Trial Day 1 — Testimony 2 (English).
 */

import type { DialogueLine, Testimony } from '../../../types/index.js';

const T2_CHAIN_EN: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: 'OBJECTION! Examine this lock recovered from the exterior hallway, Don Cecilio!', sfx: 'desk_slam', bgm: 'objection', pose: 'donramon_slam' },
  { speaker: 'CECILIO', text: 'Allow me to clean my glasses... Good heavens, what a lovely piece of costume jewelry!', pose: 'cecilio_ciego' },
  { speaker: 'DEFENSA', text: 'It\'s no trinket! It\'s the chain-lock base! The sliding bolt has a fresh scratch and transparent nylon fishing line.', pose: 'donramon_point' },
  { speaker: 'JUEZ', text: 'Fishing line?', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'Anyone standing in the exterior hallway can pass fishing line through the door gap, hook the bolt, and pull from outside to slide it along the horizontal rail until it catches inside, then release the line and leave the room locked from within!', pose: 'donramon_point' },
  { speaker: 'CHAPULIN', text: 'Exactly! You didn\'t count on my cunning! Anyone from the corridor could stage the fake locked room and trap my client inside!', pose: 'chapulin_point' },
  { speaker: 'SUPER SAM', text: 'Objection! Pure Sunday-angler theory!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'SUPER SAM', text: 'Even if an elf slid that bolt with nylon thread, how does the defense explain criminal motive? Gordon Botija was caught with the victim\'s crocodile-skin wallet in his pocket! He entered to rob Señor Gómez!', pose: 'supersam_point' },
  { speaker: 'JUEZ', text: 'Indeed... The Prosecutor raises a point of first order. The wallet in the defendant\'s hands suggests robbery with violence. Counselor Monchito, do you have proof refuting that robbery motive?', pose: 'judge_gavel', sfx: 'gavel' },
  { speaker: 'DEFENSA', text: 'The defense has irrefutable proof that Botija never intended to steal a single cent!', cutin: 'objection_protesto', sfx: 'desk_slam', pose: 'donramon_slam' }
];

const T2_WALLET_EN: DialogueLine[] = [
  { cutin: 'objection_toma_eso', speaker: 'DEFENSA', text: 'Examine carefully the contents of the deceased\'s wallet, Your Honor!', sfx: 'whoosh', bgm: 'objection', pose: 'donramon_point' },
  { speaker: 'JUEZ', text: 'Señor Gómez\'s wallet? But it contains... two hundred pesos intact in legal tender!', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'Exactly! Two hundred pesos whole without a single coin missing! If Gordon Botija had entered to rob, would he have kept the wallet with money inside as evidence in his pocket, instead of taking the bills and tossing the wallet out the window? The intact money completely rules out robbery with violence!', pose: 'donramon_point' },
  { speaker: 'SUPER SAM', text: 'What?! But his hands were covered in black gunpowder!', pose: 'supersam_sweat' },
  { speaker: 'JUEZ', text: 'That is a weighty argument... No professional pickpocket leaves money intact in the victim\'s wallet. The defense has shown the chain could be slid from the hallway and that robbery motive is untenable. However, the mystery of the black residue on Botija\'s hands and the 11:15 PM gunshot demand expert answers. Court is adjourned until tomorrow!', pose: 'judge_gavel', sfx: 'gavel' }
];

export const CASE4_TESTIMONY_2_EN: Testimony = {
  title: 'Testimony: The Security Chain',
  witness: 'Don Cecilio Buenavista',
  bgm: 'cross_exam_allegro',
  statements: [
    {
      id: 'd1_t2_1',
      speaker: 'CECILIO',
      pose: 'cecilio_idle',
      text: 'I myself pushed the heavy oak door with my shoulder after hearing the gunfire.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'Didn\'t you try your master key first?', pose: 'donramon_idle' },
        { speaker: 'CECILIO', text: 'The ordinary key lock was unlatched... What blocked access was purely and exclusively the interior security chain.', pose: 'cecilio_idle' },
        { speaker: 'SUPER SAM', text: 'Exactly! Lock open but chain bolted from inside by the killer!', pose: 'supersam_point' }
      ]
    },
    {
      id: 'd1_t2_2',
      speaker: 'CECILIO',
      pose: 'cecilio_idle',
      text: 'The door stopped dead at four centimeters because the brass chain was firm in its rail.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'What exactly could be seen through that four-centimeter gap?', pose: 'donramon_idle' },
        { speaker: 'CECILIO', text: 'My eyes are no imperial eagle\'s, distinguished counselor, but in the gloom I could make out the wicker hamper and the victim\'s silhouette near the fire.', pose: 'cecilio_ciego' },
        { speaker: 'DEFENSA', text: '(Four centimeters of gap... more than enough to pass fishing line.)', pose: 'donramon_sweat' }
      ]
    },
    {
      id: 'd1_t2_3',
      speaker: 'CECILIO',
      pose: 'cecilio_idle',
      text: 'That mechanism is inviolable from outside; it requires a human hand to slide the bolt from within.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'Are you absolutely convinced nobody could manipulate that lock from the hallway exterior?', pose: 'donramon_idle' },
        { speaker: 'CECILIO', text: 'Completely, counselor! The solid brass plate has no exterior notches and the bolt runs along the inner face. Unless the killer were a ghost or had telekinetic powers, nobody can push that bolt from the hallway!', pose: 'cecilio_escandalo' },
        { speaker: 'DEFENSA', text: '(Not a ghost... but someone with patience, good thread, and two brain cells, without doubt...)', pose: 'donramon_idle' }
      ],
      contradiction: {
        evidence: ['candado_cadena'],
        successDialogue: T2_CHAIN_EN,
        followUp: { evidence: ['billetera_cuajinais'], successDialogue: T2_WALLET_EN }
      }
    },
    {
      id: 'd1_t2_4',
      speaker: 'CECILIO',
      pose: 'cecilio_idle',
      text: 'Since Botija was the only living soul in the chamber, only he could bar the door to protect his loot!',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'What loot do you refer to so lightly, Don Cecilio?', pose: 'donramon_idle' },
        { speaker: 'CECILIO', text: 'The unfortunate Señor Gómez\'s crocodile-skin wallet, of course! A humble plumber cannot resist the temptation of luxury!', pose: 'cecilio_idle' },
        { speaker: 'DEFENSA', text: 'Careful slandering the working class, Don Cecilio — Botija\'s hands are stained but honest!', pose: 'donramon_slam', sfx: 'desk_slam' }
      ]
    }
  ]
};
