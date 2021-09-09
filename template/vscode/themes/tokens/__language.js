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
      // "fenced_code.block.language.markdown",
      // "punctuation.definition.binding-pattern",
      // "punctuation.accessor",
      // "punctuation.definition.parameters.varargs",
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
      // "punctuation.definition.tag",
      // "punctuation.separator.inheritance.php",
      // "punctuation.definition.tag.html",
      // "punctuation.definition.tag.begin.html",
      // "punctuation.definition.tag.end.html",
      // "punctuation.section.embedded",
      // "constant.other.color",
      // "keyword.other.template",
      // "keyword.other.substitution",
    ],
    settings: {
      foreground: language.punctuation,
    },
  },
  {
    name: "Variable",
    scope: [
      // TODO HOW TO FIX THIS?
      // "variable - variable.other.property",
      "variable.parameter",
      "variable.interpolation",
      // "variable.other.readwrite",
      "meta.block variable.other",
      "entity.name.variable",
      "support.type.property-name",
      "entity.other.attribute-name",
      "string.quoted variable.other",

      // "string constant.other.placeholder",
      // "meta.function-call.arguments",
      // "variable.other.definition",
      // "meta.definition.variable variable.other",
      // "meta.tag",
      // "meta.object-literal.key string.quoted",
      // "string constant.other.placeholder",
      // "meta.definition.variable punctuation.bracket",
      // "meta.function-call.arguments",
      // "variable.other.definition",
      // "variable.other.object.property",
      // "meta.definition.variable variable.other"
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
    // TODO php,c,rust,c#,dart,go
    scope: [
      "variable.language.this",
      "variable.language.special.self",
      "variable.parameter.function.language.special.self",
    ],
    settings: {
      foreground: language.instance,
    },
  },
  // {
  //   name: "Properties",
  //   // TODO keylevels like rainbow
  //   scope: "variable.other.object.property",
  //   settings: { foreground: keyLevels?.[0] },
  // },
  // {
  //   name: "Property End Level",
  //   scope: "source variable.other.property",
  //   settings: { foreground: keyLevels?.[1] },
  // },
];
