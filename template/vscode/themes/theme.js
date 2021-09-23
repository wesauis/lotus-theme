const staticTokens = require("./tokens/__static.js");
const typeTokens = require("./tokens/__types.js");
const operatorTokens = require("./tokens/__operators.js");
const languageTokens = require("./tokens/__language.js");
const literalTokens = require("./tokens/__literals.js");
const markdownTokens = require("./tokens/__markdown.js");
const keyLevels = require("./tokens/__key_levels.js");
const regexpTokens = require("./tokens/__regexp.js");

const terminalColors = require("./ui/__terminal.js");

/** @type {import('../../../assembler/src/template').GenPack} */
module.exports = (schemas) => {
  return schemas.map((schema) => {
    const ui = { ...schema.ui, ...schema.vscode };

    return [
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
          "variable.defaultLibrary": schema.tokens.language.builtin,
        },
        tokenColors: [
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
            end: [
              "meta.object-literal.key",
              "meta.object-literal.key string",
              "variable",
            ], // variable, quoted string or not,
            levels: 16,
          }),
          ...keyLevels("SCSS Map", schema.tokens.keyLevels, {
            // TODO string value has the wrong color
            source: "scss|css.scss",
            repeat: "meta.definition.variable.map",
            end: ["string.quoted", "support.type.map.key"],
            levels: 16,
          }),
          ...regexpTokens(schema),
        ],
        colors: {
          /// https://code.visualstudio.com/api/references/theme-color

          ...terminalColors(schema),

          /// BREADCRUMB
          "breadcrumb.activeSelectionForeground": ui.breadcrumb.active,
          "breadcrumb.background": ui.breadcrumb.background,
          "breadcrumb.focusForeground": ui.breadcrumb.focus,
          "breadcrumb.foreground": ui.breadcrumb.foreground,
          "breadcrumbPicker.background": ui.breadcrumb.background,

          /// BUTTON
          "button.background": ui.button.primary.background,
          "button.foreground": ui.button.primary.foreground,
          "button.hoverBackground": ui.button.primary.hover,
          "button.secondaryBackground": ui.button.secondary.background,
          "button.secondaryForeground": ui.button.secondary.foreground,
          "button.secondaryHoverBackground": ui.button.secondary.hover,

          /// CHECKBOX
          "checkbox.foreground": ui.checkbox.foreground,
          "checkbox.background": ui.checkbox.background,
          "checkbox.border": ui.checkbox.border,

          /// DIFF EDITOR
          "diffEditor.insertedTextBackground": ui.gitStatus.added + "25",
          "diffEditor.removedTextBackground": ui.gitStatus.deleted + "25",

          /// ICONBAR
          "activityBar.background": ui.iconbar.background,
          "activityBar.dropBorder": ui.iconbar.inactive,
          "activityBar.foreground": ui.iconbar.foreground,
          "activityBar.inactiveForeground": ui.iconbar.inactive,
          "activityBar.border": ui.iconbar.border,
          "activityBarBadge.background": ui.iconbar.badge.background,
          "activityBarBadge.foreground": ui.iconbar.badge.foreground,
          "activityBar.activeBorder": ui.iconbar.marker,
          "activityBar.activeBackground": null,
          "activityBar.activeFocusBorder": null,

          ...{
            /// GENERIC
            foreground: "#D4D1D1",
            focusBorder: ui.focusBorder,
            descriptionForeground: "#D4D1D1",
            errorForeground: "#f07178",
            "welcomePage.buttonBackground": "#1C1E26",
            "welcomePage.buttonHoverBackground": "#444d56",

            /// INDENT GUIDE
            "editorIndentGuide.background": ui.indentGuide.inactive,
            "editorIndentGuide.activeBackground": ui.indentGuide.active,
            "tree.indentGuidesStroke": ui.indentGuide.active,

            /// EDITOR
            "editor.background": ui.editor.background,
            "editor.findMatchBackground": "#ffd33d44",
            "editor.findMatchHighlightBackground": "#ffd33d22",
            "editor.focusedStackFrameHighlightBackground": "#b808",
            "editor.foldBackground": "#282e33",
            "editor.foreground": "#E4E1E1",
            "editor.inactiveSelectionBackground": "#3392FF22",
            "editor.lineHighlightBackground": "#2b3036",
            "editor.selectionBackground": "#3392FF44",
            "editor.selectionHighlightBackground": "#17E5E633",
            "editor.selectionHighlightBorder": "#17E5E600",
            "editor.stackFrameHighlightBackground": "#a707",
            "editor.wordHighlightBackground": "#17E5E600",
            "editor.wordHighlightBorder": "#17E5E699",
            "editor.wordHighlightStrongBackground": "#17E5E600",
            "editor.wordHighlightStrongBorder": "#17E5E666",
            "editorBracketMatch.background": "#17E5E650",
            "editorBracketMatch.border": "#17E5E600",
            "editorCursor.foreground": "#c8e1ff",
            "editorGroup.border": ui.editor.border,
            "editorLineNumber.activeForeground": "#E4E1E1",
            "editorLineNumber.foreground": "#444d56",
            "editorOverviewRuler.border": "#0000",
            "editorWhitespace.foreground": "#444d56",

            /// TAB
            "editorGroupHeader.tabsBackground": ui.tab.empty.background,
            "editorGroupHeader.tabsBorder": ui.tab.border,
            "tab.activeBackground": ui.tab.active.background,
            "tab.activeBorder": ui.tab.active.border.b,
            "tab.activeBorderTop": ui.tab.active.border.t,
            "tab.activeForeground": "#E4E1E1",
            "tab.border": "#0000",
            "tab.hoverBackground": "#272A35",
            "tab.inactiveBackground": ui.tab.inactive.background,
            "tab.inactiveForeground": "#D4D1D1",
            "tab.unfocusedActiveBorder": ui.tab.unfocused.border,
            "tab.unfocusedActiveBorderTop": "#0000",
            "tab.unfocusedHoverBackground": "#272A35",

            /// DOCBOX
            "editorWidget.background": ui.docbox.background,

            /// GIT
            "editorGutter.addedBackground": ui.gitStatus.added,
            "editorGutter.modifiedBackground": ui.gitStatus.modified,
            "editorGutter.deletedBackground": ui.gitStatus.deleted,
            "gitDecoration.addedResourceForeground": ui.gitStatus.added,
            "gitDecoration.conflictingResourceForeground":
              ui.gitStatus.conflict,
            "gitDecoration.deletedResourceForeground": ui.gitStatus.deleted,
            "gitDecoration.ignoredResourceForeground": ui.gitStatus.ignored,
            "gitDecoration.submoduleResourceForeground": ui.gitStatus.submodule,
            "gitDecoration.modifiedResourceForeground": ui.gitStatus.modified,
            "gitDecoration.untrackedResourceForeground": ui.gitStatus.untracked,

            /// NOTIFICATIONS
            "notificationCenterHeader.background": ui.notification.background,
            "notificationCenterHeader.foreground": ui.notification.header,
            "notifications.background": ui.notification.background,
            "notifications.border": ui.notification.border,
            "notifications.foreground": ui.notification.foreground,
            "notificationsErrorIcon.foreground": ui.notification.icon.error,
            "notificationsInfoIcon.foreground": ui.notification.icon.info,
            "notificationsWarningIcon.foreground": ui.notification.icon.warn,

            /// PANEL
            "panel.background": ui.panel.background,
            "panel.border": ui.panel.border,
            "panelInput.border": "#1C1E26",
            "panelTitle.activeBorder": ui.panel.marker,
            "panelTitle.activeForeground": "#E4E1E1",
            "panelTitle.inactiveForeground": "#D4D1D1",

            /// SIDEBAR
            "sideBar.background": ui.sidebar.background,
            "sideBar.border": ui.sidebar.border,
            "sideBar.foreground": "#D4D1D1",
            "sideBarTitle.foreground": "#E4E1E1",
            "sideBarSectionHeader.background": ui.sidebar.header.background,
            "sideBarSectionHeader.border": "#0000",
            "sideBarSectionHeader.foreground": "#E4E1E1",

            /// STATUSBAR
            "statusBar.background": ui.statusbar.default,
            "statusBar.border": ui.statusbar.border,
            "statusBar.foreground": "#D4D1D1",
            "statusBar.debuggingBackground": ui.statusbar.debug,
            "statusBar.debuggingForeground": "#E4E1E1",
            "statusBar.noFolderBackground": ui.statusbar.default,
            "statusBarItem.prominentBackground": "#1C1E26",

            /// TITLEBAR
            "titleBar.activeBackground": ui.titlebar.active.background,
            "titleBar.activeForeground": "#E4E1E1",
            "titleBar.border": "#0000",
            "titleBar.inactiveBackground": ui.titlebar.inactive.background,
            "titleBar.inactiveForeground": "#D4D1D1",

            /// TEXT
            "textBlockQuote.background": "#1C1E26",
            "textBlockQuote.border": "#444d56",
            "textCodeBlock.background": "#1C1E26",
            "textLink.activeForeground": ui.text.link.hover,
            "textLink.foreground": ui.text.link.color,
            "textPreformat.foreground": "#D4D1D1",
            "textSeparator.foreground": "#586069",

            /// MINIMAP
            "minimap.background": ui.minimap.background,

            /// DROPDOWN
            "dropdown.background": "#1C1E26",
            "dropdown.border": "#E87DC416",
            "dropdown.foreground": "#E4E1E1",
            "dropdown.listBackground": "#1C1E26",

            /// INPUT
            "input.background": "#1C1E26",
            "input.border": "#E87DC416",
            "input.foreground": "#E4E1E1",
            "input.placeholderForeground": "#D4D1D1",
            "quickInput.background": "#1C1E26",
            "quickInput.foreground": "#E4E1E1",

            /// LIST
            "list.hoverBackground": "#272A35",
            "list.inactiveSelectionBackground": "#1C1E26",
            "list.hoverForeground": "#E4E1E1",
            "list.activeSelectionForeground": "#E4E1E1",
            "list.activeSelectionBackground": "#272A35",
            "list.inactiveFocusBackground": "#272A35",
            "list.focusBackground": "#044289",
            "list.inactiveSelectionForeground": "#E4E1E1",

            /// PEEK
            "peekViewEditor.matchHighlightBackground": "#ffd33d33",
            "peekViewResult.background": "#1C1E26",
            "peekViewResult.matchHighlightBackground": "#ffd33d33",

            /// PROGRESS BAR
            "progressBar.background": "#E87DC4",

            /// BADGE
            "badge.foreground": "#c8e1ff",
            "badge.background": "#044289",

            /// PICKER?
            "pickerGroup.border": "#444d56",
            "pickerGroup.foreground": "#E4E1E1",

            /// SCROLL
            "scrollbar.shadow": "#0008",
            "scrollbarSlider.background": "#6A737D33",
            "scrollbarSlider.hoverBackground": "#6A737D44",
            "scrollbarSlider.activeBackground": "#6A737D88",

            /// DEBUG
            "debugToolBar.background": "#1C1E26",

            /// SETTINGS
            "settings.headerForeground": "#E4E1E1",
            "settings.modifiedItemIndicator": "#E87DC4",
          },
        },
      },
    ];
  });
};
