import {
  assert,
  assertEquals
} from "https://deno.land/std/testing/asserts.ts";
import { Semver } from "./semantic-versioning.ts";

Deno.test("gt より大きい時はtrueを返す", () => {
  const semver1 = Semver.ofString("1.2.3");
  const semver2 = Semver.ofString("1.2.4");
  const semver3 = Semver.ofString("2.2.4");
  assert(semver2.gt(semver1));
  assert(semver3.gt(semver2));
});

Deno.test("gt より大きくない時はfalseを返す", () => {
  const semver1 = Semver.ofString("1.2.3");
  const semver2 = Semver.ofString("1.2.4");
  const semver3 = Semver.ofString("1.2.3");
  assertEquals(semver1.gt(semver2), false);
  assertEquals(semver1.gt(semver3), false);
});

Deno.test("lt より小さい時はtrueを返す", () => {
  const semver1 = Semver.ofString("1.2.3");
  const semver2 = Semver.ofString("1.2.4");
  const semver3 = Semver.ofString("2.2.4");
  assert(semver1.lt(semver2));
  assert(semver2.lt(semver3));
});

Deno.test("lt より小さくない時はfalseを返す", () => {
  const semver1 = Semver.ofString("1.2.3");
  const semver2 = Semver.ofString("1.2.4");
  const semver3 = Semver.ofString("1.2.3");
  assertEquals(semver2.lt(semver1), false);
  assertEquals(semver3.lt(semver1), false);
});

Deno.test("gte 以上の時はtrue そうでない時false", () => {
  const semver1 = Semver.ofString("1.2.3");
  const semver2 = Semver.ofString("1.2.4");
  const semver3 = Semver.ofString("1.2.3");
  assert(semver2.gte(semver1));
  assert(semver3.gte(semver1));
  assertEquals(semver1.gte(semver2), false);
});

Deno.test("lte 以上の時はtrue そうでない時false", () => {
  const semver1 = Semver.ofString("1.2.3");
  const semver2 = Semver.ofString("1.2.4");
  const semver3 = Semver.ofString("1.2.3");
  assert(semver1.lte(semver2));
  assert(semver1.lte(semver3));
  assertEquals(semver2.lte(semver1), false);
});

Deno.test("eq 同値の時trueを返す", () => {
  const semver1 = Semver.ofString("1.2.3");
  const semver2 = Semver.ofString("1.2.3");
  assert(semver1.eq(semver2));
});

Deno.test("eq 同値ではない時falseを返す", () => {
  const semver1 = Semver.ofString("1.2.3");
  const semver2 = Semver.ofString("1.2.4");
  const semver3 = Semver.ofString("1.3.3");
  const semver4 = Semver.ofString("2.2.3");
  assertEquals(semver1.eq(semver2), false);
  assertEquals(semver1.eq(semver3), false);
  assertEquals(semver1.eq(semver4), false);
});
