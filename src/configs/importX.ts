import type { Config } from "eslint/config";
import { defineConfig } from "eslint/config";
import { flatConfigs } from "eslint-plugin-import-x";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";

export function importXConfig(): Config[] {
  return defineConfig(
    flatConfigs.recommended,
    flatConfigs.typescript,

    {
      settings: {
        "import-x/resolver-next": [
          createTypeScriptImportResolver({
            alwaysTryTypes: true,
            // TODO: Maybe we need this for projects with multiple tsconfig files
            // project: 'path/to/folder',
          }),
        ],
      },
    },

    // Rules
    {
      rules: {
        // Helpful warnings
        "import-x/no-deprecated": ["error"],
        "import-x/no-empty-named-blocks": ["warn"],
        "import-x/no-extraneous-dependencies": ["error", { optionalDependencies: false }],
        "import-x/no-mutable-exports": ["error"],
        "import-x/no-rename-default": ["error"],
        // "import-x/no-unused-modules": ["off"],

        // Module systems
        "import-x/no-amd": ["error"],
        "import-x/no-commonjs": ["error"],
        "import-x/no-import-module-exports": ["warn"],
        // "import-x/no-nodejs-modules": ["off"], // TODO: Enable this rule in Front-End platforms
        "import-x/unambiguous": ["error"],

        // Static analysis
        "import-x/no-absolute-path": ["warn"],
        "import-x/no-cycle": ["error"],
        "import-x/no-dynamic-require": ["error"],
        // "import-x/no-internal-modules": ["off"],
        "import-x/no-relative-packages": ["warn"],
        // "import-x/no-relative-parent-imports": ["off"],
        // "import-x/no-restricted-paths": ["off"],
        "import-x/no-self-import": ["error"],
        "import-x/no-useless-path-segments": ["warn", { noUselessIndex: true }],
        "import-x/no-webpack-loader-syntax": ["error"],

        // Style guide
        "import-x/consistent-type-specifier-style": ["warn", "prefer-top-level"],
        // "import-x/dynamic-import-chunkname": ["off"],
        // "import-x/exports-last": ["off"],
        "import-x/extensions": ["warn", "never"],
        "import-x/first": ["warn"],
        // "import-x/group-exports": ["off"],
        // "import-x/max-dependencies": ["off"],
        "import-x/newline-after-import": ["warn"],
        "import-x/no-anonymous-default-export": ["error"],
        // "import-x/no-default-export": ["off"],
        // "import-x/no-named-default": ["off"],
        // "import-x/no-named-export": ["off"],
        "import-x/no-namespace": ["warn"],
        "import-x/no-unassigned-import": ["error"],
        "import-x/order": ["warn"],
        // "import-x/prefer-default-export": ["off"],
        "import-x/prefer-namespace-import": ["warn"],
      },
    },
  );
}
