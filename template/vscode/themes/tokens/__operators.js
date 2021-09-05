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
    // TODO c,dart
    scope: ["keyword.operator.arithmetic", "keyword.operator.math"],
    settings: {
      foreground: operators.arithmetic,
    },
  },
  {
    name: "Unary",
    // TODO js,ts,java,rust,dart
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
    // TODO compound
    // TODO js,ts,java
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
    // TODO rust,dart
    scope: ["keyword.operator.logical", "keyword.operator.null-coalescing"],
    settings: {
      foreground: operators.logical,
    },
  },
  {
    name: "Identity",
    // TODO py,dart
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
    // TODO c,rust,php
    scope: ["keyword.operator.bitwise"],
    settings: {
      foreground: operators.bitwise,
    },
  },
  {
    name: "Nullcheck",
    // TODO ts,c#
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
    // TODO js,ts,py
    scope: [],
    settings: {
      foreground: operators.membership,
    },
  },
  {
    name: "Varef",
    // TODO c,c#
    scope: [
      "keyword.operator.borrow.and",
      "keyword.operator.dereference",
      "storage.modifier.reference",
      "punctuation.definition.variable",
    ],
    settings: {
      foreground: operators.varef,
    },
  },
  {
    name: "Concat",
    // TODO php
    scope: ["keyword.operator.string"],
    settings: {
      foreground: operators.concat,
    },
  },
  {
    name: "Exec",
    // TODO php
    scope: [],
    settings: {
      foreground: operators.exec,
    },
  },
  {
    name: "Placeholder",
    // TODO dart
    scope: [
      "string.interpolated.expression",
      "constant.character.format.placeholder.other.python",
      "punctuation.definition.template-expression",
      "constant.other.placeholder",
      "punctuation.definition.interpolation",
    ],
    settings: {
      foreground: operators.placeholder,
    },
  },
];
