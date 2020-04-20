// 1) Escriba una iteracion o bucle que iterará de 0 a 20, 
// para iteración verificar si el numero actual es par o impar e imprimir en consola 
// por ejemplo ("4 es par")
let nro = 0
while (nro < 21) {
    if (nro%2 === 0) {
        console.log(`El número ${nro} es par.`);
    } else {
        console.log(`El número ${nro} es impar.`);        
    }
    nro++;
}

// 2) Escriba una iteracion o bucle que iterará de 0 a 10, 
// para cada iteración del bucle multiplicar el numero por 9 y 
// imprimir en consola el resultado (por ejemplo: "2 * 9 = 18").
let factor = 9;
let nro = 0;

do {
    console.log(`El resultado de: ${nro} * ${factor} = ${nro*factor}`);
    nro++;
} while (nro<11);

// bonus: (Tabla de multiplicar)Utilice un bucle anidado 
// para mostrar las tablas para cada multiplicador de 1 a 10 (100 es el resultado total)

for (let x = 1; x <= 10; x++) {
    console.log(`La tabla de multiplicar del ${x}`);
    for (let y = 0; y <= 10; y++) {
        console.log (`${x} * ${y} = ${x * y}`);
    }
}
