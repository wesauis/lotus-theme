/** @type {import("../../../../assembler/src/template.js").GenPart} */
module.exports = ({ tokens: { operators } }) => [
  {
    name: "Unknown",
    scope: ["keyword.operator"],
    settings: {
      foreground: operators.unknown,
    },
  },
  {
    name: "Arithmetic",
    scope: ["keyword.operator.arithmetic", "keyword.operator.math"],
    settings: {
      foreground: operators.arithmetic,
    },
  },
  {
    name: "Unary",
    scope: [
      "keyword.operator.increment",
      "keyword.operator.decrement",
      "keyword.operator.increment-decrement",
    ],
    settings: {
      foreground: operators.unary,
    },
  },
  {
    name: "Assignment",
    scope: ["keyword.operator.assignment"],
    settings: {
      foreground: operators.assignment,
    },
  },
  {
    name: "Comparison",
    scope: ["keyword.operator.comparison", "keyword.operator.relational"],
    settings: {
      foreground: operators.comparison,
    },
  },
  {
    name: "Ternary",
    scope: [
      "keyword.operator.ternary",
      "keyword.control.ternary",
      "keyword.operator.conditional.question-mark",
      "keyword.operator.conditional.colon",
    ],
    settings: {
      foreground: operators.ternary,
    },
  },
  {
    name: "Logical",
    scope: ["keyword.operator.logical", "keyword.operator.null-coalescing"],
    settings: {
      foreground: operators.logical,
    },
  },
  {
    name: "Identity",
    scope: [
      "keyword.operator.expression.typeof",
      "keyword.operator.expression.instanceof",
      "keyword.operator.instanceof",
      "keyword.other.typeof",
      "keyword.other.is",
      "keyword.operator.type",
    ],
    settings: {
      foreground: operators.identity,
    },
  },
  {
    name: "Bitwise",
    scope: ["keyword.operator.bitwise", "keyword.operator.arithmetic.bitwise"],
    settings: {
      foreground: operators.bitwise,
    },
  },
  {
    name: "Nullcheck",
    scope: [
      "punctuation.accessor.optional",
      "keyword.operator.question",
      "keyword.operator.null-conditional",
      "keyword.operator.error-control",
      "keyword.operator.nulltype",
    ],
    settings: {
      foreground: operators.nullcheck,
    },
  },
  {
    name: "Membership",
    scope: [],
    settings: {
      foreground: operators.membership,
    },
  },
  {
    name: "Address",
    scope: [
      "keyword.operator.borrow.and",
      "keyword.operator.dereference",
      "storage.modifier.reference",
      "punctuation.definition.variable",
      "keyword.operator.address",
      "keyword.operator.channel",
    ],
    settings: {
      foreground: operators.address,
    },
  },
  {
    name: "Concat",
    scope: ["keyword.operator.string"],
    settings: {
      foreground: operators.concat,
    },
  },
  {
    name: "Exec",
    scope: [],
    settings: {
      foreground: operators.exec,
    },
  },
  {
    name: "Placeholder",
    scope: [
      "string.interpolated.expression",
      "constant.character.format.placeholder.other.python",
      "punctuation.definition.template-expression",
      "constant.other.placeholder",
      "punctuation.definition.interpolation",
      "punctuation.definition.template-expression.begin",
      "punctuation.definition.template-expression.end",
      "punctuation.section.embedded",
    ],
    settings: {
      foreground: operators.placeholder,
    },
  },
];
