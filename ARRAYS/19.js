/**
 * Hacer un programa en el que el usuario que introduzca, nombre, apellidos, DNI y fecha de nacimiento separado por comas. Esta entrada de datos se repetirá hasta que el usuario introduzca la cadena vacía. El programa debe guardar los datos en un array bidimensional.
 */
var array = [];
var array1 = [];

function obtenerDatos() {

    var datos = prompt('Ingrese su nombre, apellidos,DNI y fecha de nacimiento. \n (Separados por ",").');


    if (datos != '') {
        array.push(datos.split(','));
        obtenerDatos();
    } //else {
        //mostrarDatos();
    //}

    console.log(array);
}

//function mostrarDatos(){
  //  return array;
//}

obtenerDatos();

