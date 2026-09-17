// @Architecture(descriptionShort="Spanish character record entries for Case 1", type="catalog", icon="database")
/**
 * Acta de Personajes — Caso 1 (español). Spec §6.4.
 * Consumed through [[./ProfileCatalog.ts]].
 */

import type { ProfileCatalogMap } from '../../types/index.js';

export const CASE1_PROFILES_ES: ProfileCatalogMap = {
  perfil_chapulin: {
    id: 'perfil_chapulin',
    name: 'El Chapulín Colorado',
    role: 'Acusado',
    icon: 'assets/profile_perfil_chapulin.webp',
    desc: 'El acusado. Héroe profesional. Detenido a las 21:07 junto al cuerpo del velador, con su Chipote Chillón en la mano. Dice que llegó tarde.',
    updates: [
      'Mide 1.60 m. El velador mide 1.92 m con botas. Para golpearlo desde arriba habría tenido que estar subido en algo.'
    ]
  },
  perfil_donramon: {
    id: 'perfil_donramon',
    name: 'Don Ramón',
    role: 'Abogado defensor',
    icon: 'assets/profile_perfil_donramon.webp',
    desc: 'Abogado defensor. Catorce meses de renta atrasada. Es la primera vez que defiende a alguien que puede saltar edificios.'
  },
  perfil_supersam: {
    id: 'perfil_supersam',
    name: 'Super Sam',
    role: 'Fiscal',
    icon: 'assets/profile_perfil_supersam.webp',
    desc: 'Fiscal. Cobra por caso cerrado. Cerró éste en cinco minutos. Hoy subió al estrado sin su bolsa de dólares al hombro.',
    updates: [
      'Se negó a decir dónde estuvo su bolsa de lona la noche del 21 y pidió el aplazamiento él mismo.'
    ]
  },
  perfil_tripaseca: {
    id: 'perfil_tripaseca',
    name: 'El Tripaseca',
    role: 'Testigo estrella',
    icon: 'assets/profile_perfil_tripaseca.webp',
    desc: 'Testigo estrella. Comerciante: compra barato y vende lo que se deje. Dice que pasaba por el callejón de carga cerca de las nueve.',
    updates: [
      "Describió el sonido del golpe como 'un costalazo de fierros'.",
      'Dijo haber visto al acusado parado sobre el pedestal de la vitrina. Nadie le preguntó cómo sabía que había un pedestal.',
      'Sabe que la chapa de la puerta de carga está vencida desde marzo.'
    ]
  },
  perfil_florinda: {
    id: 'perfil_florinda',
    name: 'Doña Florinda',
    role: 'Curadora del museo',
    icon: 'assets/profile_perfil_florinda.webp',
    desc: 'Curadora del Museo de las Curiosidades. Única llave de la puerta principal. Cerró a las 20:40 con el Profesor Jirafales de testigo.',
    updates: [
      'Llegó a las 21:05 y vio al acusado de pie junto al velador. Es lo único que vio.'
    ]
  },
  perfil_jirafales: {
    id: 'perfil_jirafales',
    name: 'Profesor Jirafales',
    role: 'Conferencista invitado',
    icon: 'assets/profile_perfil_jirafales.webp',
    desc: 'Conferencista invitado y viejo conocido de la vecindad de Don Ramón. Dio la charla de las 20:00 sobre la Chicharra. Lleva minutario de todo lo que hace.'
  },
  perfil_almanegra: {
    id: 'perfil_almanegra',
    name: 'Alma Negra',
    role: 'Velador del museo / víctima',
    icon: 'assets/profile_perfil_almanegra.webp',
    desc: 'Velador del museo. Víctima. Despertó al segundo día. Fractura occipital. Habla como pirata porque, dice, lo fue.',
    updates: [
      'Su ronda está escrita en una libreta que cuelga de un clavo, a la vista de cualquier visitante.'
    ]
  }
};
