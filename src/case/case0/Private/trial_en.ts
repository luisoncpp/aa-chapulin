// @Architecture(descriptionShort="English Case 0 opening and testimony data", type="data", icon="layers")
import type { ContradictionRule, DialogueLine, OpeningPresent, Testimony } from '../../../types/index.js';
import { CASE0_FOTO_POINT_TARGET_EN } from './point_targets.js';
import { CASE0_LOBBY_INTRO_EN, CASE0_T2_RECESS_AND_RESUMPTION_EN } from './trial_lobby_en.js';

export const CASE0_TRIAL_INTRO_EN: DialogueLine[] = [
  ...CASE0_LOBBY_INTRO_EN,
  { bg: 'assets/bg_judge.webp', furniture: 'none', speaker: 'JUEZ', pose: 'judge_gavel', text: 'Order in the court! The hearing over the assault of rent collector Nazario Cuenca is now open.', sfx: 'gavel', bgm: 'trial' },
  { speaker: 'SUPER SAM', pose: 'supersam_idle', text: 'Your Honor, I solved this case in eleven minutes. ELEVEN! A boy behind on rent, a collector on the floor, and a collection file gone. Time is money.' },
  { speaker: 'JUEZ', pose: 'judge_neutral', text: 'Is the defense ready? ...Is the defense present?' },
  { speaker: 'DEFENSA', pose: 'donramon_idle', text: 'Here, here! Sorry, Your Honor. The courtroom door weighs more than my client.' },
  { speaker: 'CHAPULÍN', pose: 'chapulin_idle', text: 'You did not count on my legal assistance!' },
  { speaker: 'DEFENSA', pose: 'donramon_idle', text: '(Fourteen months of back rent, Don Ramón. Win this and we eat.)' },
  { speaker: 'JUEZ', pose: 'judge_neutral', text: 'Before we begin, the court must verify that the person at the defense bench is an authorized attorney.' },
  { speaker: 'CHAPULÍN', pose: 'chapulin_point', text: 'That means it wants your badge! The item that identifies you is in the COURT RECORD.' },
  { speaker: 'EXAMINE MODE', text: 'For this opening, the COURT RECORD will open by itself. When it does, select the badge and press the Present Evidence! button.', instant: true }
];

export const CASE0_TESTIMONY_1_EN: Testimony = {
  title: 'Testimony: What I saw from the courtyard', witness: 'Casimiro Lengua', bgm: 'cross_exam_moderato', statements: [
    { id: 'c0_t1_1', speaker: 'CASIMIRO', pose: 'casimiro_catalogo', text: 'That noon I made my sales round through the neighborhood, volume by volume, door by door.', pressText: [
      { speaker: 'DEFENSA', pose: 'donramon_point', cutin: 'objection_un_momento', sfx: 'whoosh', text: 'HOLD IT!' },
      { speaker: 'CHAPULÍN', pose: 'chapulin_point', text: 'Pressing is free! The witness just gave us a new detail.' },
      { speaker: 'CASIMIRO', pose: 'casimiro_amable', text: 'House 4 had a very loose lock, something a professional notices.' }
    ] },
    { id: 'c0_t1_2', speaker: 'CASIMIRO', pose: 'casimiro_amable', text: 'At exactly one I heard a sharp blow and a cry inside house 4.', pressText: [
      { speaker: 'DEFENSA', pose: 'donramon_point', cutin: 'objection_un_momento', sfx: 'whoosh', text: 'HOLD IT!' },
      { speaker: 'CASIMIRO', pose: 'casimiro_sweat', text: 'I distinguished the blow from the cry. The time was one o’clock.' }
    ] },
    { id: 'c0_t1_3', speaker: 'CASIMIRO', pose: 'casimiro_amable', text: 'I looked into the courtyard and saw the defendant run out with the collector’s accordion file in his hand.', pressText: [
      { speaker: 'DEFENSA', pose: 'donramon_point', cutin: 'objection_un_momento', sfx: 'whoosh', text: 'HOLD IT!' },
      { speaker: 'CASIMIRO', pose: 'casimiro_sweat', text: 'Run out, yes; the file... I saw it from the corner of my eye.' }
    ], contradiction: {
      evidence: ['parte_detencion'],
      successDialogue: [
        { speaker: 'DEFENSA', pose: 'donramon_slam', cutin: 'objection_protesto', sfx: 'desk_slam', text: 'OBJECTION! That accordion file appears nowhere in this report!', bgm: 'objection' },
        { speaker: 'DEFENSA', pose: 'donramon_point', text: 'The report says my client had an ice bar, forty cents, and an ice-shop receipt at 2:15. No collection file.' },
        { speaker: 'CASIMIRO', pose: 'casimiro_sweat', text: 'One says “with the file” as a figure of speech. Synecdoche, if you please. From the Latin charta, incidentally.' },
        { speaker: 'CHAPULÍN', pose: 'chapulin_point', text: 'And was the cry synecdoche too?' },
        { speaker: 'JUEZ', pose: 'judge_shock', text: 'An unlocated object proves nothing by itself. But that hour is now decisive.' }
      ],
      followUp: {
        evidence: ['recibo_hielo'], prompt: 'Where was the defendant at one o’clock?', successDialogue: [
          { speaker: 'DEFENSA', pose: 'donramon_point', text: 'Here! The ice-shop receipt has two stamps: in at 1:05 and out at 1:55.' },
          { speaker: 'TORIBIO', pose: 'toribio_nervioso', text: 'The block would not fit, counselor. They had to split it. No ice, no paletas; no paletas, no rent.' },
          { speaker: 'CASIMIRO', pose: 'casimiro_sweat', text: 'Two blocks can be crossed at a run. Volume three, “athletics.”' },
          { speaker: 'DEFENSA', pose: 'donramon_point', text: 'Running both ways with a six-kilo block, unseen by the ice seller.' },
          { speaker: 'DEFENSA', pose: 'donramon_point', text: 'Furthermore, the medical report indicates the blow came from behind and above.', updateEvidence: 'informe_lesiones' },
          { speaker: 'CHAPULÍN', pose: 'chapulin_point', text: 'From behind! Like my landlord’s collectors!' },
          { speaker: 'JUEZ', pose: 'judge_shock', text: 'The impact window remains open, but at one o’clock sharp the defendant was in line at the ice shop.' },
          { speaker: 'SUPER SAM', pose: 'supersam_slam', sfx: 'desk_slam', text: 'Then the witness got the clock wrong! Move the time and the case survives!' },
          { speaker: 'JUEZ', pose: 'judge_neutral', text: 'Witness, explain how you know it was exactly one.' },
          { speaker: 'CHAPULÍN', pose: 'chapulin_point', text: 'There it is, Don Ramón. We have just been given the second testimony.' }
        ]
      }
    }},
    { id: 'c0_t1_4', speaker: 'CASIMIRO', pose: 'casimiro_catalogo', text: 'I ran to the corner shop, called the police, and returned to watch the poor man. Eleven minutes, precisely.', pressText: [
      { speaker: 'DEFENSA', pose: 'donramon_point', cutin: 'objection_un_momento', sfx: 'whoosh', text: 'HOLD IT!' },
      { speaker: 'CASIMIRO', pose: 'casimiro_sweat', text: 'I made the call and the police arrived at 2:15.' }
    ] }
  ]
};

const CASE0_T2_BELL_CONTRADICTION_EN: ContradictionRule = {
  evidence: ['foto_patio'], requiresExamine: 'foto_patio', pointTarget: CASE0_FOTO_POINT_TARGET_EN,
      successDialogue: [
        { speaker: 'DEFENSA', pose: 'donramon_slam', cutin: 'objection_protesto', sfx: 'desk_slam', text: 'OBJECTION! That bell did not ring that day or the day before!', bgm: 'objection' },
        { speaker: 'DEFENSA', pose: 'donramon_point', text: 'The bell tower! It is covered in scaffolding, and the bell opening is empty.' },
    { speaker: 'CASIMIRO', pose: 'casimiro_panic', text: 'Then it was another similar sound. A sound of a bell-like nature.' },
    { speaker: 'DEFENSA', pose: 'donramon_point', text: 'Two horn blasts from the ice truck, which passes that corner every day at two.' },
    { speaker: 'TORIBIO', pose: 'toribio_nervioso', text: 'I was behind that truck, counselor. I arrived at 2:05 and found Mr. Nazario on the floor.' },
    { speaker: 'CASIMIRO', pose: 'casimiro_panic', text: 'I moved nothing! I was selling!' },
    { speaker: 'JUEZ', pose: 'judge_shock', text: 'This court has no witness to the moment of the assault.' },
    { speaker: 'SUPER SAM', pose: 'supersam_slam', cutin: 'objection_un_momento', sfx: 'desk_slam', text: 'HOLD IT! If he did not hear the blow at one, how did he know the collector had an accordion file?' },
    { speaker: 'JUEZ', pose: 'judge_gavel', text: 'A twenty-minute recess is ordered. The bailiff will search the witness’s sample case.', sfx: 'gavel' },
    { speaker: 'CASIMIRO', pose: 'casimiro_panic', text: 'My case is company property! Volume eight: "inviolability"!' },
    ...CASE0_T2_RECESS_AND_RESUMPTION_EN
  ]
};

export const CASE0_TESTIMONY_2_EN: Testimony = {
  title: 'Testimony: How I know it was one', witness: 'Casimiro Lengua', bgm: 'cross_exam_allegro', statements: [
    { id: 'c0_t2_1', speaker: 'CASIMIRO', pose: 'casimiro_catalogo', text: 'I never mistake a time. I wear two watches, one on each arm, and synchronize them every morning.', pressText: [
      { speaker: 'DEFENSA', pose: 'donramon_point', cutin: 'objection_un_momento', sfx: 'whoosh', text: 'HOLD IT!' },
      { speaker: 'CASIMIRO', pose: 'casimiro_amable', text: 'I synchronize them with the school bell. A perfectly scientific check.' }
    ] },
    { id: 'c0_t2_2', speaker: 'CASIMIRO', pose: 'casimiro_amable', text: 'But I heard it too: the school bell across the street rang at one. One chime, one hour.', pressText: [
      { speaker: 'DEFENSA', pose: 'donramon_point', cutin: 'objection_un_momento', sfx: 'whoosh', text: 'HOLD IT!' },
      { speaker: 'CASIMIRO', pose: 'casimiro_catalogo', text: 'From the courtyard you can see the washbasin, the clothesline, and the school behind them.' }
    ], contradiction: CASE0_T2_BELL_CONTRADICTION_EN },
    { id: 'c0_t2_3', speaker: 'CASIMIRO', pose: 'casimiro_catalogo', text: 'The blow came with that chime. That is why I remember it.', pressText: [
      { speaker: 'DEFENSA', pose: 'donramon_point', cutin: 'objection_un_momento', sfx: 'whoosh', text: 'HOLD IT!' },
      { speaker: 'SUPER SAM', pose: 'supersam_point', text: 'The bell makes the time certain, Your Honor.' }
    ], contradiction: CASE0_T2_BELL_CONTRADICTION_EN },
    { id: 'c0_t2_4', speaker: 'CASIMIRO', pose: 'casimiro_catalogo', text: 'From the courtyard I could hear everything. It has excellent acoustics.', pressText: [
      { speaker: 'DEFENSA', pose: 'donramon_point', cutin: 'objection_un_momento', sfx: 'whoosh', text: 'HOLD IT!' },
      { speaker: 'CASIMIRO', pose: 'casimiro_amable', text: 'Washbasin, clothesline, door four: everything was visible.' }
    ] }
  ]
};

export const CASE0_TESTIMONY_3_EN: Testimony = {
  title: 'Testimony: How that file reached my sample case', witness: 'Casimiro Lengua', bgm: 'cross_exam_presto', statements: [
    { id: 'c0_t3_1', speaker: 'CASIMIRO', pose: 'casimiro_amable', text: 'I stole nothing, Your Honor. I found that accordion file lying in the neighborhood alley.', pressText: [
      { speaker: 'DEFENSA', pose: 'donramon_point', cutin: 'objection_un_momento', sfx: 'whoosh', text: 'HOLD IT!' },
      { speaker: 'CASIMIRO', pose: 'casimiro_catalogo', text: 'The alley has a green door and a broken gutter. I could draw it.' }
    ] },
    { id: 'c0_t3_2', speaker: 'CASIMIRO', pose: 'casimiro_catalogo', text: 'I picked it up at twenty to three, after the patrol had taken the boy away.', pressText: [
      { speaker: 'DEFENSA', pose: 'donramon_point', cutin: 'objection_un_momento', sfx: 'whoosh', text: 'HOLD IT!' },
      { speaker: 'CHAPULÍN', pose: 'chapulin_point', text: 'That is the third exact time he has given us today!' }
    ], contradiction: {
      evidence: ['parte_detencion'], successDialogue: [
        { speaker: 'DEFENSA', pose: 'donramon_slam', cutin: 'objection_protesto', sfx: 'desk_slam', text: 'OBJECTION! You described that accordion file twenty-five minutes before you found it!', bgm: 'objection' },
        { speaker: 'DEFENSA', pose: 'donramon_point', text: 'At 2:15, the report records its color, clasp, and the hand carrying it.' },
        { speaker: 'DEFENSA', pose: 'donramon_point', text: 'You just said you picked it up at 2:40.', updateEvidence: 'parte_detencion' },
        { speaker: 'CASIMIRO', pose: 'casimiro_sweat', text: 'I inferred it. A collector always carries a collection file. Logical inference.' },
        { speaker: 'SUPER SAM', pose: 'supersam_slam', sfx: 'desk_slam', text: 'That agent is MY agent and writes like an angel!' },
        { speaker: 'JUEZ', pose: 'judge_shock', text: 'You saw the file, or described it without seeing it. Choose.' }
      ], followUp: {
        evidence: ['tarjeta_enciclopedias'], prompt: 'What does the witness\'s occupation say about his presence in the neighborhood?', successDialogue: [
          { speaker: 'DEFENSA', pose: 'donramon_slam', cutin: 'objection_toma_eso', sfx: 'desk_slam', text: 'This man does not sell encyclopedias!', bgm: 'pursuit' },
          { speaker: 'DEFENSA', pose: 'donramon_point', text: 'The company dissolved in 1971. No route sheet, no orders, and three volumes with broken spines.' },
          { speaker: 'CASIMIRO', pose: 'casimiro_panic', text: 'A professional prepares! A professional studies the product!' },
          { speaker: 'DEFENSA', pose: 'donramon_point', text: 'You do not knock on doors to sell. You knock to learn which ones open.' },
          { speaker: 'DEFENSA', pose: 'donramon_slam', sfx: 'desk_slam', text: 'And that is why he never threw the file away, Your Honor. The money went into his pocket; the papers he kept. That list says who paid, who owes, and which house keeps cash. It is the only catalogue this man knows how to read.' },
          { speaker: 'JUEZ', pose: 'judge_gavel', text: 'The witness will be questioned as a suspect and will remain on the stand.', sfx: 'gavel' },
          { speaker: 'NARRADOR', text: 'The clerk enters the supplement: the injury matches a flat-based object with a straight edge weighing about six kilos.', updateEvidence: 'informe_lesiones' },
          { speaker: 'SUPER SAM', pose: 'supersam_point', text: 'The prosecution needs the weapon and the reason he entered house 4.' },
          { speaker: 'CHAPULÍN', pose: 'chapulin_point', text: 'No one counted on the file carrying a tutorial for catching culprits!' }
        ]
      }
    }},
    { id: 'c0_t3_3', speaker: 'CASIMIRO', pose: 'casimiro_amable', text: 'I never opened it. I would have turned it in at the precinct after my workday.', pressText: [
      { speaker: 'DEFENSA', pose: 'donramon_point', cutin: 'objection_un_momento', sfx: 'whoosh', text: 'HOLD IT!' },
      { speaker: 'CASIMIRO', pose: 'casimiro_sweat', text: 'It was folded flat and empty anyway. I could feel how light it was.' }
    ] },
    { id: 'c0_t3_4', speaker: 'CASIMIRO', pose: 'casimiro_catalogo', text: 'That day I worked like any other: my full round, door by door, volume by volume.', pressText: [
      { speaker: 'DEFENSA', pose: 'donramon_point', cutin: 'objection_un_momento', sfx: 'whoosh', text: 'HOLD IT!' },
      { speaker: 'CASIMIRO', pose: 'casimiro_amable', text: 'Twenty years in the publishing trade, Your Honor.' }
    ] }
  ]
};

export const CASE0_OPENING_PRESENT_EN: OpeningPresent = {
  evidence: ['insignia_abogado'],
  prompt: 'What identifies the defense to this court?',
  successDialogue: [
    { speaker: 'DEFENSA', pose: 'donramon_idle', text: 'My badge! It is a little dented, Your Honor, but so am I.' },
    { speaker: 'JUEZ', pose: 'judge_gavel', text: 'The defense is recognized. A good beginning.', sfx: 'gavel' },
    { speaker: 'CHAPULÍN', pose: 'chapulin_point', text: 'Very good! The court opened the Record automatically. You selected the badge and pressed the Present Evidence! button.' },
    { speaker: 'CHAPULÍN', pose: 'chapulin_point', text: 'During cross-examination, click 📜 PRESENT to open the COURT RECORD. Select an item there, then click the Present Evidence! button.' },
    { speaker: 'CHAPULÍN', pose: 'chapulin_point', text: 'The yellow heart on the COURT RECORD button opens the Record.' },
    { speaker: 'CHAPULÍN', pose: 'chapulin_point', text: 'Presenting the wrong evidence turns off one of the five green exclamation marks in the bar above.' },
    { speaker: 'DEFENSA', pose: 'donramon_sweat', text: 'What if I run out?' },
    { speaker: 'CHAPULÍN', pose: 'chapulin_point', text: 'If they all go out, you lose the trial and have to start it over.' },
    { speaker: 'SUPER SAM', pose: 'supersam_slam', text: 'Objection to the tutorial! It has been four minutes and nobody has billed anything!', sfx: 'desk_slam' },
    { speaker: 'JUEZ', pose: 'judge_neutral', text: 'The prosecution will state its theory. Then we will hear the only witness.' },
    { speaker: 'SUPER SAM', pose: 'supersam_slam', text: 'Simple, Your Honor. The defendant lives in house 4. The collector was struck in house 4. The defendant was in house 4 when police arrived. Three for three!', sfx: 'desk_slam' },
    { speaker: 'DEFENSA', pose: 'donramon_slam', cutin: 'objection_protesto', sfx: 'desk_slam', text: 'OBJECTION! Pardon me, said Monchito!' },
    { speaker: 'DEFENSA', pose: 'donramon_point', text: 'My client was there because he lives there, prosecutor. With that logic, you would accuse the shelf.' },
    { speaker: 'JUEZ', pose: 'judge_thinking', text: 'This court also wants to know why the victim is not testifying.' },
    { speaker: 'SUPER SAM', pose: 'supersam_point', text: 'Amnesia, Your Honor. From the blow. Very inconvenient for my budget.' },
    { speaker: 'JUEZ', pose: 'judge_neutral', text: 'Then this trial rests on a single witness. Pressing costs no credibility, but presenting evidence does. Use them accordingly.' },
    { speaker: 'CHAPULÍN', pose: 'chapulin_point', text: 'One more thing, Don Ramón: before presenting the Courtyard Photo, select it in the COURT RECORD and click EXAMINE DETAIL to view it up close.' },
    { speaker: 'EXAMINE MODE', text: 'If a piece of evidence offers EXAMINE DETAIL, inspect it before presenting: the enlarged view will help you find the correct detail.', instant: true },
    { speaker: 'JUEZ', pose: 'judge_neutral', text: 'Witness, state your name and occupation.' },
    { speaker: 'CASIMIRO', pose: 'casimiro_catalogo', text: 'Casimiro Lengua, at your service: authorized distributor for The Universal Knowledge Encyclopedias. From the Latin encyclopaedia, “instruction in a circle”.' },
    { speaker: 'JUEZ', pose: 'judge_neutral', text: 'Your testimony, please. Only what you perceived.' }
  ]
};
