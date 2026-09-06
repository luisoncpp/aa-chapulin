// @Architecture(descriptionShort="Case 4 day 3 lobby with Chimoltrufia rotation", type="data", icon="layers")
/**
 * Case 4 Day 3 — Recepción (`hotel_lobby_d3`), 10:30. Spec §11.2.
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE4_HOTEL_LOBBY_D3: InvestigationScene = {
  title: 'Gran Vestíbulo del Hotel Buena Vista',
  name: 'Gran Vestíbulo',
  bg: 'assets/bg_hotel_lobby.webp',
  bgm: 'investigation',
  speaker: 'NARRADOR',
  idlePose: 'chimoltrufia_idle',
  intro: [
    { speaker: 'NARRADOR', text: '27 de octubre, 10:30 AM. Recepción. La Chimoltrufia sustituye a Cecilio en el mostrador.' },
    { speaker: 'CHIMOLTRUFIA', text: 'Me pusieron en el mostrador porque no hay quién atienda. Y porque yo sí sé dónde está cada papel de este hotel.', pose: 'chimoltrufia_idle' },
    { speaker: 'DEFENSA', text: '¿Y Don Cecilio?', pose: 'donramon_idle' },
    { speaker: 'CHIMOLTRUFIA', text: 'Contestándoles a los periodistas. Con los anteojos puestos, eso sí. Ya le dijo "señorita" a dos fotógrafos.', pose: 'chimoltrufia_confundida' },
    { speaker: 'CHAPULIN', text: 'A mí me dijo señora.', pose: 'chapulin_idle' },
    { speaker: 'CHIMOLTRUFIA', text: 'No se sienta mal, joven, que a mí me dijo "muchacho".', pose: 'chimoltrufia_shock' },
    { speaker: 'DEFENSA', text: 'Señora, necesitamos folios originales. No el libro de turno.', pose: 'donramon_point' },
    { speaker: 'CHIMOLTRUFIA', text: 'Ay, licenciado, ¿usted cree que yo estoy para andar de secretaria con mi marido encerrado? Y como digo una cosa digo otra: dígame cuáles y se los saco en dos minutos.', pose: 'chimoltrufia_idle' },
    { speaker: 'DEFENSA', text: '(Catorce años en este mostrador. Es la única persona del hotel que sabe dónde está todo.)', pose: 'donramon_idle' }
  ],
  hotspots: [
    {
      id: 'hotspot_libro_d3',
      label: 'Libro de Servicios',
      x: 52, y: 58, w: 15, h: 16,
      dialogue: [
        { speaker: 'CHIMOLTRUFIA', text: 'El libro ya lo vieron ayer. Los originales están en el archivo.', pose: 'chimoltrufia_idle' }
      ]
    },
    {
      id: 'hotspot_plano_d3',
      label: 'Plano del Mostrador',
      x: 64, y: 58, w: 27, h: 24,
      dialogue: [
        { speaker: 'CHIMOLTRUFIA', text: 'El plano sigue igual: puerta, biombo y corredores.', pose: 'chimoltrufia_confundida' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'folios_noche',
      label: 'Los folios de esa noche',
      dialogue: [
        { speaker: 'CHIMOLTRUFIA', text: 'Aquí está la certificación de entrega del vino firmada ante Maruja. La adjunto.', pose: 'chimoltrufia_idle', updateEvidence: 'orden_servicios' },
        { speaker: 'CHIMOLTRUFIA', text: 'Y de paso: el folio manuscrito que ya tienen lo entregó en mano el propio huésped. No fue llamada ni recado.', pose: 'chimoltrufia_confundida' }
      ]
    },
    {
      id: 'salon_juego',
      label: 'El salón de juego',
      dialogue: [
        { speaker: 'CHIMOLTRUFIA', text: 'Rondas firmadas por los jugadores entre las 23:10 y las 23:25.', pose: 'chimoltrufia_idle', addEvidence: 'boleta_baccarat' },
        { speaker: 'DEFENSA', text: 'Esta boleta confirma que el señor Rufián estaba en la mesa de baccarat cuando sonó el estruendo.', pose: 'donramon_idle' },
        { speaker: 'CHAPULIN', text: '¡Ay, no! ¿Entonces perdimos?', pose: 'chapulin_panic' },
        { speaker: 'DEFENSA', text: 'No, Chapulín. Perdimos una idea que nunca tuvimos.', pose: 'donramon_idle' },
        { speaker: 'CHAPULIN', text: 'Ah, bueno. Ésas son las que menos duelen.', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: 'Nosotros ya sabemos que a las once y cuarto el muerto llevaba horas muerto.', pose: 'donramon_point' },
        { speaker: 'CHIMOLTRUFIA', text: '¿Y eso de qué le sirve a mi Botija?', pose: 'chimoltrufia_confundida' },
        { speaker: 'DEFENSA', text: 'De que ya nadie tenía que estar dentro de esa habitación a esa hora. Ni el conde... ni su marido.', pose: 'donramon_idle' },
        { speaker: 'CHIMOLTRUFIA', text: 'Pues bendito papelito. Como digo una cosa digo otra: el boleto de un jugador me va a salvar al mío.', pose: 'chimoltrufia_idle' }
      ]
    },
    {
      id: 'telegrama_noche',
      label: 'El telegrama de esa noche',
      dialogue: [
        { speaker: 'CHIMOLTRUFIA', text: 'Copia de archivo y acuse de recepción firmado a las 20:50. Reclamación de una parte del Collar de Cleopatra y amenaza de acudir a la policía.', pose: 'chimoltrufia_idle', addEvidence: 'nota_amenaza' }
      ]
    },
    {
      id: 'dicen_hotel',
      label: 'Lo que dicen en el hotel',
      condition: (flags) => Boolean(flags.talk_folios_noche) && Boolean(flags.talk_salon_juego) && Boolean(flags.talk_telegrama_noche),
      dialogue: [
        { speaker: 'CHIMOLTRUFIA', text: 'El personal ya condenó a mi marido por su expediente.', pose: 'chimoltrufia_shock' },
        { speaker: 'DEFENSA', text: 'Por eso vamos a verlo ahora.', pose: 'donramon_idle', unlockLocation: 'detention_d3' }
      ]
    }
  ]
};
