// @Architecture(descriptionShort="English Case 4 day-2 intro and residue testimony", type="data", icon="layers")
/**
 * Case 4 Trial Day 2 — Opening and Testimony 3 (English).
 */

import type { DialogueLine, Testimony } from '../../../types/index.js';

export const CASE4_DAY2_INTRO_EN: DialogueLine[] = [
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_gavel', text: 'Court is back in session. The prosecution bases its case on gunpowder residue on the defendant\'s hands marking him as the shooter at 11:15 PM.', sfx: 'gavel', bgm: 'trial' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_point', text: 'Yes, Your Honor! Gunpowder residue on both hands! Gordon Botija fired the murder weapon at 11:15 at night!' },
  { bg: 'assets/bg_defense.webp', speaker: 'DEFENSA', pose: 'donramon_slam', text: 'OBJECTION! I stand with Necaxa and scientific truth!', cutin: 'objection_protesto', sfx: 'desk_slam', bgm: 'objection' }
];

const T3_RESIDUOS_EN: DialogueLine[] = [
  { cutin: 'objection_toma_eso', speaker: 'DEFENSA', text: 'What Botija has on his hands contains not a single grain of gunpowder, Mr. Prosecutor!', sfx: 'whoosh', bgm: 'objection', pose: 'donramon_point' },
  { speaker: 'SUPER SAM', text: 'What?!', pose: 'supersam_sweat' },
  { speaker: 'DEFENSA', text: 'It\'s coal dust, soot, and sulfur from the central boiler fireplace he was cleaning on Don Cecilio\'s orders before going to the third floor!', sfx: 'desk_slam', pose: 'donramon_slam', updateEvidence: 'residuos_manos' },
  { speaker: 'SUPER SAM', text: 'But... but the gunshot at 11:15 PM! The whole hotel heard the blast!', pose: 'supersam_sweat' },
  { speaker: 'DEFENSA', text: 'And here the prosecution\'s farce collapses!', sfx: 'desk_slam', bgm: 'suspense', pose: 'donramon_point' }
];

const T3_FORENSE_EN: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: 'The victim, El Cuajinais, did NOT die at 11:15 at night!', sfx: 'whoosh', bgm: 'objection', pose: 'donramon_point' },
  { speaker: 'JUEZ', text: 'WHAT DID YOU SAY?!', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'The forensic pathology report rules the shot was fired into a cold corpse. The real cause of death was cellular asphyxia from potassium cyanide ingested before ten at night!', sfx: 'desk_slam', pose: 'donramon_slam', updateEvidence: 'informe_policial' },
  { speaker: 'SUPER SAM', text: 'OH NOOO! Two hours earlier?! My fees dropped fifty percent!', pose: 'supersam_breakdown', sfx: 'damage' },
  { speaker: 'JUEZ', text: 'Good heavens! If the victim was already a corpse at ten at night... what on earth was the gunshot blast everyone heard at 11:15 PM?', pose: 'judge_thinking' }
];

export const CASE4_TESTIMONY_3_EN: Testimony = {
  title: 'Testimony: Botija\'s Stained Hands',
  witness: 'Super Sam y El Sargento',
  bgm: 'cross_exam_moderato',
  statements: [
    {
      id: 'd2_t1_1',
      speaker: 'SUPER SAM',
      pose: 'supersam_point',
      text: 'The physical evidence is indisputable: the defendant was inside the crime room.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'One moment, Mr. Prosecutor! Señor Botija was not in that suite for pleasure or crime. He went on Don Cecilio\'s orders to purge the radiator steam pipe!', pose: 'donramon_idle' },
        { speaker: 'SUPER SAM', text: 'Objection! Time is money! Work orders are no license to murder clients! Being in the room at the second of the crime is 99% of guilt!', pose: 'supersam_slam', sfx: 'desk_slam' },
        { speaker: 'JUEZ', text: 'It is true Botija had a maintenance order, but the prosecution claims he seized the moment to pull the trigger.', pose: 'judge_thinking' }
      ]
    },
    {
      id: 'd2_t1_2',
      speaker: 'SUPER SAM',
      pose: 'supersam_point',
      text: 'The black dust on his palms and sleeves is ballistic gunpowder produced by firing a firearm.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'On what scientific basis does the prosecution claim that black stain on Botija\'s hands is ballistic gunpowder?', pose: 'donramon_sweat' },
        { speaker: 'SUPER SAM', text: 'Simple logic, defense! Black dust stuck to skin and sleeves after a gunshot. What else could it be? In New York we don\'t waste time with microscopes when the clue jumps out!', pose: 'supersam_point' },
        { speaker: 'SARGENTO', text: 'Well, mi Licenciado... Don Sam ordered me to draft the cover sheet based on a simple eyeball inspection...', pose: 'pazguato_sweat' }
      ],
      contradiction: {
        evidence: ['residuos_manos'],
        successDialogue: T3_RESIDUOS_EN,
        followUp: { evidence: ['informe_forense'], successDialogue: T3_FORENSE_EN }
      }
    },
    {
      id: 'd2_t1_3',
      speaker: 'SARGENTO',
      pose: 'pazguato_idle',
      text: 'The chest wound caused instant death the moment the detonation was heard.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'Sergeant Pazguato, is the police completely sure the chest shot ended Cuajinais\'s life?', pose: 'donramon_idle' },
        { speaker: 'SARGENTO', text: 'Well... Señor Gómez had the hole in his shirt and dried blood. Hearing the blast at 11:15 PM and finding him stiff, we assumed the lead killed him... but the central lab was slow sending tissue analyses...', pose: 'pazguato_sweat' },
        { speaker: 'SUPER SAM', text: 'Irrelevant! A bullet to the heart kills anyone! Don\'t distract us with anatomy textbooks!', pose: 'supersam_slam', sfx: 'desk_slam' }
      ]
    },
    {
      id: 'd2_t1_4',
      speaker: 'SUPER SAM',
      pose: 'supersam_point',
      text: 'The murder was consummated at 11:15 PM; any other theory is an intolerable waste of dollars.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'Prosecutor Sam, convicting an innocent man to save ten minutes of trial would be a judicial monstrosity.', pose: 'donramon_slam', sfx: 'desk_slam' },
        { speaker: 'SUPER SAM', text: 'Time is money, defense! Circumstantial evidence is crushing! Fresh corpse, locked room, black hands, and gunshot blast at 11:15 PM! I demand immediate verdict before my stocks fall!', pose: 'supersam_point' }
      ]
    }
  ]
};
