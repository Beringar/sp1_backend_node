/*
Nivell 1
Exercici 2: Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut.
*/

const checkValue = (value, callback) => {
  if (typeof callback !== "function") {
    throw new Error("callback argument must be a function!");
  }
  if (typeof value === "string") {
    callback(`${value} is a string`);
  } else {
    callback(`${value} is not a string!`);
  }
};

module.exports = { checkValue };
