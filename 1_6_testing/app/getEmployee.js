/* Nivell 2
Exercici 1: Donats els objectes employees i salaries, crea una arrow function getEmployee() que retorni una Promise efectuant la cerca en l'objecte pel seu id. */

const getEmployee = (employeeId, employees) => {
  if (!Number.isInteger(employeeId) || employeeId < 0) {
    throw new Error("Employee ID must be a positive integer");
  }
  if (!employees) {
    throw new Error("employees cannot be undefined");
  }
  return new Promise((resolve, reject) => {
    try {
      const employee = employees.find(({ id }) => id === employeeId);
      if (employee) {
        resolve(employee);
      } else {
        reject(`Error: Employee with id ${employeeId} not found!`);
      }
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = { getEmployee };
