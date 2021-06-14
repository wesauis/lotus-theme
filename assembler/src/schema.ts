import { stream as glob } from "fast-glob";
import { readFile } from "fs/promises";

export type Schema = typeof import("../../schema/dark.json");

export async function loadSchemas(): Promise<Schema[]> {
  const schemas = [];
  for await (const schema of glob("schema/*.json", { onlyFiles: true })) {
    schemas.push(JSON.parse(await readFile(schema, "utf8")));
  }
  return schemas as Schema[];
}
