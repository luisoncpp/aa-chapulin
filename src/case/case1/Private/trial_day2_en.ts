// @Architecture(descriptionShort="English Case 1 day 2 opening and Alma Negra's testimony", type="data", icon="layers")
/**
 * Case 1, Day 2 — Opening with a person `openingPresent` (§12.1) and
 * Testimony 1, Alma Negra (§12.2).
 */

import type { DialogueLine, OpeningPresent, Testimony } from '../../../types/index.js';
import { CASE1_CALL_ALMA_NEGRA_EN, CASE1_CALL_TRIPASECA_D2_T2_EN } from './witness_calls_en.js';

export const CASE1_DAY2_INTRO_EN: DialogueLine[] = [
  { bg: 'assets/bg_waiting_room.webp', furniture: 'none', speaker: 'NARRADOR', text: 'August 30, 2:00 PM. High Court - Waiting Room.', bgm: 'trial' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_gavel', text: 'The hearing resumes.', sfx: 'gavel', bgm: 'trial' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_idle', text: 'Your Honor, the prosecution maintains its accusation in full and asks that this trial end today.' },
  { bg: 'assets/bg_defense.webp', speaker: 'DEFENSA', pose: 'donramon_idle', text: '(He has the bag back on his shoulder. Brand new, at that.)' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_neutral', text: 'Yesterday this court asked for two things: how the thief got in, and how the weapon got out.' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_thinking', text: 'The defense asks to call a witness of its own. This is the first time in this trial.' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_neutral', text: 'Before allowing it, this court needs to know whom counsel intends to call, and why that person is fit to testify.' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'CHAPULIN', pose: 'chapulin_point', text: 'Don Ramón! That answer is not a piece of evidence, it is a person!' }
];

export const CASE1_DAY2_OPENING_PRESENT_EN: OpeningPresent = {
  profileTarget: ['perfil_almanegra'],
  prompt: 'Whom does the defense call, and why can that person testify?',
  successDialogue: CASE1_CALL_ALMA_NEGRA_EN
};

const CASE1_D2_T1_SUCCESS_EN: DialogueLine[] = [
  { speaker: 'DEFENSA', text: '¡PROTESTO!', sfx: 'desk_slam', cutin: 'objection_protesto', pose: 'donramon_slam', bgm: 'objection' },
  { speaker: 'DEFENSA', text: 'Don Alma Negra, with all respect: your round was not secret. It was written down.', pose: 'donramon_point' },
  { speaker: 'ALMA NEGRA', text: 'Of course it is written down! In my notebook!', pose: 'almanegra_shock' },
  { speaker: 'DEFENSA', text: 'In your notebook, yes. And where does your notebook spend the night?', pose: 'donramon_idle' },
  { speaker: 'ALMA NEGRA', text: '...Hanging from a nail. In the booth.', pose: 'almanegra_sweat' },
  { speaker: 'DEFENSA', text: 'The booth by the entrance, Your Honor. Where everyone who buys a two-peso ticket walks past.', pose: 'donramon_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: '"Twenty forty-five: the forward hold. Twenty-one hundred: the after hold." In large letters, so he never slips.', pose: 'donramon_point' },
  { speaker: 'ALMA NEGRA', text: 'By a thousand devils!', pose: 'almanegra_shock' },
  { speaker: 'JUEZ', text: "Let the record show: any visitor to the museum could learn, word for word, the watchman's exact schedule.", sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'SUPER SAM', text: 'Objection! And what does that prove?! It proves the watchman is careless!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: 'It proves the thief knew what hour he would be alone. And that he did not guess it: he read it.', pose: 'donramon_point', updateProfile: 'perfil_almanegra' },
  { speaker: 'JUEZ', text: 'The court grants the point to the defense. But the important part is still missing: why that man was still in the gallery when the watchman arrived.', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: 'A thief with the piece in his hand runs. He does not crouch to pick up coins. Defense, do you have anything?', pose: 'judge_neutral' }
];

const CASE1_D2_T1_FOLLOWUP_EN: DialogueLine[] = [
  { speaker: 'DEFENSA', text: 'I have the catalogue card of the stolen piece, Your Honor. And the answer is in the line nobody read.', pose: 'donramon_idle', bgm: 'pursuit' },
  { speaker: 'DEFENSA', text: '"Golden Paralyzing Chicharra. Mounted on a resonance base."', pose: 'donramon_point' },
  { speaker: 'JUEZ', text: 'Explain yourself.', pose: 'judge_thinking' },
  { speaker: 'DEFENSA', text: 'That if you lift it off its base, it sounds. And whoever hears it goes stiff for about a minute. That is why it sat under glass and not under lock: the museum itself used it as an alarm.', pose: 'donramon_slam', sfx: 'desk_slam' },
  { speaker: 'NARRADOR', text: 'The Judge freezes with the gavel half raised.', sfx: 'chicharra' },
  { speaker: 'JUEZ', text: 'Are you telling this court that the thief paralysed himself?!', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'I am telling you he lifted it at five to nine and stood there, unable to move a finger, for a long minute.', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'And that in that minute a six-foot-three watchman came running in.', pose: 'donramon_idle' },
  { speaker: 'CHAPULIN', text: '¡Chanfle! He walked right into him just as the effect wore off!', pose: 'chapulin_panic' },
  { speaker: 'ALMA NEGRA', text: 'By a thousand devils. I thought I had arrived late... and I arrived right on time.', pose: 'almanegra_shock' },
  { speaker: 'DEFENSA', text: 'You arrived right on time, Don Alma Negra. That is the trouble with this whole story: everyone arrived right on time except my client.', pose: 'donramon_idle' },
  { speaker: 'JUEZ', text: 'The court now understands the sequence inside the gallery. What it does not understand is how that man reached the gallery.', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: 'The museum was locked with the only key in existence. Prosecution: explain the entry.', sfx: 'gavel', pose: 'judge_gavel' },
  ...CASE1_CALL_TRIPASECA_D2_T2_EN
];

export const CASE1_TESTIMONY_3_EN: Testimony = {
  title: 'Testimony: What I heard before I fell',
  witness: 'Alma Negra',
  bgm: 'cross_exam_moderato',
  statements: [
    {
      id: 'c1_d2t1_1',
      speaker: 'ALMA NEGRA',
      pose: 'almanegra_vendado',
      text: 'My round is mine and nobody else\'s. No one knows where I walk or at what hour. That is why not even the devil surprises me.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT! Not even the curator knows your round?', sfx: 'whoosh', cutin: 'objection_un_momento', pose: 'donramon_point' },
        { speaker: 'ALMA NEGRA', text: 'Not even the curator. A watchman who announces his round is a watchman of no use.', pose: 'almanegra_vendado' },
        { speaker: 'DEFENSA', text: 'And how do you keep it, from memory?', pose: 'donramon_idle' },
        { speaker: 'ALMA NEGRA', text: 'From memory and from order, deckhand. Forty years of watches do not fade.', pose: 'almanegra_vendado' },
        { speaker: 'DEFENSA', text: '(From memory. Right.)', pose: 'donramon_sweat' },
        { speaker: 'SUPER SAM', text: 'Excellent witness! A man of order! If only my agents were like that!', pose: 'supersam_point' }
      ],
      contradiction: {
        evidence: ['bitacora_ronda'],
        successDialogue: CASE1_D2_T1_SUCCESS_EN,
        followUp: {
          evidence: ['chicharra_oro'],
          prompt: 'Why could the thief not flee at once?',
          successDialogue: CASE1_D2_T1_FOLLOWUP_EN
        }
      }
    },
    {
      id: 'c1_d2t1_2',
      speaker: 'ALMA NEGRA',
      pose: 'almanegra_vendado',
      text: 'That night I was in the forward hold when I heard glass burst in the after hold.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT! What time did you hear the glass?', sfx: 'whoosh', cutin: 'objection_un_momento', pose: 'donramon_point' },
        { speaker: 'ALMA NEGRA', text: 'Five to nine. I know because I was five minutes from moving to the after hold.', pose: 'almanegra_vendado' },
        { speaker: 'JUEZ', text: 'Five minutes before you were due to enter gallery two?', pose: 'judge_thinking' },
        { speaker: 'ALMA NEGRA', text: 'Five minutes before, Your Honor. That is why it caught me running and not walking.', pose: 'almanegra_vendado' },
        { speaker: 'DEFENSA', text: '(Five minutes early. If the man inside meant to be in and out before nine, his clock failed him by a little.)', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'c1_d2t1_3',
      speaker: 'ALMA NEGRA',
      pose: 'almanegra_vendado',
      text: 'I ran to the broken case. It was dark; I could not make anyone out. I turned back towards the door to call for help and they struck me from behind.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT! You say you saw nothing. What did you feel, then?', sfx: 'whoosh', cutin: 'objection_un_momento', pose: 'donramon_point' },
        { speaker: 'ALMA NEGRA', text: 'What did I feel? The lump on my head, deckhand, what else would I feel?', pose: 'almanegra_shock' },
        { speaker: 'DEFENSA', text: 'Before the blow. On entering the gallery. Under your boots.', pose: 'donramon_idle' },
        { speaker: 'ALMA NEGRA', text: '...Glass. Glass crunched under my boots the moment I crossed the door.', pose: 'almanegra_vendado' },
        { speaker: 'DEFENSA', text: 'The moment you crossed the door?', pose: 'donramon_shock' },
        { speaker: 'ALMA NEGRA', text: 'The moment. Two steps in and I was already treading on glass.', pose: 'almanegra_vendado' },
        { speaker: 'DEFENSA', text: '(Two steps in. And the case is six metres from that door.)', pose: 'donramon_idle' },
        { speaker: 'CHAPULIN', text: '(The glass travelled a long way, Don Ramón!)', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: '(A long way and to the wrong side. Hold on to that, young man.)', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'And after treading on that glass?', pose: 'donramon_idle' },
        { speaker: 'ALMA NEGRA', text: 'I reached the display case. As I could see nobody, I turned back towards the door to call for help. That is when they put my lights out.', pose: 'almanegra_vendado' },
        { speaker: 'DEFENSA', text: '(He reached the pedestal and turned his back. That left the back of his head facing whoever was above him.)', pose: 'donramon_shock' }
      ]
    },
    {
      id: 'c1_d2t1_4',
      speaker: 'ALMA NEGRA',
      pose: 'almanegra_vendado',
      text: 'But I heard it. When they struck me, I heard money. Coins hitting the floor. A great pile of coins.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT! Tell me about those coins.', sfx: 'whoosh', cutin: 'objection_un_momento', pose: 'donramon_point' },
        { speaker: 'ALMA NEGRA', text: 'They fell, they rolled and they bounced, deckhand. And afterwards...', pose: 'almanegra_vendado' },
        { speaker: 'DEFENSA', text: 'Afterwards?', pose: 'donramon_idle' },
        { speaker: 'ALMA NEGRA', text: 'Afterwards somebody gathered them. One by one. I was flat on the floor with my ear to the boards and I heard him gather them, coin by coin, for a good while.', pose: 'almanegra_shock' },
        { speaker: 'NARRADOR', text: 'A murmur runs through the gallery.', bg: 'assets/bg_gallery_characters.webp', furniture: 'none', sfx: 'realization' },
        { speaker: 'JUEZ', text: 'Good gracious! The attacker stayed to pick coins off the floor with an unconscious man at his feet?', pose: 'judge_shock' },
        { speaker: 'ALMA NEGRA', text: 'With an unconscious man and with the door wide open, Your Honor. That one was in no hurry... or could not be.', pose: 'almanegra_vendado' },
        { speaker: 'DEFENSA', text: '(Or could not be.)', pose: 'donramon_idle' }
      ]
    }
  ]
};
