const { checkValue } = require("../app/checkValue");

describe("Given checkValue function from Promises and Callbacks N1E2", () => {
  describe("When invoked without arguments", () => {
    test("It should throw error: 'callback argument must be a function!'", () => {
      const expectedErrMsg = "callback argument must be a function!";
      const action = () => {
        checkValue();
      };

      expect(action).toThrow(new Error(expectedErrMsg));
    });
  });

  describe("When invoked with 'Berenguer' and no callback function", () => {
    test("It should throw error: 'callback argument must be a function!'", () => {
      const value = "Berenguer";
      const expectedErrMsg = "callback argument must be a function!";
      const action = () => {
        checkValue(value);
      };

      expect(action).toThrow(new Error(expectedErrMsg));
    });
  });

  describe("When invoked with 'Berenguer' and a callback function", () => {
    test("It should invoke the callback with argument 'Berenguer is a string'", () => {
      const value = "Berenguer";
      const expectedPassedValue = "Berenguer is a string";
      const callback = jest.fn();

      checkValue(value, callback);

      expect(callback).toHaveBeenCalledWith(expectedPassedValue);
    });
  });

  describe("When invoked with 3500 and a callback", () => {
    test("It should invoke the callback with argument '3500 is not a string!'", () => {
      const value = 3500;
      const expectedPassedValue = "3500 is not a string!";
      const callback = jest.fn();

      checkValue(value, callback);

      expect(callback).toHaveBeenCalledWith(expectedPassedValue);
    });
  });
});
