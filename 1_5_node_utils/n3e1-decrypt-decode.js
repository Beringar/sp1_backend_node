const { createReadStream, createWriteStream } = require("node:fs");
const { scryptSync, createDecipheriv } = require("node:crypto");
const { Buffer } = require("node:buffer");

const algorithm = "aes-192-cbc";
const password = "Password used to generate key";
// Use the async `crypto.scrypt()` instead.
const key = scryptSync(password, "salt", 24);
// The IV is usually passed along with the ciphertext.
const iv = Buffer.alloc(16, 0); // Initialization vector.

const decipher = createDecipheriv(algorithm, key, iv);

const input = createReadStream("test.enc");
const output = createWriteStream("nivell1_dec.txt");

input.pipe(decipher).pipe(output);
