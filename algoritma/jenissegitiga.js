const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("sisi a: ", (a) => {
  rl.question("sisi b: ", (b) => {
    rl.question("sisi c: ", (c) => {

      a = parseInt(a);
      b = parseInt(b);
      c = parseInt(c);

      let jumlah = a * a + b * b;
      let terbesar = c * c;

      if (jumlah === terbesar) {
        console.log("Segitiga siku-siku");
      } else if (jumlah > terbesar) {
        console.log("Segitiga Lancip");
      } else {
        console.log("Segitiga Tumpul");
      }

      rl.close();
    });
  });
});