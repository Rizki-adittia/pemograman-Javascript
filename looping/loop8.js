let total = 0;
let output = "";

for(let i = 2; i <= 10; i += 2) {
    output += i;

    if(i < 10) {
        output += " + ";
    }

    total += i;
}

console.log(output + " = " + total);