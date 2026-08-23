// @Architecture(descriptionShort="Unit tests for 4-channel MIDI tracker and soundtrack catalog", type="test", icon="music")
import { describe, expect, it, beforeEach, vi } from 'vitest';
import { TRACK_CATALOG } from '../../src/audio/Private/TrackCatalog.js';
import { MidiMusicComposer, SoundEngine, midiComposer } from '../../src/audio/index.js';
import type { TrackName } from '../../src/types/index.js';
import { FakeAudioContext } from '../fakes/FakeAudioContext.js';

describe('MidiMusicComposer & TRACK_CATALOG', () => {
  let soundEngineInstance: SoundEngine;
  let composer: MidiMusicComposer;
  let fakeCtx: FakeAudioContext;

  beforeEach(() => {
    vi.useFakeTimers();
    fakeCtx = new FakeAudioContext();
    soundEngineInstance = new SoundEngine();
    soundEngineInstance.init(fakeCtx as unknown as AudioContext);
    composer = new MidiMusicComposer(soundEngineInstance);
  });

  it('converts MIDI note numbers to frequencies correctly', () => {
    expect(composer.midiToFreq(69)).toBeCloseTo(440, 1);
    expect(composer.midiToFreq(60)).toBeCloseTo(261.63, 1);
    expect(composer.midiToFreq(0)).toBe(0);
    expect(composer.midiToFreq(-10)).toBe(0);
  });

  it('synthesizes individual notes with defaults and custom options', () => {
    composer.isPlaying = true;
    expect(() => composer.playNote(69, 0.2)).not.toThrow();
    expect(() => composer.playNote(69, 0.2, { type: 'triangle', gainLevel: 0.3, filterFreq: 1500 })).not.toThrow();
    expect(() => composer.playNote(0, 0.2)).not.toThrow();
  });

  it('synthesizes drums and handles unknown or rest hits', () => {
    composer.isPlaying = true;
    expect(() => composer.playDrum('K')).not.toThrow();
    expect(() => composer.playDrum('S')).not.toThrow();
    expect(() => composer.playDrum('H')).not.toThrow();
    expect(() => composer.playDrum('0')).not.toThrow();
    expect(() => composer.playDrum('X' as any)).not.toThrow();
  });

  it('does not play notes or drums when not active', () => {
    composer.isPlaying = false;
    expect(() => composer.playNote(69, 0.2)).not.toThrow();
    expect(() => composer.playDrum('K')).not.toThrow();
  });

  it('plays tracks, advances sequencer steps, and loops seamlessly', () => {
    composer.playTrack('trial');
    expect(composer.isPlaying).toBe(true);
    expect(composer.currentTrack).toBe('trial');
    expect(composer.bpm).toBe(124);
    expect(composer.step).toBe(0);

    const stepMs = 60000 / 124 / 4;
    vi.advanceTimersByTime(stepMs * 35);
    expect(composer.step).toBe(35);

    // Calling playTrack for the same playing track is a no-op
    composer.playTrack('trial');
    expect(composer.step).toBe(35);
  });

  it('switches between tracks cleanly and resets step counter', () => {
    composer.playTrack('trial');
    vi.advanceTimersByTime(200);

    composer.playTrack('pursuit');
    expect(composer.currentTrack).toBe('pursuit');
    expect(composer.step).toBe(0);
    expect(composer.bpm).toBe(156);
  });

  it('stops and resumes playback reliably', () => {
    composer.playTrack('suspense');
    composer.stop();
    expect(composer.isPlaying).toBe(false);
    expect(composer.currentTrack).toBeNull();
    expect(composer.queuedTrack).toBe('suspense');

    composer.resumePlayback();
    expect(composer.isPlaying).toBe(true);
    expect(composer.currentTrack).toBe('suspense');

    // Resume when no track queued or already playing does nothing
    composer.resumePlayback();
    expect(composer.isPlaying).toBe(true);
  });

  it('ignores invalid track names safely', () => {
    composer.playTrack('non_existent_track' as TrackName);
    expect(composer.isPlaying).toBe(false);
  });

  it('validates TRACK_CATALOG integrity for all 8 compositions', () => {
    const trackNames: TrackName[] = [
      'trial', 'cross_exam_moderato', 'cross_exam_allegro',
      'objection', 'pursuit', 'investigation', 'suspense', 'victory'
    ];

    trackNames.forEach((name) => {
      const track = TRACK_CATALOG[name];
      expect(track).toBeDefined();
      expect(track.bpm).toBeGreaterThan(60);
      expect(track.length).toBeGreaterThanOrEqual(16);
      expect(track.bass).toBeDefined();
      expect(track.lead).toBeDefined();
      expect(track.chords).toBeDefined();
      expect(track.drums).toBeDefined();
    });
  });

  it('exports singleton midiComposer', () => {
    expect(midiComposer).toBeInstanceOf(MidiMusicComposer);
  });
});
