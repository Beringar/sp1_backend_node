/*
Nivell 2
Exercici 2: Crea una altra arrow function getSalary() similar a l'anterior que rebi com a paràmetre un objecte employee i retorni el seu salari.
*/

const getSalary = (employee, salaries) => {
  if (!employee) {
    throw new Error("you must pass employee as first argument");
  }
  if (!salaries) {
    throw new Error("you must pass salaries array as second argument");
  }
  return new Promise((resolve, reject) => {
    try {
      const salary = salaries.find(({ id }) => id === employee.id);
      if (salary) {
        resolve(salary.salary);
      } else {
        reject(`There's no salary for employee with id ${employee.id}!`);
      }
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = { getSalary };
