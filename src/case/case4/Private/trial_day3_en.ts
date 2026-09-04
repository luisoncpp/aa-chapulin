// @Architecture(descriptionShort="English Case 4 day-3 intro and Rufino testimony", type="data", icon="layers")
/**
 * Case 4 Trial Day 3 — Opening and Testimony 5 (English).
 */

import type { DialogueLine, OpeningPresent, Testimony } from '../../../types/index.js';

const OPENING_PRESENT_EN: DialogueLine[] = [
  { cutin: 'objection_toma_eso', speaker: 'DEFENSA', text: 'Read this telegram receipt found in the victim\'s locker!', sfx: 'whoosh', bgm: 'objection', pose: 'donramon_point' },
  { speaker: 'JUEZ', text: '"Count of Montemayor: pay my $50,000 for Cleopatra\'s necklace or the police will know everything. Room 304."', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'Cuajinais was not the victim of a casual robbery by a plumber! He came to the Grand Hotel to extort Rufino Rufián for the Marselle Museum heist!', sfx: 'desk_slam', pose: 'donramon_slam' },
  { speaker: 'RUFINO', text: 'Slander from an ignorant plebeian! Where is your proof I left the gaming salon?', pose: 'rufino_sweat' }
];

const T5_BOLETA_EN: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: 'Lie with more elegance, fake count! Look at the back of this croupier-certified baccarat slip!', sfx: 'whoosh', bgm: 'objection', pose: 'donramon_point' },
  { speaker: 'RUFINO', text: 'What?!', pose: 'rufino_panic' },
  { speaker: 'DEFENSA', text: 'From 10:30 to 11:30 PM there are sixty minutes... but at 11:10 PM you requested a FIFTEEN-minute recess for fresh air!', sfx: 'desk_slam', pose: 'donramon_slam' },
  { speaker: 'JUEZ', text: 'A sealed recess between 11:10 and 11:25 PM!', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'In those fifteen minutes you went down to Suite 204 at 11:12 PM to light the slow fuse in the pipe; at 11:14 PM you went to the third floor, saw the door ajar from Botija, passed fishing line through the gap and pulled the chain bolt to lock the room from outside; and rushed back to baccarat before the blank cartridge detonated in the pipe at 11:15 PM!', pose: 'donramon_point' },
  { speaker: 'SUPER SAM', text: 'What a scheme!', pose: 'supersam_sweat' },
  { speaker: 'RUFINO', text: 'Nonsense! Even if I took fifteen minutes recess, that proves nothing! The deceased died before ten according to your coroner. I never went to the third floor or touched the hotel\'s rustic freight elevator to transport anyone to Suite 304!', pose: 'rufino_sweat' },
  { speaker: 'SUPER SAM', text: 'Yes! No record shows the Count set foot in Suite 304!', pose: 'supersam_point' },
  { speaker: 'DEFENSA', text: 'Well, the hotel machinery has mathematical memory and does not forget the kilograms of a corpse!', cutin: 'objection_protesto', sfx: 'desk_slam', pose: 'donramon_slam' }
];

const T5_REGISTRO_EN: DialogueLine[] = [
  { cutin: 'objection_toma_eso', speaker: 'DEFENSA', text: 'Examine the service freight elevator\'s automatic log, Your Honor!', sfx: 'whoosh', bgm: 'objection', pose: 'donramon_point' },
  { speaker: 'JUEZ', text: 'The freight elevator tonnage log?', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'At 10:20 PM, the elevator was activated from the second floor — where Rufino\'s Suite 204 is — marking a heavy load of 175 kilograms until stopping on the third floor!', pose: 'donramon_point' },
  { speaker: 'RUFINO', text: '175 kilograms?!', pose: 'rufino_panic' },
  { speaker: 'DEFENSA', text: 'Let\'s do clear math! Rufino weighs 75 kilos, his large English leather trunk weighs 20 kilos... and Cuajinais\'s lifeless body weighed exactly 80 kilos! 75 plus 20 plus 80 equals exactly 175 kilograms transported to Suite 304!', sfx: 'desk_slam', pose: 'donramon_slam' },
  { speaker: 'JUEZ', text: 'Good heavens! And what happened five minutes later?', pose: 'judge_thinking' },
  { speaker: 'DEFENSA', text: 'At 10:25 PM, the elevator rises from the third floor straight to the roof... but marking only 95 kilograms! Rufino at 75 kilos and the empty trunk at 20 kilos. The corpse\'s 80 kilos were unloaded on the third floor!', pose: 'donramon_point' },
  { speaker: 'SUPER SAM', text: 'What an equation! The human bundle stayed in 304!', pose: 'supersam_sweat' },
  { speaker: 'RUFINO', text: 'Lie! A calumny of numbers! Nobody saw me in that suite or touching that thug!', pose: 'rufino_panic' }
];

export const CASE4_DAY3_INTRO_EN: DialogueLine[] = [
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_gavel', text: 'The final plenary session opens! Mr. Rufino Rufián, guest of Suite 204, takes the stand.', sfx: 'gavel', bgm: 'trial' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'RUFINO', pose: 'rufino_smug', text: 'I protest vigorously against this outrage to my lineage and reputation. My stay at baccarat from 10:30 to 11:30 PM has been certified by management.' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_slam', text: 'Time is money! We cannot trouble a noble investor without proven motive!', sfx: 'desk_slam' },
  { bg: 'assets/bg_defense.webp', speaker: 'DEFENSA', pose: 'donramon_slam', text: 'The defense will prove the supposed count is a dangerous swindler and the victim came to the hotel to collect a deadly debt!', cutin: 'objection_protesto', sfx: 'desk_slam', bgm: 'objection' }
];

export const CASE4_DAY3_OPENING_PRESENT_EN: OpeningPresent = {
  evidence: ['nota_amenaza'],
  successDialogue: OPENING_PRESENT_EN
};

export const CASE4_TESTIMONY_5_EN: Testimony = {
  title: 'Testimony: My Ironclad Baccarat Alibi',
  witness: 'Rufino Rufián',
  bgm: 'cross_exam_presto',
  statements: [
    {
      id: 'd3_t1_1',
      speaker: 'RUFINO',
      pose: 'rufino_monocle',
      text: 'I absolutely do not know that scarred thug or his alleged extortions.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'You claim you did not know the deceased Señor Gómez or his alias El Cuajinais?', pose: 'donramon_idle' },
        { speaker: 'RUFINO', text: 'Please, counselor. A Count of Montemayor only keeps company with plenipotentiary ministers and European duchesses. I do not deal with street scoundrels.', pose: 'rufino_monocle' },
        { speaker: 'SUPER SAM', text: 'A gentleman of high society! An infamous accusation against international capital!', pose: 'supersam_point' }
      ]
    },
    {
      id: 'd3_t1_2',
      speaker: 'RUFINO',
      pose: 'rufino_smug',
      text: 'My night passed uninterrupted at the baccarat table from 10:30 to 11:30 PM before witnesses of honor.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'Do you swear under oath you did not leave your baccarat seat for a single second that entire hour?', pose: 'donramon_idle' },
        { speaker: 'RUFINO', text: 'Of course. An aristocrat of my rank never interrupts a lucky streak on the green felt. Sixty continuous minutes of clean play from 10:30 to 11:30 PM before diplomats and the croupier himself.', pose: 'rufino_smug' },
        { speaker: 'DEFENSA', text: '(Sixty continuous minutes without leaving the green felt... We\'ll see if the official betting records agree.)', pose: 'donramon_idle' }
      ],
      contradiction: {
        evidence: ['boleta_baccarat'],
        successDialogue: T5_BOLETA_EN,
        followUp: { evidence: ['registro_montacargas'], successDialogue: T5_REGISTRO_EN }
      }
    },
    {
      id: 'd3_t1_3',
      speaker: 'RUFINO',
      pose: 'rufino_monocle',
      text: 'I never touched the staff service freight elevator; my status forbids operating rustic machinery.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'You say you did not use the freight elevator... but that luggage lift has direct stops by your Suite 204 and Suite 304.', pose: 'donramon_idle' },
        { speaker: 'RUFINO', text: 'Nonsense! Operating greasy levers is work for peasants and lackeys. A noble does not soil lace cuffs with service machinery.', pose: 'rufino_monocle' },
        { speaker: 'DEFENSA', text: '(Unless you need to move an eighty-kilo bundle without crossing anyone on the stairs...)', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'd3_t1_4',
      speaker: 'RUFINO',
      pose: 'rufino_smug',
      text: 'At 11:15 PM, when the detonation was heard, I was betting on the green felt.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'At exactly 11:15 PM, what were you doing?', pose: 'donramon_idle' },
        { speaker: 'RUFINO', text: 'I was doubling my bet on the bank and collecting ivory chips. If the building creaked through the pipes, it barely earned a disdainful glance from my distinguished companions.', pose: 'rufino_smug' },
        { speaker: 'SUPER SAM', text: 'Bulletproof iron alibi, Your Honor!', pose: 'supersam_slam', sfx: 'desk_slam' }
      ]
    }
  ]
};
