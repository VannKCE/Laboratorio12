console.log("Ejercicio 19")
const mostrarDatos = (nombre, edad, ...hobbies) => {
    console.log(`Nombre: ${nombre}`);
    console.log(`Edad: ${edad}`);
    console.log(`Hobbies: ${hobbies}`);
};

mostrarDatos("Vann", 18, "Leer", "Escribir", "Programar");
