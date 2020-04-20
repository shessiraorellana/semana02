// 1) Escriba una iteracion o bucle que iterará de 0 a 20, para iteración verificar si el numero actual es par o impar e imprimir en consola por ejemplo ("4 es par")

// 2) Escriba una iteracion o bucle que iterará de 0 a 10, para cada iteración del bucle multiplicar el numero por 9 y imprimir en consola el resultado (por ejemplo: "2 * 9 = 18").

// bonus: (Tabla de multiplicar)Utilice un bucle anidado para mostrar las tablas para cada multiplicador de 1 a 10 (100 es el resultado total)

let multiplicador = 9;

for (var i = 0; i <= 10; i++) {
  var result = multiplicador * i;
  console.log(`${multiplicador * i} = ${result}`);
}
