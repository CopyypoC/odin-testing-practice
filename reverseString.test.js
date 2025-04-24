import { reverseString } from "./reverseString";

test("reverses 'abc' to 'cba'", () => {
  expect(reverseString("abc")).toBe("cba");
});

test("reverses '123' to '321'", () => {
  expect(reverseString("123")).toBe("321");
});

test("reverses '' to ''", () => {
  expect(reverseString("")).toBe("");
});
