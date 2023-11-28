const dividirParesImpares = array => {
    let arrayPares = [];
    let arrayImpares = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            arrayPares.push(array[i]);
        } else {
            arrayImpares.push(array[i]);
        }
    }
    return [arrayPares, arrayImpares];
};

let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [arrayPares, arrayImpares] = dividirParesImpares(arrayNumeros);

console.log(arrayPares.concat(arrayImpares));
