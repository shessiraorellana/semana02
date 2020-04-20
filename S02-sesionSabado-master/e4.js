// Ejercicio #4: Escriba una función de JavaScript 
// para contar el número de vocales en una cadena dada
let arrayVocales = ['a','e','i','o','u'];
let cadena = "aaaaamurcielago ";
let cantidadVocales = 0;

function retonarCantidadVocales(oracion) {
    let arrayLetra = oracion.split('');
    for (const item of arrayLetra) {
        cuentaVocal(item);
    }
    console.log(`La cantidad de vocales es: ${cantidadVocales}`);
}

function cuentaVocal(miLetra) {
    for (const vocal of arrayVocales) {
        if (miLetra == vocal) {
            cantidadVocales ++;
        }
    }
}
retonarCantidadVocales(cadena);
