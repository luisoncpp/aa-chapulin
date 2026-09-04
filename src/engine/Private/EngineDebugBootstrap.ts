// @Architecture(descriptionShort="Applies URL query and hash debug launch flags", type="util", icon="bolt")
/**
 * Debug URL bootstrap for language, case, and trial shortcuts.
 * Used by [[./GameEngine.ts]] during init.
 */

import type { CaseId, Language, TrialDay } from '../../types/index.js';

export interface DebugUrlActions {
  setLanguage: (lang: Language) => void;
  loadCase: (caseId: CaseId) => void;
  startTrialDebug: (day?: TrialDay) => void;
}

function parseTrialDay(url: string): TrialDay | undefined {
  const match = url.match(/trial=(\d)/);
  if (match) return Number(match[1]) as TrialDay;
  if (url.includes('trial')) return 1;
  return undefined;
}

export function applyDebugUrlParams(actions: DebugUrlActions): void {
  if (typeof window === 'undefined' || !window.location) return;
  const url = `${window.location.search} ${window.location.hash}`.toLowerCase();
  if (url.includes('lang=en')) actions.setLanguage('en');
  if (url.includes('case=3')) actions.loadCase('case3');
  else if (url.includes('case=4')) actions.loadCase('case4');
  else if (url.includes('case=2')) actions.loadCase('case2');
  const trialDay = parseTrialDay(url);
  if (trialDay) actions.startTrialDebug(trialDay);
}
