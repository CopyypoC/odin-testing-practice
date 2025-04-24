import { analyzeArray } from "./analyzeArray.js";

const arr = analyzeArray([1, 8, 3, 4, 2, 6]);
test("array average of [1,8,3,4,2,6]", () => {
  expect(arr.average).toBe(4);
});

test("array min of [1,8,3,4,2,6]", () => {
  expect(arr.min).toBe(1);
});

test("array max of [1,8,3,4,2,6]", () => {
  expect(arr.max).toBe(8);
});

test("array length of [1,8,3,4,2,6]", () => {
  expect(arr.length).toBe(6);
});
