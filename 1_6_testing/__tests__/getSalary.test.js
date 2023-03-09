const { getSalary } = require("../app/getSalary");

let salaries = [
  {
    id: 1,
    salary: 4000,
  },
  {
    id: 2,
    salary: 1000,
  },
  {
    id: 3,
    salary: 2000,
  },
];

describe("Given a getSalary function", () => {
  describe("when invoked with one employee and array 'salaries'", () => {
    test("should return the salary 2000", async () => {
      const employee = {
        id: 3,
        name: "Jeff Bezos",
      };
      const expectedResult = 2000;

      const salary = await getSalary(employee, salaries);

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

      const act = () => getSalary(employee, salaries);

      await expect(act).rejects.toMatch(expectedError);
    });
  });

  describe("when invoked with employee and empty array", () => {
    test("should reject 'Error: Employee with id 3 not found!'", async () => {
      const employee = {
        id: 3,
        name: "Jeff Bezos",
      };
      const expectedError = "There's no salary for employee with id 3!";

      const act = () => getSalary(employee, []);

      await expect(act).rejects.toMatch(expectedError);
    });
  });

  describe("when invoked without arguments", () => {
    test("should throw error 'you must pass employee as first argument'", () => {
      const expectedError = "you must pass employee as first argument";

      const act = () => getSalary();

      expect(act).toThrow(new Error(expectedError));
    });
  });

  describe("when invoked with employee and without employees array", () => {
    test("should throw error 'you must pass salaries array as second argument'", () => {
      const employee = {
        id: 3,
        name: "Jeff Bezos",
      };
      const expectedError = "you must pass salaries array as second argument";

      const act = () => getSalary(employee);

      expect(act).toThrow(new Error(expectedError));
    });
  });

  describe("when invoked with a value thats is not a valid employee object as first argument", () => {
    test("should reject 'There's no salary for employee with id undefined!'", async () => {
      const employee = "employeeNotValid";

      const act = () => getSalary(employee, salaries);

      await expect(act).rejects.toMatch(
        "There's no salary for employee with id undefined!"
      );
    });
  });

  describe("when invoked with an employee object as first argument and an invalid value as second argument", () => {
    test("should throw an Error", async () => {
      const employee = {
        id: 3,
        name: "Jeff Bezos",
      };

      const invalidSalaries = "not a valid value of type array of salaries";

      const act = () => getSalary(employee, invalidSalaries);

      await expect(act).rejects.toThrow(Error);
    });
  });
});
