/* Nivell 1
Exercici 1: Crea una funció asíncrona que rebi un id d'empleat/da i imprimeixi per pantalla el nom de l'empleat/da i el seu salari, usant les funcions getEmployee() i getSalary() que has definit a la tasca anterior. */

console.log("---- nivell 1 - ex 1 ----");

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

const getEmployee = (employeeId, employeesList) => {
  return new Promise((resolve, reject) => {
    const employee = employeesList.find(({ id }) => id === employeeId);
    if (employee) {
      resolve(employee);
    } else {
      reject(`Employee with id ${employeeId} not found!`);
    }
  });
};

const getSalary = (employee, salariesList) => {
  return new Promise((resolve, reject) => {
    try {
      const salary = salariesList.find(({ id }) => id === employee.id);
      if (salary) {
        resolve(salary);
      } else {
        reject(`There's no salary for employee with id ${employee.id}!`);
      }
    } catch {
      reject(new Error("Employee not found!"));
    }
  });
};

const printEmployeeData = async (employeeId) => {
  try {
    const employee = await getEmployee(employeeId, employees);
    const salary = await getSalary(employee, salaries);
    console.log(`Name: ${employee.name}, Salary: ${salary.salary}`);
  } catch (error) {
    console.log(error);
  }
};

(async () => {
  //invoquem amb un id que existeix i que té salari
  await printEmployeeData(3);

  //invoquem amb un id que no existeix
  await printEmployeeData(9);

  //invoquem amb un id existent però sense salari associat
  await printEmployeeData(4);
})();

/* Nivell 1
Exercici 2: Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï la seva funció resolve() després de 2 segons de la seva invocació. */

console.log("---- nivell 1 - ex 2 ----");

const getNameAfter2Secs = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Berenguer after 2 secs!");
    }, 2000);
  });

const getName = async () => {
  try {
    return await getNameAfter2Secs();
  } catch (error) {
    console.log(error);
  }
};

//invoquem la funció getName, que retorna la funció getNameAfter2secs que retorna una promise amb resolve després de 2 secs.
(async () => {
  console.log(await getName());
})();
