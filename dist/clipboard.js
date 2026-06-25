import { spawn } from "node:child_process";
export function clipboardCommands(platform = process.platform) {
    if (platform === "darwin") {
        return [{ command: "pbcopy", args: [] }];
    }
    if (platform === "win32") {
        return [{ command: "clip", args: [] }];
    }
    return [
        { command: "wl-copy", args: [] },
        { command: "xclip", args: ["-selection", "clipboard"] },
        { command: "xsel", args: ["--clipboard", "--input"] }
    ];
}
export async function copyToClipboard(input, options = {}) {
    const runner = options.runner ?? runClipboardCommand;
    const errors = [];
    for (const command of clipboardCommands(options.platform)) {
        try {
            await runner(command, input);
            return {
                copied: true,
                command: [command.command, ...command.args].join(" ")
            };
        }
        catch (error) {
            errors.push(`${command.command}: ${error.message}`);
        }
    }
    return {
        copied: false,
        error: errors.join("; ") || "没有可用的剪切板命令"
    };
}
async function runClipboardCommand(command, input) {
    await new Promise((resolve, reject) => {
        const child = spawn(command.command, command.args, {
            stdio: ["pipe", "ignore", "pipe"]
        });
        const stderrChunks = [];
        child.stderr.on("data", (chunk) => {
            stderrChunks.push(chunk);
        });
        child.on("error", reject);
        child.on("close", (code) => {
            if (code === 0) {
                resolve();
                return;
            }
            const stderr = Buffer.concat(stderrChunks).toString("utf8").trim();
            reject(new Error(stderr || `退出码 ${code}`));
        });
        child.stdin.end(input);
    });
}
//# sourceMappingURL=clipboard.js.map