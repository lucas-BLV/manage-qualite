// my-next-app/eslint.config.js
import eslintPluginReact from 'eslint-plugin-react';

export default [
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      react: eslintPluginReact,
    },
    rules: {
      'react/jsx-uses-react': 'warn',
      'react/jsx-uses-vars': 'warn',
    },
  },
];
