import { formatBytes } from "./utils.js";

export interface ProgressRenderOptions {
  label: string;
  currentBytes: number;
  totalBytes?: number;
  startedAt?: number;
  now?: number;
  frame?: number;
  width?: number;
  extra?: string;
}

const DEFAULT_WIDTH = 24;

export class ProgressBar {
  private readonly startedAt = Date.now();
  private frame = 0;
  private lastText = "";

  constructor(
    private readonly enabled = process.stderr.isTTY,
    private readonly width = DEFAULT_WIDTH
  ) {}

  update(options: Omit<ProgressRenderOptions, "startedAt" | "now" | "frame" | "width">): void {
    const text = formatProgressLine({
      ...options,
      startedAt: this.startedAt,
      now: Date.now(),
      frame: this.frame,
      width: this.width
    });
    this.frame += 1;

    if (!this.enabled) {
      this.lastText = text;
      return;
    }

    process.stderr.write(`\r${text.padEnd(this.lastText.length)}`);
    this.lastText = text;
  }

  done(message: string): void {
    if (this.enabled && this.lastText) {
      process.stderr.write(`\r${message.padEnd(this.lastText.length)}\n`);
      this.lastText = "";
      return;
    }

    console.log(message);
  }
}

export function formatProgressLine(options: ProgressRenderOptions): string {
  const now = options.now ?? Date.now();
  const startedAt = options.startedAt ?? now;
  const elapsedMs = Math.max(0, now - startedAt);
  const elapsedSeconds = Math.max(0.001, elapsedMs / 1000);
  const width = options.width ?? DEFAULT_WIDTH;
  const currentBytes = Math.max(0, options.currentBytes);
  const rate = currentBytes / elapsedSeconds;
  const hasTotal = typeof options.totalBytes === "number" && options.totalBytes > 0;
  const bar = hasTotal
    ? renderKnownBar(currentBytes, options.totalBytes as number, width)
    : renderUnknownBar(options.frame ?? 0, width);
  const percent = hasTotal
    ? `${Math.min(100, (currentBytes / (options.totalBytes as number)) * 100).toFixed(1)}% `
    : "";
  const amount = hasTotal
    ? `${formatBytes(currentBytes)}/${formatBytes(options.totalBytes as number)}`
    : formatBytes(currentBytes);
  const extra = options.extra ? `  ${options.extra}` : "";

  return `${options.label} ${bar} ${percent}${amount}  ${formatBytes(rate)}/s  ${formatDuration(elapsedMs)}${extra}`;
}

function renderKnownBar(currentBytes: number, totalBytes: number, width: number): string {
  const ratio = Math.min(1, Math.max(0, currentBytes / totalBytes));
  const filled = Math.min(width, Math.round(ratio * width));
  return `[${"#".repeat(filled)}${"-".repeat(width - filled)}]`;
}

function renderUnknownBar(frame: number, width: number): string {
  const safeWidth = Math.max(3, width);
  const markerWidth = Math.max(3, Math.floor(safeWidth / 5));
  const maxStart = safeWidth - markerWidth;
  const start = Math.abs(frame % (maxStart + 1));
  return `[${"-".repeat(start)}${"#".repeat(markerWidth)}${"-".repeat(maxStart - start)}]`;
}

function formatDuration(elapsedMs: number): string {
  const seconds = Math.max(0, Math.round(elapsedMs / 1000));

  if (seconds < 60) {
    return `${seconds}s`;
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}m${String(remainingSeconds).padStart(2, "0")}s`;
}

export function progressBytes(bytes: number): string {
  return `已下载 ${formatBytes(bytes)}`;
}
