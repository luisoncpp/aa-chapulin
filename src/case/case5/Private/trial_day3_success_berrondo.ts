// @Architecture(descriptionShort="Case 5 day-3 Berrondo successes and GIRO 3", type="data", icon="layers")
/**
 * Case 5 Trial Day 3 — T8 (Berrondo) successes and GIRO 3 (spec §15.4–15.5).
 */

import type { DialogueLine } from '../../../types/index.js';

export const CASE5_D3_T3_ACUSE_SUCCESS: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: '¡PROTESTO!', sfx: 'desk_slam', bgm: 'objection', pose: 'chapulin_slam' },
  { speaker: 'DEFENSA', text: 'Señor juez, el libro de acuses del juzgado, hoja del veintinueve de noviembre.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: '«Oficio 4471. Diligencia de cotejo documental promovida por el interno C. Lengua». Archivo Judicial, cuatro de diciembre, diecisiete horas.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: '«Entregado en: Sindicatura de la quiebra ciento catorce diagonal setenta y uno.»', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'Y al margen, señor juez, una rúbrica.', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'NARRADOR', text: 'La sala entera se vuelve hacia el estrado.', sfx: 'realization' },
  { speaker: 'BERRONDO', text: '......', pose: 'berrondo_idle' },
  { speaker: 'JUEZ', text: 'Licenciado Berrondo. ¿Es suya esa rúbrica?', pose: 'judge_neutral' },
  { speaker: 'BERRONDO', text: 'Es mía, señor juez.', pose: 'berrondo_idle' },
  { speaker: 'JUEZ', text: '¿Firmó usted de recibido el veintinueve de noviembre un oficio que decía el día, la hora, el lugar y el nombre?', pose: 'judge_shock' },
  { speaker: 'BERRONDO', text: 'Lo firmé.', pose: 'berrondo_idle' },
  { speaker: 'JUEZ', text: '¡¿Y acaba de declarar bajo protesta que nadie le avisó?!', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'BERRONDO', text: '...Acabo de declararlo.', pose: 'berrondo_sweat' },
  { speaker: 'NARRADOR', text: 'Primera gota de sudor en tres jornadas.', sfx: 'realization', bgm: 'pursuit' },
  { speaker: 'DEFENSA', text: '¡Y la señorita de correspondencia se acuerda de usted, licenciado!', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: '¡Se acuerda porque le dijo «señorita», y nadie le dice «señorita»!', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'BERRONDO', text: '......Firmo doscientos acuses al mes, señor juez.', pose: 'berrondo_sweat' },
  { speaker: 'DEFENSA', text: '¡Eso lo dijo el fiscal hace una hora y a él le costó la carrera!', pose: 'chapulin_point' },
  { speaker: 'BERRONDO', text: 'A mí me va a costar más, licenciado.', pose: 'berrondo_idle' },
  { speaker: 'BERRONDO', text: 'Rectifico mi declaración: sí se me notificó, el veintinueve de noviembre, y lo olvidé.', pose: 'berrondo_idle' },
  { speaker: 'BERRONDO', text: 'Es un olvido gravísimo en un hombre de mi oficio y no lo voy a excusar.', pose: 'berrondo_idle' },
  { speaker: 'JUEZ', text: 'Que se asiente la rectificación.', sfx: 'gavel', pose: 'judge_gavel', updateProfile: 'perfil_berrondo' },
  { speaker: 'DEFENSA', text: '(Lo agarré. Por fin lo agarré en una.)', pose: 'chapulin_point' },
  { speaker: 'DON RAMÓN', text: '(Joven, no se ponga contento.)', pose: 'donramon_sweat' },
  { speaker: 'DON RAMÓN', text: '(Un olvido no es un homicidio. Y ese señor acaba de cambiar una mentira por un defecto de carácter.)', pose: 'donramon_idle' },
  { speaker: 'JUEZ', text: 'Defensa: ¿de dónde salió el libro con el que mataron a ese hombre?', pose: 'judge_thinking' }
];

const CASE5_DAY3_GIRO3: DialogueLine[] = [
  { speaker: 'JUEZ', text: 'Esta corte va a hacer una cuenta en voz alta, porque lleva tres días haciéndola por dentro.', sfx: 'gavel', bgm: 'suspense', pose: 'judge_gavel' },
  { speaker: 'JUEZ', text: 'El perito fija la muerte entre las diecisiete horas y las diecisiete treinta.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'El acusado firmó su salida a las dieciséis cincuenta y ocho.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'Y el licenciado Berrondo devolvió su gafete a las dieciséis cincuenta.', pose: 'judge_thinking' },
  { speaker: 'NARRADOR', text: 'El Juez se quita los anteojos.', bgm: 'suspense' },
  { speaker: 'JUEZ', text: 'Licenciado Chapulín: usted le demostró a esta corte que ese edificio tenía una segunda puerta.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'También demostró que devolver el gafete no equivale a salir. Nadie vio al licenciado Berrondo cruzar el portón.', pose: 'judge_thinking' },
  { speaker: 'DEFENSA', text: '¡Señor juez!', pose: 'chapulin_panic' },
  { speaker: 'JUEZ', text: 'Pero una salida no probada tampoco es una permanencia probada. A las cinco, esta corte no puede colocar a nadie en ese pasillo.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'La segunda puerta abrió una posibilidad. Después de tres días, la defensa todavía no la convirtió en presencia.', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: 'Y frente a esa ausencia queda un hecho probado: el acusado conocía el camino, salió dos minutos antes del intervalo y pudo volver durante los quince minutos sin vigilancia.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'DON RAMÓN', text: '...Señor juez, yo no volví a subir.', pose: 'donramon_shock' },
  { speaker: 'JUEZ', text: 'Lo sé, licenciado Valdés. Y esta corte no puede sentenciar con lo que sabe: sentencia con lo que le prueban.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'Mañana es el cuarto día. Esta corte no va a conceder un quinto.', sfx: 'gavel', pose: 'judge_gavel', updateProfile: 'perfil_chapulin' },
  { speaker: 'SECRETARIO', text: 'La representación social sostiene la acusación, señor juez.' },
  { speaker: 'JUEZ', text: 'Defensa: mañana a las cuatro de la tarde usted pone a alguien dentro de ese pasillo, o esta corte dicta sentencia con lo que tiene.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'Se levanta la sesión.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'NARRADOR', text: 'La sala se vacía despacio. Super Sam sale sin la bolsa de lona, que se queda sobre la mesa.' },
  { speaker: 'BERRONDO', text: 'Licenciado.', pose: 'berrondo_idle' },
  { speaker: 'DEFENSA', text: '...Licenciado.', pose: 'chapulin_idle' },
  { speaker: 'BERRONDO', text: 'Lo de la rúbrica estuvo muy bien encontrado. Y lo del sello del tomo, mejor.', pose: 'berrondo_idle' },
  { speaker: 'BERRONDO', text: 'Si alguna vez quiere usted ejercer de verdad, hable conmigo. Lo digo en serio.', pose: 'berrondo_idle' },
  { speaker: 'DEFENSA', text: '(Y lo dice en serio. Eso es lo peor de todo: que lo dice en serio.)', pose: 'chapulin_idle' }
];

export const CASE5_D3_T3_TOMO_SUCCESS: DialogueLine[] = [
  { cutin: 'objection_toma_eso', speaker: 'DEFENSA', text: '¡TOMA ESO!', sfx: 'desk_slam', pose: 'chapulin_slam' },
  { speaker: 'DEFENSA', text: 'Señor juez, el arma de este homicidio es el Tomo XI de El Saber Universal, edición económica, encuadernado en tela.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'Y en la guarda tiene un sello de tinta violeta que nadie ha leído en voz alta en tres días.', pose: 'chapulin_idle' },
  { speaker: 'JUEZ', text: 'Léalo.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'DEFENSA', text: '«Donación del síndico de la quiebra ciento catorce diagonal setenta y uno. Catorce de octubre de mil novecientos setenta y uno.»', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'NARRADOR', text: 'Murmullo largo en la galería.', sfx: 'realization' },
  { speaker: 'JUEZ', text: '¿Usted donó esos libros a ese Archivo, licenciado?', pose: 'judge_shock' },
  { speaker: 'BERRONDO', text: 'Yo los doné, señor juez. Veinticuatro ranuras y veintitrés tomos, porque el trece no existió nunca.', pose: 'berrondo_idle' },
  { speaker: 'BERRONDO', text: 'Nadie los quería. Eran veintitrés volúmenes pesados y el remate por kilo no cubría el flete.', pose: 'berrondo_idle' },
  { speaker: 'BERRONDO', text: 'Los regalé al juzgado para no pagar acarreo, y lo declaré, y hay recibo.', pose: 'berrondo_idle' },
  { speaker: 'DEFENSA', text: 'Señor juez: a la víctima la mataron con un libro que regaló el testigo.', pose: 'chapulin_point' },
  { speaker: 'BERRONDO', text: 'Hace once años, licenciado. Y a la vista de todos, en un pasillo público, durante once años.', pose: 'berrondo_idle' },
  { speaker: 'BERRONDO', text: 'Si haber donado un libro fuera indicio, la mitad de las bibliotecas de esta ciudad estaría procesada.', pose: 'berrondo_idle' },
  { speaker: 'JUEZ', text: '...La corte concede que el señor tiene razón. Otra vez.', pose: 'judge_thinking' },
  { speaker: 'DEFENSA', text: '(Otra vez.)', pose: 'chapulin_idle' },
  ...CASE5_DAY3_GIRO3
];
