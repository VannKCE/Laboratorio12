console.log("Ejercicio 20")
function ejecutarOperacion(fn, x, y) {
    return fn(x,y);
}

function multiplicacion(x, y) {
    return x*y;
}

console.log(ejecutarOperacion(multiplicacion, 6, 10));
