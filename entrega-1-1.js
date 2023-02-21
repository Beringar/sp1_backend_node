/* Nivell 1
Exercici 1: Crea una funció que mostri per consola el nom d'usuari/ària en invocar-la passant-li el nom com a paràmetre. */

const showName = (name) => console.log(name);

showName("Berenguer");

/* Nivell 2
Exercici 1: Mostra per consola el nom i cognoms de l'usuari/ària mitjançant template literals, guardant-los en variables i referenciant-les en la impressió del missatge. */

const personName = "Berenguer";
const personSurname = "Pou Llavina";

console.log(`Name: ${personName}
Surname: ${personSurname}`);

/* Nivell 2
Exercici 2: Invoca una funció que retorni un valor des de dins d'una template literal. */

const getPhraseLength = (phrase) => {
  return phrase.length;
};

const myPhrase = "Next monday we are going to MWC Barcelona";

console.log(
  `The phrase "${myPhrase}" has ${getPhraseLength(
    myPhrase
  )} characters, spaces included.`
);

/* Nivell 3
Exercici 1: Crea una matriu de deu funcions i emplena-la mitjançant un bucle de manera que cada funció compti del 0 al 9 per la consola. Invoca cada funció de l'array iterativament. Haurà de mostrar-se per consola el compte del 0 al 9 deu vegades. */

const countersArray = new Array(10).fill(() => {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
});

countersArray.forEach((countFunction) => countFunction());
