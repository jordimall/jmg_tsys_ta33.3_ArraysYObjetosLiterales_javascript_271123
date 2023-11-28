const recuperarEdad = array => {
    array.map(persona => {
        console.log(persona.edad);
    });
};

let arrayPersonas = [
    {
        nombre: "Juan",
        apellidos: "Pérez García",
        edad: 30,
        direccion: "Calle Falsa 123",
        ciudad: "Madrid",
        pais: "España",
    },
    {
        nombre: "Marta",
        apellidos: "Gallardo Jurio",
        edad: 18,
        direccion: "Calle Incorrecta 456",
        ciudad: "Zaragoza",
        pais: "España",
    },
    {
        nombre: "Maria",
        apellidos: "Castells Viñuales",
        edad: 25,
        direccion: "Calle Sospechosa 789",
        ciudad: "Barcelona",
        pais: "España",
    },
];

recuperarEdad(arrayPersonas);
