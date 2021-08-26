/** @type {import("../../../../assembler/src/template.js").GenPart} */
module.exports = ({ tokens: { operators } }) => [
  {
    name: "Arithmetic Operators",
    scope: ["keyword.operator.arithmetic"],
    settings: {
      foreground: operators.arithmetic,
    },
  },
  {
    name: "Bitwise Operators",
    scope: ["keyword.operator.bitwise"],
    settings: {
      foreground: operators.bitwise,
    },
  },
  {
    name: "Relacional and Comparison Operators",
    scope: ["keyword.operator.relational"],
    settings: {
      foreground: operators.comparison,
    },
  },
  {
    name: "IncDecrement Operators",
    scope: [
      "keyword.operator.increment",
      "keyword.operator.decrement",
      "keyword.operator.increment-decrement",
    ],
    settings: {
      foreground: operators.incdecrement,
    },
  },
  {
    name: "Nullcheck, Interpolation Exp",
    scope: [
      "keyword.operator.nulltype",
      "string.interpolated.expression",
      "constant.character.format.placeholder.other.python",
      "punctuation.definition.template-expression",
      "punctuation.accessor.optional",
    ],
    settings: {
      foreground: operators.nullcheck,
    },
  },
];
