// @Architecture(descriptionShort="Facade for title-screen procedural music jukebox", type="facade", icon="music")
/**
 * Splash-only music player deep module for [[../GameEngine.ts]].
 */

import type { MidiMusicComposer, SoundEngine } from '../../../audio/index.js';
import type { DomElements } from '../DomElements.js';
import { bindMusicPlayerEvents } from './bindMusicPlayer.js';
import { MusicPlayerController } from './MusicPlayerController.js';
import { getMusicPlayerDom, refreshModalCopy } from './MusicPlayerView.js';

let player: MusicPlayerController | null = null;

export function bindMusicPlayer(
  dom: DomElements,
  deps: { composer: MidiMusicComposer; soundEngine: SoundEngine }
): MusicPlayerController | null {
  if (!getMusicPlayerDom(dom)) return null;
  player = new MusicPlayerController(dom, deps);
  bindMusicPlayerEvents(dom, player);
  const view = getMusicPlayerDom(dom);
  if (view) refreshModalCopy(view);
  return player;
}

export function getMusicPlayer(): MusicPlayerController | null {
  return player;
}

export function refreshMusicPlayerCopy(dom: DomElements): void {
  const view = getMusicPlayerDom(dom);
  if (view) refreshModalCopy(view);
  player?.refreshCopy();
}

export function stopMusicPlayerIfOpen(_dom: DomElements): void {
  if (!player?.isOpen) return;
  player.close();
}
