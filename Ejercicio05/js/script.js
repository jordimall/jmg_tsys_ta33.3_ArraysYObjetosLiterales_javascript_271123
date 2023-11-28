const intercalarArrays = (array1, array2) => {
    let arrayResultante = [];
    for (let i = 0; i < array1.length; i++) {
        arrayResultante.push(array1[i], array2[i]);
    }

    array1.length = 0;
    array2.length = 0;
    return arrayResultante;
};

let arrayUno = [1, 2, 3];
let arrayDos = [4, 5, 6];
let arrayInterleaved = intercalarArrays(arrayUno, arrayDos);

console.log(arrayInterleaved);
console.log(arrayUno);
console.log(arrayDos);
