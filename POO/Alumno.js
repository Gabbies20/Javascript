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
        let notas = '';
        this.notas.forEach(function (valor, clave) {
            notas += clave + '=' + valor + '<br>'
        })
        document.write(`${this.imprimirDatos()}, su curso es ${this.curso} y sus notas son: ${notas}.`);
        
    }

    notaMedia() {

        let suma = 0;
        let divisor = 0;
        this.notas.forEach(function(nota){
            suma+= nota;
            divisor++;
        })

        /**
         * if (count === 0) {
            return 0; // Evitar división por cero
        }
         */

        return `La nota media del alumno es ${suma/divisor}`
    }
    
    obtenerMejorNota() {
        let mejorNota = 0;
        let nombreA = '';

        let lista = [...this.notas.values()];
        console.log(`La lista es: ${lista}`);

        let l = Math.max(...lista);

        let resultado = [...this.notas].filter(function (k){
            if(k[1] >= l){
                lista = k[1];
                nombreA = k[0];
                return k;
            }
            
        });
        
        return resultado;
    }

    

}

    /**
     * obtenerMejorNota() {
        let mejorNota = 0;
        let mejorModulo = '';

        let lista = [...this.notas.values()];

        lista.filter(function (valor, clave) {
            if (valor >= mejorNota) {
                mejorNota = valor;
                mejorModulo = clave;
            }
        });

        return {mejorNota,mejorModulo};
    }
     */