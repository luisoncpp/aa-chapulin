# Web Audio AudioParam Immutability & Object.assign Hazards

## Context
When dynamically instantiating Web Audio nodes (`OscillatorNode`, `GainNode`, `BiquadFilterNode`) in TypeScript/JavaScript, developers sometimes attempt convenient property assignment patterns such as `Object.assign(ctx.createOscillator(), { frequency: { value: 5.5 } })`.

## What Was Learned

### 1. AudioParam Properties Are Read-Only Accessors
In native browser Web Audio engines, `node.frequency`, `node.gain`, and `node.Q` are read-only `AudioParam` instances defined on the interface prototype. 
- Attempting `node.frequency = value` or `Object.assign(node, { frequency: ... })` throws a fatal `TypeError: Cannot set property frequency of #<OscillatorNode> which has only a getter` in strict mode.
- Because `playTrackVoices` processes channels sequentially, a runtime exception thrown during `lead` voice synthesis halts subsequent channel evaluation (`chords` and `drums`), causing only the `bass` channel to sound.

### 2. AudioParam Values Must Be Scheduled via Methods
Always mutate parameters via native automation methods:
```typescript
// ❌ WRONG: Throws TypeError on AudioParam getter
const osc = Object.assign(ctx.createOscillator(), { frequency: { value: 440 } });

// ✅ CORRECT: Schedule value on native AudioParam
const osc = ctx.createOscillator();
osc.frequency.setValueAtTime(440, ctx.currentTime);
```

### 3. Test Fakes Must Mirror Browser Accessor Invariants
In-memory unit test doubles (e.g. `FakeOscillatorNode`) must expose `frequency` and `gain` as read-only getters returning `FakeAudioParam` instances so that invalid direct assignment patterns fail fast in automated tests before reaching the browser.
