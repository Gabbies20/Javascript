class Persona{
    constructor(nombre,apellido,dni,fecha_nac){
        this.nombre = nombre
        this.apellido = apellido
        this.dni = dni
        this.fecha_nac = new Date(fecha_nac)
    }
    
    getNombre(){
        return this.nombre
    }
    
    getApellido(){
        return this.apellido
    }
    
    getDNI(){
        return this.dni
    }
    
    getFecha_nac(){
        return this.fecha_nac
    }
}