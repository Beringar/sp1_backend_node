const { createReadStream, createWriteStream } = require("node:fs");

const { pipeline } = require("node:stream");

const { scrypt, randomBytes, createCipheriv } = require("node:crypto");

const algorithm = "aes-192-cbc";
const password = "SY848meq!";

const iv = randomBytes(16);
console.log(`${buf.length} bytes of random data: ${buf.toString("hex")}`);




  // First, we'll generate the key. The key length is dependent on the algorithm.
  // In this case for aes192, it is 24 bytes (192 bits).

    // Then, we'll generate a random initialization vector


      const cipher = createCipheriv(algorithm, key, iv);

      const input = createReadStream("nivell1.txt.hex");
      const output = createWriteStream("test.enc");

      pipeline(input, cipher, output, (err) => {
        if (err) throw err;
      });
    });
  });
