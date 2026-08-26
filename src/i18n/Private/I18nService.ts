// @Architecture(descriptionShort="Manages active locale, translations, and change listeners", type="service", icon="globe")
/**
 * Localization Service Coordinator
 * Dispatches language changes and provides localized UI strings.
 */

import type { Language } from '../../types/index.js';
import type { LanguageChangeListener, UiTranslations } from './types.js';
import { UI_EN } from './ui_en.js';
import { UI_ES } from './ui_es.js';

// fallow-ignore-next-line unused-export
export const SUPPORTED_LANGUAGES: Language[] = ['es', 'en'];
// fallow-ignore-next-line unused-export
export const DEFAULT_LANGUAGE: Language = 'es';

// fallow-ignore-next-line unused-export
export class I18nService {
  private currentLanguage: Language = DEFAULT_LANGUAGE;
  private readonly listeners: LanguageChangeListener[] = [];

  // @Section(Language Getters & Setters)
  public getLanguage(): Language {
    return this.currentLanguage;
  }

  public setLanguage(lang: Language): void {
    if (!SUPPORTED_LANGUAGES.includes(lang)) return;
    if (this.currentLanguage === lang) return;
    this.currentLanguage = lang;
    this.notifyListeners(lang);
  }

  public toggleLanguage(): Language {
    const nextLang: Language = this.currentLanguage === 'es' ? 'en' : 'es';
    this.setLanguage(nextLang);
    return nextLang;
  }

  // @Section(Subscription Management)
  public subscribe(listener: LanguageChangeListener): () => void {
    this.listeners.push(listener);
    return () => {
      const idx = this.listeners.indexOf(listener);
      if (idx !== -1) this.listeners.splice(idx, 1);
    };
  }

  private notifyListeners(lang: Language): void {
    this.listeners.forEach((listener) => {
      try {
        listener(lang);
      } catch (err) {
        console.error('Error in language change listener:', err);
      }
    });
  }

  // @Section(UI Translations Accessor)
  public getUI(lang: Language = this.currentLanguage): UiTranslations {
    return lang === 'en' ? UI_EN : UI_ES;
  }

  public get t(): UiTranslations {
    return this.getUI(this.currentLanguage);
  }
}

export const i18n = new I18nService();
