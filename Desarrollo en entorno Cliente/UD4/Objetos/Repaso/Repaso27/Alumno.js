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

        var arrNotas = [...this.getNotas()]
        console.log(arrNotas)

        return this.getNombre() + " " +  this.getApellido() + " " + this.getDNI() + " " + this.getFecha_nac() 
                + " " + this.getCurso() + " " + arrNotas
    }


    notaMedia(){
        var notas = [...this.getNotas().values()]
        var media = notas.reduce((total,nota) => total + nota) / notas.length
        console.log(media) 
    }


    mejorNota(){
        var notas = [...this.getNotas().values()]
        notas = notas.sort((a,b) => b - a)
        var notasModulos = [...this.getNotas()]

        return notasModulos.filter(nota => nota[1] == notas[0])
    }


    getAños(){
       var hoy = new Date().getFullYear()
       return hoy - this.fecha_nac.getFullYear()
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
