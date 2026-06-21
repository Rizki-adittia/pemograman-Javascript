const prompt = require("prompt-sync")();

let panjang = parseFloat(prompt("Masukkan panjang : "));
let lebar = parseFloat(prompt("Masukkan lebar : "));

let luas = panjang * lebar;
let keliling = 2 * (panjang + lebar);

console.log("Luas = " + luas);
console.log("Keliling = " + keliling);