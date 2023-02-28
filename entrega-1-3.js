/* Nivell 1
- Exercici 1
  Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no.
 */

console.log("---- nivell 1 - ex 1 ----");

const isGreaterThanFive = (resolveFunction, rejectFunction) =>
  new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 11);
    console.log(`Random number: ${randomNumber}`);

    if (randomNumber > 5) {
      resolve(resolveFunction(randomNumber));
    }
    reject(rejectFunction(randomNumber));
  });

const printOK = (msg) => `Resolved! ${msg} is greater than 5!`;
const printError = (error) => `Rejected! ${error} is NOT greater than 5!`;

isGreaterThanFive(printOK, printError)
  .then((data) => console.log(data))
  .catch((e) => console.log(e));

/* Nivell 1
- Exercici 2
  Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut. */

console.log("---- nivell 1 - ex 2 ----");

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
checkValue(true, printMsg);
checkValue("This is sprint 1, entrega 1.3, nivell 1, exercici 2", printMsg);
