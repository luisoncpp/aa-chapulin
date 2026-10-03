// @Architecture(descriptionShort="Dispatches saved dialogue continuations into gameplay controllers")
import type { DialogueContinuation } from '../../types/index.js';
import type { PersistenceHost } from './EnginePersistence.js';
import { afterTrialIntro, resumeContradiction, resumePendingPresent, resumeSequence } from './TrialPresent.js';
import { advanceAfterContradiction } from './TrialOutcome.js';
import { celebrateClimax, queueClimaxCelebration, rebindClimaxChoiceModal } from './TrialClimax.js';
import { startPresentPoint } from './PresentPoint.js';
import { fadeAcrossGallery, splitTrialIntroAtGallery } from './TrialOpening.js';
import { fadeToBlack } from './SceneFade.js';
import { showCaseComplete } from './CaseComplete.js';
import { resumeClimaxPoint } from './TrialClimaxPresent.js';

// Each branch is a distinct serialized continuation, with no nested decisions.
// fallow-ignore-next-line complexity
export function resumeDialogue(host: PersistenceHost, next: DialogueContinuation): void {
  const ctrl = host.trial;
  const climax = ctrl.script.trial.climax;
  switch (next.kind) {
    case 'none': return;
    case 'intro': return afterTrialIntro(ctrl);
    case 'courtroom': return resumeCourtroom(host);
    case 'testimony': return ctrl.startTestimony(next.index);
    case 'statement': return ctrl.renderCurrentStatement();
    case 'press': return ctrl.finishPress(next.id);
    case 'contradiction': return resumeContradiction(ctrl);
    case 'advance': return advanceAfterContradiction(ctrl);
    case 'sequence': return resumeSequence(ctrl);
    case 'present': return resumePendingPresent(ctrl);
    case 'choice': return rebindClimaxChoiceModal(ctrl);
    case 'verdict': return queueClimaxCelebration(climax.verdict, climax, ctrl.deps);
    case 'celebrate': return celebrateClimax(climax, ctrl.deps);
    case 'complete': return fadeToBlack(host.dom.flashEl, () => showCaseComplete(host.dom));
    case 'restart': return ctrl.restartAfterGameOver();
    case 'deduction': return ctrl.startDeduction(next.id || undefined);
    case 'climax-point': return resumeClimaxPoint(ctrl, next.index);
    case 'dialogue': return host.dialogue.queueDialogue(next.lines, () => resumeDialogue(host, next.next), next.next);
    case 'point': return startPresentPoint({ deps: { ...ctrl.deps, onRestartTrial: () => ctrl.restartAfterGameOver() },
      pointTarget: next.target, next: next.next, onSuccess: () => resumeDialogue(host, next.next) });
    case 'investigation-intro': return host.investigation.finishIntro();
    case 'investigation-hotspot': return host.investigation.finishHotspot(next.id);
    case 'investigation-talk': return host.investigation.finishTalk();
  }
}

function resumeCourtroom(host: PersistenceHost): void {
  const trial = { script: host.trial.script, trialDay: host.state.trialDay };
  const lines = splitTrialIntroAtGallery(trial.script, trial.trialDay)?.courtroom ?? [];
  fadeAcrossGallery(host.dom, () => {
    host.dialogue.queueDialogue(lines, () => afterTrialIntro(host.trial), { kind: 'intro' });
  }, trial);
}
