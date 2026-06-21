const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan nomor bulan (1-12): ", (bulan) => {

    bulan = parseInt(bulan);

    let tigaPuluhSatu = [1, 3, 5, 7, 8, 10, 12];
    let tigaPuluh = [4, 6, 9, 11];

    if (tigaPuluhSatu.includes(bulan)) {
        console.log("31 hari");
    } else if (tigaPuluh.includes(bulan)) {
        console.log("30 hari");
    } else if (bulan === 2) {
        console.log("28 atau 29 hari");
    } else {
        console.log("Bulan tidak valid");
    }

    rl.close();
});