import { map, rule, RuleBuilder } from "https://deno.land/x/karabinerts@1.31.0/deno.ts";
import { onlyMacKeyboard } from "../devices.ts";

/**
 * macの物理caps lockキーをcontrolにする (他の修飾キーと一緒に押した場合もctrlにする)
 */
const capsLockToControl: RuleBuilder[] = [
  rule("caps lock ▶ ctrl", onlyMacKeyboard)
    .manipulators([
      // 単品
      map("caps_lock")
        .to("left_control"),
      // modifiers (option)
      map("caps_lock", "left_option")
        .to("left_option", ["left_control"]),
      map("right_option", "caps_lock")
        .to("right_option", ["left_control"]),
      // modifiers (shift)
      map("caps_lock", "left_shift")
        .to("left_shift", ["left_control"]),
      map("right_shift", "caps_lock")
        .to("right_shift", ["left_control"]),
      // modifiers (command)
      map("caps_lock", "left_command")
        .to("left_command", ["left_control"]),
      map("right_command", "caps_lock")
        .to("right_command", ["left_control"]),
    ]),
];

/**
 * macの物理commandキーを kana / かな にする
 */
const cmdToKana: RuleBuilder[] = [
  rule("cmd + space ▶ kana", onlyMacKeyboard)
    .manipulators([
      map("left_command")
        .to("japanese_eisuu", {}, {
          // lazy: true,
        })
        .toIfHeldDown("left_command", {}, {}),
      map("right_command")
        .to("japanese_kana", {}, {
          // lazy: true,
        })
        .toIfHeldDown("right_command", {}, {}),
    ]),
];

export const macKeyboard: RuleBuilder[] = [
  ...capsLockToControl,
  ...cmdToKana,
];
