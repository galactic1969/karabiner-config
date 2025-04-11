import { writeToProfile } from "https://deno.land/x/karabinerts@1.31.0/deno.ts";

import { emacsRules, generalUseRules, macKeyboardRules } from "./rules/index.ts";

const SUCCESS_SOUND = "Funk.aiff";
const FAILURE_SOUND = "Basso.aiff";

const applyKarabinerConfig = () => {
  try {
    writeToProfile(
      "KarabinerTs",
      [...generalUseRules, ...emacsRules, ...macKeyboardRules],
      {
        "basic.simultaneous_threshold_milliseconds": 50,
        "basic.to_delayed_action_delay_milliseconds": 500,
        // "basic.to_if_alone_timeout_milliseconds": 500,
        "basic.to_if_alone_timeout_milliseconds": 5,
        // "basic.to_if_held_down_threshold_milliseconds": 500,
        "basic.to_if_held_down_threshold_milliseconds": 6,
        "mouse_motion_to_scroll.speed": 100,
      },
    );

    // 成功時の通知と効果音
    new Deno.Command("osascript", {
      args: [
        "-e",
        `display notification "success" with title "karabiner-config" sound name "${SUCCESS_SOUND}"`,
      ],
    }).outputSync();
  } catch (error) {
    // 失敗時の通知と効果音
    new Deno.Command("osascript", {
      args: [
        "-e",
        `display notification "failed: ${error}" with title "karabiner-config" sound name "${FAILURE_SOUND}"`,
      ],
    }).outputSync();

    throw error;
  }
};

applyKarabinerConfig();
