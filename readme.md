# Backend Node.js Sprint 1 (Node.js basics)

## Entrega 1.1: Functions & Template Literals

**Descripció**: Treballarem amb funcions i templates literals, elements fonamentals en la programació amb JavaScript ;)
Utilitza l'intèrpret de node en tots els casos.

### Nivell 1

- Exercici 1: Crea una funció que mostri per consola el nom d'usuari/ària en invocar-la passant-li el nom com a paràmetre.

### Nivell 2

- Exercici 1: Mostra per consola el nom i cognoms de l'usuari/ària mitjançant template literals, guardant-los en variables i referenciant-les en la impressió del missatge.
- Exercici 2: Invoca una funció que retorni un valor des de dins d'una template literal.

### Nivell 3

- Exercici 1: Crea una matriu de deu funcions i emplena-la mitjançant un bucle de manera que cada funció compti del 0 al 9 per la consola. Invoca cada funció de l'array iterativament. Haurà de mostrar-se per consola el compte del 0 al 9 deu vegades.
- Exercici 2: Crea una funció anònima autoinvocable igualada a una variable que mostri per consola el nom de l'usuari/ària a rebut com a paràmetre.

**SOLUCIÓ Entrega 1.1: Functions & Template Literals** --> [entrega-1-1.js](entrega-1-1.js)

## Entrega 1.2: Classes & Arrow Functions

**Descripció**: Les arrow functions són una evolució de les funcions tradicionals. Les classes van ser introduïdes en EcmaScript 6 i treballarem amb elles en profunditat.
Utilitza l'intèrpret de node en tots els casos.

### Nivell 1

- Exercici 1: Mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres.

### Nivell 2

- Exercici 1: Crea una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut.
- Exercici 2: Crea una classe "Persona" que rebi un paràmetre 'nom' en ser instanciada. La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'. Invoca el mètode dirNom des de fora de la classe.

### Nivell 3

- Exercici 1: Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la amb diferents definicions.

**SOLUCIÓ Entrega 1.2: Classes & Arrow Functions** --> [entrega-1-2.js](entrega-1-2.js)

## Entrega 1.3: Promises & Callbacks

**Descripció**: Una Promise és un objecte que representa la terminació o el fracàs d'una operació asíncrona. Una funció callback és una funció que es passa a una altra funció com un argument i s'invoca dins de la funció externa per completar algun tipus de rutina o acció. Conèixer-les bé és una de les bases importants per a la programació amb Node.
Utilitza l'intèrpret de node en tots els casos.

### Nivell 1

- Exercici 1: Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no.

- Exercici 2: Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut.

### Nivell 2

- Exercici 1: Donats els objectes employees i salaries, crea una arrow function getEmployee() que retorni una Promise efectuant la cerca en l'objecte pel seu id.

```
let employees = [
  {
    id: 1,
    name: "Linux Torvalds",
  },
  {
    id: 2,
    name: "Bill Gates",
  },
  {
    id: 3,
    name: "Jeff Bezos",
  },
];

let salaries = [
  {
    id: 1,
    salary: 4000,
  },
  {
    id: 2,
    salary: 1000,
  },
  {
    id: 3,
    salary: 2000,
  },
];

```

- Exercici 2: Crea una altra arrow function getSalary() similar a l'anterior que rebi com a paràmetre un objecte employee i retorni el seu salari.

- Exercici 3: Invoca la primera funció getEmployee() i després getSalary() niant l'execució de les dues promises de manera que es retorni per la consola el nom de l'empleat/da i el seu salari.

### Nivell 3

- Exercici 1: Fixa un element catch a la invocació del nivell anterior que capturi qualsevol error i el mostri per la consola.

**SOLUCIÓ Entrega 1.3: Promises & Callbacks** --> [entrega-1-3.js](entrega-1-3.js)

## Entrega 1.4: Async / Await

**Descripció**: La finalitat de les funcions asíncrones és simplificar el comportament de l'ús síncron de Promises i realitzar algun comportament específic en un grup de Promises. De la mateixa manera que les Promises són semblants a les devolucions de crides estructurades, les funcions amb async/await s'assemblen a una combinació de generadors i promises. Utilitza l'intèrpret de node en tots els casos.

### Nivell 1

- Exercici 1: Crea una funció asíncrona que rebi un id d'empleat/da i imprimeixi per pantalla el nom de l'empleat/da i el seu salari, usant les funcions getEmployee() i getSalary() que has definit a la tasca anterior.

- Exercici 2: Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï la seva funció resolve() després de 2 segons de la seva invocació.

### Nivell 2

- Exercici 1: Crea una funció que retorni el doble del número que li passa com a paràmetre després de 2 segons.
  Crea una altra funció que rebi tres números i calculi la suma dels seus dobles fent servir la funció anterior.

### Nivell 3

- Exercici 1: Força i captura tants errors com puguis dels nivells 1 i 2.
