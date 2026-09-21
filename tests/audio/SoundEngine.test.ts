// @Architecture(descriptionShort="Unit tests for procedural sound engine and audio routing", type="test", icon="bolt")
import { describe, expect, it, beforeEach, vi } from 'vitest';
import { CourtSfx } from '../../src/audio/Private/CourtSfx.js';
import { SoundEngine } from '../../src/audio/index.js';
import type { SFXName } from '../../src/types/index.js';
import { FakeAudioContext, FakeGainNode } from '../fakes/FakeAudioContext.js';

function getDefaultMasterGain(): number {
  const probe = new SoundEngine();
  probe.init(new FakeAudioContext() as unknown as AudioContext);
  return probe.masterGain?.gain.value ?? 0;
}

const DEFAULT_MASTER_GAIN = getDefaultMasterGain();

describe('SoundEngine & Procedural SFX', () => {
  let engine: SoundEngine;
  let fakeCtx: FakeAudioContext;

  beforeEach(() => {
    vi.useFakeTimers();
    fakeCtx = new FakeAudioContext();
    engine = new SoundEngine();
  });

  it('initializes audio context and gain nodes graph', () => {
    expect(engine.initialized).toBe(false);
    expect(engine.ctx).toBeNull();

    engine.init(fakeCtx as unknown as AudioContext);
    expect(engine.initialized).toBe(true);
    expect(engine.ctx).toBe(fakeCtx);
    expect(engine.masterGain).toBeInstanceOf(FakeGainNode);
    expect(engine.sfxGain).toBeInstanceOf(FakeGainNode);
    expect(engine.bgmGain).toBeInstanceOf(FakeGainNode);
    expect(fakeCtx.state).toBe('running');
  });

  it('initializes using global AudioContext when no argument is passed', () => {
    const defaultEngine = new SoundEngine();
    defaultEngine.init();
    expect(defaultEngine.initialized).toBe(true);
    expect(defaultEngine.ctx).toBeDefined();
  });

  it('handles idempotent init and resume calls', () => {
    engine.init(fakeCtx as unknown as AudioContext);
    const initialMaster = engine.masterGain;

    engine.init(fakeCtx as unknown as AudioContext);
    expect(engine.masterGain).toBe(initialMaster);

    fakeCtx.state = 'suspended';
    engine.ensureActive();
    expect(fakeCtx.state).toBe('running');
  });

  it('calls init from ensureActive if not yet initialized', () => {
    const uninit = new SoundEngine();
    expect(uninit.initialized).toBe(false);
    uninit.ensureActive();
    expect(uninit.initialized).toBe(true);
  });

  it('toggles mute and updates master gain value', () => {
    // Before init
    const muteBeforeInit = new SoundEngine();
    expect(muteBeforeInit.toggleMute()).toBe(true);

    engine.init(fakeCtx as unknown as AudioContext);
    expect(engine.isMuted).toBe(false);
    expect(engine.masterGain?.gain.value).toBe(DEFAULT_MASTER_GAIN);

    const isMutedNow = engine.toggleMute();
    expect(isMutedNow).toBe(true);
    expect(engine.isMuted).toBe(true);
    expect(engine.masterGain?.gain.value).toBe(0);

    engine.toggleMute();
    expect(engine.isMuted).toBe(false);
    expect(engine.masterGain?.gain.value).toBe(DEFAULT_MASTER_GAIN);
  });

  it('synthesizes all courtroom and novelty sound effects', () => {
    engine.init(fakeCtx as unknown as AudioContext);
    const sfxList: SFXName[] = [
      'gavel', 'desk_slam', 'whoosh', 'realization',
      'damage', 'chipote', 'chicharra', 'click', 'text'
    ];

    sfxList.forEach((sfx) => {
      expect(() => engine.playSFX(sfx)).not.toThrow();
    });

    vi.advanceTimersByTime(200);
  });

  it('routes playSFX through direct synthesis methods including onClimaxHit timing', () => {
    engine.init(fakeCtx as unknown as AudioContext);
    expect(() => engine.playTextBlip()).not.toThrow();
    expect(() => engine.playClick()).not.toThrow();
    expect(() => engine.playGavel()).not.toThrow();
    expect(() => engine.playDeskSlam()).not.toThrow();
    expect(() => engine.playObjectionWhoosh()).not.toThrow();
    expect(() => engine.playRealization()).not.toThrow();
    expect(() => engine.playDamage()).not.toThrow();
    expect(() => engine.playChipoteSqueak()).not.toThrow();
    expect(() => engine.playChicharra()).not.toThrow();
    expect(() => engine.playSFX('gavel')).not.toThrow();
    expect(() => engine.playSFX('desk_slam')).not.toThrow();
    expect(() => engine.playSFX('damage')).not.toThrow();
    expect(() => engine.playSFX('whoosh')).not.toThrow();

    let chordHit = false;
    const dest = fakeCtx.createGain();
    CourtSfx.playObjectionWhoosh(
      fakeCtx as unknown as AudioContext,
      dest as unknown as GainNode,
      /*onClimaxHit*/ () => { chordHit = true; }
    );
    expect(chordHit).toBe(false);
    vi.advanceTimersByTime(120);
    expect(chordHit).toBe(true);

    vi.advanceTimersByTime(120);
  });

  it('does not play audio when uninitialized or muted', () => {
    const uninitEngine = new SoundEngine();
    expect(() => uninitEngine.playGavel()).not.toThrow();
    expect(() => uninitEngine.playTextBlip()).not.toThrow();
    expect(() => uninitEngine.playClick()).not.toThrow();
    expect(() => uninitEngine.playDeskSlam()).not.toThrow();
    expect(() => uninitEngine.playObjectionWhoosh()).not.toThrow();
    expect(() => uninitEngine.playRealization()).not.toThrow();
    expect(() => uninitEngine.playDamage()).not.toThrow();
    expect(() => uninitEngine.playChipoteSqueak()).not.toThrow();
    expect(() => uninitEngine.playChicharra()).not.toThrow();

    engine.init(fakeCtx as unknown as AudioContext);
    engine.toggleMute();
    expect(() => engine.playSFX('desk_slam')).not.toThrow();
    expect(() => engine.playTextBlip()).not.toThrow();
    expect(() => engine.playClick()).not.toThrow();
    expect(() => engine.playGavel()).not.toThrow();
    expect(() => engine.playDeskSlam()).not.toThrow();
    expect(() => engine.playObjectionWhoosh()).not.toThrow();
    expect(() => engine.playRealization()).not.toThrow();
    expect(() => engine.playDamage()).not.toThrow();
    expect(() => engine.playChipoteSqueak()).not.toThrow();
    expect(() => engine.playChicharra()).not.toThrow();
  });
});
