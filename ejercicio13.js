console.log("Ejercicio 13");
function procesarTexto(texto) {
    function limpiarEspacios(str) {
        return str.trim().replace(/\s+/g, " ");
    }

    function contarPalabras(str) {
        if (str === "") return 0;
        return str.split(" ").length;
    }

    const textoLimpio = limpiarEspacios(texto);
    const cantidadPalabras = contarPalabras(textoLimpio);

    console.log("Texto limpio:", textoLimpio);
    console.log("Cantidad de palabras:", cantidadPalabras);
}

procesarTexto("Hola   mundo desde    JavaScript.");

