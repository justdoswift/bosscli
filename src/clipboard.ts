import { spawn } from "node:child_process";

export interface ClipboardCommand {
  command: string;
  args: string[];
}

export interface ClipboardResult {
  copied: boolean;
  command?: string;
  error?: string;
}

export type ClipboardRunner = (command: ClipboardCommand, input: string) => Promise<void>;

export function clipboardCommands(platform = process.platform): ClipboardCommand[] {
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

export async function copyToClipboard(
  input: string,
  options: {
    platform?: NodeJS.Platform;
    runner?: ClipboardRunner;
  } = {}
): Promise<ClipboardResult> {
  const runner = options.runner ?? runClipboardCommand;
  const errors: string[] = [];

  for (const command of clipboardCommands(options.platform)) {
    try {
      await runner(command, input);
      return {
        copied: true,
        command: [command.command, ...command.args].join(" ")
      };
    } catch (error) {
      errors.push(`${command.command}: ${(error as Error).message}`);
    }
  }

  return {
    copied: false,
    error: errors.join("; ") || "没有可用的剪切板命令"
  };
}

async function runClipboardCommand(command: ClipboardCommand, input: string): Promise<void> {
  await new Promise<void>((resolve, reject) => {
    const child = spawn(command.command, command.args, {
      stdio: ["pipe", "ignore", "pipe"]
    });
    const stderrChunks: Buffer[] = [];

    child.stderr.on("data", (chunk: Buffer) => {
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
