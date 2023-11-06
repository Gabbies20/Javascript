
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
var edad = calcularEdad('2000-01-01');
console.log(edad);