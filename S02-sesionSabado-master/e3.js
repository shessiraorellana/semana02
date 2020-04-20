// Ejercicio #3: Escriba una función de JavaScript que acepte una cadena como parámetro 
// y encuentre la palabra más corta dentro de la cadena
function retornarMenorPalabra(cadenaInicial) {
    let miArrayPalabra = cadenaInicial.split(" ");
    let palabraMenor = miArrayPalabra[0];
    let contMenor = palabraMenor.length;

    for (const miPalabra of miArrayPalabra) {
        if (miPalabra.length>contMenor) {
            palabraMenor = miPalabra;
            contMenor = miPalabra.length;
        }
    }
    console.log(`La palabra más corta es ${palabraMenor} y tiene ${contMenor} caracteres.`)
}
retornarMenorPalabra("mi nombre corto Cinthya");
