import { map, rule, RuleBuilder } from "https://deno.land/x/karabinerts@1.31.0/deno.ts";

/**
 * 疑似Escape
 */
const escapeMappings: RuleBuilder[] = [
  rule("ctrl + ; ▶ esc").manipulators(
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

/**
 * control + a / e で行頭 / 行末に移動
 */
const jumpToStartOrEnd: RuleBuilder[] = [
  rule("ctrl + a ▶ emacs jump to start").manipulators(
    [
      map("a", "control")
        .to("left_arrow", "command"),
      map("e", "control")
        .to("right_arrow", "command"),
    ],
  ),
];

export const generalUse: RuleBuilder[] = [
  ...escapeMappings,
  ...jumpToStartOrEnd,
];
