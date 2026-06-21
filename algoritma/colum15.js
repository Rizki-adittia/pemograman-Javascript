const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan tahun: ", (tahun) => {

    tahun = parseInt(tahun);

    if ((tahun % 4 === 0 && tahun % 100 !== 0) || tahun % 400 === 0) {
        console.log(tahun, "Tahun Kabisat");
    } else {
        console.log(tahun, "Bukan Tahun Kabisat");
    }

    rl.close();
});