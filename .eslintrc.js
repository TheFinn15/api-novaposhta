module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true,
      jsx: true,
      impliedStrict: true,
    },
    project: './tsconfig.json',
    // See https://github.com/typescript-eslint/typescript-eslint/issues/864
    // Becomes VERY SLOW
    // createDefaultProgram:true,
    extraFileExtensions: ['.vue'],
  },
  extends: [
    'airbnb-typescript/base',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/typescript',

    // vue-eslint-parser
    'plugin:vue/recommended',

    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    // Next lines to disable conflicting rules with Prettier
    // Must be last line
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
  // add your custom rules here
  rules: {
    // Hide prettier errors
    'prettier/prettier': 0,
    // Turned off indent - ternary operator conflicts with prettier
    // indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: '{@,~}/**',
            group: 'external',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    // Use function hoisting to improve code readability
    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
    // Makes no sense to allow type inferrence for expression parameters, but require typing the response
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true, typedefs: true },
    ],
    '@typescript-eslint/explicit-function-return-type': [
      'off',
      { allowTypedFunctionExpressions: true },
    ],
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    'no-console': ['warn'],
    'eol-last': ['error', 'always'],

    // Too restrictive, writing ugly code to defend against a very unlikely scenario:
    // https://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': 'off',

    // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    // See https://github.com/typescript-eslint/typescript-eslint/issues/2545
    'import/no-duplicates': 'off',
    'import/no-cycle': 'off',

    // Common abbreviations are known and readable
    'unicorn/prevent-abbreviations': 'off',
    // Airbnb prefers forEach
    'unicorn/no-array-for-each': 'off',

    // https://www.elsewebdevelopment.com/typescript-airbnb-style-guide-optimized-for-prettier-in-one-json-file/
    // Limit Cyclomatic Complexity
    complexity: ['error', 11],
    // Enforce a maximum depth that blocks can be nested
    'max-depth': ['error', 4],
    // Enforce a maximum file length
    'max-lines': [
      'error',
      {
        max: 1350,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    // Enforce a maximum function length
    'max-lines-per-function': [
      'error',
      {
        max: 50,
        skipBlankLines: true,
        skipComments: true,
        IIFEs: true,
      },
    ],
    // Enforce a maximum depth that callbacks can be nested
    'max-nested-callbacks': ['error', 3],
    // Enforce a maximum number of parameters in function definitions
    'max-params': ['error', 5],
    // Enforce a maximum number of statements allowed per block
    'max-statements': ['error', 13],
    // Enforce a maximum number of statements allowed per line
    'max-statements-per-line': 2,

    // many false positives in TS, rely on compilation
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'class-methods-use-this': 0,
    // vue
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      { registeredComponentsOnly: true },
    ],
    'vue/prop-name-casing': ['error'],
    'vue/attribute-hyphenation': ['error', 'always'],
    'vue/html-quotes': ['error', 'double', { avoidEscape: true }],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
        },
      },
    ],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/html-indent': 'off',

    // False positives while using vuex store
    '@typescript-eslint/no-unsafe-member-access': 0,
    '@typescript-eslint/no-unsafe-call': 0,
    // false positive in .ts
    'require-await': 0,
    'no-useless-constructor': 0,
    'no-undef': 0,
  },

  overrides: [
    {
      files: ['*.vue'],
      rules: {
        // vue-loader expects default export to be present
        'import/no-default-export': 0,
        // @Components components prop has `any` type
        '@typescript-eslint/no-unsafe-assignment': 0,
        'max-lines': [
          'error',
          {
            max: 650,
            skipBlankLines: true,
            skipComments: true,
          },
        ],
        // Vue automatically binds all methods to this
        '@typescript-eslint/unbound-method': 0,
      },
    },
    {
      files: ['{middleware,plugins,server-middleware,store}/**/*.{js,ts}'],
      rules: {
        'import/no-default-export': 0,
      },
    },
    {
      files: ['nuxt.config.ts'],
      rules: {
        'max-lines': 0,
        'max-lines-per-function': 0,
        'import/no-default-export': 0,
        'no-param-reassign': 0,
        '@typescript-eslint/no-unsafe-member-access': 0,
        '@typescript-eslint/no-explicit-any': 0,
      },
    },
    {
      files: ['*.{ts,tsx}'],
      rules: {
        // fix false errors on TS overloaded methods
        'no-dupe-class-members': 'off',
      },
    },
    {
      files: ['*.d.ts'],
      rules: {
        // fix false errors in TS definitions
        '@typescript-eslint/no-shadow': 'off',
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-unsafe-assignment': 0,
        '@typescript-eslint/no-unsafe-call': 0,
      },
    },
  ],
};
