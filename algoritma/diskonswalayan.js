const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan total harga belanjaan: ", (totalBelanja) => {

    totalBelanja = parseInt(totalBelanja);

    let diskon = 0;

    if (totalBelanja > 100000) {
        diskon = totalBelanja * 0.1;
    }

    let hargaAkhir = totalBelanja - diskon;

    console.log("\n=== Rincian Pembayaran ===");
    console.log("Total Belanja = Rp", totalBelanja);
    console.log("Diskon = Rp", diskon);
    console.log("Harga Akhir = Rp", hargaAkhir);

    rl.close();
});