/* Nivell 1
- Exercici 1: Mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres. */

console.log(((firstNumber, secondNumber) => firstNumber + secondNumber)(3, 7));

/* Nivell 2
- Exercici 1: Crea una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut. */

const createObject = (value) => ({
  nom: value,
});

console.log(createObject("Backend Node.js"));

/* Nivell 2
- Exercici 2: Crea una classe "Persona" que rebi un paràmetre 'nom' en ser instanciada. La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'. Invoca el mètode dirNom des de fora de la classe. */

class Persona {
  constructor(nom) {
    this.nom = nom;
  }

  dirNom() {
    console.log(this.nom);
  }
}

const persona = new Persona("Berenguer");

persona.dirNom();
