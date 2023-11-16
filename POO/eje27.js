/**
 * Implementar funciones para el ejercicio anterior para imprimir los datos y para buscar una persona por apellidos, por DNI o por edad. ¿cómo podríamos optimizar la búsqueda? 
 */


var p1 = new Persona('Gabriela','Pinzón','77978285M','23/02/1994');
console.log(p1.imprimirDatos());

var p2 = new Persona('Roberto','M','12345678N','25/09/1994');
var p3 = new Persona('Juan','S','98745612K','01/01/2000');
var p4 = new Persona('Marina','V','12345678P','02/02/2002');

var personas = [p1,p2,p3,p4];
console.log(personas);

buscarApellido(apellido){
    var resultado = personas.find((e)=> e.apellidos === apellido);
    return resultado;
}


