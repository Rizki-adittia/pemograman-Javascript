const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan jam: ", (jam) => {
    rl.question("Masukkan menit: ", (menit) => {
        rl.question("Masukkan detik: ", (detik) => {

            jam = parseInt(jam);
            menit = parseInt(menit);
            detik = parseInt(detik);

            detik++;

            if (detik === 60) {
                detik = 0;
                menit++;

                if (menit === 60) {
                    menit = 0;
                    jam++;

                    if (jam === 24) {
                        jam = 0;
                    }
                }
            }

            console.log(jam + ":" + menit + ":" + detik);

            rl.close();
        });
    });
});