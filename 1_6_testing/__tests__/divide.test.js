const { divide } = require("../app/divide");

describe("Given a divide function", () => {
  describe("when invoked with arguments: 2, 3", () => {
    test("should return 0.6666666666666666", () => {
      const expected = 0.6666666666666666;
      const values = [2, 3];

      const result = divide(...values);

      expect(result).toBe(expected);
    });
  });

  describe("when invoked with arguments: 2, 2, 8, 10", () => {
    test("should return 0.0125", () => {
      const expected = 0.0125;
      const values = [2, 2, 8, 10];

      const result = divide(...values);

      expect(result).toBe(expected);
    });
  });

  describe("when invoked with arguments: 5, 0", () => {
    test("should return Infinity", () => {
      const expected = Infinity;
      const values = [5, 0];

      const result = divide(...values);

      expect(result).toBe(expected);
    });
  });

  describe("when invoked with arguments: 5, -0", () => {
    test("should return -Infinity", () => {
      const expected = -Infinity;
      const values = [5, -0];

      const result = divide(...values);

      expect(result).toBe(expected);
    });
  });

  describe("when invoked without arguments", () => {
    test("should throw an Error 'Insuficcient arguments. At least two numbers are needed'", () => {
      const expectedError =
        "Insuficcient arguments. At least two numbers are needed";

      expect(() => {
        divide();
      }).toThrow(new Error(expectedError));
    });
  });

  describe("when invoked with arguments: 2", () => {
    test("should throw an Error 'Insuficcient arguments. At least two numbers are needed'", () => {
      const expectedError =
        "Insuficcient arguments. At least two numbers are needed";
      const value = 2;

      expect(() => {
        divide(value);
      }).toThrow(new Error(expectedError));
    });
  });

  describe("when invoked with arguments: 2, 1, '4'", () => {
    test("should throw an Error 'Invalid argument: 4 is not a valid number'", () => {
      const expectedError = "Invalid argument: 4 is not a valid number";
      const values = [2, 1, "4"];

      expect(() => {
        divide(...values);
      }).toThrow(new Error(expectedError));
    });
  });
});
