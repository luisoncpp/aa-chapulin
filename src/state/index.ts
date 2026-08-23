// @Architecture(descriptionShort="Public facade exporting singleton game state and catalog", type="facade", icon="database")
/**
 * State Subsystem Public Interface
 * Exposes [[./Private/GameStateManager.ts|GameStateManager]] and [[./Private/EvidenceCatalog.ts|EVIDENCE_CATALOG]].
 */

import { GameStateManager } from './Private/GameStateManager.js';

export { EVIDENCE_CATALOG } from './Private/EvidenceCatalog.js';
export { GameStateManager } from './Private/GameStateManager.js';

// @Section(Singleton State Instance)
export const gameState = new GameStateManager();
