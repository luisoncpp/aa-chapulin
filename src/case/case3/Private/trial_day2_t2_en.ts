// @Architecture(descriptionShort="English Case 3 day-2 Aniceto storeroom victim testimony", type="data", icon="layers")
/**
 * Case 3 Trial Day 2 — Testimony 2 (English).
 */

import type { DialogueLine, Testimony } from '../../../types/index.js';

const T4_SUCCESS: DialogueLine[] = [
  { cutin: 'objection_toma_eso', speaker: 'DEFENSA', text: 'TAKE THAT!', sfx: 'whoosh', bgm: 'pursuit', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'Those footsteps could not have been Doctor Chapatín\'s!', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'This is his clinic consultation log! September 15, 10:50 PM: cardiotonic applied, patient N.B., charge: NOTHING!', sfx: 'desk_slam', pose: 'donramon_slam' },
  { speaker: 'SUPER SAM', text: 'A paper written by the defendant himself! Objection!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: 'Then look at his paper bag — the one the sergeant lifted from the scene! Empty ampule and freshly used syringe! My client had just injected someone in the alley, Mr. Prosecutor, not cracked a safe!', pose: 'donramon_point' },
  { speaker: 'NONO', text: 'IT WAS ME!', sfx: 'realization', pose: 'nono_llorando' },
  { speaker: 'NARRADOR', text: '(Young Ñoño stands in the gallery, face soaked.)' },
  { speaker: 'NONO', text: 'It was me! I went down to the alley at ten forty-five because I couldn\'t breathe! The doctor\'s been injecting me in secret for a year without charging so my daddy won\'t learn my heart is bad!', pose: 'nono_llorando' },
  { speaker: 'CHAPATIN', text: 'Imprudent boy! That was professional secrecy!', pose: 'chapatin_enojado' },
  { speaker: 'CHAPATIN', text: '...And lower your voice, or your blood pressure will spike.', pose: 'chapatin_conmovido' },
  { speaker: 'JUEZ', text: 'Then the defendant was OUTSIDE the building during the body\'s transfer!', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'Let\'s recap, Your Honor. Señor Barriga was struck in the office. Wheeled at 10:45. And at 10:45 my client was in the alley, syringe in one hand and a patient in the other.', pose: 'donramon_idle' },
  { speaker: 'SUPER SAM', text: 'G-grrrk!', pose: 'supersam_sweat' },
  { speaker: 'ANICETO', text: 'I\'m glad, Counselor. Truly. But then... whoever attacked me is still free, and neither you nor I know who.', pose: 'aniceto_terciopelo' },
  { speaker: 'JUEZ', text: 'The defense has dismantled the charge... but without an alternate culprit, this court cannot acquit.', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: 'I order the storeroom searched and cartridge three located. Session adjourned twenty-four hours!', pose: 'judge_gavel', sfx: 'gavel' },
  { speaker: 'SUPER SAM', text: 'Sergeant Pazguato! If that cartridge isn\'t here tomorrow, I dock your paycheck, your bonus, AND the torta!', pose: 'supersam_point' },
  { speaker: 'PAZGUATO', text: '...Yes, my prosecutor. Even if I have to climb into the trash can whole.', pose: 'pazguato_decidido' }
];

export const CASE3_TESTIMONY_4_EN: Testimony = {
  title: 'Testimony: What I Suffered in the Storeroom',
  witness: 'Don Aniceto Rebollar',
  bgm: 'cross_exam_allegro',
  statements: [
    {
      id: 'stmt4_1',
      speaker: 'ANICETO',
      pose: 'aniceto_terciopelo',
      text: 'At 10:55 I went down to the storeroom for the anniversary records.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'ANICETO', text: 'Twenty-five years of anniversaries. Someone has to fetch the discs.', pose: 'aniceto_terciopelo' }
      ]
    },
    {
      id: 'stmt4_2',
      speaker: 'ANICETO',
      pose: 'aniceto_terciopelo',
      text: 'Someone struck me from behind, tied me, and gagged me. I saw nothing.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'ANICETO', text: 'They gagged me with my own silk handkerchief — the one I always wear. They took it and stuffed it in my mouth. What humiliation.', pose: 'aniceto_sweat' },
        { speaker: 'DEFENSA', text: '(His own handkerchief? Sergeant... are those bonds still lying in the storeroom?)', pose: 'donramon_idle' },
        { speaker: 'PAZGUATO', text: 'Uy. Yes. Nobody picked them up.', pose: 'pazguato_sweat' }
      ]
    },
    {
      id: 'stmt4_2b',
      speaker: 'ANICETO',
      pose: 'aniceto_sweat',
      text: 'They gagged me with my own silk handkerchief from around my neck.',
      unlockedBy: 'stmt4_2',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'ANICETO', text: 'Twenty-five years of diction... reduced to a gag.', pose: 'aniceto_sweat' }
      ]
    },
    {
      id: 'stmt4_3',
      speaker: 'ANICETO',
      pose: 'aniceto_thinking',
      text: 'But I heard the footsteps: short, shuffling... footsteps of a very elderly person.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'ANICETO', text: 'I know elderly steps. I\'ve narrated enough funerals.', pose: 'aniceto_terciopelo' }
      ],
      contradiction: {
        evidence: ['receta_nono', 'bolsa_papel'],
        successDialogue: T4_SUCCESS
      }
    },
    {
      id: 'stmt4_4',
      speaker: 'ANICETO',
      pose: 'aniceto_terciopelo',
      text: 'When the sergeant found me I was still tied. I nearly suffocated, Your Honor.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'SUPER SAM', text: 'Objection! Show respect for the second victim of this monster!', pose: 'supersam_slam', sfx: 'desk_slam' },
        { speaker: 'JUEZ', text: 'Counselor, mind your tone.', pose: 'judge_gavel', sfx: 'gavel' },
        { speaker: 'DEFENSA', text: 'Forgive me, Don Aniceto. Truly.', pose: 'donramon_idle' }
      ]
    }
  ]
};
