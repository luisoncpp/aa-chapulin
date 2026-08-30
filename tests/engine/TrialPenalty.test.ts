// @Architecture(descriptionShort="Unit tests for penalty SFX and bilingual objection lines", type="test", icon="bolt")
import { describe, expect, it, beforeEach, vi } from 'vitest';
import { SoundEngine } from '../../src/audio/index.js';
import { applyPenaltyEffects, queuePenaltyDialogue } from '../../src/engine/Private/TrialPenalty.js';
import { i18n } from '../../src/i18n/index.js';
import { GameStateManager } from '../../src/state/index.js';
import type { DialogueLine } from '../../src/types/index.js';
import { FakeAudioContext } from '../fakes/FakeAudioContext.js';
import { setupDomHarness } from '../fakes/DomHarness.js';

describe('TrialPenalty', () => {
  let state: GameStateManager;
  let queued: DialogueLine[][];

  beforeEach(() => {
    vi.useFakeTimers();
    state = new GameStateManager();
    queued = [];
    i18n.setLanguage('es');
  });

  function host() {
    const soundEngine = new SoundEngine();
    soundEngine.init(new FakeAudioContext() as unknown as AudioContext);
    return {
      dom: setupDomHarness(),
      state,
      soundEngine,
      onQueueDialogue: (dialogue: DialogueLine[], onComplete?: () => void) => {
        queued.push(dialogue);
        if (onComplete) onComplete();
      }
    };
  }

  it('applies damage UI, shake, and flash when a penalty lands', () => {
    const deps = host();
    applyPenaltyEffects(deps);
    expect(state.health).toBe(4);
    expect(deps.dom.gameScreen.classList.contains('screen-shake')).toBe(true);
  });

  it('queues Spanish protesto lines, then English objection when language is en', () => {
    queuePenaltyDialogue(host(), /*onResume*/ () => {});
    expect(queued[0][0].text).toBe('¡PROTESTO!');

    i18n.setLanguage('en');
    queuePenaltyDialogue(host(), /*onResume*/ () => {});
    expect(queued[1][0].text).toBe('OBJECTION!');
    expect(queued[1]).toHaveLength(3);
  });

  it('appends game-over judge and defense lines when health is exhausted', () => {
    state.health = 1;
    state.takePenalty();
    queuePenaltyDialogue(host(), /*onResume*/ () => {});
    expect(queued[0].some((line) => line.text === i18n.t.gameOverJudgeText)).toBe(true);
    expect(queued[0].some((line) => line.text === i18n.t.gameOverDefenseText)).toBe(true);
  });
});
