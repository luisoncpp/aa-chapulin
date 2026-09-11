// @Architecture(descriptionShort="English Case 0 lobby scenes before and during trial", type="data", icon="layers")
import type { DialogueLine } from '../../../types/index.js';

const WAITING_ROOM = 'assets/bg_waiting_room.webp';
const JUDGE = 'assets/bg_judge.webp';

export const CASE0_LOBBY_INTRO_EN: DialogueLine[] = [
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'NARRADOR', text: 'July 13, 9:45 AM. High Court - Waiting Room.', bgm: 'suspense' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'TORIBIO', pose: 'toribio_llorando', text: 'Counselor! Counselor Monchito! Please tell me the truth. Are they sending me to the prison islands?' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'DEFENSA', pose: 'donramon_idle', text: 'Easy, Toribio. Do not get discouraged before we start. With Counselor Monchito for the defense, you are in the best hands...' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'DEFENSA', pose: 'donramon_sweat', text: '(Truth is, my knees are shaking... First time I have entered a courthouse in a tie, and not because my landlord summoned me.)' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'TORIBIO', pose: 'toribio_nervioso', text: 'But I am innocent! I only went to the ice shop for the block for my popsicles. When I came back, Don Nazario was already lying there like a sack!' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'DEFENSA', pose: 'donramon_idle', text: 'I believe you, kid. But in there is a blond prosecutor who charges by the word and says he can put you away in eleven minutes.' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'TORIBIO', pose: 'toribio_llorando', text: 'Oh, my dear mother! And now who can defend me?!' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'CHAPULIN', pose: 'chapulin_idle', text: 'MEEEEE!', sfx: 'whoosh' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'TORIBIO', pose: 'toribio_nervioso', text: 'El Chapulín Colorado?!' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'CHAPULIN', pose: 'chapulin_idle', text: 'No one expected my cleverness! Do not panic! My vinyl antennae detected an overdose of procedural panic in this hallway.' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'DEFENSA', pose: 'donramon_shock', text: 'Chapulín! Thank goodness you are here. Say... do you really know anything about trials and law?' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'CHAPULIN', pose: 'chapulin_point', text: 'Of course! I have read the Constitution... well, I skimmed the cover at a newsstand, but my sense of justice is incorruptible!' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'CHAPULIN', pose: 'chapulin_idle', text: 'I am here as your defense advisor. You are the sidewalk lawyer, and I am the tactical brain of the operation.' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'DEFENSA', pose: 'donramon_sweat', text: 'Then that brain had better work fast. If I lose this case, I lose my client and still owe fourteen months of rent.' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'CHAPULIN', pose: 'chapulin_idle', text: 'Relax, Monchito! A trial is simple. The prosecutor’s witness will tell his story. Listen carefully to every sentence.' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'CHAPULIN', pose: 'chapulin_point', text: 'If something does not fit, make him explain it. If you catch him lying outright, put evidence in his face!' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'TORIBIO', pose: 'toribio_nervioso', text: 'Counselor, remember to check your jacket. Do not forget that badge they gave you, or the guards will not let you in.' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'DEFENSA', pose: 'donramon_idle', text: 'Ah, the badge! It is safe in my pocket... a little dented from when I dropped it down a drain, but it still shines nicely.' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'CHAPULIN', pose: 'chapulin_point', text: 'Keep it ready! The judge always asks for proof that you are authorized before the first gavel.' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'NARRADOR', text: 'The courtroom bell rings.', sfx: 'bell' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'BAILIFF', text: 'Attention in the hall! Criminal case zero: The People versus Toribio Pantoja. Parties, enter the courtroom.' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'TORIBIO', pose: 'toribio_nervioso', text: 'They are calling us! My knees are freezing harder than my lemon popsicles!' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'DEFENSA', pose: 'donramon_idle', text: 'Breathe, Toribio. You go in first... (Maybe if I open the door slowly, nobody will notice my knees shaking.)' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'CHAPULIN', pose: 'chapulin_point', text: 'Follow the good guys! Onward to justice!' }
];

export const CASE0_T2_RECESS_AND_RESUMPTION_EN: DialogueLine[] = [
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'NARRADOR', text: '11:30 AM. High Court - Waiting Room.', bgm: 'suspense' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'TORIBIO', pose: 'toribio_aliviado', text: 'Counselor Monchito! You were magnificent! You got that encyclopedia man right under his tongue!' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'TORIBIO', pose: 'toribio_aliviado', text: 'When you proved the bell had no clapper, no bell, nothing, I thought both his watches would fall off!' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'DEFENSA', pose: 'donramon_sweat', text: 'Whew! Do not celebrate yet, kid... Look at my hands. Without the courtyard photo, the judge would have had you halfway to prison.' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'CHAPULIN', pose: 'chapulin_idle', text: 'All my moves were calculated with icy precision! Well, almost all of them, because at first I thought the bell sounded nice too.' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'CHAPULIN', pose: 'chapulin_point', text: 'Look closely. We broke the witness’s time, but we still do not know what he was doing in the neighborhood or why his sample case made him so nervous.' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'DEFENSA', pose: 'donramon_idle', text: 'That is the good part! That man does not sell encyclopedias, Chapulín. I know door-to-door salesmen. They charm you, offer tiny installments, and smile even when you set the dog on them.' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'DEFENSA', pose: 'donramon_point', text: 'This man was measuring locks. He said it himself: "house 4 had a very loose latch."' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'TORIBIO', pose: 'toribio_nervioso', text: 'That is true! Three days ago I saw him hanging around my window. He said he was offering a volume called "Modern Locksmithing." I almost asked him to fix my lock!' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'CHAPULIN', pose: 'chapulin_idle', text: 'My vinyl antennae never fail! He was looking for easy prey. If the bailiff finds something suspicious in that sample case, the prosecution will have to change targets.' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'DEFENSA', pose: 'donramon_idle', text: 'I hope so... that American prosecutor has me sick of "time is money." The only money I care about is my fee to pay the landlord.' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'TORIBIO', pose: 'toribio_aliviado', text: 'If I leave here free, Counselor, I swear I will bring you gooseberry and lemon popsicles every Sunday for a whole year.' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'DEFENSA', pose: 'donramon_idle', text: '(Gooseberry does not pay fourteen months of rent, but at least I will not die of heat this summer...)' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'CHAPULIN', pose: 'chapulin_point', text: 'Monchito! Before the recess ends... did you make sure everything is in order?' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'DEFENSA', pose: 'donramon_idle', text: 'My case notes? Yes, I wrote them on a ham sandwich wrapper.' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'CHAPULIN', pose: 'chapulin_panic', text: 'I am not talking about sandwiches! I mean recording your progress so you do not start from zero if the jitters strike.' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'TUTORIAL MODE', text: 'You can save at any time with the 💾 SAVE button in the top bar. To continue later or protect your progress before a difficult choice, use 📂 LOAD from the title screen.', instant: true },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'DEFENSA', pose: 'donramon_idle', text: 'What a beauty! If real life had a save button, I would not have piled up fourteen months of debt.' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'NARRADOR', text: 'The courtroom bell rings twice. The twenty-minute recess is over.', sfx: 'bell' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'CHAPULIN', pose: 'chapulin_point', text: 'Recess is over! Now the good part begins. The bailiff must have opened that cardboard case already.' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'DEFENSA', pose: 'donramon_idle', text: 'Back inside, Toribio. Hold tight. We are about to read that encyclopedia seller the whole rulebook.' },
  { bg: JUDGE, furniture: 'none', speaker: 'NARRADOR', text: 'Twenty minutes later. Back in court, the bailiff places the witness’s sample case on the stand.', bgm: 'suspense' },
  { speaker: 'JUEZ', pose: 'judge_neutral', text: 'Let the record show what was found inside.' },
  { speaker: 'NARRADOR', text: 'Three damaged volumes, a business card, and an empty rent collector’s briefcase.', addEvidence: 'maletin_cobranza' },
  { speaker: 'NARRADOR', text: 'The bailiff gives the defense the Universal Knowledge Encyclopedias card.', addEvidence: 'tarjeta_enciclopedias' },
  { speaker: 'SUPER SAM', pose: 'supersam_slam', text: 'Your Honor... the prosecution asks to question this witness as a suspect. And to charge the recess time to the defense.', sfx: 'desk_slam' },
  { speaker: 'JUEZ', pose: 'judge_neutral', text: 'The first request is granted. The second is denied.' },
  { speaker: 'JUEZ', pose: 'judge_neutral', text: 'Mr. Lengua, explain to this court how that briefcase reached your portfolio. From now on, every word is on the record against you.' },
  { speaker: 'CHAPULIN', pose: 'chapulin_point', text: 'Now, Monchito, the witness has to testify about his own case!' },
  { speaker: 'DEFENSA', pose: 'donramon_idle', text: '(Three testimonies in one day. I only came here for the rent.)' }
];
