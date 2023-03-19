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

---

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

---

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

---

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

**SOLUCIÓ Entrega 1.4: Async / Await** --> [entrega-1-4.js](entrega-1-4.js)

---

# Backend Node.js Sprint 1 - 1.5 Node Utils

## Scripts per executar els exercicis de cada nivell

Des del terminal, a la carpeta **/1_5_node_utils**, cal escriure el següent command per a cada exercici:

npm run n[_num nivell_]e[_num exercici_]

Per exemple per al Nivell 1 Exercici 1, cal escriure:

```
npm run n1e1
```

## **IMPORTANT: Com que s'escriuen i s'esborren arxius per a cada nivell i exercici de l'entrega 1.5 Node Utils, és important executar els exercicis en seqüència:**

```
npm run n1e1
npm run n1e2
npm run n1e3
npm run n2e1
npm run n2e2
npm run n3e1-encode
npm run n3e1-encrypt
npm run n3e1-decrypt-decode
```

Si només es vol executar la part **Nivell 3 Exercici 1 (codificació, encriptació, desencriptació)**, s'ha de fer la seqüència següent:

```
npm run n1e1
npm run n3e1-encode
npm run n3e1-encrypt
npm run n3e1-decrypt-decode
```

## Entrega 1.5: Node Utils

**Descripció**: Els mòduls natius de Node.js permeten als desenvolupadors/es d'aplicacions i mòduls dur a terme diferents tasques: gestió d'arxius, processament d'informació, codificació i encriptació, entre d'altres. Necessitaràs donar un cop d'ull a la documentació de Node!

Utilitza l'intèrpret de node en els exercicis i pensa que potser cal incloure instruccions d'instal·lació i/o execució perquè es pugui revisar cada part dels exercicis.

### Nivell 1

- Exercici 1: Crea una funció que, en executar-la, escrigui una frase en un fitxer.

- Exercici 2: Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.

- Exercici 3: Crea una funció que comprimeixi el fitxer del nivell 1.

### Nivell 2

- Exercici 1: Crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon.

- Exercici 2: Crea una funció que llisti per la consola el contingut del directori d'usuari/ària de l'ordinador utilizant Node Child Processes.

### Nivell 3

- Exercici 1:
  - Crea una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament, a partir del fitxer del nivell 1.
  - Crea una funció que guardi els fitxers del punt anterior, ara encriptats amb l'algoritme aes-192-cbc, i esborri els fitxers inicials.
  - Crea una altra funció que desencripti i descodifiqui els fitxers de l'apartat anterior tornant a generar una còpia de l'inicial.

Inclou un README amb instruccions per a l'execució de cada part.

**SOLUCIÓ Entrega 1.5: Node Utils** --> [./1_5_node_utils](./1_5_node_utils/)

---

# Backend Node.js Sprint 1 - 1.6 Testing

Total de testos realitzats: 66.

Developer: Berenguer Pou

## Instruccions per executar els tests:

Des de la carpeta `/1_6_testing` :

### Instal·lar dependències:

```
npm install
```

### Executar tots els tests:

```
npm test
```

### Executar els test individualment. Des de la carpeta \_\_tests\_\_. Per exemple, per executar el test de l'arxiu `sum.test.js`:

Si _jest_ està instal·lat globalment:

```
jest sum.test.js
```

Si _jest_ no està instal·lat globalment:

```
npx jest sum.test.js
```

# LLISTA DE TESTS:

## Nivell 1

Crea un arxiu amb les funcions **sumar, restar, multiplicar i dividir** dos o més operands. Testeja la correcta execució d'aquestes funcions.

### (24 tests):

- sum.test.js
- subtract.test.js
- multiply.test.js
- divide.test.js

Crea els tests corresponents per verificar el funcionament de les dues funcions de l'exercici **Promises i Callbacks N1 E2**.

### (6 tests):

- checkValue.test.js
- printMsg.test.js

Crea els tests corresponents per verificar el funcionament de les funcions de l'exercici **Promises i Callbacks N2 E1** i **Promises i Callbacks N2 E2** (getEmployee() i getSalary()).

### (13 tests):

- getSalary.test.js
- getEmployee.test.js

Crea els tests corresponents per verificar el funcionament de l'exercici **Async / Await N1 E2**.

### (1 test):

- getName.test.js

## Nivell 2

Verifica mitjançant tests l'execució de l'exercici **Async / Await N2 E1** utilitzant Jest Fake Timers.

### (6 tests):

- getDouble.test.js
- sumDoubles.test.js

Crea un mock que comprovi les crides al constructor de la classe Persona i al seu mètode dirNom() en l'exercici **Classes & Arrow Functions - N2 E2** i testeja que funcionen.

### (2 tests):

- persona.test.js

Verifica mitjançant tests la creació d'instàncies de la classe abstracta de l'exercici **Classes & Arrow Functions N3 E1**.

### (4 tests):

- abstractClass.test.js

## Nivell 3

Refès els exercicis **Promises i Callbacks N2 E1** i **Promises i Callbacks N2 E2** (getEmployee() i getSalary()) de manera que accedeixin a les dades d'un fitxer extern JSON. Crea tests que demostrin la correcta execució de l'exercici fent un mock del fitxer JSON.

### (10 tests):

- getEmployeeJson.test.js
- getSalaryJson.test.js

Utilitzant com a base l'exercici **Async / Await**, crea tests que forcin errors de funcionament i verifiqui que els errors llançats són els esperats.

### (13 tests):

- getSalary.test.js
- getEmployee.test.js

---

Informació addicional:

**Descripció**: Per a aprendre a desenvolupar amb TDD (Test Driven Development) primer hem de conèixer les llibreries de testing. En els següents exercicis usaràs Jest, una llibreria amb utilitats per testejar codi JavaScript. Podràs trobar la documentació a l'apartat de "Per saber més".

Abans de començar els següents exercicis, crea un projecte Node amb la següent estructura:

- **app**: Carpeta amb el codi a testejar. Hauràs d'exportar les funcions i modificar-ne algunes (p. ex. perquè en comptes de console.log() facin return)
- **\_\_tests\_\_**: Carpeta amb els tests.
- **.gitignore**: No oblidis aquest fitxer o pujaràs al repositori coses que no han de ser allà (mira la documentació oficial a l'apartat de "Per saber més").
- **readme.md**: Posa aquí la descripció del projecte i les instruccions d'instal·lació i arrencada en format Markdown (dona un cop d'ull a la guia oficial Markdown si tens dubtes).
- **package.json**: Descripció i configuració del projecte.

Una vegada creat el teu projecte, puja'l a GitHub.

Els tests que creïs han de poder executar-se per la consola amb npm.

**SOLUCIÓ Entrega 1.6: Testing** --> [./1_6_testing](./1_6_testing)
