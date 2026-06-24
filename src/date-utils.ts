import type { DateSelection } from "./types.js";

const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

export function assertDateString(value: string): string {
  if (!DATE_PATTERN.test(value)) {
    throw new Error(`日期格式必须是 YYYY-MM-DD：${value}`);
  }

  const date = parseLocalDate(value);
  if (formatLocalDate(date) !== value) {
    throw new Error(`无效日期：${value}`);
  }

  return value;
}

export function buildDateSelection(options: {
  date?: string;
  from?: string;
  to?: string;
  recentDays?: number;
  today?: Date;
}): DateSelection {
  if (options.date) {
    const date = assertDateString(options.date);
    return { from: date, to: date, dates: [date] };
  }

  if (options.from || options.to) {
    if (!options.from || !options.to) {
      throw new Error("--from 和 --to 需要同时提供");
    }

    return buildDateRange(assertDateString(options.from), assertDateString(options.to));
  }

  if (options.recentDays) {
    if (!Number.isFinite(options.recentDays) || options.recentDays <= 0) {
      throw new Error("--recent-days 需要正整数");
    }

    const today = startOfLocalDay(options.today ?? new Date());
    const from = addDays(today, -(options.recentDays - 1));
    return buildDateRange(formatLocalDate(from), formatLocalDate(today));
  }

  const today = formatLocalDate(options.today ?? new Date());
  return { from: today, to: today, dates: [today] };
}

export function buildDateRange(from: string, to: string): DateSelection {
  const start = parseLocalDate(from);
  const end = parseLocalDate(to);

  if (start.getTime() > end.getTime()) {
    throw new Error(`起始日期不能晚于结束日期：${from} > ${to}`);
  }

  const dates: string[] = [];
  for (let cursor = start; cursor.getTime() <= end.getTime(); cursor = addDays(cursor, 1)) {
    dates.push(formatLocalDate(cursor));
  }

  return {
    from,
    to,
    dates
  };
}

export function buildContentDateRegex(dates: string[]): string {
  return dates
    .map((date) => {
      const [year, month, day] = date.split("-");
      return `${year}[-/.]${month}[-/.]${day}`;
    })
    .join("|");
}

export function formatLocalDate(date: Date): string {
  const pad = (value: number) => String(value).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

export function addDays(date: Date, days: number): Date {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return startOfLocalDay(next);
}

function parseLocalDate(value: string): Date {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function startOfLocalDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}
