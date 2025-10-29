console.log("Ejercicio 16");
const acumulador = (valorInicial = 0) => {
    let total = valorInicial;
    return (nuevoValor) => total += nuevoValor;
};

const acumular = acumulador(10);
console.log(acumular(5));
console.log(acumular(3));
