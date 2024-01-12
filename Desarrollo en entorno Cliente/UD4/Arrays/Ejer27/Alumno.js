class Alumno extends Persona{
    constructor(nombre,apellido,dni,fecha_nac,curso,notas_curso){
        super(nombre,apellido,dni,fecha_nac)
        /*
        this.nombre = nombre;
        this.apellido = apellido
        this.dni = dni
        this.fecha_nac = fecha_nac

        */
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
        let media = 0
        for(let valor of this.notas_curso.values()){
            media += valor
        }
        return media / this.notas_curso.size
    }

    
    mejorNota(){
        var mejorNota = -1;
        var moduloNota = "";

        for(let [clave,valor] of this.notas_curso){
            if(valor > mejorNota){
                mejorNota = valor
                moduloNota = clave + ":" + valor + " "

            }else if(valor == mejorNota){
                mejorNota = valor
                moduloNota += clave + ":" + valor + " "
            }  
        
        }

        return moduloNota
    }



    getCurso(){
        return this.curso
    }

    getNotas(){
        return this.notas_curso
    }
}