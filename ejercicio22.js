console.log("Ejercicio 22");
function descargarArchivo(url, callback) {
    console.log("Descargando...");

    setTimeout(() => {
        const mensaje = `Descarga completa de ${url}`;
        callback(mensaje);
    }, 2000);
}

descargarArchivo("archivo.zip", (mensaje) => {
    console.log(mensaje);
});

