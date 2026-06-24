import type { ClientOptions, DownloadLogOptions, ExecOptions, ExecResult, KubeTarget, LoginConfig, PodSummary, StreamExecOptions } from "./types.js";
export declare class KubeSphereClient {
    readonly baseUrl: string;
    private readonly cookieJar;
    private readonly dispatcher?;
    private readonly insecure;
    constructor(options: ClientOptions);
    login(username: string, password: string): Promise<void>;
    getLoginConfig(): Promise<LoginConfig>;
    listNamespaces(): Promise<string[]>;
    listTargets(namespace: string): Promise<KubeTarget[]>;
    resolveTarget(namespace: string, targetName: string): Promise<KubeTarget>;
    listPods(namespace: string, selector: Record<string, string>): Promise<PodSummary[]>;
    downloadLog(options: DownloadLogOptions): Promise<void>;
    execCommand(options: ExecOptions): Promise<ExecResult>;
    streamExecOutput(options: StreamExecOptions): Promise<void>;
    private toPodSummary;
    private fetchJson;
    private request;
    private buildExecWebSocketUrl;
    private handleExecMessage;
    private storeCookies;
}
