const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan angka: ", (angka) => {

    angka = parseInt(angka);

    if (angka % 2 === 0) {
        console.log("bilangan genap");
    } else {
        console.log("bilangan ganjil");
    }

    rl.close();
});