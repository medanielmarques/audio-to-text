/** @typedef {import('prettier').Config} PrettierConfig */

/** @type PrettierConfig */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: false,
  quoteProps: "as-needed",
  bracketSpacing: true,
  trailingComma: "es5",
  arrowParens: "avoid",
  endOfLine: "auto",
  bracketSameLine: false,
};

export default config;
