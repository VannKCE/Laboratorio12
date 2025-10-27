console.log("Ejercicio 06");
function  mayorDeTres(a, b, c) {
    if (a >= b && a >= c) return a;
    if (b >= a && b >= c) return b;
    return c;
}

console.log(mayorDeTres(4, 13, 24));
console.log(mayorDeTres(18, 3, 10));
console.log(mayorDeTres(9, 34, 22));