// @Architecture(descriptionShort="Case 0 direct courtroom launch checks", type="test", icon="bolt")
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { CASE_SCRIPT_CASE0_ES } from '../../src/case/case0/index.js';
import { startGame, type LaunchHost } from '../../src/engine/Private/EngineLaunch.js';
import { TrialController } from '../../src/engine/Private/TrialController.js';
import { MidiMusicComposer } from '../../src/audio/index.js';
import type { DialogueLine } from '../../src/types/index.js';
import { GameStateManager } from '../../src/state/index.js';
import { SoundEngine } from '../../src/audio/index.js';
import { setupDomHarness } from '../fakes/DomHarness.js';
import { FakeAudioContext } from '../fakes/FakeAudioContext.js';

describe('Case 0 direct courtroom launch', () => {
  let host: LaunchHost;
  let investigationStart: ReturnType<typeof vi.fn>;
  let trialStart: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    vi.useFakeTimers();
    const state = new GameStateManager();
    const soundEngine = new SoundEngine();
    soundEngine.init(new FakeAudioContext() as unknown as AudioContext);
    investigationStart = vi.fn();
    trialStart = vi.fn();
    let script = CASE_SCRIPT_CASE0_ES;
    host = {
      dom: setupDomHarness(), state, soundEngine,
      investigation: { setScript: vi.fn(), startInvestigation: investigationStart } as never,
      trial: { setScript: vi.fn(), startTrial: trialStart } as never,
      hasStarted: false, getScript: () => script,
      setScript: (next) => { script = next; },
      markStarted: () => { host.hasStarted = true; }
    };
  });

  it('starts in trial mode without entering investigation', () => {
    startGame(host, 'case0');
    expect(host.state.mode).toBe('TRIAL');
    expect(host.state.currentLocation).toBe('courtroom');
    expect(investigationStart).not.toHaveBeenCalled();
    expect(trialStart).toHaveBeenCalledTimes(1);
  });

  it.each([1, 2])('asks the player to examine the courtyard photo before presenting bell statement %i', (statementIdx) => {
    const dom = setupDomHarness();
    const state = new GameStateManager();
    state.beginTrialOnlyCase(CASE_SCRIPT_CASE0_ES);
    const soundEngine = new SoundEngine();
    soundEngine.init(new FakeAudioContext() as unknown as AudioContext);
    const queued: DialogueLine[][] = [];
    let resume: (() => void) | undefined;
    let openedRecord = false;
    const controller = new TrialController({
      dom, state, script: CASE_SCRIPT_CASE0_ES, soundEngine,
      midiComposer: new MidiMusicComposer(soundEngine),
      onQueueDialogue: (dialogue, onComplete) => { queued.push(dialogue); resume = onComplete; },
      onRenderLine: () => {},
      onOpenCourtRecord: () => { openedRecord = true; }
    });
    controller.startTestimony(1);
    controller.currentStatementIdx = statementIdx;
    controller.handlePresentEvidence('foto_patio');

    expect(state.health).toBe(5);
    expect(queued.flat().some((line) => line.text.includes('EXAMINAR DETALLE'))).toBe(true);
    expect(openedRecord).toBe(false);
    resume?.();
    expect(openedRecord).toBe(true);
  });

  it('accepts the updated savings tin in the second climax stage', () => {
    const dom = setupDomHarness();
    const state = new GameStateManager();
    state.beginTrialOnlyCase(CASE_SCRIPT_CASE0_ES);
    const soundEngine = new SoundEngine();
    soundEngine.init(new FakeAudioContext() as unknown as AudioContext);
    const queued: DialogueLine[][] = [];
    const controller = new TrialController({
      dom, state, script: CASE_SCRIPT_CASE0_ES, soundEngine,
      midiComposer: new MidiMusicComposer(soundEngine),
      onQueueDialogue: (dialogue) => { queued.push(dialogue); },
      onRenderLine: () => {},
      onOpenCourtRecord: () => {}
    });

    controller.phase = 'CLIMAX';
    controller.climaxStageIdx = 1;
    state.updateEvidence('lata_ahorros');
    controller.handlePresentEvidence('lata_ahorros');

    expect(controller.climaxResolved).toBe(true);
    expect(queued[0]).toEqual(CASE_SCRIPT_CASE0_ES.trial.climax.stages![1].successDialogue);
  });
});
