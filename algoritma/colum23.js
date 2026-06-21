const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan angka: ", (angka) => {

    angka = parseInt(angka);

    if (angka > 0) {
        if (angka % 4 === 0) {
            console.log("Bilangan kelipatan 4");
        } else {
            console.log("Bukan kelipatan 4");
        }
    } else {
        console.log("Bukan bilangan positif");
    }

    rl.close();
});