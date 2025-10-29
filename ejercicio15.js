console.log("Ejercicio 15");
const crearContador = (inicial = 0) => {
    let contador = inicial;

    return {
        incrementar: () => ++contador,
        resetear: () => (contador = inicial)
    };
};
const miContador = crearContador(0);
console.log(miContador.incrementar());
console.log(miContador.incrementar());
console.log(miContador.resetear());

