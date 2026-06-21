const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan nilai X: ", (x) => {
    rl.question("Masukkan nilai Y: ", (y) => {

        x = parseInt(x);
        y = parseInt(y);

        if (x > 0 && y > 0) {
            console.log("Kuadran I");
        } else if (x < 0 && y > 0) {
            console.log("Kuadran II");
        } else if (x < 0 && y < 0) {
            console.log("Kuadran III");
        } else if (x > 0 && y < 0) {
            console.log("Kuadran IV");
        } else {
            console.log("Tidak terletak di kuadran manapun");
        }

        rl.close();
    });
});