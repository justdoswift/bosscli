import { describe, expect, it } from "vitest";

import { clipboardCommands, copyToClipboard, type ClipboardCommand } from "../src/clipboard.js";

describe("clipboard", () => {
  it("selects platform clipboard commands", () => {
    expect(clipboardCommands("darwin")).toEqual([{ command: "pbcopy", args: [] }]);
    expect(clipboardCommands("win32")).toEqual([{ command: "clip", args: [] }]);
    expect(clipboardCommands("linux").map((item) => item.command)).toEqual(["wl-copy", "xclip", "xsel"]);
  });

  it("copies with the first working command", async () => {
    const attempts: ClipboardCommand[] = [];
    const result = await copyToClipboard("curl http://example.test", {
      platform: "linux",
      runner: async (command, input) => {
        attempts.push(command);
        expect(input).toBe("curl http://example.test");
        if (command.command === "wl-copy") {
          throw new Error("missing");
        }
      }
    });

    expect(result).toEqual({ copied: true, command: "xclip -selection clipboard" });
    expect(attempts.map((item) => item.command)).toEqual(["wl-copy", "xclip"]);
  });

  it("reports copy failures without throwing", async () => {
    const result = await copyToClipboard("curl http://example.test", {
      platform: "darwin",
      runner: async () => {
        throw new Error("pbcopy missing");
      }
    });

    expect(result.copied).toBe(false);
    expect(result.error).toContain("pbcopy: pbcopy missing");
  });
});
