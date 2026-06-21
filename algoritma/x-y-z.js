const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Masukkan nilai x: ", (x) => {
  rl.question("Masukkan nilai y: ", (y) => {
    rl.question("Masukkan nilai z: ", (z) => {

      x = parseInt(x);
      y = parseInt(y);
      z = parseInt(z);

      let temp = x;

      x = y;
      y = z;
      z = temp;

      console.log("X =", x);
      console.log("Y =", y);
      console.log("Z =", z);

      rl.close();
    });
  });
});