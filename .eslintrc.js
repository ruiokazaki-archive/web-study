module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@next/next/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    '@typescript-eslint',
    'import',
    'unused-imports',
    'jsx-a11y',
    'prefer-arrow',
    'react',
    'react-hooks',
  ],
  rules: {
    // void を式として使用を禁止する
    'no-void': [
      'error',
      {
        allowAsStatement: true,
      },
    ],
    // return の前には空行を入れる
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
    ],
    // 使用してない変数の定義を禁止する。_はセーフ
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        argsIgnorePattern: '_',
        ignoreRestSiblings: false,
        varsIgnorePattern: '_',
      },
    ],
    // import の際下記以外は拡張子を記述させる
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    // 関数に返り値しかない場合は () => () のようにする
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],
    // 全ての関数を arrow function にする
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
    // eslint-config-airbnb で .jsx のみになっているので拡張
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    // コンポーネントを呼ぶ際の props の記述にスプレット構文を許さない
    'react/jsx-props-no-spreading': [
      'error',
      {
        html: 'enforce',
        custom: 'enforce',
        explicitSpread: 'ignore',
      },
    ],
    // jsxを記述する際にreactをimportするのを強制するのを無効にした
    'react/react-in-jsx-scope': 'off',
    // Promise を未処理にしたいケースがあるため無効にした
    '@typescript-eslint/no-floating-promises': 'off',
    // アップデートに伴い import React from 'react' がエラー扱いとなってしまうのを修正した
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    // console は warn と error のみ許可する
    'no-console': ['error', { allow: ['warn', 'error'] }],
    // import の順番を統一化する
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports-ts': 'warn',
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: { order: 'asc', caseInsensitive: true },
        pathGroups: [
          { pattern: 'src/types/**', group: 'internal', position: 'before' },
          {
            pattern: 'src/components/**',
            group: 'internal',
            position: 'before',
          },
          { pattern: 'src/pages/**', group: 'internal', position: 'before' },
          { pattern: 'src/libs/**', group: 'internal', position: 'before' },
          { pattern: 'src/theme/**', group: 'internal', position: 'before' },
          { pattern: 'src/utils/**', group: 'internal', position: 'before' },
          { pattern: 'src/hooks/**', group: 'internal', position: 'before' },
        ],
      },
    ],
    // commit時にformatが走るため、indent関連のルールをオフにした
    'implicit-arrow-linebreak': 'off',
    indent: 'off',
    'react/jsx-indent': 'off',
    // useEffect の配列を空にするとエラーになり、意図しない挙動を作るためオフにした
    'react-hooks/exhaustive-deps': 'off',
    // import の数が多くなると改行されるが、prettier の改行のタイミングと異なるため prettier に合わせた
    'object-curly-newline': 'off',
    // _app.tsx で props のエラーが出るため無効化する
    'react/jsx-props-no-spreading': 'off',
    // storybook のみ devDependencies からの importでエラーを出さない様にする
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.stories.tsx'],
        optionalDependencies: false,
      },
    ],
  },
  overrides: [
    {
      files: ['*.tsx'],
      rules: {
        // props を定義するのを強制するルール、typescriptを使用しているため無効
        'react/prop-types': 'off',
      },
    },
  ],
  settings: {
    // 絶対パスを src にしたことで解決できずエラーが出てしまうのを解決
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};
