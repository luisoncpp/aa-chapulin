// @Architecture(descriptionShort="Starts trial openings after resetting testimony and pending prompts")
import type { TrialController } from './TrialController.js';
import { getActiveTrial } from './TrialDayRouter.js';
import { afterTrialIntro, restorePendingPresent } from './TrialPresent.js';
import { fadeAcrossGallery, paintCourtroomPlate, splitTrialIntroAtGallery } from './TrialOpening.js';
import { fadeThroughBlack } from './SceneFade.js';
import { warmTrialVisuals } from './VisualWarmup.js';
export function startTrialIntro(ctrl: TrialController, skipFade: boolean): void {
  ctrl.cancelDeduction();
  ctrl.clearActiveTestimony();
  ctrl.resetPressedState();
  restorePendingPresent(ctrl);
  warmTrialVisuals(ctrl.script, ctrl.deps.state.trialDay);
  if (skipFade) {
    enterCourtroom(ctrl);
    queueTrialOpening(ctrl);
    return;
  }
  fadeThroughBlack(ctrl.deps.dom.flashEl,
    /*onCovered=*/ () => enterCourtroom(ctrl), /*onRevealed=*/ () => queueTrialOpening(ctrl));
}

function queueTrialOpening(ctrl: TrialController): void {
  const intro = getActiveTrial(ctrl.script, ctrl.deps.state.trialDay).intro;
  const introParts = splitTrialIntroAtGallery(ctrl.script, ctrl.deps.state.trialDay);
  const afterIntro = /*onComplete*/ () => afterTrialIntro(ctrl);
    if (!introParts) {
      ctrl.deps.onQueueDialogue(intro, afterIntro, { kind: 'intro' });
      return;
    }
    ctrl.deps.onQueueDialogue(introParts.waitingRoom, /*onLobbyComplete*/ () => {
      fadeAcrossGallery(ctrl.deps.dom, /*onGalleryComplete*/ () => {
        ctrl.deps.onQueueDialogue(introParts.courtroom, afterIntro, { kind: 'intro' });
      }, { script: ctrl.script, trialDay: ctrl.deps.state.trialDay });
    }, { kind: 'courtroom' });
}

function enterCourtroom(ctrl: TrialController): void | Promise<void> {
  ctrl.phase = 'TESTIMONY';
  return paintCourtroomPlate(ctrl.deps, ctrl.script);
}
