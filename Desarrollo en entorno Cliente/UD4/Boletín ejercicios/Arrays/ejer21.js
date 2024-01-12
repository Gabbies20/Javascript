//EJER 19

/*
usuario ="n"
usuarios = []
while(usuario != ""){
    usuario = prompt("Introduzca los datos del usuario(nombre,apellido,dni,email,fecha de nacimiento)");
    usuarioArray = usuario.split(",");

    if(usuarioArray[0] != ""){
        usuarios.push(usuarioArray);
    }
   

}
*/

// Usuarios creados para ahorrar tiempo a la hora de probar el programa
usuarios = [
    ["Pepe", "Antonio", "w5","pepe@gmail.com","1994-06-25"],
    ["Manolo", "Antonio", "w6","manolo@gmail.com","2010-06-25"],
    ["Marta", "Alfonso", "w7","marta@gmail.com","2005-06-25"]
]
console.log(usuarios);


menu = ""

while(menu == ""){

    menu = prompt("1) Mayor de edad\n"
                + "2) Menor de edad\n"
                + "3) Modifica Datos\n"
                + "4) Elimina usuario\n")

    switch (menu) {
        case "1":
            abrirVentana(usuarios.filter(mayoresEdad))
            break;

        case "2":
            abrirVentana(añosMayoria(usuarios))
            break;

        case "3":
            console.log(modificarUsuario())
            break;

        case "4":
            console.log(eliminarUsuario())
            break;
        default:
            break;
    }
}



//a. Filtra los usuarios mayores de edad
function mayoresEdad(usuarioEdad){
    usuarioEdad = new Date(usuarioEdad[4])
    hoy = new Date()
    //Obtenemos la edad de la persona
    edad =  hoy.getFullYear() - usuarioEdad.getFullYear() 

    return edad > 18

}

//b. Filtra los usuarios menores de edad
function menoresEdad(usuarioEdad){
    usuarioEdad = new Date(usuarioEdad[4])
    hoy = new Date()
    //Obtenemos la edad de la persona
    edad =  hoy.getFullYear() - usuarioEdad.getFullYear() 

    return edad < 18
}



//b. Calcula los años y dias que le faltan a un usuario para la mayoria de edad
function añosMayoria(usuarios){
    //Mete en un array los usuairos menores de edad
    usuariosMenores = usuarios.filter(menoresEdad)
   
    hoy = new Date()

    //Variables para pasar de milisegundos a dias
    miliPorMinuto = 1000 * 60
    miliPorHora = miliPorMinuto * 60
    miliPorDia = miliPorHora * 24 
    
    //Array donde almacenaremos los años y dias que les faltan a cada usuario para la mayoria de edad
    mayoria = []
    
    //Recorremos el array de con losusuarios menores
    for(i = 0; i < usuariosMenores.length; i++){

        //Fecha de nacimiento del usuario en milisegundos
        usuarioEdad = new Date(usuariosMenores[i][4])
        //Calculamos la edad del usuario en milisegundos
        edad =  hoy - usuarioEdad

        //Pasamosla edad de milisegundos a dias
        edadDias = Math.floor(edad /miliPorDia )

        //Obtenenos los dias faltantes para la mayoria de edad del usuario
        diasParaMayoria= Math.floor((18*360) - edadDias )

        //Obtenemos los años para la mayoria de edad del usuario
        añosParaMayoria = Math.floor(diasParaMayoria / 360)

        //Obtenemos los dias restantes dentro del ultimo año para la mayoria de edad del usuario
        diasRestantes = Math.floor(diasParaMayoria % 360)

      //Añadimos la informacion al array "mayoria"
       mayoria.push(" A "+ usuariosMenores[i][0] + " " + usuariosMenores[i][1] + " le quedan " + añosParaMayoria + " años y " 
       +  diasRestantes + " dias para ser mayor de edad")
        
    }
    return mayoria
}

//(a,b). Abre una ventana con la información que se le pasa como parámetro
function abrirVentana(edad) {
    var ventana
    
    ventana = window.open("", "MsgWindow", "height=200,width=300, location=yes,resizable=yes,scrollbars=yes,top=0,left=0,");

    ventana.document.write(edad);
}


//c Busca usuario por dni
function opcionDni(usuarios){
    dni = prompt("Introduzca el dni del usuario");
    buscaDNI = (usuarioDni) => usuarioDni[2] ==  dni;
    d = usuarios.filter(buscaDNI)
    return d;
}

//c Modifica al usuario por su dni
function modificarUsuario(){

    // Se solicita el cambo a cambiar y se almacenará en un entero
    datoAntiguo = parseInt(prompt("¿Que dato deseas modificar:? \n"
                            + "1. Nombre \n"
                            + "2. Apellido \n"
                            + "3. DNI \n"
                            + "4. Email \n"
                            + "5. Fecha \n"))

    // Se solicita el valor nuevo del campo
    datoNuevo = prompt("Introduzca el nuevo valor: ")

    //Se almacena en un array el usuario filtrado por su dni
    usuario = opcionDni(usuarios)
    u = usuario[0]

    // Se cambia el valor del campo seleccionado por el nuevo
    u.splice(datoAntiguo-1,1,datoNuevo)
    console.log(u)

    // Se sobreescribe el array de usuarios con el nuevo valor
    for (i = 0; i < usuarios.length; i++){
        if(u[2] == usuarios[i][2]){
            usuarios.splice(i,1,u)
        }
    }
    
    return usuarios
}


//Elimina al usuario por su dni
function eliminarUsuario(){
    usuario = opcionDni(usuarios)
    u = usuario[0][2]

    //Se pide confirmación antes de eliminar
    confirmacion = prompt("¿Está seguro que decea eliminar al usuario " + usuario[0][0] + "? (s/n)")

    //Si la respuesta es aformativa se eliminará al usuario, sino se enviará un mensaje por la consola
    if (confirmacion == "s")   { 
        for (i = 0; i < usuarios.length; i++){
            if(u == usuarios[i][2]){
                usuarios.splice(i,1)
            }
        }
        return usuarios
    }
    else{
        return "Eliminación abortada"
    }

}
