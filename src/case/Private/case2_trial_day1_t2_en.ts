// @Architecture(descriptionShort="English Case 2 day-1 Peterete crowbar testimony", type="data", icon="layers")
/**
 * Case 2 Trial Day 1 — Testimony 2 (English).
 */

import type { DialogueLine, Testimony } from '../../types/index.js';

const T2_SUCCESS: DialogueLine[] = [
  { cutin: 'objection_toma_eso', speaker: 'DEFENSA', text: 'TAKE THAT!', sfx: 'whoosh', bgm: 'pursuit', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'Mr. Peterete, your lies collapse under their own weight!', pose: 'donramon_point' },
  { speaker: 'PETERETE', text: 'L-lies? Watch your words, shyster!', pose: 'peterete_sweat' },
  { speaker: 'DEFENSA', text: 'The Vault Report states categorically that the bolts suffered NO crowbar damage!', sfx: 'desk_slam', pose: 'donramon_slam' },
  { speaker: 'DEFENSA', text: 'The lock was opened smoothly with a MASTER KEY. And the crowbar has NAVY-BLUE paint from the generator box.', pose: 'donramon_point' },
  { speaker: 'CHAPULIN', text: 'They planted the crowbar in Chómpiras\'s hands while he slept from a sleeping gas!', pose: 'chapulin_point' },
  { speaker: 'JUEZ', text: 'Sleeping gas?! This changes a crude theft into a premeditated conspiracy!', pose: 'judge_shock' },
  { speaker: 'SUPER SAM', text: 'Objection! Who had the master key, and where is the sedative? Without that this is speculation!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'JUEZ', text: 'I adjourn this session for 24 hours so the defense may investigate the key and the sedative!', pose: 'judge_gavel', sfx: 'gavel' }
];

export const CASE2_TESTIMONY_2_EN: Testimony = {
  title: 'Testimony: Forcing the Safe',
  witness: 'El Peterete',
  bgm: 'cross_exam_allegro',
  statements: [
    {
      id: 'stmt2_1',
      speaker: 'PETERETE',
      pose: 'peterete_smug',
      text: 'A clever clock observation, counselor. But the physical facts are indisputable.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'Where were you at 9:15 PM?', pose: 'donramon_idle' },
        { speaker: 'PETERETE', text: 'At the post office, dispatching urgent parcels. The mailman can confirm it.', pose: 'peterete_thinking' }
      ]
    },
    {
      id: 'stmt2_2',
      speaker: 'PETERETE',
      pose: 'peterete_smug',
      text: 'Chómpiras used the metal crowbar to force the steel latch and rip out the Golden Chanfle.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'PETERETE', text: 'What other explanation is there? They found him with the tool in his hand.', pose: 'peterete_smug' }
      ],
      contradiction: { evidence: ['informe_boveda', 'palanca_rota'], successDialogue: T2_SUCCESS }
    },
    {
      id: 'stmt2_3',
      speaker: 'PETERETE',
      pose: 'peterete_smug',
      text: 'When we entered after the alarm, I saw the pry marks with my own eyes: the steel yielded to brute force.',
      pressText: [
        { speaker: 'CHAPULIN', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'chapulin_point' },
        { speaker: 'CHAPULIN', text: 'Pry marks? My antennae did not detect a scratch on that safe!', pose: 'chapulin_idle' },
        { speaker: 'PETERETE', text: 'Fine scratches, high-tensile steel, you red pest!', pose: 'peterete_smug' }
      ],
      contradiction: { evidence: ['informe_boveda', 'palanca_rota'], successDialogue: T2_SUCCESS }
    },
    {
      id: 'stmt2_4',
      speaker: 'PETERETE',
      pose: 'peterete_smug',
      text: 'There is no other way that armored door could open without leaving traces.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'PETERETE', text: 'Short of cheap magic, counselor. And this hacienda has security, not magic.', pose: 'peterete_smug' }
      ],
      contradiction: { evidence: ['informe_boveda', 'palanca_rota'], successDialogue: T2_SUCCESS }
    }
  ]
};
