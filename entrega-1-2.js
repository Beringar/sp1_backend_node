/* Nivell 1
- Exercici 1: Mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres. */

console.log("---- nivell 1 - ex 1 ----");

console.log(((firstNumber, secondNumber) => firstNumber + secondNumber)(3, 7));

/* Nivell 2
- Exercici 1: Crea una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut. */

console.log("---- nivell 2 - ex 1 ----");

const createObject = (value) => ({
  nom: value,
});

console.log(createObject("Backend Node.js"));

/* Nivell 2
- Exercici 2: Crea una classe "Persona" que rebi un paràmetre 'nom' en ser instanciada. La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'. Invoca el mètode dirNom des de fora de la classe. */

console.log("---- nivell 2 - ex 2 ----");

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

/* Nivell 3
- Exercici 1
Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la amb diferents definicions. */

console.log("---- nivell 3 - ex 1 ----");

class AbstractClass {
  constructor(nom) {
    if (new.target === AbstractClass) {
      throw new TypeError("Cannot construct Abstract instances directly");
    }
    this.nom = nom;
  }

  dirNom() {
    console.log(`El meu nom és: ${this.nom}`);
  }
}
// funció generadora objectes de la classe abstracta
const objectAbstractFactory = (nom) =>
  new (class extends AbstractClass {})(nom);

const objectA = objectAbstractFactory("Berenguer");
const objectB = objectAbstractFactory("Maria");
console.log(objectA);
console.log(objectB);

//comprovem que el prototype és de la classe abstracta
console.log(Object.getPrototypeOf(objectA));
console.log(Object.getPrototypeOf(objectB));

// proposta Omar, fent servir prototype
const objectAbstractPrototype = (nom) => {
  const obj = Object.create(AbstractClass.prototype);
  obj.nom = nom;
  return obj;
};

const objectC = objectAbstractPrototype("Omar");
console.log(objectC);

objectA.dirNom();
objectB.dirNom();
objectC.dirNom();
