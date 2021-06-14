const { build: esbuild } = require("esbuild");

esbuild({
  entryPoints: ["src/index.ts"],
  outfile: "assembler.js",
  platform: "node",
  format: "cjs",
  bundle: true,
  logLevel: "info",
  watch: process.argv.includes("--watch"),
}).catch(console.error);
