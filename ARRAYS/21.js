/**
 * Añade al ejercicio anterior las siguientes funciones, utiliza además las funciones creadas anteriormente (utiliza los métodos ya implementados de Array y funciones flecha):
mayorEdad: filtrará del array los usuarios mayores de edad e imprimirá sus datos en una nueva ventana.
menorEdad: filtrará del array los usuarios menores de edad e imprimirá en una nueva ventana los días y/o años que le quedan para su mayoría de edad.
modificaDatos: solicitará qué datos modificar, el dato por el que se va a modificar y el dni del usuario.
eliminaUsuario: elimina un usuario del array solicitando su dni. Además solicita confirmación antes de eliminar. 
 */

var matriz = obtenerDatos();
console.log(matriz)

function calcularEdad(edad) {

    var fecha = new Date(edad);
    var fechaHoy = new Date();

    //Obtener los milisegundos:
    var m = fecha.getTime();
    var m2 = fechaHoy.getTime();

    var total = m2 - m;

    //Calcular los años:
    var milisegundos = 24 * 60 * 60 * 1000;
    var year = Math.floor((total / milisegundos) / 365);
    return year;
}
var edad = calcularEdad(matriz,edad);
console.log(edad);