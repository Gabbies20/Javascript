class Aula{
    constructor(alumno){
        this.alumno = alumno
    }


     buscarDni(dni){
        var resp = this.alumno.find(alumno => alumno.getDNI() == dni)

        return resp
     }

     ordenaNota(dni){
        var arrNotas = [...this.buscarDni(dni).getNotas()]
    
         arrNotas.sort((a,b) => b[1] - a[1]);
     
         console.log(arrNotas)

    }


    ordenaApellido(){
        return this.alumno.sort((a, b) => a.apellido.localeCompare(b.apellido));
    }

    imprimirAlumnos(){
        
        for(let i of this.alumno){
            console.log(i.getNombre() + " " + i.getApellido() + " " + i.getDNI() + " " + i.getFecha_nac() + " " 
            + i.getCurso() + " " + "( "+ i.datosNotas() + ")" + "\n")
        }
  
      
    }
}