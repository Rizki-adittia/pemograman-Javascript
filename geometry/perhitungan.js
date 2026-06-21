function luasPersegi(sisi) {
    return sisi * sisi;
}

function kelilingPersegi(sisi) {
    return 4 * sisi;
}

function luasLingkaran(jariJari) {
    return Math.PI * jariJari * jariJari;
}

function kelilingLingkaran(jariJari) {
    return 2 * Math.PI * jariJari;
}

function luasSegitiga(alas, tinggi) {
    return 0.5 * alas * tinggi;
}

console.log("Luas Persegi:", luasPersegi(5));
console.log("Keliling Persegi:", kelilingPersegi(5));

console.log("Luas Lingkaran:", luasLingkaran(7).toFixed(2));
console.log("Keliling Lingkaran:", kelilingLingkaran(7).toFixed(2));

console.log("Luas Segitiga:", luasSegitiga(10, 8));