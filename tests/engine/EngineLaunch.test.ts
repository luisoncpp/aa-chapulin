// @Architecture(descriptionShort="Unit tests for splash dismissal and case launch helpers", type="test", icon="bolt")
import { describe, expect, it, beforeEach, vi } from 'vitest';
import { MidiMusicComposer, SoundEngine } from '../../src/audio/index.js';
import { CASE_SCRIPT } from '../../src/case/index.js';
import type { DomElements } from '../../src/engine/Private/DomElements.js';
import {
  dismissSplash,
  loadCase,
  startGame,
  startTrialDebug,
  type LaunchHost
} from '../../src/engine/Private/EngineLaunch.js';
import { GameStateManager } from '../../src/state/index.js';
import { FakeAudioContext } from '../fakes/FakeAudioContext.js';
import { setupDomHarness } from '../fakes/DomHarness.js';

describe('EngineLaunch', () => {
  let host: LaunchHost;
  let startInvestigation: ReturnType<typeof vi.fn>;
  let startTrial: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    vi.useFakeTimers();
    const dom = setupDomHarness();
    const state = new GameStateManager();
    const soundEngine = new SoundEngine();
    soundEngine.init(new FakeAudioContext() as unknown as AudioContext);
    startInvestigation = vi.fn();
    startTrial = vi.fn();
    let script = CASE_SCRIPT;
    host = {
      dom,
      state,
      soundEngine,
      investigation: { setScript: vi.fn(), startInvestigation } as never,
      trial: { setScript: vi.fn(), startTrial } as never,
      hasStarted: false,
      getScript: () => script,
      setScript: (next) => { script = next; },
      markStarted: () => { host.hasStarted = true; }
    };
  });

  it('loads a case script onto investigation, trial, and progression state', () => {
    loadCase(host, 'case2');
    expect(host.state.caseId).toBe('case2');
    expect(host.getScript().startLocation).toBe('detention');
  });

  it('hides the splash overlay after the fade delay', () => {
    dismissSplash(host.dom, host.soundEngine);
    expect(host.dom.startSplashOverlayEl.style.opacity).toBe('0');
    vi.advanceTimersByTime(400);
    expect(host.dom.startSplashOverlayEl.classList.contains('hidden')).toBe(true);
  });

  it('starts investigation once and ignores a second startGame call', () => {
    startGame(host, 'case1');
    expect(startInvestigation).toHaveBeenCalledTimes(1);
    startGame(host, 'case1');
    expect(startInvestigation).toHaveBeenCalledTimes(1);
  });

  it('starts trial debug once and ignores a second call after launch', () => {
    startTrialDebug(host);
    expect(startTrial).toHaveBeenCalledTimes(1);
    expect(host.state.hasEvidence('chipote_chillon')).toBe(true);
    startTrialDebug(host);
    expect(startTrial).toHaveBeenCalledTimes(1);
  });
});
