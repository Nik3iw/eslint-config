import type { Config } from "eslint/config";
import { defineConfig } from "eslint/config";
import eslintPluginAstro from "eslint-plugin-astro";
import tsEslint from "typescript-eslint";

export function astroConfig(): Config[] {
  return defineConfig(
    ...eslintPluginAstro.configs.recommended,

    {
      files: ["**/*.astro"],
      languageOptions: { parserOptions: { parser: tsEslint.parser } },
    },
  );
}
