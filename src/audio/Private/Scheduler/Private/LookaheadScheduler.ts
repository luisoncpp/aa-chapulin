export type StepHandler = (step: number, when: number) => void;

export interface SchedulerStart {
  ctx: { currentTime: number };
  bpm: number;
  fromStep: number;
  /** Seconds from `ctx.currentTime` before the first scheduled step. */
  leadInSec?: number;
}

const TICK_MS = 25;
const HORIZON_SEC = 0.1;
const LATE_SEC = 0.05;

/**
 * Wall-clock wakeups schedule steps on the audio clock.
 * The timer only decides when to look; each note's `when` is exact.
 */
export class LookaheadScheduler {
  private timer: ReturnType<typeof setInterval> | null = null;
  private ctx: { currentTime: number } | null = null;
  private bpm = 120;
  private nextTime = 0;
  private scheduledStep = 0;
  private anchorStep = 0;
  private anchorWhen = 0;

  constructor(private readonly onStep: StepHandler) {}

  public isRunning(): boolean {
    return this.timer !== null;
  }

  public start(opts: SchedulerStart): void {
    this.stop();
    this.ctx = opts.ctx;
    this.bpm = opts.bpm > 0 ? opts.bpm : 120;
    this.scheduledStep = opts.fromStep;
    this.anchorStep = opts.fromStep;
    this.anchorWhen = opts.ctx.currentTime + (opts.leadInSec ?? 0);
    this.nextTime = this.anchorWhen;
    this.timer = setInterval(/*scheduleDueSteps*/ () => {
      this.tick();
    }, /*delayInMs=*/ TICK_MS);
    this.tick();
  }

  public stop(): void {
    if (this.timer) clearInterval(this.timer);
    this.timer = null;
  }

  public setBpm(bpm: number): void {
    if (bpm <= 0 || !this.ctx) return;
    const step = this.gridStep();
    this.bpm = bpm;
    this.anchorStep = step;
    this.anchorWhen = this.ctx.currentTime;
  }

  /** Next tick plays `step` at `now` instead of whatever was queued. */
  public jumpTo(step: number, now: number): void {
    this.scheduledStep = step;
    this.nextTime = now;
    this.anchorStep = step;
    this.anchorWhen = now;
  }

  public audibleStep(length: number): number {
    if (!this.ctx || length <= 0) return 0;
    return Math.max(0, this.gridStep()) % length;
  }

  private tick(): void {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    if (this.nextTime < now - LATE_SEC) {
      this.nextTime = now;
      this.anchorStep = this.scheduledStep;
      this.anchorWhen = now;
    }
    const horizon = now + HORIZON_SEC;
    while (this.nextTime < horizon) {
      this.onStep(this.scheduledStep, this.nextTime);
      this.nextTime += this.stepSec();
      this.scheduledStep++;
    }
  }

  private gridStep(): number {
    if (!this.ctx) return this.anchorStep;
    const quot = (this.ctx.currentTime - this.anchorWhen) / this.stepSec();
    if (quot < 0) return this.anchorStep;
    return this.anchorStep + Math.floor(quot + 1e-6);
  }

  private stepSec(): number {
    return 60 / this.bpm / 4;
  }
}
