const fs = require("fs/promises");
const { existsSync } = require("node:fs");
const { scrypt, randomBytes, createCipheriv } = require("node:crypto");

/*
Nivell 3
Exercici 1, part 2: Crea una funció que guardi els fitxers del punt anterior, ara encriptats amb l'algoritme aes-192-cbc, i esborri els fitxers inicials.
*/

// Defining algorithm, password and salt. Nota: aquestes variables les agafaríem sempre d'un arxiu tipus .env
const algorithm = "aes-192-cbc";
const password = "SY848meq!";
const salt = "salttlas";

// funció per generar derived key. L'he fet amb promise
const getDerivedKey = (password, salt, numBytes) => {
  return new Promise((resolve, reject) => {
    scrypt(password, salt, numBytes, (err, key) => {
      if (err) {
        reject(err);
      }
      resolve(key);
    });
  });
};

const encrypt = async (filePath, encoding) => {
  try {
    console.log("------ N3E1 ENCRYPT: Encrypting...");
    const key = await getDerivedKey(password, salt, 24);
    const iv = randomBytes(16);

    // Creating Cipheriv with its parameters
    let cipher = createCipheriv(algorithm, Buffer.from(key), iv);

    const dataToEncrypt = await fs.readFile(filePath, { encoding: "utf8" });

    // Updating data
    let encrypted = cipher.update(dataToEncrypt, encoding);

    // Using concatenation
    encrypted = Buffer.concat([encrypted, cipher.final()]);

    //escric el resultat encriptat a l'arxiu nou amb extensió afegida .enc
    await fs.writeFile(
      `${filePath}.enc`,
      `${iv.toString("hex")}${encrypted.toString(encoding)}`
    );
    console.log(`File ${filePath}.enc encriptat OK`);
    await fs.unlink(filePath);
    console.log(`File ${filePath} codificat esborrat OK`);
    if (existsSync(`${filePath.replace(`.${encoding}`, "")}`)) {
      await fs.unlink(`${filePath.replace(`.${encoding}`, "")}`);
      console.log(
        `File ${filePath.replace(`.${encoding}`, "")} original esborrat OK`
      );
    }
  } catch (error) {
    console.log(error);
  }
};

(async () => {
  await encrypt("nodeutils.txt.hex", "hex");
  await encrypt("nodeutils.txt.base64", "base64");
})();
