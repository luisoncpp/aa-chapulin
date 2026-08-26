// @Architecture(descriptionShort="Defines English courtroom intro and witness testimonies 1 and 2", type="data", icon="layers")
/**
 * Case 1 Courtroom Trial Script - English (Intro, Testimony 1 & Testimony 2)
 * Consumed by [[src/engine/Private/TrialController.ts]].
 */

import type { DialogueLine, Testimony } from '../../types/index.js';

// @Section(Courtroom Intro Dialogue - English)
export const TRIAL_INTRO_EN: DialogueLine[] = [
  { bg: 'assets/bg_judge.jpg', speaker: 'JUEZ', pose: 'judge_gavel', text: 'Order in the court! The high court session is now in session.', sfx: 'gavel', bgm: 'trial' },
  { bg: 'assets/bg_judge.jpg', speaker: 'JUEZ', pose: 'judge_neutral', text: 'Is the prosecution ready to present its charges?' },
  { bg: 'assets/bg_courtroom.jpg', speaker: 'SUPER SAM', pose: 'supersam_slam', text: 'Time is money, Your Honor! The prosecution is more than ready to wrap up this case in record time.', sfx: 'desk_slam' },
  { bg: 'assets/bg_courtroom.jpg', speaker: 'SUPER SAM', pose: 'supersam_point', text: 'The defendant was caught red-handed with the assault weapon at the scene of the crime. I demand a guilty verdict in 3 minutes!' },
  { bg: 'assets/bg_defense.jpg', speaker: 'DEFENSA', pose: 'donramon_slam', text: 'The defense is ready, Your Honor! And we shall prove the innocence of El Chapulín Colorado!', sfx: 'desk_slam' },
  { bg: 'assets/bg_judge.jpg', speaker: 'JUEZ', pose: 'judge_neutral', text: 'Very well. Let the prosecution call its key witness to the stand.' }
];

// @Section(Testimony 1: Assault Weapon - English)
export const TESTIMONY_1_EN: Testimony = {
  title: 'Witness Testimony: The Museum Assault',
  witness: 'El Tripaseca',
  bgm: 'cross_exam_moderato',
  statements: [
    {
      id: 'stmt1_1',
      speaker: 'TRIPASECA',
      pose: 'tripaseca_smug',
      text: 'I am as innocent as a newborn dove. At 9:00 PM I was having a peaceful dinner downtown.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'At which restaurant exactly were you dining, Mr. Tripaseca?', pose: 'donramon_idle' },
        { speaker: 'TRIPASECA', text: "Uh... at 'El Chavo' churro shop. I ate 40 churros... I do not have to explain myself to you!", pose: 'tripaseca_sweat' }
      ]
    },
    {
      id: 'stmt1_2',
      speaker: 'TRIPASECA',
      pose: 'tripaseca_smug',
      text: 'I saw with my own eyes how El Chapulín knocked out guard Alma Negra with a vicious blow from his lethal Chipote Chillón.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'You claim you witnessed the impact clearly?', pose: 'donramon_idle' },
        { speaker: 'TRIPASECA', text: 'Of course! That red hammer is a weapon of mass destruction capable of breaking steel beams!', pose: 'tripaseca_smug' }
      ],
      contradiction: {
        evidence: ['chipote_chillon', 'informe_medico'],
        successDialogue: [
          { cutin: 'objection_protesto', speaker: 'DEFENSA', text: 'OBJECTION!', sfx: 'whoosh', bgm: 'objection', pose: 'donramon_point' },
          { speaker: 'DEFENSA', text: 'Excuse me, said Monchito! Your testimony falls apart completely, Mr. Tripaseca!', pose: 'donramon_point' },
          { speaker: 'SUPER SAM', text: 'What?! What on earth is defense counsel talking about?', pose: 'supersam_point' },
          { speaker: 'DEFENSA', text: "Observe the 'Chipote Chillón' carefully! It is made of soft, hollow vinyl! When struck, it does this...", sfx: 'chipote', pose: 'donramon_idle' },
          { speaker: 'JUEZ', text: 'What a charming sound! Reminds me of the squeaky toys I buy for my grandson.', pose: 'judge_thinking' },
          { speaker: 'DEFENSA', text: 'The Medical Report proves Alma Negra suffered severe head trauma from an impact with DENSE METAL COINS!', sfx: 'realization', pose: 'donramon_slam' },
          { speaker: 'TRIPASECA', text: 'Gulp! W-wait a second!', pose: 'tripaseca_sweat' },
          { speaker: 'SUPER SAM', text: 'Wait! Nobody mentioned the guard had such a thick skull!', pose: 'supersam_slam', sfx: 'desk_slam' },
          { speaker: 'JUEZ', text: 'Indeed... it is impossible for that toy mallet to knock out a seasoned pirate. Witness, explain this at once!', pose: 'judge_gavel', sfx: 'gavel' }
        ]
      }
    },
    {
      id: 'stmt1_3',
      speaker: 'TRIPASECA',
      pose: 'tripaseca_smug',
      text: 'Then the thief smashed the display locks with a crowbar and took off with the Golden Chicharra.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'Was there not an alarm system protecting the display case?', pose: 'donramon_idle' },
        { speaker: 'TRIPASECA', text: 'To a crook like him, alarms are nothing!', pose: 'tripaseca_smug' }
      ]
    }
  ]
};

// @Section(Testimony 2: Escape Route - English)
export const TESTIMONY_2_EN: Testimony = {
  title: 'Witness Testimony: The Escape Route',
  witness: 'El Tripaseca',
  bgm: 'cross_exam_allegro',
  statements: [
    {
      id: 'stmt2_1',
      speaker: 'TRIPASECA',
      pose: 'tripaseca_smug',
      text: 'Alright, maybe the guard tripped on a coin... but I saw the thief enter through the front door and smash the display from the outside!',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'According to police records, the front door was locked from the inside.', pose: 'donramon_idle' },
        { speaker: 'TRIPASECA', text: 'Well, he must have picked the lock with his superhero tricks!', pose: 'tripaseca_sweat' }
      ],
      contradiction: {
        evidence: ['pastillas_chiquitolina'],
        successDialogue: [
          { cutin: 'objection_protesto', speaker: 'DEFENSA', text: 'OBJECTION!', sfx: 'whoosh', bgm: 'objection', pose: 'donramon_point' },
          { speaker: 'DEFENSA', text: 'Nobody picked any lock or shattered the glass from the outside!', pose: 'donramon_point' },
          { speaker: 'DEFENSA', text: "On the display floor we found traces of 'Pastillas de Chiquitolina' right by the ventilation duct!", sfx: 'realization', pose: 'donramon_idle' },
          { speaker: 'JUEZ', text: 'Pastillas de Chiquitolina? The famous pills that shrink a person to mouse size?', pose: 'judge_shock' },
          { speaker: 'DEFENSA', text: 'Precisely! The real thief took a pill, shrank down, crawled through the duct grill, and broke the glass from INSIDE.', pose: 'donramon_slam', sfx: 'desk_slam' },
          { speaker: 'TRIPASECA', text: 'Aaaargh! Curse my rotten luck!', pose: 'tripaseca_panic' },
          { speaker: 'SUPER SAM', text: 'Objection! Even if magic pills were used, the security photo shows Chapulín fleeing toward the exit!', pose: 'supersam_point' }
        ]
      }
    },
    {
      id: 'stmt2_2',
      speaker: 'TRIPASECA',
      pose: 'tripaseca_sweat',
      text: 'The security photo taken at 9:00 PM proves everything! You can see El Chapulín running toward the museum exit!',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'Are you certain about the direction the suspect was running?', pose: 'donramon_idle' },
        { speaker: 'TRIPASECA', text: 'He was heading straight for the main street to disappear into the night!', pose: 'tripaseca_smug' }
      ],
      contradiction: {
        evidence: ['foto_crimen'],
        successDialogue: [
          { cutin: 'objection_toma_eso', speaker: 'DEFENSA', text: 'TAKE THAT!', sfx: 'whoosh', bgm: 'pursuit', pose: 'donramon_point' },
          { speaker: 'DEFENSA', text: "Look closely at the suspect's chest in the security photograph!", pose: 'donramon_point' },
          { speaker: 'JUEZ', text: "Wait a moment... the yellow heart does not say 'CH'... it says 'HC'!", pose: 'judge_shock' },
          { speaker: 'DEFENSA', text: 'The camera did not photograph the subject directly! It captured his reflection in the large Venetian mirror in the corridor.', sfx: 'realization', pose: 'donramon_idle' },
          { speaker: 'DEFENSA', text: 'Which means the thief was NOT running toward the main exit, but toward the private loading dock!', pose: 'donramon_slam', sfx: 'desk_slam' },
          { speaker: 'TRIPASECA', text: 'NOOOOOOOOO! How did you find out about my getaway van in the alley?!', pose: 'tripaseca_breakdown' }
        ]
      }
    }
  ]
};
