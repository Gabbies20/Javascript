/**
 * Hacer un programa en el que el usuario que introduzca, nombre, apellidos, DNI y fecha de nacimiento separado por comas. Esta entrada de datos se repetirá hasta que el usuario introduzca la cadena vacía. El programa debe guardar los datos en un array bidimensional.
 */


function obtenerDatos() {
    var array = [];

    var entrada = prompt('Ingrese su nombre, apellidos, DNI y fecha de nacimiento. \n Separado todo con ",".');

    while (entrada !== '') {

        var datosUsuario = entrada.split(',');
        array.push(datosUsuario);

        entrada = prompt('Ingrese su nombre, apellidos, DNI y fecha de nacimiento. \n Separado todo con ",".');
    }
    return array;
}
