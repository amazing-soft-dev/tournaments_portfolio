import { spawnSync } from "node:child_process";
import { existsSync, renameSync } from "node:fs";

const apiDir = "src/app/api";
const parkedDir = "src/app/_api_parked";

function moveDir(from, to) {
  if (process.platform === "win32") {
    const result = spawnSync(
      "powershell",
      ["-NoProfile", "-Command", `Move-Item -LiteralPath '${from}' -Destination '${to}'`],
      { stdio: "inherit" },
    );
    if (result.status !== 0) process.exit(result.status ?? 1);
    return;
  }
  renameSync(from, to);
}

const moved = existsSync(apiDir);

if (moved) moveDir(apiDir, parkedDir);

let status = 1;

try {
  const result = spawnSync(process.execPath, ["node_modules/next/dist/bin/next", "build"], {
    stdio: "inherit",
    env: { ...process.env, NEXT_OUTPUT: "export" },
  });
  status = result.status ?? 1;

  if (status === 0) {
    const required = [
      ["out/index.html"],
      ["out/contact.html", "out/contact/index.html"],
      ["out/projects/flowline.html", "out/projects/flowline/index.html"],
      ["out/sitemap.xml"],
      ["out/icon-light.png"],
      ["out/icon-dark.png"],
      ["out/images/portrait-hero-960.webp"],
      ["out/images/portrait-contact-960.webp"],
    ];
    for (const options of required) {
      if (!options.some((file) => existsSync(file))) {
        console.error(`Missing ${options.join(" or ")}`);
        status = 1;
      }
    }
    if (existsSync("out/api")) {
      console.error("out/api must not exist on the static export");
      status = 1;
    }
    if (status === 0) console.log("Static export looks right");
  }
} finally {
  if (moved && existsSync(parkedDir)) moveDir(parkedDir, apiDir);
}

process.exit(status);
