const prompt = require("prompt-sync")();

let totalHarga = parseFloat(prompt("Masukkan total harga barang : "));
let diskon = 0;

if (totalHarga >= 200000) {
    diskon = totalHarga * 7.5 / 100;
}

let totalBayar = totalHarga - diskon;

console.log("Total Harga : " + totalHarga);
console.log("Diskon : " + diskon);
console.log("Total Bayar : " + totalBayar);