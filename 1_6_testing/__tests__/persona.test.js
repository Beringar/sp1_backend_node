const Persona = require("../app/Persona");

describe("Given class Persona from Classes & Arrow Functions N2E2", () => {
  describe("When invoked with 'Berenguer'", () => {
    test("It should create a new instance of Persona", () => {
      const nom = "Berenguer";
      const novaPersona = new Persona(nom);

      expect(novaPersona instanceof Persona).toBe(true);
    });
  });

  describe("When invoked the method dirNom of an instance of Persona", () => {
    test("It should call dirNom", () => {
      const nom = "Maria";
      const novaPersona = new Persona(nom);

      const dirNomSpy = jest.spyOn(novaPersona, "dirNom");

      novaPersona.dirNom();

      expect(dirNomSpy).toHaveBeenCalledTimes(1);
    });
  });
});
