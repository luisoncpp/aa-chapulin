// @Architecture(descriptionShort="Spanish character record entries for Case 2", type="catalog", icon="database")
/** Acta de Personajes — Caso 2, hitos del Acto 1. */

import type { ProfileCatalogMap } from '../../types/index.js';

export const CASE2_PROFILES_ES: ProfileCatalogMap = {
  perfil_donramon: {
    id: 'perfil_donramon', name: 'Don Ramón', role: 'Abogado defensor',
    icon: 'assets/profile_perfil_donramon.webp',
    desc: 'Abogado defensor de El Chómpiras. Lleva catorce meses de renta atrasada y trabaja con el Chapulín Colorado.'
  },
  perfil_chapulin: {
    id: 'perfil_chapulin', name: 'El Chapulín Colorado', role: 'Co-defensor',
    icon: 'assets/profile_perfil_chapulin.webp',
    desc: 'Héroe y co-defensor de El Chómpiras. Sus antenitas de vinil detectan pistas, aunque no explican por sí solas qué las hizo vibrar.'
  },
  perfil_chompiras: {
    id: 'perfil_chompiras', name: 'El Chómpiras', role: 'Acusado',
    icon: 'assets/profile_perfil_chompiras.webp',
    desc: 'Aquiles Esquivel Madrazo, conocido como El Chómpiras. Está acusado de robar el Chanfle de Oro.',
    updates: [
      'El residuo del ducto coincide con la esencia sedante. La evidencia indica que estuvo profundamente dormido durante parte del robo.'
    ]
  },
  perfil_florinda: {
    id: 'perfil_florinda', name: 'Doña Florinda', role: 'Encargada del restaurante',
    icon: 'assets/profile_perfil_florinda.webp',
    desc: 'Dueña del restaurante junto a la hacienda.',
    updates: [
      'Notó un parpadeo de las luces a las 9:15 PM y encontró al Chómpiras dentro de la bóveda cuando sonó la alarma.'
    ]
  },
  perfil_peterete: {
    id: 'perfil_peterete', name: 'El Peterete', role: 'Jefe de seguridad',
    icon: 'assets/peterete_smug.webp',
    desc: 'Jefe de seguridad de la hacienda y perito valuador. Participa en la inspección de la bóveda.',
    updates: [
      'Sostiene que el Chómpiras abrió la caja fuerte durante el apagón y que el robo ocurrió a las 10:00 PM.',
      'La multa y el registro postal contradicen su relato de que estuvo en la oficina de correos a las 9:30 PM.',
      'El plano muestra un montaplatos entre la bóveda y el callejón. El testigo había afirmado que no existía una salida al exterior.',
      'El molde reproduce la llave maestra. La hora de compra de la esencia coincide con el periodo en que el jefe de seguridad tenía acceso a la llave original.'
    ]
  },
  perfil_jirafales: {
    id: 'perfil_jirafales', name: 'Profesor Jirafales', role: 'Profesor y huésped',
    icon: 'assets/profile_perfil_jirafales.webp',
    desc: 'Profesor y huésped del restaurante de Doña Florinda la noche del robo. Se interesa por la arquitectura y la precisión.',
    updates: [
      'Su plano muestra el ducto de ventilación y un montaplatos que conecta la bóveda con el callejón.'
    ]
  },
  perfil_jaimito: {
    id: 'perfil_jaimito', name: 'Don Jaimito', role: 'Cartero',
    icon: 'assets/jaimito_idle.webp',
    desc: 'Cartero de Tangamandapio. Su carrito de correo estuvo en el callejón trasero de la hacienda.',
    updates: [
      'La multa municipal sitúa su carrito abandonado a las 9:30 PM; Jaimito recuerda que dormía en el parque.'
    ]
  },
  perfil_clotilde: {
    id: 'perfil_clotilde', name: 'Doña Clotilde', role: 'Vecina y botánica aficionada',
    icon: 'assets/clotilde_idle.webp',
    desc: 'Vecina aficionada a la botánica. Prepara una esencia de rosas y valeriana.',
    updates: [
      'Un cliente elegante compró tres frascos la tarde anterior al robo; Clotilde recuerda su sombrero y bufanda, pero no da su nombre.',
      'La tarde de la compra coincide con el momento en que el jefe de seguridad tenía la llave maestra original.'
    ]
  },
  perfil_supersam: {
    id: 'perfil_supersam', name: 'Super Sam', role: 'Fiscal',
    icon: 'assets/profile_perfil_supersam.webp',
    desc: 'Fiscal del caso. Pide un veredicto rápido contra El Chómpiras y sostiene que fue hallado con la herramienta del delito.'
  }
};
