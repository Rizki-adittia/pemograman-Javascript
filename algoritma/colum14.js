const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan jam kerja: ", (jamkerja) => {

    jamkerja = parseInt(jamkerja);

    let upah;

    if (jamkerja <= 48) {
        upah = jamkerja * 2000;
    } else {
        let lembur = jamkerja - 48;
        upah = (48 * 2000) + (lembur * 3000);
    }

    console.log("Upahnya adalah : Rp " + upah);

    rl.close();
});