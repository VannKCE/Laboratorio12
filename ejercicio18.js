console.log("Ejercicio 18")
function media(...numeros) {
    let sum = 0
    for(let n of numeros) {
        sum += n
    }
    return sum/numeros.length;
}

console.log(media(23, 45, 28, 23))