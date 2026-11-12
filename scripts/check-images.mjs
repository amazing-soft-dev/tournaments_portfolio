import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const skip = new Set(["node_modules", ".next", "out", ".git"]);
const pattern = /\/images\/[A-Za-z0-9._-]+\.(?:webp|jpg|jpeg|png)/g;

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    if (skip.has(entry)) continue;
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) {
      walk(path, files);
    } else if (/\.(?:tsx|ts|jsx|js|css)$/.test(entry)) {
      files.push(path);
    }
  }
  return files;
}

const counts = new Map();
for (const file of walk("src")) {
  const text = readFileSync(file, "utf8");
  for (const match of text.matchAll(pattern)) {
    const image = match[0];
    counts.set(image, (counts.get(image) ?? 0) + 1);
  }
}

let failed = false;
for (const [image, count] of counts) {
  if (count > 1) {
    console.error(`${image} is used ${count} times`);
    failed = true;
  }
}

if (failed) process.exit(1);
console.log(`Checked ${counts.size} image references`);
