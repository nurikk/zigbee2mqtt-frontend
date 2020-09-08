module.exports = {
    env: {
        browser: true,
    },
    extends: ["preact", "plugin:@typescript-eslint/recommended"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: "module",
    },
    rules: {
        "react/display-name": "off",
    },
    settings: {
        react: {
            pragma: "h",
            version: "detect",
        },
    },
    overrides: [
        {
            files: ["*.js", "*.ts", "*.tsx"],
            rules: {
                "@typescript-eslint/explicit-function-return-type": "off",
            },
        },
    ],
};
