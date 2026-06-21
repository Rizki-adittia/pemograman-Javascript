const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan huruf: ", (huruf) => {

    huruf = huruf.toLowerCase();

    if ("aiueo".includes(huruf)) {
        console.log("huruf vokal");
    } else {
        console.log("huruf konsonan");
    }

    rl.close();
});