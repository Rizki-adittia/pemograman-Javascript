const prompt = require("prompt-sync")();

let hargaMakanan = parseFloat(prompt("Masukkan harga makanan : "));

let pajak = hargaMakanan * 10 / 100;
let fee = hargaMakanan * 5 / 100;
let hargaBayar = hargaMakanan + pajak + fee;

console.log("Harga makanan : " + hargaMakanan);
console.log("Pajak : " + pajak);
console.log("Fee : " + fee);
console.log("Harga bayar : " + hargaBayar);