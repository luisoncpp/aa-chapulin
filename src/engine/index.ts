/**
 * Engine Subsystem Public Interface
 */

import { GameEngine } from './Private/GameEngine.js';

export { GameEngine } from './Private/GameEngine.js';

export function createGameEngine(): GameEngine {
  return new GameEngine();
}
