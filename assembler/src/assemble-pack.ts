import { copyFile, mkdir, rm, writeFile } from "fs/promises";
import { stream as glob } from "fast-glob";
import { Config } from "./config";
import { Schema } from "./schema";
import { basename, dirname } from "path";
import { GenPack } from "./template";
import { infoOf } from "./logger";

export async function assemblePack(
  id: string,
  schemas: Schema[],
  config: Config
) {
  const info = infoOf(id);

  info(`assembling pack ${id} to ${config.outdir}`);

  await rm(config.outdir, { force: true, recursive: true });
  await mkdir(config.outdir, { recursive: true });
  await copyFile(`CHANGELOG.md`, `${config.outdir}/CHANGELOG.md`);

  for await (const resouce of glob("**/*", {
    onlyFiles: true,
    cwd: `template/${id}`,
  })) {
    if (resouce instanceof Buffer) continue;
    const outfile = `${config.outdir}/${resouce}`;

    if (basename(resouce).startsWith('__')) continue;
    const isAsset = config.assets.includes(resouce);
    const isTemplate = resouce.endsWith(".js");

    if (isAsset || isTemplate) {
      await mkdir(dirname(outfile), { recursive: true });
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
        (mod) => mod.default as GenPack
      );

      await Promise.all(
        gen(schemas).map(async ([generated, content]) => {
          if (typeof content === "object") {
            content = JSON.stringify(content, null, 2);
          }

          info(`${resouce} -gen> ${generated}`);
          await writeFile(`${dirname(outfile)}/${generated}`, content, "utf8");
        })
      );
    }
  }
}
