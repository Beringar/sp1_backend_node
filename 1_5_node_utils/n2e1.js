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

printMessageEverySecond("This is from N2E1", 5);
