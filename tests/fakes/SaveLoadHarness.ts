import { expect, vi } from 'vitest';
import { MidiMusicComposer, SoundEngine } from '../../src/audio/index.js';
import { getCaseScript } from '../../src/case/index.js';
import { GameEngine } from '../../src/engine/index.js';
import { TrialController } from '../../src/engine/Private/TrialController.js';
import { GameStateManager } from '../../src/state/index.js';
import { FakeAudioContext } from './FakeAudioContext.js';
import { setupDomHarness } from './DomHarness.js';

export function makeSession(storage: Storage) {
  const dom = setupDomHarness();
  const state = new GameStateManager();
  const sound = new SoundEngine();
  sound.init(new FakeAudioContext() as unknown as AudioContext);
  const engine = new GameEngine({ dom, state, storage, resolveScript: getCaseScript,
    soundEngine: sound, midiComposer: new MidiMusicComposer(sound) });
  engine.init();
  const trial = Reflect.get(engine, 'trial') as TrialController;
  return { dom, state, engine, trial };
}

export function advanceUntil(session: ReturnType<typeof makeSession>, predicate: () => boolean): void {
  for (let n = 0; n < 500 && !predicate(); n++) {
    session.engine.handleAdvance();
    vi.advanceTimersByTime(3000);
  }
  expect(predicate()).toBe(true);
}
