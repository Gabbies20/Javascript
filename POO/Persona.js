

class Persona{
    constructor(nombre,apellidos,dni,fecha_nacimiento){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dni = dni;
        this.fecha_nacimiento = fecha_nacimiento;
    }

    get(){
        return this.nombre;
    }

    imprimirDatos(){
        document.write(`Los datos de la persona ${this.nombre} ${this.apellidos} son: DNI ${this.dni} y fecha de nacimiento ${this.fecha_nacimiento}`);
    }
}