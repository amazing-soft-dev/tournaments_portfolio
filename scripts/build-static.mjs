import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";

const result = spawnSync(
  process.execPath,
  ["node_modules/next/dist/bin/next", "build"],
  {
    stdio: "inherit",
    env: { ...process.env, NEXT_OUTPUT: "export" },
  },
);

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}

const required = ["out/index.html"];
for (const file of required) {
  if (!existsSync(file)) {
    console.error(`Missing ${file}`);
    process.exit(1);
  }
}

if (existsSync("out/api")) {
  console.error("out/api must not exist on the static export");
  process.exit(1);
}

console.log("Static export looks right");
