import { stream as glob } from "fast-glob";
import { copyFile, mkdir, rm, writeFile } from "fs/promises";
import { dirname } from "path";
import { Config } from "./config";
import { infoOf } from "./logger";
import { Schema } from "./schema";
import { Gen } from "./template";

export async function assemble(id: string, schema: Schema, config: Config) {
  const info = infoOf(id, schema.name.toLowerCase());

  info(`assembling ${id} to ${config.outdir}`);

  await rm(config.outdir, { force: true, recursive: true });
  for await (const resouce of glob("**/*", {
    onlyFiles: true,
    cwd: `template/${id}`,
  })) {
    if (resouce instanceof Buffer) continue;
    const outfile = `${config.outdir}/${resouce}`;

    const isAsset = config.assets.includes(resouce);
    const isTemplate = resouce.endsWith(".js");

    if (isAsset || isTemplate) {
      await mkdir(dirname(outfile), {
        recursive: true,
      });
    }

    if (isAsset) {
      info(`copying resouce ${resouce}`);

      await copyFile(
        `template/${id}/${resouce}`,
        `${config.outdir}/${resouce}`
      );
    } else if (isTemplate) {
      info(`generating from template: ${resouce}`);

      const gen = await import(`../template/${id}/${resouce}`).then(
        (mod) => mod.default as Gen
      );

      let [generated, content] = gen(schema);

      if (typeof content === "object") {
        content = JSON.stringify(content, null, 2);
      }

      info(`${resouce} -gen> ${generated}`);
      await writeFile(`${dirname(outfile)}/${generated}`, content, "utf8");
    }
  }
}
