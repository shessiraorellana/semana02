/*
    Si hay sandia en el mercado mostrar en pantalla la cantidad de sandia que hay disponible
*/

let stockSandía = Math.floor(Math.random() * 10);
switch (stockSandía) {
    case 0:
        console.log("No hay stock suficiente para la Sandía");
        break;
    default:
        console.log(`La cantidad disponible de Sandía es ${stockSandía}`);
        break;
}

/*
    Tengo 100 soles en la billetera quiero comprar (20 20 10 50)
    un pantalon que cuesta 15, retornar el monto del vuelto y mostrarlo en pantalla.
    Si el monto es mayor a 20 indicar que no tienes cambio(sencillo)
    Si no retornar el monto del cambio
*/
let totalBilletera = 17;
let precioPantalon = 15;
let mensajeVuelto = "";
mensajeVuelto = totalBilletera >= 20 ? `El sistema no tiene cambio para $${totalBilletera}.`: `Su vuelto es $${totalBilletera-precioPantalon}`;
console.log(mensajeVuelto);