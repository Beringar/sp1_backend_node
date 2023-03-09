/* Nivell 2
Exercici 1: Donats els objectes employees i salaries, crea una arrow function getEmployee() que retorni una Promise efectuant la cerca en l'objecte pel seu id. */

const getEmployee = (employeeId, employees) => {
  return new Promise((resolve, reject) => {
    const employee = employees.find(({ id }) => id === employeeId);
    if (employee) {
      resolve(employee);
    } else {
      reject(`Error: Employee with id ${employeeId} not found!`);
    }
  });
};

module.exports = { getEmployee };
