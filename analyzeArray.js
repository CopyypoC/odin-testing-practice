export function analyzeArray(arr) {
  return {
    average:
      arr.reduce((sum, curr) => {
        return sum + curr;
      }, 0) / arr.length,

    min: arr.reduce((prev, curr) => {
      return prev < curr ? prev : curr;
    }),

    max: arr.reduce((prev, curr) => {
      return prev > curr ? prev : curr;
    }),

    length: arr.length,
  };
}
