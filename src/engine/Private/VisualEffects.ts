// @Architecture(descriptionShort="Renders cut-in overlays, screen shakes, flashes, and confetti", type="view", icon="layers")
/**
 * Visual Special Effects, Overlays, and Particle Synthesizer
 * Operates on DOM nodes for [[./GameEngine.ts]].
 */

import type { CutinName, PoseName } from '../../types/index.js';
import type { DomElements } from './DomElements.js';

export class VisualEffects {
  // @Section(Character Pose Staging)
  public static setPose(charSpriteEl: HTMLImageElement, poseName: PoseName): void {
    if (!poseName) return;
    charSpriteEl.src = `assets/${poseName}.png`;
    charSpriteEl.classList.remove('hidden');
  }

  public static hideCharacter(charSpriteEl: HTMLImageElement): void {
    charSpriteEl.classList.add('hidden');
  }

  // @Section(Screen Shakes & Flashes)
  public static shakeScreen(gameScreen: HTMLElement, durationMs = 350): void {
    gameScreen.classList.add('screen-shake');
    setTimeout(/*removeShake*/ () => {
      gameScreen.classList.remove('screen-shake');
    }, /*delayInMs=*/ durationMs);
  }

  public static flashScreen(flashEl: HTMLElement): void {
    flashEl.classList.remove('hidden');
    flashEl.style.opacity = '0.9';
    setTimeout(/*fadeFlash*/ () => {
      flashEl.style.opacity = '0';
      setTimeout(/*hideFlash*/ () => {
        flashEl.classList.add('hidden');
      }, /*delayInMs=*/ 200);
    }, /*delayInMs=*/ 120);
  }

  // @Section(Dramatic Cut-in Overlays)
  public static showCutin(dom: DomElements, cutinName: CutinName): void {
    dom.cutinImgEl.src = `assets/${cutinName}.png`;
    dom.cutinOverlayEl.classList.remove('hidden');
    dom.cutinOverlayEl.classList.add('cutin-animate');
    VisualEffects.shakeScreen(dom.gameScreen, /*durationMs=*/ 400);
    VisualEffects.flashScreen(dom.flashEl);

    setTimeout(/*hideCutin*/ () => {
      dom.cutinOverlayEl.classList.add('hidden');
      dom.cutinOverlayEl.classList.remove('cutin-animate');
    }, /*delayInMs=*/ 1100);
  }

  // @Section(Confetti Celebration)
  public static triggerConfetti(containerEl: HTMLElement): void {
    containerEl.classList.remove('hidden');
    const colors = ['#FFD700', '#FF0000', '#00E5FF', '#76FF03', '#FFFFFF'];
    for (let i = 0; i < 80; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.style.left = `${Math.random() * 100}%`;
      piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDelay = `${Math.random() * 2.5}s`;
      piece.style.transform = `rotate(${Math.random() * 360}deg)`;
      containerEl.appendChild(piece);
    }
  }

  public static showNotification(notifEl: HTMLElement, msg: string): void {
    notifEl.textContent = msg;
    notifEl.classList.remove('hidden');
    notifEl.classList.add('notif-slide');
    setTimeout(/*hideNotif*/ () => {
      notifEl.classList.add('hidden');
      notifEl.classList.remove('notif-slide');
    }, /*delayInMs=*/ 2800);
  }
}
