/* Nivell 1
Exercici 1: Crea una funció que, en executar-la, escrigui una frase en un fitxer.
 */

const fs = require("fs/promises");

const writePhrase = async (filePath, phrase) => {
  try {
    await fs.appendFile(filePath, phrase);
  } catch (err) {
    console.log(err);
  }
};

writePhrase(
  "nivell1.txt",
  `- Frase escrita per Nivell 1 Ex 1 - Timestamp: ${Date.now()}-\n`
);
