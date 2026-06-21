const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Masukkan tanggal pertama: ", (h1) => {
  rl.question("Masukkan bulan pertama: ", (b1) => {
    rl.question("Masukkan tahun pertama: ", (t1) => {

      rl.question("\nMasukkan tanggal kedua: ", (h2) => {
        rl.question("Masukkan bulan kedua: ", (b2) => {
          rl.question("Masukkan tahun kedua: ", (t2) => {

            h1 = parseInt(h1);
            b1 = parseInt(b1);
            t1 = parseInt(t1);

            h2 = parseInt(h2);
            b2 = parseInt(b2);
            t2 = parseInt(t2);

            let total1 = t1 * 365 + b1 * 30 + h1;
            let total2 = t2 * 365 + b2 * 30 + h2;

            let selisih = total2 - total1;

            console.log("Selisih:", selisih, "hari");

            rl.close();
          });
        });
      });

    });
  });
});