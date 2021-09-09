/** @type {import('../../assembler/src/template').Gen} */
module.exports = ({ id, name, terminal }) => [
  `${id}.json`,
  {
    name: name,

    background: terminal.background,
    foreground: terminal.foreground,
    selectionBackground: terminal.selection,
    cursorColor: terminal.cursorColor,

    black: terminal.black,
    brightBlack: terminal.blackBright,
    blue: terminal.blue,
    brightBlue: terminal.blueBright,
    cyan: terminal.cyan,
    brightCyan: terminal.cyanBright,
    green: terminal.green,
    brightGreen: terminal.greenBright,
    purple: terminal.magenta,
    brightPurple: terminal.magentaBright,
    red: terminal.red,
    brightRed: terminal.redBright,
    white: terminal.white,
    brightWhite: terminal.whiteBright,
    yellow: terminal.yellow,
    brightYellow: terminal.yellowBright,
  },
];
