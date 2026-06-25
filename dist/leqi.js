import { LEQI_API_SNAPSHOT } from "./leqi-api-snapshot.js";
import { LEQI_REQDTO_TEMPLATES } from "./leqi-reqdto-templates.js";
import { shellQuote } from "./utils.js";
export const DEFAULT_LEQI_ENDPOINT = "http://tax-api-proxy-server.tax-digital.svc.cluster.local:8080/leqi/proxy/invoke";
export const DEFAULT_LEQI_RUNNER_WORKLOAD = "tax-api-proxy-server";
export const DEFAULT_LEQI_TAX_PAYER_NO = "91150100397352740W";
export function listLeqiApis() {
    return [...LEQI_API_SNAPSHOT];
}
export function listLeqiReqDtoTemplates() {
    return [...LEQI_REQDTO_TEMPLATES];
}
export function findLeqiReqDtoTemplate(api) {
    return LEQI_REQDTO_TEMPLATES.find((template) => template.apiIdentity === api.apiIdentity);
}
export function parseReqDtoJson(value) {
    const parsed = JSON.parse(value);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
        if (!Array.isArray(parsed)) {
            throw new Error("reqDTO 必须是 JSON object 或 array");
        }
    }
    return parsed;
}
export function buildLeqiReqDtoDefault(api, taxPayerNo) {
    const template = findLeqiReqDtoTemplate(api);
    if (!template) {
        return undefined;
    }
    return fillReqDtoDefaults(cloneJson(template.template), taxPayerNo);
}
export function formatLeqiReqDtoFieldGuide(template) {
    const lines = [`字段说明（来源：${formatLeqiReqDtoTemplateSource(template)}）`];
    for (const field of template.fields) {
        const required = field.required ? `必填:${field.required}` : "必填:-";
        const type = [field.type, field.length ? `(${field.length})` : ""].join("");
        const detail = [type || "-", required, field.description].filter(Boolean).join("  ");
        lines.push(`- ${field.key}  ${field.name || "-"}  ${truncateText(detail, 110)}`);
    }
    return lines.join("\n");
}
export function formatLeqiReqDtoTemplateSummary(template) {
    const requiredCount = template.fields.filter((field) => field.required === "是").length;
    return [
        `文档模板：${formatLeqiReqDtoTemplateSource(template)}`,
        `字段：${template.fields.length} 个，必填：${requiredCount} 个`
    ].join("\n");
}
export function formatLeqiReqDtoTemplateSource(template) {
    return `${template.sourceDoc} / ${template.sectionTitle}`;
}
export function buildLeqiInvokePayload(input) {
    return {
        apiIdentity: input.api.apiIdentity,
        taxPayerNo: input.taxPayerNo,
        testMode: input.testMode,
        reqDTO: input.reqDTO
    };
}
export function buildLeqiCurl(endpoint, payload) {
    const formattedPayload = JSON.stringify(payload, null, 2);
    return [
        `curl ${shellQuote(endpoint)} \\`,
        `  -H ${shellQuote("Content-Type: application/json")} \\`,
        `  --data-raw ${shellQuote(formattedPayload)}`
    ].join("\n");
}
export function buildLeqiExecCurlCommand(endpoint, payload) {
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
export function formatLeqiApiChoice(api) {
    const remark = api.remarks && api.remarks !== api.apiName ? `  ${api.remarks}` : "";
    const moduleText = api.module ? `  ${api.module}` : "";
    return `${api.apiIdentity}  ${api.apiName}${moduleText}${remark}`;
}
function cloneJson(value) {
    return JSON.parse(JSON.stringify(value));
}
function fillReqDtoDefaults(value, taxPayerNo, key) {
    if (key === "nsrsbh") {
        return taxPayerNo;
    }
    if (Array.isArray(value)) {
        return value.map((item) => fillReqDtoDefaults(item, taxPayerNo));
    }
    if (isJsonObject(value)) {
        const result = {};
        for (const [childKey, childValue] of Object.entries(value)) {
            result[childKey] = fillReqDtoDefaults(childValue, taxPayerNo, childKey);
        }
        return result;
    }
    return value;
}
function isJsonObject(value) {
    return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}
function truncateText(value, maxLength) {
    if (value.length <= maxLength) {
        return value;
    }
    return `${value.slice(0, maxLength - 1)}…`;
}
//# sourceMappingURL=leqi.js.map