// @Architecture(descriptionShort="Tests deduction return and restore across trial origins")
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { getCaseScript } from '../../src/case/index.js';
import { DeductionSession, type DeductionSequence, type DeductionSnapshot } from '../../src/deduction/index.js';
import { TrialController } from '../../src/engine/Private/TrialController.js';
import { GameStateManager } from '../../src/state/index.js';
import type { DialogueLine } from '../../src/types/index.js';
import { setupDomHarness } from '../fakes/DomHarness.js';

const live = vi.hoisted(() => ({ complete: () => {}, sequence: undefined as DeductionSequence | undefined }));
vi.mock('../../src/engine/Private/TrialDeduction.js', () => ({ TrialDeduction: class {
  private session: DeductionSession;
  constructor(_deps: unknown, sequence: DeductionSequence, complete: () => void, snapshot?: DeductionSnapshot) {
    this.session = new DeductionSession(sequence, snapshot);
    live.complete = complete; live.sequence = sequence;
  }
  snapshot() { return this.session.snapshot(); }
  dispose() {} setLanguage() {} advance() { return true; }
} }));

describe('trial deduction routing', () => {
  let controller: TrialController;
  let state: GameStateManager;
  let queued: DialogueLine[][];
  let callbacks: Array<(() => void) | undefined>;

  function setup(caseId: 'case3' | 'case5') {
    state = new GameStateManager();
    state.caseId = caseId; state.trialDay = caseId === 'case5' ? 4 : 3;
    queued = []; callbacks = [];
    controller = new TrialController({
      dom: setupDomHarness(), state, script: getCaseScript('es', caseId),
      soundEngine: { playSFX: vi.fn() } as never,
      midiComposer: { playTrack: vi.fn() } as never,
      onQueueDialogue: (dialogue, done) => { queued.push(dialogue); callbacks.push(done); },
      onRenderLine: vi.fn(), onOpenCourtRecord: vi.fn()
    });
  }

  beforeEach(() => { vi.clearAllMocks(); setup('case5'); });

  it('enters from the final contradiction and requests the voucher before opening the accusation', () => {
    controller.startTestimony(0); controller.currentStatementIdx = 1;
    controller.handlePresentEvidence('libro_peritos');
    expect(live.sequence).toBeUndefined();
    callbacks.shift()!();
    expect(controller.getTrialSnapshot().deduction).toBeDefined();
    expect(controller.isAwaitingEvidence()).toBe(false);
    live.complete();
    expect(queued.at(-1)?.some(line => line.speaker === 'GENOVEVA')).toBe(true);
    expect(controller.deps.onOpenCourtRecord).not.toHaveBeenCalled();
    callbacks.shift()!();
    expect(queued.at(-1)).toBe(controller.script.trial.climax.dialogue);
    callbacks.shift()!();
    expect(controller.isAwaitingProfile()).toBe(true);
    expect(state.health).toBe(state.maxHealth);
  });

  it('restores a deduction save and returns to the accusation instead of the verdict', () => {
    controller.startDeduction();
    const save = controller.getTrialSnapshot();
    controller.cancelDeduction(); setup('case5');
    controller.restoreTrialSnapshot(save);
    expect(controller.getTrialSnapshot().deduction).toEqual(save.deduction);
    live.complete(); callbacks.shift()!();
    expect(queued.at(-1)).toBe(controller.script.trial.climax.dialogue);
    expect(queued.flat().some(line => line.confetti)).toBe(false);
  });

  it('preserves the climax deduction return to the existing verdict in Case 3', () => {
    setup('case3'); controller.startDeduction(); live.complete();
    expect(queued.at(-1)).toBe(controller.script.trial.climax.deductionOpening);
    callbacks.shift()!();
    expect(queued.at(-1)).toBe(controller.script.trial.climax.verdict);
  });

  it('rejects a deduction snapshot from another case', () => {
    setup('case3'); controller.startDeduction();
    const snapshot = controller.getTrialSnapshot().deduction!;
    setup('case5'); expect(controller.restoreDeduction(snapshot)).toBe(false);
  });
});
