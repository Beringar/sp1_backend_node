const fs = require("fs/promises");
const { scrypt, createDecipheriv } = require("node:crypto");

/*
Nivell 3
Exercici 1, part 3: Crea una altra funció que desencripti i descodifiqui els fitxers de l'apartat anterior tornant a generar una còpia de l'inicial.
*/

//Nota: aquestes variables les agafaríem sempre d'un arxiu tipus .env
const algorithm = "aes-192-cbc";
const password = "SY848meq!";
const salt = "salttlas";

//Nota: funció per generar una derived key. L'he fet amb promise. Aquesta funció també aniria en un mòdul a part.
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

const decryptDecode = async (filePath, encoding) => {
  try {
    console.log("------ N3E1 DECRYPT-DECODE: Decrypting...");
    const key = await getDerivedKey(password, salt, 24).catch((error) => {
      throw error;
    });

    const encryptedData = await fs.readFile(filePath, { encoding: "utf8" });

    let iv = Buffer.from(encryptedData.slice(0, 32), "hex");
    let encryptedText = Buffer.from(encryptedData.slice(32), encoding);

    // Creating Decipher
    let decipher = createDecipheriv(algorithm, Buffer.from(key), iv);

    // Updating encrypted text
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);

    await fs.writeFile(
      `${filePath.replace(`.${encoding}.enc`, "")}`,
      `${decrypted.toString("utf8")}`
    );
    console.log(
      `File ${filePath.replace(
        `.${encoding}.enc`,
        ""
      )} original desencriptat i descodificat OK`
    );
    await fs.unlink(filePath);
    console.log(`File ${filePath} encriptat esborrat OK`);
  } catch (error) {
    throw error;
  }
};

(async () => {
  await decryptDecode("nodeutils.txt.hex.enc", "hex");
  await decryptDecode("nodeutils.txt.base64.enc", "base64");
})();
