import { formatBytes } from "./utils.js";
const DEFAULT_WIDTH = 24;
export class ProgressBar {
    enabled;
    width;
    startedAt = Date.now();
    frame = 0;
    lastText = "";
    constructor(enabled = process.stderr.isTTY, width = DEFAULT_WIDTH) {
        this.enabled = enabled;
        this.width = width;
    }
    update(options) {
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
    done(message) {
        if (this.enabled && this.lastText) {
            process.stderr.write(`\r${message.padEnd(this.lastText.length)}\n`);
            this.lastText = "";
            return;
        }
        console.log(message);
    }
}
export function formatProgressLine(options) {
    const now = options.now ?? Date.now();
    const startedAt = options.startedAt ?? now;
    const elapsedMs = Math.max(0, now - startedAt);
    const elapsedSeconds = Math.max(0.001, elapsedMs / 1000);
    const width = options.width ?? DEFAULT_WIDTH;
    const currentBytes = Math.max(0, options.currentBytes);
    const rate = currentBytes / elapsedSeconds;
    const hasTotal = typeof options.totalBytes === "number" && options.totalBytes > 0;
    const bar = hasTotal
        ? renderKnownBar(currentBytes, options.totalBytes, width)
        : renderUnknownBar(options.frame ?? 0, width);
    const percent = hasTotal
        ? `${Math.min(100, (currentBytes / options.totalBytes) * 100).toFixed(1)}% `
        : "";
    const amount = hasTotal
        ? `${formatBytes(currentBytes)}/${formatBytes(options.totalBytes)}`
        : formatBytes(currentBytes);
    const extra = options.extra ? `  ${options.extra}` : "";
    return `${options.label} ${bar} ${percent}${amount}  ${formatBytes(rate)}/s  ${formatDuration(elapsedMs)}${extra}`;
}
function renderKnownBar(currentBytes, totalBytes, width) {
    const ratio = Math.min(1, Math.max(0, currentBytes / totalBytes));
    const filled = Math.min(width, Math.round(ratio * width));
    return `[${"#".repeat(filled)}${"-".repeat(width - filled)}]`;
}
function renderUnknownBar(frame, width) {
    const safeWidth = Math.max(3, width);
    const markerWidth = Math.max(3, Math.floor(safeWidth / 5));
    const maxStart = safeWidth - markerWidth;
    const start = Math.abs(frame % (maxStart + 1));
    return `[${"-".repeat(start)}${"#".repeat(markerWidth)}${"-".repeat(maxStart - start)}]`;
}
function formatDuration(elapsedMs) {
    const seconds = Math.max(0, Math.round(elapsedMs / 1000));
    if (seconds < 60) {
        return `${seconds}s`;
    }
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m${String(remainingSeconds).padStart(2, "0")}s`;
}
export function progressBytes(bytes) {
    return `已下载 ${formatBytes(bytes)}`;
}
//# sourceMappingURL=progress.js.map