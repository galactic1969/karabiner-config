import { ifApp } from "https://deno.land/x/karabinerts@1.31.0/deno.ts";

export const ignoreIDEs = () => ifApp(Object.values(IDEs)).unless();

export const IDEs = {
  "vscode": "com.microsoft.VSCode",
  "vscodeInsiders": "com.microsoft.VSCodeInsiders",
};

export const BUNDLE_IDENTIFIERS = {
  ...IDEs,
} as const;
