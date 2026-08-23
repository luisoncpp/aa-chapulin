// @Architecture(descriptionShort="Bootstraps presentation engine on DOMContentLoaded", type="entrypoint", icon="app-window")
/**
 * Application Entrypoint
 * Bootstraps the Ace Attorney presentation engine using [[src/engine/index.ts|createGameEngine]].
 */

import { createGameEngine, type GameEngine } from './engine/index.js';

declare global {
  interface Window {
    gameEngine: GameEngine;
  }
}

// @Section(Bootstrap & Initialization)
function bootstrap(): void {
  const engine = createGameEngine();
  window.gameEngine = engine;
  engine.init();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', /*onDOMContentLoaded*/ () => {
    bootstrap();
  });
} else {
  bootstrap();
}
