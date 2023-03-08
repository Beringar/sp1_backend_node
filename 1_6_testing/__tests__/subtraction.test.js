const { subtraction } = require("../app/subtraction");

describe("Given a subtraction function", () => {
  describe("when invoked with arguments: 2, 3", () => {
    test("should return -1", () => {
      const expected = -1;
      const values = [2, 3];

      const result = subtraction(...values);

      expect(result).toBe(expected);
    });
  });

  describe("when invoked with arguments: 2, 2, 8, 10", () => {
    test("should return -18", () => {
      const expected = -18;
      const values = [2, 2, 8, 10];

      const result = subtraction(...values);

      expect(result).toBe(expected);
    });
  });
});
