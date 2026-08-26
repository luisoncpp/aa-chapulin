// @Architecture(descriptionShort="Public facade exporting localization service and translations", type="facade", icon="globe")
/**
 * Internationalization (i18n) Subsystem Public Interface
 * Exposes [[./Private/I18nService.ts|I18nService]] and UI dictionaries.
 */

export {
  // fallow-ignore-next-line unused-export
  I18nService,
  i18n,
  // fallow-ignore-next-line unused-export
  SUPPORTED_LANGUAGES,
  // fallow-ignore-next-line unused-export
  DEFAULT_LANGUAGE
} from './Private/I18nService.js';

export type {
  // fallow-ignore-next-line unused-type
  UiTranslations,
  // fallow-ignore-next-line unused-type
  LanguageChangeListener
} from './Private/types.js';

// fallow-ignore-next-line unused-export
export { UI_ES } from './Private/ui_es.js';
// fallow-ignore-next-line unused-export
export { UI_EN } from './Private/ui_en.js';
