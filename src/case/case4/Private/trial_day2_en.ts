// @Architecture(descriptionShort="English Case 4 day-2 intro and residue testimony", type="data", icon="layers")
/**
 * Case 4 Trial Day 2 — Opening and Testimony 3 (English).
 */

import type { DialogueLine, Testimony } from '../../../types/index.js';

export const CASE4_DAY2_INTRO_EN: DialogueLine[] = [
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_gavel', text: 'Court is back in session. The prosecution bases its case on gunpowder residue on the defendant\'s hands marking him as the shooter at 11:15 PM.', sfx: 'gavel', bgm: 'trial' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_point', text: 'Yes, Your Honor! Gunpowder residue on both hands! Gordon Botija fired the murder weapon at 11:15 at night!' },
  { bg: 'assets/bg_defense.webp', speaker: 'DEFENSA', pose: 'donramon_slam', text: 'OBJECTION! I stand with Necaxa and scientific truth!', cutin: 'objection_protesto', sfx: 'desk_slam' }
];

const T3_RESIDUOS_EN: DialogueLine[] = [
  { cutin: 'objection_toma_eso', speaker: 'DEFENSA', text: 'What Botija has on his hands contains not a single grain of gunpowder, Mr. Prosecutor!', sfx: 'whoosh', bgm: 'objection', pose: 'donramon_point' },
  { speaker: 'SUPER SAM', text: 'What?!', pose: 'supersam_sweat' },
  { speaker: 'DEFENSA', text: 'The laboratory chemical analysis proves it\'s coal dust, soot, and sulfur from the central boiler fireplace he was cleaning on Don Cecilio\'s orders before going to the third floor!', sfx: 'desk_slam', pose: 'donramon_slam', updateEvidence: 'residuos_manos' },
  { speaker: 'SUPER SAM', text: 'But... but the gunshot at 11:15 PM! The whole hotel heard the blast and the victim died instantly from that bullet!', pose: 'supersam_sweat' },
  { speaker: 'DEFENSA', text: 'And here the prosecution\'s second farce collapses!', sfx: 'desk_slam', bgm: 'suspense', pose: 'donramon_point' }
];

const T3_FORENSE_EN: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: 'The victim, El Cuajinais, did NOT die at 11:15 at night!', sfx: 'whoosh', bgm: 'objection', pose: 'donramon_point' },
  { speaker: 'JUEZ', text: 'WHAT DID YOU SAY?!', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'The forensic pathology report rules the shot was fired into a cold corpse. The real cause of death was cellular asphyxia from potassium cyanide ingested before ten at night!', sfx: 'desk_slam', pose: 'donramon_slam', updateEvidence: 'informe_policial' },
  { speaker: 'SUPER SAM', text: 'OH NOOO! Two hours earlier?! My fees dropped fifty percent!', pose: 'supersam_breakdown', sfx: 'damage' },
  { speaker: 'JUEZ', text: 'Good heavens! If the victim was already a corpse at ten at night... what on earth was the gunshot blast everyone heard at 11:15 PM?', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: 'Silence in court! The official autopsy leaves no room for doubt: El Cuajinais was no longer breathing at ten at night. But this confronts us with a baffling mystery... If the victim was already a corpse before ten, what kind of phenomenon produced the gunshot blast that shook the entire hotel at 11:15 PM?', pose: 'judge_gavel', sfx: 'gavel' },
  { speaker: 'SUPER SAM', text: 'The prosecution does not surrender to forensic technicalities! I immediately call to the stand an eyewitness who heard the shot with her own ears pressed against the dividing wall: the distinguished lady from Suite 303, Señorita Maruja, known as "The Hotel Siren"!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'MARUJA', text: 'Good afternoon to everyone present... with the permission of the honorable magistrate and the distinguished gentleman of the defense. I come gladly to narrate the shock that rattled my bedchamber.', pose: 'maruja_coqueta' },
  { speaker: 'JUEZ', text: 'Witness, testify under oath what you witnessed in your bedroom on the night in question.', pose: 'judge_neutral' }
];

export const CASE4_TESTIMONY_3_EN: Testimony = {
  title: 'Testimony: Botija\'s Stained Hands',
  witness: 'Sergeant Pazguato',
  bgm: 'cross_exam_moderato',
  statements: [
    {
      id: 'd2_t1_1',
      speaker: 'SARGENTO',
      pose: 'pazguato_idle',
      text: 'The defendant Gordon Botija was found inside the suite with his hands and clothes coated in black gunpowder residue.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'Sergeant Pazguato, does that document mention why my client was in that suite? Señor Botija did not go for pleasure, but under Don Cecilio\'s strict order to purge the radiator steam pipe!', pose: 'donramon_point' },
        { speaker: 'SARGENTO', text: 'Weeell... yes, counselor, he carried his work wrench... but Don Sam ordered me to emphasize that being caught inside at the second of the blast is more than enough to convict him.', pose: 'pazguato_sweat' },
        { speaker: 'SUPER SAM', text: 'Objection! Time is money! Plumbing work orders are no license to liquidate guests! Being in the room at the second of the crime is 99% of guilt!', pose: 'supersam_slam', sfx: 'desk_slam' },
        { speaker: 'JUEZ', text: 'It is true Botija had a maintenance order, but the prosecution maintains he seized the opportunity to pull the trigger.', pose: 'judge_thinking' }
      ]
    },
    {
      id: 'd2_t1_2',
      speaker: 'SARGENTO',
      pose: 'pazguato_idle',
      text: 'Those residues prove indisputably that Botija fired the murder weapon at 11:15 PM.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'Sergeant, under what scientific criteria did you record in the official report that the soot on Botija\'s palms and sleeves is ballistic gunpowder?', pose: 'donramon_sweat' },
        { speaker: 'SARGENTO', text: 'Oh, counselor! The honest truth is Don Sam pressured me to draft the cover sheet based on a simple eyeball inspection... without waiting for central lab expert tests!', pose: 'pazguato_sweat' },
        { speaker: 'SUPER SAM', text: 'Simple logic, defense! Time is money! Black dust stuck to skin and sleeves after a gunshot. What else could it be? On Wall Street we don\'t waste precious dollars on microscopes when the clue is obvious!', pose: 'supersam_point' },
        { speaker: 'DEFENSA', text: '(Here is the crack! An eyeball inspection with no scientific basis.)', pose: 'donramon_point' }
      ],
      contradiction: {
        evidence: ['residuos_manos'],
        successDialogue: T3_RESIDUOS_EN,
        followUp: {
          evidence: ['informe_forense'],
          prompt: 'What proof reveals the real cause and time of death?',
          successDialogue: T3_FORENSE_EN
        }
      }
    },
    {
      id: 'd2_t1_3',
      speaker: 'SARGENTO',
      pose: 'pazguato_idle',
      text: 'The chest gunshot wound caused instant death the moment the blast was heard.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'Sergeant Pazguato, is the police empowered to assert that the chest bullet was what instantly struck down Señor Gómez at 11:15 PM?', pose: 'donramon_point' },
        { speaker: 'SARGENTO', text: 'Well... Señor Gómez had the hole in his shirt and coagulated blood. Hearing the blast at 11:15 PM and finding him stiff, Don Sam forced me to record instant death in the minutes... but the central forensic lab had not yet forwarded tissue pathological analysis!', pose: 'pazguato_sweat' },
        { speaker: 'SUPER SAM', text: 'Irrelevant! Time is money! A bullet to the heart kills anyone in a microsecond! Do not try to divert the jury with medical treatises!', pose: 'supersam_slam', sfx: 'desk_slam' }
      ],
      contradiction: {
        evidence: ['informe_forense'],
        successDialogue: T3_FORENSE_EN
      }
    },
    {
      id: 'd2_t1_4',
      speaker: 'SARGENTO',
      pose: 'pazguato_sweat',
      text: 'Therefore, death occurred at 11:15 PM and any other theory is an intolerable waste of time.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'Sergeant, do you dare claim under oath that the homicide occurred at 11:15 PM solely because of the Prosecutor\'s urgency to close the case?', pose: 'donramon_slam', sfx: 'desk_slam' },
        { speaker: 'SARGENTO', text: 'Oh, Holy Mother! I only read what Don Sam wrote with his golden pen... he warned me that if I delayed he would dock my paycheck and bonus!', pose: 'pazguato_sweat' },
        { speaker: 'SUPER SAM', text: 'Time is money, defense! Circumstantial evidence is crushing! Fresh corpse, locked room, black hands, and gunshot blast at 11:15 PM! I demand an immediate guilty verdict before the Wall Street bell rings!', pose: 'supersam_point' }
      ]
    }
  ]
};
