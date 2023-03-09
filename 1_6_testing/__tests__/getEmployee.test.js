const { getEmployee } = require("../app/getEmployee");

let employees = [
  {
    id: 1,
    name: "Linux Torvalds",
  },
  {
    id: 2,
    name: "Bill Gates",
  },
  {
    id: 3,
    name: "Jeff Bezos",
  },
  {
    id: 4,
    name: "Berenguer Pou",
  },
];

describe("Given a getEmployee function", () => {
  describe("when invoked with id 3 and array 'employees'", () => {
    test("should return an employee object {id:3, name: 'Jeff Bezos'}", async () => {
      const id = 3;
      const expected = {
        id: 3,
        name: "Jeff Bezos",
      };

      const result = await getEmployee(id, employees);

      expect(result).toStrictEqual(expected);
    });
  });

  describe("when invoked with id 9 and array 'employees'", () => {
    test("should reject 'Error: Employee with id 3 not found!'", async () => {
      const id = 9;
      const expectedError = "Error: Employee with id 9 not found!";

      const act = () => getEmployee(id, employees);

      await expect(act).rejects.toMatch(expectedError);
    });
  });

  describe("when invoked with id 3 and empty array", () => {
    test("should reject 'Error: Employee with id 3 not found!'", async () => {
      const id = 3;
      const expectedError = "Error: Employee with id 3 not found!";

      const act = () => getEmployee(id, []);

      await expect(act).rejects.toMatch(expectedError);
    });
  });

  describe("when invoked without arguments", () => {
    test("should throw error 'Employee ID must be a positive integer'", () => {
      const expectedError = "Employee ID must be a positive integer";

      const act = () => getEmployee();

      expect(act).toThrow(new Error(expectedError));
    });
  });

  describe("when invoked with id 3 and without employees array", () => {
    test("should throw error 'employees cannot be undefined'", () => {
      const id = 3;
      const expectedError = "employees cannot be undefined";

      const act = () => getEmployee(id);

      expect(act).toThrow(new Error(expectedError));
    });
  });

  describe("when invoked with id 3 and as employees a value that is not an array", () => {
    test("should throw an Error", async () => {
      const id = 3;
      const invalidEmployees = "not an array";

      const act = () => getEmployee(id, invalidEmployees);

      await expect(act).rejects.toThrow(Error);
    });
  });
});
