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


    mayoresEdad(){
        return this.alumno.filter(alumno => alumno.getEdad() >= 18)
    }

  
    menoresEdad(){
        var usuariosMenores = this.alumno.filter(alumno => alumno.getEdad() < 18)
        var datos = ""

        for (let i of usuariosMenores){
            
            var diasFaltantes= (18 * 364)  -  i.getEdadDias()
            var añosMayoria = Math.floor(diasFaltantes / 364)
            var diasMayoria = Math.floor(diasFaltantes % 364)

            datos += "A " + i.getNombre() + " le quedan " + añosMayoria + " años y " + diasMayoria 
            + " dias para la mayoria de edad \n"
        }

        return datos
    }


    imprimirAlumnos(){
        
        for(let i of this.alumno){
            console.log(i.getNombre() + " " + i.getApellido() + " " + i.getDNI() + " " + i.getFecha_nac() + " " 
            + i.getCurso() + " " + "( "+ i.datosNotas() + ")" + "\n")
        }
  
      
    }
}