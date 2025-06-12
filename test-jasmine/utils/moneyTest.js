import { formatCurrency } from "../../scripts/utils/money.js";

//test suite
describe("Test suite: formatCurrency", () => {
  //test name - it
  it("Converts cents into dollars", () => {
    expect(formatCurrency(2095)).toEqual("20.95"); //comparing values
  });

  it("Works with zero", () => {
    expect(formatCurrency(0)).toEqual("0.00");
  });

  it("Rounds up to the nearest set: 1", () => {
    expect(formatCurrency(2000.5)).toEqual("20.01");
  });

  it("Rounds up to the nearest set: 2", () => {
    expect(formatCurrency(2000.4)).toEqual("20.00");
  });
});
