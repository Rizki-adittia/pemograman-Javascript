const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan jarak (cm): ", (jarak) => {

    jarak = parseInt(jarak);

    let km = Math.floor(jarak / 100000);
    let sisa = jarak % 100000;

    let m = Math.floor(sisa / 100);
    let cm = sisa % 100;

    console.log("\nJarak");
    console.log(km, "km");
    console.log(m, "m");
    console.log(cm, "cm");

    rl.close();
});