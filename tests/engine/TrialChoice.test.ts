// @Architecture(descriptionShort="Tests climax choice resolution and penalties", type="test", icon="dialog")
import { describe, expect, it, beforeEach, vi } from 'vitest';
import { getCaseScript } from '../../src/case/index.js';
import type { DomElements } from '../../src/engine/Private/DomElements.js';
import { resolveClimaxChoice } from '../../src/engine/Private/TrialChoice.js';
import { GameStateManager } from '../../src/state/index.js';
import type { DialogueLine } from '../../src/types/index.js';
import { setupDomHarness } from '../fakes/DomHarness.js';

describe('TrialChoice', () => {
  let dom: DomElements;
  let state: GameStateManager;
  let queued: DialogueLine[][];
  let pending: Array<(() => void) | undefined>;

  beforeEach(() => {
    vi.useFakeTimers();
    dom = setupDomHarness();
    state = new GameStateManager();
    queued = [];
    pending = [];
  });

  function makeCtx(climax = getCaseScript('es', 'case2').trial.climax) {
    return {
      dom,
      state,
      climax,
      stageIdx: 2,
      choiceIdx: 0,
      soundEngine: { playDamage: vi.fn() } as never,
      onQueueDialogue: (dialogue: DialogueLine[], onComplete?: () => void) => {
        queued.push(dialogue);
        pending.push(onComplete);
      },
      onOpenCourtRecord: vi.fn(),
      midiComposer: { playTrack: vi.fn() } as never,
      onSelect: vi.fn(),
      setStageIdx: vi.fn(),
      setChoiceIdx: vi.fn(),
      enterClimaxPhase: vi.fn()
    };
  }

  it('keeps the same choice index and drops health on a wrong answer', () => {
    const ctx = makeCtx();
    const onSelect = vi.fn();
    const idx = resolveClimaxChoice(
      { climax: ctx.climax, choiceIdx: 0, optionId: 'clothing' },
      ctx,
      onSelect
    );
    expect(idx).toBe(0);
    expect(state.health).toBe(4);
    expect(queued).toHaveLength(1);
    pending[0]!();
    expect(dom.choicePromptModalEl.classList.contains('hidden')).toBe(false);
  });

  it('triggers confetti after the last correct choice', () => {
    const ctx = makeCtx();
    const idx = resolveClimaxChoice(
      { climax: ctx.climax, choiceIdx: 1, optionId: 'security_chief' },
      ctx,
      vi.fn()
    );
    expect(idx).toBeNull();
    expect(queued).toHaveLength(1);
    expect(queued[0].some((l) => l.text.includes('INOCENTE'))).toBe(true);
    pending[0]!();
    expect(dom.confettiContainerEl.children.length).toBe(80);
  });
});
