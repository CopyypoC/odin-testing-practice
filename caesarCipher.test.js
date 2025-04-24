import { caesarCipher } from "./caesarCipher";

test('wraps shift of 3 from "xyz" to "abc"', () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test('shift of 1 from "abc" to "bcd"', () => {
  expect(caesarCipher("abc", 1)).toBe("bcd");
});

test('case preservation with shift 1 from "aBc" "bCd"', () => {
  expect(caesarCipher("aBc", 1)).toBe("bCd");
});

test("ignore non-alphabet chars", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
