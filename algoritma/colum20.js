const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan angka: ", (angka) => {

    angka = parseInt(angka);

    let bulan = [
        "Januari", "Februari", "Maret", "April",
        "Mei", "Juni", "Juli", "Agustus",
        "September", "Oktober", "November", "Desember"
    ];

    if (angka >= 1 && angka <= 12) {
        console.log("Bulan", bulan[angka - 1]);
    } else {
        console.log("Output error");
    }

    rl.close();
});