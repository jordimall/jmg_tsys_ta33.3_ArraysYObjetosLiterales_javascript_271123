let javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];

let indiceDOM = javascript1.indexOf("DOM");
if (indiceDOM !== -1) {
    javascript1.splice(indiceDOM, 1, "Objetos");
}

let indiceArrays = javascript1.indexOf("Arrays");
if (indiceArrays !== -1) {
    javascript1.splice(indiceArrays, 1, "ArraysDifíciles");
}

let copiaArray = javascript1.slice(-2);

let indiceFunciones = javascript1.indexOf("Funciones");

console.log(javascript1);
console.log(copiaArray);
console.log(indiceFunciones);
