const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Masukan detik: ", (input) => {
  let totalDetik = parseInt(input);

  let hari = Math.floor(totalDetik / 86400);
  let sisa = totalDetik % 86400;

  let jam = Math.floor(sisa / 3600);
  sisa = sisa % 3600;

  let menit = Math.floor(sisa / 60);
  let detik = sisa % 60;

  console.log(hari, "hari");
  console.log(jam, "jam");
  console.log(menit, "menit");
  console.log(detik, "detik");

  rl.close();
});