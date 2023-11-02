/**
 * Hacer un programa en el que el usuario que introduzca, nombre, apellidos, DNI y fecha de nacimiento separado por comas. Esta entrada de datos se repetirá hasta que el usuario introduzca la cadena vacía. El programa debe guardar los datos en un array bidimensional.
 */
var entrada = prompt('Ingrese su nombre, apellidos, DNI y fecha de nacimiento. \n Separado todo con ",".');

var fila = [];

while(entrada !== ''){

    var datosUsuario= entrada.split(',');
    fila.push(datosUsuario);

    entrada = prompt('Ingrese su nombre, apellidos, DNI y fecha de nacimiento. \n Separado todo con ",".');

    
}
console.log(fila);