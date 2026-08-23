// @Architecture(descriptionShort="Public facade exporting game engine factory and instance", type="facade", icon="layout")
/**
 * Engine Subsystem Public Interface
 * Exposes [[./Private/GameEngine.ts|GameEngine]] factory.
 */

import { GameEngine, type GameEngineDeps } from './Private/GameEngine.js';

export { GameEngine, type GameEngineDeps } from './Private/GameEngine.js';

// @Section(Factory Function)
export function createGameEngine(deps?: GameEngineDeps): GameEngine {
  return new GameEngine(deps);
}
