// @Architecture(descriptionShort="Case 5 day 2 precinct talk chain and expediente_serie", type="data", icon="layers")
/**
 * Caso 5, Día 2 — conversaciones con el Sargento en la delegación. Spec §12.4.
 */

import type { TalkOption } from '../../../types/index.js';

export const CASE5_DELEGACION_C5_TALKS: TalkOption[] = [
  {
    id: 'que_hizo_anoche',
    label: '¿Qué hizo anoche?',
    dialogue: [
      { speaker: 'SARGENTO', text: 'Me puse a pensar en lo que dijo usted ayer en la sala: que la lista estaba incompleta.', pose: 'pazguato_idle' },
      { speaker: 'SARGENTO', text: 'Y me dio por pensar en otra lista.', pose: 'pazguato_decidido' },
      { speaker: 'SARGENTO', text: 'Mi Licenciado: el señor Ramón defendió cuatro juicios entre agosto y octubre y los ganó los cuatro.', pose: 'pazguato_idle' },
      { speaker: 'SARGENTO', text: 'Yo estuve en dos de ellos. Y anoche fui al Archivo y pedí los cuatro expedientes.', pose: 'pazguato_decidido' },
      { speaker: 'DEFENSA', text: '¿Y qué encontró?', pose: 'chapulin_point' },
      { speaker: 'SARGENTO', text: 'No sé.', pose: 'pazguato_sweat' },
      { speaker: 'SARGENTO', text: 'De veras que no sé, mi Licenciado. Pero me tembló la mano y yo ya aprendí a hacerle caso a eso.', pose: 'pazguato_decidido' }
    ]
  },
  {
    id: 'enseneme_expedientes',
    label: 'Enséñeme esos expedientes',
    unlockedByTalk: 'que_hizo_anoche',
    dialogue: [
      { speaker: 'NARRADOR', text: 'El Sargento desata cinco legajos y los pone en fila sobre el escritorio, por fecha.' },
      { speaker: 'SARGENTO', text: 'Julio. El señor Lengua, el de las enciclopedias. Le decomisaron una tarjeta de presentación de una sociedad disuelta desde el setenta y uno.', pose: 'pazguato_idle' },
      { speaker: 'SARGENTO', text: 'Agosto, el museo. En el patio de carga apareció una ficha mecanografiada de seis renglones. Nunca se supo quién la escribió.', pose: 'pazguato_idle' },
      { speaker: 'SARGENTO', text: 'Agosto otra vez, la hacienda. Un frasco de valeriana y un molde de cera comprados por un cliente que nadie identificó.', pose: 'pazguato_idle' },
      { speaker: 'SARGENTO', text: 'Septiembre, la radiodifusora. Una boleta del Monte de Piedad: doce mil pesos en efectivo, el tres de septiembre.', pose: 'pazguato_idle' },
      { speaker: 'SARGENTO', text: 'Y octubre, el hotel. Un collar que se robaron antes y cuyo reparto nunca se pagó.', pose: 'pazguato_idle' },
      { speaker: 'DEFENSA', text: 'Sargento... estos cinco casos no tienen nada que ver entre sí.', pose: 'chapulin_idle' },
      { speaker: 'SARGENTO', text: 'Nada, mi Licenciado. Distintos culpables, distintos barrios, distintos delitos.', pose: 'pazguato_decidido' },
      { speaker: 'SARGENTO', text: 'Por eso me tembló la mano.', pose: 'pazguato_decidido', addEvidence: 'expediente_serie' },
      { speaker: 'DEFENSA', text: '(Cinco papeles de cinco casos que no se conocen entre ellos.)', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '(Y los cinco hablan del mismo negocio.)', pose: 'chapulin_panic' },
      { speaker: 'SARGENTO', text: 'Mi Licenciado. Le voy a pedir una cosa y perdóneme el atrevimiento.', pose: 'pazguato_sweat' },
      { speaker: 'SARGENTO', text: 'No lo diga hoy en la sala hasta que el señor de la cadena de oro esté declarando.', pose: 'pazguato_decidido' },
      { speaker: 'DEFENSA', text: '¿Y por qué?', pose: 'chapulin_idle' },
      { speaker: 'SARGENTO', text: 'Porque un coadyuvante puede objetar. Un testigo, no.', pose: 'pazguato_decidido' },
      { speaker: 'DEFENSA', text: '(Sargento, ¿desde cuándo sabe usted de derecho?)', pose: 'chapulin_idle' },
      { speaker: 'SARGENTO', text: 'Desde septiembre, mi Licenciado. Es lo único bueno que me dejó septiembre.', pose: 'pazguato_saludo' }
    ]
  }
];
