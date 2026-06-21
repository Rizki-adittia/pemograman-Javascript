const prompt = require("prompt-sync")();

let r = parseFloat(prompt("Masukkan jari-jari bola : "));
let pi = 3.14;

let volume = (4 / 3) * pi * r * r * r;
let luasPermukaan = 4 * pi * r * r;

console.log("Volume Bola = " + volume);
console.log("Luas Permukaan Bola = " + luasPermukaan);