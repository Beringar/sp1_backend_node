/*Nivell 1
Exercici 1: Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no.
 */

const isGreaterThanFive = (resolveFunction, rejectFunction) =>
  new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 11);
    if (randomNumber > 5) {
      resolve(resolveFunction(randomNumber));
    } else {
      reject(rejectFunction(randomNumber));
    }
  });

const printOK = (msg) => `Resolved! ${msg} is greater than 5!`;
const printError = (error) => `Rejected! ${error} is NOT greater than 5!`;

isGreaterThanFive(printOK, printError)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

/* Nivell 1
Exercici 2: Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut. */

const checkValue = (value, callback) => {
  if (typeof value === "string") {
    callback(`${value} is a string`);
  } else {
    callback(`${value} is not a string!`);
  }
};

const printMsg = (msg) => console.log(msg);

checkValue("Berenguer", printMsg);
checkValue(500, printMsg);

/* Nivell 2
Exercici 1: Donats els objectes employees i salaries, crea una arrow function getEmployee() que retorni una Promise efectuant la cerca en l'objecte pel seu id. */

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

const getEmployee = (employeeId) => {
  return new Promise((resolve, reject) => {
    const employee = employees.find(({ id }) => id === employeeId);
    if (employee) {
      resolve(employee);
    } else {
      reject(`Error: Employee with id ${employeeId} not found!`);
    }
  });
};

// invoquem amb usuari amd id 2, que existeix:
getEmployee(3)
  .then((employee) => {
    console.log(`Employee: ${employee.name}`);
  })
  .catch((e) => {
    console.log(e);
  });

// invoquem amb usuari amb id 9, que no existeix, ho comprovem:
getEmployee(9)
  .then((employee) => {
    console.log(employee.name);
  })
  .catch((error) => console.log(error));

/*Nivell 2
Exercici 2: Crea una altra arrow function getSalary() similar a l'anterior que rebi com a paràmetre un objecte employee i retorni el seu salari. */

const getSalary = (employee) => {
  return new Promise((resolve, reject) => {
    try {
      const salary = salaries.find(({ id }) => id === employee.id);
      if (salary) {
        resolve(salary);
      } else {
        reject(`There's no salary for employee with id ${employee.id}!`);
      }
    } catch (error) {
      error.msg = "Error with employee object!";
      reject(error);
    }
  });
};

getSalary(employees[2])
  .then((salary) => {
    console.log(salary.salary);
  })
  .catch((e) => {
    console.log(e);
  });

/* Nivell 2
Exercici 3: Invoca la primera funció getEmployee() i després getSalary() niant l'execució de les dues promises de manera que es retorni per la consola el nom de l'empleat/da i el seu salari. */

//getSalary promise nested dins de getEmployee promise

getEmployee(1).then((employee) =>
  getSalary(employee).then((salary) =>
    console.log(employee.name, salary.salary)
  )
);

/* Nivell 3
Exercici 1: Fixa un element catch a la invocació del nivell anterior que capturi qualsevol error i el mostri per la consola. */

//fem que surti error la consulta amb un employee existent però sense salary associat. Amb un Catch per la promesa exterior(getEmployee). Salta el catch exterior i mostra l'error del reject de la promesa interior(getSalary).

getEmployee(4)
  .then((employee) =>
    getSalary(employee).then((salary) =>
      console.log(employee.name, salary.salary)
    )
  )
  .catch((e) => console.log(e));
