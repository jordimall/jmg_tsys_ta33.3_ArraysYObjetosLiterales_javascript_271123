const numerosMayoresQueCinco = array => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 5) {
            console.log(array[i]);
        }
    }
};

let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numerosMayoresQueCinco(arrayNumeros);
