const fs = require("fs");
const path = require("path");

//versió de getSalary llegint les dades de la llista salaries d'un arxiu json --> json/data.json

const getSalaryData = (employee) => {
  const jsonData = fs.readFileSync(path.resolve(__dirname, "json/data.json"));
  const employeesSalariesData = JSON.parse(jsonData);
  if (!employee) {
    throw new Error("you must pass employee as first argument");
  }
  if (!employeesSalariesData.salaries) {
    throw new Error("you must pass salaries array as second argument");
  }
  return new Promise((resolve, reject) => {
    try {
      const salary = employeesSalariesData.salaries.find(
        ({ id }) => id === employee.id
      );
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

module.exports = { getSalaryData };
