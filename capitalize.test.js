import { capitalize } from "./capitalize";

test("capitalizes abc to Abc", () => {
  expect(capitalize("abc")).toBe("Abc");
});

test("capitalizes hello to Hello", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("capitalizes 123 to 123", () => {
  expect(capitalize("123")).toBe("123");
});
