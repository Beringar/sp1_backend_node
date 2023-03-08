# Backend Node.js Sprint 1 - 1.6 Testing

**Descripció**: Per a aprendre a desenvolupar amb TDD (Test Driven Development) primer hem de conèixer les llibreries de testing. En els següents exercicis usaràs Jest, una llibreria amb utilitats per testejar codi JavaScript. Podràs trobar la documentació a l'apartat de "Per saber més".

Abans de començar els següents exercicis, crea un projecte Node amb la següent estructura:

- **app**: Carpeta amb el codi a testejar. Hauràs d'exportar les funcions i modificar-ne algunes (p. ex. perquè en comptes de console.log() facin return)
- **\_\_tests\_\_**: Carpeta amb els tests.
- **.gitignore**: No oblidis aquest fitxer o pujaràs al repositori coses que no han de ser allà (mira la documentació oficial a l'apartat de "Per saber més").
- **readme.md**: Posa aquí la descripció del projecte i les instruccions d'instal·lació i arrencada en format Markdown (dona un cop d'ull a la guia oficial Markdown si tens dubtes).
- **package.json**: Descripció i configuració del projecte.

Una vegada creat el teu projecte, puja'l a GitHub.

Els tests que creïs han de poder executar-se per la consola amb npm.

## Nivell 1

- Crea un arxiu amb les funcions **sumar, restar, multiplicar i dividir** dos o més operands. Testeja la correcta execució d'aquestes funcions.
- Crea els tests corresponents per verificar el funcionament de les dues funcions de l'exercici **Promises i Callbacks N1 E2**.
- Crea els tests corresponents per verificar el funcionament de les funcions de l'exercici **Promises i Callbacks N2 E1** i **Promises i Callbacks N2 E2** (getEmployee() i getSalary()).
- Crea els tests corresponents per verificar el funcionament de l'exercici **Async / Await N1 E2**.

Recorda: Per tots els tests que s'han de testejar coses com inputs, outputs, errors i casos límit, no només que 2 i 2 sumin 4.

## Nivell 2

- Verifica mitjançant tests l'execució de l'exercici **Async / Await N2 E1** utilitzant Jest Fake Timers.
- Crea un mock que comprovi les crides al constructor de la classe Persona i al seu mètode dirNom() en l'exercici **Classes & Arrow Functions - N2 E2** i testeja que funcionen.
- Verifica mitjançant tests la creació d'instàncies de la classe abstracta de l'exercici **Classes & Arrow Functions N3 E1**.

## Nivell 3

- Refès els exercicis **Promises i Callbacks N2 E1** i **Promises i Callbacks N2 E2** (getEmployee() i getSalary()) de manera que accedeixin a les dades d'un fitxer extern JSON. Crea tests que demostrin la correcta execució de l'exercici fent un mock del fitxer JSON.
- Utilitzant com a base l'exercici **Async / Await**, crea tests que forcin errors de funcionament i verifiqui que els errors llançats són els esperats.
