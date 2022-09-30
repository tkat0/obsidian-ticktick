module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: { node: true },
  plugins: ['@typescript-eslint', 'svelte3'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  rules: {
    'no-unused-vars': 'off',
    'no-undef': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
    '@typescript-eslint/ban-ts-comment': 'off',
    'no-prototype-builtins': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
  settings: {
    'svelte3/typescript': true,
  },
};
