import { describe, expect, it } from "vitest";

import {
  buildContentDateRegex,
  buildDateRange,
  buildDateSelection
} from "../src/date-utils.js";

describe("date utils", () => {
  it("builds a single date selection", () => {
    expect(buildDateSelection({ date: "2026-06-24" })).toEqual({
      from: "2026-06-24",
      to: "2026-06-24",
      dates: ["2026-06-24"]
    });
  });

  it("expands inclusive date ranges", () => {
    expect(buildDateRange("2026-06-22", "2026-06-24").dates).toEqual([
      "2026-06-22",
      "2026-06-23",
      "2026-06-24"
    ]);
  });

  it("builds grep regex for common date separators", () => {
    expect(buildContentDateRegex(["2026-06-24", "2026-06-25"])).toBe(
      "2026[-/.]06[-/.]24|2026[-/.]06[-/.]25"
    );
  });
});
