export interface ClipboardCommand {
    command: string;
    args: string[];
}
export interface ClipboardResult {
    copied: boolean;
    command?: string;
    error?: string;
}
export type ClipboardRunner = (command: ClipboardCommand, input: string) => Promise<void>;
export declare function clipboardCommands(platform?: NodeJS.Platform): ClipboardCommand[];
export declare function copyToClipboard(input: string, options?: {
    platform?: NodeJS.Platform;
    runner?: ClipboardRunner;
}): Promise<ClipboardResult>;
