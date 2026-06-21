const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan berat badan aktual: ", (beratAktual) => {
    rl.question("Masukkan berat badan ideal: ", (beratIdeal) => {

        beratAktual = parseInt(beratAktual);
        beratIdeal = parseInt(beratIdeal);

        let selisih = Math.abs(beratAktual - beratIdeal);

        if (selisih <= 2) {
            console.log("Berat badan Ideal");
        } else {
            console.log("Berat badan Tidak Ideal");
        }

        rl.close();
    });
});