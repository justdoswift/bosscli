import type { DateSelection } from "./types.js";
export declare function assertDateString(value: string): string;
export declare function buildDateSelection(options: {
    date?: string;
    from?: string;
    to?: string;
    recentDays?: number;
    today?: Date;
}): DateSelection;
export declare function buildDateRange(from: string, to: string): DateSelection;
export declare function buildContentDateRegex(dates: string[]): string;
export declare function formatLocalDate(date: Date): string;
export declare function addDays(date: Date, days: number): Date;
