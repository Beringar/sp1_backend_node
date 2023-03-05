/* Nivell 1
Exercici 2: Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.
 */

const fs = require("fs/promises");

const readFile = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, { encoding: "utf8" });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

readFile("nivell1.txt");
