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
export declare class ProgressBar {
    private readonly enabled;
    private readonly width;
    private readonly startedAt;
    private frame;
    private lastText;
    constructor(enabled?: boolean, width?: number);
    update(options: Omit<ProgressRenderOptions, "startedAt" | "now" | "frame" | "width">): void;
    done(message: string): void;
}
export declare function formatProgressLine(options: ProgressRenderOptions): string;
export declare function progressBytes(bytes: number): string;
