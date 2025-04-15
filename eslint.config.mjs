import eslint from "@eslint/js";
import * as tseslint from "@typescript-eslint/eslint-plugin";
import tseslintParser from "@typescript-eslint/parser";
import nextPlugin from "@next/eslint-plugin-next";
import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";
import importPlugin from "eslint-plugin-import";

export default [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    ignores: ["**/node_modules/**", "**/.next/**", "**/dist/**", "**/*.md"],
    plugins: {
      "@typescript-eslint": tseslint.default,
      "@next/next": nextPlugin,
      react: reactPlugin,
      "react-hooks": hooksPlugin,
      import: importPlugin,
    },
    languageOptions: {
      parser: tseslintParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // Include base ESLint rules
      ...eslint.configs.recommended.rules,
      // Include recommended TypeScript rules
      ...tseslint.default.configs.recommended.rules,

      // TypeScript specific rules
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-non-null-assertion": "error",

      // React specific rules
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react/prop-types": "off", // We use TypeScript instead
      "react/react-in-jsx-scope": "off", // Not needed in Next.js
      "react/jsx-curly-brace-presence": [
        "error",
        { props: "never", children: "never" },
      ],

      // React Hooks rules
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // Import rules
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc" },
        },
      ],
      "import/no-duplicates": "error",

      // Next.js specific rules
      "@next/next/no-html-link-for-pages": "error",
      "@next/next/no-img-element": "error",

      // General rules
      "no-console": ["warn", { allow: ["warn", "error"] }],
      eqeqeq: "error",
      "no-unused-expressions": "error",
      "no-var": "error",
      "prefer-const": "error",
      "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],
      quotes: ["error", "double"],
      semi: ["error", "always"],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
