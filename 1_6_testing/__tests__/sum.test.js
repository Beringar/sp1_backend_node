const { sum } = require("../app/sum");

describe("Given a sum function", () => {
  describe("when invoked with arguments: 2, 3", () => {
    test("should return 5", () => {
      const expected = 5;
      const values = [2, 3];

      const result = sum(...values);

      expect(result).toBe(expected);
    });
  });

  describe("when invoked with arguments: 2, 2, 8, 10", () => {
    test("should return 22", () => {
      const expected = 22;
      const values = [2, 2, 8, 10];

      const result = sum(...values);

      expect(result).toBe(expected);
    });
  });
});
