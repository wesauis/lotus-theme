import chalk from "chalk";

const prefixes = {
  info: chalk.cyan("info"),
  warn: chalk.yellow("warn"),
  error: chalk.red("error"),
  verbose: chalk.magentaBright("verbose"),
  debug: chalk.magenta("debug"),
};

const info = console.info;
console.info = (...data) => {
  if (typeof data[0]?.id === "string") {
    info(`${prefixes.info}(${data[0]?.id})`, ...data.slice(1));
    return;
  }

  info(prefixes.info, ...data);
};

const warn = console.warn;
console.warn = (...data) => {
  warn(prefixes.warn, ...data);
};

const error = console.error;
console.error = (...data) => {
  if (data[0] instanceof Error) {
    error(prefixes.error, data[0].message);
    return;
  }

  error(prefixes.error, ...data);
};
