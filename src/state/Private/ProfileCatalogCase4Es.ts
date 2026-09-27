// @Architecture(descriptionShort="Spanish character record entries for Case 4", type="catalog", icon="database")
/** Acta de Personajes — Caso 4, hitos del Acto 4. */

import type { ProfileCatalogMap } from '../../types/index.js';

export const CASE4_PROFILES_ES: ProfileCatalogMap = {
  perfil_chimoltrufia: {
    id: 'perfil_chimoltrufia', name: 'La Chimoltrufia', role: 'Esposa de Botija',
    icon: 'assets/chimoltrufia_idle.webp',
    desc: 'Esposa de Botija. Vino al Centro de Detención preocupada por su marido.',
    updates: ['Lleva catorce años en el hotel y conoce el archivo de recepción; la pusieron al frente del mostrador mientras Cecilio atiende a la prensa.']
  },
  perfil_botija: {
    id: 'perfil_botija', name: 'Gordon Botija', role: 'Acusado de homicidio',
    icon: 'assets/botija_idle.webp',
    desc: 'Fontanero del Gran Hotel Buena Vista, acusado de homicidio. Está detenido desde la noche anterior.',
    updates: [
      'Reconoció al muerto como Cuajinais, un antiguo conocido. Tomó la cartera y se escondió por miedo a que los relacionaran otra vez.',
      'Dice que rechazó la propuesta de volver a trabajar con Cuajinais; varias personas oyeron la discusión.'
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
      'Propietario y gerente del hotel. Lleva treinta y un años al frente de la recepción y distingue colores mejor que personas.',
      'Comprobó con la mano el estado de la puerta. En su testimonio sostuvo que solo alguien dentro pudo echar la cadena.'
    ]
  },
  perfil_rufino: {
    id: 'perfil_rufino', name: 'Rufino Rufián', role: 'Huésped de la Suite 204',
    icon: 'assets/rufino_monocle.webp',
    desc: 'Huésped de la Suite 204. Se presenta como el Conde de Montemayor.',
    updates: [
      'Explica que la cabeza de su anillo gira para proteger el relieve y que lo usa para sellar correspondencia.',
      'Admite que Cuajinais lo visitó y que recibió su firma; también reconoce que recibió el baúl B-17.',
      'La boleta confirma que estuvo en la mesa de baccarat durante el estruendo. Esa coartada explica dónde estaba a esa hora, no qué ocurrió antes.',
      'El encaje del anillo y el fragmento del cierre, junto con los análisis, prueban su intervención en el envenenamiento.'
    ]
  },
  perfil_sargento: {
    id: 'perfil_sargento', name: 'El Sargento', role: 'Policía a cargo de la escena',
    icon: 'assets/profile_perfil_sargento.webp',
    desc: 'Sargento Refugio Pazguato, policía a cargo de la escena. Numera los objetos y pide avisar antes de moverlos.',
    updates: ['Registró la entrega del cierre con hora y las firmas de Maruja y del propio Sargento.']
  },
  perfil_maruja: {
    id: 'perfil_maruja', name: 'Maruja', role: 'Huésped del Buena Vista',
    icon: 'assets/maruja_idle.webp',
    desc: 'Huésped del Buena Vista. Allí la llaman la Sirena del Hotel.',
    updates: ['Conservó el cierre que Cuajinais le dio al abrir la botella, antes de beber, y se lo entregó al Sargento.']
  },
  perfil_cuajinais: {
    id: 'perfil_cuajinais', name: 'El Cuajinais', role: 'Huésped encontrado muerto en la Suite 304',
    icon: 'assets/billetera_cuajinais.webp',
    desc: 'Huésped encontrado muerto en la Suite 304. Botija dice que lo conocía de antes.',
    updates: [
      'El examen establece que murió antes de recibir la herida de bala; aún no identifica quién lo mató ni cómo.',
      'Maruja lo vio vivo en la Suite 204 esa noche, antes de que bebiera de la botella.',
      'El telegrama acredita que reclamó a Rufino una parte del Collar de Cleopatra y amenazó con acudir a la policía.'
    ]
  },
  perfil_supersam: {
    id: 'perfil_supersam', name: 'Super Sam', role: 'Fiscal',
    icon: 'assets/profile_perfil_supersam.webp',
    desc: 'Fiscal. Sostiene que Botija es responsable de la muerte y usa su presencia en la Suite 304 como parte de la acusación.',
    updates: [
      'La herida de bala no causó la muerte; la acusación debe buscar otra causa.',
      'La prueba vincula a Botija con el porte, pero todavía debe demostrarse que conocía su contenido.',
      'La fiscalía considera que Rufino escondió el cadáver, pero sostiene que otra persona sirvió la copa.'
    ]
  },
  perfil_chompiras: {
    id: 'perfil_chompiras', name: 'El Chómpiras', role: 'Botones y operador del montacargas',
    icon: 'assets/profile_perfil_chompiras.webp',
    desc: 'Botones y operador del montacargas del Gran Hotel Buena Vista. Lleva registro de los equipajes que pasan por la cabina.',
    updates: ['Su registro y su relato sitúan el baúl cerrado entre la planta 2, la Suite 304 y la azotea; no indican qué llevaba dentro.']
  },
  perfil_juez: {
    id: 'perfil_juez', name: 'El Juez', role: 'Juez de la Corte',
    icon: 'assets/judge_neutral.webp',
    desc: 'Juez de la Corte. Exige distinguir una posibilidad, lo que corroboran las pruebas y lo que realmente queda demostrado.'
  }
};
