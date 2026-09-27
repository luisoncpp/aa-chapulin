// @Architecture(descriptionShort="Applies UI language and a cached case script when one exists", type="util", icon="panel")
/**
 * Language swap for [[./GameEngine.ts]] without pulling [[src/case/index.ts]].
 */

import { i18n } from '../../i18n/index.js';
import type { CaseScript, Language } from '../../types/index.js';
import { applyClimaxPresentPrompt } from './ClimaxPresentPrompt.js';
import type { DomElements } from './DomElements.js';
import type { InvestigationController } from './InvestigationController.js';
import { rebindPresentPointScript } from './PresentPoint.js';
import type { TrialController } from './TrialController.js';
import { UiLanguageUpdater } from './UiLanguageUpdater.js';
import type { GameStateManager } from '../../state/index.js';

export interface LanguageBind {
  lang: Language;
  state: GameStateManager;
  script: CaseScript | null;
  setScript: (script: CaseScript) => void;
  investigation: InvestigationController;
  trial: TrialController;
  dom: DomElements;
}

export function applyEngineLanguage(bind: LanguageBind): void {
  i18n.setLanguage(bind.lang);
  bind.state.setLanguage(bind.lang);
  if (bind.script) bindLoadedScript(bind, bind.script);
  UiLanguageUpdater.updateUi(bind.dom, bind.lang);
  const isCourtRecordOpen = !bind.dom.courtRecordModalEl.classList.contains('hidden');
  applyClimaxPresentPrompt(bind.dom, isCourtRecordOpen ? bind.trial.getPresentPrompt() : null);
}

function bindLoadedScript(bind: LanguageBind, script: CaseScript): void {
  bind.setScript(script);
  bind.state.applyProgressionRules(script);
  bind.investigation.setScript(script);
  bind.trial.setScript(script);
  rebindPresentPointScript(script);
}
