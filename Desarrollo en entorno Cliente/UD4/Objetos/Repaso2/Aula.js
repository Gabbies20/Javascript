class Aula{
    constructor(alumnos){
        this.alumnos = alumnos
    }


    buscaDNI(dni){
        return this.alumnos.find(alumno => alumno.getDNI() == dni)
    }


    ordenarNota(dni){
        var arrNotas = [...this.buscaDNI(dni).getNotas()]
        arrNotas.sort((a,b) => b[1] - a[1])
        return arrNotas
    }

    ordenaApellido(){
        return this.alumnos.sort((a,b) => a.getApellido().localeCompare(b.getApellido()))
    }

    imprimirAlumnos(){
        for (var alumno of this.alumnos){
            console.log(alumno.imprimirAlumno())
        }
    }


    mayoresEdad(){
        return this.alumnos.filter(alumno => alumno.mostrarAños() >= 18)
    }


    menoresEdad(){
        var menores = this.alumnos.filter(alumno => alumno.mostrarAños() < 18)
        var datos = ""
        for(var alumno of menores){
            var diasFaltantes = (18*364) - alumno.getEdadDias()
            var añosMayoria = Math.floor(diasFaltantes / 364)
            var diasMayoria = Math.floor(diasFaltantes % 364)
            datos += "A " + alumno.getNombre() + " le quedan " + añosMayoria + " años y " + diasMayoria 
            + " dias para la mayoria de edad \n"
        }

        return datos
     
    }
}