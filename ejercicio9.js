console.log("Ejercicio 09");
const calcularDescuento = function(precio, porcentaje){
    let descuento = (precio * porcentaje) / 100;
    let precioFinal = precio - descuento;
    return precioFinal;
}

console.log(calcularDescuento(180, 20));

