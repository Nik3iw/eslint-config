import type { Config } from "eslint/config";
import { defineConfig } from "eslint/config";
import eslintPluginUnicorn from "eslint-plugin-unicorn";

export function unicornConfig(): Config[] {
  return defineConfig(
    eslintPluginUnicorn.configs.recommended,

    // Rules
    {
      rules: {
        // Not enabled by default
        "unicorn/comment-content": ["warn"],
        "unicorn/consistent-arrow-return-style": ["warn"],
        "unicorn/consistent-destructuring": ["error"],
        "unicorn/consistent-function-style": ["error"],
        "unicorn/custom-error-definition": ["warn"],
        // "unicorn/id-match": ["error"],
        "unicorn/iteration-fallback-style": ["warn"],
        // "unicorn/no-array-front-mutation": ["error"],
        // "unicorn/no-asterisk-prefix-in-documentation-comments": ["warn"],
        // "unicorn/no-barrel-files": ["error"],
        "unicorn/no-invalid-file-input-accept": ["warn"],
        // "unicorn/no-keyword-prefix": ["error"],
        // "unicorn/no-manually-wrapped-comments": ["warn"],
        // "unicorn/no-missing-local-resource": ["warn"],
        "unicorn/no-unreadable-new-expression": ["error"],
        "unicorn/no-unsafe-dom-html": ["error"],
        // "unicorn/no-unused-properties": ["error"],
        // "unicorn/prefer-dispose": ["error"],
        "unicorn/prefer-error-is-error": ["warn"],
        "unicorn/prefer-explicit-viewport-units": ["error"],
        "unicorn/prefer-import-meta-properties": ["warn"],
        "unicorn/prefer-iterator-concat": ["warn"],
        "unicorn/prefer-regexp-escape": ["warn"],
        "unicorn/prefer-short-arrow-method": ["warn"],
        "unicorn/prefer-temporal": ["warn"],
        "unicorn/prefer-uint8array-base64": ["error"],
        // "unicorn/require-frontmatter-fields": ["error"],
        "unicorn/require-post-message-target-origin": ["error"],
        "unicorn/string-content": ["warn"],
        // "unicorn/try-complexity": ["error"],

        // Deactivated by me
        "unicorn/filename-case": ["off"],
        "unicorn/no-null": ["off"],
        "unicorn/name-replacements": ["off"],
      },
    },
  );
}
