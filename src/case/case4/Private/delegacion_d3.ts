// @Architecture(descriptionShort="Case 4 day 3 precinct closing with ring exam", type="data", icon="layers")
/**
 * Case 4 Day 3 — Delegación (`delegacion_d3`), 14:00. Spec §11.4.
 * Escena final obligatoria: sello_lacre cierra el día y el gating.
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE4_DELEGACION_D3: InvestigationScene = {
  title: 'Delegación de Policía — Tercer Día',
  name: 'Delegación',
  bg: 'assets/bg_delegacion.webp',
  bgm: 'suspense',
  speaker: 'NARRADOR',
  idlePose: 'pazguato_idle',
  intro: [
    { speaker: 'NARRADOR', text: '27 de octubre, 2:00 PM. Delegación de Policía.' },
    { speaker: 'SARGENTO', text: 'Tengo el maletín de la 204 sellado desde ayer y los efectos personales por separado.', pose: 'pazguato_saludo' }
  ],
  hotspots: [
    {
      id: 'hotspot_maletin',
      label: 'Maletín Incautado',
      x: 73, y: 17, w: 11, h: 9,
      dialogue: [
        { speaker: 'SARGENTO', text: 'Sellado ayer por la tarde. Lo abrimos solo con la orden de hoy.', pose: 'pazguato_idle' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'maletin_incautado',
      label: 'El maletín incautado',
      dialogue: [
        { speaker: 'SARGENTO', text: 'Con el telegrama en la mano, el juez autorizó abrir el maletín de la 204.', pose: 'pazguato_decidido' },
        { speaker: 'NARRADOR', text: 'Dentro, envuelto en un pañuelo del hotel, está el Collar de Cleopatra.' },
        { speaker: 'CHAPULIN', text: '¡Ay, qué barbaridad! ¿Y eso es de verdad?', pose: 'chapulin_point' },
        { speaker: 'SARGENTO', text: 'Denunciado como robado hace once meses, joven. Levanté acta y lo adjunté al expediente del telegrama.', pose: 'pazguato_saludo', updateEvidence: 'nota_amenaza' },
        { speaker: 'DEFENSA', text: 'Once meses guardado en un pañuelo de hotel. Con eso yo pagaba la renta hasta el año que viene. Y la del año pasado.', pose: 'donramon_sweat' },
        { speaker: 'CHAPULIN', text: 'Entonces el muerto venía a cobrar.', pose: 'chapulin_point' },
        { speaker: 'DEFENSA', text: 'Venía a cobrar. Eso explica una reunión, Chapulín. Todavía no explica una copa.', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'quien_tuvo',
      label: 'Quién tuvo cada cosa',
      condition: (flags) => Boolean(flags.talk_maletin_incautado),
      dialogue: [
        { speaker: 'SARGENTO', text: 'Leo la cadena ya documentada, sin testigos nuevos.', pose: 'pazguato_saludo' },
        { speaker: 'SARGENTO', text: '21:15–21:20, cava y recepción: Cecilio con Rufino, que lleva el anillo puesto y sella con él la autorización.', pose: 'pazguato_idle' },
        { speaker: 'SARGENTO', text: '21:20, entrega: Botija recoge la botella cerrada y sube. No recibe ningún otro objeto.', pose: 'pazguato_idle' },
        { speaker: 'SARGENTO', text: '21:25, puerta de la 204: Maruja presencia entrega y firma. El anillo sigue en la mano de Rufino.', pose: 'pazguato_idle' },
        { speaker: 'SARGENTO', text: '21:26, servicio: Botija se retira con Chómpiras y no vuelve a esa planta hasta el porte.', pose: 'pazguato_idle' },
        { speaker: 'SARGENTO', text: '21:30–21:40: Maruja sale y deja a Rufino solo con la botella cerrada.', pose: 'pazguato_idle' },
        { speaker: 'SARGENTO', text: '21:40: Cuajinais extrae el cierre, se lo da a Maruja y bebe. El cierre sale del hotel esa noche en su bolso.', pose: 'pazguato_idle' },
        { speaker: 'SARGENTO', text: 'Día 2, cierre de audiencia: incauto los efectos personales de Rufino, incluido el anillo, separados de las muestras.', pose: 'pazguato_decidido' },
        { speaker: 'SARGENTO', text: 'El laboratorio encontró el mismo agente dentro del cierre. Adentro, mi licenciado. No en la cascarita.', pose: 'pazguato_saludo' },
        { speaker: 'DEFENSA', text: '¿Metido en el corcho?', pose: 'donramon_point' },
        { speaker: 'SARGENTO', text: 'Metido. Y lo que quedó atorado en el borde es metal. Metal, no corcho.', pose: 'pazguato_sweat' },
        { speaker: 'CHAPULIN', text: '¡Un corcho con metal adentro! ¡Como las tortas del mercado!', pose: 'chapulin_point' },
        { speaker: 'DEFENSA', text: 'El informe no dice por cuál de las dos marcas entró. Eso lo vamos a enseñar nosotros.', pose: 'donramon_idle', updateEvidence: 'toxicologia_vino' },
        { speaker: 'DEFENSA', text: 'Sargento, quiero que examinen por separado los efectos que incautó ayer.', pose: 'donramon_point' },
        { speaker: 'SARGENTO', text: 'Ya los tengo aquí, cada uno en su bolsa. Éste es el anillo del señor Rufián.', pose: 'pazguato_saludo' },
        { speaker: 'NARRADOR', text: 'La cabeza gira sobre un eje. Debajo hay una cavidad, un conducto fino y una punta metálica con el extremo partido.' },
        { speaker: 'SARGENTO', text: 'El informe describe la pieza y los residuos del conducto. Pero no dice si esa punta encaja con nada.', pose: 'pazguato_idle', addEvidence: 'sello_lacre' },
        { speaker: 'DEFENSA', text: 'No tiene que decirlo. Eso lo comparamos mañana, delante del juez.', pose: 'donramon_point' },
        { speaker: 'CHAPULIN', text: '(Ya no me vibran las antenitas. Ahora me gritan.)', pose: 'chapulin_idle' }
      ]
    }
  ]
};
