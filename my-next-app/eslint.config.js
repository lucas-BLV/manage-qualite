// my-next-app/eslint.config.js
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginTypescript from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';

export default [
  {
    files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: "module",
      parser,
      parserOptions: {
        project: './tsconfig.json', // nécessaire pour certains checks TS
      },
    },
    plugins: {
      react: eslintPluginReact,
      '@typescript-eslint': eslintPluginTypescript,
    },
    rules: {
      // règles React
      'react/jsx-uses-react': 'warn',
      'react/jsx-uses-vars': 'warn',

      // règles TypeScript recommandées
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-function-return-type': 'off',

      // tu peux ajouter d'autres règles ici
    },
    extends: [
      // tu peux aussi étendre des configs comme recommandées ici
      // mais attention, dans eslint.config.js ce n'est pas la même syntaxe qu'en .eslintrc
    ],
  },
];
