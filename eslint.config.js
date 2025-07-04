import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import css from "@eslint/css";
import stylistic from "@stylistic/eslint-plugin";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["src/**/*.{ts,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: { globals: globals.browser },
  },
  tseslint.config({
    files: ["src/**/*.{ts,tsx}"],
    extends: [tseslint.configs.recommended],
  }),
  {
    files: ["src/**/*.{jsx,tsx}"],
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    files: ["src/**/*.{jsx,tsx}"],
    ...pluginReact.configs.flat["jsx-runtime"],
  },
  {
    files: ["src/**/*.css"],
    plugins: { css },
    language: "css/css",
    extends: ["css/recommended"],
  },
  {
    files: ["src/**/*.{ts,tsx}"],
    ...stylistic.configs.customize({
      indent: "tab",
      quotes: "double",
      semi: false,
    }),
  },
]);
