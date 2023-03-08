/*
Nivell 2
Exercici 1: Crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon.
*/

const printMessageEverySecond = (message, times) => {
  let count = 0;
  const printerInterval = setInterval(() => {
    console.log(message);
    count++;
    if (count === times) clearInterval(printerInterval);
  }, 1000);
};

console.log(
  "------ N2E2: Missatges per consola amb demores 1 segon. (limitat a 5 cops, per cancel·lar el setInterval)"
);

printMessageEverySecond("Missatge Berenguer N2E2", 5);
