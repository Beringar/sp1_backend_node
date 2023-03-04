const { promisify } = require("node:util");
const { createGzip } = require("node:zlib");
const { pipeline } = require("node:stream");
const { createReadStream, createWriteStream } = require("node:fs");

const pipe = promisify(pipeline);

const do_gzip = async (input, output) => {
  const gzip = createGzip();
  const source = createReadStream(input);
  const destination = createWriteStream(output);
  await pipe(source, gzip, destination);
};

do_gzip("nivell1.txt", "nivell1.txt.gz").catch((err) => {
  console.error("An error occurred:", err);
  process.exitCode = 1;
});
