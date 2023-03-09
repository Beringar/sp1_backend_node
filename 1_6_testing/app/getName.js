/* Nivell 1
Exercici 2: Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï la seva funció resolve() després de 2 segons de la seva invocació.
*/

const getNameAfter2Secs = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Berenguer after 2 seconds!");
    }, 2000);
  });

const getName = async () => await getNameAfter2Secs();

module.exports = { getName };
