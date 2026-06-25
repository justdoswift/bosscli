import { LEQI_API_SNAPSHOT } from "./leqi-api-snapshot.js";
import { shellQuote } from "./utils.js";
export const DEFAULT_LEQI_ENDPOINT = "http://tax-api-proxy-server.tax-digital.svc.cluster.local:8080/leqi/proxy/invoke";
export const DEFAULT_LEQI_RUNNER_WORKLOAD = "tax-api-proxy-server";
export const DEFAULT_LEQI_TAX_PAYER_NO = "91150100397352740W";
export function listLeqiApis() {
    return [...LEQI_API_SNAPSHOT];
}
export function parseReqDtoJson(value) {
    const parsed = JSON.parse(value);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
        throw new Error("reqDTO 必须是 JSON object");
    }
    return parsed;
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
    return [
        `curl ${shellQuote(endpoint)} \\`,
        `  -H ${shellQuote("Content-Type: application/json")} \\`,
        `  --data-raw ${shellQuote(JSON.stringify(payload))}`
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
//# sourceMappingURL=leqi.js.map