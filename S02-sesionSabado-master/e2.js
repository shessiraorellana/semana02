// Ejercicio #2: Escriba una función recursiva de JavaScript 
// que determine si un número es par o impar
let arrayNumero = [1,2,3,4];
function retornarParImpar(array) {
    if (array.length <= 0) {
        return;
    }
    if (array[0]%2==0) {
        console.log(`Este es un numero par: ${array[0]}`);
    }else{
        console.log(`Este es un numero impar: ${array[0]}`);
    }
    array.shift()
    retornarParImpar(array);
}
retornarParImpar(arrayNumero);