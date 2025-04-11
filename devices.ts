import { DeviceIdentifier, ifDevice } from "https://deno.land/x/karabinerts@1.31.0/deno.ts";

export const DEVICES = {
  /**
   * "product": "Apple Internal Keyboard / Trackpad"
   */
  "macBuiltInKeyboard": {
    "is_keyboard": true,
    "is_pointing_device": false,
    "product_id": 834,
    "vendor_id": 1452,
  },
  /**
   * "product": "Apple Internal Keyboard / Trackpad"
   */
  "macBuiltInTrackpad": {
    "is_keyboard": false,
    "is_pointing_device": true,
    "product_id": 834,
    "vendor_id": 1452,
  },
  /**
   * "product": "Magic Trackpad"
   */
  "macExternalTrackpad": {
    "is_keyboard": false,
    "is_pointing_device": true,
    "product_id": 613,
    "vendor_id": 76,
  },
} satisfies Record<string, DeviceIdentifier>;

export const onlyMacKeyboard = ifDevice(DEVICES.macBuiltInKeyboard);
