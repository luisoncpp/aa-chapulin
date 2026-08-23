// @Architecture(descriptionShort="Unit tests for typewriter dialogue animation subsystem", type="test", icon="gear")
import { describe, expect, it, beforeEach, vi } from 'vitest';
import { SoundEngine } from '../../src/audio/index.js';
import { Typewriter } from '../../src/engine/Private/Typewriter.js';
import { FakeAudioContext } from '../fakes/FakeAudioContext.js';

describe('Typewriter Subsystem', () => {
  let targetEl: HTMLElement;
  let soundEngineInstance: SoundEngine;
  let typewriter: Typewriter;

  beforeEach(() => {
    vi.useFakeTimers();
    targetEl = document.createElement('div');
    soundEngineInstance = new SoundEngine();
    soundEngineInstance.init(new FakeAudioContext() as unknown as AudioContext);
    typewriter = new Typewriter(targetEl, soundEngineInstance);
  });

  it('types text character by character over time', () => {
    let completed = false;
    typewriter.start('¡PROTESTO!', () => {
      completed = true;
    });

    expect(typewriter.isTyping).toBe(true);
    expect(targetEl.textContent).toBe('');

    vi.advanceTimersByTime(28 * 4);
    expect(targetEl.textContent?.length).toBe(4);
    expect(completed).toBe(false);

    vi.advanceTimersByTime(28 * 10);
    expect(targetEl.textContent).toBe('¡PROTESTO!');
    expect(typewriter.isTyping).toBe(false);
    expect(completed).toBe(true);
  });

  it('skips animation immediately when completeImmediately is called', () => {
    let completed = false;
    typewriter.start('¡No contaban con mi astucia!', () => {
      completed = true;
    });

    vi.advanceTimersByTime(50);
    typewriter.completeImmediately();

    expect(targetEl.textContent).toBe('¡No contaban con mi astucia!');
    expect(typewriter.isTyping).toBe(false);
    expect(completed).toBe(true);

    // Multiple calls to completeImmediately when not typing do nothing
    expect(() => typewriter.completeImmediately()).not.toThrow();
  });

  it('stops cleanly when stop is called', () => {
    let completed = false;
    typewriter.start('Texto de prueba', () => {
      completed = true;
    });

    vi.advanceTimersByTime(56);
    typewriter.stop();

    expect(typewriter.isTyping).toBe(false);
    expect(completed).toBe(false);

    vi.advanceTimersByTime(200);
    expect(completed).toBe(false);
  });
});
