import {
  assertEquals,
  assertNotEquals,
} from "https://deno.land/std/testing/asserts.ts";
import { DayOfWeek, OperatorRepository, Case } from "./sw_case.ts";

Deno.test({
  name: "eq DayOfWeek test",
  fn(): void {
    assertEquals(DayOfWeek.SATURDAY, DayOfWeek.SATURDAY);
    assertEquals(DayOfWeek.SATURDAY == DayOfWeek.SATURDAY, true);
  },
});

Deno.test({
  name: "create case object",
  fn(): void {
    assertEquals(
      OperatorRepository.sw<DayOfWeek>(DayOfWeek.SATURDAY),
      new Case(DayOfWeek.SATURDAY),
    );
    assertNotEquals(
      OperatorRepository.sw<DayOfWeek>(DayOfWeek.SATURDAY),
      new Case(DayOfWeek.MONDAY),
    );
  },
});
