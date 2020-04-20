// Ejercicio #5: Escriba una función de JavaScript para imprimir 
// un número entero con comas como miles de separadoresoDatos de prueba:
// console.log (miles_separador (1000));"1,000"
// console.log (miles_separador (10000.23));"10,000.23"
// console.log (miles_separador (100000));"100,000"

function miles_separador(numero){
    // let array =  numero.toString().split(".");
    console.log(numero.toLocaleString());
}
miles_separador(4000.01);