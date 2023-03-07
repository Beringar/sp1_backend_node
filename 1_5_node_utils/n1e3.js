const { promisify } = require("node:util");
const { createGzip } = require("node:zlib");
const { pipeline } = require("node:stream");
const { createReadStream, createWriteStream } = require("node:fs");

/* Nivell 1
Exercici 3: Crea una funció que comprimeixi el fitxer del nivell 1.
 */

const pipe = promisify(pipeline);

const compressFile = async (input, output) => {
  try {
    const gzip = createGzip();
    const source = createReadStream(input);
    const destination = createWriteStream(output);
    await pipe(source, gzip, destination);
    console.log(`File ${input} comprimit OK --> ${output}`);
  } catch (error) {
    console.log(error);
  }
};

compressFile("nivell1.txt", "nivell1.txt.gz");
