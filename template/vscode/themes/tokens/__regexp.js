/** @type {import("../../../../assembler/src/template.js").GenPart} */
module.exports = ({ regexp }) => [
  {
    name: "Regexp Any/Unknown",
    scope: ["string.regexp"],
    settings: { foreground: regexp.any },
  },
  {
    name: "Regexp Control",
    scope: ["constant.character.control.regexp", "string.regexp keyword"],
    settings: { foreground: regexp.control },
  },
  {
    name: "Regexp Numeric",
    scope: ["constant.character.numeric.regexp"],
    settings: { foreground: regexp.numeric },
  },
  {
    name: "Regexp Escape",
    scope: ["constant.character.escape.backslash"],
    settings: { foreground: regexp.escape },
  },
  {
    name: "Regexp Or",
    scope: ["keyword.operator.or.regexp"],
    settings: { foreground: regexp.or },
  },
  {
    name: "Regexp Quantifier",
    scope: ["keyword.operator.quantifier.regexp"],
    settings: { foreground: regexp.quantifier },
  },
  {
    name: "Regexp Anchor",
    scope: ["keyword.control.anchor.regexp"],
    settings: { foreground: regexp.anchor },
  },
  {
    name: "Regexp Range",
    scope: ["constant.other.character-class.range.regexp"],
    settings: { foreground: regexp.set.range },
  },
  {
    name: "Regexp Builtin Set",
    scope: ["constant.other.character-class.regexp"],
    settings: { foreground: regexp.set.builtin },
  },
  {
    name: "Regexp Negation Set",
    scope: ["keyword.operator.negation.regexp"],
    settings: { foreground: regexp.set.negation },
  },
  {
    name: "Regexp Set Definition",
    scope: ["punctuation.definition.character-class.regexp"],
    settings: { foreground: regexp.set.definition },
  },
  {
    name: "Regexp Back Reference",
    scope: ["keyword.other.back-reference.regexp"],
    settings: { foreground: regexp.group.ref },
  },
  {
    name: "Regexp Group Name",
    scope: ["variable.other.regexp"],
    settings: { foreground: regexp.group.name },
  },
  {
    name: "Regexp Non-Capturing Group",
    scope: ["punctuation.definition.group.no-capture.regexp"],
    settings: { foreground: regexp.group.nocap },
  },
  {
    name: "Regexp Looking",
    scope: [
      "meta.assertion.look-ahead",
      "meta.assertion.negative-look-ahead",
      "meta.assertion.look-behind",
      "meta.assertion.negative-look-behind",
    ],
    settings: { foreground: regexp.group.looking },
  },
  {
    name: "Regexp Group Definition",
    scope: ["punctuation.definition.group.regexp"],
    settings: { foreground: regexp.group.definition },
  },
];
