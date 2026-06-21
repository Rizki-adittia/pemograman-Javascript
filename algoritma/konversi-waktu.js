let totalDetik = 7384;

let jam = Math.floor(totalDetik / 3600);
let menit = Math.floor((totalDetik % 3600) / 60);
let detik = totalDetik % 60;

console.log("Jam : " + jam);
console.log("Menit : " + menit);
console.log("Detik : " + detik);