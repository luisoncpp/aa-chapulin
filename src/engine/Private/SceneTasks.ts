// @Architecture(descriptionShort="Cancels delayed scene work when loading another game")
const epochs = new WeakMap<HTMLElement, number>();

export function invalidateSceneTasks(stage: HTMLElement): void {
  epochs.set(stage, (epochs.get(stage) ?? 0) + 1);
}

export function guardSceneTask(stage: HTMLElement, task: () => void): () => void {
  const epoch = epochs.get(stage) ?? 0;
  return () => { if ((epochs.get(stage) ?? 0) === epoch) task(); };
}

export function scheduleSceneTask(stage: HTMLElement, task: () => void, delayMs: number): void {
  setTimeout(guardSceneTask(stage, task), delayMs);
}
