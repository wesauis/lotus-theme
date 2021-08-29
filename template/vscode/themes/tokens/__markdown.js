/** @type {import("../../../../assembler/src/template.js").GenPart} */
module.exports = ({ markdown, ui, tokens: { language } }) => [
  {
    name: "Markdown - Text",
    scope: ["text.html.markdown", "punctuation.definition.list_item.markdown"],
    settings: {
      foreground: ui.text,
    },
  },
  {
    name: "Markdown - Ponctuation",
    scope: [
      "markdown.heading",
      "markup.heading | markup.heading entity.name",
      "markup.heading.markdown punctuation.definition.heading.markdown",
    ],
    settings: {
      foreground: language.punctuation,
    },
  },
  {
    name: "Markdown - Heading",
    scope: ["markup.heading entity.name"],
    settings: {
      foreground: markdown.heading,
    },
  },
  {
    name: "Markdown - Link",
    scope: ["markup.underline.link"],
    settings: {
      foreground: markdown.link,
    },
  },
  {
    name: "Markdown - Link Title",
    scope: ["string.other.link.title"],
    settings: {
      foreground: markdown.linkTitle,
    },
  },
  {
    name: "Markdown - Italic",
    scope: ["markup.italic"],
    settings: {
      fontStyle: "italic",
      foreground: ui.text,
    },
  },
  {
    name: "Markdown - Bold",
    scope: ["markup.bold", "markup.bold string"],
    settings: {
      fontStyle: "bold",
      foreground: ui.text,
    },
  },
  {
    name: "Markdown - Bold-Italic",
    scope: [
      "markup.bold markup.italic",
      "markup.italic markup.bold",
      "markup.quote markup.bold",
      "markup.bold markup.italic string",
      "markup.italic markup.bold string",
      "markup.quote markup.bold string",
    ],
    settings: {
      fontStyle: "bold italic",
      foreground: ui.text,
    },
  },
  {
    name: "Markdown - Underline",
    scope: ["markup.underline"],
    settings: {
      fontStyle: "underline",
      foreground: ui.text,
    },
  },
  {
    name: "Markdown - Inline Code",
    scope: ["markup.inline.raw.string"],
    settings: {
      foreground: markdown.code.inline,
    },
  },
  {
    name: "Markdown - Codeblock Language",
    scope: ["	fenced_code.block.language.markdown"],
    settings: {
      foreground: markdown.code.blocklang,
    },
  },
];
