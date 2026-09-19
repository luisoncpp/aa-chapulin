// @Architecture(descriptionShort="Case 5 day-2 courtroom intro, opening present, testimony exports", type="data", icon="layers")
/**
 * Case 5 Trial Day 2 — Opening (§13.1), `openingPresent` de persona, testimonies T4/T5.
 */

import type { DialogueLine, OpeningPresent } from '../../../types/index.js';
import { CASE5_DAY2_INTRO } from './trial_openings.js';
import { CASE5_DAY2_OPENING_PRESENT_SUCCESS } from './trial_day2_success.js';
import { CASE5_TESTIMONY_4 } from './trial_day2_t1.js';
import { CASE5_TESTIMONY_5 } from './trial_day2_t2.js';

export { CASE5_TESTIMONY_4, CASE5_TESTIMONY_5 };

export const CASE5_DAY2_INTRO_FULL: DialogueLine[] = [
  ...CASE5_DAY2_INTRO,
  { speaker: 'JUEZ', pose: 'judge_gavel', text: 'Se reanuda la audiencia. Esta corte quiere saber qué prueban realmente el segundo libro y ese recibo de renta. Fiscalía: el libro que ordenó esta corte.', sfx: 'gavel' },
  { speaker: 'SUPER SAM', pose: 'supersam_point', text: 'Aquí está, Your Honor. Y le advierto que es de una insignificancia absoluta.' },
  { speaker: 'NARRADOR', text: 'El alguacil deposita sobre la mesa un libro empastado en hule negro, mucho más delgado que el otro.' },
  { speaker: 'JUEZ', pose: 'judge_neutral', text: 'Léalo, señor secretario. Hoja del cuatro de diciembre.' },
  { speaker: 'SECRETARIO', text: 'Cuatro asientos, señor juez.' },
  { speaker: 'SECRETARIO', text: 'Uno. Hermenegildo Rosas, perito valuador. Entrada nueve diez, gafete devuelto nueve cuarenta.' },
  { speaker: 'SECRETARIO', text: 'Dos. Licenciado Fulgencio Berrondo, síndico de la quiebra 114 diagonal 1971. Entrada dieciséis cero cinco, gafete devuelto dieciséis cincuenta.' },
  { speaker: 'SECRETARIO', text: 'Tres. Licenciado Hilario Balbuena, actuario. Entrada diecisiete cuarenta y cuatro, gafete devuelto dieciocho cero cinco.' },
  { speaker: 'SECRETARIO', text: 'Cuatro. Sargento Refugio Pazguato, policía judicial. Entrada diecisiete cincuenta y dos, gafete devuelto veintidós quince.' },
  { speaker: 'NARRADOR', text: 'Silencio absoluto en la sala.', bgm: 'suspense' },
  { speaker: 'DEFENSA', text: '(...El segundo nombre es el señor que me dio café esta mañana.)', pose: 'chapulin_panic' },
  { speaker: 'SUPER SAM', text: '¡Your Honor, antes de que la galería empiece a inventar!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'SUPER SAM', text: '¡El licenciado Berrondo es auxiliar de la justicia y estaba haciendo su trabajo! ¡Yo mismo lo invité a coadyuvar el lunes por la mañana, cuando él me comunicó su carácter de síndico de la víctima!', pose: 'supersam_point' },
  { speaker: 'BERRONDO', text: 'Es exacto, señor juez. Yo se lo dije al señor fiscal el lunes por la mañana, antes de la primera audiencia.', pose: 'berrondo_idle' },
  { speaker: 'BERRONDO', text: 'Consideré que ocultarlo habría sido indigno y que declararlo sería útil. Me pareció que ambas cosas eran obvias.', pose: 'berrondo_idle' },
  { speaker: 'JUEZ', text: '¿La defensa tiene algo que decir?', pose: 'judge_thinking' },
  { speaker: 'DEFENSA', text: '...La defensa tiene mucho que decir y no tiene todavía con qué decirlo, señor juez.', pose: 'chapulin_idle' },
  { speaker: 'JUEZ', text: 'Entonces la corte se lo va a impedir, licenciado, por su propio bien.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'El licenciado Berrondo comparece como coadyuvante del ministerio público. Esta corte no le va a tomar declaración a un abogado porque la defensa esté incómoda.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'DEFENSA', text: '(Y ahí se cerró la puerta.)', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: '(La señorita de la ventanilla lleva ese libro. Me la apunto en el Acta, aunque hoy no me sirva.)', pose: 'chapulin_idle', addEvidence: 'libro_peritos', addProfile: 'perfil_genoveva' },
  { speaker: 'JUEZ', text: 'Y antes de oír al testigo de hoy, esta corte quiere una cosa en actas, porque llevamos dos días hablando de un hombre como si fuera un mueble.', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: 'Defensa: diga usted quién era la víctima y qué estaba haciendo en ese Archivo.', sfx: 'gavel', pose: 'judge_gavel' }
];

export const CASE5_DAY2_OPENING_PRESENT: OpeningPresent = {
  profileTarget: ['perfil_casimiro'],
  prompt: '¿Quién era el hombre que murió en el pasillo 7?',
  successDialogue: CASE5_DAY2_OPENING_PRESENT_SUCCESS
};
