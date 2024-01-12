class Alumno extends Persona{
    constructor(nombre,apellido,dni,fecha_nac,curso,notas_curso){
        super(nombre,apellido,dni,fecha_nac)

        this.curso = curso
        this.notas_curso = notas_curso
    }


    datosNotas(){
  
        let cad = ""

        for(let [clave,valor] of this.notas_curso){
            cad += clave + ":" + valor + " "
        }
        return cad
    }


    imprimirAlumno(){
        
        return this.nombre + " " + this.apellido + " " + this.dni + " " + this.fecha_nac + " " + this.curso + " " + this.datosNotas()
    }



    notaMedia(){
        var notas = [...this.notas_curso.values()]
        var media = (notas.reduce((total, num) => total + num)) / notas.length

        return media
    }

    
    mejorNota(){
        var notas = [...this.notas_curso.values()]
        var arrNotas = [...this.getNotas()]

        console.log(notas.sort((a,b) => b - a))

        return arrNotas.filter(nota => nota[1] == notas[0])
    }



    getCurso(){
        return this.curso
    }

    getNotas(){
        return this.notas_curso
    }


    getEdad(){
        var hoy = new Date().getFullYear()
        var fechaAño = new Date(this.fecha_nac).getFullYear()

        return hoy - fechaAño
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