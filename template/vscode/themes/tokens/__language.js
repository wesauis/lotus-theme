/** @type {import("../../../../assembler/src/template.js").GenPart} */
module.exports = ({ tokens: { language } }) => [
  {
    name: "BuiltIn",
    scope: ["support.constant"],
    settings: {
      foreground: language.builtin,
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
    name: "Language Constants (true, false...)",
    scope: "constant.language",
    settings: {
      foreground: language.constant,
    },
  },
  {
    name: "Import ID",
    scope: ["storage.modifier.import"],
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
    scope: [
      "punctuation",
      "punctuation.definition.string string",
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
];
