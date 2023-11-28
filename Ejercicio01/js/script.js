const longitudArray = array => {
    console.log(array.length);
};

const elementoAleatorio = array => {
    let indiceAleatorio = Math.floor(Math.random() * array.length);
    console.log(array[indiceAleatorio]);
};

let array = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

longitudArray(array);
elementoAleatorio(array);
