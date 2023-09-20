import { writeFileSync } from "fs";
import { join } from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

export const writeDb = (data) => {
  // save data to db
  writeFileSync(join(__dirname, "..", "db", "data.json"), JSON.stringify(data));
};
