import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import {
  chooseDefaultProfile,
  readProfiles,
  removeProfile,
  setDefaultProfile,
  upsertProfile
} from "../src/profile-store.js";

describe("profile store", () => {
  let dir: string;
  let filePath: string;

  beforeEach(async () => {
    dir = await fs.mkdtemp(path.join(os.tmpdir(), "kslog-profile-"));
    filePath = path.join(dir, "profiles.json");
  });

  afterEach(async () => {
    await fs.rm(dir, { recursive: true, force: true });
  });

  it("creates and reads profiles with 0600 permissions", async () => {
    await upsertProfile(
      {
        name: "测试环境",
        url: "192.168.7.191:30880",
        username: "admin",
        password: "secret",
        setDefault: true
      },
      filePath
    );

    const config = await readProfiles(filePath);
    const stat = await fs.stat(filePath);

    expect(config.defaultProfile).toBe("测试环境");
    expect(config.profiles[0]).toMatchObject({
      name: "测试环境",
      url: "http://192.168.7.191:30880",
      username: "admin",
      password: "secret"
    });
    expect(stat.mode & 0o777).toBe(0o600);
  });

  it("updates, defaults, and removes profiles", async () => {
    await upsertProfile({ name: "开发", url: "http://dev", username: "u", password: "p" }, filePath);
    await upsertProfile({ name: "生产", url: "http://prod", username: "u2", password: "p2" }, filePath);
    await setDefaultProfile("生产", filePath);

    let config = await readProfiles(filePath);
    expect(chooseDefaultProfile(config)?.name).toBe("生产");

    expect(await removeProfile("生产", filePath)).toBe(true);
    config = await readProfiles(filePath);
    expect(config.defaultProfile).toBe("开发");
  });
});
