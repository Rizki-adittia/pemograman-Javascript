const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Masukan karakter: ", (digit) => {

  let hasil;

  if (digit >= '0' && digit <= '9') {
    hasil = parseInt(digit);
    console.log(hasil);
  } else {
    hasil = -99;
    console.log(hasil);
  }

  rl.close();
});