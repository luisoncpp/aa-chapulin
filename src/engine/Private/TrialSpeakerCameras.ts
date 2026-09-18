// @Architecture(descriptionShort="Maps trial speakers to courtroom camera plates", type="util", icon="layers")
/**
 * Speaker-to-camera table for [[./VisualEffects.ts]].
 * Unknown speakers fall back to the witness plate.
 */

export const TRIAL_SPEAKER_BACKGROUNDS: Record<string, string> = {
  DEFENSA: 'assets/bg_defense.webp',
  'DON RAMON': 'assets/bg_defense.webp',
  'DON RAMÓN': 'assets/bg_defense.webp',
  CHAPULIN: 'assets/bg_defense.webp',
  'CHAPULÍN': 'assets/bg_defense.webp',
  'SUPER SAM': 'assets/bg_courtroom.webp',
  JUEZ: 'assets/bg_judge.webp',
  TRIPASECA: 'assets/bg_witness.webp',
  FLORINDA: 'assets/bg_witness.webp',
  PETERETE: 'assets/bg_witness.webp',
  CHOMPIRAS: 'assets/bg_witness.webp',
  JIRAFALES: 'assets/bg_witness.webp',
  JAIMITO: 'assets/bg_witness.webp',
  CLOTILDE: 'assets/bg_witness.webp',
  CHAPATIN: 'assets/bg_witness.webp',
  ANICETO: 'assets/bg_witness.webp',
  BARRIGA: 'assets/bg_witness.webp',
  NONO: 'assets/bg_witness.webp',
  CHIMOLTRUFIA: 'assets/bg_witness.webp',
  SARGENTO: 'assets/bg_witness.webp',
  BOTIJA: 'assets/bg_witness.webp',
  CECILIO: 'assets/bg_witness.webp',
  MARUJA: 'assets/bg_witness.webp',
  RUFINO: 'assets/bg_witness.webp',
  BERRONDO: 'assets/bg_witness.webp',
  NICANOR: 'assets/bg_witness.webp',
  GENOVEVA: 'assets/bg_witness.webp',
  CASIMIRO: 'assets/bg_witness.webp'
};
