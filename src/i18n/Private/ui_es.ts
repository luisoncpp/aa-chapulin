// @Architecture(descriptionShort="Spanish language UI translations dictionary", type="data", icon="layers")
/**
 * Spanish UI Translation Dictionary
 * Consumed by [[./I18nService.ts]].
 */

import type { UiTranslations } from './types.js';

export const UI_ES: UiTranslations = {
  btnExamine: '🔍 Examinar',
  btnTalk: '💬 Hablar',
  btnMove: '🏃 Moverse',
  btnTrial: '⚖️ Ir a Juicio',
  btnBack: '◀ Volver',
  btnPrev: '◀ Anterior',
  btnPress: '💥 Presionar',
  btnPresent: '📜 Presentar',
  btnNext: 'Siguiente ▶',

  examineTitle: 'MODO EXAMINAR',
  examineTooltip: '🔍 Inspeccionar',
  examinePrompt: '🔍 Mueve el cursor y haz clic sobre los objetos para investigar.',

  courtRecordTitle: 'ACTA DEL JUICIO (COURT RECORD)',
  evidencePlaceholderTitle: 'Selecciona una prueba',
  evidencePlaceholderDesc: 'Haz clic en cualquier objeto para ver sus detalles y contradicciones.',
  modalPresentBtn: '¡Presentar Prueba!',
  talkModalTitle: 'CONVERSAR',

  hudAudioToggleTitle: 'Activar/Desactivar Sonido',
  hudCourtRecordTitle: 'Acta del Juicio (Court Record)',
  hudCourtRecordText: 'Acta',

  splashTitle: 'EL CHAPULÍN COLORADO',
  splashSubtitle: 'ACE ATTORNEY: EL CASO DEL ESCUADRÓN COLORADO',
  splashTip: '¡Haz clic abajo para activar la música MIDI procedimental y comenzar!',
  btnStartGame: '🔍 INICIAR INVESTIGACIÓN (PLAY)',
  btnStartTrialDebug: '⚖️ MODO DEBUG: INICIAR EN JUICIO',
  langToggleLabel: '🌐 Idioma: Español',

  locationMuseum: 'Museo de Antigüedades y Curiosidades - Escena del Crimen',
  locationDetention: 'Centro de Detención - Sala de Visitas',
  locationCourtroom: 'Tribunal Superior - Sala de Audiencias No. 1',

  notifEvidenceAdded: (name: string) => `¡Añadido al Acta del Juicio: ${name}!`,
  notifTrialReady: '¡Has reunido todas las pruebas! ¡Puedes iniciar el Juicio!',
  notifIncorrectClue: '¡Prueba incorrecta! Revisa tus pistas.',

  gameOverJudgeText: '¡La defensa ha agotado sus oportunidades! Declaro al acusado... ¡CULPABLE!',
  gameOverDefenseText: '¡Oh, no! ¡Debo intentarlo de nuevo desde el principio del juicio!',
  penaltyProsecutionText: 'Time is money, and you are wasting mine! Esa prueba no contradice en absoluto el testimonio.',
  penaltyJudgeText: '¡La fiscalía tiene razón! Penalizaré a la defensa por presentar pruebas irrelevantes.'
};
