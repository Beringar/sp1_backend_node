/*
Nivell 2
Exercici 1: Crea una funció que retorni el doble del número que li passa com a paràmetre després de 2 segons.
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

module.exports = { getDouble };
