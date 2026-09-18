// @Architecture(descriptionShort="Binds splash jukebox clicks, seek bar, and Escape", type="binder", icon="plug")
/**
 * DOM event wiring for the title-screen music player.
 */

import type { DomElements } from '../DomElements.js';
import type { MusicPlayerController } from './MusicPlayerController.js';

function seekRatioFromEvent(bar: HTMLElement, clientX: number): number {
  const rect = bar.getBoundingClientRect();
  if (rect.width <= 0) return 0;
  return (clientX - rect.left) / rect.width;
}

export function bindMusicPlayerEvents(dom: DomElements, player: MusicPlayerController): void {
  dom.btnMusicPlayer?.addEventListener('click', /*onToggle*/ (e) => {
    e.stopPropagation();
    player.toggle();
  });

  document.getElementById('btn-close-music-player')?.addEventListener('click', /*onClose*/ (e) => {
    e.stopPropagation();
    player.close();
  });

  document.getElementById('btn-music-prev')?.addEventListener('click', /*onPrev*/ (e) => {
    e.stopPropagation();
    player.prev();
  });
  document.getElementById('btn-music-play')?.addEventListener('click', /*onPlay*/ (e) => {
    e.stopPropagation();
    player.play();
  });
  document.getElementById('btn-music-pause')?.addEventListener('click', /*onPause*/ (e) => {
    e.stopPropagation();
    player.pause();
  });
  document.getElementById('btn-music-stop')?.addEventListener('click', /*onStop*/ (e) => {
    e.stopPropagation();
    player.stop();
  });
  document.getElementById('btn-music-next')?.addEventListener('click', /*onNext*/ (e) => {
    e.stopPropagation();
    player.next();
  });

  const seekBar = document.getElementById('music-player-seek');
  if (seekBar) {
    seekBar.addEventListener('click', /*onSeekClick*/ (e) => {
      e.stopPropagation();
      player.seekRatio(seekRatioFromEvent(seekBar, (e as MouseEvent).clientX));
    });
    seekBar.addEventListener('mousedown', /*onSeekDragStart*/ (e) => {
      e.preventDefault();
      const move = (ev: MouseEvent): void => {
        player.seekRatio(seekRatioFromEvent(seekBar, ev.clientX));
      };
      const up = (): void => {
        document.removeEventListener('mousemove', move);
        document.removeEventListener('mouseup', up);
      };
      document.addEventListener('mousemove', move);
      document.addEventListener('mouseup', up);
      player.seekRatio(seekRatioFromEvent(seekBar, (e as MouseEvent).clientX));
    });
  }

  dom.musicPlayerTrackListEl?.addEventListener('click', /*onTrackClick*/ (e) => {
    const row = (e.target as HTMLElement).closest('.music-player-track');
    if (!row) return;
    e.stopPropagation();
    const index = Number(row.getAttribute('data-index'));
    if (!Number.isNaN(index)) player.selectIndex(index);
  });

  document.addEventListener('keydown', /*onEscape*/ (e) => {
    if (e.code !== 'Escape' || !player.isOpen) return;
    player.close();
  });
}
