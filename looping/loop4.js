let total = 0;
let angka = "";

for(let i = 1; i <= 5; i++) {

    total += i;

    if(i < 5) {
        angka += i + " ";
    } else {
        angka += i;
    }
}
console.log(angka + " = " + total)