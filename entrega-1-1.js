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
