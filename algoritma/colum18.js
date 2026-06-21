const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan nilai: ", (nilai) => {

    nilai = parseInt(nilai);

    if (nilai >= 80) {
        console.log("Indeks nilai 'A'");
    } else if (nilai >= 70) {
        console.log("Indeks nilai 'B'");
    } else if (nilai >= 55) {
        console.log("Indeks nilai 'C'");
    } else if (nilai >= 40) {
        console.log("Indeks nilai 'D'");
    } else {
        console.log("Indeks nilai 'E'");
    }

    rl.close();
});