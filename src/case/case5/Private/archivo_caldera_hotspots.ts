// @Architecture(descriptionShort="Case 5 day 4 boiler room examine hotspots and day close", type="data", icon="layers")
/**
 * Caso 5, Día 4 — puntos de interés de la sala de calderas. Spec §16.2.
 * Caldera, termógrafo y bitácora van pintados en el fondo para Examinar.
 */

import type { Hotspot } from '../../../types/index.js';

export const CASE5_ARCHIVO_CALDERA_HOTSPOTS: Hotspot[] = [
  {
    id: 'hotspot_caldera',
    label: 'Caldera y secadores',
    x: 16, y: 2, w: 48, h: 78,
    dialogue: [
      { speaker: 'NARRADOR', text: 'La caldera está apagada y los dos secadores industriales, fuera de servicio, siguen apuntando a un ducto que sube por el muro.' },
      { speaker: 'CHOMPIRAS', text: 'Ese ducto sube derechito al pasillo siete, licenciado. Lo pusieron así cuando el edificio era fábrica.', pose: 'chompiras_idle' },
      { speaker: 'DEFENSA', text: '¿Y llevan encendidos desde...?', pose: 'chapulin_idle' },
      { speaker: 'CHOMPIRAS', text: 'Desde el tres de diciembre, que se reventó el tubo. Los apagaron anteayer.', pose: 'chompiras_idle' },
      { speaker: 'DEFENSA', text: '¿Y qué temperatura hace arriba con esto puesto?', pose: 'chapulin_point' },
      { speaker: 'SARGENTO', text: 'Eso no hay que adivinarlo, mi Licenciado. Hay un aparato que lo apunta solo.', pose: 'pazguato_decidido' }
    ]
  },
  {
    id: 'hotspot_termografo',
    label: 'Termógrafo',
    x: 70, y: 16, w: 28, h: 52,
    condition: (flags) => Boolean(flags.examined_hotspot_caldera),
    dialogue: [
      { speaker: 'NARRADOR', text: 'Atornillado al muro, un tambor de reloj con una tira de papel cuadriculado y una plumilla que raya una línea continua.' },
      { speaker: 'SARGENTO', text: 'Termógrafo del Archivo, mi Licenciado. El tambor está aquí abajo, pero su sonda está cableada al pasillo siete: mide el aire de la escena. Lo pusieron en el sesenta y cuatro por la humedad.', pose: 'pazguato_idle' },
      { speaker: 'SARGENTO', text: 'Da una vuelta por semana; cada domingo se retira y archiva la tira anterior y se coloca una nueva.', pose: 'pazguato_decidido' },
      { speaker: 'DEFENSA', text: 'Enséñeme la tira del sábado cuatro de diciembre.', pose: 'chapulin_point' },
      { speaker: 'NARRADOR', text: 'El Sargento desenrolla la tira de esa semana, retirada y archivada el domingo cinco: una línea de tinta sube y baja como una sierra.' },
      { speaker: 'DEFENSA', text: 'Del tres al cinco... la línea se va para arriba y se queda.', pose: 'chapulin_idle' },
      { speaker: 'SARGENTO', text: 'Treinta y un grados, mi Licenciado. Sostenidos.', pose: 'pazguato_decidido' },
      { speaker: 'DEFENSA', text: '¿Y el forense con qué trabajó?', pose: 'chapulin_point' },
      { speaker: 'SARGENTO', text: 'Con veinte. Es el número que trae impreso la tabla.', pose: 'pazguato_sweat' },
      { speaker: 'DEFENSA', text: '(Once grados. Once grados de diferencia.)', pose: 'chapulin_panic', addEvidence: 'bitacora_caldera' },
      { speaker: 'SARGENTO', text: 'Mi Licenciado, la segunda cosa. La perita en documentoscopia trabajó toda la noche.', pose: 'pazguato_decidido' },
      { speaker: 'SARGENTO', text: 'Comparó tres documentos: la tarjeta de julio, la ficha del museo de agosto y la nota del sobre de la renta.', pose: 'pazguato_idle' },
      { speaker: 'DEFENSA', text: '¿Y?', pose: 'chapulin_point' },
      { speaker: 'SARGENTO', text: 'Los tres tienen la misma ese vencida. Mismo desplome, mismo grado de inclinación. Mismo aparato.', pose: 'pazguato_decidido', updateEvidence: 'maquina_escribir' },
      { speaker: 'DEFENSA', text: '¡¿Y entonces ya está?!', pose: 'chapulin_point' },
      { speaker: 'SARGENTO', text: 'No, mi Licenciado. Y aquí es donde me dan ganas de llorar.', pose: 'pazguato_sweat' },
      { speaker: 'SARGENTO', text: 'La perita no pudo cotejar contra la Olivetti. La máquina está en depósito judicial y sacarle una muestra es usarla.', pose: 'pazguato_idle' },
      { speaker: 'SARGENTO', text: 'Y usar un bien en depósito necesita orden del juez.', pose: 'pazguato_decidido' },
      { speaker: 'DEFENSA', text: '¿Y no se la pidió?', pose: 'chapulin_panic' },
      { speaker: 'SARGENTO', text: 'Se la pedí anoche a las once. Me contestaron que el juez estaba dormido.', pose: 'pazguato_sweat' },
      { speaker: 'DEFENSA', text: '(O sea que la prueba que falta para cerrar este caso hay que pedírsela al juez delante de todos.)', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '(Y sólo me la va a dar si antes le doy una razón para dármela.)', pose: 'chapulin_point' },
      { speaker: 'CHOMPIRAS', text: 'Licenciado... ¿y si no se la da?', pose: 'chompiras_nervous' },
      { speaker: 'DEFENSA', text: 'Entonces Don Ramón se queda adentro, Chómpiras.', pose: 'chapulin_idle' },
      { speaker: 'CHOMPIRAS', text: '...Yo estuve ocho meses adentro.', pose: 'chompiras_nervous' },
      { speaker: 'CHOMPIRAS', text: 'Se lo digo nomás para que sepa cuánto dura.', pose: 'chompiras_idle' },
      { speaker: 'DEFENSA', text: '¡Síganme los buenos!', pose: 'chapulin_point' }
    ]
  }
];
