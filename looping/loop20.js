const prompt = require("prompt-sync")();

let angka = parseInt(prompt("Masukkan angka: "));

for(let i = 2; i <= angka; i++) {
    let prima = true;
    for(let j = 2; j < i; j++) {
        if(i % j === 0) {
            prima = false;
            break;
        }
    }

    if(prima){
        console.log(i);
    }
}