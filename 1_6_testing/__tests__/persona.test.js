const Persona = require("../app/Persona");
jest.mock("../app/Persona"); // fem mock de la classe Persona

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  Persona.mockClear();
});

describe("Given class Persona from Classes & Arrow Functions N2E2", () => {
  describe("When invoked with 'Berenguer'", () => {
    test("It should call the constructor once", () => {
      const nom = "Berenguer";
      const novaPersona = new Persona(nom);

      expect(Persona).toHaveBeenCalledTimes(1);
    });
  });

  describe("When invoked the method 'dirNom() of instance of Persona", () => {
    test("It should call method dirNom once", () => {
      const nom = "Maria";

      // Show that mockClear() is working:
      expect(Persona).not.toHaveBeenCalled();

      const novaPersona = new Persona(nom);

      // Constructor should have been called again:
      expect(Persona).toHaveBeenCalledTimes(1);

      novaPersona.dirNom();

      // mock.instances is available with automatic mocks:
      const mockPersonaInstance = Persona.mock.instances[0];
      const mockDirNom = mockPersonaInstance.dirNom;

      expect(mockDirNom).toHaveBeenCalledTimes(1);
    });
  });

  describe("When invoked the method 'dirNom()", () => {
    test("It should call method dirNom once", () => {
      const nom = "Josep";
      const dirNomMock = jest
        .spyOn(Persona.prototype, "dirNom")
        .mockImplementation(() => {
          console.log("---> mètode dirNom called!");
        });

      // Show that mockClear() is working:
      expect(Persona).not.toHaveBeenCalled();

      const novaPersona = new Persona(nom);

      // Constructor should have been called again:
      expect(Persona).toHaveBeenCalledTimes(1);

      novaPersona.dirNom();

      expect(dirNomMock).toHaveBeenCalled();
    });
  });
});
