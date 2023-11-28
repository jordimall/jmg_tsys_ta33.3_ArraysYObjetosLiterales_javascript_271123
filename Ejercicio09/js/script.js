let arrayCorredores = ["Carlos", "Ana", "Pedro", "Luis", "María"];

let [ganador, segundo, ...restoCorredores] = arrayCorredores;

console.log(`El ganador es: ${ganador}`);
console.log(`El segundo lugar es para: ${segundo}`);
console.log(`Los demás competidores son: ${restoCorredores}`);
