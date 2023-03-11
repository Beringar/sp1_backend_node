const { getDouble } = require("../app/getDouble");

jest.useFakeTimers();
jest.spyOn(global, "setTimeout");

afterEach(() => {
  jest.clearAllMocks();
});

describe("Given a getDouble function", () => {
  describe("when invoked with 3", () => {
    test("should return 6", () => {
      const number = 3;
      const expectedResult = 6;

      expect.assertions(2);
      // Keep a reference to the pending promise.
      const pendingPromise = getDouble(number).then((resolved) => {
        expect(resolved).toBe(expectedResult);
        expect(setTimeout).toHaveBeenCalledTimes(1);
      });
      // Activate the timer (pretend the specified time has elapsed).
      jest.runAllTimers();
      // Return the promise, so Jest waits for its completion and fails the
      // test when the promise is rejected.
      return pendingPromise;
    });
  });

  describe("when invoked with '80'", () => {
    test("should throw error 'Received value: \"4\" is not a valid number!'", () => {
      const number = "4";
      const expectedError = "Received value: 4 is not a valid number!";

      const act = () => {
        getDouble(number);
      };

      expect(act).toThrow(expectedError);
    });
  });

  describe("when invoked without argument", () => {
    test("should throw error 'Received value: undefined is not a valid number!'", () => {
      const expectedError = "Received value: undefined is not a valid number!";

      const act = () => {
        getDouble();
      };

      expect(act).toThrow(expectedError);
    });
  });
});
