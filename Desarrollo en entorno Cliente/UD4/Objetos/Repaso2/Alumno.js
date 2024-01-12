class Alumno extends Persona{
    constructor(nombre,apellido,dni,fecha_nac,curso,notas){
        super(nombre,apellido,dni,fecha_nac)
        this.curso = curso
        this.notas = notas
    }

    getCurso(){
        return this.curso
    }

    getNotas(){
        return this.notas
    }


    imprimirAlumno(){
        var arrNotas = [...this.notas]
        return this.getNombre() + " " +  this.getApellido() + " " + this.getDNI() + " " + this.getFecha_nac() 
        + " " + this.getCurso() + " " + arrNotas
    }


    mediaNotas(){
        var arrNotas = [...this.notas.values()]
        return arrNotas.reduce((total, nota) => total + nota) / arrNotas.length
    }

    mejorNota(){
        var arrNotas = [...this.notas.values()].sort((a,b) => b - a)
        return [...this.notas].filter(nota => nota[1] == arrNotas[0])
    }

    mostrarAños(){
        var hoy = new Date().getFullYear()
        var fecha_alumno = this.fecha_nac.getFullYear()
    
        return hoy - fecha_alumno
    }

    getEdadDias(){
        var miliPorMinuto = 1000 * 60
        var miliPorHora = miliPorMinuto * 60
        var miliPorDia = miliPorHora * 24 

        var hoy = new Date()
        var usuarioFecha = new Date(this.fecha_nac)
        var edad = hoy - usuarioFecha

        return Math.floor(edad / miliPorDia) 
    }

}