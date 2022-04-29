const { shuffleArray } = require("./utils");

describe("shuffleArray should", () => {
  test("shuffleArray should return an array", () => {
    let arr = [1, 2, 3, 4, 5];
    let result = shuffleArray(arr);
    expect(result).toHaveProperty("length");
  });
  test("shuffleArray should return an array of the same length of the argument sent in", () => {
    let arr = [1, 2, 3, 4, 5];
    let result = shuffleArray(arr);
    expect(result).toEqual(arr.length);
  });
});
