const prompt = require("prompt-sync")();

let rpl1 = parseInt(prompt("Jumlah siswa X RPL 1 : "));
let rpl2 = parseInt(prompt("Jumlah siswa X RPL 2 : "));
let tkj1 = parseInt(prompt("Jumlah siswa X TKJ 1 : "));
let tkj2 = parseInt(prompt("Jumlah siswa X TKJ 2 : "));

let total = rpl1 + rpl2 + tkj1 + tkj2;

console.log("Jumlah total siswa = " + total);