module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['next', 'next/core-web-vitals', 'airbnb', 'airbnb/hooks', 'plugin:jest/recommended', 'prettier'],
    plugins: ['react', 'prettier', 'unused-imports'],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    // plugins: ['prettier', 'unused-imports'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    settings: {
        jest: {
            version: 29,
        },
    },
    rules: {
        /* Common rules */
        'prettier/prettier': 'error',
        'no-undef': 'error',
        'arrow-body-style': 'off',
        'arrow-parens': 'off',
        'class-methods-use-this': 'off',
        'consistent-return': 'off',
        curly: ['error', 'multi-line'],
        'function-paren-newline': 'off',
        'no-await-in-loop': 'off',
        'no-bitwise': 'off',
        'no-continue': 'off',
        'no-irregular-whitespace': 'off',
        'no-param-reassign': 'off',
        'no-plusplus': 'off',
        'jsx-a11y/heading-has-content': 'off',
        'no-restricted-syntax': 'off',
        'no-underscore-dangle': 'off',
        'no-nested-ternary': 'off',
        'max-params': ['error', { max: 5 }],
        'no-multiple-empty-lines': 'error',
        complexity: ['error', 35],
        quotes: [
            'error',
            'single',
            {
                // for multi-line strings
                allowTemplateLiterals: true,
                avoidEscape: true,
            },
        ],
        'comma-dangle': [
            'error',
            {
                arrays: 'only-multiline',
                objects: 'only-multiline',
                imports: 'only-multiline',
                exports: 'only-multiline',
                functions: 'only-multiline',
            },
        ],
        /* Imports / Requires */

        'global-require': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'import/no-cycle': 'off',
        'import/no-dynamic-require': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/no-named-as-default': 'off',
        'import/prefer-default-export': 'off',
        // To be tweaked to be compatible with VSCode sort extension
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal', 'index', 'sibling', 'parent'],
                pathGroups: [
                    {
                        pattern: '@/**',
                        group: 'internal',
                    },
                ],
                'newlines-between': 'always',
            },
        ],
        'unused-imports/no-unused-imports': 'error',

        /* Jest */

        'jest/no-done-callback': 'off',
        'jest/expect-expect': 'off',

        /* Accessibility */

        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: ['Link'],
                specialLink: ['to', 'onClick'],
            },
        ],
        'jsx-a11y/label-has-associated-control': [
            'error',
            {
                required: {
                    some: ['nesting', 'id'],
                },
            },
        ],

        /* React */

        'react-hooks/exhaustive-deps': 'off',
        'react/destructuring-assignment': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-key': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/no-unused-prop-types': [1],
        'react/prop-types': 'off',
        'react/jsx-no-useless-fragment': 'off',
        // eslint-disable-next-line no-bitwise
        'react/no-unstable-nested-components': ['off' | 'warn' | 'error', { allowAsProps: true | false }],
        'react/function-component-definition': 'off',
        'react/button-has-type': 'off',
        'react/no-array-index-key': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-noninteractive-element-interactions': 'off',
    },
    ignorePatterns: ['.eslintrc.js'],
};
