import { ifApp } from "https://deno.land/x/karabinerts@1.31.0/deno.ts";

export const ITERM = "com.googlecode.iterm2";

export const IDEs = {
  "vscode": "com.microsoft.VSCode",
  "vscodeInsiders": "com.microsoft.VSCodeInsiders",
};

export const ignoreIDEs = ifApp(Object.values(IDEs)).unless();
export const ignoreITerm = ifApp(ITERM).unless();

export const BUNDLE_IDENTIFIERS = {
  ...IDEs,
} as const;
