// @Architecture(descriptionShort="Case 5 day-4 opening present, T9 contradiction successes, GIRO 4", type="data", icon="layers")
/**
 * Case 5 Trial Day 4 — opening present, T9 successes, GIRO 4 (spec §17).
 */

import type { ChoicePrompt, DialogueLine, TrialPresentStep } from '../../../types/index.js';

export const CASE5_DAY4_OPENING_PRESENT_SUCCESS: DialogueLine[] = [
  { speaker: 'DEFENSA', text: '¡La bitácora de mantenimiento del Archivo, señor juez, y la tira del termógrafo del pasillo siete!', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: 'El tres de diciembre reventó un tubo en el muro del pasillo siete. Pusieron la caldera y dos secadores al máximo y los dejaron cuatro días.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'El termógrafo del edificio, que lleva dieciocho años registrando datos en tiras cambiadas cada domingo, anotó treinta y un grados sostenidos en la del cuatro de diciembre.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'Y el forense calculó la hora de la muerte con la tabla de una sala a veinte.', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'JUEZ', text: '¡Cáspita! ¿Y eso qué significa?', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'Verá, señor juez: un cuerpo le tira el calor al aire, como quien tira la casa por la ventana... no, ése no es.', bg: 'assets/examine_termografo.webp', furniture: 'none' },
  { speaker: 'DEFENSA', text: 'Lo cierto es que cuanto más frío está el aire, más rapidito se enfría el muerto... digo, el cuerpo. Bueno, la idea es esa.', bg: 'assets/examine_termografo.webp', furniture: 'none' },
  { speaker: 'NARRADOR', text: 'La curva de abajo es la que usó el perito: una sala a veinte grados.', bg: 'assets/plate_curva_enfriamiento.webp', furniture: 'none' },
  { speaker: 'NARRADOR', text: 'La curva de arriba es la del pasillo 7 esa tarde: treinta y un grados. El cuerpo se enfrió mucho más despacio.', bg: 'assets/plate_curva_enfriamiento.webp', furniture: 'none' },
  { speaker: 'NARRADOR', text: 'A la misma temperatura medida a las 18:40, la curva de arriba pone la muerte veinticinco minutos antes.', bg: 'assets/plate_curva_enfriamiento.webp', furniture: 'none' },
  { speaker: 'NARRADOR', text: 'El forense se pone de pie en la segunda fila de la galería, sin que nadie lo llame.', bg: 'assets/bg_judge.webp', furniture: 'none' },
  { speaker: 'NARRADOR', text: 'Habla durante cuarenta segundos con el secretario, hace dos cuentas en un papel y asiente con la cabeza.', sfx: 'realization' },
  { speaker: 'SECRETARIO', text: 'Señor juez, el perito rectifica su dictamen. Con treinta y un grados, el intervalo se corrige.' },
  { speaker: 'JUEZ', text: 'Dígalo.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'SECRETARIO', text: 'De las 16:35 a las 17:05.', updateEvidence: 'informe_forense_c5' },
  { speaker: 'NARRADOR', text: 'Rumor bajo en la galería, que tarda en crecer porque la sala tarda en entenderlo.', bgm: 'suspense' },
  { speaker: 'SECRETARIO', text: '...Señor juez. Con la venia.' },
  { speaker: 'SECRETARIO', text: 'El acusado firmó su entrada a las 16:40 y su salida a las 16:58.' },
  { speaker: 'SECRETARIO', text: 'La representación social hace notar que la defensa acaba de meter a su propio cliente dentro de la ventana.' },
  { speaker: 'NARRADOR', text: 'La galería estalla.', sfx: 'gavel' },
  { speaker: 'JUEZ', text: '¡ORDEN! ¡ORDEN EN LA SALA!', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'JUEZ', text: '¡Licenciado Chapulín! ¿Usted sabe lo que acaba de hacer?', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'Lo sé, señor juez. Lo supe a las cinco cuarenta de la mañana.', pose: 'chapulin_idle' },
  { speaker: 'JUEZ', text: '¡Acaba usted de colocar a su defendido a solas con la víctima dentro de la hora de la muerte!', pose: 'judge_shock', updateProfile: 'perfil_donramon' },
  { speaker: 'DEFENSA', text: 'Sí, señor juez.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'Y acabo de demostrar que la hora registrada tampoco descarta al otro hombre. Todavía tengo que probar que llegó al pasillo.', pose: 'chapulin_point' },
  { speaker: 'NARRADOR', text: 'Silencio.', bgm: 'suspense' },
  { speaker: 'JUEZ', text: '...Explíquese.', pose: 'judge_neutral' },
  { speaker: 'DEFENSA', text: 'El licenciado Berrondo entregó su gafete a las 16:50.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'La fiscalía la trató como hora de salida hasta que impugnamos el encabezado el martes.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'Antes, las 16:50 quedaban fuera de la ventana del perito.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'Ahora entran en ella. Y como el libro no acredita salida, tampoco excluye que siguiera allí a las 17:02.', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'BERRONDO', text: '......', pose: 'berrondo_idle', bg: 'assets/bg_courtroom.webp' },
  { speaker: 'DON RAMÓN', text: '(Ahí está, joven.)', pose: 'donramon_idle' },
  { speaker: 'DON RAMÓN', text: '(Ahí está el detalle.)', pose: 'donramon_idle' },
  { speaker: 'JUEZ', text: 'La corte entiende. Y la corte advierte a la defensa que a partir de este momento juega sin red.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'JUEZ', text: 'Si usted no coloca a alguien más dentro de ese pasillo, el único que queda colocado es su cliente.', pose: 'judge_neutral' },
  { speaker: 'DEFENSA', text: 'Lo sé, señor juez.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'La defensa llama a la encargada de la ventanilla de peritos del Archivo Judicial.', pose: 'chapulin_point' },
  { speaker: 'JUEZ', text: 'Nombre y ocupación.', pose: 'judge_neutral' },
  { speaker: 'GENOVEVA', text: 'Genoveva Peñaloza Suárez. Encargada de la ventanilla de peritos y auxiliares de la justicia. Trece años.', pose: 'genoveva_idle' },
  { speaker: 'GENOVEVA', text: 'Y quiero hacer constar que vengo citada.', pose: 'genoveva_reglamento' },
  { speaker: 'JUEZ', text: 'Todo el mundo viene citado, señorita. Declare usted.', sfx: 'gavel', pose: 'judge_gavel' }
];

export const CASE5_D4_T1_LIBRO_SUCCESS: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: '¡PROTESTO!', sfx: 'desk_slam', bgm: 'objection', pose: 'chapulin_slam' },
  { speaker: 'DEFENSA', text: 'Señorita Peñaloza, con todo respeto: su libro no tiene columna de salida.', pose: 'chapulin_point' },
  { speaker: 'GENOVEVA', text: '...Sí la tiene.', pose: 'genoveva_idle' },
  { speaker: 'DEFENSA', text: 'Léale a la corte el encabezado impreso de la segunda columna.', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'GENOVEVA', text: '...«Hora de devolución de gafete».', pose: 'genoveva_sweat' },
  { speaker: 'NARRADOR', text: 'Silencio en la sala.', sfx: 'realization' },
  { speaker: 'GENOVEVA', text: '......', pose: 'genoveva_shock' },
  { speaker: 'GENOVEVA', text: 'Trece años.', pose: 'genoveva_shock' },
  { speaker: 'GENOVEVA', text: 'Trece años diciéndole «hora de salida» a una columna que dice otra cosa.', pose: 'genoveva_sweat' },
  { speaker: 'DEFENSA', text: 'Todo el mundo le dice así, señorita. Yo también confundí los términos hasta que leí el encabezado el martes.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'Señor juez: ese libro no registra quién estaba dentro del Archivo.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'Registra quién pidió un gafete y quién lo devolvió.', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'JUEZ', text: 'Que se asiente con esas palabras exactas.', sfx: 'gavel', pose: 'judge_gavel', updateProfile: 'perfil_genoveva' },
  { speaker: 'DEFENSA', text: 'Y una cosa más, señorita, porque usted es la única persona de este juicio que se sabe el reglamento.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'Un síndico que ya devolvió el gafete, ¿puede seguir dentro del edificio?', pose: 'chapulin_point' },
  { speaker: 'GENOVEVA', text: '...Sí, señor.', pose: 'genoveva_sweat' },
  { speaker: 'GENOVEVA', text: 'Con su credencial puede estar en el depósito de bienes a cualquier hora, todas las horas que quiera, y nadie tiene por qué saberlo.', pose: 'genoveva_reglamento' },
  { speaker: 'GENOVEVA', text: 'Es lo que dice el papel.', pose: 'genoveva_idle' },
  { speaker: 'NARRADOR', text: 'Rumor creciente en la galería.', sfx: 'realization', bgm: 'objection' },
  { speaker: 'BERRONDO', text: 'Señor juez, con la venia: eso es exacto y yo mismo lo declaré ayer.', pose: 'berrondo_idle', bg: 'assets/bg_courtroom.webp' },
  { speaker: 'BERRONDO', text: 'No he ocultado nunca ninguna de esas dos cosas, porque las dos son perfectamente legales.', pose: 'berrondo_sweat', bg: 'assets/bg_courtroom.webp' },
  { speaker: 'DEFENSA', text: '(Está sudando. Desde ayer está sudando.)', pose: 'chapulin_idle' },
  { speaker: 'JUEZ', text: 'Defensa: estar en un sótano no es estar en un pasillo.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'Esta corte lleva cuatro días esperando que alguien suba una escalera.', pose: 'judge_thinking' },
  { speaker: 'DEFENSA', text: '(Ya voy, señor juez. Nada más una cosa antes.)', pose: 'chapulin_idle' }
];

const PLAN_CHOICE: ChoicePrompt = {
  id: 'd4_plan_preparation',
  question: 'Si Berrondo preparó el montaje antes del sábado, ¿qué hipótesis podemos comprobar?',
  options: [
    { id: 'esperar', label: 'Esperó al sábado e improvisó.' },
    { id: 'planear', label: 'Buscó de antemano una pieza para incriminar a Don Ramón.' }
  ],
  correctId: 'planear',
  successDialogue: [
    { speaker: 'DEFENSA', text: '(Si planeó el señuelo, tuvo que confirmar antes que la ficha de Don Ramón seguía en el cedulario.)', pose: 'chapulin_idle' }
  ],
  failDialogue: [
    { speaker: 'DON RAMÓN', text: '(Si esperó al sábado, no habrá un registro anterior que nos ayude.)', pose: 'donramon_idle' },
    { speaker: 'DEFENSA', text: '(Volvamos a la hipótesis que deja un rastro comprobable.)', pose: 'chapulin_idle' }
  ]
};

export const CASE5_D4_T1_CHAIN: TrialPresentStep[] = [
  {
    evidence: ['esquina_tarjeta'],
    prompt: '¿Qué hallazgo de la escena pudo prepararse para incriminar a Don Ramón?',
    successDialogue: [
      { cutin: 'objection_toma_eso', speaker: 'DEFENSA', text: '¡TOMA ESO!', sfx: 'desk_slam', pose: 'chapulin_slam' },
      { speaker: 'DEFENSA', text: 'La esquina de tarjeta que apareció en la mano de Casimiro llevaba el domicilio de Don Ramón. Alguien la puso allí para señalarlo.', pose: 'chapulin_point' },
      { speaker: 'BERRONDO', text: 'Una cartulina mecanografiada no demuestra que saliera de mi cedulario. Cualquiera que conociera al señor Valdés pudo escribirla.', pose: 'berrondo_idle' },
      { speaker: 'BERRONDO', text: 'Hasta este juicio yo ni siquiera sabía su nombre. ¿Por qué habría de buscarlo en once mil tarjetas?', pose: 'berrondo_idle' }
    ]
  },
  {
    evidence: ['oficio_diligencia'],
    prompt: '¿Qué documento de la fiscalía nombraba al citado y se distribuyó a la Sindicatura?',
    successDialogue: [
      { speaker: 'DEFENSA', text: 'El oficio 4471 cita a Ramón Valdés a petición de Casimiro y ordena enviar una copia a la Sindicatura.', pose: 'chapulin_point' },
      { speaker: 'BERRONDO', text: 'Firmé el acuse de recibido, pero no presté atención al asunto. Que el nombre estuviera escrito no demuestra que lo leyera.', pose: 'berrondo_idle' },
      { speaker: 'JUEZ', text: 'El oficio acredita qué podía saber, no qué hizo después de firmar.', pose: 'judge_thinking' }
    ]
  },
  { choice: PLAN_CHOICE, successDialogue: [] },
  {
    evidence: ['fichero_cedulario'],
    prompt: '¿Qué bien habría consultado para comprobar que Don Ramón seguía fichado?',
    successDialogue: [
      { speaker: 'DEFENSA', text: 'El cedulario reúne las fichas de domicilio. Si eligió una tarjeta, ahí pudo comprobar que la de Don Ramón seguía archivada.', pose: 'chapulin_point' },
      { speaker: 'DON RAMÓN', text: '(Eso todavía es una hipótesis, joven.)', pose: 'donramon_idle' }
    ]
  },
  {
    profileTarget: ['perfil_genoveva'],
    prompt: '¿Quién puede consultar los registros de la bodega y comprobar si hubo una consulta anterior?',
    successDialogue: [
      { speaker: 'DEFENSA', text: 'Señor juez, solicito que vuelva al estrado la señorita Peñaloza. Ella archiva los vales de la bodega.', pose: 'chapulin_point' },
      { speaker: 'JUEZ', text: 'Señorita, revise su carpeta. ¿Consta una consulta del cedulario por el licenciado Berrondo el veintinueve de noviembre?', pose: 'judge_neutral' },
      { speaker: 'GENOVEVA', text: 'Sí, señor juez. «Veintinueve de noviembre. Huacal 9. Bien consultado: cedulario. Solicitante: licenciado Fulgencio Berrondo. Firma: F. Berrondo.»', pose: 'genoveva_sweat' },
      { speaker: 'DEFENSA', text: 'Ese día fue lunes. El vale registra una consulta, pero no dice qué tarjeta miró ni era necesario para abrir el huacal.', pose: 'chapulin_slam', sfx: 'desk_slam' },
      { speaker: 'JUEZ', text: 'Así se asentará. La ficha se identificará por su domicilio, no por este vale.', pose: 'judge_neutral' },
      { speaker: 'SECRETARIO', text: 'Recibo la carpeta, señor juez.' },
      { speaker: 'JUEZ', text: 'Licenciado Chapulín. Esta corte lleva cuatro días prohibiéndole señalar a una persona, y hoy se lo va a ordenar.', sfx: 'gavel', pose: 'judge_gavel' }
    ]
  }
];

/** Kept as a named block for legacy script walkers; the chain owns the final dialogue now. */
export const CASE5_D4_T1_CEDULARIO_SUCCESS: DialogueLine[] = CASE5_D4_T1_CHAIN[4].successDialogue;
