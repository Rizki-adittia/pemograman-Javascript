const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan bilangan pertama: ", (a) => {
    rl.question("Masukkan bilangan kedua: ", (b) => {
        rl.question("Masukkan bilangan ketiga: ", (c) => {

            a = parseInt(a);
            b = parseInt(b);
            c = parseInt(c);

            let temp;

            if (a > b) { temp = a; a = b; b = temp; }
            if (a > c) { temp = a; a = c; c = temp; }
            if (b > c) { temp = b; b = c; c = temp; }

            console.log("Urutan naik:");
            console.log(a, b, c);

            rl.close();
        });
    });
});