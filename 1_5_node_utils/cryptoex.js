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

const encrypt = async (text, encoding) => {
  console.log("encrypt called");
  const key = await getDerivedKey(password, salt, 24).catch((error) => {
    throw error;
  });
  const iv = randomBytes(16);

  // Creating Cipheriv with its parameters
  let cipher = createCipheriv(algorithm, Buffer.from(key), iv);

  // Updating text
  let encrypted = cipher.update(text, encoding);

  // Using concatenation
  encrypted = Buffer.concat([encrypted, cipher.final()]);

  // Returning iv and encrypted data
  return {
    iv: iv.toString("hex"),
    encryptedData: encrypted.toString(encoding),
  };
};

const decrypt = async (text, encoding) => {
  const key = await getDerivedKey(password, salt, 24).catch((error) => {
    throw error;
  });
  let iv = Buffer.from(text.iv, "hex");
  let encryptedText = Buffer.from(text.encryptedData, encoding);

  // Creating Decipher
  let decipher = createDecipheriv("aes-192-cbc", Buffer.from(key), iv);

  // Updating encrypted text
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);

  // returns data after decryption
  return decrypted.toString("utf8");
};

// Encrypts output
(async () => {
  console.log(
    "input is --> 2d204672617365206573637269746120706572204e6976656c6c20312045782031202d2054696d657374616d703a20313637383131363837303533322d0a"
  );
  var outputencrypted = await encrypt(
    "2d204672617365206573637269746120706572204e6976656c6c20312045782031202d2054696d657374616d703a20313637383131363837303533322d0a",
    "hex"
  );
  console.log(outputencrypted);
  var outputdecrypted = await decrypt(outputencrypted, "hex");
  console.log(outputdecrypted);

  console.log("base64");
  console.log(
    "input is --> LSBGcmFzZSBlc2NyaXRhIHBlciBOaXZlbGwgMSBFeCAxIC0gVGltZXN0YW1wOiAxNjc4MTE2ODcwNTMyLQo="
  );
  var outputencryptedb64 = await encrypt(
    "LSBGcmFzZSBlc2NyaXRhIHBlciBOaXZlbGwgMSBFeCAxIC0gVGltZXN0YW1wOiAxNjc4MTE2ODcwNTMyLQo=",
    "base64"
  );
  console.log(outputencryptedb64);
  var outputdecryptedb64 = await decrypt(outputencryptedb64, "base64");
  console.log(outputdecryptedb64);
})();

// Decrypts output
//console.log(decrypt(output));
