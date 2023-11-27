/**
 * Implementar el ejercicio 20 y 21(sólo imprimir los datos), usando objetos. (P.e. clase Persona) 
 */

class Persona{
    constructor(nombre,apellidos,dni,fecha_nacimiento){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dni = dni;
        this.fecha_nacimiento = fecha_nacimiento;
    }


    imprimirDatos(){
        return document.write(`---DATOS--- <br>
        Nombre: ${this.nombre} <br>
        Apellidos: ${this.apellidos} <br>
        DNI: ${this.dni} <br>
        Fecha de nacimiento: ${this.fecha_nacimiento}`);
    }
}