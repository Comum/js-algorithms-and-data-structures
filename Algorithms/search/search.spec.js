const { linearSearch, binarySearch } = require("./index");

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

describe("::binarySearch", () => {
  describe("given the array", () => {
    describe("and the target value", () => {
      let arr = [1, 2, 3, 4, 5];

      it("should return 1", () => {
        expect(binarySearch(arr, 2)).toBe(1);
      });
    });
  });

  describe("given the array", () => {
    describe("and the target value", () => {
      let arr = [1, 2, 3, 4, 5];

      it("should return 2", () => {
        expect(binarySearch(arr, 3)).toBe(2);
      });
    });
  });

  describe("given the array", () => {
    describe("and the target value", () => {
      let arr = [1, 2, 3, 4, 5];

      it("should return 4", () => {
        expect(binarySearch(arr, 5)).toBe(4);
      });
    });
  });

  describe("given the array", () => {
    describe("and the target value", () => {
      let arr = [1, 2, 3, 4, 5];

      it("should return -1", () => {
        expect(binarySearch(arr, 6)).toBe(-1);
      });
    });
  });

  describe("given the array", () => {
    describe("and the target value", () => {
      let arr = [5,
        6,
        10,
        13,
        14,
        18,
        30,
        34,
        35,
        37,
        40,
        44,
        64,
        79,
        84,
        86,
        95,
        96,
        98,
        99,];

      it("should return 2", () => {
        expect(binarySearch(arr, 10)).toBe(2);
      });
    });
  });

  describe("given the array", () => {
    describe("and the target value", () => {
      let arr = [5,
        6,
        10,
        13,
        14,
        18,
        30,
        34,
        35,
        37,
        40,
        44,
        64,
        79,
        84,
        86,
        95,
        96,
        98,
        99,];

      it("should return 16", () => {
        expect(binarySearch(arr, 95)).toBe(16);
      });
    });
  });

  describe("given the array", () => {
    describe("and the target value", () => {
      let arr = [5,
        6,
        10,
        13,
        14,
        18,
        30,
        34,
        35,
        37,
        40,
        44,
        64,
        79,
        84,
        86,
        95,
        96,
        98,
        99,];

      it("should return -1", () => {
        expect(binarySearch(arr, 100)).toBe(-1);
      });
    });
  });
});
