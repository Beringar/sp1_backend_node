const { exec } = require("child_process");

/*
Nivell 2
Exercici 2: Crea una funció que llisti per la consola el contingut del directori d'usuari/ària de l'ordinador utilizant Node Child Processes.

ATENCIÓ: el command és per a linux/macos.
Si executeu aquest arxiu a windows heu de posar com a primer paràmetre de exec --> "cd ~ && dir"
 */

const showUserFiles = () => {
  exec("cd ~ && ls -la", (err, stdout, stderr) => {
    if (err) {
      console.error(`exec error: ${err}`);
      return;
    }
    console.log(`Contingut del directori d'usuari:
  ${stdout}`);
  });
};

showUserFiles();
