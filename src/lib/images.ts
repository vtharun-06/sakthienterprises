import fs from "node:fs";
import path from "node:path";

// Photos are optional. Components render a drawing instead when a file is missing,
// so the site never shows a broken image.
export function hasImage(name: string): boolean {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", "images", name));
  } catch {
    return false;
  }
}
