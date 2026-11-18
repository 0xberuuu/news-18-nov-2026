// Entry for make.fun news-image-20261118.
// Copies the pre-rendered 18 November 2026 world-news infographic
// (entry.png, drawn by the build session) into the output directory.
// Runs with no network and writes identical bytes on every run.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
const bytes = readFileSync(join(here, "entry.png"));
writeFileSync(outPath, bytes);
if (readFileSync(outPath).length !== bytes.length) {
  throw new Error("entry.png copy failed verification");
}
console.log(`wrote ${outPath} (${bytes.length} bytes)`);
