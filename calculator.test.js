import { calculator } from "./calculator";

describe("calculator.add()", () => {
  test("adds 1 + 1 = 2", () => {
    expect(calculator.add(1, 1)).toBe(2);
  });

  test("adds -1 + -1 = -2", () => {
    expect(calculator.add(-1, -1)).toBe(-2);
  });
});

describe("calculator.subtract()", () => {
  test("subtracts 1 - 1 = 0", () => {
    expect(calculator.subtract(1, 1)).toBe(0);
  });

  test("subtracts -1 - -1 = 0", () => {
    expect(calculator.subtract(-1, -1)).toBe(0);
  });
});

describe("calculator.multiply()", () => {
  test("multiply 1 x 2 = 2", () => {
    expect(calculator.multiply(1, 2)).toBe(2);
  });

  test("multiply -1 x -1 = 1", () => {
    expect(calculator.multiply(-1, -1)).toBe(1);
  });
});

describe("calculator.divide()", () => {
  test("divide 1 / 2 = 0.5", () => {
    expect(calculator.divide(1, 2)).toBe(0.5);
  });

  test("divide -1 / -1 = 1", () => {
    expect(calculator.divide(-1, -1)).toBe(1);
  });

  test("divide 1 / 0 = ", () => {
    expect(calculator.divide(1, 0)).toBe(1 / 0);
  });
});
