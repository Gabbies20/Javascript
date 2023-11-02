/**
 * RELLENAR MATRIZ:
 */

// Definir el tamaño de la matriz (por ejemplo, 3x3)
var filas = 3;
var columnas = 3;

// Crear una matriz vacía
var matriz = [];

// Rellenar la matriz con valores
for (var i = 0; i < filas; i++) {
    var fila = [];  // Crear una nueva fila
    for (var j = 0; j < columnas; j++) {
        // Asignar un valor a la celda (por ejemplo, i * j)
        fila.push(Math.floor(Math.random()*5));
        document.write(`${fila} <br>`)
    }
    // Agregar la fila a la matriz
    matriz.push(fila);
    document.write(`La primera fila de la matriz es: ${matriz} <br>`);
}

// Mostrar la matriz completa
document.write(`La matriz es: ${matriz} `);
