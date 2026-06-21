let huruf = ["a", "b", "c", "d", "e"];

for(let i = 0; i < huruf.length; i++) {
    let baris = "";

    for(let j = 1; j <= 5; j++) {
        baris += huruf[i] + " ";
    }

    console.log(baris);
}