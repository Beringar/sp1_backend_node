/* Nivell 1
- Exercici 1
  Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no.
 */

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
