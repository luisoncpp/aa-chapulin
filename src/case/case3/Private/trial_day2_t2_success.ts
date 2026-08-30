// @Architecture(descriptionShort="Case 3 day-2 testimony 2 success and adjournment", type="data", icon="layers")
/**
 * Case 3 Trial Day 2 — Testimony 4 success (Aniceto / coartada del doctor).
 */

import type { DialogueLine } from '../../../types/index.js';

export const CASE3_T4_SUCCESS: DialogueLine[] = [
  { cutin: 'objection_toma_eso', speaker: 'DEFENSA', text: '¡TOMA ESO! ¡Esos pasos no pudieron ser los del Doctor Chapatín!', sfx: 'whoosh', bgm: 'pursuit', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: '¡Esta es la libreta de consultas de su clínica! ¡15 de septiembre, 10:50 de la noche: cardiotónico aplicado, paciente N.B., cobro: NADA!', sfx: 'desk_slam', pose: 'donramon_slam' },
  { speaker: 'SUPER SAM', text: '¡Un papel escrito por el propio acusado! ¡Objection!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: '¡Entonces vea su bolsa de papel, la que el sargento levantó de la escena! ¡Ampolleta vacía y jeringa recién usada! ¡Mi cliente venía de inyectar a alguien en el callejón, señor fiscal, no de asaltar una caja fuerte!', pose: 'donramon_point' },
  { speaker: 'NONO', text: '¡ERA YO!', sfx: 'realization', pose: 'nono_llorando' },
  { speaker: 'NARRADOR', text: '(El joven Ñoño se pone de pie en la galería, con la cara empapada.)' },
  { speaker: 'NONO', text: '¡Era yo! ¡Yo bajé al callejón a las diez cuarenta y cinco porque me faltaba el aire! ¡El doctor lleva un año inyectándome a escondidas y sin cobrarme para que mi papi no se entere de que estoy malo del corazón!', pose: 'nono_llorando' },
  { speaker: 'CHAPATIN', text: '¡Muchacho imprudente! ¡Eso era secreto profesional!', pose: 'chapatin_enojado' },
  { speaker: 'CHAPATIN', text: '...Y baje la voz, que se le va a subir la presión.', pose: 'chapatin_conmovido' },
  { speaker: 'JUEZ', text: '¡Entonces el acusado estaba FUERA del edificio durante el traslado del cuerpo!', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'Recapitulemos, señor Juez. Al Señor Barriga lo golpearon en el despacho. Lo pasearon en un carrito a las 10:45. Y a las 10:45 mi cliente estaba en el callejón, con una jeringa en una mano y un paciente en la otra.', pose: 'donramon_idle' },
  { speaker: 'SUPER SAM', text: '¡G-grrrk!', pose: 'supersam_sweat' },
  { speaker: 'ANICETO', text: 'Yo me alegro, Licenciado. De verdad. Pero entonces... el que me atacó a mí sigue suelto, y ni usted ni yo sabemos quién es.', pose: 'aniceto_terciopelo' },
  { speaker: 'JUEZ', text: 'La defensa ha desmontado la acusación... pero sin un culpable alternativo, este tribunal no puede absolver.', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: 'Ordeno registrar la bodega y localizar ese cartucho tres. ¡Se aplaza la sesión veinticuatro horas!', pose: 'judge_gavel', sfx: 'gavel' },
  { speaker: 'SUPER SAM', text: '¡Sargento Pazguato! ¡Si mañana no aparece ese cartucho, le descuento la quincena, el aguinaldo y la torta!', pose: 'supersam_point' },
  { speaker: 'PAZGUATO', text: '...Sí, mi fiscal. Aunque tenga que meterme al bote de basura completito.', pose: 'pazguato_decidido' }
];
