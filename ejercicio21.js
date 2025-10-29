console.log("Ejercicio 21")
function filtrarArreglo(arr, callback) {
    for (let elemento of arr) {
        if (callback(elemento)) {
            console.log(elemento);
        }
    }
}

filtrarArreglo([1, 2, 3, 4, 5], n => n > 2);