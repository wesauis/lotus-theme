import { lstat } from "fs/promises";
import { assemble } from "./assemble";
import { assemblePack } from "./assemble-pack";
import { loadConfig } from "./config";
import { init as initLogger } from "./logger";
import { loadSchemas } from "./schema";

initLogger();

(async () => {
  const schemas = await loadSchemas();
  console.info("loaded schemas:", schemas.map((s) => s.id).join(", "));

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
