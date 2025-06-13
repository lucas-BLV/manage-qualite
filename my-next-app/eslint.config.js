// eslint.config.js
import reactPlugin from "eslint-plugin-react";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";

import reactRecommended from "eslint-plugin-react/configs/recommended.js";
import typescriptRecommended from "@typescript-eslint/eslint-plugin/dist/configs/recommended.js";

export default [
  // Etendre les configs recommandées directement dans le tableau
  ...reactRecommended,
  ...typescriptRecommended,

  {
    files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: "module",
      parser: typescriptParser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      react: reactPlugin,
      "@typescript-eslint": typescriptPlugin,
    },
    rules: {
      // Tes règles custom
      "react/jsx-uses-react": "warn",
      "react/jsx-uses-vars": "warn",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/explicit-function-return-type": "off",
    },
  },
];
