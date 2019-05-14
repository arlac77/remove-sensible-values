import test from "ava";
import { removeSensibleValues } from "../src/remove-sensible-values.mjs";

test("removeSensibleValues", t => {
  t.deepEqual(
    removeSensibleValues({
      a: { value: 7 },
      key: "secure",
      password: "secure",
      secret: "secure",
      token2: "secure",
      b: true,
      c: 77n,
      values: [{ key: "abc" }]
    }),
    {
      a: { value: 7 },
      key: "...",
      password: "...",
      secret: "...",
      token2: "...",
      b: true,
      c: 77n,
      values: [{ key: "..." }]
    }
  );
});
