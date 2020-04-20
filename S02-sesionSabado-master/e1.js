// Ejercicio #1: Escriba una función de JavaScript que acepte una cadena como parámetro 
// y encuentre la palabra más larga dentro de la cadena

function retornarMayorPalabra(cadenaInicial) {
    let miArrayPalabra = cadenaInicial.split(" ");
    let palabraMayor = miArrayPalabra[0];
    let contMayor = palabraMayor.length;

    // console.log(cadenaInicial.length);
    for (const miPalabra of miArrayPalabra) {
        if (miPalabra.length>contMayor) {
            palabraMayor = miPalabra;
            contMayor = miPalabra.length;
        }
    }
    console.log(`La palabra más larga es ${palabraMayor} y tiene ${contMayor} caracteres.`)
}
retornarMayorPalabra("mi nombre largo Shessira");
