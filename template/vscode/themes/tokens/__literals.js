/** @type {import("../../../../assembler/src/template.js").GenPart} */
module.exports = ({ tokens: { literals } }) => [
  {
    name: "String Literal",
    scope: [
      "string",
      "meta.embedded.assembly",
      "string meta.embedded.assembly",
    ],
    settings: {
      foreground: literals.string,
    },
  },
  {
    name: "Numeric Literal",
    // TODO Lightier?
    scope: ["constant.numeric"],
    settings: {
      foreground: literals.number,
    },
  },
  {
    name: "Unit",
    scope: ["keyword.other.unit"],
    settings: {
      foreground: literals.unit,
    },
  },
];
