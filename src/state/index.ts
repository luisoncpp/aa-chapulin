/**
 * State Subsystem Public Interface
 */

import { GameStateManager } from './Private/GameStateManager.js';

export { EVIDENCE_CATALOG } from './Private/EvidenceCatalog.js';
export { GameStateManager } from './Private/GameStateManager.js';

export const gameState = new GameStateManager();
