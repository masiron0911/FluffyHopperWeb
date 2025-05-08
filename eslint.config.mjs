import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import typescriptEslint from "typescript-eslint";
import parser from "@typescript-eslint/parser";
import globals from "globals";
import pluginImport from "eslint-plugin-import";
import pluginUnusedImports from "eslint-plugin-unused-imports";
import pluginReactHooks from "eslint-plugin-react-hooks";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  {
    ignores: ["**/.next/**/*", "*.config.*", "dist/**", "**/*.css.d.ts", "**/*.css.d.ts.map", "types/strapi.d.ts", "remoteOptimizedImages.js"],
  },
  ...typescriptEslint.configs.recommended,
  ...compat.extends(
    "plugin:react/recommended",
    "next/core-web-vitals",
    "next/typescript",
    "prettier"
  ),
  {
    files: ["**/*.{ts,js,mts,mjs}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      import: pluginImport,
      "unused-imports": pluginUnusedImports,
      "react-hooks": pluginReactHooks,
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      "@next/next/no-img-element": "off",
      "import/no-default-export": "error",
      "import/no-anonymous-default-export": ["error", { allowArray: false }],
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "all",
          argsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/explicit-module-boundary-types": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    },
  },
  {
    files: ["*.mjs"],
    rules: {
      "import/no-anonymous-default-export": [
        "error",
        { allowArray: true, allowObject: true },
      ],
    },
  },
];
