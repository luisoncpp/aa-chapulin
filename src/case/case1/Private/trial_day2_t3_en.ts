// @Architecture(descriptionShort="English Case 1 day 2 escape testimony, pointing 2 and turnabout 2", type="data", icon="layers")
/**
 * Case 1, Day 2 — Testimony 3, El Tripaseca (§12.4), Pointing 2 and
 * TURNABOUT 2 (§12.5), which runs straight into the climax.
 */

import type { DialogueLine, Testimony } from '../../../types/index.js';
import { CASE1_FOTO_POINT_TARGET_EN } from './trial_day2_t3_points_en.js';

const CASE1_GIRO_2_EN: DialogueLine[] = [
  { speaker: 'JUEZ', text: 'The court will recap before ruling, because this trial has turned over on it three times.', sfx: 'gavel', bgm: 'suspense', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'The defendant came in through a door with a broken latch, empty-handed, at nine on the dot.', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: 'Another person came in immediately after closing, shrunk inside a display case, with a sack of coin in hand.', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: 'That person grew, burst the glass, was paralysed by the piece itself, struck the watchman who surprised him, gathered his coins and left through the loading yard.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'Defense: does this court have anything more than a story?', pose: 'judge_thinking' },
  { speaker: 'DEFENSA', text: 'It has four facts, Your Honor. And I ask leave to set them side by side, because apart they say nothing.', pose: 'donramon_idle' },
  { speaker: 'JUEZ', text: 'Granted.', pose: 'judge_neutral' },
  { speaker: 'DEFENSA', text: 'One. Whoever went in knew the loading door latch had been broken since March.', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'Two. He knew the exact size of an eighteen by twenty-four grate that appears on no public plan.', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'Three. He knew the watchman moved to gallery two at twenty-one hundred, because that is written in a notebook hanging from a nail.', pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: 'Four. He knew that camera had one single frame of film left, because the change calendar is nailed to the corridor wall.', pose: 'donramon_slam', sfx: 'desk_slam' },
  { speaker: 'JUEZ', text: '...Four facts.', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'Four facts you cannot see from an alley, Your Honor. Nor from a rubbish drum. Nor in one night.', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'Four facts that are inside the museum, in plain sight of anyone who pays two pesos for a ticket and takes his time.', pose: 'donramon_idle' },
  { speaker: 'NARRADOR', text: 'Don Ramón takes off his hat and lays it on the table.', sfx: 'whoosh' },
  { speaker: 'DEFENSA', text: 'Your Honor, I have spent two days thinking this case was a robbery that went wrong.', pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: 'It was not. This robbery went exactly as it was written.', pose: 'donramon_slam', sfx: 'desk_slam', cutin: 'objection_protesto', bgm: 'objection' },
  { speaker: 'DEFENSA', text: 'Somebody sat down, gathered the four things, and handed them ready-made to the man who went in.', pose: 'donramon_point' },
  { speaker: 'NARRADOR', text: 'The room falls silent.', sfx: 'realization' },
  { speaker: 'JUEZ', text: 'Counselor Don Ramón.', pose: 'judge_neutral' },
  { speaker: 'DEFENSA', text: 'Your Honor.', pose: 'donramon_idle' },
  { speaker: 'JUEZ', text: 'This court does not admit insinuations, and you have spent half an hour insinuating.', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: 'If you maintain there was another person standing on that pedestal, tell this court who. By name. And answer it with the Record, not with adjectives.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'DEFENSA', text: '(There it is. He is asking me for it. I am not the one dragging it out.)', pose: 'donramon_idle' },
  { speaker: 'CHAPULIN', text: '(Don Ramón... if we get this wrong now, we are left with nothing.)', pose: 'chapulin_panic' },
  { speaker: 'DEFENSA', text: '(If we get this wrong now, young man, I am left with nothing. You are left without twenty years.)', pose: 'donramon_sweat' },
  { speaker: 'DEFENSA', text: '...Con permisito, dijo Monchito.', pose: 'donramon_idle' }
];

const CASE1_D2_T3_SUCCESS_EN: DialogueLine[] = [
  { speaker: 'DEFENSA', text: 'The sketch puts the camera beside the access, aimed at the mirror that closes the straight run.', pose: 'donramon_point', bgm: 'objection' },
  { speaker: 'DEFENSA', text: 'That painting hangs along the stretch behind the camera. It appears at the back only because the mirror returns the scene.', pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: 'You placed my client behind that frame. But behind the Chapulín is a painting, not the loading access.', pose: 'donramon_slam', sfx: 'desk_slam' },
  { speaker: 'JUEZ', text: 'Then where was he?', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'Here, in front of the mirror. Running toward it, away from the loading access.', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'The photo does not prove an exit. It proves that at nine he crossed the lit strip of the interior corridor.', pose: 'donramon_slam', sfx: 'desk_slam', cutin: 'objection_toma_eso' },
  { speaker: 'NARRADOR', text: 'Uproar in the gallery.', sfx: 'gavel' },
  { speaker: 'JUEZ', text: 'ORDER! ORDER!', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'DEFENSA', text: 'And in gallery two there is something that says the same thing with no mirrors involved, Your Honor.', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: "The historic parrot's cage was knocked inward from the corridor entrance into gallery two.", pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: 'And my client testified from day one, before anyone spoke of mirrors, that he turned after entering and turned again toward the galleries.', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'The photo and the cage tell the same path: somebody moving inward at nine on the dot.', pose: 'donramon_slam', sfx: 'desk_slam' },
  { speaker: 'FLORINDA', text: 'And he left him squashed!', pose: 'florinda_crying' },
  { speaker: 'JUEZ', text: 'The court regrets the parrot and thanks you for the corroboration.', pose: 'judge_thinking' },
  { speaker: 'DEFENSA', text: 'And there is one more thing, and this is the one I ask the court not to forget.', pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: 'Look at the hands.', pose: 'donramon_point' },
  { speaker: 'NARRADOR', text: '...', bg: 'assets/ampliacion_foto_crimen_manos.webp', furniture: 'none' },
  { speaker: 'DEFENSA', text: 'They are open. And empty.', pose: 'donramon_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: 'At nine on the dot on the night of the twenty-eighth, the only photograph in this case shows my client coming into the museum with empty hands.', pose: 'donramon_point' },
  { speaker: 'CHAPULIN', text: '¡No contaban con mi astucia!', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'You did nothing, young man, you were running.', pose: 'donramon_sweat' },
  { speaker: 'CHAPULIN', text: 'I was running cunningly!', pose: 'chapulin_idle' },
  { speaker: 'TRIPASECA', text: '...I... I saw what I saw.', pose: 'tripaseca_sweat' },
  { speaker: 'SUPER SAM', text: 'Your Honor! Even if he came in empty-handed, he could have taken the chicharra AFTERWARDS!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'JUEZ', text: 'In seven minutes, with an unconscious man on the floor and the piece never recovered? The court is beginning to tire, prosecution.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'Defense: if the door and yard are not in the photo, what did you find when you searched that access?', pose: 'judge_thinking' }
];

const CASE1_D2_T3_FOLLOWUP_EN: DialogueLine[] = [
  { speaker: 'DEFENSA', text: 'A truck the police left unsearched, Your Honor.', pose: 'donramon_point', bgm: 'pursuit' },
  { speaker: 'DEFENSA', text: 'It was in the loading yard, beside the access my client used to enter.', pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: 'No plates, covered with a waxed tarp.', pose: 'donramon_slam', sfx: 'desk_slam' },
  { speaker: 'SUPER SAM', text: 'That is...!', pose: 'supersam_sweat' },
  { speaker: 'DEFENSA', text: 'That is what happens when a case is closed in five minutes, counselor.', pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: "This morning, with the judge's order, the defense searched that access. And beside the rear tyre it found this.", pose: 'donramon_point' },
  { speaker: 'NARRADOR', text: 'Don Ramón holds up a thick canvas bag, empty, with a stamped seal.', sfx: 'whoosh' },
  { speaker: 'JUEZ', text: 'Describe it for the record.', pose: 'judge_neutral' },
  { speaker: 'DEFENSA', text: "Canvas bag, eighty-two by fifty. Empty. Sooty on the outside with the same soot as that truck's waxed tarp.", pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: 'And with one silver coin lodged in the burst seam.', pose: 'donramon_slam', sfx: 'desk_slam', updateEvidence: 'informe_medico' },
  { speaker: 'DEFENSA', text: "The laboratory compared that coin with the metal particles in the watchman's wound.", pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'Ninety per cent silver. The same alloy.', pose: 'donramon_slam', sfx: 'desk_slam', cutin: 'objection_toma_eso' },
  { speaker: 'NARRADOR', text: 'The gallery rises. Alma Negra grips the arm of his chair.', sfx: 'realization' },
  { speaker: 'ALMA NEGRA', text: 'Those! Those are the ones I heard rolling, by a thousand devils!', pose: 'almanegra_shock' },
  { speaker: 'JUEZ', text: 'The murder weapon has been identified!', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'JUEZ', text: 'Let the record show: night watchman Alma Negra was struck with this canvas bag full of silver coin, and this bag left the museum through the loading door.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: "The court further observes that the bag bears the Prosecutor's seal.", pose: 'judge_thinking' },
  { speaker: 'SUPER SAM', text: '...The prosecution hands out bags like that. For expenses. For many things.', pose: 'supersam_sweat' },
  { speaker: 'SUPER SAM', text: 'The prosecution has nothing further to say about that bag.', pose: 'supersam_sweat' },
  { speaker: 'JUEZ', text: '...The court regrets that.', pose: 'judge_thinking' },
  { speaker: 'DEFENSA', text: '(And there it stays. There is nothing to compel him with, and he knows it.)', pose: 'donramon_idle' },
  ...CASE1_GIRO_2_EN
];

export const CASE1_TESTIMONY_5_EN: Testimony = {
  title: 'Testimony: How the thief fled',
  witness: 'El Tripaseca',
  bgm: 'cross_exam_presto',
  statements: [
    {
      id: 'c1_d2t3_1',
      speaker: 'TRIPASECA',
      pose: 'tripaseca_smug',
      text: 'I saw the photo taken by the corridor camera.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT! Did you see his face?', sfx: 'whoosh', cutin: 'objection_un_momento', pose: 'donramon_point' },
        { speaker: 'TRIPASECA', text: 'Not his face. I saw the red in the photo.', pose: 'tripaseca_smug' },
        { speaker: 'DEFENSA', text: '"The red in the photo."', pose: 'donramon_idle' },
        { speaker: 'TRIPASECA', text: 'The red running, counselor. How many red people show up in a night photo in this city?', pose: 'tripaseca_smug' },
        { speaker: 'DEFENSA', text: 'Lately, more than one would imagine.', pose: 'donramon_sweat' }
      ]
    },
    {
      id: 'c1_d2t3_2',
      speaker: 'TRIPASECA',
      pose: 'tripaseca_smug',
      text: 'The camera is beside the access. And there he comes, from the back, running toward it. He was leaving!',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT! Did you see the corridor, or did you interpret the photograph?', sfx: 'whoosh', cutin: 'objection_un_momento', pose: 'donramon_point' },
        { speaker: 'TRIPASECA', text: 'The photo says it plain. The camera is at the access and he is coming toward it.', pose: 'tripaseca_smug' },
        { speaker: 'DEFENSA', text: 'And the chicharra?', pose: 'donramon_idle' },
        { speaker: 'TRIPASECA', text: 'He had it against his chest. You can see the bulge.', pose: 'tripaseca_smug' },
        { speaker: 'JUEZ', text: 'The court would appreciate not confusing a bulge with a gold exhibit.', pose: 'judge_thinking' },
        { speaker: 'TRIPASECA', text: 'I do not go around weighing things, Your Honor. I go around selling.', pose: 'tripaseca_smug' }
      ]
    },
    {
      id: 'c1_d2t3_3',
      speaker: 'TRIPASECA',
      pose: 'tripaseca_smug',
      text: 'And the camera caught him. One single photo, but you can see that little heart he wears on his chest plain as day.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT! Describe that "little heart" to me.', sfx: 'whoosh', cutin: 'objection_un_momento', pose: 'donramon_point' },
        { speaker: 'TRIPASECA', text: 'The yellow heart with the two letters. Everybody knows it. C, H.', pose: 'tripaseca_smug' },
        { speaker: 'DEFENSA', text: 'C, H.', pose: 'donramon_idle' },
        { speaker: 'TRIPASECA', text: 'C, H. Same as the gentleman is called.', pose: 'tripaseca_smug' },
        { speaker: 'DEFENSA', text: '(He said "C, H". He said it, not me. Let it be on the record and let the whole room hear it.)', pose: 'donramon_shock' },
        { speaker: 'CHAPULIN', text: '(Don Ramón! I have worn the letters in that order since 1970!)', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: '(I know, young man. That is exactly the point.)', pose: 'donramon_point' }
      ],
      contradiction: {
        evidence: ['foto_crimen'],
        pointTarget: CASE1_FOTO_POINT_TARGET_EN,
        successDialogue: CASE1_D2_T3_SUCCESS_EN,
        followUp: {
          evidence: ['bolsa_dolares'],
          prompt: 'What was found when the loading access was searched that matches the weapon from day one?',
          successDialogue: CASE1_D2_T3_FOLLOWUP_EN
        }
      }
    },
    {
      id: 'c1_d2t3_4',
      speaker: 'TRIPASECA',
      pose: 'tripaseca_smug',
      text: 'I invented nothing, Your Honor. There is the picture. See for yourselves.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT! You insist a great deal that we look at that photo.', sfx: 'whoosh', cutin: 'objection_un_momento', pose: 'donramon_point' },
        { speaker: 'TRIPASECA', text: 'Naturally. It is the one thing that cannot lie, is it not?', pose: 'tripaseca_smug' },
        { speaker: 'DEFENSA', text: 'On that, Mr. Tripaseca, we are in complete agreement.', pose: 'donramon_idle' },
        { speaker: 'SUPER SAM', text: 'The prosecution asks that the enlargement be projected! Let it be seen and let us close!', pose: 'supersam_point', sfx: 'desk_slam' },
        { speaker: 'DEFENSA', text: '(Thank you, counselor. Truly.)', pose: 'donramon_idle' }
      ]
    }
  ]
};
