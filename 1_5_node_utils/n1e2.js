const fs = require("fs/promises");

const readFile = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, { encoding: "utf8" });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

readFile("nivell1.txt");
