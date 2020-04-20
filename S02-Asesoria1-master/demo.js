// 1)¿Cuál es el código que se muestra a continuación?
alert( null || 2 || undefined );
// RPTA: 2

// 2) ¿Cuál es el resultado de las alertas?
alert( alert(1) || 2 || alert(3) );
// RPTA: 1, 2

// 3) ¿Qué va a mostrar este código?
alert( 1 && null && 2 );
// RPTA: null

// 4) ¿Cuál es el resultado de las alertas?
alert( alert(1) && alert(2) );
// RPTA: 1, indefinida

// 5) El resultado de OR AND OR
alert( null || 2 && 3 || 4 );
// RPTA: 3

// 6) Escriba una condición de "si" para verificar que la edad sea entre 14 y 90 inclusive.
// "Inclusive" significa que la edad puede alcanzar los bordes 14 o 90.
let edad=60;
if (edad>=14 && edad<=90) {
    console.log("edad permitida");
} else {
    console.log("edad no permitida");    
}

// 7) ¿Cuál de estas alertas se ejecutará? ¿Cuáles serán los resultados de las expresiones dentro si (...)?
if (-1 || 0) alert( 'first' );
//Se ejecuta. Se muestra first
// 
if (-1 && 0) alert( 'second' );
//No se ejecuta.

if (null || -1 && 1) alert( 'third' );
//Se ejecutará. Se muestra third