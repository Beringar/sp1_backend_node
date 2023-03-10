/*
Nivell 3
Exercici 1: Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la amb diferents definicions.
*/

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
// proposta Berenguer: funció generadora objectes de la classe abstracta
const objectAbstractFactory = (nom) =>
  new (class extends AbstractClass {})(nom);

// Proposta Omar, fent servir prototype
const objectAbstractPrototype = (nom) => {
  const obj = Object.create(AbstractClass.prototype);
  obj.nom = nom;
  return obj;
};

module.exports = {
  AbstractClass,
  objectAbstractFactory,
  objectAbstractPrototype,
};
