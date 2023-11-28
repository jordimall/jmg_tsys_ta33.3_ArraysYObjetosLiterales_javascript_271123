import {Receta} from './Receta.js';

const mostrarRecetas = array => {
    array.map(receta => {
        console.log(`Nombre de la receta: ${receta.nombre}`);
        console.log(`Tiempo de preparación: ${receta.tiempoPreparacion}`);
        console.log("Ingredientes:");
        receta.ingredientes.map(ingrediente => {
            console.log(`- ${ingrediente}`);
        });
        console.log("\n");
    });
};

let arrayRecetas = [
    new Receta("Tortilla de patatas", "30 minutos", [
        "4 patatas",
        "1 cebolla",
        "6 huevos",
        "Aceite de oliva",
        "Sal",
    ]),
    new Receta("Paella valenciana", "90 minutos", [
        "Arroz",
        "Pollo",
        "Conejo",
        "Judía verde",
        "Garrofó",
        "Aceite de oliva",
        "Agua",
        "Sal",
        "Azafrán",
    ]),
    new Receta("Gazpacho andaluz", "15 minutos", [
        "1 kg de tomates",
        "1 pepino",
        "1 pimiento verde",
        "2 dientes de ajo",
        "50 g de pan duro",
        "Aceite de oliva",
        "Vinagre",
        "Sal",
        "Agua",
    ]),
];

mostrarRecetas(arrayRecetas);
