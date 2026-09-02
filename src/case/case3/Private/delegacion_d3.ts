// @Architecture(descriptionShort="Case 3 day 3 precinct cartridge and pawn-ticket reveals", type="data", icon="layers")
/**
 * Case 3 Day 3 — Delegación de Policía (`delegacion_d3`).
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE3_DELEGACION_D3: InvestigationScene = {
  title: 'Delegación de Policía — Día 3',
  name: 'Delegación',
  bg: 'assets/bg_delegacion.webp',
  bgm: 'investigation',
  speaker: 'NARRADOR',
  intro: [
    { speaker: 'NARRADOR', text: '18 de septiembre, 4:00 PM. El sargento no se ha cambiado de uniforme desde anoche. Ni piensa hacerlo.' },
    { speaker: 'SARGENTO', text: '¡Mi Licenciado! ¡Toda la noche en los tambos de basura de la estación! ¡Ocho horas! ¡Con estas manitas!', pose: 'pazguato_decidido' },
    { speaker: 'CHAPULIN', text: '¡Y con mis antenitas de vinil! ¡Vibraron re\' feo sobre el tambo del callejón!', pose: 'chapulin_point' },
    { speaker: 'SARGENTO', text: 'Ahí estaba, mi Licenciado. Debajo de las cáscaras. Cartucho tres.', pose: 'pazguato_decidido', addEvidence: 'cartucho_corte' },
    { speaker: 'NARRADOR', text: '(Ponen el cartucho en la máquina. La sala se queda muda.)', sfx: 'realization' },
    { speaker: 'BARRIGA', text: '¡Doctor Chapatín, no! ¡Auxilio! ...' },
    { speaker: 'DEFENSA', text: 'Otra vez. Súbanle a lo que se oye ATRÁS de la voz.', pose: 'donramon_shock' },
    { speaker: 'NARRADOR', text: '(Debajo del grito, lejano y rasposo, se alcanza a oír una bocina de plaza:) "...se ha perdido un niño de cachetes muy grandes..."' },
    { speaker: 'CHAPULIN', text: '¡Ese es el aviso de Quico! ¡El del libreto del Profesor! ¡Nueve cuarenta de la noche!', pose: 'chapulin_panic' },
    { speaker: 'DEFENSA', text: 'A las 9:40 el señor Barriga estaba en la plaza, vivo, ayudando a buscar al niño. ¡Delante de doña Florinda y del Profesor!', pose: 'donramon_slam', updateEvidence: 'cartucho_corte' },
    { speaker: 'DEFENSA', text: 'O sea que a las 9:40, mientras el señor Barriga buscaba a Quico en la plaza... ALGUIEN estaba grabando su voz EN UNA CABINA. Estos cartuchos de identificación sólo se graban enchufados a la mesa de consola. No hay grabadora de feria que deje este formato.', pose: 'donramon_point' },
    { speaker: 'SARGENTO', text: '¿Y eso qué significa, mi Licenciado?', pose: 'pazguato_sweat' },
    { speaker: 'DEFENSA', text: 'Que la voz de ese cartucho, sargento, nunca fue la del señor Barriga.', pose: 'donramon_idle' }
  ],
  hotspots: [
    {
      id: 'hotspot_reproductor',
      label: 'Reproductor de Cartuchos',
      x: 74, y: 68, w: 24, h: 28,
      dialogue: [
        { speaker: 'DEFENSA', text: 'El grito de las 11:03... y debajo, el aviso de las 9:40. Imposible que sea la misma persona en dos sitios.', pose: 'donramon_point' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'about_empeno',
      label: 'Sobre el Micrófono de Oro',
      dialogue: [
        { speaker: 'SARGENTO', text: 'Y ya encarrerado me fui al Monte de Piedad, mi Licenciado. Ese micrófono estuvo empeñado desde junio. Lo desempeñaron el 3 de septiembre. Doce mil pesos. En efectivo.', pose: 'pazguato_decidido', addEvidence: 'boleta_empeno', updateEvidence: 'microfono_oro' },
        { speaker: 'DEFENSA', text: '¿Y de dónde saca doce mil pesos en efectivo un locutor de radio de barrio?', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'about_libro_verde',
      label: 'Calcado del Libro Verde',
      dialogue: [
        { speaker: 'CHAPULIN', text: '¡Con el lapicito de lado, como en la escuela! ¡Ya salió! Dice: \'Faltan cuarenta mil. Los retiros los firmó el tesorero. Se lo diré al aire.\'', pose: 'chapulin_point', sfx: 'realization', updateEvidence: 'libro_verde' },
        { speaker: 'DEFENSA', text: '(Ya tenemos el cómo, el cuándo y el porqué, Chapulín. Falta el QUIÉN. Y eso... eso lo va a decir el propio señor Barriga sin darse cuenta.)', pose: 'donramon_shock' }
      ]
    }
  ]
};
