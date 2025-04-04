import { writeToProfile } from "https://deno.land/x/karabinerts@1.31.0/deno.ts";

import { emacsRule, generalUse } from "./rules/index.ts";

writeToProfile(
  "KarabinerTs",
  [...generalUse, ...emacsRule],
  {
    "basic.simultaneous_threshold_milliseconds": 50,
    "basic.to_delayed_action_delay_milliseconds": 500,
    "basic.to_if_alone_timeout_milliseconds": 500,
    "basic.to_if_held_down_threshold_milliseconds": 500,
    "mouse_motion_to_scroll.speed": 100,
  },
);
