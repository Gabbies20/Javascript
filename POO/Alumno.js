/**
 * Crear un clase Alumno con su nombre, DNI, ... (objeto Persona), curso y notas de cada módulo. Crear su constructor y un método para imprimir un Alumno, otro que devuelva la nota media y otro para obtener su mejor nota y el nombre del módulo con esa nota (puede tener la misma nota en varios módulos). 
 */

class Alumno extends Persona {
    constructor(nombre, apellidos, dni, fecha_nacimiento, curso, notas) {
        super(nombre, apellidos, dni, fecha_nacimiento)
        this.curso = curso;
        this.notas = notas;
    }

    imprimirAlumno() {
        document.write(`${this.imprimirDatos()}, sus notas son ${this.notas} y su curso es ${curso}.`);
        let notas = '';
        n.forEach(function (valor, clave) {
            notas += clave + '=' + valor + '<br>'
        })
    }

    notaMedia() {

    }

}