
var entrada = prompt('Ingrese su fecha de nacimiento: 2022-03-25');

var fecha = new Date(entrada);
var fechaHoy = new Date();

//Obtener los milisegundos:
var m = fecha.getTime();
var m2 = fechaHoy.getTime();

var total = m2 - m;
console.log(total)