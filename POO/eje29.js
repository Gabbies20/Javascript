/**
 * Crear un objeto Aula que contenga los alumnos de un aula y tenga los siguientes métodos:
buscar un alumno del aula por DNI.
ordenar por nota para un alumno en particular
ordenar el array de alumnos por apellido
imprimir los alumnos de un aula.
*/
var alumnos = [];

var alumno1 = new Alumno('Manuel','Guerrero','12345678A', '01/01/2000', '2DAW', new Map([['DWES', 3], ['DWEC', 7]]));

var alumno2 = new Alumno('Luis','Guerrero','97345678A', '01/01/2000', '1DAW', new Map([['DWES', 6], ['DWEC', 5]]));

alumnos.push(alumno1,alumno2);
//console.log(alumnos);

var aula = new Aula(alumnos);
document.write(aula.buscarDni('97345678A').toString());


//Obtener mejor nota del alumno1:
document.write('<br>'+aula.ordenarNota(alumno2));