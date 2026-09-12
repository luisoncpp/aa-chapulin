// @Architecture(descriptionShort="Case 3 call-to-the-stand beats opening every testimony", type="data", icon="layers")
/**
 * Case 3 — "Llamado al estrado".
 * Each block is appended to the dialogue the engine plays right before its testimony:
 * the prosecution calls the witness, the court takes name and occupation, and the judge
 * orders the testimony to begin. Returning witnesses get a shorter recall beat instead.
 */

import type { DialogueLine } from '../../../types/index.js';

/** Day 1 · Testimony 1 — the Sergeant. His full name was already spoken at the radio station. */
export const CASE3_CALL_SARGENTO: DialogueLine[] = [
  { speaker: 'SUPER SAM', pose: 'supersam_point', text: '¡La fiscalía llama a su primer testigo: el oficial que levantó la escena! ¡Y que suba corriendo, que cada minuto de este tribunal cuesta dinero!' },
  { speaker: 'SARGENTO', pose: 'pazguato_saludo', text: '¡A sus órdenes, mi fiscal! Ya voy, ya voy...' },
  { speaker: 'JUEZ', pose: 'judge_neutral', text: 'Testigo, diga su nombre completo y su ocupación para el acta.' },
  { speaker: 'SARGENTO', pose: 'pazguato_saludo', text: 'Policía Preventiva, señor Juez, grado de sargento. Y mi nombre completo es Sargento Refu...' },
  { speaker: 'SUPER SAM', pose: 'supersam_slam', sfx: 'desk_slam', text: '¡STOP! ¡Su nombre completo dura once segundos y once segundos cuestan dinero! ¡Anote "el Sargento" y siga!' },
  { speaker: 'SARGENTO', pose: 'pazguato_sweat', text: 'Ahí está, señor Juez. Por eso todos me dicen nomás "el Sargento": es más barato.' },
  { speaker: 'DEFENSA', pose: 'donramon_idle', text: '(Pobre hombre. A mí me descuentan la renta; a él le descuentan hasta el nombre.)' },
  { speaker: 'JUEZ', pose: 'judge_gavel', sfx: 'gavel', text: 'Queda asentado. Sargento, rinda su testimonio.' }
];

/** Day 1 · Testimony 2 — La Chimoltrufia. Her occupation answer contradicts itself twice. */
export const CASE3_CALL_CHIMOLTRUFIA: DialogueLine[] = [
  { speaker: 'SUPER SAM', pose: 'supersam_sweat', text: 'La fiscalía llama a su segunda testigo. Ella estaba en ese pasillo y ella va a desmentir al Licenciado. ¡Y sea breve, señora: time is money!' },
  { speaker: 'CHIMOLTRUFIA', pose: 'chimoltrufia_idle', text: '¡Ay, sí! Fíjese que yo soy bien breve... aunque también soy bien platicadora.' },
  { speaker: 'JUEZ', pose: 'judge_neutral', text: 'Señora, para el acta: su nombre y su ocupación.' },
  { speaker: 'CHIMOLTRUFIA', pose: 'chimoltrufia_confundida', text: 'La Chimoltrufia, para servirle. Y soy locutora de horóscopos de la XEVC... bueno, ayudante de locutora. Bueno, la que hace el café. ¡Como digo una cosa, digo otra!' },
  { speaker: 'JUEZ', pose: 'judge_thinking', text: '...¿Y cuál de las tres le anoto?' },
  { speaker: 'CHIMOLTRUFIA', pose: 'chimoltrufia_idle', text: 'Las tres, mi Juez. Total, una sola me pagan.' },
  { speaker: 'DEFENSA', pose: 'donramon_sweat', text: '(Chanfle. Esta señora se contradice con la que habló antes... y la que habló antes era ella.)' },
  { speaker: 'JUEZ', pose: 'judge_gavel', sfx: 'gavel', text: 'Queda asentado... lo que haya quedado. Testigo, proceda con su testimonio.' }
];

/** Day 2 · Testimony 1 — Ñoño. The defense called him; the prosecution grabs the call anyway. */
export const CASE3_CALL_NONO: DialogueLine[] = [
  { speaker: 'SUPER SAM', pose: 'supersam_slam', sfx: 'desk_slam', text: '¡Objection! ¡Si la defensa lo llama en un minuto, la fiscalía lo llama en treinta segundos! ¡Que suba el muchacho!' },
  { speaker: 'JUEZ', pose: 'judge_neutral', text: 'Suba el testigo. Diga su nombre y su ocupación.' },
  { speaker: 'NONO', pose: 'nono_nervioso', text: 'Ñoño, señor Juez... hijo del señor Barriga. Y soy el operador de la consola de la XEVC.' },
  { speaker: 'JUEZ', pose: 'judge_thinking', text: '¿Y cuál de las dos le anoto como ocupación: operador, o hijo de la víctima?' },
  { speaker: 'NONO', pose: 'nono_llorando', text: 'Las dos me están saliendo muy mal, señor Juez.' },
  { speaker: 'DEFENSA', pose: 'donramon_idle', text: '(Ay, muchacho. Yo tengo una hija de tu edad y esa cara me la sé de memoria.)' },
  { speaker: 'JUEZ', pose: 'judge_gavel', sfx: 'gavel', text: 'La corte tomará su declaración con paciencia. Proceda, joven.' }
];

/** Day 2 · Testimony 2 — Don Aniceto's first appearance. He cannot let a mispronunciation pass. */
export const CASE3_CALL_ANICETO: DialogueLine[] = [
  { speaker: 'JUEZ', pose: 'judge_neutral', text: 'Que pase el testigo. Diga su nombre y su ocupación para el acta.' },
  { speaker: 'ANICETO', pose: 'aniceto_idle', text: 'Aniceto Rebollar, locutor titular de la XEVC. Veinticinco años al aire, señor Juez, sin faltar una noche.' },
  { speaker: 'SUPER SAM', pose: 'supersam_point', text: '¡The star announcer! ¡El de la voz de oro! ¡Míster Re-BÓ-llar!' },
  { speaker: 'ANICETO', pose: 'aniceto_idle', text: 'Rebollár, señor fiscal. Aguda. Termina en erre, y toda palabra terminada en erre carga la fuerza al final. "Re-BÓ-llar" lo dicen los que leen de corrido sin entender lo que leen.' },
  { speaker: 'SUPER SAM', pose: 'supersam_sweat', text: '...Grrr.' },
  { speaker: 'CHAPULIN', pose: 'chapulin_idle', text: '¡Chanfle! Al fiscal le acaban de descontar una sílaba.' },
  { speaker: 'JUEZ', pose: 'judge_gavel', sfx: 'gavel', text: 'Señor Rebollar, con la dicción que usted guste: rinda su testimonio.' }
];

/** Day 3 · Testimony 1 — Señor Barriga, wheeled in awake for the first time. */
export const CASE3_CALL_BARRIGA: DialogueLine[] = [
  { speaker: 'JUEZ', pose: 'judge_neutral', text: 'Que pase la víctima. La corte autoriza que declare sentado.' },
  { speaker: 'NARRADOR', text: '(Dos enfermeros empujan la silla de ruedas hasta el estrado. La sala entera se queda callada.)' },
  { speaker: 'BARRIGA', pose: 'barriga_vendado', text: 'Buenas tardes. Perdonen que no me ponga de pie.' },
  { speaker: 'JUEZ', pose: 'judge_neutral', text: 'Nadie se lo pide, señor. Para el acta: su nombre y su ocupación.' },
  { speaker: 'BARRIGA', pose: 'barriga_vendado', text: 'Barriga. Dueño y director de la radiodifusora XEVC... y casero, señor Juez. Aunque hoy vengo nomás de víctima.' },
  { speaker: 'DEFENSA', pose: 'donramon_sweat', text: '(De todos los estrados del mundo, me tenía que tocar interrogar al mío.)' },
  { speaker: 'JUEZ', pose: 'judge_gavel', sfx: 'gavel', text: 'La corte agradece su esfuerzo, señor Barriga. Rinda su testimonio.' }
];

/** Day 3 · Testimony 2 — Don Aniceto recalled. Already identified, and already unravelling. */
export const CASE3_RECALL_ANICETO: DialogueLine[] = [
  { speaker: 'JUEZ', pose: 'judge_neutral', text: 'El tribunal llama de nuevo al estrado a don Aniceto Rebollar. El testigo ya está identificado en actas.' },
  { speaker: 'ANICETO', pose: 'aniceto_sweat', text: 'Identificado, sí. Aunque hoy me llaman con otro tono, y el tono también queda en actas.' },
  { speaker: 'SUPER SAM', pose: 'supersam_point', text: '¡Mismo testigo, mismo juramento, mismo minuto! ¡La fiscalía no paga horas extras!' },
  { speaker: 'DEFENSA', pose: 'donramon_idle', text: 'Don Aniceto, yo no vine a quitarle sus veinticinco años. Vine a que me explique una noche.' },
  { speaker: 'ANICETO', pose: 'aniceto_sweat', text: 'Una noche. Naturalmente. Pregunte, Licenciado: yo hablo bonito hasta cuando me acusan.' },
  { speaker: 'JUEZ', pose: 'judge_gavel', sfx: 'gavel', text: 'Bajo el mismo juramento, señor Rebollar. Rinda su nuevo testimonio.' }
];
