const prompt = require("prompt-sync")();

let jumlah = 0;

for(let i = 1; i <= 4; i++){
    let nilai = parseInt(prompt("Masukkan nilai ke-" + i + " = "));
    jumlah += nilai;
}

let rata = jumlah / 4;

console.log("Jumlah =", jumlah);
console.log("Rata-rata =", rata);