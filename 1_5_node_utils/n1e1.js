const fs = require("fs/promises");

/* Nivell 1
Exercici 1: Crea una funció que, en executar-la, escrigui una frase en un fitxer.
 */

const writePhrase = async (filePath, phrase) => {
  try {
    await fs.writeFile(filePath, phrase);
    console.log(`------ N1E1: File ${filePath} creat OK`);
  } catch (err) {
    console.log(err);
  }
};

writePhrase(
  "nodeutils.txt",
  `Berenguer Pou - Node Utils - Frase escrita des del Nivell 1 Ex 1 - Timestamp: ${Date.now()}`
);
