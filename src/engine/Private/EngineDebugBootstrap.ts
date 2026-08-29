// @Architecture(descriptionShort="Applies URL query and hash debug launch flags", type="util", icon="bolt")
/**
 * Debug URL bootstrap for language, case, and trial shortcuts.
 * Used by [[./GameEngine.ts]] during init.
 */

import type { CaseId, Language } from '../../types/index.js';

export interface DebugUrlActions {
  setLanguage: (lang: Language) => void;
  loadCase: (caseId: CaseId) => void;
  startTrialDebug: () => void;
}

export function applyDebugUrlParams(actions: DebugUrlActions): void {
  if (typeof window === 'undefined' || !window.location) return;
  const url = `${window.location.search} ${window.location.hash}`.toLowerCase();
  if (url.includes('lang=en')) actions.setLanguage('en');
  if (url.includes('case=2')) actions.loadCase('case2');
  if (url.includes('trial')) actions.startTrialDebug();
}
