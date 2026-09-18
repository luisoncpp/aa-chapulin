// @Architecture(descriptionShort="Controls splash jukebox playback and selection", type="controller", icon="music")
/**
 * Title-screen music player state and transport for [[./MusicPlayerView.ts]].
 */

import type { MidiMusicComposer, SoundEngine } from '../../../audio/index.js';
import { listSoundtrack } from '../../../audio/index.js';
import type { DomElements } from '../DomElements.js';
import {
  getMusicPlayerDom,
  renderTrackList,
  updateNowPlaying,
  updateSeekFill,
  updateTransport,
  type MusicPlayerDom
} from './MusicPlayerView.js';

export interface MusicPlayerDeps {
  composer: MidiMusicComposer;
  soundEngine: SoundEngine;
}

export class MusicPlayerController {
  private readonly view: MusicPlayerDom;
  private readonly playlist = listSoundtrack();
  private selectedIndex = 0;
  private openFlag = false;
  private rafId = 0;

  constructor(
    dom: DomElements,
    private readonly deps: MusicPlayerDeps
  ) {
    const view = getMusicPlayerDom(dom);
    if (!view) throw new Error('Music player DOM nodes missing');
    this.view = view;
  }

  public open(): void {
    this.openFlag = true;
    this.view.modal.classList.remove('hidden');
    this.syncFromComposer();
    this.startProgressLoop();
    this.deps.soundEngine.ensureActive();
  }

  public close(): void {
    this.openFlag = false;
    this.view.modal.classList.add('hidden');
    this.stopProgressLoop();
    this.deps.composer.stop();
    this.render();
  }

  public refreshCopy(): void {
    if (!this.openFlag) return;
    this.render();
  }

  public get isOpen(): boolean {
    return this.openFlag;
  }

  public toggle(): void {
    if (this.openFlag) this.close();
    else this.open();
  }

  // fallow-ignore-next-line complexity
  public play(): void {
    this.deps.soundEngine.ensureActive();
    const target = this.playlist[this.selectedIndex]?.id;
    if (!target) return;
    const snap = this.deps.composer.getPlaybackSnapshot();
    const canResume = snap.track === target && !snap.isPlaying && snap.length > 0;
    if (canResume) this.deps.composer.resumePaused();
    else if (!snap.isPlaying) this.deps.composer.playTrack(target);
    this.syncFromComposer();
  }

  public pause(): void {
    this.deps.composer.pause();
    this.render();
  }

  public stop(): void {
    const snap = this.deps.composer.getPlaybackSnapshot();
    if (snap.track) {
      this.deps.composer.pause();
      this.deps.composer.seekToStep(/*step=*/0);
    }
    this.render();
  }

  public next(): void {
    this.selectIndex((this.selectedIndex + 1) % this.playlist.length);
  }

  public prev(): void {
    const len = this.playlist.length;
    this.selectIndex((this.selectedIndex - 1 + len) % len);
  }

  public selectIndex(index: number): void {
    if (index < 0 || index >= this.playlist.length) return;
    this.selectedIndex = index;
    this.deps.soundEngine.ensureActive();
    this.deps.composer.playTrack(this.playlist[index].id);
    this.syncFromComposer();
  }

  public seekRatio(ratio: number): void {
    const snap = this.deps.composer.getPlaybackSnapshot();
    if (!snap.length) return;
    const step = Math.floor(Math.max(0, Math.min(1, ratio)) * (snap.length - 1));
    this.deps.composer.seekToStep(step);
    this.render();
  }

  private syncFromComposer(): void {
    const snap = this.deps.composer.getPlaybackSnapshot();
    if (snap.track) {
      const idx = this.playlist.findIndex((e) => e.id === snap.track);
      if (idx >= 0) this.selectedIndex = idx;
    }
    this.render();
  }

  private render(): void {
    const snap = this.deps.composer.getPlaybackSnapshot();
    renderTrackList(this.view, {
      playlist: this.playlist,
      selectedIndex: this.selectedIndex,
      playingId: snap.track
    });
    updateNowPlaying(this.view, snap.track);
    updateTransport(this.view, snap.isPlaying, Boolean(snap.track));
    updateSeekFill(this.view, snap.step, snap.length);
  }

  private startProgressLoop(): void {
    this.stopProgressLoop();
    const tick = (): void => {
      if (!this.openFlag) return;
      const snap = this.deps.composer.getPlaybackSnapshot();
      updateSeekFill(this.view, snap.step, snap.length);
      this.rafId = requestAnimationFrame(tick);
    };
    this.rafId = requestAnimationFrame(tick);
  }

  private stopProgressLoop(): void {
    if (this.rafId) cancelAnimationFrame(this.rafId);
    this.rafId = 0;
  }
}
