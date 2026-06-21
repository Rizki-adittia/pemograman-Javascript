const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan angka: ", (angka) => {

    angka = parseInt(angka);

    let angkahuruf = ["satu", "dua", "tiga", "empat"];

    if (angka >= 1 && angka <= 4) {
        console.log(angkahuruf[angka - 1]);
    } else {
        console.log("angka yang dimasukkan salah");
    }

    rl.close();
});