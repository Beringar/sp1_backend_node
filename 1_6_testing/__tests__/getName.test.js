let { getName } = require("../app/getName");

describe("Given a getName function", () => {
  describe("when invoked", () => {
    test("should return 'Berenguer after 2 seconds!'", async () => {
      const expectedResult = "Berenguer after 2 seconds!";

      const result = await getName();

      expect(result).toBe(expectedResult);
    });
  });
});
