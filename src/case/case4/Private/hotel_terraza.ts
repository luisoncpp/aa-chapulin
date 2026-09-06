// @Architecture(descriptionShort="Case 4 day 1 terrace bar with Maruja and chain clue", type="data", icon="layers")
/**
 * Case 4 Day 1 — Terraza (`hotel_terraza`), 12:00. Spec §7.4.
 * Cierra el día: anexo del cierre + candado_cadena tras el tema final.
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE4_HOTEL_TERRAZA: InvestigationScene = {
  title: 'Terraza Bar "El Chapuzón"',
  name: 'Terraza Bar',
  bg: 'assets/bg_hotel_bar.webp',
  bgm: 'terraza_bar',
  speaker: 'NARRADOR',
  idlePose: 'maruja_idle',
  intro: [
    { speaker: 'NARRADOR', text: '25 de octubre, 12:00 PM. Terraza del hotel.' },
    { speaker: 'MARUJA', text: 'Si vienen por el ruido, les contesto. Si vienen a preguntarme cuánto perdí en las mesas, eso no tiene relación con nada.', pose: 'maruja_idle' },
    { speaker: 'DEFENSA', text: 'Yo todavía no había preguntado nada.', pose: 'donramon_idle' },
    { speaker: 'MARUJA', text: 'Por eso lo dije antes. Así ahorramos tiempo los tres.', pose: 'maruja_abanico' },
    { speaker: 'CHAPULIN', text: '¡Qué barbaridad! Contesta usted más rápido de lo que uno pregunta.', pose: 'chapulin_idle' },
    { speaker: 'MARUJA', text: 'Jovencito, en este hotel me dicen la Sirena. Y las sirenas cantan primero.', pose: 'maruja_coqueta' },
    { speaker: 'DEFENSA', text: '(Con esta señora me voy a quedar sin preguntas antes que sin renta.)', pose: 'donramon_sweat' },
    { speaker: 'NARRADOR', text: 'Al abrir el bolso para sacar el abanico, algo suena adentro como un puñado de dados.' },
    { speaker: 'MARUJA', text: 'Corchos. Uno de cada cena que valió la pena. No pienso disculparme por eso.', pose: 'maruja_coqueta' },
    { speaker: 'CHAPULIN', text: 'Yo guardo tapitas de refresco. Pero a mí nadie me invita a cenar.', pose: 'chapulin_idle' },
    { speaker: 'MARUJA', text: 'Pobrecito. Con ese traje yo tampoco lo invitaría.', pose: 'maruja_abanico' }
  ],
  hotspots: [
    {
      id: 'hotspot_barra',
      label: 'Barra de la Terraza',
      x: 0, y: 43, w: 67, h: 36,
      dialogue: [
        { speaker: 'MARUJA', text: 'Aquí sirvo cócteles a la alta sociedad. Anoche el susto me alcanzó hasta aquí.', pose: 'maruja_abanico' }
      ]
    },
    {
      id: 'hotspot_sombrillas',
      label: 'Sombrillas',
      x: 58, y: 12, w: 42, h: 35,
      dialogue: [
        { speaker: 'CHAPULIN', text: '¡Bonito atardecer para un interrogatorio!', pose: 'chapulin_idle' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'entrada_botija',
      label: 'La entrada de Botija',
      dialogue: [
        { speaker: 'MARUJA', text: 'Vi entrar a Botija antes del estruendo. Iba a trabajar, no a esconderse.', pose: 'maruja_idle' }
      ]
    },
    {
      id: 'el_ruido',
      label: 'El ruido',
      dialogue: [
        { speaker: 'MARUJA', text: 'Después oí la puerta forzada. Un golpe apagado durante la fiesta, sin asegurar su causa.', pose: 'maruja_nerviosa' },
        { speaker: 'DEFENSA', text: '¿Calibres? ¿Distancias?', pose: 'donramon_point' },
        { speaker: 'MARUJA', text: 'No reconozco calibres por el oído. Oí un estruendo y punto.', pose: 'maruja_idle' }
      ]
    },
    {
      id: 'visita_204',
      label: 'La visita a la 204',
      dialogue: [
        { speaker: 'MARUJA', text: 'Había estado en la 204 por un asunto de juego. Eso es todo lo que diré de momento.', pose: 'maruja_coqueta' }
      ]
    },
    {
      id: 'recuerdo_noche',
      label: 'El recuerdo de esa noche',
      condition: (flags) => Boolean(flags.talk_entrada_botija) && Boolean(flags.talk_el_ruido) && Boolean(flags.talk_visita_204),
      dialogue: [
        { speaker: 'MARUJA', text: 'Antes de que sigan... éste es de esa noche. Me lo dio el señor Gómez cuando destapó la botella.', pose: 'maruja_nerviosa' },
        { speaker: 'DEFENSA', text: '¿Se lo dio él?', pose: 'donramon_point' },
        { speaker: 'MARUJA', text: 'Lo sacó, me lo puso en la mano como quien regala una flor, y luego se sirvió. Yo me fui con el corcho en el bolso.', pose: 'maruja_idle' },
        { speaker: 'SARGENTO', text: 'Entonces ese cierre salió de la habitación antes que usted... y antes de que él bebiera.', pose: 'pazguato_saludo' },
        { speaker: 'MARUJA', text: 'Lo guardé porque el caballero fue amable. Nadie me avisó que iba a convertirse en prueba.', pose: 'maruja_nerviosa' },
        { speaker: 'NARRADOR', text: 'El Sargento lo embolsa, lo numera y anota la hora de entrega con una letra minúscula y perfecta.' },
        { speaker: 'SARGENTO', text: 'Queda como anexo de mi informe. Con mi firma y la de usted.', pose: 'pazguato_decidido', updateEvidence: 'informe_policial' },
        { speaker: 'CHAPULIN', text: '¿Y eso para qué sirve, Sargento? ¡Es un corcho!', pose: 'chapulin_idle' },
        { speaker: 'SARGENTO', text: 'Sirve para que dentro de un mes nadie pueda discutirme dónde estuvo este corcho. Porque va a estar escrito.', pose: 'pazguato_idle' },
        { speaker: 'DEFENSA', text: '(Le van a descontar la quincena por embolsar un corcho. Y lo va a hacer de todos modos.)', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'como_placa',
      label: 'Cómo se encontró la placa',
      condition: (flags) => Boolean(flags.talk_recuerdo_noche),
      dialogue: [
        { speaker: 'SARGENTO', text: 'Así se encontró la placa: perno, fibras retenidas y tramo del corredor, con su esquema de recorrido.', pose: 'pazguato_saludo', addEvidence: 'candado_cadena' },
        { speaker: 'DEFENSA', text: '(Trayectoria y fibras. La solución completa se demuestra en el juicio.)', pose: 'donramon_idle' }
      ]
    }
  ]
};
