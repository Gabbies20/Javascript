class Aula{
    constructor(alumnos){
        this.alumnos = alumnos;
    }

    buscarDni(dni){
        var resultado = this.alumnos.find((al)=>al.dni===dni);
        return {
            toString: () => resultado ? `Nombre: ${resultado.nombre}, DNI: ${resultado.dni}` : 'Alumno no encontrado'
        };


        /**
         * return {
            toString: () => resultado ? `Nombre: ${resultado.nombre}, DNI: ${resultado.dni}` : 'Alumno no encontrado'
        };
         */

    }
    ordenarNota(alumno){
        var resultado = [...alumno.notas.values()];
        return resultado.sort()
    }
}

/**
 * 
 * 
 * TOSTRING():
 * En JavaScript, toString es un método que se llama automáticamente cuando se intenta representar un objeto como una cadena. Cuando haces algo como console.log(objeto), internamente se llama a objeto.toString() para obtener una representación en cadena del objeto.
 * 
 * 
 * 
 * En tu caso, return { toString: () => ' códIGO' };
 está creando un objeto *con una propiedad llamada toString, y el valor de esa propiedad es una función *de flecha. El código dentro de la función de flecha define el comportamiento del *método toString. Es decir, cada vez que se llama a toString en el objeto *retornado, se ejecuta el código dentro de la función de flecha.
 const objeto = {
    valor: 42,
    toString: function() {
        return `El valor es: ${this.valor}`;
    }
};

console.log(objeto.toString());  // Imprime: "El valor es: 42"

 *
 */
































/**
 * class Aula {
    constructor() {
        this.alumnos = [];
    }

    agregarAlumno(alumno) {
        this.alumnos.push(alumno);
    }

    buscarAlumnoPorDNI(dni) {
        return this.alumnos.find(alumno => alumno.dni === dni);
    }

    ordenarPorNota(dni) {
        const alumno = this.buscarAlumnoPorDNI(dni);

        if (alumno) {
            alumno.notas = Array.from(alumno.notas).sort((a, b) => b[1] - a[1]);
        } else {
            console.log('Alumno no encontrado');
        }
    }

    ordenarPorApellido() {
        this.alumnos.sort((a, b) => a.apellidos.localeCompare(b.apellidos));
    }

    imprimirAula() {
        this.alumnos.forEach(alumno => {
            alumno.imprimirAlumno();
            console.log('\n'); // Salto de línea entre alumnos
        });
    }
}

// Ejemplo de uso:
var aula = new Aula();

// Agregar algunos alumnos al aula
var alumno1 = new Alumno('Juan', 'Pérez', '12345678A', '01/01/2000', '2DAW', new Map([['DWES', 8], ['DWEC', 7]]));
var alumno2 = new Alumno('María', 'Gómez', '87654321B', '02/02/2001', '2DAW', new Map([['DWES', 9], ['DWEC', 6]]));

aula.agregarAlumno(alumno1);
aula.agregarAlumno(alumno2);

// Buscar un alumno por DNI
var alumnoEncontrado = aula.buscarAlumnoPorDNI('12345678A');
console.log('Alumno encontrado:', alumnoEncontrado);

// Ordenar las notas de un alumno por nota
aula.ordenarPorNota('12345678A');
console.log('Notas ordenadas:', alumno1.notas);

// Ordenar el array de alumnos por apellido
aula.ordenarPorApellido();

// Imprimir los alumnos del aula
aula.imprimirAula();

 */