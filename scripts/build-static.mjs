import { spawnSync } from "node:child_process";
import { existsSync, renameSync } from "node:fs";

const apiDir = "src/app/api";
const parkedDir = "src/app/_api_parked";
const moved = existsSync(apiDir);

if (moved) renameSync(apiDir, parkedDir);

let status = 1;

try {
  const result = spawnSync(process.execPath, ["node_modules/next/dist/bin/next", "build"], {
    stdio: "inherit",
    env: { ...process.env, NEXT_OUTPUT: "export" },
  });
  status = result.status ?? 1;

  if (status === 0) {
    if (!existsSync("out/index.html")) {
      console.error("Missing out/index.html");
      status = 1;
    }
    if (existsSync("out/api")) {
      console.error("out/api must not exist on the static export");
      status = 1;
    }
    if (status === 0) console.log("Static export looks right");
  }
} finally {
  if (moved && existsSync(parkedDir)) renameSync(parkedDir, apiDir);
}

process.exit(status);
