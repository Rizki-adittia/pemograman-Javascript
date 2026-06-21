const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan nilai belanja: ", (belanja) => {

    belanja = parseInt(belanja);

    let hasil = Math.floor(belanja / 25) * 25;

    console.log("Hasil pembulatan = Rp" + hasil);

    rl.close();
});