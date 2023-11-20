module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      'jsx': true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json'
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'react-refresh',
  ],
  rules: {
    '@typescript-eslint/indent': ['error', 4],
    '@typescript-eslint/lines-between-class-members': ['warn', 'always'],
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    '@typescript-eslint/no-import-type-side-effects': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    'eqeqeq': ["error", "always"],
    'id-length': [
      "error",
      {
        "min": 3,
        "max": 40,
        "properties": "never",
        "exceptions": ['x', 'y']
      }
    ],
    'indent': 'off',
    'linebreak-style': [
      'error',
      'unix'
    ],
    'max-classes-per-file': ['error', 1],
    'max-depth': ["error", 4], // Na zvazenie
    'no-alert': 'error',
    'no-empty-function': [
      'error',
      {
        'allow': [
          'getters',
          'setters',
          'constructors',
          'generatorMethods',
          'generatorFunctions'
        ]
      }
    ],
    'no-use-before-define': 'off',
    'quotes': [
      'error',
      'single'
    ],
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-refresh/only-export-components': 'off',
    'react/jsx-filename-extension': ['warn', {'extensions': ['.tsx']}],
    'semi': [
      'error',
      'always'
    ],
  },
  settings: {
    'react': {
      'version': '18.x'
    },
    "import/resolver": {
      alias: {
        map: [
          ["@", "./src"],
          ["@components", "./src/components"],
          ["@modules", "./src/modules"],
          ["@hooks", "./src/hooks"],
          ["@routes", "./src/routes"],
          ["@stores", "./src/stores"],
          ["@assets", "./src/assets"],
          ["@themes", "./src/themes"],
          ["@public", "./public"],
        ],
        extensions: ['.ts', '.tsx', '.json']
      },
    },
  },
  ignorePatterns: [
    "codegen.ts",
    "vite.config.ts",
    "**/generated/*.ts"
  ]
};