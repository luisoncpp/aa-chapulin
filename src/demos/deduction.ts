// @Architecture(descriptionShort="Launches the isolated deduction demo without loading cases")
import { mountDeduction } from '../deduction/index.js';
import { demoSequence } from './DeductionStory.js';
const root = document.getElementById('deduction-demo');
const chapulin = new URLSearchParams(location.search).get('defender') === 'chapulin';
const sequence = chapulin ? { ...demoSequence, defender: 'chapulin' as const,
  author: { es: 'El Chapulín Colorado', en: 'El Chapulín Colorado' } } : demoSequence;
if (!root) throw Error('Missing demo root');
const demo = mountDeduction(root, sequence, /*returnToFictionalCourt*/ () => {});
window.addEventListener('pagehide', /*releaseSession*/ () => demo.dispose(), { once: true });
