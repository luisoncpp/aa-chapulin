// @Architecture(descriptionShort="Tests openingPresent after trial intro before testimony 1", type="test", icon="dialog")
import { describe, expect, it, beforeEach, vi } from 'vitest';
import { MidiMusicComposer, SoundEngine } from '../../src/audio/index.js';
import { CASE_SCRIPT } from '../../src/case/index.js';
import type { DomElements } from '../../src/engine/Private/DomElements.js';
import { SCENE_FADE_MS } from '../../src/engine/Private/SceneFade.js';
import { TrialController } from '../../src/engine/Private/TrialController.js';
import { GameStateManager } from '../../src/state/index.js';
import type { CaseScript, DialogueLine } from '../../src/types/index.js';
import { FakeAudioContext } from '../fakes/FakeAudioContext.js';
import { setupDomHarness } from '../fakes/DomHarness.js';

describe('OpeningPresent', () => {
  let controller: TrialController;
  let pending: Array<(() => void) | undefined>;
  let queued: DialogueLine[][];
  let courtRecordOpened = false;
  let state: GameStateManager;
  let rendered: DialogueLine[];

  beforeEach(() => {
    vi.useFakeTimers();
    const dom = setupDomHarness();
    state = new GameStateManager();
    pending = [];
    queued = [];
    rendered = [];
    courtRecordOpened = false;
    const sound = new SoundEngine();
    sound.init(new FakeAudioContext() as unknown as AudioContext);
    const script = JSON.parse(JSON.stringify(CASE_SCRIPT)) as CaseScript;
    script.trial.openingPresent = {
      evidence: ['nota_amenaza'],
      prompt: 'Presente la nota de amenaza.',
      successDialogue: [{ speaker: 'DEFENSA', text: '¡Esta nota destruye el Giro 2!' }]
    };
    controller = new TrialController({
      dom,
      state,
      script,
      soundEngine: sound,
      midiComposer: new MidiMusicComposer(sound),
      onQueueDialogue: (dlg, cb) => {
        queued.push(dlg);
        pending.push(cb);
      },
      onRenderLine: (line) => { rendered.push(line); },
      onOpenCourtRecord: (isTrialPresent) => {
        courtRecordOpened = isTrialPresent;
      }
    });
  });

  it('opens the court record after intro and before testimony 1', () => {
    controller.startTrial();
    vi.advanceTimersByTime(SCENE_FADE_MS * 2);
    expect(controller.currentTestimony).toBeNull();
    expect(pending[0]).toBeTruthy();
    pending[0]!();
    expect(courtRecordOpened).toBe(true);
    expect(controller.getPresentPrompt()).toBe('Presente la nota de amenaza.');
    expect(controller.isAwaitingEvidence()).toBe(true);
    expect(rendered).toHaveLength(0);
  });

  it('plays success dialogue then starts testimony 1, and reopens on a wrong present', () => {
    controller.startTrial(/*skipFade=*/ true);
    pending[0]!();
    controller.handlePresentEvidence('insignia_abogado');
    expect(state.health).toBe(4);
    pending[1]!();
    expect(courtRecordOpened).toBe(true);
    courtRecordOpened = false;
    controller.handlePresentEvidence('nota_amenaza');
    expect(queued.some((d) => d.some((l) => l.text.includes('Giro 2')))).toBe(true);
    pending[2]!();
    expect(controller.currentTestimony).toBe(controller.script.trial.testimony1);
    expect(controller.getPresentPrompt()).toBeNull();
  });
});
