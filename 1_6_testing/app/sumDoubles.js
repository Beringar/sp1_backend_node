/*
Nivell 2
Exercici 1: Crea una funció que retorni el doble del número que li passa com a paràmetre després de 2 segons.
Crea una altra funció que rebi tres números i calculi la suma dels seus dobles fent servir la funció anterior.
*/

const getDouble = (number) => {
  if (typeof number !== "number") {
    throw new Error(`Received value: ${number} is not a valid number!`);
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(number * 2);
    }, 2000);
  });
};

const sumDoubles = (numA, numB, numC) => {
  return new Promise(async (resolve, reject) => {
    try {
      const doubles = await Promise.all([
        getDouble(numA),
        getDouble(numB),
        getDouble(numC),
      ]);
      resolve(doubles.reduce((acc, double) => acc + double, 0));
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = { getDouble, sumDoubles };
