const prompt = require("prompt-sync")();

let judulBuku = prompt("Masukkan judul buku : ");
let penerbit = prompt("Masukkan penerbit : ");
let jumlahBuku = prompt("Masukkan jumlah buku : ");
let tanggalPembelian = prompt("Masukkan tanggal pembelian : ");

console.log("Judul Buku : " + judulBuku);
console.log("Penerbit : " + penerbit);
console.log("Jumlah Buku : " + jumlahBuku);
console.log("Tanggal Pembelian : " + tanggalPembelian);