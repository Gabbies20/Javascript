/**
 * Hacer el Tarot que comprueba que la fecha de nacimiento, introducida no es mayor que la actual.
 */

//La estructura de fecha es: yyyy-mm-dd .

var fechaEntrada = prompt('Ingrese la fecha de entrada (formato dd.mm.aaaa): ');
var hoy = new Date();

var s_fechaEntrada = fechaEntrada.split('.');
console.log(s_fechaEntrada);

// No puedes dividir un objeto Date, así que utiliza directamente el objeto Date
// Además, corrige el formato para la función split
var s_hoy = hoy.toLocaleDateString().split('/');
console.log(s_hoy);

console.log(fechaEntrada);
console.log(hoy);
