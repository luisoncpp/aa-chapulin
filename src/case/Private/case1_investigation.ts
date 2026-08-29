// @Architecture(descriptionShort="Defines museum and detention scenes, hotspots, and talk data", type="data", icon="layers")
/**
 * Case 1 Investigation Scenes Data (Museum & Detention)
 * Consumed by [[src/engine/Private/InvestigationController.ts]].
 */

import type { InvestigationScene, LocationId } from '../../types/index.js';

export const INVESTIGATION_SCENES: Record<LocationId, InvestigationScene> = {
  // @Section(Museum Crime Scene)
  museum: {
    title: 'Museo de Antigüedades y Curiosidades - Escena del Crimen',
    name: 'Museo de Curiosidades',
    bg: 'assets/bg_museum.jpg',
    bgm: 'investigation',
    speaker: 'NARRADOR',
    intro: [
      { speaker: 'NARRADOR', text: '21 de Agosto, 9:30 PM. Museo de Curiosidades.' },
      { speaker: 'DEFENSA', text: "La legendaria 'Chicharra Paralizadora de Oro' ha sido sustraída de su vitrina protegida..." },
      { speaker: 'FLORINDA', text: '¡Ay, Dios mío! ¡Qué escándalo! ¡Toda la chusma del vecindario está hablando de esto!', pose: 'florinda_angry', sfx: 'text' },
      { speaker: 'DEFENSA', text: '(Doña Florinda es la curadora del museo... y parece más molesta que de costumbre.)' }
    ],
    hotspots: [
      {
        id: 'pedestal',
        label: 'Vitrina Destrozada & Pedestal',
        x: 44, y: 22, w: 18, h: 48,
        dialogue: [
          { speaker: 'DEFENSA', text: 'La vitrina central está hecha añicos... El vidrio está esparcido hacia afuera.', sfx: 'realization' },
          { speaker: 'DEFENSA', text: '¡Espera un segundo! ¿Qué es esto brillando en la base del pedestal?', sfx: 'text' },
          { speaker: 'DEFENSA', text: "¡Son 'Pastillas de Chiquitolina'! ¿Por qué estarían regadas aquí cerca del ducto de ventilación?", sfx: 'realization', addEvidence: 'pastillas_chiquitolina' },
          { speaker: 'FLORINDA', text: '¡Esas pastillas las dejó caer el sospechoso antes de huir!', pose: 'florinda_idle' }
        ]
      },
      {
        id: 'armor',
        label: 'Guardia Alma Negra & Armadura',
        x: 3, y: 25, w: 18, h: 50,
        dialogue: [
          { speaker: 'DEFENSA', text: 'El pirata Alma Negra, guardia del museo, está sentado con una compresa de hielo en la cabeza.', sfx: 'text' },
          { speaker: 'DEFENSA', text: 'Examinemos el informe médico preliminar de los paramédicos...', sfx: 'text' },
          { speaker: 'DEFENSA', text: "'El sujeto presenta contusión craneal severa producida por un impacto metálico denso, probablemente monedas pesadas en un costal.'", sfx: 'realization', addEvidence: 'informe_medico' },
          { speaker: 'DEFENSA', text: '(¿Impacto metálico? Pero la fiscalía asegura que fue atacado con un Chipote Chillón...)', sfx: 'text' }
        ]
      },
      {
        id: 'security_cam',
        label: 'Cámara de Seguridad & Tragaluz',
        x: 58, y: 8, w: 15, h: 32,
        dialogue: [
          { speaker: 'DEFENSA', text: 'La cámara de seguridad frontal capturó una fotografía borrosa a las 9:00 PM en punto.', sfx: 'text' },
          { speaker: 'DEFENSA', text: 'Muestra a una persona con capucha roja y antenas corriendo... pero algo luce muy extraño en su pecho.', sfx: 'realization', addEvidence: 'foto_crimen' },
          { speaker: 'DEFENSA', text: "(El emblema del pecho tiene las letras 'HC' invertidas. ¿Por qué razón?)", sfx: 'text' }
        ]
      },
      {
        id: 'treasure_chest',
        label: 'Cofre y Farol de Curiosidades',
        x: 74, y: 48, w: 22, h: 38,
        dialogue: [
          { speaker: 'DEFENSA', text: 'Un cofre de madera antiguo y un farol de aceite.', sfx: 'text' },
          { speaker: 'FLORINDA', text: '¡Ese cofre contenía monedas de colección pirata, pero están intactas! El ladrón sólo buscaba la Chicharra de Oro.', pose: 'florinda_idle' }
        ]
      }
    ],
    talkOptions: [
      {
        id: 'about_crime',
        label: '¿Qué ocurrió con la Chicharra de Oro?',
        dialogue: [
          { speaker: 'FLORINDA', text: '¡Estaba yo terminando de regar las plantas cuando sonó un estruendo en la sala principal!', pose: 'florinda_shock' },
          { speaker: 'FLORINDA', text: 'Corrí hacia aquí y vi a un hombre vestido de rojo con un enorme martillo saltando por el tragaluz.', pose: 'florinda_idle' },
          { speaker: 'DEFENSA', text: '¿Pudo verle la cara con claridad?' },
          { speaker: 'FLORINDA', text: '¡Por supuesto! Tenía dos antenas amarillas moviéndose frenéticamente. ¡No hay duda!', pose: 'florinda_angry' }
        ]
      },
      {
        id: 'about_suspect',
        label: 'Sobre el sospechoso detenido',
        dialogue: [
          { speaker: 'FLORINDA', text: "El fiscal Super Sam llegó en tres minutos diciendo 'Time is money!' y ordenó su arresto inmediato.", pose: 'florinda_idle' },
          { speaker: 'FLORINDA', text: 'El Chapulín estaba atrapado de cabeza dentro de una jaula para loros del siglo XVIII.', pose: 'florinda_idle', unlockLocation: 'detention' },
          { speaker: 'DEFENSA', text: '(Típico del Chapulín... siempre calculando fríamente sus movimientos.)' }
        ]
      }
    ]
  },

  // @Section(Detention Center Scene)
  detention: {
    title: 'Centro de Detención - Sala de Visitas',
    name: 'Centro de Detención',
    bg: 'assets/bg_detention.jpg',
    bgm: 'detention_center',
    speaker: 'CHAPULIN',
    intro: [
      { speaker: 'CHAPULIN', text: '¡Oh! Y ahora, ¿quién podrá defenderme?!', pose: 'chapulin_panic', sfx: 'text' },
      { speaker: 'DEFENSA', text: '¡Pues yo, el Licenciado Monchito! Digo... Don Ramón. ¡Asumiré tu defensa en el tribunal para salvarte del bote y ganarme unos centavos!' },
      { speaker: 'CHAPULIN', text: '¡Síganme los buenos! Digo... menos mal. Ya me estaba acostumbrando al menú de pan y agua.', pose: 'chapulin_idle' }
    ],
    hotspots: [
      {
        id: 'chapulin_spot',
        label: 'El Chapulín Colorado',
        x: 20, y: 15, w: 32, h: 60,
        dialogue: [
          { speaker: 'CHAPULIN', text: '¡Mis movimientos están fríamente calculados... excepto cuando me encierran en una celda!', pose: 'chapulin_idle' },
          { speaker: 'DEFENSA', text: "El Chapulín te entrega sus 'Antenitas de Vinil' para que las uses como prueba.", sfx: 'realization', addEvidence: 'antenitas_vinil' }
        ]
      },
      {
        id: 'phone_spot',
        label: 'Teléfono de Visitas',
        x: 76, y: 28, w: 14, h: 36,
        dialogue: [
          { speaker: 'DEFENSA', text: 'El auricular del teléfono de la sala de visitas.', sfx: 'text' },
          { speaker: 'CHAPULIN', text: 'Traté de llamar a los bomberos, pero la operadora me cobró en dólares. ¡Seguro fue Super Sam!', pose: 'chapulin_panic' }
        ]
      },
      {
        id: 'table_spot',
        label: 'Mesa de Acero & Martillo',
        x: 35, y: 62, w: 50, h: 22,
        dialogue: [
          { speaker: 'DEFENSA', text: "Sobre la mesa está el 'Chipote Chillón' decomisado por la policía.", sfx: 'text' },
          { speaker: 'DEFENSA', text: 'Al examinarlo de cerca, compruebas que es completamente de vinil y goma blanda.', sfx: 'chipote', addEvidence: 'chipote_chillon' }
        ]
      }
    ],
    talkOptions: [
      {
        id: 'chapulin_story',
        label: '¿Qué hacías en el museo?',
        dialogue: [
          { speaker: 'CHAPULIN', text: 'Estaba yo cenando una torta de jamón cuando mis antenitas de vinil comenzaron a vibrar a las 8:45 PM.', pose: 'chapulin_idle' },
          { speaker: 'CHAPULIN', text: '¡Detectaron la presencia del enemigo! Así que me teletransporté de inmediato... o bueno, tomé un taxi.', pose: 'chapulin_idle' },
          { speaker: 'CHAPULIN', text: 'Al llegar, la vitrina ya estaba rota y Alma Negra estaba inconsciente. ¡Alguien me tendió una trampa!', pose: 'chapulin_panic' },
          { speaker: 'DEFENSA', text: "Las 'Antenitas de Vinil' tienen un registro de la hora de alarma: 8:45 PM.", sfx: 'realization', addEvidence: 'antenitas_vinil' }
        ]
      },
      {
        id: 'chapulin_weapon',
        label: '¿Atacaste al guardia con tu martillo?',
        dialogue: [
          { speaker: 'CHAPULIN', text: '¡¿Yo?! ¡Jamás! ¡El Chipote Chillón es un instrumento noble para defender a los indefensos!', pose: 'chapulin_slam', sfx: 'desk_slam' },
          { speaker: 'CHAPULIN', text: '¡Míralo tú mismo! Es de goma y plástico inflable.', pose: 'chapulin_idle' },
          { speaker: 'DEFENSA', text: 'Al apretarlo, emite un cómico chillido: ¡SQUIIIIK!', sfx: 'chipote', addEvidence: 'chipote_chillon' },
          { speaker: 'DEFENSA', text: '(Es físicamente imposible fracturar un cráneo con esto... ¡Tengo una prueba sólida!)', sfx: 'realization' }
        ]
      }
    ]
  }
};
