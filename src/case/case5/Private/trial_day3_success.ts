// @Architecture(descriptionShort="Case 5 day-3 opening present, contradiction successes, GIRO 3", type="data", icon="layers")
/**
 * Case 5 Trial Day 3 — opening present, T6/T7/T8 successes, GIRO 3 (spec §15).
 */

import type { DialogueLine } from '../../../types/index.js';

export const CASE5_DAY3_OPENING_PRESENT_SUCCESS: DialogueLine[] = [
  { speaker: 'DEFENSA', text: 'Los efectos personales de la víctima, señor juez. Dos relojes parados, un moño y una libreta.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'Y en la libreta, cinco puntos numerados que este hombre escribió en el penal el ocho de noviembre.', pose: 'chapulin_point' },
  { speaker: 'JUEZ', text: 'Léalos.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'DEFENSA', text: '«Punto uno. La tarjeta que me decomisaron en julio tiene la ese caída. La miré nueve años, renglón por renglón.»', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: '«Punto dos. La ficha del museo que salió en el periódico en agosto tiene la ese caída.»', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: '«Punto tres. Las escribió el mismo aparato. Un aparato no se corrige solo.»', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: '«Punto cuatro. Yo sé dónde está ese aparato, porque tecleé en él de mil novecientos sesenta y dos a mil novecientos setenta y uno.»', pose: 'chapulin_point' },
  { speaker: 'NARRADOR', text: 'Murmullo en la galería.', sfx: 'realization' },
  { speaker: 'DEFENSA', text: '«Punto cinco. Lo que no sé es cómo decirlo sin que parezca que me quiero salvar. Y me quiero salvar.»', pose: 'chapulin_idle' },
  { speaker: 'NARRADOR', text: 'Silencio.', bgm: 'suspense' },
  { speaker: 'JUEZ', text: '...Que se asiente íntegra esa libreta.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'JUEZ', text: 'Y que conste que este tribunal condenó a ese hombre en julio y que su condena sigue firme.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'Lo que hizo en julio no lo disculpa nada. Lo que quiso hacer en noviembre no lo redime.', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: 'Pero esta corte no va a permitir que lo que quiso hacer en noviembre se pierda por segunda vez.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'DON RAMÓN', text: '(...Gracias, señor juez.)', pose: 'donramon_idle' },
  { speaker: 'SUPER SAM', text: '...Your Honor.', pose: 'supersam_sweat' },
  { speaker: 'JUEZ', text: 'Después, señor fiscal. Primero la defensa va a llamar a su testigo.', pose: 'judge_neutral' },
  { speaker: 'DEFENSA', text: 'La defensa llama al cargador del depósito de bienes del Archivo Judicial.', pose: 'chapulin_point' },
  { speaker: 'CHOMPIRAS', text: '...¡¿Yo?!', pose: 'chompiras_nervous' },
  { speaker: 'JUEZ', text: 'Nombre y ocupación.', pose: 'judge_neutral' },
  { speaker: 'CHOMPIRAS', text: '...Me dicen el Chómpiras, señor juez. Cargador. Con seguro y con aguinaldo.', pose: 'chompiras_nervous' },
  { speaker: 'CHOMPIRAS', text: 'Y antes de nada quiero decir que yo salí inocente en agosto y que tengo el papel.', pose: 'chompiras_idle' },
  { speaker: 'JUEZ', text: 'La corte lo recuerda perfectamente y lo felicita. Declare usted.', sfx: 'gavel', pose: 'judge_gavel' }
];

export const CASE5_D3_T1_INVENTARIO_SUCCESS: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: '¡PROTESTO!', sfx: 'desk_slam', bgm: 'objection', pose: 'chapulin_slam' },
  { speaker: 'DEFENSA', text: 'Señor juez, el testigo dice «libros viejos y unos cajones». Y es lo que él ve, y lo dice de buena fe.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'Pero lo que la corte escribió de ese huacal en 1971 consta en el inventario de la masa: cuarenta y siete partidas.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'Partida doce: cedulario, once mil cuatrocientas tarjetas.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'Partida cuarenta y uno: máquina de escribir Olivetti Lexikon 80.', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'JUEZ', text: 'Que se asiente.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'DEFENSA', text: 'Y una más, señor juez, porque nadie la ha leído en voz alta en once años.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'Partida cuarenta y cuatro: ejemplares de la edición de lujo sin vender, doscientos diez.', pose: 'chapulin_idle' },
  { speaker: 'JUEZ', text: '¿Edición de lujo?', pose: 'judge_thinking' },
  { speaker: 'DEFENSA', text: 'Media piel, señor juez, con cantoneras de latón en el lomo. La que nadie compró.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'Por eso quebró la empresa: dejó doscientas diez colecciones de lujo completas sin vender.', pose: 'chapulin_idle' },
  { speaker: 'BERRONDO', text: 'Doscientos diez ejemplares sueltos sin vender, licenciado. No doscientas diez colecciones completas. Fue un desastre memorable.', pose: 'berrondo_idle' },
  { speaker: 'DEFENSA', text: '(Gracias, licenciado.)', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: '(Otra vez me corrigió. Y otra vez me dio un dato que no le pedí.)', pose: 'chapulin_idle' },
  { speaker: 'JUEZ', text: 'Defensa: ¿qué fecha completa aparece en la tira de hasta arriba del huacal?', pose: 'judge_thinking' }
];

export const CASE5_D3_T1_HUACAL_SUCCESS: DialogueLine[] = [
  { cutin: 'objection_toma_eso', speaker: 'DEFENSA', text: '¡TOMA ESO!', sfx: 'desk_slam', pose: 'chapulin_slam' },
  { speaker: 'DEFENSA', text: 'Señor juez, el testigo declaró que ese huacal se destapa los jueves.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'Y la tira de hasta arriba dice, con todas sus letras: «SÁB cuatro de diciembre». La respuesta está escrita en la prueba que acabo de presentar.', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'JUEZ', text: '¡Cáspita!', pose: 'judge_shock' },
  { speaker: 'CHOMPIRAS', text: '¡Ah, pues sí! ¡El sábado yo no fui! ¡Yo los sábados juego dominó!', pose: 'chompiras_nervous' },
  { speaker: 'DEFENSA', text: '¿Y entonces quién le destapó el huacal?', pose: 'chapulin_point' },
  { speaker: 'CHOMPIRAS', text: 'Pues él solito, licenciado. La pata de cabra se queda colgada del clavo.', pose: 'chompiras_idle' },
  { speaker: 'DEFENSA', text: '¿Y para subir algo pesado necesitaba que tú manejaras el montacargas?', pose: 'chapulin_idle' },
  { speaker: 'CHOMPIRAS', text: 'No, licenciado. Yo tengo el mando de cargador y el síndico tiene el suyo. De sótano a primero tarda minuto y medio.', pose: 'chompiras_idle' },
  { speaker: 'CHOMPIRAS', text: 'El licenciado Berrondo sabe manejarlo. Lo vi hacerlo dos veces cuando yo estaba descargando en el patio.', pose: 'chompiras_nervous' },
  { speaker: 'BERRONDO', text: 'Señor juez, yo lo declaré ayer: bajé el sábado porque una diligencia iba a tocar el bien.', pose: 'berrondo_idle' },
  { speaker: 'BERRONDO', text: 'Un depositario que sólo baja los jueves y deja pasar una diligencia en sábado merece una queja en el colegio.', pose: 'berrondo_idle' },
  { speaker: 'DEFENSA', text: '(Otra vez tiene razón. Otra vez.)', pose: 'chapulin_idle' },
  { speaker: 'JUEZ', text: 'La corte anota la explicación y ordena que se agregue al acta la fotografía de la tapa del huacal.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'SARGENTO', text: 'Más de doscientas cincuenta tiras, señor juez. Las revisé con el perito.', pose: 'pazguato_decidido' },
  { speaker: 'SARGENTO', text: 'Y el perito dejó su dictamen ocular de la máquina. ¿Lo leo?', pose: 'pazguato_decidido' },
  { speaker: 'JUEZ', text: 'Léalo.', pose: 'judge_neutral' },
  { speaker: 'SARGENTO', text: '«La barra de tipo correspondiente a la ese minúscula está vencida nueve décimas de milímetro.»', pose: 'pazguato_idle', updateEvidence: 'maquina_escribir' },
  { speaker: 'SARGENTO', text: '«Imprime media línea por debajo del renglón y medio grado inclinada a la izquierda.»', pose: 'pazguato_idle' },
  { speaker: 'DEFENSA', text: '(La ese caída. Como en la libreta del muerto.)', pose: 'chapulin_panic' },
  { speaker: 'SUPER SAM', text: '¡Objection! ¡Una máquina con una tecla chueca no es un asesino!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'JUEZ', text: 'No lo es, señor fiscal. Pero es un aparato que escribe igual que algo que apareció en el patio de un museo.', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: 'Y esta corte quiere saber quién lo escribió y quién sabía qué.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'El testigo puede retirarse.', sfx: 'gavel', pose: 'judge_gavel', updateProfile: 'perfil_chompiras' },
  { speaker: 'NARRADOR', text: 'Super Sam se pone de pie sin que nadie se lo pida.', bgm: 'suspense' },
  { speaker: 'SUPER SAM', text: 'Your Honor. La fiscalía solicita rendir declaración.', pose: 'supersam_idle' },
  { speaker: 'JUEZ', text: '¿La fiscalía solicita QUÉ?', pose: 'judge_shock' },
  { speaker: 'SUPER SAM', text: 'Que me tomen declaración a mí, Your Honor. Bajo protesta.', pose: 'supersam_idle' },
  { speaker: 'DEFENSA', text: '¡¿Qué?!', pose: 'chapulin_panic' },
  { speaker: 'DON RAMÓN', text: '(Déjelo, joven.)', pose: 'donramon_idle' },
  { speaker: 'DON RAMÓN', text: '(Ese hombre lleva cuatro meses cargando una bolsa vacía. Déjelo.)', pose: 'donramon_sweat' },
  { speaker: 'JUEZ', text: '...La corte lo autoriza, y designa al secretario para que actúe como ministerio público mientras tanto.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'JUEZ', text: 'Nombre, cargo y protesta.', pose: 'judge_neutral' },
  { speaker: 'SUPER SAM', text: 'Sam Sullivan. Agente del ministerio público adscrito a este juzgado.', pose: 'supersam_idle' },
  { speaker: 'SUPER SAM', text: 'Protesto decir verdad. Y le advierto a esta corte que le va a salir barato: voy a ser rápido.', pose: 'supersam_idle' },
  { speaker: 'JUEZ', text: 'Declare usted.', sfx: 'gavel', pose: 'judge_gavel' }
];
