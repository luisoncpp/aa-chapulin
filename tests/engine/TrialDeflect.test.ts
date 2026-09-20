// @Architecture(descriptionShort="Regression tests for premature-present deflections", type="test", icon="panel")
/**
 * A plausible but premature present is the player reasoning correctly, not failing.
 * Case 5 day-3 Testimony 6 deflects two of them; everything else still penalizes.
 */
import { describe, expect, it, beforeEach, vi } from 'vitest';
import { MidiMusicComposer, SoundEngine } from '../../src/audio/index.js';
import { getCaseScript } from '../../src/case/index.js';
import type { DomElements } from '../../src/engine/Private/DomElements.js';
import { TrialController } from '../../src/engine/Private/TrialController.js';
import { GameStateManager } from '../../src/state/index.js';
import type { DialogueLine } from '../../src/types/index.js';
import { FakeAudioContext } from '../fakes/FakeAudioContext.js';
import { setupDomHarness } from '../fakes/DomHarness.js';

const HUACAL_DEFLECT = 'esa fotografía prueba el día';
const MAQUINA_DEFLECT = 'esa máquina se levantó ayer';

describe('Premature present deflection (Case 5, day 3, Testimony 6)', () => {
  let dom: DomElements;
  let state: GameStateManager;
  let controller: TrialController;
  let queuedDialogues: DialogueLine[][] = [];

  /** Statement index inside the testimony: 1 = «los jueves», 2 = «libros viejos». */
  function viewStatement(idx: number): void {
    controller.startTestimony(0);
    controller.currentStatementIdx = idx;
  }

  function queuedText(): string {
    return queuedDialogues.flat().map((line) => line.text).join(' | ');
  }

  beforeEach(() => {
    vi.useFakeTimers();
    dom = setupDomHarness();
    state = new GameStateManager();
    state.caseId = 'case5';
    state.trialDay = 3;
    queuedDialogues = [];
    const soundEngine = new SoundEngine();
    soundEngine.init(new FakeAudioContext() as unknown as AudioContext);
    controller = new TrialController({
      dom,
      state,
      script: getCaseScript('es', 'case5'),
      soundEngine,
      midiComposer: new MidiMusicComposer(soundEngine),
      onQueueDialogue: (dlg, cb) => {
        queuedDialogues.push(dlg);
        if (cb) cb();
      },
      onRenderLine: () => {},
      onOpenCourtRecord: () => {}
    });
  });

  it('answers the crate photograph on the Thursdays statement without a penalty', () => {
    viewStatement(1);

    controller.handlePresentEvidence('huacal_9');

    expect(state.health).toBe(5);
    expect(queuedText()).toContain(HUACAL_DEFLECT);
  });

  it('answers the typewriter on the contents statement without a penalty', () => {
    viewStatement(2);

    controller.handlePresentEvidence('maquina_escribir');

    expect(state.health).toBe(5);
    expect(queuedText()).toContain(MAQUINA_DEFLECT);
  });

  it('leaves the deflected statement in place so the player can present again', () => {
    viewStatement(1);

    controller.handlePresentEvidence('huacal_9');

    expect(controller.phase).toBe('TESTIMONY');
    expect(controller.currentStatementIdx).toBe(1);
    expect(controller.getTestimonyIndex()).toBe(0);
  });

  it('still resolves the contradiction with the inventory', () => {
    viewStatement(2);

    controller.handlePresentEvidence('inventario_1971');

    expect(state.health).toBe(5);
    expect(queuedText()).toContain('cuarenta y siete partidas');
  });

  it('still penalizes evidence the statement does not deflect', () => {
    viewStatement(1);

    controller.handlePresentEvidence('inventario_1971');

    expect(state.health).toBe(4);
    expect(queuedText()).not.toContain(HUACAL_DEFLECT);
  });
});
