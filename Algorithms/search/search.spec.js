const { linearSearch } = require("./index");

describe("::linearSearch", () => {
  describe("given the array", () => {
    describe("and the target value", () => {
      let arr = [1, 2, 3, 4, 5];

      it("should return 1", () => {
        expect(linearSearch(arr, 2)).toBe(1);
      });
    });
  });

  describe("given the array", () => {
    describe("and the target value", () => {
      let arr = [1, 2, 3, 4, 5];

      it("should return -1", () => {
        expect(linearSearch(arr, 9)).toBe(-1);
      });
    });
  });

  describe("given the array", () => {
    describe("and the target value", () => {
      let arr = [10, 15, 20, 25, 30];
      it("should return 1", () => {
        expect(linearSearch(arr, 15)).toBe(1);
      });
    });
  });

  describe("given the array", () => {
    describe("and the target value", () => {
      let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

      it("should return 5", () => {
        expect(linearSearch(arr, 4)).toBe(5);
      });
    });
  });

  describe("given the array", () => {
    describe("and the target value", () => {
      let arr = [100];
      it("should return 0", () => {
        expect(linearSearch(arr, 100)).toBe(0);
      });
    });
  });

  describe("given the array", () => {
    describe("and the target value", () => {
      let arr = [100];
      it("should return -1", () => {
        expect(linearSearch(arr, 200)).toBe(-1);
      });
    });
  });
});
