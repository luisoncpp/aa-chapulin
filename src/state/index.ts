// @Architecture(descriptionShort="Public facade exporting singleton game state instance", type="facade", icon="database")
/**
 * State Subsystem Public Interface
 * Exposes [[./Private/GameStateManager.ts|GameStateManager]] and singleton [[gameState]].
 */

import { GameStateManager } from './Private/GameStateManager.js';

export { GameStateManager } from './Private/GameStateManager.js';

// @Section(Singleton State Instance)
export const gameState = new GameStateManager();

