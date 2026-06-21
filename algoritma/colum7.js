const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan jumlah rupiah: ", (rupiah) => {

    rupiah = parseInt(rupiah);

    let p1000 = Math.floor(rupiah / 1000);
    let sisa = rupiah % 1000;

    let p500 = Math.floor(sisa / 500);
    sisa = sisa % 500;

    let p100 = Math.floor(sisa / 100);
    sisa = sisa % 100;

    let p50 = Math.floor(sisa / 50);
    sisa = sisa % 50;

    let p25 = Math.floor(sisa / 25);
    sisa = sisa % 25;

    console.log("1000 =", p1000);
    console.log("500 =", p500);
    console.log("100 =", p100);
    console.log("50 =", p50);
    console.log("25 =", p25);

    rl.close();
});