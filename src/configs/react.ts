import type { Config } from "eslint/config";
import { defineConfig } from "eslint/config";
import reactHooks from "eslint-plugin-react-hooks";
import { reactRefresh } from "eslint-plugin-react-refresh";
import eslintReact from "@eslint-react/eslint-plugin";

export function reactConfig(): Config[] {
  return defineConfig(
    reactHooks.configs.flat.recommended,
    reactRefresh.configs.vite(),
    eslintReact.configs["strict-type-checked"],
  );
}
