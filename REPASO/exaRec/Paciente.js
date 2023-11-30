class Paciente extends Persona{
    constructor(nombre,apellido,dni,n_afiliacion){
        super(nombre,apellido,dni)
        this.n_afiliacion = n_afiliacion;
    }
}