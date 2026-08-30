// @Architecture(descriptionShort="Case 3 day-3 testimony 1 GIRO 2 success dialogue", type="data", icon="layers")
/**
 * Case 3 Trial Day 3 — Testimony 5 success (Barriga / segunda víctima).
 */

import type { DialogueLine } from '../../../types/index.js';

export const CASE3_T5_SUCCESS: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: '¡PROTESTO! ¡Señor Juez, antes de continuar quiero que conste algo!', sfx: 'whoosh', bgm: 'objection', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'Durante tres días esta defensa NO ha señalado a ningún testigo. Ni al sargento, ni a la señora Chimoltrufia, ni al muchacho. Yo no vine a repartir culpas: vine a leer pruebas.', pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: 'Y estas pruebas dicen una cosa que no me da ningún gusto decir.', sfx: 'desk_slam', pose: 'donramon_slam' },
  { speaker: 'DEFENSA', text: '¡Estas son las ataduras de la bodega! ¡El nudo de la mordaza quedó AL FRENTE, del lado izquierdo!', pose: 'donramon_point' },
  { speaker: 'JUEZ', text: '¿Y eso qué significa, Licenciado?', pose: 'judge_thinking' },
  { speaker: 'DEFENSA', text: '¡Que quien la ató estaba de FRENTE a esa boca! ¡Nadie amordaza a otro por la espalda y va a hacerle el nudo por delante!', sfx: 'desk_slam', pose: 'donramon_slam' },
  { speaker: 'CHAPULIN', text: '¡Y hay más! ¡Veinte minutos amarrado y las muñecas sin una raspadura! ¡Y en el polvo del piso no hay ni una marca de forcejeo, nomás la sentadita!', sfx: 'desk_slam', pose: 'chapulin_slam' },
  { speaker: 'CHAPATIN', text: '¡Yo lo revisé esa noche! ¡Ese señor no forcejeó ni un segundo! ¡Y si alguien lo duda que venga y le explico con la bolsa!', pose: 'chapatin_enojado' },
  { speaker: 'NARRADOR', text: '(Silencio absoluto en la sala. Don Aniceto Rebollar deja de sonreír por primera vez en veinticinco años.)', sfx: 'realization' },
  { speaker: 'JUEZ', text: '¡¿Está usted diciendo que la segunda víctima... se ató sola?!', pose: 'judge_shock' },
  { speaker: 'BARRIGA', text: 'No... No, no, no. Licenciado, usted no entiende. Yo a ese hombre le confié las cuentas veinticinco años.', pose: 'barriga_shock' },
  { speaker: 'DEFENSA', text: 'Lo sé, señor Barriga. Por eso le confió también el secreto. Y por eso... es el único que pudo usarlo.', pose: 'donramon_idle' },
  { speaker: 'SUPER SAM', text: '¡OBJECTION! ¡La fiscalía no permitirá que se linche a una víctima con un nudo mal hecho! ¡Que el señor Rebollar suba a defenderse!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'ANICETO', text: 'Con mucho gusto, señor fiscal. Con muchísimo gusto.', pose: 'aniceto_sweat' }
];
