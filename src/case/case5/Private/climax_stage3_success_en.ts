// @Architecture(descriptionShort="English Case 5 climax stage 3 point success and L8 plate", type="data", icon="layers")
/**
 * Case 5 climax EN — shelf point success + plate L8 (spec §18.3).
 */

import type { DialogueLine } from '../../../types/index.js';

const PLATE_TOMO_TRECE = 'assets/plate_tomo_trece.webp';

export const CASE5_CLIMAX_STAGE3_POINT_SUCCESS_EN: DialogueLine[] = [
  { speaker: 'DEFENSA', text: 'HERE, YOUR HONOR! SLOT ELEVEN!', pose: 'chapulin_slam', sfx: 'desk_slam', cutin: 'objection_toma_eso' },
  { speaker: 'DEFENSA', text: 'Twenty-two green cloth spines... and one half-leather with brass corners.', pose: 'chapulin_point' },
  { bg: 'assets/bg_gallery_characters.webp', furniture: 'none', speaker: 'NARRADOR', text: 'The whole courtroom leans toward the plate.', sfx: 'realization', bgm: 'pursuit' },
  { speaker: 'JUEZ', text: 'Bailiff! Bring this court that photograph... and the volume that does not belong in it! NOW!', sfx: 'gavel', pose: 'judge_gavel' },
  { bg: 'assets/bg_gallery_characters.webp', furniture: 'none', speaker: 'NARRADOR', text: 'Four minutes. Nobody sits.', bgm: 'suspense' },
  { speaker: 'NARRADOR', text: 'The bailiff sets on the bench the forensic photograph of the shelf and, beside it, a heavy volume, half-leather bound, with brass corners on the spine.' },
  { speaker: 'JUEZ', text: 'Open it at the endpaper, Mr. Clerk.', pose: 'judge_neutral' },
  { speaker: 'SECRETARIO', text: 'There is a stamp, Your Honor. Violet ink.' },
  { speaker: 'SECRETARIO', text: '"Q-114/1971. Estate goods. Crate 9."' },
  { bg: 'assets/bg_gallery_characters.webp', furniture: 'none', speaker: 'NARRADOR', text: 'The gallery erupts.', sfx: 'gavel', bgm: 'objection' },
  { speaker: 'JUEZ', text: 'ORDER! ORDER!', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'DEFENSA', text: 'Your Honor, that volume is from the luxury edition!', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'Two hundred ten unsold copies since 1971, line forty-four of the inventory!', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'And according to the inventory, all two hundred ten were to remain in the basement, inside crate nine!', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'JUEZ', text: 'Is the defense saying...?', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'I am saying what happened that afternoon, Your Honor, and I am going to say it slowly.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'Someone took Volume XI from slot eleven and closed it on that man\'s neck.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'And the volume stayed on the floor, with blood. It could not go back.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'And then on that shelf there was a gap.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'A gap that man could not bear.', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'NARRADOR', text: 'Silence.', bgm: 'suspense' },
  { speaker: 'DEFENSA', text: 'He went down to the basement in the freight elevator. Ninety seconds. He opened crate nine a second time that afternoon and took out a luxury Volume XI.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'He closed it again, stuck on his seal strip and signed it, because he does not know how to leave with a cover open. Then he went back up with the volume in another ninety seconds and put it in slot eleven.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'The floor plan shows three landings. Chompiras testified the trustee kept the remote and knew how to run it alone.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: '(Nobody kills like that from rage. You kill like that... neatly.)', pose: 'chapulin_panic' },
  { speaker: 'SARGENTO', text: 'Your Honor! The photograph of the cover!', pose: 'pazguato_decidido' },
  { speaker: 'SARGENTO', text: 'There are two dated seal strips from December fourth, one on top of the other! I checked them last night and did not know what to do with them!', pose: 'pazguato_decidido' },
  { speaker: 'JUEZ', text: 'Read this court the signature on the top one, Sergeant.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'SARGENTO', text: 'The same as the other two hundred fifty, Your Honor. F. Berrondo. In his hand, with his two lines underneath.', pose: 'pazguato_decidido' },
  { speaker: 'NARRADOR', text: 'Silence in the courtroom.', sfx: 'realization' },
  { speaker: 'JUEZ', text: 'Clerk, cross-check the voucher folder Miss Penaloza exhibited. How many openings of crate nine were logged that Saturday?', pose: 'judge_thinking' },
  { speaker: 'SECRETARIO', text: 'One voucher, Your Honor. Initial content review; no later extraction recorded.' },
  { speaker: 'DEFENSA', text: 'Two signed seals, one voucher. The second opening was by the same hand and nobody logged it.', pose: 'chapulin_point' },
  { speaker: 'JUEZ', text: 'Be seated!', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'BERRONDO', text: '...Your Honor.', pose: 'berrondo_sweat', bg: 'assets/bg_courtroom.webp' },
  { speaker: 'BERRONDO', text: 'An incomplete shelf is disorder.', pose: 'berrondo_sweat', bg: 'assets/bg_courtroom.webp' },
  { speaker: 'BERRONDO', text: 'I cannot bear disorder. I never have.', pose: 'berrondo_panic', bg: 'assets/bg_courtroom.webp' },
  { speaker: 'BERRONDO', text: 'That... is not a crime.', pose: 'berrondo_panic', bg: 'assets/bg_courtroom.webp' },
  { speaker: 'DEFENSA', text: 'No, counselor.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'It is a signature.', pose: 'chapulin_slam', sfx: 'desk_slam', cutin: 'objection_toma_eso' },
  { bg: PLATE_TOMO_TRECE, furniture: 'none', speaker: 'NARRADOR', text: 'El Saber Universal was announced in twenty-four volumes and only twenty-three were ever printed.' },
  { bg: PLATE_TOMO_TRECE, furniture: 'none', speaker: 'NARRADOR', text: 'Volume Thirteen was announced as part of the twenty-four-volume set, but was never printed or delivered.' },
  { bg: PLATE_TOMO_TRECE, furniture: 'none', speaker: 'NARRADOR', text: 'That is why every set in the country has a gap in the same place.' },
  { bg: PLATE_TOMO_TRECE, furniture: 'none', speaker: 'NARRADOR', text: 'And that is why, in the underworld for eleven years now, "Volume Thirteen" is the name for what was left of that company.' }
];
