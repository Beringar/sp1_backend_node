const { printMsg } = require("../app/printMsg");

describe("Given printMsg function from Promises and Callbacks N1E2", () => {
  describe("When invoked without arguments", () => {
    test("It should return undefined", () => {
      const expectedResult = undefined;
      const result = printMsg();

      expect(result).toBe(expectedResult);
    });
  });

  describe("When invoked with 'Berenguer'", () => {
    test("It should return 'Berenguer'", () => {
      const value = "Berenguer";
      const expectedResult = "Berenguer";
      const result = printMsg(value);

      expect(result).toBe(expectedResult);
    });
  });
});
