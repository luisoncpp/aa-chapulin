// @Architecture(descriptionShort="Unit tests for crime scene exploration and hotspot controller", type="test", icon="panel")
import { describe, expect, it, beforeEach, vi } from 'vitest';
import { MidiMusicComposer, SoundEngine } from '../../src/audio/index.js';
import { CASE_SCRIPT, getCaseScript } from '../../src/case/index.js';
import type { DomElements } from '../../src/engine/Private/DomElements.js';
import { InvestigationController } from '../../src/engine/Private/InvestigationController.js';
import { ModalManager } from '../../src/engine/Private/ModalManager.js';
import { GameStateManager } from '../../src/state/index.js';
import { FakeAudioContext } from '../fakes/FakeAudioContext.js';
import { setupDomHarness } from '../fakes/DomHarness.js';

describe('InvestigationController', () => {
  let dom: DomElements;
  let state: GameStateManager;
  let soundEngineInstance: SoundEngine;
  let midiComposerInstance: MidiMusicComposer;
  let controller: InvestigationController;
  let queuedDialogues: any[] = [];

  beforeEach(() => {
    vi.useFakeTimers();
    dom = setupDomHarness();
    state = new GameStateManager();
    const fakeCtx = new FakeAudioContext();
    soundEngineInstance = new SoundEngine();
    soundEngineInstance.init(fakeCtx as unknown as AudioContext);
    midiComposerInstance = new MidiMusicComposer(soundEngineInstance);
    queuedDialogues = [];

    controller = new InvestigationController({
      dom,
      state,
      script: CASE_SCRIPT,
      soundEngine: soundEngineInstance,
      midiComposer: midiComposerInstance,
      onQueueDialogue: (dlg, cb) => {
        queuedDialogues.push(dlg);
        if (cb) cb();
      }
    });
  });

  it('starts investigation at museum with intro dialogue and background', () => {
    controller.startInvestigation('museum');
    expect(state.mode).toBe('INVESTIGATION');
    expect(state.currentLocation).toBe('museum');
    expect(dom.locationBannerEl.textContent).toContain('Museo');
    expect(dom.bgEl.style.backgroundImage).toContain('assets/bg_museum.webp');
    expect(dom.courtFurnitureContainerEl.classList.contains('hidden')).toBe(true);
    expect(midiComposerInstance.currentTrack).toBe('investigation');
    expect(queuedDialogues).toHaveLength(1);
  });

  it('does not replay opening dialogue when re-visiting an already visited location', () => {
    controller.startInvestigation('museum');
    expect(queuedDialogues).toHaveLength(1);

    state.unlockLocation('detention');
    controller.startInvestigation('detention');
    expect(queuedDialogues).toHaveLength(2);

    // Re-visit museum: opening dialogue should NOT be queued again
    controller.startInvestigation('museum');
    expect(queuedDialogues).toHaveLength(2);
    expect(state.currentLocation).toBe('museum');
    expect(dom.bgEl.style.backgroundImage).toContain('assets/bg_museum.webp');
    expect(dom.charSpriteEl.src).toContain('assets/florinda_idle.webp');
  });

  it('plays new conditional intro when an event flag is triggered on a re-visit', () => {
    const scriptWithConditionalIntro = {
      ...CASE_SCRIPT,
      investigation: {
        ...CASE_SCRIPT.investigation,
        detention: {
          ...CASE_SCRIPT.investigation.detention,
          intro: [
            {
              id: 'detention_initial',
              dialogue: [{ speaker: 'CHAPULIN', text: 'Initial dialogue' }]
            },
            {
              id: 'detention_after_event',
              condition: (flags: any) => Boolean(flags.found_clue),
              dialogue: [{ speaker: 'CHAPULIN', text: 'Event dialogue after finding clue!' }]
            }
          ]
        }
      }
    };
    controller.setScript(scriptWithConditionalIntro as any);

    controller.startInvestigation('detention');
    expect(queuedDialogues).toHaveLength(1);
    expect(queuedDialogues[0][0].text).toBe('Initial dialogue');

    // Move to museum, then return to detention without flag: no new dialogue
    controller.startInvestigation('museum');
    controller.startInvestigation('detention');
    expect(queuedDialogues).toHaveLength(2); // 1 detention initial + 1 museum

    // Now trigger event flag and return to detention: event dialogue should play once
    state.flags.found_clue = true;
    controller.startInvestigation('detention');
    expect(queuedDialogues).toHaveLength(3);
    expect(queuedDialogues[2][0].text).toBe('Event dialogue after finding clue!');

    // Re-visiting detention again: event dialogue should not repeat
    controller.startInvestigation('detention');
    expect(queuedDialogues).toHaveLength(3);
  });

  it('toggles examine mode and restores character pose on exit', () => {
    controller.startInvestigation('museum');
    controller.currentLocationCharPose = 'florinda_idle';
    controller.startExamineMode();

    expect(controller.isExamineActive).toBe(true);
    expect(dom.hotspotsContainerEl.classList.contains('visible-hotspots')).toBe(true);
    expect(dom.dialogueBoxEl.classList.contains('examine-mode')).toBe(true);
    expect(dom.gameScreen.classList.contains('examine-mode')).toBe(true);
    expect(dom.examineNavEl.classList.contains('hidden')).toBe(false);
    expect(dom.charSpriteEl.classList.contains('hidden')).toBe(true);

    controller.exitExamineMode();
    expect(controller.isExamineActive).toBe(false);
    expect(dom.hotspotsContainerEl.classList.contains('visible-hotspots')).toBe(false);
    expect(dom.dialogueBoxEl.classList.contains('examine-mode')).toBe(false);
    expect(dom.gameScreen.classList.contains('examine-mode')).toBe(false);
    expect(dom.examineNavEl.classList.contains('hidden')).toBe(true);
    expect(dom.charSpriteEl.src).toContain('assets/florinda_idle.webp');
  });

  it('handles hotspot hovering and clicking to queue dialogue', () => {
    controller.startInvestigation('museum');
    const hotspotArea = dom.hotspotsContainerEl.children[0] as HTMLElement;
    expect(hotspotArea).toBeDefined();

    // Mouse enter when examine is NOT active does not show tooltip
    hotspotArea.dispatchEvent(new Event('mouseenter'));
    expect(dom.examineTooltipEl.classList.contains('hidden')).toBe(true);

    // Enter examine mode
    controller.startExamineMode();

    // Mouse enter shows tooltip
    hotspotArea.dispatchEvent(new Event('mouseenter'));
    expect(dom.examineTooltipEl.classList.contains('hidden')).toBe(false);

    // Mouse leave hides tooltip
    hotspotArea.dispatchEvent(new Event('mouseleave'));
    expect(dom.examineTooltipEl.classList.contains('hidden')).toBe(true);

    // Click triggers hotspot interaction, plays quiet click sound (not realization chime), and exits examine mode
    const clickSpy = vi.spyOn(soundEngineInstance, 'playClick');
    const realizationSpy = vi.spyOn(soundEngineInstance, 'playRealization');
    hotspotArea.click();
    expect(clickSpy).toHaveBeenCalledTimes(1);
    expect(realizationSpy).not.toHaveBeenCalled();
    expect(controller.isExamineActive).toBe(false);
    expect(queuedDialogues.length).toBeGreaterThan(1);
  });

  it('hides navigation and prevents talking or examining during first-time hotspot dialogue until completed', () => {
    let completeCallback: (() => void) | undefined;
    const manualController = new InvestigationController({
      dom,
      state,
      script: CASE_SCRIPT,
      soundEngine: soundEngineInstance,
      midiComposer: midiComposerInstance,
      onQueueDialogue: (_dlg, cb) => {
        completeCallback = cb;
      }
    });

    manualController.startInvestigation('museum');
    expect(state.isHotspotExamined('pedestal')).toBe(false);

    // Enter examine and click first hotspot (pedestal)
    manualController.startExamineMode();
    const hotspotArea = dom.hotspotsContainerEl.children[0] as HTMLElement;
    hotspotArea.click();

    // First-time dialogue is active: investigation nav must be hidden
    expect(dom.investigationNavEl.classList.contains('hidden')).toBe(true);
    expect(manualController.isFirstTimeDialogue).toBe(true);
    expect(state.isHotspotExamined('pedestal')).toBe(false);

    // Attempting to talk, examine, or move during first-time dialogue is blocked
    manualController.openTalkMenu();
    expect(dom.talkOptionsModalEl.classList.contains('hidden')).toBe(true);
    manualController.startExamineMode();
    expect(manualController.isExamineActive).toBe(false);
    manualController.openMoveMenu();
    expect(dom.moveLocationsModalEl.classList.contains('hidden')).toBe(true);

    // Finish dialogue queue
    expect(completeCallback).toBeDefined();
    completeCallback!();

    // Now dialogue is completed: hotspot marked examined and nav restored
    expect(state.isHotspotExamined('pedestal')).toBe(true);
    expect(manualController.isFirstTimeDialogue).toBe(false);
    expect(dom.investigationNavEl.classList.contains('hidden')).toBe(false);
  });

  it('allows choosing to talk or investigate something else during repeated hotspot dialogue', () => {
    state.markHotspotExamined('pedestal');
    expect(state.isHotspotExamined('pedestal')).toBe(true);

    controller.startInvestigation('museum');
    controller.startExamineMode();
    const hotspotArea = dom.hotspotsContainerEl.children[0] as HTMLElement;
    hotspotArea.click();

    // Repeated dialogue: investigation nav remains visible and isFirstTimeDialogue is false
    expect(dom.investigationNavEl.classList.contains('hidden')).toBe(false);
    expect(controller.isFirstTimeDialogue).toBe(false);

    // Player CAN open talk menu
    controller.openTalkMenu();
    expect(dom.talkOptionsModalEl.classList.contains('hidden')).toBe(false);
  });

  it('opens talk menu modal and handles conversation option', () => {
    controller.startInvestigation('museum');
    controller.openTalkMenu();

    expect(dom.talkOptionsModalEl.classList.contains('hidden')).toBe(false);
    const firstOption = dom.talkListEl.children[0] as HTMLButtonElement;
    firstOption.click();

    expect(dom.talkOptionsModalEl.classList.contains('hidden')).toBe(true);
    expect(queuedDialogues.length).toBeGreaterThan(1);
  });

  it('gracefully handles openTalkMenu when scene has no options', () => {
    const emptyController = new InvestigationController({
      dom,
      state,
      script: { investigation: {} as any, trial: {} as any },
      soundEngine: soundEngineInstance,
      midiComposer: midiComposerInstance,
      onQueueDialogue: () => {}
    });
    expect(() => emptyController.openTalkMenu()).not.toThrow();
  });

  it('opens move menu and navigates to unlocked locations', () => {
    controller.startInvestigation('museum');
    expect(state.currentLocation).toBe('museum');
    expect(state.unlockedLocations).toEqual(['museum']);

    // When only museum is unlocked, move modal shows museum as current/disabled
    controller.openMoveMenu();
    expect(dom.moveLocationsModalEl.classList.contains('hidden')).toBe(false);
    expect(dom.moveLocationsListEl.children).toHaveLength(1);
    const museumBtn = dom.moveLocationsListEl.children[0] as HTMLButtonElement;
    expect(museumBtn.textContent).toContain('Museo');
    expect(museumBtn.classList.contains('disabled')).toBe(true);

    // Close modal
    ModalManager.closeMoveModal(dom);
    expect(dom.moveLocationsModalEl.classList.contains('hidden')).toBe(true);

    // Unlock detention
    state.unlockLocation('detention');
    expect(state.unlockedLocations).toEqual(['museum', 'detention']);

    // Open move menu again
    controller.openMoveMenu();
    expect(dom.moveLocationsListEl.children).toHaveLength(2);

    const detentionBtn = dom.moveLocationsListEl.children[1] as HTMLButtonElement;
    expect(detentionBtn.textContent).toContain('Centro de Detención');
    expect(detentionBtn.classList.contains('disabled')).toBe(false);

    // Click detention button -> navigates to detention
    detentionBtn.click();
    expect(dom.moveLocationsModalEl.classList.contains('hidden')).toBe(true);
    expect(state.currentLocation).toBe('detention');
    expect(dom.bgEl.style.backgroundImage).toContain('assets/bg_detention.webp');
  });

  it('unlocks trial button when all clues are discovered', () => {
    const trialBtn = document.getElementById('btn-inv-trial') as HTMLButtonElement;
    expect(trialBtn.classList.contains('disabled')).toBe(true);
    expect(trialBtn.disabled).toBe(true);

    state.addEvidence('chipote_chillon');
    state.addEvidence('pastillas_chiquitolina');
    state.addEvidence('antenitas_vinil');
    state.addEvidence('informe_medico');
    state.addEvidence('foto_crimen');

    controller.checkInvestigationProgress();

    expect(trialBtn.classList.contains('disabled')).toBe(false);
    expect(trialBtn.disabled).toBe(false);
    expect(trialBtn.classList.contains('pulse-glow')).toBe(true);
    expect(dom.gameNotificationEl.textContent).toContain('¡Has reunido todas las pruebas!');
  });

  it('disables the trial button after adjournment and re-enables with day-2 evidence', () => {
    const case2 = getCaseScript('es', 'case2');
    const case2Controller = new InvestigationController({
      dom,
      state,
      script: case2,
      soundEngine: soundEngineInstance,
      midiComposer: midiComposerInstance,
      onQueueDialogue: (dlg, cb) => {
        queuedDialogues.push(dlg);
        if (cb) cb();
      }
    });
    state.beginNewCase(case2);
    case2.requiredEvidence.forEach(/*addDay1*/ (id) => state.addEvidence(id));
    case2Controller.checkInvestigationProgress();
    expect(dom.btnInvTrial.classList.contains('disabled')).toBe(false);
    expect(dom.btnInvTrial.disabled).toBe(false);

    state.beginTrialDay2(case2.adjournment!);
    case2Controller.resetTrialLaunchButton();
    expect(dom.btnInvTrial.classList.contains('disabled')).toBe(true);
    expect(dom.btnInvTrial.disabled).toBe(true);
    expect(dom.btnInvTrial.classList.contains('pulse-glow')).toBe(false);

    case2.adjournment!.requiredEvidence.forEach(/*addDay2*/ (id) => state.addEvidence(id));
    case2Controller.checkInvestigationProgress();
    expect(dom.btnInvTrial.classList.contains('disabled')).toBe(false);
    expect(dom.btnInvTrial.disabled).toBe(false);
    expect(dom.btnInvTrial.classList.contains('pulse-glow')).toBe(true);
  });
});
