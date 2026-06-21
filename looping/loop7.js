let total = 0;
let output = "";

for(let i = 1; i <= 5; i += 2) {
    output += i;

    if(i < 5) {
        output += " + ";
    }

    total += i;
}

console.log(output + " = " + total);