// @Architecture(descriptionShort="Renders splash jukebox list, transport, and seek bar", type="view", icon="panel")
/**
 * Music player DOM updates for the title-screen jukebox overlay.
 */

import { i18n } from '../../../i18n/index.js';
import type { SoundtrackEntry } from '../../../audio/index.js';
import type { TrackName } from '../../../types/index.js';
import type { DomElements } from '../DomElements.js';

export interface MusicPlayerDom {
  modal: HTMLElement;
  title: HTMLElement;
  nowPlaying: HTMLElement;
  trackList: HTMLOListElement;
  seekBar: HTMLElement;
  seekFill: HTMLElement;
  btnPlay: HTMLButtonElement;
  btnPause: HTMLButtonElement;
  btnStop: HTMLButtonElement;
}

export function getMusicPlayerDom(dom: DomElements): MusicPlayerDom | null {
  const modal = dom.musicPlayerModalEl;
  const trackList = dom.musicPlayerTrackListEl;
  if (!modal || !trackList) return null;
  return {
    modal,
    title: document.getElementById('music-player-title')!,
    nowPlaying: document.getElementById('music-player-now-playing')!,
    trackList,
    seekBar: document.getElementById('music-player-seek')!,
    seekFill: document.getElementById('music-player-seek-fill')!,
    btnPlay: document.getElementById('btn-music-play') as HTMLButtonElement,
    btnPause: document.getElementById('btn-music-pause') as HTMLButtonElement,
    btnStop: document.getElementById('btn-music-stop') as HTMLButtonElement
  };
}

export interface TrackListRenderState {
  playlist: readonly SoundtrackEntry[];
  selectedIndex: number;
  playingId: TrackName | null;
}

export function renderTrackList(view: MusicPlayerDom, state: TrackListRenderState): void {
  view.trackList.innerHTML = '';
  state.playlist.forEach((entry, index) => {
    const row = document.createElement('li');
    row.className = 'music-player-track';
    row.dataset.index = String(index);
    if (index === state.selectedIndex) row.classList.add('selected');
    if (entry.id === state.playingId) row.classList.add('playing');
    row.textContent = `${index + 1}. ${i18n.t.trackTitle[entry.id]}`;
    view.trackList.appendChild(row);
  });
}

export function updateNowPlaying(view: MusicPlayerDom, trackId: TrackName | null): void {
  view.nowPlaying.textContent = trackId ? i18n.t.trackTitle[trackId] : '—';
}

export function updateTransport(view: MusicPlayerDom, isPlaying: boolean, hasTrack: boolean): void {
  view.btnPlay.disabled = false;
  view.btnPause.disabled = !hasTrack || !isPlaying;
  view.btnStop.disabled = !hasTrack;
}

export function updateSeekFill(view: MusicPlayerDom, step: number, length: number): void {
  const ratio = length > 0 ? step / length : 0;
  view.seekFill.style.width = `${Math.min(100, ratio * 100)}%`;
}

export function refreshModalCopy(view: MusicPlayerDom): void {
  view.title.textContent = i18n.t.musicPlayerTitle;
  const openBtn = document.getElementById('btn-music-player');
  if (openBtn) openBtn.title = i18n.t.musicPlayerOpenTitle;
}
