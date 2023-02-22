/* Nivell 1
- Exercici 1: Mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres. */

console.log(((firstNumber, secondNumber) => firstNumber + secondNumber)(3, 7));

/* Nivell 2
- Exercici 1: Crea una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut. */

const createObject = (value) => ({
  key: value,
});

console.log(createObject("Backend Node.js"));
