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

var n = new Map([['DWES',5],['DWEC',8],['DIW',7],['Empresa',6],['DAW',10]]);

let notas = '';
n.forEach(function(valor,clave){
    notas += clave + '=' + valor +'<br>'
})



var o_alumno = new Alumno('Manuel','Guerrero','12345678L','25/06/2001',notas);
console.log(o_alumno.imprimirAlumno());