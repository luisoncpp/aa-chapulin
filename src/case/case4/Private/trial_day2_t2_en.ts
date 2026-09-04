// @Architecture(descriptionShort="English Case 4 day-2 Maruja testimony", type="data", icon="layers")
/**
 * Case 4 Trial Day 2 — Testimony 4 (English).
 */

import type { DialogueLine, Testimony } from '../../../types/index.js';
import { CASE4_PLANO_POINT_TARGET } from './trial_day2_success.js';

const PLANO_POINT_EN = {
  ...CASE4_PLANO_POINT_TARGET,
  promptQuestion: 'Point to the exact conduit where the sound wave from the 11:15 PM gunshot propagated!'
};

const T4_PLANO_EN: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: 'The 11:15 PM blast was NOT Cuajinais\'s murder!', sfx: 'whoosh', bgm: 'objection', pose: 'donramon_point', updateEvidence: 'plano_hotel' }
];

const T4_CASQUILLO_EN: DialogueLine[] = [
  { speaker: 'DEFENSA', text: 'It was an acoustic trap built with this slow-fuse blank cartridge, detonated inside Suite 204\'s purge pipe!', pose: 'donramon_slam', sfx: 'desk_slam' },
  { speaker: 'MARUJA', text: 'Suite 204?! But that\'s the Count of Montemayor\'s chamber!', pose: 'maruja_shock' },
  { speaker: 'JUEZ', text: 'The illustrious Count of Montemayor involved in a pyrotechnic device?!', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'The real killer poisoned Cuajinais with cyanide before ten, shot him through a feather pillow to muffle the blast and simulate bullet death, set a delayed acoustic detonation for a public alibi at 11:15 PM, and locked my client inside to carry the corpse!', pose: 'donramon_point' },
  { speaker: 'SUPER SAM', text: 'Objection! You haven\'t proven who prepared that poison or what relation the Count had to the deceased!', pose: 'supersam_sweat' },
  { speaker: 'JUEZ', text: 'The gravity of this revelation demands investigating the poison\'s origin and Suite 204\'s activities. Court is adjourned until the final day!', pose: 'judge_gavel', sfx: 'gavel' }
];

export const CASE4_TESTIMONY_4_EN: Testimony = {
  title: 'Testimony: The 11:15 PM Blast',
  witness: 'Maruja',
  bgm: 'cross_exam_allegro',
  statements: [
    {
      id: 'd2_t2_1',
      speaker: 'MARUJA',
      pose: 'maruja_idle',
      text: 'I was reclining in my Suite 303 chamber at exactly 11:15.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'Señorita Maruja, where were you exactly minutes before 11:15 PM?', pose: 'donramon_idle' },
        { speaker: 'MARUJA', text: 'I had just come up the main stairs after orange-blossom tea on the bar terrace. I entered Suite 303 and lay on the divan because a stubborn migraine afflicted me.', pose: 'maruja_abanico' },
        { speaker: 'SUPER SAM', text: 'Perfect location to witness the gunshot firsthand!', pose: 'supersam_point' }
      ]
    },
    {
      id: 'd2_t2_2',
      speaker: 'MARUJA',
      pose: 'maruja_idle',
      text: 'The blast was terrifying; the vibration shook hard the wall sharing pipes with 304.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'You say the vibration shook the wall. What room element trembled hardest?', pose: 'donramon_idle' },
        { speaker: 'MARUJA', text: 'The heating radiator! It\'s wrought iron and rang like a cathedral bell when the blast hit.', pose: 'maruja_nerviosa' },
        { speaker: 'DEFENSA', text: '(The wrought-iron radiator... connected in a straight vertical line with the floor below.)', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'd2_t2_3',
      speaker: 'MARUJA',
      pose: 'maruja_idle',
      text: 'I know the metallic ring of a .38 revolver; the sound was born directly inside the adjoining room.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'You know a .38\'s ring... Did the blast travel freely through air or echo with encapsulated metallic resonance?', pose: 'donramon_idle' },
        { speaker: 'MARUJA', text: 'What fine hearing you have, counselor... Now that I think, it sounded with a hollow metallic rumble, as if the barrel fired inside an iron bell.', pose: 'maruja_coqueta' },
        { speaker: 'SUPER SAM', text: 'Acoustic poetry! A shot is a shot, Your Honor!', pose: 'supersam_slam', sfx: 'desk_slam' }
      ]
    },
    {
      id: 'd2_t2_4',
      speaker: 'MARUJA',
      pose: 'maruja_idle',
      text: 'If the shot sounded at that exact second, the killer had to be inside pulling the trigger.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'Señorita Maruja, did you see the shooter inside 304 pulling the trigger with your own eyes?', pose: 'donramon_idle' },
        { speaker: 'MARUJA', text: 'I didn\'t need to look, counselor... The blast was so deafening and shook so close to my dividing wall that any living soul would swear the bullet came from that chamber. Where else could it have been?', pose: 'maruja_abanico' },
        { speaker: 'DEFENSA', text: '(That\'s the master trick... If the detonation seems to come from the room, everyone assumes the killer was inside pulling the trigger.)', pose: 'donramon_idle' }
      ],
      contradiction: {
        evidence: ['plano_hotel'],
        pointTarget: PLANO_POINT_EN,
        successDialogue: T4_PLANO_EN,
        followUp: { evidence: ['casquillo_fogueo'], successDialogue: T4_CASQUILLO_EN }
      }
    }
  ]
};
