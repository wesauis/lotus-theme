/** @type {import("../../../../assembler/src/template.js").GenPart} */
module.exports = ({ tokens: { types } }) => [
  {
    name: "Tag",
    scope: ["entity.name.tag", "meta.tag.sgml"],
    settings: {
      foreground: types.tag,
    },
  },
  {
    name: "Function Declarations",
    scope: [
      "entity.name.function",
      "variable.function",
      "support.function",
      "support.constant.handlebars",
      "source.powershell variable.other.member",
      "keyword.other.special-method",
      "entity.name.operator.custom-literal", // See https://en.cppreference.com/w/cpp/language/user_literal
    ],
    settings: {
      foreground: types.function,
    },
  },
  {
    name: "Types Declaration and References",
    scope: [
      "meta.return-type",
      "support.class",
      "support.type",
      "entity.name.type",
      "entity.name.namespace",
      "entity.other.attribute",
      "entity.other.attribute-name.class",
      "entity.name.scope-resolution",
      "entity.name.class",
      "storage.type.numeric.go",
      "storage.type.byte.go",
      "storage.type.boolean.go",
      "storage.type.string.go",
      "storage.type.uintptr.go",
      "storage.type.error.go",
      "storage.type.rune.go",
      "storage.type.cs",
      "storage.type.generic.cs",
      "storage.type.modifier.cs",
      "storage.type.variable.cs",
      "storage.type.annotation.java",
      "storage.type.generic.java",
      "storage.type.java",
      "storage.type.object.array.java",
      "storage.type.primitive.array.java",
      "storage.type.primitive.java",
      "storage.type.token.java",
      "storage.type.groovy",
      "storage.type.annotation.groovy",
      "storage.type.parameters.groovy",
      "storage.type.generic.groovy",
      "storage.type.object.array.groovy",
      "storage.type.primitive.array.groovy",
      "storage.type.primitive.groovy",
    ],
    settings: {
      foreground: types.type,
    },
  },
  {
    name: "Interface, Pseudo-Class",
    scope: ["entity.other.attribute-name.pseudo-class"],
    settings: {
      foreground: types.interface,
    },
  },
  {
    name: "Class",
    scope: ["entity.other.inherited-class"],
    settings: {
      foreground: types.class,
    },
  },
];
