const prompt = require("prompt-sync")();

let angka = parseInt(prompt("Masukkan bilangan : "));

if (angka % 7 == 0) {
    console.log("Bilangan tersebut merupakan kelipatan 7");
} else {
    console.log("Anda belum beruntung");
}