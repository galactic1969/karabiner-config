import {
  ifVar,
  map,
  rule,
  RuleBuilder,
  withMapper,
} from "https://deno.land/x/karabinerts@1.31.0/deno.ts";

import { ignoreIDEs } from "../bundle-identifiers.ts";

const EMACS_MARKING = "emacs_marking";

/**
 * emacsのマーク系
 */
const emacsMark: RuleBuilder[] = [
  rule("ctrl + space ▶ emacs mark set", ignoreIDEs, ifVar(EMACS_MARKING, 0)).manipulators(
    [
      map("spacebar", "control")
        .toVar(EMACS_MARKING, 1),
    ],
  ),
  rule("ctrl + space ▶ emacs mark unset", ignoreIDEs, ifVar(EMACS_MARKING, 1)).manipulators(
    [
      map("spacebar", "control")
        .toVar(EMACS_MARKING, 0),
      // 選択中にescapeを押すと選択解除
      map("escape")
        .to("escape")
        .toVar(EMACS_MARKING, 0),
    ],
  ),
  rule("marking中のカーソル移動はShiftを維持", ignoreIDEs, ifVar(EMACS_MARKING, 1))
    .manipulators(
      [
        // 矢印キー
        withMapper([
          "left_arrow",
          "right_arrow",
          "up_arrow",
          "down_arrow",
        ])((key) =>
          map(key)
            .to(key, "shift")
        ),
        // cmd + hjkl (vim style)
        withMapper(
          ["h", "j", "k", "l"],
        )((key) =>
          map(key, "command")
            .to(key, ["shift", "command"])
        ),
        // control + a / e
        map("a", "control")
          .to("left_arrow", ["command", "shift"]),
        map("e", "control")
          .to("right_arrow", ["command", "shift"]),
        // control + b / f
        map("b", "control")
          .to("left_arrow", ["shift"]),
        map("f", "control")
          .to("right_arrow", ["shift"]),
      ],
    ),
];

export const emacsRule: RuleBuilder[] = [
  ...emacsMark,
];
