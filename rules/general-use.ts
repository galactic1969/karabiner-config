import { map, rule, RuleBuilder } from "https://deno.land/x/karabinerts@1.31.0/deno.ts";

/**
 * emacsやviのEscape
 */
const escapeMappings: RuleBuilder[] = [
  rule("ctrl + [ ▶ esc").manipulators(
    [
      map("open_bracket", "control")
        .to("escape"),
    ],
  ),
  rule("ctrl + ; ▶ escape").manipulators(
    [
      map(";", "control")
        .to("escape"),
    ],
  ),
];

export const generalUse: RuleBuilder[] = [
  ...escapeMappings,
];
