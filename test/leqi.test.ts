import { describe, expect, it } from "vitest";

import {
  buildLeqiCurl,
  buildLeqiExecCurlCommand,
  buildLeqiInvokePayload,
  formatLeqiApiChoice,
  listLeqiApis,
  parseReqDtoJson
} from "../src/leqi.js";

const api = listLeqiApis().find((item) => item.apiIdentity === "200000001");

describe("leqi", () => {
  it("loads the embedded interface snapshot", () => {
    const apis = listLeqiApis();

    expect(apis).toHaveLength(131);
    expect(api).toMatchObject({
      apiIdentity: "200000001",
      apiName: "下载退回授信额度"
    });
  });

  it("builds invoke payloads", () => {
    expect(api).toBeDefined();
    expect(
      buildLeqiInvokePayload({
        api: api as NonNullable<typeof api>,
        taxPayerNo: "91150100397352740W",
        testMode: 0,
        reqDTO: { sqed: 20000000 }
      })
    ).toEqual({
      apiIdentity: "200000001",
      taxPayerNo: "91150100397352740W",
      testMode: 0,
      reqDTO: { sqed: 20000000 }
    });
  });

  it("builds copyable curl commands", () => {
    expect(api).toBeDefined();
    const payload = buildLeqiInvokePayload({
      api: api as NonNullable<typeof api>,
      taxPayerNo: "91150100397352740W",
      testMode: 0,
      reqDTO: { sqlx: "1" }
    });

    expect(buildLeqiCurl("http://proxy/leqi/proxy/invoke", payload)).toContain(
      "--data-raw '{\"apiIdentity\":\"200000001\""
    );
  });

  it("builds exec curl commands", () => {
    expect(api).toBeDefined();
    const payload = buildLeqiInvokePayload({
      api: api as NonNullable<typeof api>,
      taxPayerNo: "91150100397352740W",
      testMode: 0,
      reqDTO: {}
    });

    expect(buildLeqiExecCurlCommand("http://proxy/leqi/proxy/invoke", payload)).toEqual([
      "sh",
      "-lc",
      "curl -sS 'http://proxy/leqi/proxy/invoke' -H 'Content-Type: application/json' --data-raw '{\"apiIdentity\":\"200000001\",\"taxPayerNo\":\"91150100397352740W\",\"testMode\":0,\"reqDTO\":{}}'"
    ]);
  });

  it("parses reqDTO JSON objects", () => {
    expect(parseReqDtoJson("{\"sqed\":100}")).toEqual({ sqed: 100 });
    expect(() => parseReqDtoJson("[]")).toThrow("reqDTO 必须是 JSON object");
  });

  it("formats api choices", () => {
    expect(api).toBeDefined();
    expect(formatLeqiApiChoice(api as NonNullable<typeof api>)).toBe("200000001  下载退回授信额度");
  });
});
