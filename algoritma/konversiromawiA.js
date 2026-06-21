const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Masukkan angka (1-10): ", (input) => {

  let angka = parseInt(input);

  let romawi = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

  if (angka >= 1 && angka <= 10) {
    console.log(romawi[angka - 1]);
  } else {
    console.log("inputan salah");
  }

  rl.close();
});