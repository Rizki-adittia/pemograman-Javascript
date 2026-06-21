const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Masukkan nilai pixel: ", (input) => {

  let pixel = parseInt(input);

  if (pixel < 0) {
    pixel = 0;
  } else if (pixel > 255) {
    pixel = 255;
  }

  console.log("Nilai Pixel =", pixel);

  rl.close();
});