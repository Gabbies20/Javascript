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

var lista = obtenerDatos();

/**
 * Implementar funciones para el ejercicio anterior para imprimir los datos y para buscar una persona por apellidos, por DNI o por edad. ¿cómo podríamos optimizar la búsqueda?
 */
 /* function buscarPorApellidos(apellido) {
    var resultados = [];

    for (var i = 0; i < array.length; i++) {
        if (array[i].length >= 2 && array[i][1] === apellido) {
            resultados.push(array[i]);
        }
    }

    return resultados;
}
 */

//FUNCION DE BUSCAR APELLIDO:
function buscarApellido(array,apellido){
    var resultado = array.find(function(elemento){
        return elemento.length >=2 && elemento[1] === apellido;
    });

    return resultado;
}
var apellidoABuscar = prompt('Ingrese los apellidos que desea buscar:');
var resultadosBusqueda = buscarApellido(lista,apellidoABuscar);

if (resultadosBusqueda) {
    console.log('El apellido que busca pertenece al usuario:');
    console.log(resultadosBusqueda);
} else {
    console.log('No existe ningún usuario con ese apellido.');
}

//FUNCION DE BUSCAR DNI:
function buscarDni(array,dni){
    var resultado = array.find(function(elemento){
        return elemento.length >=2 && elemento[2] === dni;
    });

    return resultado;
}
var dniABuscar = prompt('Ingrese el dni que desea buscar:');
var resultadoDni = buscarDni(lista,dniABuscar);

if (resultadoDni) {
    console.log('El dni que busca pertenece al usuario:');
    console.log(resultadoDni);
} else {
    console.log('No existe ningún usuario con ese dni.');
}




/**
 * 
 * var array = [];

function obtenerDatos() {
    var entrada = prompt('Ingrese su nombre, apellidos, DNI y fecha de nacimiento. \n Separado todo con ",".');

    while (entrada !== '') {
        var datosUsuario = entrada.split(',');
        array.push(datosUsuario);
        entrada = prompt('Ingrese su nombre, apellidos, DNI y fecha de nacimiento. \n Separado todo con ",".');
    }
    console.log(array);
}

function menuDatos() {
    var opcion = prompt('Elija la opcion: ');

    switch (opcion) {
        case '1':
            var dniABuscar = prompt('Ingrese el DNI que desea buscar:');
            var resultadoDni = buscarDni(dniABuscar);
            
            if (resultadoDni) {
                console.log('El DNI que busca pertenece al usuario:');
                console.log(resultadoDni);
            } else {
                console.log('No existe ningún usuario con ese DNI.');
            }
            break;

        default:
            break;
    }
}

function buscarDni(dni) {
    var resultado = array.find(function(elemento) {
        return elemento.length >= 2 && elemento[2] === dni;
    });

    return resultado;
}

obtenerDatos();
menuDatos();

 */