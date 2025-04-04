import {
  FromKeyParam,
  FromModifierParam,
  map,
  ModifierParam,
  ToEventOptions,
  ToKeyParam,
} from "https://deno.land/x/karabinerts@1.31.0/deno.ts";

type mapArguments = Parameters<typeof map>[];

type simpleMappingArguments = {
  from: {
    key: FromKeyParam;
    mandatoryModifiers?: FromModifierParam | "" | null;
    optionalModifiers?: FromModifierParam;
  };
  to: {
    key: ToKeyParam;
    modifiers?: ModifierParam;
    options?: ToEventOptions;
  };
};

const simpleMapping = (args: simpleMappingArguments[]) => {
  return args;
};
