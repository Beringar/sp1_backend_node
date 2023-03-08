const { exec } = require("child_process");
const os = require("os");

/*
Nivell 2
Exercici 2: Crea una funció que llisti per la consola el contingut del directori d'usuari/ària de l'ordinador utilizant Node Child Processes.
 */

const showUserFiles = () => {
  const command = os.platform() === "win32" ? "cd ~ && dir" : "cd ~ && ls -la"; //defineixo el command en funció de si és shell de windows o bé de mac/linux
  exec(command, (err, stdout, stderr) => {
    if (err) {
      console.error(`exec error: ${err}`);
      return;
    }
    console.log(`------ N2E2: Contingut del directori d'usuari:
  ${stdout}`);
  });
};

showUserFiles();
