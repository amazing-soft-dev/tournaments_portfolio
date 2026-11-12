import { mkdirSync, readdirSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const widths = [640, 960, 1400];
const sourceDir = "images/source";
const outDir = "public/images";
mkdirSync(outDir, { recursive: true });

const files = readdirSync(sourceDir).filter((file) => file.endsWith(".jpg"));

for (const file of files) {
  const stem = file.slice(0, -4);
  for (const width of widths) {
    await sharp(join(sourceDir, file))
      .resize({ width, withoutEnlargement: false })
      .webp({ quality: 78 })
      .toFile(join(outDir, `${stem}-${width}.webp`));
  }
}

await sharp({
  create: { width: 32, height: 32, channels: 3, background: "#e4e6e7" },
})
  .png()
  .toFile("public/icon-light.png");

await sharp({
  create: { width: 32, height: 32, channels: 3, background: "#1e1e1e" },
})
  .png()
  .toFile("public/icon-dark.png");

console.log(`Wrote ${files.length * widths.length} WebP files`);
