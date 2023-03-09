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
    test("should reject...", async () => {
      const id = 9;
      const expectedError = "Error: Employee with id 9 not found!";

      const act = () => getEmployee(id, employees);

      await expect(act).rejects.toMatch(expectedError);
    });
  });

  describe("when invoked with id 3 and empty array", () => {
    test("should reject...", async () => {
      const id = 3;
      const expectedError = "Error: Employee with id 3 not found!";

      const act = () => getEmployee(id, []);

      await expect(act).rejects.toMatch(expectedError);
    });
  });
});
