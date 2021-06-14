import { lstat } from "fs/promises";
import { assemblePack } from "./assemble-pack";
import { Config, loadConfig } from "./config";
import "./logger";
import { loadSchemas, Schema } from "./schema";

async function assemble(id: string, schema: Schema, config: Config) {
  console.log(config);
}

(async () => {
  const schemas = await loadSchemas();
  console.info(
    "loaded schemas:",
    schemas.map((s) => s.name.toLowerCase()).join(", ")
  );

  await Promise.all(
    process.argv
      .slice(2)
      .map(async (id) => {
        await lstat(`template/${id}`).catch(() => {
          throw new Error(`not found: template/${id}`);
        });

        const config = await loadConfig(`template/${id}/assembler.yaml`);

        if (config.pack) {
          return assemblePack(id, schemas, config);
        } else {
          return schemas.map((schema) => assemble(id, schema, config));
        }
      })
      .flat()
  ).catch(console.error);
})();
