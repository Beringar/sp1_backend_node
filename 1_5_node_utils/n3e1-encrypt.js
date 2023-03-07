const fs = require("fs/promises");
const {
  scrypt,
  randomBytes,
  createCipheriv,
  createDecipheriv,
} = require("node:crypto");

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
    console.log("Encrypting...");
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
    await fs.unlink(`${filePath.replace(`.${encoding}`, "")}`);
  } catch (error) {
    throw error;
  }
};

const decrypt = async (filePath, encoding) => {
  try {
    console.log("Decrypting...");
    const key = await getDerivedKey(password, salt, 24).catch((error) => {
      throw error;
    });

    const encryptedData = await fs.readFile(filePath, { encoding: "utf8" });

    let iv = Buffer.from(encryptedData.slice(0, 32), "hex");
    let encryptedText = Buffer.from(encryptedData.slice(32), encoding);

    // Creating Decipher
    let decipher = createDecipheriv("aes-192-cbc", Buffer.from(key), iv);

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
    console.log(`File ${filePath} esborrat OK`);
  } catch (error) {
    throw error;
  }
};

(async () => {
  await encrypt("nivell1.txt.hex", "hex");
  await decrypt("nivell1.txt.hex.enc", "hex");
})();
