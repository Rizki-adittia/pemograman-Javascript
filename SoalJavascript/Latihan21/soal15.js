const prompt = require("prompt-sync")();

let kode = prompt("Masukkan kode : ");

if (kode == "78821") {
    console.log("You are authenticated");
} else {
    console.log("You have no access");
}