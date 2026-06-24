import { describe, expect, it } from "vitest";

import { preferredNamespace } from "../src/prompts.js";

describe("prompts", () => {
  it("prefers tax-digital when it is available", () => {
    expect(preferredNamespace(["default", "tax-digital", "kubesphere-system"])).toBe("tax-digital");
  });

  it("falls back to the first namespace when tax-digital is unavailable", () => {
    expect(preferredNamespace(["default", "kubesphere-system"])).toBe("default");
  });
});
