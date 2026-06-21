let total = 0;
let angka = "";

for(let i = 1; i <= 5; i++) {

   angka += i;

    if(i < 5) {
        angka += " + ";
    }

    total += i;
}

console.log(angka + " = " + total);