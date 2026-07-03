import baseConfig from "../shared/config/eslint.config.base.js";
import react from "eslint-plugin-react";

export default [
  ...baseConfig,
  {
    settings: { react: { version: "18.3" } },
    plugins: { react },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      "react/jsx-no-target-blank": "off",
    },
  },
];
