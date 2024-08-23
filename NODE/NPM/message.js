const figlet = require("figlet");

function outputMessage() {
  console.log(
    figlet.textSync("Boo!", {
      font: "Ghost",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 80,
      whitespaceBreak: true,
    })
  );
}

outputMessage();
