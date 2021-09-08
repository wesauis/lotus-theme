import chalk from "chalk";

const prefixes = {
  info: chalk.cyan("info"),
  warn: chalk.yellow("warn"),
  error: chalk.red("error"),
  verbose: chalk.magentaBright("verbose"),
  debug: chalk.magenta("debug"),
};

export function init() {
  const info = console.info;
  console.info = (...data) => {
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
      data[0].stack && error(data[0].stack);
      return;
    }

    error(prefixes.error, ...data);
  };
}

export function infoOf(id: string, schema?: string) {
  return schema
    ? (...data) => {
        console.log(`${prefixes.info}(${id}/${schema})`, ...data);
      }
    : (...data) => {
        console.log(`${prefixes.info}(${id})`, ...data);
      };
}
