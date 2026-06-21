const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Masukan jumlah hari proyek: ", (input) => {

  let totalHari = parseInt(input);

  let tahun = Math.floor(totalHari / 360);
  let sisa = totalHari % 360;

  let bulan = Math.floor(sisa / 30);
  let hari = sisa % 30;

  console.log(tahun, "tahun");
  console.log(bulan, "bulan");
  console.log(hari, "hari");

  rl.close();
});