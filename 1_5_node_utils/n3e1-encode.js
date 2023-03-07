const { promisify } = require("node:util");
const { pipeline } = require("node:stream");
const { createReadStream, createWriteStream } = require("node:fs");
const { buffer } = require("node:stream/consumers");

/*
Nivell 3
Exercici 1, part 1: Crea una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament, a partir del fitxer del nivell 1.
*/

const pipe = promisify(pipeline);

const encodeFile = async (input, encoding) => {
  try {
    const source = createReadStream(input);
    const outputFile = createWriteStream(`${input}.${encoding}`);
    const dataBuffer = await buffer(source);
    const encodedData = dataBuffer.toString(encoding);
    await pipe(encodedData, outputFile);
    console.log(`File ${input}.${encoding} codificat OK`);
  } catch (error) {
    console.log(error);
  }
};

encodeFile("nivell1.txt", "hex");
encodeFile("nivell1.txt", "base64");

//Nota Berenguer: font per a fer buffer des d'un readable stream: https://nodejs.org/api/webstreams.html#webstreams_utility_consumers
