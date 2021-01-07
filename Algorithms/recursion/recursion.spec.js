const { fibonacciRecursive, nestedEvenSum } = require("./index");

describe("fibonacciRecursive::", () => {
  describe("given the target 5", () => {
    it("should return 5", () => {
      expect(fibonacciRecursive(5)).toBe(5);
    });
  });

  describe("given the target 10", () => {
    it("should return 55", () => {
      expect(fibonacciRecursive(10)).toBe(55);
    });
  });
});

describe("nestedEvenSum::", () => {
  describe("given the object", () => {
    let obj = {
      outer: 2,
      obj: {
        inner: 2,
        otherObj: {
          superInner: 2,
          notANumber: true,
          alsoNotANumber: "yup",
        },
      },
    };

    it("should return 6", () => {
      expect(nestedEvenSum(obj)).toBe(6);
    });
  });

  describe("given the target 10", () => {
    let obj = {
      a: 2,
      b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
      c: { c: { c: 2 }, cc: "ball", ccc: 5 },
      d: 1,
      e: { e: { e: 2 }, ee: "car" },
    };

    it("should return 10", () => {
      expect(nestedEvenSum(obj)).toBe(10);
    });
  });
});
