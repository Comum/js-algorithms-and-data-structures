const { fibonacciRecursive } = require("./index");

describe('fibonacciRecursive::', () => {
  describe('given the target 5', () => {
    it('should return 5', () => {
      expect(fibonacciRecursive(5)).toBe(5);
    });
  });

  describe('given the target 10', () => {
    it('should return 55', () => {
      expect(fibonacciRecursive(10)).toBe(55);
    });
  });
});
