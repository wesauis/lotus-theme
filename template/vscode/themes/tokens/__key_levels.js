const repeat = (count, fill) => new Array(count).fill(fill).join(" ");

/** Returns the token matchers for key levels.
 *
 * @param {string} name matcher name
 * @param {string[]} colors an array with the colors for each level
 * @param {{
 *  source: string;
 *  repeat: string;
 *  end: string | string[];
 *  levels: number;
 * }} scope scope matcher options
 * @returns {[]} a list of key level token matchers
 */
module.exports = (name, colors, scope) => {
  if (typeof scope.end === "string") scope.end = [scope.end];
  scope.source = scope.source
    .split("|")
    .flatMap((src) => [`source.${src}`, `meta.embedded.block.${src}`]);

  const createScopes = (index) => {
    const scopeMatchers = [];
    for (let level = index; level < scope.levels; level += colors.length) {
      const middle = repeat(level + 1, scope.repeat);

      scopeMatchers.push(
        ...scope.source.flatMap((source) => {
          return scope.end.map((end) => {
            return `${source} ${middle} ${end}`;
          });
        })
      );
    }
    return scopeMatchers;
  };

  return colors.map((color, index) => ({
    name: `${name} | Level Matcher #${index}`,
    scope: createScopes(index),
    settings: { foreground: color },
  }));
};
