import type { LeqiApiInfo, LeqiInvokePayload } from "./types.js";
export declare const DEFAULT_LEQI_ENDPOINT = "http://tax-api-proxy-server.tax-digital.svc.cluster.local:8080/leqi/proxy/invoke";
export declare const DEFAULT_LEQI_RUNNER_WORKLOAD = "tax-api-proxy-server";
export declare const DEFAULT_LEQI_TAX_PAYER_NO = "91150100397352740W";
export declare function listLeqiApis(): LeqiApiInfo[];
export declare function parseReqDtoJson(value: string): Record<string, unknown>;
export declare function buildLeqiInvokePayload(input: {
    api: LeqiApiInfo;
    taxPayerNo: string;
    testMode: number;
    reqDTO: Record<string, unknown>;
}): LeqiInvokePayload;
export declare function buildLeqiCurl(endpoint: string, payload: LeqiInvokePayload): string;
export declare function buildLeqiExecCurlCommand(endpoint: string, payload: LeqiInvokePayload): string[];
export declare function formatLeqiApiChoice(api: LeqiApiInfo): string;
