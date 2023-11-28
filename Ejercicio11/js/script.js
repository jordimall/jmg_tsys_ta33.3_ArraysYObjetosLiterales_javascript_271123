const recuperarNombreCompleto = persona => {
    console.log(`${persona.nombre} ${persona.apellidos}`);
};

let persona = {
    nombre: "Juan",
    apellidos: "Pérez García",
    edad: 30,
    direccion: "Calle Falsa 123",
    ciudad: "Madrid",
    pais: "España",
};

let {nombre, ciudad, direccion} = persona;

console.log(`${nombre} vive en la ciudad de ${ciudad} en la siguiente dirección: ${direccion}`);
