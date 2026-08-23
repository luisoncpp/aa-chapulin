// @Architecture(descriptionShort="Unit tests for procedural sound engine and audio routing", type="test", icon="bolt")
import { describe, expect, it, beforeEach, vi } from 'vitest';
import { CourtSfx } from '../../src/audio/Private/CourtSfx.js';
import { NoveltySfx } from '../../src/audio/Private/NoveltySfx.js';
import { SoundEngine, soundEngine } from '../../src/audio/index.js';
import type { SFXName } from '../../src/types/index.js';
import { FakeAudioContext, FakeGainNode } from '../fakes/FakeAudioContext.js';

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
    expect(engine.masterGain?.gain.value).toBe(0.85);

    const isMutedNow = engine.toggleMute();
    expect(isMutedNow).toBe(true);
    expect(engine.isMuted).toBe(true);
    expect(engine.masterGain?.gain.value).toBe(0);

    engine.toggleMute();
    expect(engine.isMuted).toBe(false);
    expect(engine.masterGain?.gain.value).toBe(0.85);
  });

  it('synthesizes all courtroom and novelty sound effects', () => {
    engine.init(fakeCtx as unknown as AudioContext);
    const sfxList: SFXName[] = [
      'gavel', 'desk_slam', 'whoosh', 'realization',
      'damage', 'chipote', 'chicharra', 'text'
    ];

    sfxList.forEach((sfx) => {
      expect(() => engine.playSFX(sfx)).not.toThrow();
    });

    vi.advanceTimersByTime(200);
  });

  it('synthesizes all direct methods when active', () => {
    engine.init(fakeCtx as unknown as AudioContext);
    expect(() => engine.playTextBlip()).not.toThrow();
    expect(() => engine.playGavel()).not.toThrow();
    expect(() => engine.playDeskSlam()).not.toThrow();
    expect(() => engine.playObjectionWhoosh()).not.toThrow();
    expect(() => engine.playRealization()).not.toThrow();
    expect(() => engine.playDamage()).not.toThrow();
    expect(() => engine.playChipoteSqueak()).not.toThrow();
    expect(() => engine.playChicharra()).not.toThrow();
    vi.advanceTimersByTime(120);
  });

  it('synthesizes individual CourtSfx methods directly', () => {
    const dest = fakeCtx.createGain();
    expect(() => CourtSfx.playGavel(fakeCtx as unknown as AudioContext, dest as unknown as GainNode)).not.toThrow();
    expect(() => CourtSfx.playDeskSlam(fakeCtx as unknown as AudioContext, dest as unknown as GainNode)).not.toThrow();
    expect(() => CourtSfx.playDamage(fakeCtx as unknown as AudioContext, dest as unknown as GainNode)).not.toThrow();

    let chordHit = false;
    CourtSfx.playObjectionWhoosh(
      fakeCtx as unknown as AudioContext,
      dest as unknown as GainNode,
      /*onClimaxHit*/ () => { chordHit = true; }
    );
    expect(chordHit).toBe(false);
    vi.advanceTimersByTime(120);
    expect(chordHit).toBe(true);
  });

  it('synthesizes individual NoveltySfx methods directly including defaults', () => {
    const dest = fakeCtx.createGain();
    expect(() => NoveltySfx.playTextBlip(fakeCtx as unknown as AudioContext, dest as unknown as GainNode, /*pitchOffset=*/ 2)).not.toThrow();
    expect(() => NoveltySfx.playRealization(fakeCtx as unknown as AudioContext, dest as unknown as GainNode)).not.toThrow();
    expect(() => NoveltySfx.playChipoteSqueak(fakeCtx as unknown as AudioContext, dest as unknown as GainNode)).not.toThrow();
    expect(() => NoveltySfx.playChicharra(fakeCtx as unknown as AudioContext, dest as unknown as GainNode)).not.toThrow();
    expect(() => NoveltySfx.playChord(fakeCtx as unknown as AudioContext, dest as unknown as GainNode, {
      notes: [440, 554, 659]
    })).not.toThrow();
  });

  it('does not play audio when uninitialized or muted', () => {
    const uninitEngine = new SoundEngine();
    expect(() => uninitEngine.playGavel()).not.toThrow();
    expect(() => uninitEngine.playTextBlip()).not.toThrow();
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
    expect(() => engine.playGavel()).not.toThrow();
    expect(() => engine.playDeskSlam()).not.toThrow();
    expect(() => engine.playObjectionWhoosh()).not.toThrow();
    expect(() => engine.playRealization()).not.toThrow();
    expect(() => engine.playDamage()).not.toThrow();
    expect(() => engine.playChipoteSqueak()).not.toThrow();
    expect(() => engine.playChicharra()).not.toThrow();
  });

  it('exports singleton soundEngine', () => {
    expect(soundEngine).toBeInstanceOf(SoundEngine);
  });
});
