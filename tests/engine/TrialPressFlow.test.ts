// @Architecture(descriptionShort="Regression tests for scripted cross-exam press hints", type="test", icon="bolt")
import { describe, expect, it, beforeEach, vi } from 'vitest';
import { MidiMusicComposer, SoundEngine } from '../../src/audio/index.js';
import { onPresentPenalty } from '../../src/engine/Private/TrialOutcome.js';
import { maybeQueuePressHint } from '../../src/engine/Private/TrialPressFlow.js';
import { TrialController } from '../../src/engine/Private/TrialController.js';
import { i18n } from '../../src/i18n/index.js';
import { GameStateManager } from '../../src/state/index.js';
import type { CaseScript, DialogueLine, Testimony } from '../../src/types/index.js';
import { FakeAudioContext } from '../fakes/FakeAudioContext.js';
import { setupDomHarness } from '../fakes/DomHarness.js';

const CLIENT_PRESS_HINT: DialogueLine[] = [{
  speaker: 'DON RAMÓN',
  text: '¡Chapulín! ¡A ese testigo hay que exprimirlo, no nomás oírlo!',
  pose: 'donramon_point'
}];

describe('maybeQueuePressHint', () => {
  let queued: DialogueLine[][];
  const queue = (lines: DialogueLine[]) => { queued.push(lines); };

  beforeEach(() => {
    queued = [];
    i18n.setLanguage('es');
  });

  it('queues Chapulín with i18n.t.pressHint when script.pressHint is omitted', () => {
    const fired = maybeQueuePressHint(
      { testimony: hiddenTestimony(), failedPresentCount: 2 },
      /*onQueueDialogue=*/ queue,
      /*onResume=*/ () => {}
    );
    expect(fired).toBe(true);
    expect(queued[0]).toEqual([
      { speaker: 'CHAPULIN', text: i18n.t.pressHint, pose: 'chapulin_point' }
    ]);
  });

  it('queues script.pressHint from the client, not Chapulín scolding Don Ramón', () => {
    const fired = maybeQueuePressHint(
      {
        testimony: hiddenTestimony(),
        failedPresentCount: 2,
        script: scriptWithPressHint(CLIENT_PRESS_HINT)
      },
      /*onQueueDialogue=*/ queue,
      /*onResume=*/ () => {}
    );
    expect(fired).toBe(true);
    expect(queued[0]).toEqual(CLIENT_PRESS_HINT);
    expect(queued[0][0].speaker).toBe('DON RAMÓN');
    expect(queued[0][0].text.startsWith('¡Don Ramón!')).toBe(false);
  });

  it('does not fire until two failed presents on a testimony with hidden lines', () => {
    expect(maybeQueuePressHint(
      { testimony: hiddenTestimony(), failedPresentCount: 1 },
      /*onQueueDialogue=*/ queue,
      /*onResume=*/ () => {}
    )).toBe(false);
    expect(maybeQueuePressHint(
      { testimony: openTestimony(), failedPresentCount: 2 },
      /*onQueueDialogue=*/ queue,
      /*onResume=*/ () => {}
    )).toBe(false);
    expect(queued).toEqual([]);
  });
});

describe('onPresentPenalty press hint', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    i18n.setLanguage('es');
  });

  it('queues the scripted hint instead of Super Sam after two wrong presents', () => {
    const queued: DialogueLine[][] = [];
    const ctrl = makeController(scriptWithPressHint(CLIENT_PRESS_HINT), queued);
    ctrl.currentTestimony = hiddenTestimony();
    onPresentPenalty(ctrl);
    expect(queued[0].some((line) => line.speaker === 'SUPER SAM')).toBe(true);
    onPresentPenalty(ctrl);
    expect(queued[1]).toEqual(CLIENT_PRESS_HINT);
    expect(queued[1].some((line) => line.speaker === 'SUPER SAM')).toBe(false);
  });
});

function hiddenTestimony(): Testimony {
  return {
    title: 'T',
    witness: 'WITNESS',
    bgm: 'cross_exam_moderato',
    statements: [
      { id: 'a', speaker: 'WITNESS', text: 'Seen' },
      { id: 'b', speaker: 'WITNESS', text: 'Hidden', unlockedBy: 'a' }
    ]
  };
}

function openTestimony(): Testimony {
  return {
    title: 'Open',
    witness: 'WITNESS',
    bgm: 'cross_exam_moderato',
    statements: [{ id: 'x', speaker: 'WITNESS', text: 'Only' }]
  };
}

function emptyScript(): CaseScript {
  return {
    id: 'case1',
    startLocation: 'detention',
    requiredEvidence: [],
    debugEvidence: [],
    debugUnlockLocations: [],
    investigation: {},
    trial: {
      intro: [],
      testimonies: [],
      climax: { dialogue: [], presentTarget: [], verdict: [] }
    }
  };
}

function scriptWithPressHint(pressHint: DialogueLine[]): CaseScript {
  return { ...emptyScript(), pressHint };
}

function makeController(script: CaseScript, queued: DialogueLine[][]): TrialController {
  const soundEngine = new SoundEngine();
  soundEngine.init(new FakeAudioContext() as unknown as AudioContext);
  return new TrialController({
    dom: setupDomHarness(),
    state: new GameStateManager(),
    script,
    soundEngine,
    midiComposer: new MidiMusicComposer(soundEngine),
    onQueueDialogue: (dialogue) => { queued.push(dialogue); },
    onRenderLine: () => {},
    onOpenCourtRecord: () => {}
  });
}
