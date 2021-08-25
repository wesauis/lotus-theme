const staticTokens = [
  {
    name: "URL",
    scope: ["*url*", "*link*", "*uri*"],
    settings: {
      fontStyle: "underline",
    },
  },
];

/** @type {import('../../../assembler/src/template').GenPack} */
module.exports = (schemas) => {
  return schemas.map((schema) => [
    `${schema.id}.json`,
    {
      $schema: "vscode://schemas/color-theme",
      name: schema.name,
      type: schema.lightness,
      semanticHighlighting: true,
      semanticTokenColors: {
        class: schema.tokens.types.class,
        enum: schema.tokens.types.enum,
        function: schema.tokens.types.function,
        interface: schema.tokens.types.interface,
        namespace: schema.tokens.types.namespace,
        property: schema.tokens.types.property,
        struct: schema.tokens.types.struct,
        type: schema.tokens.types.type,
        variable: schema.tokens.types.variable,
        "variable.defaultLibrary": schema.tokens.language.builtin,
      },
      tokenColors: [
        // TODO key levels for code (js/obj,py/dict,yaml)
        // TODO regex highlight
        ...staticTokens,
        // tokens.types
        ...[
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
              foreground: schema.tokens.types.function,
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
              foreground: schema.tokens.types.type,
            },
          },
          {
            name: "Variable",
            scope: [
              "variable.other.readwrite",
              "entity.name.variable",
              // "variable",
              // "variable.parameter",
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
              foreground: schema.tokens.types.variable,
            },
          },
        ],
        // tokens.operators
        ...[
          {
            name: "Arithmetic Operators",
            scope: ["keyword.operator.arithmetic"],
            settings: {
              foreground: schema.tokens.operators.arithmetic,
            },
          },
          {
            name: "Bitwise Operators",
            scope: ["keyword.operator.bitwise"],
            settings: {
              foreground: schema.tokens.operators.bitwise,
            },
          },
          {
            name: "Relacional and Comparison Operators",
            scope: ["keyword.operator.relational"],
            settings: {
              foreground: schema.tokens.operators.comparison,
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
              foreground: schema.tokens.operators.incdecrement,
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
              foreground: schema.tokens.operators.nullcheck,
            },
          },
        ],
        // tokens.language
        ...[
          {
            name: "BuiltIn",
            scope: ["support.constant"],
            settings: {
              foreground: schema.tokens.language.builtin,
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
              foreground: schema.tokens.language.comment,
            },
          },
          {
            name: "Language Constants (true, false...)",
            scope: "constant.language",
            settings: {
              foreground: schema.tokens.language.constant,
            },
          },
          {
            name: "Invalid",
            scope: ["invalid", "invalid.illegal"],
            settings: {
              foreground: schema.tokens.language.invalid,
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
              foreground: schema.tokens.language.keyword,
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
              foreground: schema.tokens.language.punctuation,
            },
          },
        ],
        // tokens.literals
        ...[
          {
            name: "String Literal",
            scope: [
              "string",
              "meta.embedded.assembly",
              "string meta.embedded.assembly",
              "storage.modifier.import",
            ],
            settings: {
              foreground: schema.tokens.literals.string,
            },
          },
          {
            name: "Numeric Literal",
            scope: ["constant.numeric"],
            settings: {
              foreground: schema.tokens.literals.number,
            },
          },
        ],
        // json.keyLevels
        ...jsonTokenLevels(schema.json.keyLevels),
      ],
      colors: {
        "terminal.foreground": schema.ui.text,
        "terminal.background": schema.terminal.background,
        // "terminal.border": "#FF00FF",
        // "terminal.dropBackground": "#FF00FF",
        // "terminal.tab.activeBoarder": "#FF00FF",
        "terminal.selectionBackground": schema.terminal.selection,
        "terminalCursor.background": schema.terminal.selection,
        "terminalCursor.foreground": schema.ui.text,
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

/** Returns the token matchers for json keys up to deph 250.
 *
 * @param {string[]} colors json key levels colors
 * @returns {[]} a list of json key level tokens
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
