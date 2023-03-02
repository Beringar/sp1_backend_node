(async () => {
  /* Nivell 1
Exercici 1: Crea una funció asíncrona que rebi un id d'empleat/da i imprimeixi per pantalla el nom de l'empleat/da i el seu salari, usant les funcions getEmployee() i getSalary() que has definit a la tasca anterior. */

  console.log("-------- nivell 1 - ex 1 --------");

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

  const printEmployeeData = async (employeeId) => {
    try {
      const employee = await getEmployee(employeeId, employees);
      const salary = await getSalary(employee, salaries);
      console.log(`Name: ${employee.name}, Salary: ${salary.salary}`);
    } catch (error) {
      console.log(error);
    }
  };

  //invoquem amb un id que existeix i que té salari
  await printEmployeeData(3);

  /* Nivell 1
Exercici 2: Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï la seva funció resolve() després de 2 segons de la seva invocació. */

  console.log("-------- nivell 1 - ex 2 --------");

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

  console.log(await getName());

  /* Nivell 2
Exercici 1: Crea una funció que retorni el doble del número que li passa com a paràmetre després de 2 segons.
Crea una altra funció que rebi tres números i calculi la suma dels seus dobles fent servir la funció anterior. */

  console.log("-------- nivell 2 - ex 1 --------");

  const getDouble = (number) =>
    new Promise((resolve, reject) => {
      if (typeof number === "number") {
        setTimeout(() => {
          resolve(number * 2);
        }, 2000);
      } else {
        reject(new Error("Received value is not a number!"));
      }
    });

  const sumDoubles = async (numA, numB, numC) => {
    const doubles = await Promise.all([
      getDouble(numA),
      getDouble(numB),
      getDouble(numC),
    ]);
    return doubles.reduce((acc, double) => acc + double, 0);
  };

  //invoquem la funció asíncrona sumDoubles i fem console de l'output

  console.log(await sumDoubles(2, 10, 3)); // 30

  //alternativa fent servir Rest paramaeter per acceptar la quantitat de numbers que vulguem

  console.log(
    "-------- nivell 2 - ex 1 -------- Alternativa amb Rest parameter"
  );

  const sumDoublesRest = async (...numbers) => {
    const doubles = await Promise.all(
      numbers.map((number) => getDouble(number))
    );
    return doubles.reduce((acc, double) => acc + double, 0);
  };

  //invoquem la funció asíncrona sumDoubles amb Rest parameter (qualsevol número d'arguments supported!) i fem console de l'output

  console.log(await sumDoublesRest(1, 2, 3, 4, 5, 6, 7, 8)); // 72

  /* Nivell 3
Exercici 1: Força i captura tants errors com puguis dels nivells 1 i 2. */

  console.log("-------- nivell 3 - ex 1 --------");

  console.log("printEmployeeData() sense ID");
  await printEmployeeData();

  console.log("printEmployeeData(9) amb ID inexistent");
  await printEmployeeData(9);

  console.log(
    "printEmployeeData(4) amb ID existent però sense salari associat"
  );
  await printEmployeeData(4);

  console.log("printEmployeeData('berenguer') amb un ID no numèric");
  await printEmployeeData("berenguer");

  console.log(await getDouble());
})();
