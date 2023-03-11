/*
Nivell 2
Crea una altra funció que rebi tres números i calculi la suma dels seus dobles fent servir la funció anterior.
*/

const { getDouble } = require("./getDouble");

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

module.exports = { sumDoubles };
