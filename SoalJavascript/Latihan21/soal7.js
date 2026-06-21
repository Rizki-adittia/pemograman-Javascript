const prompt = require("prompt-sync")();

let a = 8.3;
let c = "3.2";

console.log(a + " + " + c + " = " + (a + parseFloat(c)));
console.log(a + " - " + c + " = " + (a - parseFloat(c)));
console.log(a + " x " + c + " = " + (a * parseFloat(c)));
console.log(a + " / " + c + " = " + (a / parseFloat(c)));

console.log(parseInt(a) + " % " + parseInt(c) + " = " + (parseInt(a) % parseInt(c)));