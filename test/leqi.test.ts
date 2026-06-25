import { describe, expect, it } from "vitest";

import {
  buildLeqiCurl,
  buildLeqiExecCurlCommand,
  buildLeqiInvokePayload,
  buildLeqiReqDtoDefault,
  findLeqiReqDtoTemplate,
  formatLeqiApiChoice,
  formatLeqiReqDtoTemplateSummary,
  formatLeqiReqDtoTemplateSource,
  listLeqiApis,
  listLeqiReqDtoTemplates,
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

    const curl = buildLeqiCurl("http://proxy/leqi/proxy/invoke", payload);

    expect(curl).toContain("--data-raw '{\n");
    expect(curl).toContain('  "apiIdentity": "200000001"');
    expect(curl).toContain('  "reqDTO": {\n    "sqlx": "1"\n  }');
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
    expect(parseReqDtoJson("[{\"sqed\":100}]")).toEqual([{ sqed: 100 }]);
    expect(() => parseReqDtoJson("\"bad\"")).toThrow("reqDTO 必须是 JSON object 或 array");
  });

  it("formats api choices", () => {
    expect(api).toBeDefined();
    expect(formatLeqiApiChoice(api as NonNullable<typeof api>)).toBe("200000001  下载退回授信额度");
  });

  it("loads reqDTO templates from the embedded document snapshot", () => {
    const templates = listLeqiReqDtoTemplates();
    const motorCertificateApi = listLeqiApis().find((item) => item.apiIdentity === "10000000219");

    expect(templates.length).toBeGreaterThan(80);
    expect(motorCertificateApi).toBeDefined();
    const template = findLeqiReqDtoTemplate(motorCertificateApi as NonNullable<typeof motorCertificateApi>);

    expect(template).toMatchObject({
      apiIdentity: "10000000219",
      sourceDoc: "开票能力/乐企平台数字化电子发票（机动车）开票能力说明文档-V2.001.docx",
      sectionTitle: "9.查询机动车合格证信息"
    });
    expect(template?.fields).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ key: "nsrsbh", required: "是" }),
        expect.objectContaining({ key: "clsbdh", required: "是" })
      ])
    );
  });

  it("builds default reqDTO from templates and fills nsrsbh", () => {
    const motorCertificateApi = listLeqiApis().find((item) => item.apiIdentity === "10000000219");

    expect(motorCertificateApi).toBeDefined();
    expect(
      buildLeqiReqDtoDefault(motorCertificateApi as NonNullable<typeof motorCertificateApi>, "91150100397352740W")
    ).toEqual({
      nsrsbh: "91150100397352740W",
      clsbdh: ""
    });
  });

  it("keeps nested upload templates from document examples", () => {
    const realEstateUploadApi = listLeqiApis().find((item) => item.apiIdentity === "10000000105");

    expect(realEstateUploadApi).toBeDefined();
    const template = findLeqiReqDtoTemplate(realEstateUploadApi as NonNullable<typeof realEstateUploadApi>);
    const defaultReqDto = buildLeqiReqDtoDefault(
      realEstateUploadApi as NonNullable<typeof realEstateUploadApi>,
      "91150100397352740W"
    );

    expect(template?.fields.length).toBeGreaterThan(90);
    expect(formatLeqiReqDtoTemplateSource(template as NonNullable<typeof template>)).toBe(
      "开票能力/乐企数字化电子发票（不动产销售）开票能力说明文档-V2.012.docx / 12.不动产销售发票上传"
    );
    expect(Array.isArray(defaultReqDto)).toBe(true);
    expect(JSON.stringify(defaultReqDto)).toContain("fpmxList");
  });

  it("formats reqDTO template summaries without dumping field tables", () => {
    const motorCertificateApi = listLeqiApis().find((item) => item.apiIdentity === "10000000219");
    const template = findLeqiReqDtoTemplate(motorCertificateApi as NonNullable<typeof motorCertificateApi>);

    expect(template).toBeDefined();
    const summary = formatLeqiReqDtoTemplateSummary(template as NonNullable<typeof template>);
    expect(summary).toContain("字段：2 个，必填：2 个");
    expect(summary).not.toContain("示例字段");
    expect(summary).not.toContain("| 字段 | 名称 | 类型 | 必填 |");
  });
});
