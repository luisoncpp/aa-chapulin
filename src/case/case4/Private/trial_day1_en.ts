// @Architecture(descriptionShort="English Case 4 day-1 intro and Sargento testimony", type="data", icon="layers")
/**
 * Case 4 Trial Day 1 — Opening and Testimony 1 (English).
 */

import type { DialogueLine, Testimony } from '../../../types/index.js';
import { CASE4_FOTO_POINT_TARGET } from './trial_day1_success.js';

export const CASE4_TRIAL_INTRO_EN: DialogueLine[] = [
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_gavel', text: 'Silence in this court! The preliminary hearing against Gordon Botija Pompa y Pompa for aggravated homicide and robbery is now in session.', sfx: 'gavel', bgm: 'trial' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_slam', text: 'Time is money, Your Honor! This trial needs no more than ten minutes of deliberation!', sfx: 'desk_slam' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_point', text: 'The defendant was caught red-handed inside a room locked from within with a brass chain, gunpowder on his hands, and the victim\'s wallet in his pocket. I demand conviction before Wall Street closes!' },
  { bg: 'assets/bg_defense.webp', speaker: 'DEFENSA', pose: 'donramon_slam', text: 'OBJECTION! ¡Con permisito, dijo Monchito!', sfx: 'desk_slam' },
  { bg: 'assets/bg_defense.webp', speaker: 'DEFENSA', pose: 'donramon_point', text: 'The defense will prove that this so-called sealed room was a magic trick staged by a third party to frame a humble plumber!' }
];

const FOTO_POINT_EN = {
  ...CASE4_FOTO_POINT_TARGET,
  promptQuestion: 'Point to the graphic detail that disproves the drinks were freshly served at 11:15 PM!'
};

const T1_POINT_SUCCESS_EN: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: 'Your Honor, look closely at the bucket on the side table!', sfx: 'whoosh', bgm: 'objection', pose: 'donramon_point' },
  { speaker: 'JUEZ', text: 'The metal bucket? But it only contains liquid...', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'Exactly! Room-temperature water! Not a single sliver of ice left!', sfx: 'desk_slam', pose: 'donramon_slam', updateEvidence: 'foto_crimen' },
  { speaker: 'SUPER SAM', text: 'What?! What do ice cubes have to do with a hot lead bullet?!', pose: 'supersam_sweat' },
  { speaker: 'DEFENSA', text: 'A bucket of ice cubes takes two to three hours to melt completely at room temperature! If service arrived at 11:15 PM, by 11:30 PM the ice would still be almost intact!', pose: 'donramon_point' },
  { speaker: 'JUEZ', text: 'That reasoning is irrefutable... The bucket was brought to that room long before eleven at night.', pose: 'judge_thinking' },
  { speaker: 'SUPER SAM', text: 'Objection! Pure thermodynamic nonsense!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'SUPER SAM', text: 'Even if the water were lukewarm, the official police report fixes 11:15 PM as the exact minute of death by firearm! Against a sealed police report, ice cubes have no probative value!', pose: 'supersam_point' },
  { speaker: 'JUEZ', text: 'The Prosecutor raises a formal point of first order. The preliminary report enjoys public faith regarding time of death. Counselor Monchito, do you have documentary proof that formally discredits the hour on that report?', pose: 'judge_thinking' },
  { speaker: 'DEFENSA', text: 'Of course, Your Honor! The authorities\' own cover sheet discredits the medical certainty of that time!', cutin: 'objection_protesto', sfx: 'desk_slam', pose: 'donramon_slam' }
];

const T1_FOLLOWUP_EN: DialogueLine[] = [
  { cutin: 'objection_toma_eso', speaker: 'DEFENSA', text: 'Examine carefully the cover sheet of the police report drafted by the Sergeant!', sfx: 'whoosh', bgm: 'objection', pose: 'donramon_point' },
  { speaker: 'JUEZ', text: 'The preliminary police report?', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'Read the "Time of Crime" box with a magnifying glass! The Sergeant noted 11:15 PM based solely on the blast heard from the hallway through the steam pipes. No forensic doctor was present certifying vital signs, body temperature, or rigor mortis at that hour!', pose: 'donramon_slam', sfx: 'desk_slam' },
  { speaker: 'SARGENTO', text: 'It\'s true, mi Licenciado... With the scare of the blast in the pipes, we assumed the fatal shot had just sounded. We had no forensic examiner at the hotel to examine the body...', pose: 'pazguato_sweat', updateEvidence: 'informe_policial' },
  { speaker: 'DEFENSA', text: 'So 11:15 PM is the time of a sound in the building, not the medical time Cuajinais died!', pose: 'donramon_point' },
  { speaker: 'SUPER SAM', text: 'What?!', pose: 'supersam_sweat' },
  { speaker: 'JUEZ', text: 'Good heavens! The police cover sheet lacks biological support. The time of murder is formally in doubt.', pose: 'judge_thinking' },
  { speaker: 'SUPER SAM', text: 'Irrelevant! Even if the medical time is pending, nobody could enter to shoot before or after because the door had the chain latched from inside!', pose: 'supersam_slam', sfx: 'desk_slam' }
];

export const CASE4_TESTIMONY_1_EN: Testimony = {
  title: 'Testimony: The Discovery in Suite 304',
  witness: 'El Sargento',
  bgm: 'cross_exam_moderato',
  statements: [
    {
      id: 'd1_t1_1',
      speaker: 'SARGENTO',
      pose: 'pazguato_idle',
      text: 'At exactly 11:15 PM we heard a gunshot from the third floor.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'How can you be so sure of the exact minute, Sergeant?', pose: 'donramon_idle' },
        { speaker: 'SARGENTO', text: 'Because I checked my regulation wristwatch the moment the metallic blast rang through the pipes!', pose: 'pazguato_saludo' },
        { speaker: 'DEFENSA', text: 'So 11:15 PM is when you heard the noise... not necessarily when the shot occurred.', pose: 'donramon_idle' },
        { speaker: 'SUPER SAM', text: 'Objection! Time is money! Gunshot noise and time of shooting are the same thing here and in Manhattan!', pose: 'supersam_slam', sfx: 'desk_slam' }
      ]
    },
    {
      id: 'd1_t1_2',
      speaker: 'SARGENTO',
      pose: 'pazguato_idle',
      text: 'Going up with management, we found Suite 304\'s door locked from within with the security chain.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'Did the door open at all, or was it completely sealed?', pose: 'donramon_idle' },
        { speaker: 'SARGENTO', text: 'It opened barely four centimeters... just enough to see the golden chain bolt jammed in the brass rail.', pose: 'pazguato_sweat' },
        { speaker: 'DEFENSA', text: 'Four centimeters... enough to slip in a hand... or a thread.', pose: 'donramon_idle' },
        { speaker: 'SUPER SAM', text: 'Nobody has paper-thin hands to squeeze through four centimeters, counselor!', pose: 'supersam_point' }
      ]
    },
    {
      id: 'd1_t1_3',
      speaker: 'SARGENTO',
      pose: 'pazguato_idle',
      text: 'After forcing entry, we saw the lifeless body and a bucket of freshly served wine beside the corpse.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'And you claim the wine and ice were freshly placed on the table?', pose: 'donramon_idle' },
        { speaker: 'SARGENTO', text: 'Absolutely! The official photograph I took at 11:30 PM documents the scene intact fifteen minutes after the crime.', pose: 'pazguato_saludo' },
        { speaker: 'JUEZ', text: 'The Sergeant claims the drink service was fresh... This must go on the record.', pose: 'judge_thinking' }
      ]
    },
    {
      id: 'd1_t1_3b',
      speaker: 'SARGENTO',
      pose: 'pazguato_sweat',
      text: 'The scene was fresh at 11:30 PM: the bucket with ice and wine had just been served in the suite.',
      unlockedBy: 'd1_t1_3',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'Sergeant, I insist: did you carefully observe the ice cubes in that bucket before assuming they were freshly served?', pose: 'donramon_sweat' },
        { speaker: 'SARGENTO', text: 'Well, mi Licenciado... With the commotion, the fireplace, and Botija in the hamper, I saw the shiny metal bucket and assumed the cubes had just left the freezer.', pose: 'pazguato_sweat' },
        { speaker: 'SUPER SAM', text: 'Time is money! An ice bucket is an ice bucket! Stop chasing water cubes and present a contradiction if you have one!', pose: 'supersam_slam', sfx: 'desk_slam' }
      ],
      contradiction: {
        evidence: ['foto_crimen'],
        pointTarget: FOTO_POINT_EN,
        successDialogue: T1_POINT_SUCCESS_EN,
        followUp: { evidence: ['informe_policial'], successDialogue: T1_FOLLOWUP_EN }
      }
    },
    {
      id: 'd1_t1_4',
      speaker: 'SARGENTO',
      pose: 'pazguato_idle',
      text: 'Hidden in the laundry hamper was the defendant, with stained hands and the victim\'s wallet.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'Did you check whether money was missing or the wallet was open when they caught Botija?', pose: 'donramon_idle' },
        { speaker: 'SARGENTO', text: 'The wallet was closed. I opened it before the prosecutor and it held two hundred pesos in legal tender... intact.', pose: 'pazguato_saludo' },
        { speaker: 'DEFENSA', text: '(Two hundred pesos whole... A thief would have taken the bills before hiding.)', pose: 'donramon_idle' },
        { speaker: 'SUPER SAM', text: 'Don\'t try to justify it! Botija had no time to empty it because we arrived in ten seconds!', pose: 'supersam_point' }
      ]
    }
  ]
};
