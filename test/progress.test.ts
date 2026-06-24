import { describe, expect, it } from "vitest";

import { formatProgressLine } from "../src/progress.js";

describe("progress", () => {
  it("renders known-total progress with percent, total, current, and speed", () => {
    expect(
      formatProgressLine({
        label: "历史日志",
        currentBytes: 512,
        totalBytes: 1024,
        startedAt: 0,
        now: 1000,
        frame: 0,
        width: 10
      })
    ).toBe("历史日志 [#####-----] 50.0% 512 B/1.0 KiB  512 B/s  1s");
  });

  it("renders unknown-total progress without percent", () => {
    expect(
      formatProgressLine({
        label: "当前日志",
        currentBytes: 2048,
        startedAt: 0,
        now: 2000,
        frame: 1,
        width: 10
      })
    ).toBe("当前日志 [-###------] 2.0 KiB  1.0 KiB/s  2s");
  });
});
