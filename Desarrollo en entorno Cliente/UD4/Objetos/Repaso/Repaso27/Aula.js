class Aula{
    constructor(alumnos){
        this.alumnos = alumnos
    }


    buscaDNI(dni){
        return this.alumnos.find(alumno => alumno.getDNI() == dni)
    }


    ordenarNota(dni){
        var arrNotas = [...this.buscaDNI(dni).getNotas()]
        arrNotas.sort((a,b) => b[1] - a[1]);

        console.log(arrNotas)
    }


    ordenaApellido(){
        return this.alumnos.sort((a,b) => a.getApellido().localeCompare(b.getApellido()))
    }


    imprimirAlumnos(){
        for(let i of this.alumnos){


            console.log(i.getNombre() + " " + i.getApellido() + " " + i.getDNI() + " " + i.getFecha_nac() + " " 
            + i.getCurso() + " " + "( "+ [...i.getNotas()] + ")" + "\n")
        }
    }


    mayoresEdad(){
        return this.alumnos.filter(alumno => alumno.getAños() >= 18)

    }

    menoresEdad(){
        var usuariosMenores = this.alumnos.filter(alumno => alumno.getAños() < 18)
        var datos = ""

        for (let i of usuariosMenores){

            var diasMayoria = (18 * 364) - i.getEdadDias()
            var añosFaltantes = Math.floor(diasMayoria / 364)
            var diasFaltantes = Math.floor(diasMayoria % 364)

            datos += "A " + i.getNombre() + " le quedan " + añosFaltantes + " años y " + diasFaltantes 
            + " dias para la mayoria de edad \n"
        }
    
        return datos
    }



}