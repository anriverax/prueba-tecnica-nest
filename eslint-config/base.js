module.exports = {
  plugins: ['prettier'],
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
  ],
  rules: {
    semi: ['error', 'always'],
    camelcase: 'error',
    'space-in-parens': ['error', 'never'],
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'no-cond-assign': ['error', 'always'],
    'default-param-last': ['error'],
    'arrow-body-style': ['error', 'as-needed'],
    'comma-style': ['error', 'last'],
    'array-element-newline': ['error', 'consistent'],
    'array-bracket-spacing': ['error', 'never'],
    'import/default': 2,
    'import/export': 2,
    'block-spacing': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': 'error',
    'no-trailing-spaces': 'error',
    'import/no-named-as-default': 'error',
    'import/first': 'error',
    'semi-spacing': 'error',
    'no-async-promise-executor': 'warn',
    'template-curly-spacing': 'error',
    'prefer-promise-reject-errors': 'warn',
    'no-self-compare': 'error',
    'no-empty': 'error',
    'no-eq-null': 'error',
    'prefer-template': 'error',
    'prefer-object-spread': 'warn',
    'no-invalid-this': 'error',
    'no-use-before-define': 'error',
    'no-template-curly-in-string': 'error',
    'no-constant-condition': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-imports': 'error',
    'valid-typeof': 'error',
    'no-var': 'error',
    'no-useless-concat': 'error',
    'no-new-wrappers': 'error',
    'no-unused-expressions': 'warn',
    'no-unneeded-ternary': 'warn',
    'no-throw-literal': 'error',
    'no-restricted-syntax': 'warn',
    'no-return-assign': 'warn',
    'block-scoped-var': 'error',
    'default-case': 'error',
    'arrow-spacing': 'error',
    'no-lonely-if': 'error',
    'brace-style': 'error',
    'keyword-spacing': [
      'error',
      {
        before: true,
      },
    ],
    'key-spacing': [
      'error',
      {
        beforeColon: false,
      },
    ],
    'prefer-destructuring': [
      'error',
      {
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'no-else-return': [
      'warn',
      {
        allowElseIf: false,
      },
    ],
    'computed-property-spacing': [
      'error',
      'never',
      {
        enforceForClassMembers: true,
      },
    ],
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
    'object-curly-newline': [
      'error',
      {
        consistent: true,
      },
    ],
    'max-len': [
      'error',
      {
        code: 200,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreStrings: true,
        ignoreUrls: true,
        ignorePattern: 'd="([\\s\\S]*?)"',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
