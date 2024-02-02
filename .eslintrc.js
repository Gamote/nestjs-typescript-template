/**
 * We have used the ESLint configuration from the Universe project together with the TypeScript analysis configuration.
 * Read more in here: https://github.com/expo/expo/tree/main/packages/eslint-config-universe#eslint-config-universe
 *
 * ℹ️ We have also added the "eslint-plugin-promise" package to the ESLint configuration.
 *  Using: "plugin:promise/recommended"
 *
 * TODO: Should we add `eslint-plugin-vitest`?
 */
/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    'universe',
    'universe/node',
    'universe/shared/typescript-analysis',
    'plugin:promise/recommended',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        // It will enforce the use of `void` or `await` in front of the promise
        'no-void': ['error', { allowAsStatement: true }],
        '@typescript-eslint/no-floating-promises': 2,

        // This is very important, it will enforce the use of `await` inside `try-catch` blocks
        // Without this rule, the code will not be able to catch the error from the promise
        '@typescript-eslint/return-await': ['error', 'in-try-catch'],
      },
    },
  ],
};
