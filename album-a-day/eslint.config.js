import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import css from "@eslint/css";
import stylistic from "@stylistic/eslint-plugin";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{ts,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  {
    files: ["**/*.{jsx,tsx}"],
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    files: ["**/*.{jsx,tsx}"],
    ...pluginReact.configs.flat["jsx-runtime"],
  },
  {
    files: ["**/*.css"],
    plugins: { css },
    language: "css/css",
    extends: ["css/recommended"],
  },
  {
    files: ["**/*.{ts,tsx}"],
    // ...stylistic.configs.recommended,
    ...stylistic.configs.customize({
      indent: "tab",
      quotes: "double",
      semi: false,
    }),
  },
]);
