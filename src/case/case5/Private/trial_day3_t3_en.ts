// @Architecture(descriptionShort="Case 5 day-3 Berrondo testimony, English", type="data", icon="layers")
/**
 * Case 5 Trial Day 3 — Testimony 8, Lic. Berrondo under investigation (spec §15.4), English.
 */

import type { DialogueLine, Testimony } from '../../../types/index.js';
import { CASE5_D3_T3_ACUSE_SUCCESS_EN, CASE5_D3_T3_TOMO_SUCCESS_EN } from './trial_day3_success_berrondo_en.js';

const MOMENTO: DialogueLine = {
  speaker: 'DEFENSA',
  text: 'HOLD IT!',
  cutin: 'objection_un_momento',
  sfx: 'whoosh',
  pose: 'chapulin_point'
};

export const CASE5_TESTIMONY_8_EN: Testimony = {
  title: 'Testimony: What I did on December 4',
  witness: 'Lic. Berrondo (under investigation)',
  bgm: 'cross_exam_grave',
  statements: [
    {
      id: 'c5_d3t3_1',
      speaker: 'BERRONDO',
      pose: 'berrondo_idle',
      text: 'I appear as a person under investigation, by order of this court, and I do not oppose it.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'You truly do not oppose it?', pose: 'chapulin_point' },
        { speaker: 'BERRONDO', text: 'No, counselor. A person under investigation who refuses to testify is handing the court half the sentence.', pose: 'berrondo_definicion' },
        { speaker: 'BERRONDO', text: 'Besides, I have spent twenty-seven years telling my clients to testify. It would be inconsistent.', pose: 'berrondo_idle' },
        { speaker: 'DEFENSA', text: '(Not one drop of sweat. Not one.)', pose: 'chapulin_idle' }
      ]
    },
    {
      id: 'c5_d3t3_2',
      speaker: 'BERRONDO',
      pose: 'berrondo_idle',
      text: 'On December 4 I entered through the experts\' wicket at 16:05 and received a visitor badge.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'Why do you need a badge if you have a credential?', pose: 'chapulin_point' },
        { speaker: 'BERRONDO', text: 'The badge is the building\'s, counselor. The credential is from the bankruptcy proceeding.', pose: 'berrondo_definicion' },
        { speaker: 'BERRONDO', text: 'They are different things and it pays not to confuse them: one is issued by the Archive and the other by a judge.', pose: 'berrondo_idle' },
        { speaker: 'DEFENSA', text: 'And which of the two opens the basement?', pose: 'chapulin_idle' },
        { speaker: 'BERRONDO', text: 'The credential. The badge only serves for the reading rooms upstairs.', pose: 'berrondo_idle' },
        { speaker: 'DEFENSA', text: '(...)', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: '(Hold on to that, Chapulin. Hold on to all of it.)', pose: 'chapulin_idle' }
      ]
    },
    {
      id: 'c5_d3t3_3',
      speaker: 'BERRONDO',
      pose: 'berrondo_idle',
      text: 'I went down to the basement, opened crate nine, reviewed it, closed it, and sealed the lid with my rubric and that day\'s date.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'How long does it take you to review that crate?', pose: 'chapulin_point' },
        { speaker: 'BERRONDO', text: 'A long half hour. You must count cards by sampling and check against the inventory.', pose: 'berrondo_idle' },
        { speaker: 'DEFENSA', text: 'From 4:10 to 4:40.', pose: 'chapulin_idle' },
        { speaker: 'BERRONDO', text: 'Approximately.', pose: 'berrondo_idle' },
        { speaker: 'DEFENSA', text: 'And from 4:40 to 4:50, what did you do?', pose: 'chapulin_point' },
        { speaker: 'BERRONDO', text: 'Climbed the service stair and walked to the wicket. That is one hundred twenty steps and I am seventy-one.', pose: 'berrondo_idle' },
        { speaker: 'DEFENSA', text: '(Ten minutes for one hundred twenty steps. That is reasonable. So reasonable it is infuriating.)', pose: 'chapulin_idle' }
      ]
    },
    {
      id: 'c5_d3t3_4',
      speaker: 'BERRONDO',
      pose: 'berrondo_idle',
      text: 'At 16:50 I returned the badge at the wicket and left through the loading courtyard, where I keep my automobile.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'Did anyone see you leave through the courtyard?', pose: 'chapulin_point' },
        { speaker: 'BERRONDO', text: 'No, counselor. The gate has no guard booth.', pose: 'berrondo_idle' },
        { speaker: 'DEFENSA', text: 'So nobody can attest to your exit.', pose: 'chapulin_point' },
        { speaker: 'BERRONDO', text: 'Nobody. As nobody can attest to yours when you leave your house.', pose: 'berrondo_idle' },
        { speaker: 'BERRONDO', text: 'The law does not require a witness to leave, counselor. Only to arrive.', pose: 'berrondo_definicion' },
        { speaker: 'JUEZ', text: '...The court confirms that is exactly right and regrets that it is.', pose: 'judge_thinking' }
      ]
    },
    {
      id: 'c5_d3t3_5',
      speaker: 'BERRONDO',
      pose: 'berrondo_idle',
      text: 'I never went up to the first floor. I did not know the deceased was in that building until I read it in Sunday\'s newspaper.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'You never went up to the first floor?', pose: 'chapulin_point' },
        { speaker: 'BERRONDO', text: 'Never. I had nothing to do upstairs.', pose: 'berrondo_idle' },
        { speaker: 'DEFENSA', text: 'And you learned it Sunday from the newspaper?', pose: 'chapulin_idle' },
        { speaker: 'BERRONDO', text: 'From the second section. Four paragraphs and a very bad photograph.', pose: 'berrondo_idle' },
        { speaker: 'BERRONDO', text: 'And I will confess one thing, counselor, since we are here: I was glad it happened in the Archive.', pose: 'berrondo_idle' },
        { speaker: 'DEFENSA', text: 'You were GLAD?!', pose: 'chapulin_panic' },
        { speaker: 'BERRONDO', text: 'Glad it happened in the Archive and not in my basement. A homicide in a deposit under my charge would have cost me the syndicate.', pose: 'berrondo_idle' },
        { speaker: 'BERRONDO', text: 'It is an ugly reaction. But it is mine and I will not dress it up on the stand.', pose: 'berrondo_idle' },
        { speaker: 'JUEZ', text: '...The court would like to add something to that testimony and cannot find what.', pose: 'judge_thinking' },
        { speaker: 'BERRONDO', text: 'If you allow me, Your Honor, there is one more thing I should add.', pose: 'berrondo_idle' },
        { speaker: 'JUEZ', text: 'The court wants to hear it! Witness, add it to your testimony.', sfx: 'gavel', pose: 'judge_gavel' },
        { speaker: 'NARRADOR', text: 'A new statement has been added to the testimony.', sfx: 'realization' }
      ]
    },
    {
      id: 'c5_d3t3_6',
      speaker: 'BERRONDO',
      pose: 'berrondo_idle',
      text: '...And if this court wants to know why I did not know, the answer is simple: because nobody told me.',
      unlockedBy: 'c5_d3t3_5',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'Nobody told you?', pose: 'chapulin_point' },
        { speaker: 'BERRONDO', text: 'Nobody, counselor. Not the Archive, not the prosecution, not the court clerk.', pose: 'berrondo_idle' },
        { speaker: 'BERRONDO', text: 'And it seems to me a notable negligence, because I had the right to be present at that diligence.', pose: 'berrondo_idle' },
        { speaker: 'DEFENSA', text: 'You had the right to be present?', pose: 'chapulin_panic' },
        { speaker: 'BERRONDO', text: 'Right and duty. Estate goods are not displayed without their depositary.', pose: 'berrondo_definicion' },
        { speaker: 'BERRONDO', text: 'If someone had told me, I would have been there at five in the afternoon, sitting beside that poor man.', pose: 'berrondo_idle' },
        { speaker: 'BERRONDO', text: 'And perhaps nothing would have happened.', pose: 'berrondo_idle' },
        { speaker: 'NARRADOR', text: 'Chapulin goes still.', bgm: 'suspense' },
        { speaker: 'DEFENSA', text: '(...He just said nobody told him.)', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: '(And he said it himself, without my asking, to look good.)', pose: 'chapulin_panic' }
      ],
      contradiction: {
        evidence: ['acuse_notificacion'],
        successDialogue: CASE5_D3_T3_ACUSE_SUCCESS_EN,
        followUp: {
          evidence: ['tomo_caido'],
          prompt: 'Where did the book used to kill that man come from?',
          successDialogue: CASE5_D3_T3_TOMO_SUCCESS_EN
        }
      }
    }
  ]
};
