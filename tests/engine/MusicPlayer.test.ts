// @Architecture(descriptionShort="Unit tests for splash music jukebox overlay", type="test", icon="music")
import { describe, expect, it, beforeEach, afterEach, vi } from 'vitest';
import { MidiMusicComposer, SoundEngine } from '../../src/audio/index.js';
import { bindMusicPlayer, getMusicPlayer } from '../../src/engine/Private/MusicPlayer/index.js';
import type { MusicPlayerController } from '../../src/engine/Private/MusicPlayer/MusicPlayerController.js';
import { setupDomHarness } from '../fakes/DomHarness.js';
import { FakeAudioContext } from '../fakes/FakeAudioContext.js';

describe('MusicPlayer', () => {
  let soundEngine: SoundEngine;
  let composer: MidiMusicComposer;
  let player: MusicPlayerController;

  beforeEach(() => {
    vi.useFakeTimers();
    const dom = setupDomHarness();
    soundEngine = new SoundEngine();
    soundEngine.init(new FakeAudioContext() as unknown as AudioContext);
    composer = new MidiMusicComposer(soundEngine);
    player = bindMusicPlayer(dom, { composer, soundEngine })!;
    expect(player).toBe(getMusicPlayer());
  });

  afterEach(() => {
    player.close();
    composer.stop();
    vi.useRealTimers();
  });

  it('opens and closes the overlay', () => {
    const modal = document.getElementById('music-player-modal')!;
    expect(modal.classList.contains('hidden')).toBe(true);
    player.open();
    expect(modal.classList.contains('hidden')).toBe(false);
    player.close();
    expect(modal.classList.contains('hidden')).toBe(true);
  });

  it('highlights the selected track row', () => {
    player.open();
    player.selectIndex(2);
    const rows = document.querySelectorAll('.music-player-track');
    expect(rows[2]?.classList.contains('selected')).toBe(true);
  });

  it('numbers tracks once without wrapping past nine', () => {
    player.open();
    const rows = document.querySelectorAll('.music-player-track');
    expect(rows.length).toBeGreaterThan(10);
    expect(rows[9]?.textContent).toMatch(/^10\./);
    expect(rows[10]?.textContent).toMatch(/^11\./);
  });

  it('wraps to the first track on next from the last entry', () => {
    player.open();
    const last = document.querySelectorAll('.music-player-track').length - 1;
    player.selectIndex(last);
    document.getElementById('btn-music-next')?.click();
    expect(composer.currentTrack).toBeTruthy();
    expect(document.querySelector('.music-player-track.selected')?.textContent).toMatch(/^1\./);
  });

  it('updates the seek snapshot when the user seeks', () => {
    player.open();
    player.selectIndex(0);
    document.getElementById('btn-music-play')?.click();
    player.seekRatio(0.5);
    const snap = composer.getPlaybackSnapshot();
    expect(snap.length).toBeGreaterThan(0);
    expect(snap.step).toBeGreaterThan(0);
  });

  it('player stop pauses and rewinds while keeping the track selected', () => {
    player.open();
    document.getElementById('btn-music-play')?.click();
    vi.advanceTimersByTime(60000 / 110 / 4 * 8);
    document.getElementById('btn-music-stop')?.click();
    expect(composer.isPlaying).toBe(/*expected=*/false);
    expect(composer.currentTrack).not.toBeNull();
    expect(composer.getPlaybackSnapshot().step).toBe(0);
    player.seekRatio(0.5);
    expect(composer.getPlaybackSnapshot().step).toBeGreaterThan(0);
  });

  it('stops audio when the overlay closes', () => {
    player.open();
    document.getElementById('btn-music-play')?.click();
    expect(composer.isPlaying).toBe(true);
    document.getElementById('btn-close-music-player')?.click();
    expect(composer.isPlaying).toBe(false);
    expect(composer.currentTrack).toBeNull();
  });
});
