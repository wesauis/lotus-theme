/** @type {import('../../assembler/src/template').GenPack} */
module.exports = (schemas) => [
  [
    "package.json",
    {
      name: "lotus-theme",
      displayName: "Lotus Theme",
      description: "",
      version: "1.0.0",
      publisher: "wesauis",
      engines: {
        vscode: "^1.57.0",
      },
      author:
        "Wesley Augusto Isotton <54046750+wesauis@users.noreply.github.com>",
      homepage:
        "https://github.com/wesauis/lotus-theme/tree/dev/template/vscode",
      repository: {
        type: "git",
        url: "https://github.com/wesauis/lotus-theme.git",
      },
      categories: ["Themes"],
      contributes: {
        themes: schemas.map((schema) => ({
          label: schema.name,
          uiTheme: {
            dark: "vs-dark",
            light: "vs",
            hc: "hc-black",
          }[schema.lightness],
          path: `./themes/${schema.id}.json`,
        })),
      },
    },
  ],
];
