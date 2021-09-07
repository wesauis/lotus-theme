const staticTokens = require("./tokens/__static.js");
const typeTokens = require("./tokens/__types.js");
const operatorTokens = require("./tokens/__operators.js");
const languageTokens = require("./tokens/__language.js");
const literalTokens = require("./tokens/__literals.js");
const markdownTokens = require("./tokens/__markdown.js");
const keyLevels = require("./tokens/__key_levels.js");

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
        struct: schema.tokens.types.struct,
        type: schema.tokens.types.type,
        variable: schema.tokens.language.variable,
        "variable.defaultLibrary": schema.tokens.language.builtin,
      },
      tokenColors: [
        // TODO git_gutter
        // TODO regex highlight
        // TODO string template parenthesis (test1: html.js vs js.html)
        // TODO samples for `*.{css,sass,scss,less,stylus,postcss}`
        // TODO samples for all tested languages
        ...staticTokens,
        ...typeTokens(schema),
        ...operatorTokens(schema),
        ...languageTokens(schema),
        ...literalTokens(schema),
        ...markdownTokens(schema),
        ...keyLevels("JSON", schema.tokens.keyLevels, {
          source: "json",
          repeat: "meta.structure.dictionary",
          end: "support.type.property-name",
          levels: 50,
        }),
        ...keyLevels("JS/TS Object Literal", schema.tokens.keyLevels, {
          // TODO `{[<keyvar>]: {}}` conflict with semantic.variable
          source: "js|ts",
          repeat: "meta.objectliteral meta.object.member",
          end: ["meta.object-literal.key", "meta.object-literal.key string", "variable"], // variable, quoted string or not,
          levels: 16,
        }),
        ...keyLevels("SCSS Map", schema.tokens.keyLevels, {
          // TODO string value has the wrong color
          source: "scss|css.scss",
          repeat: "meta.definition.variable.map",
          end: ["string.quoted", "support.type.map.key"],
          levels: 16,
        }),
        // TODO tokenize keylevels: py,php,c#,dart,yaml,go
        // TODO tokenize proplevels: js,ts
        // TODO more realistic keylevel test
      ],
      colors: {
        "terminal.foreground": schema.ui.text,
        "terminal.background": schema.terminal.background,
        // "terminal.border": "#F0F",
        // "terminal.dropBackground": "#F0F",
        // "terminal.tab.activeBoarder": "#F0F",
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
        "terminal.ansiMagenta": schema.terminal.magenta,
        "terminal.ansiBrightMagenta": schema.terminal.magentaBright,
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
