const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan nama: ", (nama) => {
    rl.question("Masukan jenis golongan (A/B/C/D): ", (gol) => {
        rl.question("Masukan waktu bekerja: ", (jam) => {

            gol = gol.toUpperCase();
            jam = parseInt(jam);

            let upahperjam;
            let gaji;

            if (gol === "A") {
                upahperjam = 4000;
            } else if (gol === "B") {
                upahperjam = 5000;
            } else if (gol === "C") {
                upahperjam = 6000;
            } else if (gol === "D") {
                upahperjam = 7500;
            } else {
                console.log("Golongan tidak valid");
                rl.close();
                return;
            }

            if (jam <= 48) {
                gaji = jam * upahperjam;
            } else {
                let lembur = jam - 48;
                gaji = (48 * upahperjam) + (lembur * 3000);
            }

            console.log("\n=== Data karyawan ===");
            console.log("Nama karyawan  :", nama);
            console.log("Golongan       :", gol);
            console.log("Lama bekerja   :", jam, "jam");
            console.log("Total gaji     : Rp" + gaji);

            rl.close();
        });
    });
});