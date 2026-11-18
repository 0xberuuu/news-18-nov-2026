// Entry for make.fun news-image-20261118.
// Copies the pre-rendered 18 November 2026 world-news infographic
// (entry.png, drawn by the build session) into the output directory.
// Runs with no network and writes identical bytes on every run.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
