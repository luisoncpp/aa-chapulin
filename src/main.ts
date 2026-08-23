/**
 * Application Entrypoint
 * Bootstraps the Ace Attorney presentation engine on DOMContentLoaded.
 */

import { createGameEngine, type GameEngine } from './engine/index.js';

declare global {
  interface Window {
    gameEngine: GameEngine;
  }
}

function bootstrap(): void {
  const engine = createGameEngine();
  window.gameEngine = engine;
  engine.init();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    bootstrap();
  });
} else {
  bootstrap();
}
