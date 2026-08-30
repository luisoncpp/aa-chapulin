// @Architecture(descriptionShort="English Case 3 day-3 Aniceto cornered booth testimony", type="data", icon="layers")
/**
 * Case 3 Trial Day 3 — Testimony 2 (English).
 */

import type { DialogueLine, Testimony } from '../../../types/index.js';

const T6_SUCCESS: DialogueLine[] = [
  { cutin: 'objection_toma_eso', speaker: 'DEFENSA', text: 'TAKE THAT!', sfx: 'whoosh', bgm: 'pursuit', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'Hermetic, you say!', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'XEVC\'s central cabin fan has been broken since AUGUST! All three booths record with the window wedged open with a wooden chock!', sfx: 'desk_slam', pose: 'donramon_slam' },
  { speaker: 'ANICETO', text: 'Th-that\'s an unimportant maintenance detail!', pose: 'aniceto_sweat' },
  { speaker: 'DEFENSA', text: 'It\'s the detail that will cost you twenty years! Because with the window open, EVERYTHING the plaza speakers say bleeds into the recording.', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'And on this cartridge, under the scream, you can clearly hear the notice about the boy with the big cheeks!', sfx: 'desk_slam', pose: 'donramon_slam' },
  { speaker: 'JUEZ', text: 'The 9:40 PM notice!', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'The scream two thousand people heard was recorded at nine-forty! And at nine-forty Señor Barriga was in the plaza, alive, looking for a child!', pose: 'donramon_point' },
  { speaker: 'BARRIGA', text: 'It\'s true! I was with Mrs. Florinda yelling "Quicoooo"!', pose: 'barriga_shock' },
  { speaker: 'CHAPULIN', text: 'Then that voice on the cartridge is NOT Señor Barriga\'s! It\'s an imitation!', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'ANICETO', text: 'An imitation anyone could make! Anyone!', pose: 'aniceto_panic' },
  { speaker: 'SUPER SAM', text: 'Exactly! And the defendant had a booth all night!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'JUEZ', text: 'ORDER! This court demands the defense prove, with evidence, WHO recorded that voice.', pose: 'judge_gavel', sfx: 'gavel' }
];

export const CASE3_TESTIMONY_6_EN: Testimony = {
  title: 'Testimony: Twenty-Five Years of Voice',
  witness: 'Don Aniceto Rebollar',
  bgm: 'cross_exam_presto',
  statements: [
    {
      id: 'stmt6_1',
      speaker: 'ANICETO',
      pose: 'aniceto_sweat',
      text: 'Fine. Yes. I tied myself. I tied myself out of pure fear — I heard the killer in the hall and hid in the storeroom!',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'ANICETO', text: 'Have you never been afraid, Counselor? I\'m sixty-four with a beautiful voice. You don\'t fight with that.', pose: 'aniceto_sweat' },
        { speaker: 'SUPER SAM', text: '(Applause from the prosecution bench.)', pose: 'supersam_idle' }
      ]
    },
    {
      id: 'stmt6_2',
      speaker: 'ANICETO',
      pose: 'aniceto_sweat',
      text: 'But I recorded nothing: at 9:40 I was in Cabina A recording the sketch, locked in.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'ANICETO', text: 'And the window was closed, naturally. A radio booth is hermetic: that\'s why it\'s called a booth.', pose: 'aniceto_thinking' },
        { speaker: 'DEFENSA', text: '...Hermetic. Repeat that, please. For the record.', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'stmt6_2b',
      speaker: 'ANICETO',
      pose: 'aniceto_thinking',
      text: 'The window was closed. A radio booth is hermetic — that\'s why it\'s called a booth.',
      unlockedBy: 'stmt6_2',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'ANICETO', text: 'Soundproof. Sealed. Everyone in radio knows that.', pose: 'aniceto_terciopelo' }
      ],
      contradiction: {
        evidence: ['ventana_cabina', 'cartucho_corte'],
        successDialogue: T6_SUCCESS
      }
    },
    {
      id: 'stmt6_3',
      speaker: 'ANICETO',
      pose: 'aniceto_sweat',
      text: 'And besides, I don\'t know how to imitate anyone. I\'m a news announcer, not a circus clown.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'ANICETO', text: 'Diction, Counselor. Not theater.', pose: 'aniceto_thinking' }
      ]
    },
    {
      id: 'stmt6_4',
      speaker: 'ANICETO',
      pose: 'aniceto_sweat',
      text: 'The ID cartridge is loaded by the operator. That boy. Not me.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'ANICETO', text: 'Ñoño loads every cartridge. Ask him.', pose: 'aniceto_panic' },
        { speaker: 'BARRIGA', text: 'Don\'t you dare drag my son into this!', pose: 'barriga_enojado' },
        { speaker: 'JUEZ', text: 'Order! Order in the court!', pose: 'judge_gavel', sfx: 'gavel' }
      ]
    }
  ]
};
