usuarios = [
    ["Pepe", "Antonio", "w5","pepe@gmail.com","1994-06-25"],
    ["Manolo", "Antonio", "w6","manolo@gmail.com","2011-06-25"],
    ["Marta", "Alfonso", "w7","marta@gmail.com","2010-06-25"]
]
//console.log(usuarios);


//console.log(buscarApellido('Antonio'))

//console.log(buscarDNI('w6'))

//console.log(buscarEdad("28"))


function buscarApellido(apellido){
    return usuarios.filter(usuario => usuario[1] == apellido)
}

function buscarDNI(dni){
    return usuarios.find(usuario => usuario[2] == dni)
}

function buscarEdad(edad){
    return usuarios.filter(usuario => convertirAAño(usuario[4]) == edad)
}

//Convierte una fecha en la edad del usuario en años
function convertirAAño(fecha){
    edad = new Date(fecha).getFullYear()
    hoy = new Date().getFullYear()
    
    return hoy - edad
}



//Ejer 21

var ventana
//Mostrar alumnos mayores de edad
mayoresEdad = () => usuarios.filter(usuario => convertirAAño(usuario[4]) >= 18)
//console.log(mayoresEdad())

//Mostrar los alumnos en una nueva ventana
//abrirVentana(mayoresEdad())
function abrirVentana(usuario){
    ventana =  window.open("", "MsgWindow", "height=200,width=300, location=yes,resizable=yes,scrollbars=yes,top=0,left=0,")
     ventana.document.write(...usuario)
}


function convertirDias(edad){
    miliPorMinuto = 1000 * 60
    miliPorHora = miliPorMinuto * 60
    miliPorDia = miliPorHora * 24 

    hoy = new Date()
    usuarioEdad = new Date(edad)
    edad = hoy - usuarioEdad

    return Math.floor(edad / miliPorDia)
}

//menoresEdad()

function menoresEdad(){
    usuariosMenores = usuarios.filter(usuario => convertirAAño(usuario[4]) < 18)
    datos = ""
    for (i of usuariosMenores){
        
        diasMayoria = (18*364) - convertirDias(i[4])
        añosFaltantes = Math.floor(diasMayoria / 364)
        diasFaltantes = diasMayoria % 364
        datos += añosFaltantes + " años y " + diasFaltantes + " dias"
    }

    ventana =  window.open("", "MsgWindow", "height=200,width=300, location=yes,resizable=yes,scrollbars=yes,top=0,left=0,")
    ventana.document.write(datos)
} 

//modificarDatos()



function modificarDatos(){
    
    //Elige la opción, cada valor representa su respectiva posicion en el array +1
    datoAntiguo = parseInt(prompt("¿Que dato deseas modificar:? \n"
                                + "1. Nombre \n"
                                + "2. Apellido \n"
                                + "3. DNI \n"
                                + "4. Email \n"
                                + "5. Fecha \n"))

    //Almacenamos el nuevo valor
    datoNuevo = prompt("Introduzca el nuevo valor: ")

    //Obtenemos el usuario por su dni
    dniUsuario = buscarDNI(prompt("Introduzca el dni del usuario"))

    //Indice en el array del usuario en concreto
    indiceUsuario = usuarios.indexOf(dniUsuario)
    
    //Modificamos el valor de ese usuario
    dniUsuario.splice(datoAntiguo-1,1,datoNuevo)
    
    //Reemplazamos el usuario antiguo por el modificado
    usuarios.splice(indiceUsuario,1,dniUsuario)
   
    console.log(usuarios)
    
}





eliminarUsuario()

function eliminarUsuario(){
    dniUsuario = buscarDNI(prompt("Introduzca el dni del usuario"))
    indiceUsuario = usuarios.indexOf(dniUsuario)

    confirmacion = prompt("¿Seguro que decea eliminar al usuario? " + dniUsuario[0] + " (s/n)")

    if(confirmacion == "s"){
        //Indice en el array del usuario en concreto
        usuarios.splice(indiceUsuario,1)
    }else{
         console.log("Eliminación abortada")
    }


    console.log(usuarios)
}

