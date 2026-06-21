function hitungPersegi(sisi) {
    return {
        luas: sisi * sisi,
        keliling: 4 * sisi
    };
}

let hasil = hitungPersegi(8);

console.log("Luas =", hasil.luas);
console.log("Keliling =", hasil.keliling);