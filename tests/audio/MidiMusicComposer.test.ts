// @Architecture(descriptionShort="Unit tests for polyphonic MIDI tracker and soundtrack catalog", type="test", icon="music")
import { describe, expect, it, beforeEach, afterEach, vi } from 'vitest';
import { DRUM_SYMBOLS } from '../../src/audio/Private/Instruments/index.js';
import { TRACK_CATALOG } from '../../src/audio/Private/TrackCatalog.js';
import { HOLD } from '../../src/audio/Private/tracks/Notation.js';
import { MidiMusicComposer, SoundEngine } from '../../src/audio/index.js';
import type { NoteEntry, TrackName } from '../../src/types/index.js';
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
    expect(() => composer.playNote([60, 64, 67], 0.2, 'chip_pad')).not.toThrow();
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

  it('does not play notes or drums when not active', () => {
    composer.isPlaying = false;
    expect(() => composer.playNote(69, 0.2)).not.toThrow();
    expect(() => composer.playDrum('K')).not.toThrow();
  });

  it('plays tracks, advances sequencer steps, and loops seamlessly', () => {
    composer.playTrack('trial');
    expect(composer.isPlaying).toBe(true);
    expect(composer.currentTrack).toBe('trial');
    expect(composer.bpm).toBe(TRACK_CATALOG.trial.bpm);
    expect(composer.getPlaybackSnapshot().step).toBe(0);

    const stepMs = 60000 / TRACK_CATALOG.trial.bpm / 4;
    vi.advanceTimersByTime(Math.ceil(stepMs * 35));
    expect(composer.getPlaybackSnapshot().step).toBe(35);

    // Calling playTrack for the same playing track is a no-op
    composer.playTrack('trial');
    expect(composer.getPlaybackSnapshot().step).toBe(35);
  });

  it('switches between tracks cleanly and resets step counter', () => {
    composer.playTrack('trial');
    vi.advanceTimersByTime(200);

    composer.playTrack('pursuit');
    expect(composer.currentTrack).toBe('pursuit');
    expect(composer.getPlaybackSnapshot().step).toBe(0);
    expect(composer.bpm).toBe(TRACK_CATALOG.pursuit.bpm);
  });

  it('continues playback when an alternate name uses the same composition', () => {
    composer.playTrack('victory');
    vi.advanceTimersByTime(200);
    const stepBeforeAlias = composer.getPlaybackSnapshot().step;

    composer.playTrack('epilogue');

    expect(composer.currentTrack).toBe('victory');
    expect(composer.getPlaybackSnapshot().step).toBe(stepBeforeAlias);
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

  it('validates polyphonic anti-fatigue integrity and step alignment for all compositions', () => {
    const trackNames = Object.keys(TRACK_CATALOG) as TrackName[];
    trackNames.forEach((name) => {
      const track = TRACK_CATALOG[name];
      expect(track).toBeDefined();
      expect(track.bpm).toBeGreaterThan(60);
      expect(track.length).toBeGreaterThanOrEqual(64); // Anti-fatigue rule: at least 64 steps

      expect(track.bass).toHaveLength(track.length);
      expect(track.lead).toHaveLength(track.length);
      expect(track.chords).toHaveLength(track.length);
      expect(track.drums).toHaveLength(track.length);

      const validateNotes = (arr: NoteEntry[] | undefined) => {
        arr?.forEach((entry) => {
          const notes = Array.isArray(entry) ? entry : [entry];
          notes.forEach((n) => expect(n === HOLD || n >= 0).toBe(true));
        });
      };

      validateNotes(track.bass);
      validateNotes(track.lead);
      validateNotes(track.chords);
      if (track.counter) {
        expect(track.counter).toHaveLength(track.length);
        validateNotes(track.counter);
      }

      track.drums!.forEach((hit) => {
        for (const char of hit) expect(DRUM_SYMBOLS.has(char)).toBe(true);
      });
    });
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

  it('pause keeps step and currentTrack; resumePaused continues from the same step', () => {
    const stepMs = 60000 / 110 / 4;
    composer.playTrack('trial');
    vi.advanceTimersByTime(Math.ceil(stepMs * 12));
    const stepBeforePause = composer.getPlaybackSnapshot().step;
    composer.pause();
    expect(composer.isPlaying).toBe(false);
    expect(composer.currentTrack).toBe('trial');
    expect(composer.getPlaybackSnapshot().step).toBe(stepBeforePause);
    expect(stepBeforePause).toBe(12);
    vi.advanceTimersByTime(Math.ceil(stepMs * 5));
    expect(composer.getPlaybackSnapshot().step).toBe(stepBeforePause);
    composer.resumePaused();
    expect(composer.isPlaying).toBe(true);
    vi.advanceTimersByTime(Math.ceil(stepMs) + 20);
    expect(composer.getPlaybackSnapshot().step).toBe(stepBeforePause + 1);
  });

  it('seekToStep clamps to the active track length', () => {
    composer.playTrack('trial');
    const length = TRACK_CATALOG.trial.length;
    composer.seekToStep(9999);
    expect(composer.getPlaybackSnapshot().step).toBe(length - 1);
    composer.seekToStep(-5);
    expect(composer.getPlaybackSnapshot().step).toBe(0);
  });

  it('playTrack still resets step when switching to a different composition', () => {
    composer.playTrack('trial');
    vi.advanceTimersByTime(60000 / 110 / 4 * 20);
    composer.playTrack('pursuit');
    expect(composer.currentTrack).toBe('pursuit');
    expect(composer.getPlaybackSnapshot().step).toBe(0);
  });
});
