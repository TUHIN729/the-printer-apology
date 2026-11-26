// The Printer Apology — make.fun program/v1 entry.
// Writes one apology line from an office printer to /output/entry.txt.
// The line must be UTF-8 text of 1–120 characters, not only whitespace.
//
// The line: a genuine apology that still lands the printer's own gripes
// (cheap paper, a staple, a 47-page "urgent" job) with the punch at the
// end — the jam was not an accident, it was a principled choke.

import { mkdirSync, writeFileSync, rmSync, readdirSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Sorry I jammed. You fed me the cheapest paper on Earth, a staple, and a 47-page 'urgent' job — I choked on principle.";

const outDir = "/output";

// Never remove the output directory itself (the grader mounts it
// root-owned); clear only its contents.
mkdirSync(outDir, { recursive: true });
for (const name of readdirSync(outDir)) {
  rmSync(join(outDir, name), { recursive: true, force: true });
}

writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
