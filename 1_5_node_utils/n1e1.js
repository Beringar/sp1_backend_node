const fs = require("fs/promises");

const writePhrase = async (filePath, phrase) => {
  try {
    await fs.appendFile(filePath, phrase);
  } catch (err) {
    console.log(err);
  }
};

writePhrase(
  "nivell1.txt",
  `-- Node Utils 1.5 N1E1 - Timestamp: ${Date.now()}--\n`
);
