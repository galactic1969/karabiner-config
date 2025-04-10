import { map, rule, RuleBuilder } from "https://deno.land/x/karabinerts@1.31.0/deno.ts";
import { ignoreITerm } from "../bundle-identifiers.ts";

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
  rule("ctrl + a ▶ emacs jump to start", ignoreITerm).manipulators(
    [
      map("a", "control")
        .to("left_arrow", "command"),
      map("e", "control")
        .to("right_arrow", "command"),
    ],
  ),
];

const moveCursor: RuleBuilder[] = [
  rule("ctrl + a ▶ emacs jump to start", ignoreITerm).manipulators(
    [
      // control + b / f
      map("b", "control")
        .to("left_arrow", {}, { repeat: true }),
      map("f", "control")
        .to("right_arrow", {}, { repeat: true }),
      // control + n / p
      map("n", "control")
        .to("down_arrow", {}, { repeat: true }),
      map("p", "control")
        .to("up_arrow", {}, { repeat: true }),
    ],
  ),
];

export const generalUse: RuleBuilder[] = [
  ...escapeMappings,
  ...jumpToStartOrEnd,
  ...moveCursor,
];
