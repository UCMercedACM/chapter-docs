import docusaurus from "@docusaurus/eslint-plugin";
import oxlint from "eslint-plugin-oxlint";
import perfectionist from "eslint-plugin-perfectionist";
import reactDom from "eslint-plugin-react-dom";
import reactJsx from "eslint-plugin-react-jsx";
import reactX from "eslint-plugin-react-x";
import sonarjs from "eslint-plugin-sonarjs";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  globalIgnores([
    "node_modules",
    "dist",

    "src/theme/MDXComponents.tsx",
  ]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      tseslint.configs.base,

      // Docusaurus rules
      docusaurus.configs.flat.recommended,

      // General linter rules
      sonarjs.configs.recommended,

      oxlint.configs["flat/recommended"],
    ],
    plugins: {
      perfectionist,
      "react-dom": reactDom,
      "react-jsx": reactJsx,
      "react-x": reactX,
    },
    rules: {
      // React-specific rules
      "react-dom/no-use-form-state": "error",
      "react-jsx/no-leaked-dollar": "error",
      "react-jsx/no-leaked-semicolon": "error",
      "react-x/no-context-provider": "error",
      "react-x/no-create-ref": "error",
      "react-x/no-forward-ref": "error",
      "react-x/no-use-context": "error",
      "sonarjs/cognitive-complexity": "off",

      // Perfectionist
      "perfectionist/sort-array-includes": "error",
      "perfectionist/sort-classes": "error",
      "perfectionist/sort-decorators": "error",
      "perfectionist/sort-enums": "error",
      "perfectionist/sort-export-attributes": "error",
      "perfectionist/sort-heritage-clauses": "error",
      "perfectionist/sort-import-attributes": "error",
      "perfectionist/sort-intersection-types": "error",
      "perfectionist/sort-maps": "error",
      "perfectionist/sort-object-types": "error",
      "perfectionist/sort-sets": "error",
      "perfectionist/sort-switch-case": "error",
      "perfectionist/sort-variable-declarations": "error",
    },
    settings: {
      perfectionist: { type: "natural", order: "asc" },
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]);
