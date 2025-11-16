import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  pluginJs.configs.recommended,
  {
    files: ["src/**/*.js", "tests/**/*.js", "scripts/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,   // ajoute process, module, require, etc.
        ...globals.jest    // ajoute describe, it, expect, beforeAll, afterAll
      }
    },
    rules: {
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "no-console": "off",
      "no-undef": "off" // désactive car les globals sont définis ci-dessus
    }
  }
];
