// @Architecture(descriptionShort="Public contract for standalone final deduction sessions", icon="bolt")
export { DeductionSession } from './Private/Session.js';
export { mountDeduction } from './Private/Controller.js';
export { validateSequence } from './Private/Validation.js';
export { GameDeductionView } from './Private/GameView.js';
export { ThoughtEntrance } from './Private/ThoughtEntrance.js';
export type { DeductionSequence, DeductionSnapshot, Localized, DeductionRecord } from './Private/Contract.js';
