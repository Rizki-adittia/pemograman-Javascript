function hitungPersegiPanjang(panjang, lebar) {
    return {
        luas: panjang * lebar,
        keliling: 2 * (panjang + lebar)
    };
}

let hasil = hitungPersegiPanjang(12, 8);

console.log("Luas =", hasil.luas);
console.log("Keliling =", hasil.keliling);