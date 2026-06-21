const prompt = require("prompt-sync")();

let huruf = prompt("Masukkan huruf : ");

if (
    huruf == "A" || huruf == "I" || huruf == "U" || huruf == "E" || huruf == "O" ||
    huruf == "a" || huruf == "i" || huruf == "u" || huruf == "e" || huruf == "o"
) {
    console.log("Huruf Vokal");
} else if (
    (huruf >= "A" && huruf <= "Z") ||
    (huruf >= "a" && huruf <= "z")
) {
    console.log("Huruf Konsonan");
} else {
    console.log("Bukan berupa huruf");
}