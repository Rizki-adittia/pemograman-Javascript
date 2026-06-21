const prompt = require("prompt-sync")();

let angka = parseInt(prompt("Masukkan angka : "));

if (angka > 100) {
    console.log("Nilai kamu sempurna!");
}