// @Architecture(descriptionShort="Starts investigation or debug trial from splash", type="util", icon="bolt")
/**
 * Splash dismissal and case launch for [[./GameEngine.ts]].
 */

import type { SoundEngine } from '../../audio/index.js';
import { getCaseScript } from '../../case/index.js';
import type { GameStateManager } from '../../state/index.js';
import type { CaseId, CaseScript } from '../../types/index.js';
import type { DomElements } from './DomElements.js';
import type { InvestigationController } from './InvestigationController.js';
import type { TrialController } from './TrialController.js';

export interface LaunchHost {
  dom: DomElements;
  state: GameStateManager;
  soundEngine: SoundEngine;
  investigation: InvestigationController;
  trial: TrialController;
  hasStarted: boolean;
  getScript: () => CaseScript;
  setScript: (script: CaseScript) => void;
  markStarted: () => void;
}

export function loadCase(host: LaunchHost, caseId: CaseId): void {
  host.state.caseId = caseId;
  const script = getCaseScript(host.state.language, caseId);
  host.setScript(script);
  host.investigation.setScript(script);
  host.trial.setScript(script);
  host.state.applyProgressionRules(script);
}

export function dismissSplash(dom: DomElements, soundEngine: SoundEngine): void {
  soundEngine.init();
  soundEngine.resume();
  soundEngine.playGavel();
  dom.startSplashOverlayEl.style.opacity = '0';
  setTimeout(/*hideSplash*/ () => {
    dom.startSplashOverlayEl.classList.add('hidden');
  }, /*delayInMs=*/ 400);
}

export function startGame(host: LaunchHost, caseId: CaseId = 'case1'): void {
  if (host.hasStarted) return;
  host.markStarted();
  loadCase(host, caseId);
  host.state.beginNewCase(host.getScript());
  dismissSplash(host.dom, host.soundEngine);
  host.investigation.startInvestigation(host.getScript().startLocation);
}

export function startTrialDebug(host: LaunchHost): void {
  if (host.hasStarted) return;
  host.markStarted();
  loadCase(host, host.state.caseId);
  host.state.beginNewCase(host.getScript());
  dismissSplash(host.dom, host.soundEngine);
  host.state.populateTrialEvidence();
  host.trial.startTrial();
}
