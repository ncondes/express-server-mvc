import { readFileSync } from "fs";
import { join } from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

export const readDb = () => {
  // get data from db
  const file = readFileSync(join(__dirname, "..", "db", "data.json"));
  const data = JSON.parse(file);
  return data;
};
