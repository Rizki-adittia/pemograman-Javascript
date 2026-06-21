const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan angka: ", (angka) => {

    angka = parseInt(angka);

    if (angka > 0) {
        console.log("Bilangan Positif");
    } else if (angka < 0) {
        console.log("Bilangan Negatif");
    } else {
        console.log("Bilangan Nol");
    }

    rl.close();
});