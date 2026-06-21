let alas = 6;
let tinggiSegitiga = 8;
let sisi1 = 6;
let sisi2 = 8;
let sisi3 = 10;
let tinggiPrisma = 12;

let luasAlas = 0.5 * alas * tinggiSegitiga;

let kelilingAlas = sisi1 + sisi2 + sisi3;

let volume = luasAlas * tinggiPrisma;

let luasPermukaan = (2 * luasAlas) + (kelilingAlas * tinggiPrisma);

console.log("Volume Prisma Segitiga:", volume);
console.log("Luas Permukaan:", luasPermukaan);