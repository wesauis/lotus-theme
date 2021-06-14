/** @type {import('../../assembler/src/template').GenPack} */
module.exports = (schemas) => [
  [
    "package.json",
    {
      name: "lotus-theme",
      displayName: "Lotus Theme",
      description: "",
      version: "0.0.1",
      engines: {
        vscode: "^1.57.0",
      },
      categories: ["Themes"],
      contributes: {
        themes: schemas.map((schema) => ({
          label: `Lotus ${schema.name}`,
          uiTheme: {
            dark: "vs-dark",
            light: "vs",
            hc: "hc-black",
          }[schema.lightness],
          path: `./themes/lotus-${schema.name}.json`.toLowerCase(),
        })),
      },
    },
  ],
];
