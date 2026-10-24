import type { ConfigWithExtends } from "typescript-eslint";
import globals from "globals";
import { javascriptConfig } from "./configs/javascript";
import { typescriptConfig } from "./configs/typescript";
import { unicornConfig } from "./configs/unicorn";
import { importXConfig } from "./configs/importX";
import { astroConfig } from "./configs/astro";
import { reactConfig } from "./configs/react";
import { prettierConfig } from "./configs/prettier";

type Platform = "web" | "node";

interface Params {
  platform: Platform;
  configs?: {
    typescript?: { tsconfigRootDir?: string } | undefined;
    unicorn?: boolean;
    importX?: boolean;
    astro?: boolean;
    react?: boolean;
  };
  extends?: ConfigWithExtends[];
}

export function createConfig(params: Params): ConfigWithExtends[] {
  const configs: Required<Params["configs"]> = {
    typescript: undefined,
    unicorn: true,
    importX: true,
    astro: false,
    react: false,
    ...params.configs,
  };

  const final: ConfigWithExtends[] = [...javascriptConfig()];

  // Typescript
  final.push(...typescriptConfig(configs.typescript !== undefined ? configs.typescript : {}));

  // Unicorn
  if (configs.unicorn) {
    final.push(...unicornConfig());
  }

  // Import-X
  if (configs.importX) {
    final.push(...importXConfig());
  }

  // Astro
  if (configs.astro) {
    final.push(...astroConfig());
  }

  // React
  if (configs.react) {
    final.push(...reactConfig());
  }

  // Prettier
  final.push(...prettierConfig());

  if (params.extends !== undefined) {
    final.push(...params.extends);
  }

  final.push({
    languageOptions: {
      ecmaVersion: params.platform === "web" ? 2023 : 2025,
      globals:
        params.platform === "web"
          ? {
              ...globals.serviceworker,
              ...globals.browser,
            }
          : globals.node,
    },
  });

  return final;
}
