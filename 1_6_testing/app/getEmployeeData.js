const fs = require("fs");
const path = require("path");

//versió de getEmployee llegint les dades de la llista employees d'un arxiu json --> json/data.json

const getEmployeeData = (employeeId) => {
  const jsonData = fs.readFileSync(path.resolve(__dirname, "json/data.json"));
  const employeesSalariesData = JSON.parse(jsonData);
  if (!Number.isInteger(employeeId) || employeeId < 0) {
    throw new Error("Employee ID must be a positive integer");
  }
  if (!employeesSalariesData.employees) {
    throw new Error("employees cannot be undefined");
  }
  return new Promise((resolve, reject) => {
    try {
      const employee = employeesSalariesData.employees.find(
        ({ id }) => id === employeeId
      );
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

module.exports = { getEmployeeData };
