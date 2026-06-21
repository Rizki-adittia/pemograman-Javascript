const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan tinggi badan (cm): ", (tb) => {

    tb = parseFloat(tb);

    let beratideal = (tb - 100) * 0.9;

    console.log("Berat badan ideal adalah =", beratideal, "kg");

    rl.close();
});