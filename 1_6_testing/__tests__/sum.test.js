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

  describe("when invoked without arguments", () => {
    test("should throw an Error 'Insuficcient arguments. At least two numbers are needed'", () => {
      const expectedError =
        "Insuficcient arguments. At least two numbers are needed";

      expect(() => {
        sum();
      }).toThrow(new Error(expectedError));
    });
  });

  describe("when invoked with arguments: 2", () => {
    test("should throw an Error 'Insuficcient arguments. At least two numbers are needed'", () => {
      const expectedError =
        "Insuficcient arguments. At least two numbers are needed";
      const value = 2;

      expect(() => {
        sum(value);
      }).toThrow(new Error(expectedError));
    });
  });

  describe("when invoked with arguments: 2, 1, '4'", () => {
    test("should throw an Error 'Invalid argument: 4 is not a valid number'", () => {
      const expectedError = "Invalid argument: 4 is not a valid number";
      const values = [2, 1, "4"];

      expect(() => {
        sum(...values);
      }).toThrow(new Error(expectedError));
    });
  });
});
