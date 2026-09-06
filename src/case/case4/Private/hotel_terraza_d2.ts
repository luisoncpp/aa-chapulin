// @Architecture(descriptionShort="Case 4 day 2 terrace bar with Chómpiras rotation", type="data", icon="layers")
/**
 * Case 4 Day 2 — Terraza con Chómpiras (`hotel_terraza_d2`), 11:00. Spec §9.3.
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE4_HOTEL_TERRAZA_D2: InvestigationScene = {
  title: 'Terraza Bar "El Chapuzón"',
  name: 'Terraza Bar',
  bg: 'assets/bg_hotel_bar.webp',
  bgm: 'terraza_bar',
  speaker: 'NARRADOR',
  idlePose: 'chompiras_idle',
  intro: [
    { speaker: 'NARRADOR', text: '26 de octubre, 11:00 AM. Terraza. Atiende el botones del montacargas.' },
    { speaker: 'CHOMPIRAS', text: '¡Licenciado! ¿Usted es el que va a sacar al Botija? Porque si no lo saca, me quedo sin quién me ayude con los baúles.', pose: 'chompiras_idle' },
    { speaker: 'DEFENSA', text: 'Lo voy a sacar. ¿Ustedes se conocen de antes?', pose: 'donramon_idle' },
    { speaker: 'CHOMPIRAS', text: 'De antes de antes. Pero de eso ya no hablamos, ¿verdad? Ahora somos gente de uniforme.', pose: 'chompiras_nervous' },
    { speaker: 'CHAPULIN', text: '¡Qué bonito es reformarse!', pose: 'chapulin_idle' },
    { speaker: 'CHOMPIRAS', text: 'Bonito sí. Bien pagado no.', pose: 'chompiras_relieved' },
    { speaker: 'DEFENSA', text: 'Buscamos un envío con este número.', pose: 'donramon_idle' },
    { speaker: 'CHOMPIRAS', text: 'Entonces no hay pierde, mi licenciado. Los huéspedes se cambian de nombre a cada rato; las maletas no. La maleta trae su etiqueta y se acabó.', pose: 'chompiras_nervous' },
    { speaker: 'CHAPULIN', text: '¿Y tú te subes adentro del montacargas?', pose: 'chapulin_point' },
    { speaker: 'CHOMPIRAS', text: '¡Ay, no! La cabina es para carga. Uno manda el bulto y sube por la escalera, como los pobres.', pose: 'chompiras_idle' }
  ],
  hotspots: [
    {
      id: 'hotspot_lamina',
      label: 'Lámina de Envíos',
      x: 14, y: 49, w: 24, h: 18,
      dialogue: [
        { speaker: 'CHOMPIRAS', text: 'Lámina con varias filas. B-17 aparece dos veces con cargas diferentes; los demás son envíos normales.', pose: 'chompiras_nervous' },
        { speaker: 'DEFENSA', text: '(Las marcas impresas permiten seguir la etiqueta sin depender del color.)', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'hotspot_sombrillas2',
      label: 'Sombrillas',
      x: 58, y: 12, w: 42, h: 35,
      dialogue: [
        { speaker: 'CHAPULIN', text: '¡El mismo atardecer, distinto botones!', pose: 'chapulin_idle' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'como_funciona',
      label: 'Cómo funciona',
      dialogue: [
        { speaker: 'CHOMPIRAS', text: 'Operador externo, llamada manual y registro de carga. Nada de pasajeros ocultos en la masa medida.', pose: 'chompiras_idle' }
      ]
    },
    {
      id: 'seguir_b17',
      label: 'Seguir B-17',
      condition: (flags) => Boolean(flags.examined_hotspot_lamina),
      dialogue: [
        { speaker: 'CHOMPIRAS', text: 'El baúl de Rufino, con intervención de Botija. La báscula marcó lo que marcó; yo no digo qué había dentro.', pose: 'chompiras_nervous', addEvidence: 'registro_montacargas' },
        { speaker: 'CHOMPIRAS', text: 'Pues algo le sacaron, mi licenciado. Yo apunto lo que marca la báscula, no lo que va adentro.', pose: 'chompiras_idle' },
        { speaker: 'CHAPULIN', text: '¡Ochenta kilos! ¿Y qué cosa pesa ochenta kilos?', pose: 'chapulin_point' },
        { speaker: 'CHOMPIRAS', text: 'Aquí, casi todo lo que vale la pena.', pose: 'chompiras_nervous' },
        { speaker: 'DEFENSA', text: 'Entonces vamos a tener que mirar ese baúl.', pose: 'donramon_point' },
        { speaker: 'CHAPULIN', text: '¿Y lo guardaron o se perdió?', pose: 'chapulin_idle' },
        { speaker: 'CHOMPIRAS', text: 'Se guardó. Para eso apunto los números... aunque después nadie me crea nada.', pose: 'chompiras_relieved' },
        { speaker: 'DEFENSA', text: 'Yo sí. Al fin y al cabo somos dos que apuntamos todo y a los que nadie les cree.', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'recepcion_304',
      label: 'Recepción en la 304',
      condition: (flags) => Boolean(flags.talk_seguir_b17),
      dialogue: [
        { speaker: 'CHOMPIRAS', text: 'Entrega cerrada a Rufino y faja numerada entera. Acompañé a Botija por el acceso de servicio y firmé como testigo del porte.', pose: 'chompiras_idle', updateEvidence: 'orden_servicios' }
      ]
    },
    {
      id: 'donde_termino',
      label: 'Dónde terminó',
      condition: (flags) => Boolean(flags.talk_recepcion_304),
      dialogue: [
        { speaker: 'CHOMPIRAS', text: 'Consultemos el destino azotea e inspeccionémoslo.', pose: 'chompiras_relieved', unlockLocation: 'hotel_azotea' }
      ]
    }
  ]
};
