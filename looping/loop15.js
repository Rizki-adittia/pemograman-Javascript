for (let i = 1; i <= 5; i++) {
    let hasil = "";

    for (let j = 1; j <= 5 - i; j++) {
        hasil += " ";
    }

    for (let k = 1; k <= i; k++) {
        hasil += "* ";
    }

    console.log(hasil);
}