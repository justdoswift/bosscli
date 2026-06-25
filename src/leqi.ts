import type { JsonValue, LeqiApiInfo, LeqiInvokePayload, LeqiReqDto, LeqiReqDtoTemplate } from "./types.js";
import { LEQI_API_SNAPSHOT } from "./leqi-api-snapshot.js";
import { LEQI_REQDTO_TEMPLATES } from "./leqi-reqdto-templates.js";
import { shellQuote } from "./utils.js";

export const DEFAULT_LEQI_ENDPOINT =
  "http://tax-api-proxy-server.tax-digital.svc.cluster.local:8080/leqi/proxy/invoke";
export const DEFAULT_LEQI_RUNNER_WORKLOAD = "tax-api-proxy-server";
export const DEFAULT_LEQI_TAX_PAYER_NO = "91150100397352740W";

export function listLeqiApis(): LeqiApiInfo[] {
  return [...LEQI_API_SNAPSHOT];
}

export function listLeqiReqDtoTemplates(): LeqiReqDtoTemplate[] {
  return [...LEQI_REQDTO_TEMPLATES];
}

export function findLeqiReqDtoTemplate(api: LeqiApiInfo): LeqiReqDtoTemplate | undefined {
  return LEQI_REQDTO_TEMPLATES.find((template) => template.apiIdentity === api.apiIdentity);
}

export function parseReqDtoJson(value: string): LeqiReqDto {
  const parsed = JSON.parse(value);

  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    if (!Array.isArray(parsed)) {
      throw new Error("reqDTO 必须是 JSON object 或 array");
    }
  }

  return parsed as LeqiReqDto;
}

export function buildLeqiReqDtoDefault(api: LeqiApiInfo, taxPayerNo: string): LeqiReqDto | undefined {
  const template = findLeqiReqDtoTemplate(api);
  if (!template) {
    return undefined;
  }

  return fillReqDtoDefaults(cloneJson(template.template), taxPayerNo) as LeqiReqDto;
}

export function formatLeqiReqDtoFieldGuide(template: LeqiReqDtoTemplate): string {
  const lines = [`字段说明（来源：${formatLeqiReqDtoTemplateSource(template)}）`];
  for (const field of template.fields) {
    const required = field.required ? `必填:${field.required}` : "必填:-";
    const type = [field.type, field.length ? `(${field.length})` : ""].join("");
    const detail = [type || "-", required, field.description].filter(Boolean).join("  ");
    lines.push(`- ${field.key}  ${field.name || "-"}  ${truncateText(detail, 110)}`);
  }
  return lines.join("\n");
}

export function formatLeqiReqDtoTemplateSummary(template: LeqiReqDtoTemplate): string {
  const requiredCount = template.fields.filter((field) => field.required === "是").length;

  return [
    `文档模板：${formatLeqiReqDtoTemplateSource(template)}`,
    `字段：${template.fields.length} 个，必填：${requiredCount} 个`
  ].join("\n");
}

export function formatLeqiReqDtoTemplateSource(template: LeqiReqDtoTemplate): string {
  return `${template.sourceDoc} / ${template.sectionTitle}`;
}

export function buildLeqiInvokePayload(input: {
  api: LeqiApiInfo;
  taxPayerNo: string;
  testMode: number;
  reqDTO: LeqiReqDto;
}): LeqiInvokePayload {
  return {
    apiIdentity: input.api.apiIdentity,
    taxPayerNo: input.taxPayerNo,
    testMode: input.testMode,
    reqDTO: input.reqDTO
  };
}

export function buildLeqiCurl(endpoint: string, payload: LeqiInvokePayload): string {
  const formattedPayload = JSON.stringify(payload, null, 2);
  return [
    `curl ${shellQuote(endpoint)} \\`,
    `  -H ${shellQuote("Content-Type: application/json")} \\`,
    `  --data-raw ${shellQuote(formattedPayload)}`
  ].join("\n");
}

export function buildLeqiExecCurlCommand(endpoint: string, payload: LeqiInvokePayload): string[] {
  return [
    "sh",
    "-lc",
    [
      "curl -sS",
      shellQuote(endpoint),
      "-H",
      shellQuote("Content-Type: application/json"),
      "--data-raw",
      shellQuote(JSON.stringify(payload))
    ].join(" ")
  ];
}

export function formatLeqiApiChoice(api: LeqiApiInfo): string {
  const remark = api.remarks && api.remarks !== api.apiName ? `  ${api.remarks}` : "";
  const moduleText = api.module ? `  ${api.module}` : "";
  return `${api.apiIdentity}  ${api.apiName}${moduleText}${remark}`;
}

function cloneJson<T extends JsonValue>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

function fillReqDtoDefaults(value: JsonValue, taxPayerNo: string, key?: string): JsonValue {
  if (key === "nsrsbh") {
    return taxPayerNo;
  }

  if (Array.isArray(value)) {
    return value.map((item) => fillReqDtoDefaults(item, taxPayerNo));
  }

  if (isJsonObject(value)) {
    const result: Record<string, JsonValue> = {};
    for (const [childKey, childValue] of Object.entries(value)) {
      result[childKey] = fillReqDtoDefaults(childValue, taxPayerNo, childKey);
    }
    return result;
  }

  return value;
}

function isJsonObject(value: JsonValue): value is Record<string, JsonValue> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function truncateText(value: string, maxLength: number): string {
  if (value.length <= maxLength) {
    return value;
  }
  return `${value.slice(0, maxLength - 1)}…`;
}
