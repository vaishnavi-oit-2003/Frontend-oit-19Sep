import baseConfig from "../shared/config/eslint.config.base.js";

export default [
  ...baseConfig,
  {
    rules: {
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
    },
  },
];
