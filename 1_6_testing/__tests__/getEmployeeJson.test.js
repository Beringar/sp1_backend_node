const { getEmployeeData } = require("../app/getEmployeeData");
const fs = require("fs");
const mockData = require("../__mocks__/mockEmployeesSalaries.json");
const mockDataNoEmployeesObject = require("../__mocks__/mockEmployeesSalariesNoEmployees.json");
const mockDataBadEmployeesObject = require("../__mocks__/mockEmployeesSalariesEmployeesNoArray.json");

jest.mock("fs", () => ({
  readFileSync: jest
    .fn()
    .mockImplementationOnce(() => {
      return JSON.stringify(mockData);
    })
    .mockImplementationOnce(() => {
      return JSON.stringify(mockDataNoEmployeesObject);
    })
    .mockImplementationOnce(() => {
      return JSON.stringify(mockData);
    })
    .mockImplementationOnce(() => {
      return JSON.stringify(mockData);
    })
    .mockImplementationOnce(() => {
      return JSON.stringify(mockDataBadEmployeesObject);
    }),
}));

describe("Given a getEmployeeData function", () => {
  describe("when invoked with id 3", () => {
    test("should return an employee object {id:3, name: 'Martin Fowler'}", async () => {
      const id = 3;
      const expected = {
        id: 3,
        name: "Martin Fowler",
      };

      const result = await getEmployeeData(id);

      expect(result).toStrictEqual(expected);
    });
  });

  describe("when invoked with id 3 and json data file does not contain employees object", () => {
    test("should throw an error 'employees cannot be undefined'", () => {
      const id = 3;
      const expectedError = {
        id: 3,
        name: "Martin Fowler",
      };

      const act = () => {
        getEmployeeData(id);
      };

      expect(act).toThrow(new Error("employees cannot be undefined"));
    });
  });

  describe("when invoked with id 9 and array 'employees'", () => {
    test("should reject 'Error: Employee with id 3 not found!'", async () => {
      const id = 9;
      const expectedError = "Error: Employee with id 9 not found!";

      const act = () => getEmployeeData(id);

      await expect(act).rejects.toMatch(expectedError);
    });
  });

  describe("when invoked without arguments", () => {
    test("should throw error 'Employee ID must be a positive integer'", () => {
      const expectedError = "Employee ID must be a positive integer";

      const act = () => getEmployeeData();

      expect(act).toThrow(new Error(expectedError));
    });
  });

  describe("when invoked with id 3 and the data file contains an invalid employees value", () => {
    test("should throw error", () => {
      const act = () => getEmployeeData(3);

      expect(act).rejects.toThrow(Error);
    });
  });
});
