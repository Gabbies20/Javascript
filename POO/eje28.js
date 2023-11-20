/**
 * Crear un clase Alumno con su nombre, DNI, ... (objeto Persona), curso y notas de cada módulo. Crear su constructor y un método para imprimir un Alumno, otro que devuelva la nota media y otro para obtener su mejor nota y el nombre del módulo con esa nota (puede tener la misma nota en varios módulos). 
 */

var curso = '2DAW';

//var notas = 10;
/**
 * var claves = notas.keys();
var valores = notas.values();

for(let k of claves){
    console.log(k);
}

for(let v of valores){
    console.log(v);
}

console.log(notas);
 */

var n = new Map([['DWES',5],['DWEC',8],['DIW',10],['Empresa',6],['DAW',10]]);


var alumno = new Alumno('Manuel','Guerrero','12345678L','25/06/2001',curso,n);

// Llamar al método imprimirAlumno para ver la información del alumno
//alumno.imprimirAlumno();

// Llamar al método notaMedia y mostrar el resultado
//console.log(alumno.notaMedia());

// Llamar al método obtenerMejorNota y mostrar el resultado
console.log(alumno.obtenerMejorNota());