const { sumDoubles } = require("../app/sumDoubles");

jest.useFakeTimers();
jest.spyOn(global, "setTimeout");

afterEach(() => {
  jest.clearAllMocks();
});

describe("Given a sumDoubles function", () => {
  describe("when invoked with 3, 2, 1", () => {
    test("should return 12", () => {
      const numberA = 3;
      const numberB = 2;
      const numberC = 1;
      const expectedResult = 12;

      expect.assertions(2);
      // Keep a reference to the pending promise.
      const pendingPromise = sumDoubles(numberA, numberB, numberC).then(
        (resolved) => {
          expect(resolved).toBe(expectedResult);
          expect(setTimeout).toHaveBeenCalledTimes(3);
        }
      );
      // Activate the timer (pretend the specified time has elapsed).
      jest.runAllTimers();
      // Return the promise, so Jest waits for its completion and fails the
      // test when the promise is rejected.
      return pendingPromise;
    });
  });

  describe("when invoked with 3, '2', 1", () => {
    test("should reject error 'Received value: 2 is not a valid number!'", () => {
      const numberA = 3;
      const numberB = "2";
      const numberC = 1;
      const expectedRejectError = "Received value: 2 is not a valid number!";

      expect.assertions(2);
      // Keep a reference to the pending promise.
      const pendingPromise = sumDoubles(numberA, numberB, numberC).catch(
        (rejected) => {
          expect(rejected).toEqual(new Error(expectedRejectError));
          expect(setTimeout).toHaveBeenCalledTimes(1);
        }
      );
      // Activate the timer (pretend the specified time has elapsed).
      jest.runAllTimers();
      // Return the promise, so Jest waits for its completion and fails the
      // test when the promise is rejected.
      return pendingPromise;
    });
  });

  describe("when invoked without arguments", () => {
    test("should reject error 'Received value: undefined is not a valid number!'", () => {
      const expectedRejectError =
        "Received value: undefined is not a valid number!";

      expect.assertions(1);
      // Keep a reference to the pending promise.
      const pendingPromise = sumDoubles().catch((rejected) => {
        expect(rejected).toEqual(new Error(expectedRejectError));
      });
      // Activate the timer (pretend the specified time has elapsed).
      jest.runAllTimers();
      // Return the promise, so Jest waits for its completion and fails the
      // test when the promise is rejected.
      return pendingPromise;
    });
  });
});
