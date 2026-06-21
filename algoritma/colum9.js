const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan panjang (meter): ", (panjang) => {

    panjang = parseFloat(panjang);

    let inchi = panjang / 0.0254;
    let kaki = panjang / 0.3048;
    let yard = panjang / 0.9144;

    console.log("Panjang =", panjang);
    console.log("Konversi ke satuan inchi =", inchi);
    console.log("Konversi ke satuan kaki =", kaki);
    console.log("Konversi ke satuan yard =", yard);

    rl.close();
});