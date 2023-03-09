const { multiply } = require("../app/multiply");

describe("Given a multiply function", () => {
  describe("when invoked with arguments: 2, 3", () => {
    test("should return 6", () => {
      const expected = 6;
      const values = [2, 3];

      const result = multiply(...values);

      expect(result).toBe(expected);
    });
  });

  describe("when invoked with arguments: 2, 2, 8, 10", () => {
    test("should return 320", () => {
      const expected = 320;
      const values = [2, 2, 8, 10];

      const result = multiply(...values);

      expect(result).toBe(expected);
    });
  });

  describe("when invoked with arguments: 5, 0", () => {
    test("should return 0", () => {
      const expected = 0;
      const values = [5, 0];

      const result = multiply(...values);

      expect(result).toBe(expected);
    });
  });

  describe("when invoked with arguments: 5, -0", () => {
    test("should return 0", () => {
      const expected = -0;
      const values = [5, -0];

      const result = multiply(...values);

      expect(result).toBe(expected);
    });
  });

  describe("when invoked without arguments", () => {
    test("should throw an Error 'Insuficcient arguments. At least two numbers are needed'", () => {
      const expectedError =
        "Insuficcient arguments. At least two numbers are needed";

      expect(() => {
        multiply();
      }).toThrow(new Error(expectedError));
    });
  });

  describe("when invoked with arguments: 2", () => {
    test("should throw an Error 'Insuficcient arguments. At least two numbers are needed'", () => {
      const expectedError =
        "Insuficcient arguments. At least two numbers are needed";
      const value = 2;

      expect(() => {
        multiply(value);
      }).toThrow(new Error(expectedError));
    });
  });

  describe("when invoked with arguments: 2, 1, '4'", () => {
    test("should throw an Error 'Invalid argument: 4 is not a valid number'", () => {
      const expectedError = "Invalid argument: 4 is not a valid number";
      const values = [2, 1, "4"];

      expect(() => {
        multiply(...values);
      }).toThrow(new Error(expectedError));
    });
  });
});
