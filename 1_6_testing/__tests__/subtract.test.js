const { subtract } = require("../app/subtract");

describe("Given a subtract function", () => {
  describe("when invoked with arguments: 2, 3", () => {
    test("should return -1", () => {
      const expected = -1;
      const values = [2, 3];

      const result = subtract(...values);

      expect(result).toBe(expected);
    });
  });

  describe("when invoked with arguments: 2, 2, 8, 10", () => {
    test("should return -18", () => {
      const expected = -18;
      const values = [2, 2, 8, 10];

      const result = subtract(...values);

      expect(result).toBe(expected);
    });
  });

  describe("when invoked without arguments", () => {
    test("should throw an Error 'Insuficcient arguments. At least two numbers are needed'", () => {
      const expectedError =
        "Insuficcient arguments. At least two numbers are needed";

      expect(() => {
        subtract();
      }).toThrow(new Error(expectedError));
    });
  });

  describe("when invoked with arguments: 2", () => {
    test("should throw an Error 'Insuficcient arguments. At least two numbers are needed'", () => {
      const expectedError =
        "Insuficcient arguments. At least two numbers are needed";
      const value = 2;

      expect(() => {
        subtract(value);
      }).toThrow(new Error(expectedError));
    });
  });

  describe("when invoked with arguments: 2, 1, '4'", () => {
    test("should throw an Error 'Invalid argument: 4 is not a valid number'", () => {
      const expectedError = "Invalid argument: 4 is not a valid number";
      const values = [2, 1, "4"];

      expect(() => {
        subtract(...values);
      }).toThrow(new Error(expectedError));
    });
  });
});
