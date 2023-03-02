(async () => {
  /*Nivell 1
Exercici 1: Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no.
 */

  console.log("---- nivell 1 - ex 1 ----");

  const isGreaterThanFive = (resolveFunction, rejectFunction) =>
    new Promise((resolve, reject) => {
      const randomNumber = Math.floor(Math.random() * 11);
      console.log(`Random number: ${randomNumber}`);

      if (randomNumber > 5) {
        resolve(resolveFunction(randomNumber));
      } else {
        reject(rejectFunction(randomNumber));
      }
    });

  const printOK = (msg) => `Resolved! ${msg} is greater than 5!`;
  const printError = (error) => `Rejected! ${error} is NOT greater than 5!`;

  await isGreaterThanFive(printOK, printError)
    .then((data) => console.log(data))
    .catch((e) => console.log(e));

  /* Nivell 1
Exercici 2: Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut. */

  console.log("---- nivell 1 - ex 2 ----");

  const checkValue = (value, callback) => {
    if (typeof value === "string") {
      callback(`${value} is a string`);
    } else {
      callback(`${value} is not a string!`);
    }
  };

  const printMsg = (msg) => console.log(msg);

  await checkValue("Berenguer", printMsg);
  await checkValue(500, printMsg);
  await checkValue(true, printMsg);
  await checkValue(
    "This is sprint 1, entrega 1.3, nivell 1, exercici 2",
    printMsg
  );

  /* Nivell 2
Exercici 1: Donats els objectes employees i salaries, crea una arrow function getEmployee() que retorni una Promise efectuant la cerca en l'objecte pel seu id. */

  console.log("---- nivell 2 - ex 1 ----");

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
        reject(new Error(`Employee with id ${employeeId} not found!`));
      }
    });
  };

  // invoquem amb usuari amd id 2, que existeix:
  await getEmployee(3, employees)
    .then((employee) => {
      console.log(`Employee: ${employee.name}`);
    })
    .catch((e) => {
      console.log(e);
    });

  // invoquem amb usuari amb id 9, que no existeix, ho comprovem:
  await getEmployee(9, employees)
    .then((employee) => {
      console.log(employee.name);
    })
    .catch((error) => console.log(error));

  /*Nivell 2
Exercici 2: Crea una altra arrow function getSalary() similar a l'anterior que rebi com a paràmetre un objecte employee i retorni el seu salari. */

  console.log("---- nivell 2 - ex 2 ----");

  const getSalary = (employee, salariesList) => {
    return new Promise((resolve, reject) => {
      try {
        const salary = salariesList.find(({ id }) => id === employee.id);
        if (salary) {
          resolve(salary);
        } else {
          reject(
            new Error(`There's no salary for employee with id ${employee.id}!`)
          );
        }
      } catch (error) {
        error.msg = "Errors with employee object!";
        reject(error);
      }
    });
  };

  console.log("invoquem getSalary amb un employee existent");

  await getSalary(employees[2], salaries)
    .then((salary) => {
      console.log(salary.salary);
    })
    .catch((e) => {
      console.log(e);
    });

  console.log("invoquem getSalary amb un employee inexistent");

  await getSalary(employees[9], salaries)
    .then((salary) => {
      console.log(salary.salary);
    })
    .catch((error) => {
      console.log(error);
    });

  /* Nivell 2
Exercici 3: Invoca la primera funció getEmployee() i després getSalary() niant l'execució de les dues promises de manera que es retorni per la consola el nom de l'empleat/da i el seu salari. */

  console.log("---- nivell 2 - ex 3 ----");

  //getSalary promise nested dins de getEmployee promise

  console.log("invoquem getEmployee amb getSalary nestejat");

  await getEmployee(1, employees).then((employee) =>
    getSalary(employee, salaries).then((salary) =>
      console.log(employee.name, salary.salary)
    )
  );

  /* Nivell 3
Exercici 1: Fixa un element catch a la invocació del nivell anterior que capturi qualsevol error i el mostri per la consola. */
  console.log("---- nivell 3 - ex 1 ----");

  //fem petar la consulta amb un employee existent però sense salary associat. Amb un Catch per la promesa exterior(getEmployee). Salta el catch exterior i mostra l'error del reject de la promesa interior(getSalary).

  console.log(
    "invoquem getEmployee amb getSalary nestejat passant un employee que no té salari associat. Verifiquem el catch de l'error, que l'agafa la promise exterior, getEmployee"
  );

  await getEmployee(4, employees)
    .then((employee) =>
      getSalary(employee, salaries).then((salary) =>
        console.log(employee.name, salary.salary)
      )
    )
    .catch((e) => console.log(e));
})();
