import eslint from "@eslint/js";
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.recommended,
    // tseslint.configs.recommendedTypeChecked, // Add type checks.
    {
        languageOptions: {
            globals: {
                ...globals.serviceworker,
                ...globals.browser,
            },
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    {
        files: ['**/*.js'],
        extends: [tseslint.configs.disableTypeChecked],
    },
    {
        rules: {
            '@typescript-eslint/ban-ts-comment': 'off',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
            '@typescript-eslint/no-unused-expressions': 'off',
            'no-case-declarations': 'off',
            'no-prototype-builtins': 'off',
        },
    },
    reactPlugin.configs.flat.recommended,
    reactPlugin.configs.flat['jsx-runtime'],
    {
        settings: {
            react: {
                version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
            },
        },
        rules: {
            'react/no-deprecated': 'warn',
            'react/prop-types': 'off',
        },
    },
    {
        files: ['**/*.{jsx,tsx}'],
        plugins: {
            "react-refresh": reactRefresh,
        },
        rules: {
            'react-refresh/only-export-components': 'warn',
        },
    },
    eslintConfigPrettier, // Avoid conflict with prettier.
);
