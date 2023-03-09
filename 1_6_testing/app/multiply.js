const multiply = (...numbers) => {
  if (numbers.length < 2) {
    throw new Error("Insuficcient arguments. At least two numbers are needed");
  }

  return numbers.reduce((acc, number) => {
    if (typeof number !== "number") {
      throw new Error(`Invalid argument: ${number} is not a valid number`);
    }
    return acc * number;
  });
};

module.exports = { multiply };
