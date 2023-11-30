class Medico extends Persona{
    constructor(nombre,apellido,dni,n_facultativo){
        super(nombre,apellido,dni)
        this.n_afiliacion = n_facultativo;
    }
}