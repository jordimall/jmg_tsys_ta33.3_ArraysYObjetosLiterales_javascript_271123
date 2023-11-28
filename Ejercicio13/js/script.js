const mostrarReceta = receta => {
    console.log(`Nombre de la receta: ${receta.nombre}`);
    console.log(`Tiempo de preparación: ${receta.tiempoPreparacion}`);
    console.log("Ingredientes:");
    receta.ingredientes.map(ingrediente => {
        console.log(`- ${ingrediente}`);
    });
};

let receta = {
    nombre: "Tortilla de patatas",
    tiempoPreparacion: "30 minutos",
    ingredientes: [
        "4 patatas",
        "1 cebolla",
        "6 huevos",
        "Aceite de oliva",
        "Sal",
    ],
};

mostrarReceta(receta);
