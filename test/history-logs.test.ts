import { describe, expect, it } from "vitest";

import {
  filterHistoryFilesByService,
  parseHistoryFileLine,
  totalKnownSize
} from "../src/history-logs.js";

describe("history logs", () => {
  it("parses history file lines with optional sizes", () => {
    expect(parseHistoryFileLine("82944\t/opt/saas-logs/app.log")).toEqual({
      path: "/opt/saas-logs/app.log",
      size: 82944
    });
    expect(parseHistoryFileLine("/opt/saas-logs/no-size.log")).toEqual({
      path: "/opt/saas-logs/no-size.log"
    });
  });

  it("filters history files by service name using paths", () => {
    const files = [
      { path: "/opt/saas-logs/tax-invoice-business-server/app.log", size: 10 },
      { path: "/opt/saas-logs/other/app.log", size: 20 }
    ];

    expect(filterHistoryFilesByService(files, "tax-invoice-business-server")).toEqual([files[0]]);
  });

  it("returns a total only when every selected file has a known size", () => {
    expect(totalKnownSize([{ path: "a", size: 10 }, { path: "b", size: 20 }])).toBe(30);
    expect(totalKnownSize([{ path: "a", size: 10 }, { path: "b" }])).toBeUndefined();
  });
});
