
/** Returns the token matchers for json keys up to deph 250.
 * 
 * @param {string[]} colors json key levels colors
 * @returns {{
 *     name: `JSON Key Level ${string}`
 *     scope: string[],
 *     settings: {
 *       [key: string]: string,
 *       foreground: string,
 *     },
 *   }[]} a list of json key level tokens
 */
function jsonTokenLevels(colors) {
  const levelMatcher = (level) =>
    new Array(level + 1).fill("meta.structure.dictionary.json").join(" ");

  const scopes = (index) => {
    const scopeMatchers = [];
    for (let level = index; level < 250; level += colors.length) {
      scopeMatchers.push(
        `source.json ${levelMatcher(level)} support.type.property-name`
      );
    }
    return scopeMatchers;
  };

  return colors.map((color, index) => ({
    name: `JSON Key Level ${index}`,
    scope: scopes(index),
    settings: { foreground: color },
  }));
}

/** @type {import('../../../assembler/src/template').GenPack} */
module.exports = (schemas) => {
  return schemas.map((schema) => [
    `${schema.id}.json`,
    {
      name: schema.name,
      type: schema.lightness,
      semanticHighlighting: true,
      tokenColors: [
        {
          name: "URL",
          scope: ["*url*", "*link*", "*uri*"],
          settings: {
            fontStyle: "underline",
          },
        },
        {
          name: "Comment",
          scope: [
            "comment",
            "punctuation.definition.comment",
            "string.quoted.docstring",
          ],
          settings: {
            foreground: "#6A737D",
          },
        },
        {
          name: "Keyword",
          scope: [
            "keyword",
            "keyword.control",
            "storage.type",
            "storage.modifier",
            "fenced_code.block.language.markdown",
            "punctuation.definition.binding-pattern",
            "punctuation.accessor",
            "punctuation.definition.parameters.varargs",
          ],
          settings: {
            foreground: "#BF83E7",
          },
        },
        {
          name: "Tag",
          scope: [
            "entity.name.tag",
            "meta.tag.sgml",
            "markup.deleted.git_gutter",
          ],
          settings: {
            foreground: "#BF83E7",
          },
        },
        {
          name: "Punctuation",
          scope: [
            "constant.other.color",
            "punctuation",
            "punctuation.definition.tag",
            "punctuation.separator.inheritance.php",
            "punctuation.definition.tag.html",
            "punctuation.definition.tag.begin.html",
            "punctuation.definition.tag.end.html",
            "punctuation.section.embedded",
            "keyword.other.template",
            "keyword.other.substitution",
          ],
          settings: {
            foreground: "#6A737D",
          },
        },
        {
          name: "Variables",
          scope: [
            "variable",
            "variable.parameter",
            "meta.tag",
            "meta.object-literal.key string.quoted",
            "string constant.other.placeholder",
            "meta.definition.variable punctuation.bracket",
            "meta.function-call.arguments",
            "variable.other.definition",
            "variable.other.object.property",
            "meta.definition.variable variable.other",
          ],
          settings: {
            foreground: "#E3E5E7",
          },
        },
        {
          name: "Block Level Variables",
          scope: ["meta.block variable.other"],
          settings: {
            foreground: "#E3E5E7",
          },
        },
        {
          name: "CSS Unit",
          scope: [
            "source.css keyword.other.unit",
            "source.sass keyword.other.unit",
            "source.scss keyword.other.unit",
            "source.less keyword.other.unit",
            "source.stylus keyword.other.unit",
            "source.postcss keyword.other.unit",
          ],
          settings: {
            foreground: "#BF83E7",
          },
        },
        {
          name: "CSS Variable",
          scope: [
            "variable.css",
            "variable.sass",
            "variable.scss",
            "variable.less",
            "variable.stylus",
            "variable.postcss",
            "variable.argument.css",
            "variable.argument.sass",
            "variable.argument.scss",
            "variable.argument.less",
            "variable.argument.stylus",
            "variable.argument.postcss",
          ],
          settings: {
            foreground: "#E79783",
          },
        },
        {
          name: "CSS Selector",
          scope: [
            "source.css entity.other.attribute-name",
            "source.sass entity.other.attribute-name",
            "source.scss entity.other.attribute-name",
            "source.less entity.other.attribute-name",
            "source.stylus entity.other.attribute-name",
            "source.postcss entity.other.attribute-name",
          ],
          settings: {
            foreground: "#CDE783",
          },
        },
        {
          name: "CSS Properties",
          scope: [
            "source.css support.type.property-name",
            "source.sass support.type.property-name",
            "source.scss support.type.property-name",
            "source.less support.type.property-name",
            "source.stylus support.type.property-name",
            "source.postcss support.type.property-name",
          ],
          settings: {
            foreground: "#E3E5E7",
          },
        },
        {
          name: "CSS Vendored Property",
          scope: [
            "source.css support.type.vendored.property-name",
            "source.sass support.type.vendored.property-name",
            "source.scss support.type.vendored.property-name",
            "source.less support.type.vendored.property-name",
            "source.stylus support.type.vendored.property-name",
            "source.postcss support.type.vendored.property-name",
          ],
          settings: {
            foreground: "#E3E5E7",
            fontStyle: "bold",
          },
        },
        {
          name: "CSS Property Value",
          scope: [
            "source.css support.constant",
            "source.sass support.constant",
            "source.scss support.constant",
            "source.less support.constant",
            "source.stylus support.constant",
            "source.postcss support.constant",
          ],
          settings: {
            foreground: "#E783DA",
          },
        },
        {
          name: "CSS Vendored Property Value",
          scope: [
            "source.css support.constant.vendored",
            "source.sass support.constant.vendored",
            "source.scss support.constant.vendored",
            "source.less support.constant.vendored",
            "source.stylus support.constant.vendored",
            "source.postcss support.constan.vendoredt",
          ],
          settings: {
            foreground: "#E783DA",
            fontStyle: "bold",
          },
        },
        {
          name: "Function",
          scope: [
            "entity.name.function",
            "variable.function",
            "support.function",
            "keyword.other.special-method",
          ],
          settings: {
            foreground: "#83BFE7",
          },
        },
        {
          name: "Number",
          scope: [
            "constant.numeric",
            "constant.language",
            "support.constant",
            "constant.character",
            "constant.escape",
          ],
          settings: {
            foreground: "#8389E7",
          },
        },
        {
          name: "Escape Characters",
          scope: ["constant.character.escape"],
          settings: {
            foreground: "#83E7DA",
          },
        },
        {
          name: "String",
          scope: [
            "string",
            "storage.modifier.package",
            "storage.modifier.import",
            "constant.other.symbol",
            "constant.other.key",
            "entity.other.inherited-class",
            "markup.heading",
            "markup.inserted.git_gutter",
            "meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js",
          ],
          settings: {
            foreground: "#CDE783",
          },
        },
        {
          name: "Type, Class",
          scope: [
            "entity.name",
            "storage.type.primitive",
            "support.class",
            "support.orther.namespace.use.php",
            "entity.other.attribute-name.class",
            "meta.use.php",
            "support.other.namespace.php",
            "markup.changed.git_gutter",
            "support.type.primitive",
            "support.type.sys-types",
            "meta.attribute.class string.quoted",
            "storage.type.generic",
            "meta.definition.variable storage.type",
            "meta.class.body storage.type",
            "entity.other.attribute-name.pseudo-class",
            "entity.other.inherited-class",
            "punctuation.bracket.square.java",
          ],
          settings: {
            foreground: "#E7CD83",
          },
        },
        {
          name: "Attributes",
          scope: ["entity.other.attribute-name"],
          settings: {
            foreground: "#E783DA",
          },
        },
        {
          name: "Annotation, Decorators",
          scope: [
            "storage.type.annotation",
            "entity.name.function.decorator",
            "meta.decorator entity.name.function",
            "tag.decorator",
          ],
          settings: {
            foreground: "#E79783",
          },
        },
        {
          name: "External Methods",
          scope: ["variable.language"],
        },
        {
          name: "Invalid",
          scope: ["invalid", "invalid.illegal"],
          settings: {
            fontStyle: "underline",
            foreground: "#FF5370",
          },
        },
        {
          name: "(Inc/Dec)rement Operators",
          scope: [
            "keyword.operator.increment",
            "keyword.operator.decrement",
            "keyword.operator.increment-decrement",
          ],
          settings: {
            foreground: "#83E7DA",
          },
        },
        {
          name: "Arithmetic Operators",
          scope: ["keyword.operator.arithmetic"],
          settings: {
            foreground: "#E783A4",
          },
        },
        {
          name: "Relacional and Comparison Operators",
          scope: ["keyword.operator.comparison"],
          settings: {
            foreground: "#E783DA",
          },
        },
        {
          name: "Bitwise Operators",
          scope: ["keyword.operator.bitwise"],
          settings: {
            foreground: "#CDE783",
          },
        },
        {
          name: "Markdown Text",
          scope: [
            "text.html.markdown",
            "punctuation.definition.list_item.markdown",
          ],
          settings: {
            foreground: "#E3E5E7",
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
            foreground: "#6A737D",
          },
        },
        {
          name: "Markup - Heading",
          scope: ["markup.heading entity.name"],
          settings: {
            foreground: "#E7CD83",
          },
        },
        {
          name: "Markup - Link Title",
          scope: ["string.other.link.title"],
          settings: {
            foreground: "#83E7DA",
          },
        },
        {
          name: "Markup - Link",
          scope: ["markup.underline.link"],
          settings: {
            foreground: "#CDE783",
          },
        },
        {
          name: "Markup - Italic",
          scope: ["markup.italic"],
          settings: {
            fontStyle: "italic",
            foreground: "#E79783",
          },
        },
        {
          name: "Markup - Bold",
          scope: ["markup.bold", "markup.bold string"],
          settings: {
            fontStyle: "bold",
            foreground: "#E79783",
          },
        },
        {
          name: "Markup - Bold-Italic",
          scope: [
            "markup.bold markup.italic",
            "markup.italic markup.bold",
            "markup.quote markup.bold",
            "markup.bold markup.italic string",
            "markup.italic markup.bold string",
            "markup.quote markup.bold string",
          ],
          settings: {
            fontStyle: "bold",
            foreground: "#E79783",
          },
        },
        {
          name: "Markup - Underline",
          scope: ["markup.underline"],
          settings: {
            fontStyle: "underline",
            foreground: "#E79783",
          },
        },
        {
          name: "Markdown - Inline Code",
          scope: ["markup.inline.raw.string"],
          settings: {
            foreground: "#E783A4",
          },
        },
        ...jsonTokenLevels(schema.json.keyLevels)
      ],
      colors: {
        "terminal.foreground": schema.text,
        "terminal.background": schema.terminal.background,
        // "terminal.border": "#FF00FF",
        // "terminal.dropBackground": "#FF00FF",
        // "terminal.tab.activeBoarder": "#FF00FF",
        "terminal.selectionBackground": schema.terminal.selection,
        "terminalCursor.background": schema.terminal.selection,
        "terminalCursor.foreground": schema.text,
        "terminal.ansiBlack": schema.terminal.black,
        "terminal.ansiBrightBlack": schema.terminal.blackBright,
        "terminal.ansiBlue": schema.terminal.blue,
        "terminal.ansiBrightBlue": schema.terminal.blueBright,
        "terminal.ansiCyan": schema.terminal.cyan,
        "terminal.ansiBrightCyan": schema.terminal.cyanBright,
        "terminal.ansiGreen": schema.terminal.green,
        "terminal.ansiBrightGreen": schema.terminal.greenBright,
        "terminal.ansiPurple": schema.terminal.purple,
        "terminal.ansiBrightPurple": schema.terminal.purpleBright,
        "terminal.ansiRed": schema.terminal.red,
        "terminal.ansiBrightRed": schema.terminal.redBright,
        "terminal.ansiWhite": schema.terminal.white,
        "terminal.ansiBrightWhite": schema.terminal.whiteBright,
        "terminal.ansiYellow": schema.terminal.yellow,
        "terminal.ansiBrightYellow": schema.terminal.yellowBright,

        focusBorder: "#005cc5",
        foreground: "#d1d5da",
        descriptionForeground: "#959da5",
        errorForeground: "#f07178",
        "textLink.foreground": "#8389E7",
        "textLink.activeForeground": "#c8e1ff",
        "textBlockQuote.background": "#24292e",
        "textBlockQuote.border": "#444d56",
        "textCodeBlock.background": "#2f363d",
        "textPreformat.foreground": "#d1d5da",
        "textSeparator.foreground": "#586069",
        "button.background": "#176f2c",
        "button.foreground": "#dcffe4",
        "button.hoverBackground": "#22863a",
        "dropdown.background": "#2f363d",
        "dropdown.border": "#1b1f23",
        "dropdown.foreground": "#e1e4e8",
        "input.background": "#2f363d",
        "input.border": "#1b1f23",
        "input.foreground": "#e1e4e8",
        "input.placeholderForeground": "#959da5",
        "badge.foreground": "#c8e1ff",
        "badge.background": "#044289",
        "progressBar.background": "#0366d6",
        "list.hoverForeground": "#e1e4e8",
        "list.activeSelectionForeground": "#e1e4e8",
        "list.hoverBackground": "#282e34",
        "list.inactiveSelectionBackground": "#282e34",
        "list.activeSelectionBackground": "#39414a",
        "list.inactiveFocusBackground": "#1d2d3e",
        "list.focusBackground": "#044289",
        "pickerGroup.border": "#444d56",
        "pickerGroup.foreground": "#e1e4e8",
        "editor.foreground": "#e1e4e8",
        "editor.background": "#24292e",
        "editorWidget.background": "#1f2428",
        "editor.lineHighlightBackground": "#2b3036",
        "editorLineNumber.foreground": "#444d56",
        "editorIndentGuide.background": "#2f363d",
        "editorWhitespace.foreground": "#444d56",
        "editorCursor.foreground": "#c8e1ff",
        "editor.findMatchBackground": "#ffd33d44",
        "editor.findMatchHighlightBackground": "#ffd33d22",
        "editor.inactiveSelectionBackground": "#3392FF22",
        "editor.selectionBackground": "#3392FF44",
        "editor.selectionHighlightBackground": "#17E5E633",
        "editor.wordHighlightBackground": "#17E5E600",
        "editor.wordHighlightStrongBackground": "#17E5E600",
        "editorBracketMatch.background": "#17E5E650",
        "editorBracketMatch.border": "#17E5E600",
        "diffEditor.insertedTextBackground": "#28a74530",
        "diffEditor.removedTextBackground": "#d73a4930",
        "scrollbar.shadow": "#0008",
        "scrollbarSlider.background": "#6A737D33",
        "scrollbarSlider.hoverBackground": "#6A737D44",
        "scrollbarSlider.activeBackground": "#6A737D88",
        "editorOverviewRuler.border": "#1b1f23",
        "peekViewEditor.matchHighlightBackground": "#ffd33d33",
        "peekViewResult.matchHighlightBackground": "#ffd33d33",
        "peekViewEditor.background": "#1f242888",
        "peekViewResult.background": "#1f2428",
        "minimap.background": "#1e1e1e",
        "checkbox.background": "#444d56",
        "checkbox.border": "#1b1f23",
        "dropdown.listBackground": "#24292e",
        "titleBar.activeForeground": "#e1e4e8",
        "titleBar.activeBackground": "#24292e",
        "titleBar.inactiveForeground": "#959da5",
        "titleBar.inactiveBackground": "#1f2428",
        "titleBar.border": "#1b1f23",
        "activityBar.foreground": "#e1e4e8",
        "activityBar.inactiveForeground": "#6A737D",
        "activityBar.background": "#24292e",
        "activityBarBadge.foreground": "#fff",
        "activityBarBadge.background": "#0366d6",
        "activityBar.activeBorder": "#f9826c",
        "activityBar.border": "#1b1f23",
        "sideBar.foreground": "#d1d5da",
        "sideBar.background": "#1f2428",
        "sideBar.border": "#1b1f23",
        "sideBarTitle.foreground": "#e1e4e8",
        "sideBarSectionHeader.foreground": "#e1e4e8",
        "sideBarSectionHeader.background": "#1f2428",
        "sideBarSectionHeader.border": "#1b1f23",
        "list.inactiveSelectionForeground": "#e1e4e8",
        "tree.indentGuidesStroke": "#2f363d",
        "notificationCenterHeader.foreground": "#959da5",
        "notificationCenterHeader.background": "#24292e",
        "notifications.foreground": "#e1e4e8",
        "notifications.background": "#2f363d",
        "notifications.border": "#1b1f23",
        "notificationsErrorIcon.foreground": "#ea4a5a",
        "notificationsWarningIcon.foreground": "#ffab70",
        "notificationsInfoIcon.foreground": "#8389E7",
        "quickInput.background": "#24292e",
        "quickInput.foreground": "#e1e4e8",
        "statusBar.foreground": "#d1d5da",
        "statusBar.background": "#24292e",
        "statusBar.border": "#1b1f23",
        "statusBar.noFolderBackground": "#24292e",
        "statusBar.debuggingBackground": "#931c06",
        "statusBar.debuggingForeground": "#fff",
        "statusBarItem.prominentBackground": "#282e34",
        "editorGroupHeader.tabsBackground": "#1f2428",
        "editorGroupHeader.tabsBorder": "#1b1f23",
        "editorGroup.border": "#1b1f23",
        "tab.activeForeground": "#e1e4e8",
        "tab.inactiveForeground": "#959da5",
        "tab.inactiveBackground": "#1f2428",
        "tab.activeBackground": "#24292e",
        "tab.hoverBackground": "#24292e",
        "tab.unfocusedHoverBackground": "#24292e",
        "tab.border": "#1b1f23",
        "tab.unfocusedActiveBorderTop": "#1b1f23",
        "tab.activeBorder": "#24292e",
        "tab.unfocusedActiveBorder": "#24292e",
        "tab.activeBorderTop": "#f9826c",
        "breadcrumb.foreground": "#959da5",
        "breadcrumb.focusForeground": "#e1e4e8",
        "breadcrumb.activeSelectionForeground": "#d1d5da",
        "breadcrumbPicker.background": "#2b3036",
        "editor.foldBackground": "#282e33",
        "editorLineNumber.activeForeground": "#e1e4e8",
        "editorIndentGuide.activeBackground": "#444d56",
        "editor.selectionHighlightBorder": "#17E5E600",
        "editor.wordHighlightBorder": "#17E5E699",
        "editor.wordHighlightStrongBorder": "#17E5E666",
        "editorGutter.modifiedBackground": "#2188ff",
        "editorGutter.addedBackground": "#28a745",
        "editorGutter.deletedBackground": "#ea4a5a",
        "panel.background": "#1f2428",
        "panel.border": "#1b1f23",
        "panelTitle.activeBorder": "#f9826c",
        "panelTitle.activeForeground": "#e1e4e8",
        "panelTitle.inactiveForeground": "#959da5",
        "panelInput.border": "#2f363d",
        "gitDecoration.addedResourceForeground": "#34d058",
        "gitDecoration.modifiedResourceForeground": "#8389E7",
        "gitDecoration.deletedResourceForeground": "#ea4a5a",
        "gitDecoration.untrackedResourceForeground": "#34d058",
        "gitDecoration.ignoredResourceForeground": "#6A737D",
        "gitDecoration.conflictingResourceForeground": "#ffab70",
        "gitDecoration.submoduleResourceForeground": "#6A737D",
        "debugToolBar.background": "#2b3036",
        "editor.stackFrameHighlightBackground": "#a707",
        "editor.focusedStackFrameHighlightBackground": "#b808",
        "settings.headerForeground": "#e1e4e8",
        "settings.modifiedItemIndicator": "#0366d6",
        "welcomePage.buttonBackground": "#2f363d",
        "welcomePage.buttonHoverBackground": "#444d56",
      },
    },
  ]);
};
