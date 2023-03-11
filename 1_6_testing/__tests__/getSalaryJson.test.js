const { getSalaryData } = require("../app/getSalaryData");
const fs = require("fs");
const mockData = require("../__mocks__/mockEmployeesSalaries.json");
const mockDataNoSalariesObject = require("../__mocks__/mockEmployeesSalariesNoSalaries.json");
const mockDataBadSalariesObject = require("../__mocks__/mockEmployeesSalariesSalariesNoArray.json");

jest.mock("fs", () => ({
  readFileSync: jest
    .fn()
    .mockImplementationOnce(() => {
      return JSON.stringify(mockData);
    })
    .mockImplementationOnce(() => {
      return JSON.stringify(mockData);
    })
    .mockImplementationOnce(() => {
      return JSON.stringify(mockDataNoSalariesObject);
    })
    .mockImplementationOnce(() => {
      return JSON.stringify(mockData);
    })
    .mockImplementationOnce(() => {
      console.log("call 3");
      return JSON.stringify(mockDataBadSalariesObject);
    }),
}));

describe("Given a getSalaryData function", () => {
  describe("when invoked with one employee and array 'salaries'", () => {
    test("should return the salary 2000", async () => {
      const employee = {
        id: 3,
        name: "Martin Fowler",
      };
      const expectedResult = 8000;

      const salary = await getSalaryData(employee);

      expect(salary).toBe(expectedResult);
    });
  });

  describe("when invoked with an employee that has no ID in salaries array", () => {
    test("should reject 'There's no salary for employee with id 9!'", async () => {
      const employee = {
        id: 9,
        name: "Luis",
      };
      const expectedError = "There's no salary for employee with id 9!";

      const act = () => getSalaryData(employee);

      await expect(act).rejects.toMatch(expectedError);
    });
  });

  describe("when invoked with employee and empty array", () => {
    test("should throw error 'you must pass salaries array as second argument'", () => {
      const employee = {
        id: 3,
        name: "Jeff Bezos",
      };
      const expectedError = "you must pass salaries array as second argument";

      const act = () => getSalaryData(employee);

      expect(act).toThrow(expectedError);
    });
  });

  describe("when invoked without arguments", () => {
    test("should throw error 'you must pass employee as first argument'", () => {
      const expectedError = "you must pass employee as first argument";

      const act = () => getSalaryData();

      expect(act).toThrow(new Error(expectedError));
    });
  });

  describe("when invoked with employee and invalid salaries array", () => {
    test("should throw error", async () => {
      const employee = {
        id: 3,
        name: "Jeff Bezos",
      };

      const act = () => getSalaryData(employee);

      expect(act).rejects.toThrow(Error);
    });
  });
});
