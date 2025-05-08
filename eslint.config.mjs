import { dirname } from "path";
import { fileURLToPath } from "url";
// import { FlatCompat } from "@eslint/eslintrc";
import typescriptEslint from "typescript-eslint";
import globals from "globals";
import pluginImport from "eslint-plugin-import";
import pluginUnusedImports from "eslint-plugin-unused-imports";
import pluginReactHooks from "eslint-plugin-react-hooks";
import nextPlugin from "@next/eslint-plugin-next";
import prettierConfig from "eslint-config-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default [
  {
    ignores: [
      "**/.next/**/*",
      "*.config.*",
      "dist/**",
      "**/*.css.d.ts",
      "**/*.css.d.ts.map",
      "types/strapi.d.ts",
      "remoteOptimizedImages.js"
    ],
  },
  ...typescriptEslint.configs.recommended,
  // JSX/TS/JS共通ルール
  {
    files: ["**/*.{ts,tsx,js,jsx,mts,mjs}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      import: pluginImport,
      "unused-imports": pluginUnusedImports,
      "react-hooks": pluginReactHooks,
      "@next/next": nextPlugin,
      prettier: prettierConfig,
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      "@next/next/no-img-element": "off",
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
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/consistent-type-definitions": "off",
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
