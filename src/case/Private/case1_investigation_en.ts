// @Architecture(descriptionShort="Defines English museum and detention scenes, hotspots, and talk data", type="data", icon="layers")
/**
 * Case 1 Investigation Scenes Data - English (Museum & Detention)
 * Consumed by [[src/engine/Private/InvestigationController.ts]].
 */

import type { InvestigationScene, LocationId } from '../../types/index.js';

export const INVESTIGATION_SCENES_EN: Record<LocationId, InvestigationScene> = {
  // @Section(Museum Crime Scene - English)
  museum: {
    title: 'Museum of Antiques and Curiosities - Crime Scene',
    bg: 'assets/bg_museum.jpg',
    bgm: 'investigation',
    speaker: 'NARRADOR',
    intro: [
      { speaker: 'NARRADOR', text: 'August 21, 9:30 PM. Museum of Curiosities.' },
      { speaker: 'DEFENSA', text: "The legendary 'Golden Paralyzing Chicharra' has been stolen from its secure display case..." },
      { speaker: 'FLORINDA', text: 'Good heavens! What an outrage! All the neighborhood riff-raff is gossiping about this!', pose: 'florinda_angry', sfx: 'text' },
      { speaker: 'DEFENSA', text: '(Doña Florinda is the museum curator... and she seems even more furious than usual.)' }
    ],
    hotspots: [
      {
        id: 'pedestal',
        label: 'Shattered Display Case & Pedestal',
        x: 44, y: 22, w: 18, h: 48,
        dialogue: [
          { speaker: 'DEFENSA', text: 'The central display case is shattered to pieces... Glass shards are scattered outward.', sfx: 'realization' },
          { speaker: 'DEFENSA', text: 'Wait a second! What is this glowing at the base of the pedestal?', sfx: 'text' },
          { speaker: 'DEFENSA', text: "These are 'Pastillas de Chiquitolina'! Why would shrinking pills be dropped here near the ventilation duct?", sfx: 'realization', addEvidence: 'pastillas_chiquitolina' },
          { speaker: 'FLORINDA', text: 'Those pills were dropped by the suspect before fleeing!', pose: 'florinda_idle' }
        ]
      },
      {
        id: 'armor',
        label: 'Guard Alma Negra & Suit of Armor',
        x: 3, y: 25, w: 18, h: 50,
        dialogue: [
          { speaker: 'DEFENSA', text: 'Pirate Alma Negra, the museum guard, is sitting down holding an ice pack against his head.', sfx: 'text' },
          { speaker: 'DEFENSA', text: "Let's examine the paramedics' preliminary medical report...", sfx: 'text' },
          { speaker: 'DEFENSA', text: "'The subject presents severe cranial contusion caused by a dense metallic impact, likely heavy coins in a sack.'", sfx: 'realization', addEvidence: 'informe_medico' },
          { speaker: 'DEFENSA', text: '(A dense metallic impact? But the prosecution claims he was assaulted with a squeaky Chipote Chillón...)', sfx: 'text' }
        ]
      },
      {
        id: 'security_cam',
        label: 'Security Camera & Skylight',
        x: 58, y: 8, w: 15, h: 32,
        dialogue: [
          { speaker: 'DEFENSA', text: 'The front security camera captured a blurry photograph at exactly 9:00 PM.', sfx: 'text' },
          { speaker: 'DEFENSA', text: 'It shows someone in a red hood and antennae running... but something looks very strange on their chest.', sfx: 'realization', addEvidence: 'foto_crimen' },
          { speaker: 'DEFENSA', text: "(The chest emblem shows the letters 'HC' reversed. For what reason?)", sfx: 'text' }
        ]
      },
      {
        id: 'treasure_chest',
        label: 'Curiosity Chest & Oil Lantern',
        x: 74, y: 48, w: 22, h: 38,
        dialogue: [
          { speaker: 'DEFENSA', text: 'An antique wooden chest and an old oil lantern.', sfx: 'text' },
          { speaker: 'FLORINDA', text: 'That chest contained collectible pirate coins, but they are untouched! The thief was only after the Golden Chicharra.', pose: 'florinda_idle' }
        ]
      }
    ],
    talkOptions: [
      {
        id: 'about_crime',
        label: 'What happened to the Golden Chicharra?',
        dialogue: [
          { speaker: 'FLORINDA', text: 'I was just finishing watering the ferns when a thunderous crash shook the main hall!', pose: 'florinda_shock' },
          { speaker: 'FLORINDA', text: 'I rushed in and saw a man in red with a huge mallet leaping through the skylight.', pose: 'florinda_idle' },
          { speaker: 'DEFENSA', text: 'Were you able to see his face clearly?' },
          { speaker: 'FLORINDA', text: 'Of course! He had two yellow antennae twitching frantically. There is no doubt!', pose: 'florinda_angry' }
        ]
      },
      {
        id: 'about_suspect',
        label: 'About the detained suspect',
        dialogue: [
          { speaker: 'FLORINDA', text: "Prosecutor Super Sam arrived in three minutes shouting 'Time is money!' and ordered his immediate arrest.", pose: 'florinda_idle' },
          { speaker: 'FLORINDA', text: 'El Chapulín was trapped upside down inside an 18th-century parrot cage.', pose: 'florinda_idle' },
          { speaker: 'DEFENSA', text: '(Classic Chapulín... all his movements are cold and calculated.)' }
        ]
      }
    ]
  },

  // @Section(Detention Center Scene - English)
  detention: {
    title: 'Detention Center - Visitor Room',
    bg: 'assets/bg_detention.jpg',
    bgm: 'detention_center',
    speaker: 'CHAPULIN',
    intro: [
      { speaker: 'CHAPULIN', text: 'Oh! And now, who can defend me?!', pose: 'chapulin_panic', sfx: 'text' },
      { speaker: 'DEFENSA', text: 'None other than Licenciado Monchito! I mean... Don Ramón! I shall take your defense in court to save you from the clink and earn a few pesos!' },
      { speaker: 'CHAPULIN', text: 'Follow me, good guys! I mean... what a relief! I was already getting used to the bread and water diet.', pose: 'chapulin_idle' }
    ],
    hotspots: [
      {
        id: 'chapulin_spot',
        label: 'El Chapulín Colorado',
        x: 20, y: 15, w: 32, h: 60,
        dialogue: [
          { speaker: 'CHAPULIN', text: 'All my movements are cold and calculated... except when they lock me behind bars!', pose: 'chapulin_idle' },
          { speaker: 'DEFENSA', text: "El Chapulín hands you his 'Antenitas de Vinil' to use as evidence.", sfx: 'realization', addEvidence: 'antenitas_vinil' }
        ]
      },
      {
        id: 'phone_spot',
        label: 'Visitor Telephone',
        x: 76, y: 28, w: 14, h: 36,
        dialogue: [
          { speaker: 'DEFENSA', text: 'The visitor room telephone receiver.', sfx: 'text' },
          { speaker: 'CHAPULIN', text: 'I tried calling the firefighters, but the operator billed me in dollars. Must have been Super Sam!', pose: 'chapulin_panic' }
        ]
      },
      {
        id: 'table_spot',
        label: 'Steel Table & Squeaky Mallet',
        x: 35, y: 62, w: 50, h: 22,
        dialogue: [
          { speaker: 'DEFENSA', text: "On the table lies the 'Chipote Chillón' confiscated by the police.", sfx: 'text' },
          { speaker: 'DEFENSA', text: 'Examining it closely confirms it is entirely soft vinyl and hollow rubber.', sfx: 'chipote', addEvidence: 'chipote_chillon' }
        ]
      }
    ],
    talkOptions: [
      {
        id: 'chapulin_story',
        label: 'What were you doing at the museum?',
        dialogue: [
          { speaker: 'CHAPULIN', text: 'I was enjoying a ham sandwich when my vinyl antennae started vibrating at 8:45 PM.', pose: 'chapulin_idle' },
          { speaker: 'CHAPULIN', text: 'They detected enemy presence! So I teleported at once... well, actually I took a cab.', pose: 'chapulin_idle' },
          { speaker: 'CHAPULIN', text: 'When I arrived, the display was already smashed and Alma Negra was unconscious. Somebody set me up!', pose: 'chapulin_panic' },
          { speaker: 'DEFENSA', text: "The 'Antenitas de Vinil' have an alert timestamp: 8:45 PM.", sfx: 'realization', addEvidence: 'antenitas_vinil' }
        ]
      },
      {
        id: 'chapulin_weapon',
        label: 'Did you attack the guard with your mallet?',
        dialogue: [
          { speaker: 'CHAPULIN', text: 'Me?! Never! The Chipote Chillón is a noble instrument to defend the innocent!', pose: 'chapulin_slam', sfx: 'desk_slam' },
          { speaker: 'CHAPULIN', text: 'See for yourself! It is made of soft rubber and inflatable plastic.', pose: 'chapulin_idle' },
          { speaker: 'DEFENSA', text: 'When squeezed, it lets out a silly squeak: SQUEEEAK!', sfx: 'chipote', addEvidence: 'chipote_chillon' },
          { speaker: 'DEFENSA', text: '(It is physically impossible to fracture a skull with this... I have solid proof!)', sfx: 'realization' }
        ]
      }
    ]
  }
};
