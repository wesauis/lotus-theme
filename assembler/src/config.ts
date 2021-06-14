import { readFile } from "fs/promises";
import { load as loadYaml } from "js-yaml";

export interface Config {
  /** `true` to generate a themepack, `false` for a plugin for each schema */
  pack: boolean;
  /** dir for the resultant theme/pack */
  outdir: string;
  /** assest will be copied just to the outdir */
  assets: string[];
}

export async function loadConfig(path: string): Promise<Config> {
  return loadYaml(await readFile(path, "utf8"), {
    filename: path,
    onWarning: console.warn,
  }) as Config;
}
