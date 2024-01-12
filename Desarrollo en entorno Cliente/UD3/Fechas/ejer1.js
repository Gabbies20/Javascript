fechaNac = new Date(prompt("Introduzca la fecha de su nacimiento"))
fechaHoy = new Date()

    if (fechaHoy < fechaNac){
        console.log("La fecha introducida aún no ha llegado")
    }else{
        console.log("Fecha correcta")
    }

