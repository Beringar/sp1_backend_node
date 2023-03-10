const {
  AbstractClass,
  objectAbstractFactory,
  objectAbstractPrototype,
} = require("../app/abstractClass");

describe("Given a class AbstractClass from Classes & Arrow functions N3E1 ", () => {
  describe("When invoked directly with new constructor and argument 'Berenguer'", () => {
    test("It should throw an Error: 'Cannot construct Abstract instances directly'", () => {
      const nom = "Berenguer";
      const expectedError = "Cannot construct Abstract instances directly";

      const invokeAbstractClass = () => {
        new AbstractClass(nom);
      };

      expect(invokeAbstractClass).toThrow(new TypeError(expectedError));
    });
  });
});

describe("Given objectAbstractFactory function from Classes & Arrow functions N3E1 ", () => {
  describe("When invoked with 'Berenguer'", () => {
    test("It should create a new instance of AbstractClass", () => {
      const nom = "Berenguer";
      const classInstance = objectAbstractFactory(nom);

      expect(classInstance instanceof AbstractClass).toBe(true);
    });
  });

  describe("When an instance of AbstractClass invokes method dirNom'", () => {
    test("It should call method dirNom once", () => {
      const nom = "Maria";
      const classInstance = objectAbstractFactory(nom);

      const dirNomSpy = jest.spyOn(classInstance, "dirNom");

      classInstance.dirNom();

      expect(classInstance instanceof AbstractClass).toBe(true);
      expect(dirNomSpy).toHaveBeenCalledTimes(1);
    });
  });
});

describe("Given objectAbstractPrototype function from Classes & Arrow functions N3E1 ", () => {
  describe("When invoked with 'Berenguer'", () => {
    test("It should create a new instance of AbstractClass", () => {
      const nom = "Berenguer";
      const classInstance = objectAbstractPrototype(nom);

      expect(classInstance instanceof AbstractClass).toBe(true);
    });
  });
});
