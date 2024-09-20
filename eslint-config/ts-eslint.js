const baseEslint = require('./base.js');

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['../tsconfig.json'],
    sourceType: 'module',
  },
  plugins: [...baseEslint.plugins, '@typescript-eslint', '@typescript-eslint/eslint-plugin'],
  extends: [
    ...baseEslint.extends,
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  rules: {
    ...baseEslint.rules,
    'import/no-unresolved': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: false }],
    '@typescript-eslint/no-invalid-this': ['error'],
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/semi': ['error', 'always'],
  },

  settings: {
    ...baseEslint.settings,
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
      moduleDirectory: ['node_modules', 'src/'],
    },
  },
};
