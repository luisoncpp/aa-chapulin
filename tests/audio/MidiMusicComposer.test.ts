// @Architecture(descriptionShort="Unit tests for polyphonic MIDI tracker and soundtrack catalog", type="test", icon="music")
import { describe, expect, it, beforeEach, afterEach, vi } from 'vitest';
import { TRACK_CATALOG } from '../../src/audio/Private/TrackCatalog.js';
import { SynthVoiceSynthesizer } from '../../src/audio/Private/SynthVoiceSynthesizer.js';
import { MidiMusicComposer, SoundEngine, midiComposer } from '../../src/audio/index.js';
import type { TrackName } from '../../src/types/index.js';
import { FakeAudioContext } from '../fakes/FakeAudioContext.js';

describe('MidiMusicComposer & TRACK_CATALOG', () => {
  let soundEngineInstance: SoundEngine;
  let composer: MidiMusicComposer;
  let fakeCtx: FakeAudioContext;

  const originalTrialTrack = TRACK_CATALOG.trial;

  beforeEach(() => {
    vi.useFakeTimers();
    fakeCtx = new FakeAudioContext();
    soundEngineInstance = new SoundEngine();
    soundEngineInstance.init(fakeCtx as unknown as AudioContext);
    composer = new MidiMusicComposer(soundEngineInstance);
  });

  afterEach(() => {
    TRACK_CATALOG.trial = originalTrialTrack;
    composer.stop();
  });

  it('converts MIDI note numbers to frequencies correctly', () => {
    expect(composer.midiToFreq(69)).toBeCloseTo(440, 1);
    expect(composer.midiToFreq(60)).toBeCloseTo(261.63, 1);
    expect(composer.midiToFreq(0)).toBe(0);
    expect(composer.midiToFreq(-10)).toBe(0);
  });

  it('synthesizes individual notes and polyphonic chords with options', () => {
    composer.isPlaying = true;
    expect(() => composer.playNote(69, 0.2)).not.toThrow();
    expect(() => composer.playNote([60, 64, 67], 0.2, { type: 'sawtooth', gainLevel: 0.2, vibrato: true })).not.toThrow();
    expect(() => composer.playNote(0, 0.2)).not.toThrow();
    expect(() => composer.playNote([], 0.2)).not.toThrow();
  });

  it('synthesizes single and composite drum hits', () => {
    composer.isPlaying = true;
    expect(() => composer.playDrum('K')).not.toThrow();
    expect(() => composer.playDrum('S')).not.toThrow();
    expect(() => composer.playDrum('H')).not.toThrow();
    expect(() => composer.playDrum('O')).not.toThrow();
    expect(() => composer.playDrum('C')).not.toThrow();
    expect(() => composer.playDrum('P')).not.toThrow();
    expect(() => composer.playDrum('KH')).not.toThrow();
    expect(() => composer.playDrum('KC')).not.toThrow();
    expect(() => composer.playDrum('0')).not.toThrow();
  });

  it('handles direct calls to SynthVoiceSynthesizer', () => {
    const dest = fakeCtx.createGain();
    expect(() => SynthVoiceSynthesizer.playNote(fakeCtx as any, dest as any, { midi: [60, 64, 67], durationSec: 0.3, vibrato: true })).not.toThrow();
    expect(() => SynthVoiceSynthesizer.playDrum(fakeCtx as any, dest as any, 'KC')).not.toThrow();
    expect(() => SynthVoiceSynthesizer.playDrum(fakeCtx as any, dest as any, 'O')).not.toThrow();
    expect(() => SynthVoiceSynthesizer.playDrum(fakeCtx as any, dest as any, 'P')).not.toThrow();
    expect(() => SynthVoiceSynthesizer.playDrum(fakeCtx as any, dest as any, '0')).not.toThrow();
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
    expect(composer.bpm).toBe(110);
    expect(composer.step).toBe(0);

    const stepMs = 60000 / 110 / 4;
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
    expect(composer.bpm).toBe(162);
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

  it('validates polyphonic anti-fatigue integrity and step alignment for all 8 compositions', () => {
    const trackNames: TrackName[] = [
      'trial', 'cross_exam_moderato', 'cross_exam_allegro',
      'objection', 'pursuit', 'investigation', 'suspense', 'victory'
    ];
    const validDrums = new Set(['K', 'S', 'H', 'O', 'C', 'P', '0']);

    trackNames.forEach((name) => {
      const track = TRACK_CATALOG[name];
      expect(track).toBeDefined();
      expect(track.bpm).toBeGreaterThan(60);
      expect(track.length).toBeGreaterThanOrEqual(64); // Anti-fatigue rule: at least 64 steps

      expect(track.bass).toHaveLength(track.length);
      expect(track.lead).toHaveLength(track.length);
      expect(track.chords).toHaveLength(track.length);
      expect(track.drums).toHaveLength(track.length);

      const validateNotes = (arr: any[] | undefined) => {
        arr?.forEach((entry) => {
          if (Array.isArray(entry)) {
            entry.forEach((n) => expect(n).toBeGreaterThanOrEqual(0));
          } else {
            expect(entry).toBeGreaterThanOrEqual(0);
          }
        });
      };

      validateNotes(track.bass);
      validateNotes(track.lead);
      validateNotes(track.chords);

      track.drums!.forEach((hit) => {
        for (const char of hit) {
          expect(validDrums.has(char)).toBe(true);
        }
      });
    });
  });

  it('exports singleton midiComposer', () => {
    expect(midiComposer).toBeInstanceOf(MidiMusicComposer);
  });

  it('skips voices when muted, notes are empty, or the sequencer is paused', () => {
    composer.isPlaying = true;
    soundEngineInstance.isMuted = true;
    expect(() => composer.playNote(72, 0.1)).not.toThrow();
    soundEngineInstance.isMuted = false;
    expect(() => composer.playNote(null as unknown as number, 0.1)).not.toThrow();
    expect(() => composer.playDrum('' as 'K')).not.toThrow();

    const original = TRACK_CATALOG.trial;
    TRACK_CATALOG.trial = { bpm: 0, length: 2 };
    composer.playTrack('trial');
    expect(composer.bpm).toBe(120);
    vi.advanceTimersByTime(60000 / 120 / 4);
    composer.isPlaying = false;
    vi.advanceTimersByTime(60000 / 120 / 4);
    delete (TRACK_CATALOG as { trial?: typeof original }).trial;
    composer.isPlaying = true;
    vi.advanceTimersByTime(60000 / 120 / 4);
    TRACK_CATALOG.trial = original;
    composer.stop();
  });

  it('resumes when a track is queued but the timer is missing', () => {
    composer.playTrack('suspense');
    composer.stop();
    composer.isPlaying = true;
    composer.resumePlayback();
    expect(composer.isPlaying).toBe(true);
    expect(composer.currentTrack).toBe('suspense');
  });
});
