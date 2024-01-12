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




//EJER 20
menu = ""
while(menu != "4"){

    menu = prompt("1) Buscar apellidos\n"
                + "2) Buscar por dni\n"
                + "3) Buscar por edad\n"
                + "4) Salir")

    switch (menu) {
        case "1":
            alert(opcionApellido(usuarios))
            break;

        case "2":
            alert(opcionDni(usuarios))
            break;

        case "3":
            alert(opcionEdad(usuarios))
            break;
    
        default:
            break;
    }
}


//Busqueda por apellido
function opcionApellido(usuarios){
    apellido = prompt("Introduzca el apellido del usuario");
    buscaApellido = (usuarioApellido) => usuarioApellido[1] ==  apellido;
    d = usuarios.filter(buscaApellido)
    return d;
}


//Busqueda por DNI
function opcionDni(usuarios){
    dni = prompt("Introduzca el dni del usuario");
    buscaDNI = (usuarioDni) => usuarioDni[2] ==  dni;
    d = usuarios.filter(buscaDNI)
    return d;
}

//Busqueda por Edad
function opcionEdad(usuarios){
    //Guarda la edad del usuario
    preguntaEdad = parseInt(prompt("Introduzca la edad del usuario"))
    //Array que guardará los usuarios que coincidan con la edad
    edadUsario = []

    for (i = 0; i < usuarios.length; i++){
        //Convertimos la fecha de nacimiento a tipo fecha
        edadBac = new Date(usuarios[i][4])
        hoy = new Date()
        //Obtenemos la edad de la persona
        edad =  hoy.getFullYear() - edadBac.getFullYear() 
        
        //Agregará al array todas las edades que coincidan
        if(preguntaEdad == edad){
            edadUsario.push(usuarios[i])
        }
    }

    return edadUsario;
}
