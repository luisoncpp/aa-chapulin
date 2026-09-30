// @Architecture(descriptionShort="Spanish character record entries for Case 4", type="catalog", icon="database")
/** Acta de Personajes — Caso 4, hitos del Acto 4. */

import type { ProfileCatalogMap } from '../../types/index.js';

export const CASE4_PROFILES_ES: ProfileCatalogMap = {
  perfil_chimoltrufia: {
    id: 'perfil_chimoltrufia', name: 'La Chimoltrufia', role: 'Esposa de Botija',
    icon: 'assets/chimoltrufia_idle.webp',
    desc: 'Esposa de Botija. Vino al Centro de Detención preocupada por su marido.',
    updates: ['Esposa de Botija, preocupada por su marido. Lleva catorce años en el hotel y conoce el archivo de recepción.']
  },
  perfil_botija: {
    id: 'perfil_botija', name: 'Gordon Botija', role: 'Acusado de homicidio',
    icon: 'assets/botija_idle.webp',
    desc: 'Fontanero del Gran Hotel Buena Vista, acusado de homicidio. Está detenido desde la noche anterior.',
    updates: [
      'Fontanero del Gran Hotel Buena Vista, acusado de homicidio y detenido desde la noche anterior. Reconoció al muerto como Cuajinais, un antiguo conocido; tomó la cartera y se escondió por miedo a que los relacionaran otra vez.',
      'Fontanero del Gran Hotel Buena Vista, acusado de homicidio y detenido desde la noche anterior. Reconoció a Cuajinais como antiguo conocido, tomó la cartera y se escondió por miedo a que los relacionaran. Dice que rechazó la propuesta de volver a trabajar con Cuajinais; varias personas oyeron la discusión.'
    ]
  },
  perfil_donramon: {
    id: 'perfil_donramon', name: 'Don Ramón', role: 'Abogado defensor',
    icon: 'assets/profile_perfil_donramon.webp',
    desc: 'Abogado defensor de Botija. Llega al Centro de Detención para escuchar su versión.'
  },
  perfil_chapulin: {
    id: 'perfil_chapulin', name: 'El Chapulín Colorado', role: 'Co-defensor',
    icon: 'assets/profile_perfil_chapulin.webp',
    desc: 'El Chapulín Colorado. Acompaña a Don Ramón y ayuda a escuchar el relato de Botija.'
  },
  perfil_cecilio: {
    id: 'perfil_cecilio', name: 'Don Cecilio Buenavista', role: 'Encargado de recepción',
    icon: 'assets/cecilio_idle.webp',
    desc: 'Cecilio Buenavista, encargado de recibir a los huéspedes del Gran Hotel Buena Vista.',
    updates: [
      'Propietario y gerente del Gran Hotel Buena Vista, al frente de la recepción durante treinta y un años.',
      'Propietario y gerente del Gran Hotel Buena Vista, al frente de la recepción durante treinta y un años. Tiene una limitación visual: a dos metros distingue colores, pero no personas.'
    ]
  },
  perfil_rufino: {
    id: 'perfil_rufino', name: 'Rufino Rufián', role: 'Huésped de la Suite 204',
    icon: 'assets/rufino_monocle.webp',
    desc: 'Huésped de la Suite 204. Se presenta como el Conde de Montemayor.',
    updates: [
      'Huésped de la Suite 204 que se presenta como el Conde de Montemayor. Explica que la cabeza de su anillo gira para proteger el relieve y que lo usa para sellar correspondencia.',
      'Huésped de la Suite 204 que se presenta como el Conde de Montemayor. Explicó el uso de su anillo para sellar correspondencia. Admite que Cuajinais lo visitó y que recibió su firma; también reconoce haber recibido el baúl B-17.'
    ]
  },
  perfil_sargento: {
    id: 'perfil_sargento', name: 'El Sargento', role: 'Policía a cargo de la escena',
    icon: 'assets/profile_perfil_sargento.webp',
    desc: 'Sargento Refugio Pazguato, policía a cargo de la escena. Numera los objetos y pide avisar antes de moverlos.',
  },
  perfil_maruja: {
    id: 'perfil_maruja', name: 'Maruja', role: 'Huésped del Buena Vista',
    icon: 'assets/maruja_idle.webp',
    desc: 'Huésped del Buena Vista. Allí la llaman la Sirena del Hotel.',
    updates: ['Conservó el cierre que Cuajinais le dio al abrir la botella, antes de beber, y se lo entregó al Sargento.']
  },
  perfil_cuajinais: {
    id: 'perfil_cuajinais', name: 'El Cuajinais', role: 'Huésped encontrado muerto en la Suite 304',
    icon: 'assets/profile_perfil_cuajinais.webp',
    desc: 'Huésped encontrado muerto en la Suite 304. Botija dice que lo conocía de antes.',
    updates: [
      'Huésped encontrado muerto en la Suite 304; Botija dice que lo conocía de antes. El examen establece que murió antes de recibir la herida de bala, sin identificar quién lo mató ni cómo.',
      'Huésped encontrado muerto en la Suite 304, antiguo conocido de Botija. El examen establece que murió antes de la herida de bala. Maruja lo vio vivo en la Suite 204 esa noche, antes de que bebiera de la botella.',
      'Huésped encontrado muerto en la Suite 304 y antiguo conocido de Botija. El examen establece que murió antes de la herida de bala; Maruja lo vio vivo antes de beber de la botella. El telegrama acredita que reclamó a Rufino una parte del Collar de Cleopatra y amenazó con acudir a la policía.'
    ]
  },
  perfil_supersam: {
    id: 'perfil_supersam', name: 'Super Sam', role: 'Fiscal',
    icon: 'assets/profile_perfil_supersam.webp',
    desc: 'Fiscal. Sostiene que Botija es responsable de la muerte y usa su presencia en la Suite 304 como parte de la acusación.',
  },
  perfil_chompiras: {
    id: 'perfil_chompiras', name: 'El Chómpiras', role: 'Botones y operador del montacargas',
    icon: 'assets/profile_perfil_chompiras.webp',
    desc: 'Botones y operador del montacargas del Gran Hotel Buena Vista. Lleva registro de los equipajes que pasan por la cabina.',
  },
  perfil_juez: {
    id: 'perfil_juez', name: 'El Juez', role: 'Juez de la Corte',
    icon: 'assets/judge_neutral.webp',
    desc: 'Juez de la Corte. Exige distinguir una posibilidad, lo que corroboran las pruebas y lo que realmente queda demostrado.'
  }
};
