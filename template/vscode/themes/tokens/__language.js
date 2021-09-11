/** @type {import("../../../../assembler/src/template.js").GenPart} */
module.exports = ({ tokens: { language, keyLevels } }) => [
  {
    name: "BuiltIn",
    scope: [
      "support.constant",
      "support.type.object.module",
      "constant.language",
    ],
    settings: {
      foreground: language.builtin,
    },
  },
  {
    name: "Vendored",
    scope: ["support.type.vendored.property-name"],
    settings: {
      foreground: language.vendored,
    },
  },
  {
    name: "Comment",
    scope: [
      "comment",
      "string.quoted.docstring",
      "punctuation.definition.comment",
    ],
    settings: {
      foreground: language.comment,
    },
  },
  {
    name: "Language Constants",
    scope: ["constant.language", "support.constant.property-value"],
    settings: {
      foreground: language.constant,
    },
  },
  {
    name: "Import ID",
    scope: ["storage.modifier.package", "storage.modifier.import"],
    settings: {
      foreground: language.importid,
    },
  },
  {
    name: "Invalid",
    scope: ["invalid", "invalid.illegal"],
    settings: {
      foreground: language.invalid,
      fontStyle: "italic bold underline",
    },
  },
  {
    name: "Keyword",
    scope: [
      "keyword",
      "storage.type",
      "storage.modifier",
      "keyword.control",
      "source.cpp keyword.operator.new",
      "keyword.operator.delete",
      "keyword.other.using",
      "keyword.other.operator",
      "entity.name.operator",
    ],
    settings: {
      foreground: language.keyword,
    },
  },
  {
    name: "Punctuation",
    // TODO dart
    scope: [
      "punctuation",
      "punctuation.definition",
      "punctuation.definition.string string",
      "punctuation.definition.string.end",
      // TODO dart string interpolated string
    ],
    settings: {
      foreground: language.punctuation,
    },
  },
  {
    name: "Variable",
    scope: [
      "source variable",
      "variable.parameter",
      "variable.interpolation",
      "meta.block variable.other",
      "source entity.name.variable",
      "support.type.property-name",
      "entity.other.attribute-name",
      "string.quoted variable.other",
      "source support.variable.property",
    ],
    settings: {
      foreground: language.variable,
    },
  },
  {
    name: "Braces",
    scope: [
      "meta.brace",
      "punctuation.definition.parameters",
      "punctuation.definition.block",
    ],
    settings: {
      foreground: language.brace,
    },
  },
  {
    name: "Current Instance Reference",
    scope: [
      "variable.language.this",
      "variable.language.special.self",
      "variable.parameter.function.language.special.self",
    ],
    settings: {
      foreground: language.instance,
    },
  },
];
