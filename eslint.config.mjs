import oxlint from "eslint-plugin-oxlint";
import reactHooks from "eslint-plugin-react-hooks";
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

      // React-specific configurations
      reactHooks.configs.flat.recommended,

      oxlint.configs["flat/recommended"],
    ],
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
