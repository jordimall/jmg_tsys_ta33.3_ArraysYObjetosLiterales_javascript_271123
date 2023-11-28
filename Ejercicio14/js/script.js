const mostrarReceta = array => {
    array.map(receta => {
        console.log(`Nombre de la receta: ${receta.nombre}`);
        console.log(`Tiempo de preparación: ${receta.tiempoPreparacion}`);
        console.log("Ingredientes:");
        receta.ingredientes.map(ingrediente => {
            console.log(`- ${ingrediente}`);
        });
        console.log('\n');
    });
};

let arrayRecetas = [
    {
        nombre: "Tortilla de patatas",
        tiempoPreparacion: "30 minutos",
        ingredientes: [
            "4 patatas",
            "1 cebolla",
            "6 huevos",
            "Aceite de oliva",
            "Sal",
        ],
    },
    {
        nombre: "Paella valenciana",
        tiempoPreparacion: "90 minutos",
        ingredientes: [
            "Arroz",
            "Pollo",
            "Conejo",
            "Judía verde",
            "Garrofó",
            "Aceite de oliva",
            "Agua",
            "Sal",
            "Azafrán",
        ],
    },
    {
        nombre: "Gazpacho andaluz",
        tiempoPreparacion: "15 minutos",
        ingredientes: [
            "1 kg de tomates",
            "1 pepino",
            "1 pimiento verde",
            "2 dientes de ajo",
            "50 g de pan duro",
            "Aceite de oliva",
            "Vinagre",
            "Sal",
            "Agua",
        ],
    },
];

mostrarReceta(arrayRecetas);
