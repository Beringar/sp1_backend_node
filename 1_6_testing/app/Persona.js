/*
Nivell 2
- Exercici 2: Crea una classe "Persona" que rebi un paràmetre 'nom' en ser instanciada. La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'. Invoca el mètode dirNom des de fora de la classe.
*/

class Persona {
  constructor(nom) {
    this.nom = nom;
  }

  dirNom() {
    console.log(this.nom);
  }
}

module.exports = Persona;
