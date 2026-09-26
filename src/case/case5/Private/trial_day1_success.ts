// @Architecture(descriptionShort="Case 5 day-1 contradiction and follow-up success dialogues", type="data", icon="layers")
/**
 * Case 5 Trial Day 1 — resolving presents, follow-ups, and GIRO 1 (spec §11).
 */

import type { DialogueLine } from '../../../types/index.js';

const PLATE_FOTO = 'assets/plate_foto_pericial.webp';

export const CASE5_D1_T1_FORENSE_SUCCESS: DialogueLine[] = [
  { speaker: 'DEFENSA', text: '¡PROTESTO!', sfx: 'desk_slam', cutin: 'objection_protesto', pose: 'chapulin_slam', bgm: 'objection' },
  { speaker: 'DEFENSA', text: 'Señor juez, el informe del forense fija la muerte entre las cinco y las cinco y media de la tarde.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'Y el acusado firmó su salida a las cinco menos dos. Lo dice el testigo y lo escribió el testigo con su propia pluma.', pose: 'chapulin_idle' },
  { speaker: 'SUPER SAM', text: '¡Two minutes, counselor! ¡DOS! ¡El perito puso un intervalo, no un cronómetro!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: 'Entonces hagamos la cuenta del señor fiscal, señor juez.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'Si mi cliente lo mató antes de las cinco menos dos, bajó tranquilamente una escalera, cruzó un vestíbulo, platicó con el conserje y firmó con buena letra.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'Y si lo mató después, entonces volvió a subir. Y el testigo acaba de declarar que nadie subió.', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'NICANOR', text: 'Nadie subió, señor juez. Eso sí se lo firmo.', pose: 'nicanor_idle' },
  { speaker: 'JUEZ', text: '¡Cáspita!', pose: 'judge_shock' },
  { speaker: 'JUEZ', text: 'O el acusado mató antes de firmar su salida, y el dictamen no permite excluir esos dos minutos...', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: '...o dentro de ese pasillo hubo alguien que este libro no conoce.', pose: 'judge_neutral' },
  { speaker: 'SUPER SAM', text: '¡El libro conoce a TODOS! ¡Catorce firmas, Your Honor!', pose: 'supersam_point' },
  { speaker: 'JUEZ', text: 'Defensa: ¿tiene algo que decir sobre ese libro?', pose: 'judge_thinking' }
];

export const CASE5_D1_T1_LIBRO_SUCCESS: DialogueLine[] = [
  { speaker: 'DEFENSA', text: '¡TOMA ESO! ¡El libro de visitas del público!', sfx: 'desk_slam', cutin: 'objection_toma_eso', pose: 'chapulin_slam', bgm: 'objection' },
  { speaker: 'DEFENSA', text: 'Don Nicanor: el cuatro de diciembre, ¿entraron al edificio dos policías custodiando a un preso?', pose: 'chapulin_point' },
  { speaker: 'NICANOR', text: 'Pues claro. Y a las cinco entraron otros dos, de relevo.', pose: 'nicanor_idle' },
  { speaker: 'DEFENSA', text: '¿Y firmaron?', pose: 'chapulin_idle' },
  { speaker: 'NICANOR', text: 'Uniformados no firman, licenciado. Nunca han firmado. Ni ellos, ni el cartero, ni yo, ni la señorita de la ventanilla.', pose: 'nicanor_idle' },
  { speaker: 'DEFENSA', text: 'Entonces ese día, dentro del edificio, hubo por lo menos cinco personas que no están en este libro.', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { bg: 'assets/bg_gallery_characters.webp', furniture: 'none', speaker: 'NARRADOR', text: 'Murmullo en la galería.', sfx: 'realization' },
  { speaker: 'DEFENSA', text: 'Señor juez: este libro no dice quién estuvo en el Archivo.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'Dice quién era público.', pose: 'chapulin_idle' },
  { speaker: 'SUPER SAM', text: '¡Objection! ¡Un policía de custodia no asesina a su propio preso!', pose: 'supersam_sweat' },
  { speaker: 'DEFENSA', text: 'Nadie ha dicho eso, señor fiscal, y le pido que no lo repita.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'Yo no estoy señalando a nadie. Estoy diciendo que la lista está incompleta.', pose: 'chapulin_idle' },
  { speaker: 'JUEZ', text: 'La corte comparte esa distinción y le agradece a la defensa haberla hecho.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'Testigo, puede retirarse por ahora. La corte quiere oír al agente que levantó la escena.', sfx: 'gavel', pose: 'judge_gavel', bgm: 'cross_exam_moderato' },
  { speaker: 'SUPER SAM', text: 'La fiscalía llama al Sargento Refu...', pose: 'supersam_point' },
  { speaker: 'SARGENTO', text: 'Refugio Pazguato, señor juez. Policía judicial.', pose: 'pazguato_saludo' },
  { speaker: 'SUPER SAM', text: '¡Yo iba a decirlo!', pose: 'supersam_sweat' },
  { speaker: 'SARGENTO', text: 'Es que usted nunca lo termina, señor fiscal.', pose: 'pazguato_decidido' },
  { speaker: 'JUEZ', text: 'Queda bajo protesta de decir verdad. Su testimonio.', sfx: 'gavel', pose: 'judge_gavel' }
];

export const CASE5_D1_T2_PARTE_SUCCESS: DialogueLine[] = [
  { speaker: 'DEFENSA', text: '¡PROTESTO!', sfx: 'desk_slam', cutin: 'objection_protesto', pose: 'chapulin_slam', bgm: 'objection' },
  { speaker: 'DEFENSA', text: 'Señor juez, la hoja de relevo de custodia del Archivo trae cuatro firmas y cuatro horas.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'Rangel y Nieto firman su salida a las cinco en punto.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'Cadena y Solís firman su entrada a las cinco y cuarto.', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'JUEZ', text: '¡Quince minutos!', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'Quince minutos con la reja del pasillo siete sin un solo custodio, señor juez.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'Justo en medio del intervalo en que murió ese hombre.', pose: 'chapulin_idle' },
  { speaker: 'SARGENTO', text: '...Es correcto. Y lo asenté yo, señor juez, y nadie me preguntó por ello hasta hoy.', pose: 'pazguato_decidido' },
  { speaker: 'SUPER SAM', text: '¡Su salary is...! ¡Ash!', pose: 'supersam_sweat' },
  { speaker: 'JUEZ', text: '¡Que se asiente! Entre las 17:00 y las 17:15, el pasillo siete estuvo abierto y sin vigilancia.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'SUPER SAM', text: '¡Abierto para el acusado, Your Honor! ¡Que ya había firmado su salida y podía volver a subir!', pose: 'supersam_point' },
  { speaker: 'DEFENSA', text: 'Por la escalera principal, cuyo primer escalón está a tres metros del mostrador de un hombre que llevaba treinta y un años mirando esa puerta.', pose: 'chapulin_idle' },
  { speaker: 'JUEZ', text: 'La corte concede el punto a la defensa y devuelve la pregunta a la fiscalía.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'Y quiere además una explicación sobre ese papel liso, licenciado.', pose: 'judge_thinking' }
];

export const CASE5_D1_T2_TARJETA_SUCCESS: DialogueLine[] = [
  { speaker: 'DEFENSA', text: '¡TOMA ESO!', sfx: 'desk_slam', cutin: 'objection_toma_eso', pose: 'chapulin_slam', bgm: 'objection' },
  { speaker: 'DEFENSA', text: 'Señor juez, mírela de cerca. Tres centímetros por dos y medio.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'El borde está roto recto. Como se rompe un papel cuando uno lo dobla y lo jala con calma, sobre una mesa.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'Un papel que se le arranca a alguien en un forcejeo queda hecho bola. Éste está planchado.', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'SARGENTO', text: 'Yo eso lo asenté, señor juez. «Liso».', pose: 'pazguato_decidido' },
  { speaker: 'DEFENSA', text: 'Y hay más. La mano estaba cerrada alrededor del papel, no apretándolo. El cartón no tiene ni una marca de uña.', pose: 'chapulin_point' },
  { speaker: 'JUEZ', text: '¿Qué está diciendo la defensa?', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'Que a ese hombre no le arrancaron una tarjeta.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'Que alguien le abrió la mano después, le puso un pedacito de cartón adentro y se la volvió a cerrar.', pose: 'chapulin_slam', sfx: 'desk_slam', cutin: 'objection_protesto' },
  { bg: 'assets/bg_gallery_characters.webp', furniture: 'none', speaker: 'NARRADOR', text: 'La galería se levanta.', sfx: 'gavel' },
  { speaker: 'JUEZ', text: '¡ORDEN! ¡ORDEN EN LA SALA!', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'DEFENSA', text: 'Y con la ampliación que pedimos esta mañana, señor juez: el golpe entró de arriba abajo y por detrás, sin arco.', pose: 'chapulin_point', updateEvidence: 'informe_forense_c5' },
  { speaker: 'DEFENSA', text: 'El objeto se sostuvo a dos manos y se cerró sobre la nuca. Como se cierra un libro.', pose: 'chapulin_idle' },
  { speaker: 'SUPER SAM', text: '¡Su cliente estuvo doce minutos a solas con él, counselor! ¡Sin un testigo que viera esa mesa!', pose: 'supersam_slam', sfx: 'desk_slam', updateProfile: 'perfil_donramon' },
  { speaker: 'DEFENSA', text: 'Y esos doce minutos son lo único que tengo, señor fiscal. Ya lo sé.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'Por eso no le estoy pidiendo a la corte que me crea. Le estoy pidiendo que cuente.', pose: 'chapulin_point' },
  { speaker: 'JUEZ', text: 'La corte necesita al conserje otra vez.', sfx: 'gavel', pose: 'judge_gavel', bgm: 'cross_exam_moderato' },
  { speaker: 'JUEZ', text: 'Señor Tolentino, vuelva usted al estrado. Sigue bajo protesta.', pose: 'judge_neutral' },
  { speaker: 'NICANOR', text: 'Con permiso. Y perdonen la tardanza, es que fui por mi escoba.', pose: 'nicanor_escoba' },
  { speaker: 'JUEZ', text: '...La corte le pide que deje la escoba.', pose: 'judge_thinking' },
  { speaker: 'NICANOR', text: 'Es que sin ella no sé dónde poner las manos, señor juez.', pose: 'nicanor_sweat' },
  { speaker: 'JUEZ', text: 'Déjele la escoba. Y declare usted sobre lo que vio al subir.', sfx: 'gavel', pose: 'judge_gavel' }
];

export const CASE5_D1_T3_PLANO_SUCCESS: DialogueLine[] = [
  { speaker: 'DEFENSA', text: '¡PROTESTO!', sfx: 'desk_slam', cutin: 'objection_protesto', pose: 'chapulin_slam', bgm: 'objection' },
  { speaker: 'DEFENSA', text: '¡El plano de protección civil del Archivo Judicial, señor juez! ¡Está clavado con tachuelas a dos metros de este testigo desde 1958!', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'Hay una escalera de servicio. Sube del patio de maniobras al sótano, y del sótano al extremo del pasillo siete.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'No pasa por el vestíbulo. No pasa por el mostrador. No pasa por ningún libro de visitas.', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: 'Por eso, vigilar su escalera no basta para concluir que nadie más pudo llegar al pasillo siete.', pose: 'chapulin_point' },
  { speaker: 'NICANOR', text: 'Por ahí suben los huacales, señor juez. Y el muchacho del montacargas.', pose: 'nicanor_idle' },
  { speaker: 'JUEZ', text: '¡CÁSPITA!', pose: 'judge_shock' },
  { speaker: 'SUPER SAM', text: '¡Objection! ¡Esa escalera da al patio! ¡El patio tiene portón! ¡El portón está cerrado!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: 'El portón está cerrado para el público, señor fiscal.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: '¿Y para quién está abierto?', pose: 'chapulin_idle' },
  { speaker: 'NICANOR', text: 'Pues para los peritos. Y los actuarios. Y los notarios. Y los síndicos.', pose: 'nicanor_idle' },
  { speaker: 'NICANOR', text: 'Ésos entran por la ventanilla de la señorita Genoveva.', pose: 'nicanor_idle' },
  { speaker: 'JUEZ', text: '¿Y firman?', pose: 'judge_shock' },
  { speaker: 'NICANOR', text: 'Su libro, señor juez. El de ellos.', pose: 'nicanor_idle' },
  { speaker: 'NARRADOR', text: 'Silencio absoluto en la sala.', bgm: 'suspense' },
  { speaker: 'JUEZ', text: '...¿Hay dos libros?', pose: 'judge_shock' },
  { speaker: 'NICANOR', text: 'Señor juez, en el Archivo hay libros hasta para apuntar los libros.', pose: 'nicanor_escoba' }
];

export const CASE5_D1_T3_EXPEDIENTE_GIRO_SUCCESS: DialogueLine[] = [
  { speaker: 'DEFENSA', text: '¡TOMA ESO!', sfx: 'desk_slam', cutin: 'objection_toma_eso', pose: 'chapulin_slam' },
  { speaker: 'DEFENSA', text: 'Don Nicanor dijo que todo estaba «en su sitio». Y entre las cosas que estaban en su sitio había un expediente abierto.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'Abierto en la página 214, señor juez. Y en la página 214 hay una tarjeta pegada con engrudo.', pose: 'chapulin_idle' },
  { speaker: 'JUEZ', text: 'Léala, licenciado.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'DEFENSA', text: '«Enciclopedias El Saber Universal, Sociedad Anónima.» Prueba decomisada al sentenciado en julio.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'Y al pie, de puño y letra del secretario: «sociedad disuelta desde 1971».', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'Don Nicanor sacude el Tomo XI cada lunes. El sábado del crimen vio el estante completo y el expediente abierto en esta página.', pose: 'chapulin_point' },
  { speaker: 'JUEZ', text: '¿Y qué venía a hacer ese hombre aquí con la tarjeta de una compañía disuelta hace once años?', pose: 'judge_thinking', updateProfile: 'perfil_casimiro' },
  { speaker: 'DEFENSA', text: 'Eso, señor juez, es exactamente lo que alguien no quiso que dijera.', pose: 'chapulin_slam', sfx: 'desk_slam', updateProfile: 'perfil_nicanor' },
  { speaker: 'SUPER SAM', text: '¡OBJECTION! ¡Especulación!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'JUEZ', text: 'Concedido. Pero la corte la anota igual, porque la va a necesitar.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'Esta corte va a ordenar algo muy simple.', sfx: 'gavel', bgm: 'objection', pose: 'judge_gavel' },
  { speaker: 'JUEZ', text: 'Fiscalía: el libro de peritos y auxiliares de la justicia del Archivo Judicial, hoja del cuatro de diciembre. Mañana a primera hora.', pose: 'judge_neutral' },
  { speaker: 'SUPER SAM', text: 'Your Honor, con todo respeto, ese libro es de trámite. Ahí firman valuadores.', pose: 'supersam_sweat' },
  { speaker: 'JUEZ', text: 'Señor fiscal: esta corte ha pasado toda la audiencia oyendo que por una puerta no entró nadie.', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: 'Y llevamos toda la audiencia sin que nadie me diga quién entró por la otra.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'SUPER SAM', text: '...La fiscalía lo traerá.', pose: 'supersam_sweat' },
  { speaker: 'NARRADOR', text: 'En la mesa de la fiscalía, el hombre de la cadena de oro saca una pluma y anota una sola línea en una libreta.', bgm: 'suspense' },
  { speaker: 'DEFENSA', text: '(Ese señor tomó nota. Lleva todo el día sin tomar nota y ahora toma nota.)', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: '(Y ni siquiera sé por qué me fijo.)', pose: 'chapulin_idle' },
  { speaker: 'JUEZ', text: 'Mañana esta corte quiere dos cosas.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'Qué acredita el registro de la segunda puerta. Y qué prueba realmente el recibo por diecisiete meses de renta, porque la fiscalía lo ha ofrecido como móvil sin acreditar todavía quién pagó.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'DON RAMÓN', text: '(Diecisiete meses.)', pose: 'donramon_sweat' },
  { speaker: 'DON RAMÓN', text: '(En toda mi vida nunca tuve diecisiete meses de nada. Ni de suerte.)', pose: 'donramon_idle' },
  { speaker: 'JUEZ', text: 'Se levanta la sesión.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'DEFENSA', text: '(Don Ramón, ganamos el primer día.)', pose: 'chapulin_point' },
  { speaker: 'DON RAMÓN', text: '(No, joven. El primer día no se gana. El primer día nada más no se pierde.)', pose: 'donramon_idle' }
];

export const CASE5_D1_OPENING_BADGE_SUCCESS: DialogueLine[] = [
  { speaker: 'DEFENSA', text: '¡Mi insignia, señor juez!', pose: 'chapulin_point' },
  { speaker: 'JUEZ', text: 'Esa insignia está abollada.', pose: 'judge_thinking' },
  { speaker: 'DEFENSA', text: 'Se cayó a un drenaje en julio, señor juez. Pero charolea bonito.', pose: 'chapulin_idle' },
  { speaker: 'JUEZ', text: '...Esta corte ha visto litigar a esa insignia cuatro veces y en las cuatro ha aprendido algo.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'Queda acreditada la defensa, bajo la responsabilidad del acusado que la designó.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'SUPER SAM', text: '¡Your Honor, esto es un circo con dos pistas!', pose: 'supersam_sweat' },
  { speaker: 'JUEZ', text: 'Es un circo con una sola pista, señor fiscal, y usted está en ella desde hace cinco meses.', pose: 'judge_thinking' },
  { speaker: 'NARRADOR', text: 'En la mesa de la fiscalía, a la derecha de Super Sam, hay un segundo hombre. Traje negro de tres piezas y una cadena de oro cruzándole el chaleco. No se ha movido.', addProfile: 'perfil_supersam' },
  { speaker: 'JUEZ', text: 'Y esta corte tampoco conoce al señor que acompaña a la fiscalía.', pose: 'judge_neutral' },
  { speaker: 'BERRONDO', text: 'Fulgencio Berrondo, señor juez. Abogado, cédula 4.882, colegiado desde 1955.', pose: 'berrondo_idle' },
  { speaker: 'BERRONDO', text: 'Comparezco como coadyuvante del ministerio público, sin honorarios, con la venia de esta corte.', pose: 'berrondo_idle' },
  { speaker: 'JUEZ', text: '¿Y a qué debemos el gusto, licenciado?', pose: 'judge_thinking' },
  { speaker: 'BERRONDO', text: 'A que el occiso fue, hace muchos años, distribuidor de una sociedad cuya liquidación tengo a mi cargo. Me pareció que debía estar presente.', pose: 'berrondo_idle' },
  { speaker: 'BERRONDO', text: '«Coadyuvante», del latín «coadiuvare»: el que ayuda junto con otro. No tomo la palabra salvo que se me conceda.', pose: 'berrondo_definicion' },
  { speaker: 'DEFENSA', text: '(¿Quién le preguntó qué quería decir?)', pose: 'chapulin_idle' },
  { speaker: 'JUEZ', text: 'Se le tiene por presentado.', pose: 'judge_neutral', addProfile: 'perfil_berrondo' },
  { speaker: 'JUEZ', text: 'Y esta corte quiere una respuesta clara a una sola pregunta antes que a ninguna otra:', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: '¿Hubo alguien más dentro de ese edificio?', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'SUPER SAM', text: '¡No, Your Honor! ¡Y lo va a decir el hombre que lleva treinta y un años sentado en la puerta!', pose: 'supersam_point' },
  { speaker: 'SUPER SAM', text: 'La fiscalía llama al conserje del Archivo Judicial, señor Nicanor Tolentino.', pose: 'supersam_point' },
  { speaker: 'JUEZ', text: 'Antes de oírlo, que la secretaría ponga a la vista la fotografía pericial. Esta corte quiere saber de qué estamos hablando.', pose: 'judge_neutral' },
  { bg: PLATE_FOTO, furniture: 'none', speaker: 'NARRADOR', text: 'Fotografía pericial tomada a las 19:05 del 4 de diciembre. El cuerpo aparece boca abajo entre el estante y la mesa de consulta.' },
  { bg: PLATE_FOTO, furniture: 'none', speaker: 'NARRADOR', text: 'A un metro, un tomo encuadernado en tela con una mancha en el lomo.' },
  { bg: PLATE_FOTO, furniture: 'none', speaker: 'NARRADOR', text: 'Sobre la mesa, un legajo abierto y una lámpara encendida. En el muro, un estante de veinticuatro ranuras.' },
  { speaker: 'JUEZ', text: 'Testigo, diga su nombre y su ocupación.', pose: 'judge_neutral' },
  { speaker: 'NICANOR', text: 'Nicanor Tolentino, conserje del Archivo Judicial. Treinta y un años, cuatro meses.', pose: 'nicanor_idle' },
  { speaker: 'NICANOR', text: 'Y quiero que conste que ese piso lo encero yo y que nadie me avisó que iban a pisarlo veinte policías.', pose: 'nicanor_escoba' },
  { speaker: 'JUEZ', text: 'Consta. Su testimonio, por favor. Únicamente lo que percibió.', sfx: 'gavel', pose: 'judge_gavel' }
];
