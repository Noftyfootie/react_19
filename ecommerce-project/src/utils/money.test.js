import { it, expect, describe } from "vitest";
import { formatMoney } from "./money";

describe("formatMoney", () => {
  it("forms 1999 cents as $19.99", () => {
    expect(formatMoney(1999)).toBe("$19.99");
  });

  it("displays 2 decimals", () => {
    expect(formatMoney(1090)).toBe("$10.90");
    expect(formatMoney(100)).toBe("$1.00");
  });

  it("Number 0 should be $0.00", () => {
    expect(formatMoney(0)).toBe("$0.00");
  });

  it("Negative numbers", () => {
    expect(formatMoney(-999)).toBe("-$9.99");
    expect(formatMoney(-100)).toBe("-$1.00");
  });
});
