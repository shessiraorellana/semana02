// Ejercicio #0: Escriba una función de JavaScript que acepte una cadena como parámetro 
// y convierta la primera letra de cada palabra de la cadena en mayúsculas
let cadenaFinal = "";
function retornarInicioMayuscula(cadenaInicial) {
    let arrayPalabra = cadenaInicial.split(' ');
    arrayPalabra.map((valor, index)=>{
        cadenaFinal = cadenaFinal + primeraMayus(valor) + " ";
    })
    console.log(cadenaFinal);
}
function primeraMayus(laCadena) 
{
    return laCadena.charAt(0).toUpperCase() + laCadena.slice(1);
}
retornarInicioMayuscula("mi nombre es siempre en minuscula.");


