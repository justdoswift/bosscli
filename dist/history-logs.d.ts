import { KubeSphereClient } from "./kubesphere-client.js";
import type { DateSelection, HistoryLogFile } from "./types.js";
export interface HistoryTarget {
    namespace: string;
    pod: string;
    container: string;
    historyPath: string;
}
export interface HistoryExportOptions extends HistoryTarget {
    files: HistoryLogFile[];
    dateSelection: DateSelection;
    outputPath: string;
    onPhase?: (message: string) => void;
    onBytes?: (bytes: number) => void;
    onProgress?: (progress: HistoryExportProgress) => void;
}
export interface HistoryExportResult {
    outputPath: string;
    matchedFiles: number;
    skippedFiles: number;
    scannedFiles: number;
    bytesWritten: number;
}
export interface HistoryExportProgress {
    fileIndex: number;
    fileCount: number;
    currentFile?: string;
    sourceBytesProcessed: number;
    totalSourceBytes?: number;
    bytesWritten: number;
}
export declare function listHistoryFiles(client: KubeSphereClient, target: HistoryTarget): Promise<HistoryLogFile[]>;
export declare function statHistoryFiles(client: KubeSphereClient, target: HistoryTarget, files: string[]): Promise<HistoryLogFile[]>;
export declare function filterHistoryFilesByService(files: HistoryLogFile[], serviceName: string): HistoryLogFile[];
export declare function exportHistoryLogs(client: KubeSphereClient, options: HistoryExportOptions): Promise<HistoryExportResult>;
export declare function parseHistoryFileLine(line: string): HistoryLogFile | undefined;
export declare function totalKnownSize(files: HistoryLogFile[]): number | undefined;
