// @Architecture(descriptionShort="Acta tab visibility and person present slots", type="test", icon="dialog")
/**
 * Spec §6.1: the tab bar must not exist for the cases that declare no profiles,
 * and a person is only presentable when the court asks for one.
 */
import { describe, expect, it, beforeEach, vi } from 'vitest';
import { MidiMusicComposer, SoundEngine } from '../../src/audio/index.js';
import { getCaseScript } from '../../src/case/index.js';
import type { DomElements } from '../../src/engine/Private/DomElements.js';
import { ModalManager } from '../../src/engine/Private/ModalManager.js';
import { TrialController } from '../../src/engine/Private/TrialController.js';
import { GameStateManager } from '../../src/state/index.js';
import { i18n } from '../../src/i18n/index.js';
import type { DialogueLine } from '../../src/types/index.js';
import { FakeAudioContext } from '../fakes/FakeAudioContext.js';
import { setupDomHarness } from '../fakes/DomHarness.js';

const case1 = getCaseScript('es', 'case1');

function openRecord(dom: DomElements, state: GameStateManager, trial: TrialController): void {
  ModalManager.openCourtRecord({
    dom,
    state,
    isTrialPresent: true,
    isProfilePresent: trial.isAwaitingProfile(),
    onSelect: () => undefined,
    onSelectProfile: () => undefined
  });
}

describe('Acta de Personajes in the Court Record', () => {
  let dom: DomElements;
  let state: GameStateManager;
  let trial: TrialController;

  beforeEach(() => {
    vi.useFakeTimers();
    dom = setupDomHarness();
    state = new GameStateManager();
    const soundEngine = new SoundEngine();
    soundEngine.init(new FakeAudioContext() as unknown as AudioContext);
    state.beginNewCase(case1);
    state.populateTrialEvidence();
    trial = new TrialController({
      dom, state, script: case1, soundEngine,
      midiComposer: new MidiMusicComposer(soundEngine),
      onQueueDialogue: (_dlg, cb) => { if (cb) cb(); },
      onRenderLine: () => undefined,
      onOpenCourtRecord: () => undefined
    });
  });

  it('hides the tab bar for a case that declares no profiles', () => {
    const case2State = new GameStateManager();
    case2State.beginNewCase(getCaseScript('es', 'case2'));
    case2State.populateTrialEvidence();
    ModalManager.openCourtRecord({
      dom, state: case2State, isTrialPresent: true, onSelect: () => undefined
    });
    expect(case2State.profiles.owned).toEqual([]);
    expect(dom.recordTabsEl.classList.contains('hidden')).toBe(true);
    expect(dom.presentProfileBtnEl.style.display).toBe('none');
  });

  it('hides tabs but keeps evidence presentation available during a cross-examination', () => {
    trial.startTestimony(0);
    openRecord(dom, state, trial);
    expect(dom.recordTabsEl.classList.contains('hidden')).toBe(true);
    expect(dom.presentBtnEl.style.display).toBe('block');
    expect(dom.presentProfileBtnEl.style.display).toBe('none');
  });

  it('keeps tabs visible when the Acta is opened for reading', () => {
    ModalManager.openCourtRecord({
      dom, state, isTrialPresent: false, onSelect: () => undefined, onSelectProfile: () => undefined
    });
    expect(dom.recordTabsEl.classList.contains('hidden')).toBe(false);

    expect(dom.presentBtnEl.style.display).toBe('none');
  });

  it('opens straight on the profiles tab when the court asks for a person', () => {
    trial.startClimax();
    expect(trial.isAwaitingProfile()).toBe(true);
    openRecord(dom, state, trial);
    expect(dom.recordTabsEl.classList.contains('hidden')).toBe(true);
    expect(dom.tabProfilesEl.classList.contains('active')).toBe(true);
    expect(dom.presentProfileBtnEl.style.display).toBe('block');
    expect(dom.presentBtnEl.style.display).toBe('none');
  });

  it('charges a point of health for the wrong person and keeps the question open', () => {
    trial.startClimax();
    expect(state.health).toBe(5);

    trial.handlePresentProfile('perfil_florinda');
    expect(state.health).toBe(4);
    expect(trial.climaxStageIdx).toBe(0);
    expect(trial.isAwaitingProfile()).toBe(true);

    trial.handlePresentProfile('perfil_tripaseca');
    expect(state.health).toBe(4);
    expect(trial.climaxStageIdx).toBe(1);
    expect(trial.isAwaitingProfile()).toBe(false);
  });

  it('resolves the day-2 opening present with a person after ?trial=2', () => {
    const dayState = new GameStateManager();
    dayState.beginNewCase(case1);
    dayState.beginNextTrialDay(case1.adjournment!);
    dayState.applyProgressionRules(case1);
    dayState.populateTrialEvidence();
    expect(dayState.hasProfile('perfil_almanegra')).toBe(true);

    const dayTrial = new TrialController({
      dom, state: dayState, script: case1,
      soundEngine: trial.deps.soundEngine, midiComposer: trial.deps.midiComposer,
      onQueueDialogue: (_dlg, cb) => { if (cb) cb(); },
      onRenderLine: () => undefined,
      onOpenCourtRecord: () => undefined
    });
    dayTrial.startTrial(/*skipFade=*/ true);
    vi.advanceTimersByTime(1200);
    expect(dayTrial.isAwaitingProfile()).toBe(true);

    dayTrial.handlePresentProfile('perfil_almanegra');
    expect(dayTrial.currentTestimony?.witness).toBe('Alma Negra');
  });

  it('keeps the formal penalty for repeated wrong opening profiles', () => {
    const dayState = new GameStateManager();
    dayState.beginNewCase(case1);
    dayState.beginNextTrialDay(case1.adjournment!);
    dayState.applyProgressionRules(case1);
    dayState.populateTrialEvidence();
    const queued: DialogueLine[][] = [];
    const dayTrial = new TrialController({
      dom, state: dayState, script: case1,
      soundEngine: trial.deps.soundEngine, midiComposer: trial.deps.midiComposer,
      onQueueDialogue: (dialogue, cb) => {
        queued.push(dialogue);
        cb?.();
      },
      onRenderLine: () => undefined,
      onOpenCourtRecord: () => undefined
    });

    dayTrial.startTrial(/*skipFade=*/ true);
    vi.advanceTimersByTime(1200);
    dayTrial.handlePresentProfile('perfil_tripaseca');
    dayTrial.handlePresentProfile('perfil_tripaseca');

    expect(dayState.health).toBe(3);
    expect(queued.some((dialogue) => dialogue.some((line) => line.text === i18n.t.pressHint)))
      .toBe(false);
    expect(queued.some((dialogue) => dialogue.some((line) => line.speaker === 'SECRETARIO')))
      .toBe(true);
    expect(queued.some((dialogue) => dialogue.some((line) => line.speaker === 'JUEZ')))
      .toBe(true);
  });
});
