/** @type {import('../../assembler/src/template').Gen} */
module.exports = (schema) => [
  `defaults.json`,
  {
    colorScheme: schema.name,
    tabColor: schema.terminal.background,
  },
];
